import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";
import History from "sap/ui/core/routing/History";

export default class ContactController extends Controller {
    public onNavHome(): void {
        (this.getOwnerComponent() as Component).getRouter().navTo("home");
    }

    public onNavBack(): void {
        const history = History.getInstance();
        const previousHash = history.getPreviousHash();

        if (previousHash !== undefined) {
            window.history.go(-1);
        } else {
            (this.getOwnerComponent() as Component).getRouter().navTo("", {}, true);
        }
    } 
}