sap.ui.define(["sap/m/List"], function(List) {
    
    let oList = List.extend("ext.Controls.List", {
        metadata : {
            properties : {
                minHeight : {type : "number", defaultValue : 1}
            }
        },
        
        renderer : (oRm, oControl) => {
            let aItems = oControl.getItems()
            let minContainerHeight = aItems.length * oControl.getMinHeight()

            
            oRm.render(
                <div ui5ControlData={oControl}>
                    {
                        aItems.forEach(function(element) {
                            oRm.render(
                                <ui5Control>{element}</ui5Control>
                            )
                        }, this)
                    }

                </div>
            )
        }
    });


    oList.prototype.init = function() 
    {
        if (List.prototype.init)
        {
            List.prototype.init.apply(this,arguments);
        }
        this.attachBrowserEvent("scroll", function(){
            console.log("scrolling");
        });
    }

    return oList;
});