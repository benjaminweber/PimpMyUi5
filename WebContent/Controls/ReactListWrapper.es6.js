sap.ui.define(["sap/m/ListBase", "./ReactList"], function(Control, ReactList) {

    return Control.extend("ext.Controls.ReactListWrapper", {
        metadata : {
            properties : {
                data : {type : "array", defaultValue: []}
            }
        },
        exit : () => {
            this.setData(undefined)
        },
        onAfterRendering : function() {
            if (Control.prototype.onAfterRendering)
            {
                Control.prototype.onAfterRendering.apply(this,arguments)
            }
            let props = {data : this.getData()}
            ReactDOM.render(
                <div className="listRoot">
                    <ReactList {...props}/>
                </div>,
                this.$()[0] //this is where we want to render
            )
        },
        renderer : (oRm, oControl) => {
            oRm.write('<div')
            oRm.writeControlData(oControl)
            oRm.writeClasses()
            oRm.write('>')
            oRm.write('</div>')
        }
    });

});