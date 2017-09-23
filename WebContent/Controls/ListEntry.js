"use strict";

sap.ui.define(["sap/m/ListItemBase", "./ReactChildOfListEntry"], function (Control, ReactChildOfListEntry) {
    'use strict';

    var oListEntry = Control.extend("ext.Controls.ListEntry", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "" },
                title: { type: "string", defaultValue: "" },
                subtitle: { type: "string", defaultValue: "" },
                color: { type: "string", defaultValue: "transparent" }
            }
        },

        /**
         * arrow functions can be used
         */
        onclick: function onclick() {
            console.log("hey, just clicked an item");
        },

        /**
         * Using JSX
         */
        renderer: function renderer(oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.writeClasses();
            oRm.write(">");
            oRm.write("</div>");
        }
    });

    oListEntry.prototype.onAfterRendering = function () {
        if (Control.prototype.onAfterRendering) {
            Control.prototype.onAfterRendering.apply(this, arguments);
        }

        //here we add our ReactComponent
        var someProp = { text: "someText" };
        ReactDOM.render(React.createElement(
            "div",
            null,
            React.createElement(ReactChildOfListEntry, someProp)
        ), this.$()[0] //this is where we want to render
        );
    };

    oListEntry.prototype.init = function () {
        if (Control.prototype.init) {
            Control.prototype.init.apply(this, arguments);
        }
    };

    return oListEntry;
});
//# sourceMappingURL=ListEntry.js.map
