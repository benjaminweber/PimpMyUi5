sap.ui.define(["sap/m/ListItemBase"], function(Control) {

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

    let SimpleClass = Control.extend('ext.es6.SimpleControl', {
        sayHello() {
            console.log("say hello from SimpleControl");
        },

        sayHelloControl() {
            console.log("hello from SimpleControl");
        },

        renderer(oRm, oControl) {
            oRm.write("<div")
            oRm.writeControlData(oControl)
            oRm.writeClasses()
            oRm.write(">")
            oRm.write("SimpleControl")
            oRm.write("</div>")
        }
    });

    return SimpleClass;

});
 