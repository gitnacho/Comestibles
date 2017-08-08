var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var page;

var pageData = new observableModule.fromObject({
  groceryList: new ObservableArray([{
      name: "Azúcar"
    },
    {
      name: "Harina"
    },
    {
      name: "Huevos"
    },
    {
      name: "Mantequilla"
    }
  ])
});

exports.loaded = function (args) {
  page = args.object;
  page.bindingContext = pageData;
};
