var twig = require('twig'),
  express = require('express'),
  app = express();
var nodemailer = require('nodemailer');

const booking_dumb = {
  order: {
    billing_number: 12736564,
    created: '10.12.2020',
    amount_total_sum: 94,
    currency: 'RUB',
    service_time_limit: '17:50 19.08.2020 MSK'
  },
  siteName: 'Iraero',
  key: '084jdfo02-siq03275jkf83',
  email: 'devsevsergius@gmail.com',
  payLink: 'http://s2.front.bipfly.deac/',
  baseSrc: 'https://iraero.crpo.su/',
  feedbackLink: 'https://bipfly.de',
  lang: 'EN',
  ticket: {
    locator: '32462323',
    carrier_name_ru: 'Aeroflot',
    carrier_name_en: 'Aeroflot',
    carrier_code: 'SU'
  },
  passengers: [
    {
      first_name: 'Ivan',
      last_name: 'Nikolaev',
      birthday: '12.12.1999',
      ticket_number: '1298437',
      totalInsurances: []
    },
    {
      first_name: 'Sergey',
      last_name: 'Petrov',
      birthday: '12.12.1999',
      ticket_number: '1298437',
      totalInsurances: []
    },
    {
      first_name: 'Andrey',
      last_name: 'Stepanov',
      birthday: '12.12.1999',
      ticket_number: '1298437',
      totalInsurances: []
    },
    {
      first_name: 'Vladimir',
      last_name: 'Rojchekno',
      birthday: '12.12.1999',
      ticket_number: '1298437',
      totalInsurances: []
    },
    {
      first_name: 'Ivan',
      last_name: 'Nikolaev',
      birthday: '12.12.1999',
      ticket_number: '1298437',
      totalInsurances: []
    },
    {
      first_name: 'Sergey',
      last_name: 'Petrov',
      birthday: '12.12.1999',
      ticket_number:'1298437',
      totalInsurances:[]
    },
    {
      first_name:'Andrey',
      last_name:'Stepanov',
      birthday:'12.12.1999',
      ticket_number:'1298437',
      totalInsurances:[]
    },
    {
      first_name:'Vladimir',
      last_name:'Rojchekno',
      birthday:'12.12.1999',
      ticket_number:'1298437',
      totalInsurances:[]
    }
  ],
  flights: [
    {
      air_dep_title: 'Moscow',
      air_dep_title_en: 'MoscowEn',
      airport_dep_code: 'MOW',
      airport_arr_code: 'LON',
      air_dep_title_de: 'MoscowDe',
      air_arr_title: 'London',
      air_arr_title_en: 'LondonEn',
      air_arr_title_de: 'LondonDe',
      time_dep: '11:30',
      time_arr: '14:30',
      date_dep: '10.12.2020',
      date_arr: '15.12.2020',
      supplier_code:'SU',
      carrier_code:'SU',
      flight_number:'1726',
      stops:[
        {city_title:'Moscow', duration:{hour:12, minute:30}},
        {city_title:'London', duration:{hour:12, minute:30}}
      ],
      aircraft:'Sukhoi Superjet SU-100-95',
    }
  ]
}

