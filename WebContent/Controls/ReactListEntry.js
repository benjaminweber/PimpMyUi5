"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

sap.ui.define([], function () {
    var ListEntry = function (_React$Component) {
        _inherits(ListEntry, _React$Component);

        function ListEntry(props) {
            _classCallCheck(this, ListEntry);

            var _this = _possibleConstructorReturn(this, (ListEntry.__proto__ || Object.getPrototypeOf(ListEntry)).call(this, props));

            _this.state = props;
            return _this;
        }

        _createClass(ListEntry, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { style: { backgroundColor: this.state.color }, className: "listEntry" },
                    React.createElement(
                        "div",
                        null,
                        this.state.title
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.subtitle
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.text
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.time
                    )
                );
            }
        }]);

        return ListEntry;
    }(React.Component);

    return ListEntry;
});
//# sourceMappingURL=ReactListEntry.js.map
