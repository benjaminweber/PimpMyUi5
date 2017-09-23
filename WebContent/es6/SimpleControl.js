"use strict";

sap.ui.define(["sap/m/ListItemBase"], function (Control) {

    // class SimpleClass extends Control {
    //     constructor() {
    //         super();
    //         this.sayHello = this.sayHello.bind(this);
    //     }

    //     sayHello() {
    //         console.log("say hello from SimpleControl");
    //     }

    //     sayHelloControl() {
    //         console.log("hello from SimpleControl");
    //     }

    //     renderer(oRm, oControl) {
    //         oRm.write("<div")
    //         oRm.writeControlData(oControl)
    //         oRm.writeClasses()
    //         oRm.write(">")
    //         oRm.write("SimpleControl")
    //         oRm.write("</div>")
    //     }
    // }

    var SimpleClass = Control.extend('ext.es6.SimpleControl', {
        sayHello: function sayHello() {
            console.log("say hello from SimpleControl");
        },
        sayHelloControl: function sayHelloControl() {
            console.log("hello from SimpleControl");
        },
        renderer: function renderer(oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.writeClasses();
            oRm.write(">");
            oRm.write("SimpleControl");
            oRm.write("</div>");
        }
    });

    return SimpleClass;
});
//# sourceMappingURL=SimpleControl.js.map
