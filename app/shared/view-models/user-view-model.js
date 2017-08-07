var config = require("../../shared/config");
var fetchModule = require("fetch");
var observableModule = require("data/observable");

function User(info) {
    info = info || {};

    // Puedes agregar propiedades a observables durante su creación
    var viewModel = new observableModule.fromObject({
        email: info.email || "",
        password: info.password || ""
    });

    viewModel.register = function () {
        return fetchModule.fetch(config.apiUrl + "Users", {
            method: "POST",
            body: JSON.stringify({
                Username: viewModel.get("email"),
                Email: viewModel.get("email"),
                Password: viewModel.get("password")
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleErrors);
    };

    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = User;
