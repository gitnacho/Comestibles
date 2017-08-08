var frameModule = require("ui/frame");
var UserViewModel = require("../../shared/view-models/user-view-model");
var page;

var user = new UserViewModel({
  email: "usuario@dominio.com",
  password: "contraseña"
});

exports.loaded = function (args) {
  page = args.object;
  page.bindingContext = user;
};

exports.signIn = function () {
  user.login();
};

exports.register = function () {
  var topmost = frameModule.topmost();
  topmost.navigate("views/register/register");
};
