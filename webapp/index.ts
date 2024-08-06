import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "it.davidegiacomini.view.App",
    id: "app"
}).then(function (view) {
    view.placeAt("content");
});
