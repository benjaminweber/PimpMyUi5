sap.ui.define([], function() {

    class Child extends React.Component {
        constructor(props) {
            super(props)
            this.state = props
        }

        render() {
            return (
                <div>
                    <div>Und es geht doch!</div>
                    <div>{this.state.text}</div>
                </div>
            )
        }

    }

    return Child;

});