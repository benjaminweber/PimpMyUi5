sap.ui.define(["./SimpleControl"], function(SimpleControl) {

    
    class BaseClass extends SimpleControl {
        constructor() {
            super();
            this.sayHello = this.sayHello.bind(this);
        }

        sayHello() {
            console.log("say hello");
        }
    }

    return BaseClass;

}); 