var frameModule = require("ui/frame");
var UserViewModel = require("../../shared/view-models/user-view-model");
var dialogsModule = require("ui/dialogs");
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
  user.login()
    .catch(function (error) {
      console.log(error);
      dialogsModule.alert({
        message: "Desafortunadamente no pude encontrar tu cuenta.",
        okButtonText: "Aceptar"
      });
      return Promise.reject();
    })
    .then(function () {
      frameModule.topmost().navigate("views/list/list");
    });
};

exports.register = function () {
  var topmost = frameModule.topmost();
  topmost.navigate("views/register/register");
};
