"use strict";

sap.ui.define(["sap/m/ListBase", "./ReactList"], function (Control, ReactList) {
    var _this = this;

    return Control.extend("ext.Controls.ReactListWrapper", {
        metadata: {
            properties: {
                data: { type: "array", defaultValue: [] }
            }
        },
        exit: function exit() {
            _this.setData(undefined);
        },
        onAfterRendering: function onAfterRendering() {
            if (Control.prototype.onAfterRendering) {
                Control.prototype.onAfterRendering.apply(this, arguments);
            }
            var props = { data: this.getData() };
            ReactDOM.render(React.createElement(
                "div",
                { className: "listRoot" },
                React.createElement(ReactList, props)
            ), this.$()[0] //this is where we want to render
            );
        },
        renderer: function renderer(oRm, oControl) {
            oRm.write('<div');
            oRm.writeControlData(oControl);
            oRm.writeClasses();
            oRm.write('>');
            oRm.write('</div>');
        }
    });
});
//# sourceMappingURL=ReactListWrapper.js.map
