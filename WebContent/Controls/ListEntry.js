"use strict";

sap.ui.define(["sap/m/ListItemBase"], function (Control) {
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
            var sBackGroundColor = oControl.getColor();
            var sSubtitle = oControl.getSubtitle();
            var sText = oControl.getText();
            var sSubtitleClass = 'listEntrySubtitle';
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oControl);
                oRm.addClass("listEntry");

                (function (mS) {
                    var mStyles = mS || {};

                    if (mStyles instanceof Array) {
                        for (var i = 0; i < mStyles.length; ++i) {
                            if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                                oRm.addStyle(mStyles[i].name, mStyles[i].value);
                            }
                        }
                    } else {
                        for (var sKey in mStyles) {
                            if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                                oRm.addStyle(sKey, mStyles[sKey]);
                            }
                        }
                    }

                    oRm.writeStyles();
                })({ "background-color": sBackGroundColor });

                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oControl.getProperty("title") && (function () {
                    oRm.write("<div ");
                    oRm.addClass("listEntryTitle");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oControl.getProperty("title")) || "");
                    oRm.write("</div>");
                })()) || "");
                oRm.writeEscaped((sSubtitle && (function () {
                    oRm.write("<div ");

                    (function (mC) {
                        var mClasses = mC || {};

                        if (mClasses instanceof Array) {
                            for (var i = 0; i < mClasses.length; ++i) {
                                if (mClasses[i]) {
                                    oRm.addClass(mClasses[i]);
                                }
                            }
                        } else {
                            for (var sKey in mClasses) {
                                if (mClasses.hasOwnProperty(sKey) && mClasses[sKey]) {
                                    oRm.addClass(sKey);
                                }
                            }
                        }
                    })(sSubtitleClass);

                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((sSubtitle) || "");
                    oRm.write("</div>");
                })()) || "");
                oRm.writeEscaped((sText && (function () {
                    oRm.write("<div ");
                    oRm.addClass("listEntryText");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((sText) || "");
                    oRm.write("</div>");
                })()) || "");
                oRm.write("<div ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((performance.now()) || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });

    oListEntry.prototype.init = function () {
        if (Control.prototype.init) {
            Control.prototype.init.apply(this, arguments);
        }
    };

    return oListEntry;
});
//# sourceMappingURL=ListEntry.js.map
