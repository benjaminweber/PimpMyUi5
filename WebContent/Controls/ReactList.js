"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

sap.ui.define(["./ReactListEntry"], function (ListEntry) {
    var List = function (_React$Component) {
        _inherits(List, _React$Component);

        function List(props) {
            _classCallCheck(this, List);

            var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

            _this.state = props;
            _this.renderListEntries = _this.renderListEntries.bind(_this);
            return _this;
        }

        _createClass(List, [{
            key: "renderListEntries",
            value: function renderListEntries() {
                return this.state.data.map(function (entry) {
                    return React.createElement(ListEntry, entry);
                });
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "overflowList" },
                    this.renderListEntries()
                );
            }
        }]);

        return List;
    }(React.Component);

    //this is conterpart of export


    return List;
});
//# sourceMappingURL=ReactList.js.map
