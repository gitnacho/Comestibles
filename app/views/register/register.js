var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");

var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

exports.loaded = function (args) {
    var page = args.object;
    page.bindingContext = user;
};

function completeRegistration() {
    user.register()
        .then(function () {
            dialogsModule
                .alert("Tu cuenta se creó satisfactoriamente.")
                .then(function () {
                    frameModule.topmost().navigate("views/login/login");
                });
        }).catch(function (error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Desafortunadamente no pude crear tu cuenta.",
                    okButtonText: "Aceptar"
                });
        });
}

exports.register = function () {
    completeRegistration();
};
