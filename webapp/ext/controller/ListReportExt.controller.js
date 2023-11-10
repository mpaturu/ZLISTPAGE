sap.ui.controller("com.lb.flp.tracker.zlistpage.ext.controller.ListReportExt", {
    onInit: function (oEvent) {
        if (!this._sIdPrefix) {
            this._sIdPrefix =
                "com.lb.flp.tracker.zlistpage::sap.suite.ui.generic.template.ListReport.view.ListReport::ZFLP_C_USERLOG--";
        }
    },
    onAfterRendering: function (oEvent) {
       var oContentTable = this.byId(this._sIdPrefix + "GridTable");
        oContentTable.attachBusyStateChanged(this._onBusyStateChanged);
    },
    _onBusyStateChanged: function (oEvent) {
        var bBusy = oEvent.getParameter("busy");
        if (!bBusy && !this._bColumnOptimizationDone) {
            this._bColumnOptimizationDone = true;
            var oTable = oEvent.getSource();
            var aColumns = oTable.getColumns();
            for (var i = 0; i < aColumns.length; i++) {
                var sColumn = aColumns[i].getLabel().getText();
                aColumns[i].setWidth("17%");
            }
        }
    }
});