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

        /**
         * arrow functions can be used
         */
        onclick : () => {
            console.log("hey, just clicked an item")
        },

        /**
         * Using JSX
         */
        renderer : function(oRm, oControl) {
            let sBackGroundColor = oControl.getColor()
            let sSubtitle = oControl.getSubtitle()
            let sText = oControl.getText()
            let sSubtitleClass = 'listEntrySubtitle'
            oRm.render(
                <div ui5ControlData={oControl} class="listEntry" style={{"background-color" : sBackGroundColor}}>
                    { oControl.getProperty("title") &&
                        <div class="listEntryTitle">{oControl.getProperty("title")}</div>
                    }
                    {
                        sSubtitle &&
                        <div class={sSubtitleClass}>{sSubtitle}</div>
                    }
                    {
                        sText &&
                        <div class="listEntryText">{sText}</div>
                    }
                    <div>{performance.now()}</div>
                </div>
            );
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