import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import Component from "../Component";

/**
 * @name it.davidegiacomini.controller
 */
export default class HomeController extends Controller {
    onRedirect(): void {
        MessageToast.show("Redirect");
    }

    onPressContact(): void {
        const router = (this.getOwnerComponent() as Component).getRouter();
        router.navTo("contact");
    }
};
