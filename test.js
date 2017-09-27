"use strict";

var _ListSelectorNew = require("./controller/ListSelectorNew");

var _ListSelectorNew2 = _interopRequireDefault(_ListSelectorNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "sap/ui/demo/masterdetail/model/models",
// "sap/ui/demo/masterdetail/controller/ListSelector",
"sap/ui/demo/masterdetail/controller/ErrorHandler"], function (UIComponent, Device, models, ErrorHandler) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.masterdetail.Component", {

		metadata: {
			manifest: "json"
		},

		/**
   * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
   * In this method, the device models are set and the router is initialized.
   * @public
   * @override
   */
		init: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var ListSelector,
				    _args = arguments;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _ListSelectorNew2.default)();

							case 2:
								ListSelector = _context.sent;

								this.oListSelector = new ListSelector();
								this._oErrorHandler = new ErrorHandler(this);

								// set the device model
								this.setModel(models.createDeviceModel(), "device");

								// call the base component's init function and create the App view 
								UIComponent.prototype.init.apply(this, _args);

								// create the views based on the url/hash
								this.getRouter().initialize();

							case 8:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function init() {
				return _ref.apply(this, arguments);
			}

			return init;
		}(),

		/**
   * The component is destroyed by UI5 automatically.
   * In this method, the ListSelector and ErrorHandler are destroyed.
   * @public
   * @override
   */
		destroy: function destroy() {
			this.oListSelector.destroy();
			this._oErrorHandler.destroy();
			// call the base component's destroy function
			UIComponent.prototype.destroy.apply(this, arguments);
		},

		/**
   * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
   * design mode class should be set, which influences the size appearance of some controls.
   * @public
   * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
   */
		getContentDensityClass: function getContentDensityClass() {
			if (this._sContentDensityClass === undefined) {
				// check whether FLP has already set the content density class; do nothing in this case
				if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
					this._sContentDensityClass = "";
				} else if (!Device.support.touch) {
					// apply "compact" mode if touch is not supported
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}

	});
});
