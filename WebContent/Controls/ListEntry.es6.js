sap.ui.define(["sap/m/ListItemBase"], function(Control) {
    'use strict';
    
    let oListEntry = Control.extend("ext.Controls.ListEntry", {
        metadata : {
            properties : {
                text : {type: "string", defaultValue : ""},
                title : {type: "string", defaultValue : ""},
                subtitle : {type: "string", defaultValue : ""},
                color : {type : "string", defaultValue : "transparent"},
                time : {type : "any"}
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
            let sTitle = oControl.getTitle()
            let time = oControl.getTime()
            oRm.render(
                <div ui5ControlData={oControl} class="listEntry" style={{"background-color" : sBackGroundColor}}>
                    { sTitle &&
                        <div class="listEntryTitle">{sTitle}</div>
                    }
                    {
                        sSubtitle &&
                        <div class={sSubtitleClass}>{sSubtitle}</div>
                    }
                    {
                        sText &&
                        <div class="listEntryText">{sText}</div>
                    }
                    {
                        <div>{time}</div>
                    }
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