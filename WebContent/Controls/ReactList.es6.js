sap.ui.define(["./ReactListEntry"], function(ListEntry) {

    class List extends React.Component {
        constructor(props) {
            super(props);
            this.state = props
            this.renderListEntries = this.renderListEntries.bind(this)
        }

        renderListEntries() {
            return this.state.data.map(entry => {
                return (
                    <ListEntry {...entry}></ListEntry>
                )
            })
        }

        render() {
            return (
                <div className="overflowList">
                    {this.renderListEntries()}
                </div>
            )
        }
    }

    //this is conterpart of export
    return List;

});