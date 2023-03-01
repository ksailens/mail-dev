const fs = require('fs');
var twig = require('twig'),
  express = require('express'),
  app = express();
const path = require('path');
const {transporter, mailOptions} = require('./mail');
const router = express.Router();

twig.cache(false);
twig.extendFunction('greeting', function (value, times) {
  return value;
});
app.set('views', path.join(__dirname, '/struct'));
app.set('twig options', { strict_variables: false });
app.set('view engine', 'twig');
app.set('view cache', false);

function renderTemplate(url) {
  const items = url.split('/');
  const template = fs.readFileSync(
    path.resolve('./', ...items.slice(0, items.length - 1), items[items.length - 1] + '.twig'),
    'utf-8',
  );
  const data = JSON.parse(
    fs.readFileSync(
      path.resolve('./', ...items.slice(0, items.length - 1), items[items.length - 1] + '.json'),
      'utf-8',
    ),
  );
  return { template, data };
}

function sendEmail(res, err, html) {
  console.log('sending email...');
  transporter.sendMail({
    ...mailOptions,
    html
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  if (err) {
    console.error(err);
  }
  res.redirect('/');
}

router.get('/', function (req, res) {
  // res.sendFile('root/body.html', tourData2);
  res.sendFile(path.join(__dirname+'/body.html'));
});

router.get('/about', function (req, res) {
  const url = 'struct/alfa-tour/booking';
  const { data } = renderTemplate(url);
  res.render(path.join(`${__dirname}/${url}.twig`), data);
});

router.get('/about/mail', function (req, res) {
  const url = 'struct/alfa-tour/booking';
  const { data } = renderTemplate(url);
  res.render(path.join(`${__dirname}/${url}.twig`), data, function (err, html) {
    sendEmail(res, err, html)
  });
});

app.use('/', router);
app.listen(3042);
