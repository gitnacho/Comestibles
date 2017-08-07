var frameModule = require("ui/frame");

exports.loaded = function () {
  console.log("¡Hola!");
};

exports.signIn = function () {
  alert("Iniciando sesión");
};

exports.register = function () {
  var topmost = frameModule.topmost();
  topmost.navigate("views/register/register");
};
