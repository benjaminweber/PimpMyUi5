sap.ui.define(["sap/m/ListItemBase"], function(Control) {
    'use strict';
    
    let oListEntry = Control.extend("ext.Controls.ListEntry", {
        metadata : {
            properties : {
                text : {type: "string", defaultValue : ""},
                title : {type: "string", defaultValue : ""},
                subtitle : {type: "string", defaultValue : ""},
                color : {type : "string", defaultValue : "transparent"}
            }
        },

        renderer : function(oRm, oControl) {
            oRm.render(
                <div>listentry23456</div>
            );
            // oRm.write("<div");
            // oRm.writeControlData(oControl);
            // oRm.addClass('listEntry');
            // oRm.writeClasses();
            // oRm.addStyle("background-color", oControl.getColor());
            // oRm.writeStyles();
            // oRm.write(">");
            // oRm.write("hello control");

            // if (oControl.getProperty("title"))
            // {
            //     oRm.write('<div');
            //     oRm.addClass('listEntryTitle');
            //     oRm.writeClasses();
            //     oRm.write('>');
            //     oRm.write(oControl.getProperty("title"));
            //     oRm.write('</div>');
            // }

            // if (oControl.getProperty("subtitle"))
            // {
            //     oRm.write('<div');
            //     oRm.addClass('listEntrySubtitle');
            //     oRm.writeClasses();
            //     oRm.write('>');
            //     oRm.write(oControl.getProperty("subtitle"));
            //     oRm.write('</div>');
            // }

            // if (oControl.getProperty("text"))
            // {
            //     oRm.write('<div');
            //     oRm.addClass('listEntryText');
            //     oRm.writeClasses();
            //     oRm.write('>');
            //     oRm.write(oControl.getProperty("text"));
            //     oRm.write('</div>');
            // }

            // oRm.write('<div>');
            // oRm.write(performance.now());
            // oRm.write('</div>');

            // oRm.write("</div>");
        }
    });

    oListEntry.prototype.init = function()
    {
        if (Control.prototype.init)
        {
            Control.prototype.init.apply(this,arguments);
        }
    };

    return oListEntry;
});