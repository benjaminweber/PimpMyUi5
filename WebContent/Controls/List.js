"use strict";

sap.ui.define(["sap/m/List"], function (List) {
    var _this = this;

    var oList = List.extend("ext.Controls.List", {
        metadata: {
            properties: {
                minHeight: { type: "number", defaultValue: 1 }
            }
        },

        renderer: function renderer(oRm, oControl) {
            var aItems = oControl.getItems();
            var minContainerHeight = aItems.length * oControl.getMinHeight();

            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oControl);
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((aItems.forEach(function (element) {
                    (function () {
                        oRm.renderControl(element);
                    })();
                }, _this)) || "");
                oRm.write("</div>");
            })();
        }
    });

    oList.prototype.init = function () {
        if (List.prototype.init) {
            List.prototype.init.apply(this, arguments);
        }
        this.attachBrowserEvent("scroll", function () {
            console.log("scrolling");
        });
    };

    return oList;
});
//# sourceMappingURL=List.js.map
