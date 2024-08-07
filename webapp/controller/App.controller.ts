import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
    public onChangeLanguage(oEvent: Event, language: string): void {
        
        this.getOwnerComponent()?.setModel(new ResourceModel({
            bundleName: "it.davidegiacomini.i18n.i18n",
            bundleLocale: language
        }), "i18n");
    }
};