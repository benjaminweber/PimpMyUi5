sap.ui.define([],function() {

    class ListEntry extends React.Component {
        constructor(props) {
            super(props)
            this.state = props
        }
        render() {
            return (
                <div style={{backgroundColor : this.state.color}} className="listEntry">
                    <div>{this.state.title}</div>
                    <div>{this.state.subtitle}</div>
                    <div>{this.state.text}</div>
                    <div>{this.state.time}</div>
                </div>
            )
        }
    }

    return ListEntry

});