const booking_dump_ak = {
  lang: "ru",
  baseSrc: "",
  order: {
    id: 248469,
    created: "16.10.2020",
    billing_number: 1252019374,
    currency: "RUB",
    status: {
      code:"Ticketed",
      title: "Ожидает оплаты"
    },
    service_time_limit: "17:03, 14 сентября 2020",
    additionalProducts: {},
    amount_total_sum: 8353
  },
  ticket: {
    locator: "F86IMF",
    carrier_name_ru: "Победа",
    carrier_name_en: "Pobeda",
    carrier_code: "DP"
  },
  routes: [
    [
      {
        air_dep_title: "Внуково",
        air_arr_title: "Краснодар",
        dep_city: "Москва",
        arr_city: "Краснодар",
        airport_dep_code: "VKO",
        airport_arr_code: "KRR",
        time_dep: "09:00",
        time_arr: "11:10",
        date_dep: "31.01.2021",
        date_arr: "01.02.2021",
        country_dep: "Россия",
        country_arr: "Россия",
        date_dep_formated: "31 января 2021",
        date_arr_formated: "01 февраля 2021",
        carrier_code: "DP",
        carrier_title: "Pobeda",
        flight_number: "155",
        aircraft: "",
        stops:{},
        supplier_code: "DP",
        baggage: "1P10K"
      },
      {
        air_dep_title: "Внуково",
        air_arr_title: "Краснодар",
        dep_city: "Москва",
        arr_city: "Краснодар",
        airport_dep_code: "VKO",
        airport_arr_code: "KRR",
        time_dep: "09:00",
        time_arr: "11:10",
        date_dep: "31.01.2021",
        date_arr: "01.02.2021",
        country_dep: "Россия",
        country_arr: "Россия",
        date_dep_formated: "31 января 2021",
        date_arr_formated: "01 февраля 2021",
        carrier_code: "DP",
        carrier_title: "Pobeda",
        flight_number: "155",
        aircraft: "",
        stops:{},
        supplier_code: "DP",
        baggage: "1P10K"
      }
    ],
    [
      {
        air_dep_title: "Владивосток",
        air_arr_title: "Внуково",
        dep_city: "Владивосток",
        arr_city: "Москва",
        airport_dep_code: "VKO",
        airport_arr_code: "KRR",
        time_dep: "09:00",
        time_arr: "11:10",
        date_dep: "10.02.2021",
        date_arr: "11.02.2021",
        country_dep: "Россия",
        country_arr: "Россия",
        date_dep_formated: "10 февраля 2021",
        date_arr_formated: "11 февраля 2021",
        carrier_title: "Pobeda",
        carrier_code: "DP",
        flight_number: "155",
        aircraft: "",
        stops:{},
        supplier_code: "DP",
        baggage: "1P10K"
      },
    ]
  ],
  passengers: [
    {
      first_name: "OLGA",
      last_name: "IVASHENKO",
      doc_num: 4407129406,
      birthday: "22.10.1990",
      ticket_number: "",
      fareFamily_name: "ECONOM PLATINUM",
      type: {
        code: 'adt',
        title: 'Взрослый'
      },
      tariff_type: "Эконом Минимум",
      place: "15А",
      hand_luggage: {
        piece: 1,
        weight: 1
      },
      luggage: {
        piece: 1,
        weight: 1
      },
      is_refund: false,
      is_change: true,
      gender: "M",
      totalInsurances: {}
    },
    {
      first_name: "IVAN",
      last_name: "PONOMARENKO",
      doc_num: 3123123123,
      birthday: "22.10.1990",
      ticket_number: "",
      fareFamily_name: "",
      type: {
        code: 'adt',
        title: 'Взрослый'
      },
      tariff_type: "Эконом Минимум",
      place: "15А",
      hand_luggage: {
        piece: 1,
        weight: 1
      },
      luggage: {
        piece: 1,
        weight: 1
      },
      is_refund: false,
      is_change: true,
      gender: "M",
      totalInsurances: {}
    }
  ],
  prices: {
    total_price: 32670,
    tickets: {
      total: 25000,
      tariff: 18500,
      taxes: 3000,
      fees: 2500
    },
    insurances: 123,
    total_insurances: {
      "trip_cancel_corona_virus":{
        "code":"trip_cancel_corona_virus",
        "title":"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 \u041a\u043e\u0432\u0438\u0434 + \u041e\u0442\u043c\u0435\u043d\u0430 \u043f\u043e\u0435\u0437\u0434\u043a\u0438",
        "price":8000
      },
      "returning_passengers_corona_virus":{
        "code":"returning_passengers_corona_virus",
        "title":"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0434\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0445\u0441\u044f + \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 \u041a\u043e\u0432\u0438\u0434",
        "price":4000
      },
      "anti_tick":{
        "code":"anti_tick",
        "title":"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0410\u043d\u0442\u0438\u041a\u043b\u0435\u0449",
        "price":80
      },
      "anti_tick_and_medical":{
        "code":"anti_tick_and_medical",
        "title":"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0422\u0435\u043b\u0435\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 \u0410\u043d\u0442\u0438\u041a\u043b\u0435\u0449",
        "price":700
      },
      "bank_card":{
        "code":"bank_card",
        "title":"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u043a\u0430\u0440\u0442",
        "price":299
      },
      "medical":{
        "code":"medical",
        "title":"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0435 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u043a\u0443\u043f\u0438\u0431\u0438\u043b\u0435\u0442",
        "price":104
      },
      "flight":{
        "code":"flight",
        "title":"\u041f\u0430\u043a\u0435\u0442 \u043d\u0430 \u043f\u0435\u0440\u0435\u043b\u0435\u0442(akassa)",
        "price":510
      },
      "corona_virus_monthly":{
        "code":"corona_virus_monthly",
        "title":"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",
        "price":2246
      },
      "sber_health_all_doctors_12_month":{
        "code":"sber_health_all_doctors_12_month",
        "title":"\u0412\u0441\u0435 \u0432\u0440\u0430\u0447\u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u043d\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
        "price":4000
      },
      "sber_health_all_doctors_1_month":{
        "code":"sber_health_all_doctors_1_month",
        "title":"\u0412\u0441\u0435 \u0432\u0440\u0430\u0447\u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u043d\u0430 1 \u043c\u0435\u0441\u044f\u0446",
        "price":1600
      },
      "sber_health_all_doctors_3_month":{
        "code":"sber_health_all_doctors_3_month",
        "title":"\u0412\u0441\u0435 \u0432\u0440\u0430\u0447\u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u043d\u0430 3 \u043c\u0435\u0441\u044f\u0446\u0430",
        "price":2200
      }
    },
    additional_services: {
      total: 1,
      aeroexpress: 123,
      FlightChangesNotification: 64564
    }
  },
  promo: {},
  payLink: "https://www.aviakassa.ru/avia/checkout/AKV4TESTOWE1000000090VKOKZN20210216/TUA.DP.0.525.P0..-10.DP.155.KRR.202102161110.VKO.202102160900.0.OPROMO.130.0.TUA.0.1P10K_10.DP.567.KZN.202102161745.KRR.202102161520.0.OPROMO.145.0.TUA.0.1P10K/1252019374~748a5ab08f9ac400ba6d26006397416156878639",
  feedbackLink: "http://s2.actr-aviakassa-site.actr-front.deac/?showFeedbackForm=1&billing=1252019374&lang=ru",
  lkLink: "http://s2.ak-front-apps.actr-front.deac/",
  domain: "http://s2.actr-aviakassa-site.actr-front.deac/",
  aeroexpress: {}
}

