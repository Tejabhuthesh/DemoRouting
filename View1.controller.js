sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("demoroutingid.demorouting.controller.View1", {
           onInit: function () {
                var path=jQuery.sap.getModulePath("demoroutingid.demorouting","/model/Employe details.json")
                 let oModel = new sap.ui.model.json.JSONModel(path);
                  this.getView().setModel(oModel,"Data1");
              },
               onRowClick: function(evt) {
                var key=evt.oSource.mProperties.text;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    loRouter.navTo("View2",{KeyID:key});
        
              }
        });
    });