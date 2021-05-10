require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const passportLocal = require("passport-local");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var LocalStrategy = passportLocal.Strategy;

var connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "12344321",
  database: "e-ticaret",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Mysql Bağlantı Başarılı");
});
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
);

////////////////////////////////////////////////////
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      connection.query(
        "SELECT * FROM users WHERE email=?",
        [email],
        function (err, rows) {
          if (err) return done(null, { msg: err });
          if (rows.length <= 0)
            return done(null, { msg: "kullanıcı bulunamadı" });
          if (!bcrypt.compareSync(password, rows[0].password))
            return done(null, { msg: "şifre yanlış" });

          return done(rows[0], null);
        }
      );
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    function (err, rows) {
      done(err, rows[0]);
    }
  );
});

app.use(
  session({
    secret: "omerasim",
    resave: true,
    saveUninitialized: true,
    proxy: true,
    name: "kullanici_bilgileri",
  })
);

app.use(passport.initialize());
app.use(passport.session());

///////////////////////////////////////////////////////////////////////////

app.get("/api/populerurunler", (req, res) => {
  var sql = "SELECT * FROM urun ORDER BY satilma DESC LIMIT 4 ";
  connection.query(sql, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/api/yeniurunler", (req, res) => {
  var sql = "SELECT * FROM urun ORDER BY id ASC LIMIT 4 ";
  connection.query(sql, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/api/urun/detay/:id", (req, res) => {
  var id = req.params.id;
  var sql = "SELECT * FROM urun WHERE id=?";
  var insert = [id];
  connection.query(sql, id, (err, results, fields) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});

app.get("/api/yorumlar/:id", (req, res) => {
  var id = req.params.id;
  var sql = "SELECT * FROM yorumsema WHERE urun_id=?";
  connection.query(sql, id, (err, results, fields) => {
    if (err) throw err;
    else {
      console.log("SONUC", results);
      res.send(results);
    }
  });
});
app.post("/api/yorumekle", (req, res) => {
  var time = new Date();
  var yeniTarih =
    time.getDay() + "." + (time.getMonth() + 1) + "." + time.getFullYear();

  var sql =
    "INSERT INTO yorumsema(urun_id,isim,icerik,tarih,kullanici_id,yildiz,onay,dislike) VALUES(?,?,?,?,?,?,?,?)";
  var insert = [
    req.body.urun_id,
    req.body.isim,
    req.body.icerik,
    yeniTarih,
    req.body.kullanici_id,
    req.body.yildiz,
    req.body.onay,
    "0",
  ];
  connection.query(sql, insert, (err, results, fields) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});
///////////////////////////////////////////////////
app.post("/api/kullanici/olusturma", (req, res) => {});

app.post("/api/kullanici/giris", (req, res) => {});

app.get("/api/kullanici/cikis", (req, res) => {});

app.get("/api/kullanici/giriskontrol", (req, res) => {});

app.get("/api/kullanici/bilgiler", (req, res) => {});
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////

app.get("/api/kategori/:kategori_url/:bulundugu_sayfa", (req, res) => {
  var sayfa = req.params.bulundugu_sayfa;
  var kategori = req.params.kategori_url;
  var offset = (sayfa - 1) * 12;
  var secim = req.query.secim;
  var kriter = "";
  if (secim === "1") {
    kriter = "id";
  } else if (secim === "2") {
    kriter = "satilma";
  } else if (secim === "3") {
    kriter = "ind_fiyat";
  } else if (secim === "4") {
    kriter = "satilma";
  }
  console.log(kriter);

  var insert = [kategori, kriter, offset];
  var sql =
    "SELECT * FROM URUN WHERE kategori_url=? ORDER BY ? DESC LIMIT 12 OFFSET ? ";
  connection.query(sql, insert, (err, results, fields) => {
    console.log("İNSERT", insert);
    if (err) throw err;
    else {
      res.send(results);
      console.log("SQL SONUC", results);
    }
  });
});
app.get("/api/kategori/urun/sayisi/:kategori_url", (req, res) => {
  var kategori = req.params.kategori_url;
  var insert = [kategori];
  var sql = "SELECT * FROM URUN WHERE kategori_url=?";
  connection.query(sql, insert, (err, results, fields) => {
    if (err) throw err;
    else {
      res.send({ toplam: results.length });
    }
  });
});

/////////////////////////////////////////////////////////

app.listen(port || 8080);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send("hata");
  }
}

/// :satilma
/*

var satilma=req.params.satilma
if(satilma===1){
  satilma=id 
}
var insert = [kategori, offset,satilma];

  var sql = "SELECT * FROM URUN WHERE kategori_url=? LIMIT 3 OFFSET ? ORDER BY ?";

*/