const getSleepMail = {
  feedback_link: "http://s2.actr-aviakassa-site.actr-front.deac/?showFeedbackForm=1&billing=1252019374&lang=ru",
  lk_link: "http://s2.ak-front-apps.actr-front.deac/",
  domain: "http://s2.actr-aviakassa-site.actr-front.deac/",
  airport_name: "Домодедово", // русское название аэропорта
  dates: { // даты проживания в отеле
    check_in_date: "14.05.2021", // дата заезда
    check_in_time: "22:30", // время заезда
    check_out_date: "15.05.2021", // дата выезда (пустая строка, если равна дате заезда)
    check_out_time: "02:30" // время выезда
  },
  categories: [
    {
      category_name: "Верхняя двухместная капсула", // имя категории
      category_count: 2, // количество номеров
      terminal_name: "D", // имя терминала
      hotel_name: "Терминал D",
      is_sterile_zone: true
    },
    {
      category_name: "Нижняя одноместная капсула", // имя категории
      category_count: 1, // количество номеров
      terminal_name: "D", // имя терминала
      hotel_name: "Зона Аэроэкспресса",
      is_sterile_zone: false
    }
  ],
  tickets_owner_name: "Борисов Алексей Иванович",
  airport_hotel: {
    price: 123
  }
}

const getSleepVoucher = {
  domain: "http://s2.actr-aviakassa-site.actr-front.deac/", // домен
  dates: { // даты проживания в отеле
    check_in_date: "14.05.2021", // дата заезда
    check_in_time: "22:30", // время заезда
    reserved_hours: 3
  },
  category_name: "Верхняя двухместная капсула", // имя категории
  category_count: 2, // количество номеров
  terminal_name: "", // имя терминала
  hotel_name: "Терминал D",
  is_sterile_zone: true,
  tickets_owner_name: "Борисов Алексей Иванович",
  hotel_info: {
    hotel_phone: "+7-999-123-123-23",
    hotel_address: "Аэропорт Шереметьево, терминал D, 3 этаж, зал международных вылетов, рядом с Zone 51"
  }
}

var transporter = nodemailer.createTransport({
  // service: 'gmail',
  host: 'smtp.yandex.ru',
  auth: {
    // type: 'OAuth2',
    // user: 'devsevsergius@gmail.com',
    // clientId: '',
    // clientSecret: '',
    // accessToken: '',
    // refreshToken: ''
    user: 'ksailens',
    pass: '682500qW'
  }
});

var mailOptions = {
  from: 'ksailens@yandex.ru',
  to: 'ksailens@yandex.ru',
  subject: 'Sending Email using Node.js'
};

twig.cache(false);

app.set('twig options', { strict_variables: false });
app.set('view engine', 'twig');
app.set('view cache', false);

// app.get('/', function (req, res) {
//   res.render('./booking.twig', booking_dumb);
// });

app.get('/', function (req, res) {
  res.render('./ak_booking.twig', booking_dump_ak);
});

app.get('/booking_de', function (req, res) {
  res.render('./booking_de.twig', booking_dumb);
});

app.get('/iraero_booking', function (req, res) {
  res.render('iraero_booking.twig', booking_dumb);
});

app.get('/iraero_register', function (req, res) {
  res.render('iraero_register.twig', booking_dumb);
});

app.get('/iraero_recover', function (req, res) {
  res.render('iraero_recover.twig', booking_dumb);
});

app.get('/iraero_restore', function (req, res) {
  res.render('iraero_restore.twig', booking_dumb);
});
app.get('/get_sleep_mail', function (req, res) {
  res.render('get_sleep_mail.twig', getSleepMail);
});
app.get('/get_sleep_voucher', function (req, res) {
  res.render('get_sleep_voucher.twig', getSleepVoucher);
});

app.get('/sendEmail', function (req, res) {

  res.render(req.query.template, booking_dump_ak, function (err, html) {

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
    res.send(html);
  });
});

app.listen(3042);
