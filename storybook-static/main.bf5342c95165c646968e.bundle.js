(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		1321: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			__webpack_require__.r(__webpack_exports__),
				function(module) {
					var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						109
					);
					(module._StorybookPreserveDecorators = !0),
						Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
							[__webpack_require__(1323)],
							module
						);
				}.call(this, __webpack_require__(1322)(module));
		},
		1323: function(module, exports, __webpack_require__) {
			var map = {
				"./components/Buttons/Buttons.stories.mdx": 1356,
				"./components/Checkbox/Checkbox.stories.mdx": 1358,
			};
			function webpackContext(req) {
				var id = webpackContextResolve(req);
				return __webpack_require__(id);
			}
			function webpackContextResolve(req) {
				if (!__webpack_require__.o(map, req)) {
					var e = new Error("Cannot find module '" + req + "'");
					throw ((e.code = "MODULE_NOT_FOUND"), e);
				}
				return map[req];
			}
			(webpackContext.keys = function webpackContextKeys() {
				return Object.keys(map);
			}),
				(webpackContext.resolve = webpackContextResolve),
				(module.exports = webpackContext),
				(webpackContext.id = 1323);
		},
		1356: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, "primary", function() {
					return primary;
				}),
				__webpack_require__.d(__webpack_exports__, "secondary", function() {
					return secondary;
				}),
				__webpack_require__.d(__webpack_exports__, "tertiary", function() {
					return tertiary;
				}),
				__webpack_require__.d(__webpack_exports__, "success", function() {
					return success;
				}),
				__webpack_require__.d(__webpack_exports__, "warning", function() {
					return warning;
				}),
				__webpack_require__.d(__webpack_exports__, "error", function() {
					return error;
				}),
				__webpack_require__.d(__webpack_exports__, "small", function() {
					return Buttons_stories_small;
				}),
				__webpack_require__.d(__webpack_exports__, "medium", function() {
					return medium;
				}),
				__webpack_require__.d(__webpack_exports__, "large", function() {
					return Buttons_stories_large;
				}),
				__webpack_require__.d(__webpack_exports__, "iconButton", function() {
					return iconButton;
				}),
				__webpack_require__.d(
					__webpack_exports__,
					"labelledIconSmall",
					function() {
						return labelledIconSmall;
					}
				),
				__webpack_require__.d(__webpack_exports__, "labelledIcon", function() {
					return labelledIcon;
				}),
				__webpack_require__.d(
					__webpack_exports__,
					"labelledIconLarge",
					function() {
						return labelledIconLarge;
					}
				),
				__webpack_require__.d(
					__webpack_exports__,
					"primaryDisabled",
					function() {
						return primaryDisabled;
					}
				),
				__webpack_require__.d(
					__webpack_exports__,
					"secondaryDisabled",
					function() {
						return secondaryDisabled;
					}
				),
				__webpack_require__.d(
					__webpack_exports__,
					"iconButtonDisabled",
					function() {
						return iconButtonDisabled;
					}
				);
			var react = __webpack_require__(0),
				react_default = __webpack_require__.n(react),
				esm = __webpack_require__(1),
				blocks = __webpack_require__(7),
				objectWithoutProperties =
					(__webpack_require__(460),
					__webpack_require__(151),
					__webpack_require__(206)),
				taggedTemplateLiteral = __webpack_require__(46),
				styled_components_browser_esm = __webpack_require__(42),
				lib = __webpack_require__(70),
				utils = __webpack_require__(47);
			function _templateObject6() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tbackground-color: ",
					";\n\tpadding: 8px 0px;\n\tpadding-left: 18px;\n\tpadding-right: 24px;\n\tborder: none;\n\tcolor: white;\n\n\t& > svg {\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin-right: 6px;\n\t}\n\n\t",
					"\n",
				]);
				return (
					(_templateObject6 = function _templateObject6() {
						return data;
					}),
					data
				);
			}
			function _templateObject5() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tbackground-color: ",
					";\n\tpadding: 6px 8px;\n\tborder: none;\n\tcolor: white;\n\n\t",
					"\n",
				]);
				return (
					(_templateObject5 = function _templateObject5() {
						return data;
					}),
					data
				);
			}
			function _templateObject4() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tbackground: none;\n\tcolor: ",
					";\n\tborder: none;\n\n\t&:hover {\n\t\tcolor: ",
					";\n\t\tbackground: none;\n\t}\n\n\t&:active {\n\t\tcolor: ",
					";\n\t}\n\n\t&:disabled {\n\t\tbackground: none;\n\t\tcolor: ",
					";\n\t}\n\n\t",
					"\n",
				]);
				return (
					(_templateObject4 = function _templateObject4() {
						return data;
					}),
					data
				);
			}
			function _templateObject3() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tbackground-color: ",
					";\n\tpadding: 7px 31px;\n\tcolor: ",
					";\n\tborder: 2px solid ",
					";\n\n\t&:hover {\n\t\tborder: 2px solid ",
					";\n\t\tbackground-color: ",
					";\n\t\tcolor: ",
					";\n\t}\n\n\t&:active {\n\t\tborder-color: ",
					";\n\t\tcolor: ",
					";\n\t}\n\n\t&:disabled {\n\t\tborder-color: ",
					";\n\t\tbackground: ",
					";\n\t\tcolor: ",
					";\n\t}\n\n\t",
					"\n",
				]);
				return (
					(_templateObject3 = function _templateObject3() {
						return data;
					}),
					data
				);
			}
			function _templateObject2() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tbackground-color: ",
					";\n\tborder: none;\n\tcolor: white;\n\n\t",
					"\n",
				]);
				return (
					(_templateObject2 = function _templateObject2() {
						return data;
					}),
					data
				);
			}
			function _templateObject() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tfont-size: ",
					";\n\tpadding: 8px 32px;\n\tborder-radius: 2px;\n\toutline: none;\n\tcursor: pointer;\n\tuser-select: none;\n\ttransition: background-color 100ms linear, color 100ms linear;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t&:focus {\n\t\toutline: 2px solid ",
					";\n\t\toutline-offset: 2px;\n\t}\n\n\t&:hover {\n\t\tbackground-color: ",
					";\n\t}\n\n\t&:active {\n\t\tbackground-color: ",
					";\n\t}\n\n\t&:disabled {\n\t\tbackground-color: ",
					";\n\t\tcolor: ",
					";\n\t\tcursor: not-allowed;\n\t}\n\n\t& > svg {\n\t\twidth: 24px;\n\t\theight: 24px;\n\t}\n",
				]);
				return (
					(_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			var BUTTON_MODIFIERS = {
					small: function small() {
						return "\n    font-size: ".concat(
							utils.d.helper,
							";\n\t\tpadding: 4px 16px;\n\t\t\n\t\t& > svg {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t}\n  "
						);
					},
					large: function large() {
						return "\n    font-size: ".concat(
							utils.d.h5,
							";\n\t\tpadding: 12px 32px;\n\t\t\n\t\t& > svg {\n\t\t\twidth: 24px;\n\t\t\theight: 24px;\n\t\t}\n  "
						);
					},
					success: function success(_ref) {
						var theme = _ref.theme;
						return "\n    background-color: "
							.concat(theme.status.successColor, ";\n    color: ")
							.concat(
								theme.textColorWhite,
								";\n\n    &:hover {\n      background-color: "
							)
							.concat(
								theme.status.successColorHover,
								";\n    }\n\n    &:focus {\n      outline: 2px solid "
							)
							.concat(
								theme.status.successColorHover,
								";\n\t\t  outline-offset: 2px;\n    }\n\n    &:active {\n      background-color: "
							)
							.concat(
								theme.status.successColorActive,
								";\n\t\t}\n\t\t\n\t\t&:disabled {\n\t\t\tbackground-color: "
							)
							.concat(theme.disabled, ";\n\t\t}\n  ");
					},
					warning: function warning(_ref2) {
						var theme = _ref2.theme;
						return "\n  background-color: "
							.concat(theme.status.warningColor, ";\n  color: ")
							.concat(
								theme.textColorWhite,
								";\n\n  &:hover {\n    background-color: "
							)
							.concat(
								theme.status.warningColorHover,
								";\n  }\n\n  &:focus {\n    outline: 2px solid "
							)
							.concat(
								theme.status.warningColorHover,
								";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: "
							)
							.concat(
								theme.status.warningColorActive,
								";\n\t}\n\t\n\t&:disabled {\n\t\tbackground-color: "
							)
							.concat(theme.disabled, ";\n\t}\n  ");
					},
					error: function error(_ref3) {
						var theme = _ref3.theme;
						return "\n  background-color: "
							.concat(theme.status.errorColor, ";\n  color: ")
							.concat(
								theme.textColorWhite,
								";\n\n  &:hover {\n    background-color: "
							)
							.concat(
								theme.status.errorColorHover,
								";\n  }\n\n  &:focus {\n    outline: 2px solid "
							)
							.concat(
								theme.status.errorColorHover,
								";\n    outline-offset: 2px;\n  }\n\n  &:active {\n\t\tbackground-color: "
							)
							.concat(
								theme.status.errorColorActive,
								";\n\t}\n\n\t&:disabled {\n\t\tbackground-color: "
							)
							.concat(theme.disabled, ";\n\t}\n  ");
					},
				},
				defaultStyles = styled_components_browser_esm.c.button(
					_templateObject(),
					utils.d.paragraph,
					function(_ref4) {
						return _ref4.theme.focusOutline;
					},
					function(_ref5) {
						return _ref5.theme.hover;
					},
					function(_ref6) {
						return _ref6.theme.active;
					},
					function(_ref7) {
						return _ref7.theme.disabled;
					},
					function(_ref8) {
						return _ref8.theme.textColorWhite;
					}
				),
				Primary = Object(styled_components_browser_esm.c)(defaultStyles)(
					_templateObject2(),
					function(_ref9) {
						return _ref9.theme.color;
					},
					Object(lib.applyStyleModifiers)(BUTTON_MODIFIERS)
				),
				Secondary = Object(styled_components_browser_esm.c)(defaultStyles)(
					_templateObject3(),
					utils.c[100],
					function(_ref10) {
						return _ref10.theme.color;
					},
					function(_ref11) {
						return _ref11.theme.color;
					},
					function(_ref12) {
						return _ref12.theme.hover;
					},
					utils.c[100],
					function(_ref13) {
						return _ref13.theme.hover;
					},
					function(_ref14) {
						return _ref14.theme.active;
					},
					function(_ref15) {
						return _ref15.theme.active;
					},
					function(_ref16) {
						return _ref16.theme.disabled;
					},
					utils.c[100],
					function(_ref17) {
						return _ref17.theme.disabled;
					},
					Object(lib.applyStyleModifiers)(BUTTON_MODIFIERS)
				),
				Tertiary = Object(styled_components_browser_esm.c)(defaultStyles)(
					_templateObject4(),
					function(_ref18) {
						return _ref18.theme.color;
					},
					function(_ref19) {
						return _ref19.theme.hover;
					},
					function(_ref20) {
						return _ref20.theme.active;
					},
					function(_ref21) {
						return _ref21.theme.disabled;
					},
					Object(lib.applyStyleModifiers)(BUTTON_MODIFIERS)
				),
				IconButton = Object(styled_components_browser_esm.c)(defaultStyles)(
					_templateObject5(),
					function(_ref22) {
						return _ref22.theme.color;
					},
					Object(lib.applyStyleModifiers)(BUTTON_MODIFIERS)
				),
				LabelledIconButton = Object(styled_components_browser_esm.c)(
					defaultStyles
				)(
					_templateObject6(),
					function(_ref23) {
						return _ref23.theme.color;
					},
					Object(lib.applyStyleModifiers)(BUTTON_MODIFIERS)
				);
			function Button(_ref24) {
				var _ref24$type = _ref24.type,
					type = void 0 === _ref24$type ? "primary" : _ref24$type,
					className = _ref24.className,
					children = _ref24.children,
					disabled = _ref24.disabled,
					_ref24$size = _ref24.size,
					size = void 0 === _ref24$size ? "" : _ref24$size,
					_ref24$status = _ref24.status,
					status = void 0 === _ref24$status ? "" : _ref24$status,
					props = Object(objectWithoutProperties.a)(_ref24, [
						"type",
						"className",
						"children",
						"disabled",
						"size",
						"status",
					]),
					ButtonType = null;
				return (
					"primary" === type && (ButtonType = Primary),
					"secondary" === type && (ButtonType = Secondary),
					"tertiary" === type && (ButtonType = Tertiary),
					"icon" === type && (ButtonType = IconButton),
					"labelledIcon" === type && (ButtonType = LabelledIconButton),
					react_default.a.createElement(
						ButtonType,
						Object.assign(
							{
								className: className,
								disabled: disabled,
								modifiers: [size, status],
							},
							props
						),
						children
					)
				);
			}
			(Button.__docgenInfo = {
				description: "",
				methods: [],
				displayName: "Button",
				props: {
					type: {
						defaultValue: { value: '"primary"', computed: !1 },
						required: !1,
					},
					size: { defaultValue: { value: '""', computed: !1 }, required: !1 },
					status: { defaultValue: { value: '""', computed: !1 }, required: !1 },
				},
			}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES["src/components/Buttons/Buttons.js"] = {
						name: "Button",
						docgenInfo: Button.__docgenInfo,
						path: "src/components/Buttons/Buttons.js",
					});
			var Delete = react_default.a.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					fill: "white",
					width: "36px",
					height: "36px",
				},
				react_default.a.createElement("path", {
					d: "M0 0h24v24H0z",
					fill: "none",
				}),
				react_default.a.createElement("path", {
					d:
						"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
				})
			);
			function _extends() {
				return (_extends =
					Object.assign ||
					function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								Object.prototype.hasOwnProperty.call(source, key) &&
									(target[key] = source[key]);
						}
						return target;
					}).apply(this, arguments);
			}
			const layoutProps = {};
			function MDXContent({ components: components, ...props }) {
				return Object(esm.mdx)(
					"wrapper",
					_extends({}, layoutProps, props, {
						components: components,
						mdxType: "MDXLayout",
					}),
					Object(esm.mdx)(blocks.Meta, {
						title: "Design System|Buttons",
						component: Button,
						mdxType: "Meta",
					}),
					Object(esm.mdx)("h1", { id: "buttons" }, "Buttons"),
					Object(esm.mdx)(
						"p",
						null,
						"Buttons are used to trigger actions within an application."
					),
					Object(esm.mdx)("h2", { id: "primary-buttons" }, "Primary Buttons"),
					Object(esm.mdx)(
						"p",
						null,
						"Primary buttons indicate the most important action on a page."
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Primary", mdxType: "Story" },
							Object(esm.mdx)(Button, { mdxType: "Button" }, "Primary")
						)
					),
					Object(esm.mdx)(
						"h2",
						{ id: "secondary-buttons" },
						"Secondary Buttons"
					),
					Object(esm.mdx)(
						"p",
						null,
						"Secondary buttons call for an action with less priority compared to Primary buttons."
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Secondary", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ type: "secondary", mdxType: "Button" },
								"Secondary"
							)
						)
					),
					Object(esm.mdx)("h2", { id: "tertiary-buttons" }, "Tertiary Buttons"),
					Object(esm.mdx)(
						"p",
						null,
						"Tertiary buttons are used as opposites to Primary button. For example ",
						Object(esm.mdx)("em", { parentName: "p" }, "Cancel"),
						" against ",
						Object(esm.mdx)("em", { parentName: "p" }, "Login")
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Tertiary", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ type: "tertiary", mdxType: "Button" },
								"Tertiary"
							)
						)
					),
					Object(esm.mdx)("h2", { id: "status-buttons" }, "Status Buttons"),
					Object(esm.mdx)(
						"p",
						null,
						"Status buttons are used to indicate the outcome of an action."
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Success", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ status: "success", mdxType: "Button" },
								"Success"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Warning", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ status: "warning", mdxType: "Button" },
								"Warning"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Error", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ status: "error", mdxType: "Button" },
								"Error"
							)
						)
					),
					Object(esm.mdx)("h2", { id: "sizes" }, "Sizes"),
					Object(esm.mdx)(
						"p",
						null,
						"You can choose between different sizes by specifying the ",
						Object(esm.mdx)("inlineCode", { parentName: "p" }, "size"),
						" prop."
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Small", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ size: "small", mdxType: "Button" },
								"Button"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Medium", mdxType: "Story" },
							Object(esm.mdx)(Button, { mdxType: "Button" }, "Button")
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Large", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ size: "large", mdxType: "Button" },
								"Button"
							)
						)
					),
					Object(esm.mdx)("h2", { id: "icon-buttons" }, "Icon Buttons"),
					Object(esm.mdx)(
						"p",
						null,
						"You can pass an icon as children to the component. You need to include ",
						Object(esm.mdx)("inlineCode", { parentName: "p" }, 'type="icon"'),
						" for correct padding."
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Icon Button", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ type: "icon", mdxType: "Button" },
								Delete
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Labelled Icon Small", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ type: "labelledIcon", size: "small", mdxType: "Button" },
								Delete,
								" Small"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Labelled Icon", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ type: "labelledIcon", mdxType: "Button" },
								Delete,
								" Labelled"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Labelled Icon Large", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ type: "labelledIcon", size: "large", mdxType: "Button" },
								Delete,
								" Large"
							)
						)
					),
					Object(esm.mdx)("h2", { id: "disabled-state" }, "Disabled state"),
					Object(esm.mdx)(
						"p",
						null,
						"Default button states work on all button types and sizes."
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Primary Disabled", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ disabled: !0, mdxType: "Button" },
								"Primary"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Secondary Disabled", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ disabled: !0, type: "secondary", mdxType: "Button" },
								"Secondary"
							)
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Icon Button Disabled", mdxType: "Story" },
							Object(esm.mdx)(
								Button,
								{ disabled: !0, type: "icon", mdxType: "Button" },
								Delete
							)
						)
					)
				);
			}
			MDXContent.isMDXComponent = !0;
			const primary = () => Object(esm.mdx)(Button, null, "Primary");
			(primary.story = {}),
				(primary.story.name = "Primary"),
				(primary.story.parameters = { mdxSource: "<Button>Primary</Button>" });
			const secondary = () =>
				Object(esm.mdx)(Button, { type: "secondary" }, "Secondary");
			(secondary.story = {}),
				(secondary.story.name = "Secondary"),
				(secondary.story.parameters = {
					mdxSource: '<Button type="secondary">Secondary</Button>',
				});
			const tertiary = () =>
				Object(esm.mdx)(Button, { type: "tertiary" }, "Tertiary");
			(tertiary.story = {}),
				(tertiary.story.name = "Tertiary"),
				(tertiary.story.parameters = {
					mdxSource: '<Button type="tertiary">Tertiary</Button>',
				});
			const success = () =>
				Object(esm.mdx)(Button, { status: "success" }, "Success");
			(success.story = {}),
				(success.story.name = "Success"),
				(success.story.parameters = {
					mdxSource: '<Button status="success">Success</Button>',
				});
			const warning = () =>
				Object(esm.mdx)(Button, { status: "warning" }, "Warning");
			(warning.story = {}),
				(warning.story.name = "Warning"),
				(warning.story.parameters = {
					mdxSource: '<Button status="warning">Warning</Button>',
				});
			const error = () => Object(esm.mdx)(Button, { status: "error" }, "Error");
			(error.story = {}),
				(error.story.name = "Error"),
				(error.story.parameters = {
					mdxSource: '<Button status="error">Error</Button>',
				});
			const Buttons_stories_small = () =>
				Object(esm.mdx)(Button, { size: "small" }, "Button");
			(Buttons_stories_small.story = {}),
				(Buttons_stories_small.story.name = "Small"),
				(Buttons_stories_small.story.parameters = {
					mdxSource: '<Button size="small">Button</Button>',
				});
			const medium = () => Object(esm.mdx)(Button, null, "Button");
			(medium.story = {}),
				(medium.story.name = "Medium"),
				(medium.story.parameters = { mdxSource: "<Button>Button</Button>" });
			const Buttons_stories_large = () =>
				Object(esm.mdx)(Button, { size: "large" }, "Button");
			(Buttons_stories_large.story = {}),
				(Buttons_stories_large.story.name = "Large"),
				(Buttons_stories_large.story.parameters = {
					mdxSource: '<Button size="large">Button</Button>',
				});
			const iconButton = () =>
				Object(esm.mdx)(Button, { type: "icon" }, Delete);
			(iconButton.story = {}),
				(iconButton.story.name = "Icon Button"),
				(iconButton.story.parameters = {
					mdxSource: '<Button type="icon">{Delete}</Button>',
				});
			const labelledIconSmall = () =>
				Object(esm.mdx)(
					Button,
					{ type: "labelledIcon", size: "small" },
					Delete,
					" Small"
				);
			(labelledIconSmall.story = {}),
				(labelledIconSmall.story.name = "Labelled Icon Small"),
				(labelledIconSmall.story.parameters = {
					mdxSource:
						'<Button type="labelledIcon" size="small">\n\t\t\t{Delete} Small\n\t\t</Button>',
				});
			const labelledIcon = () =>
				Object(esm.mdx)(Button, { type: "labelledIcon" }, Delete, " Labelled");
			(labelledIcon.story = {}),
				(labelledIcon.story.name = "Labelled Icon"),
				(labelledIcon.story.parameters = {
					mdxSource: '<Button type="labelledIcon">{Delete} Labelled</Button>',
				});
			const labelledIconLarge = () =>
				Object(esm.mdx)(
					Button,
					{ type: "labelledIcon", size: "large" },
					Delete,
					" Large"
				);
			(labelledIconLarge.story = {}),
				(labelledIconLarge.story.name = "Labelled Icon Large"),
				(labelledIconLarge.story.parameters = {
					mdxSource:
						'<Button type="labelledIcon" size="large">\n\t\t\t{Delete} Large\n\t\t</Button>',
				});
			const primaryDisabled = () =>
				Object(esm.mdx)(Button, { disabled: !0 }, "Primary");
			(primaryDisabled.story = {}),
				(primaryDisabled.story.name = "Primary Disabled"),
				(primaryDisabled.story.parameters = {
					mdxSource: "<Button disabled>Primary</Button>",
				});
			const secondaryDisabled = () =>
				Object(esm.mdx)(
					Button,
					{ disabled: !0, type: "secondary" },
					"Secondary"
				);
			(secondaryDisabled.story = {}),
				(secondaryDisabled.story.name = "Secondary Disabled"),
				(secondaryDisabled.story.parameters = {
					mdxSource:
						'<Button disabled type="secondary">\n\t\t\tSecondary\n\t\t</Button>',
				});
			const iconButtonDisabled = () =>
				Object(esm.mdx)(Button, { disabled: !0, type: "icon" }, Delete);
			(iconButtonDisabled.story = {}),
				(iconButtonDisabled.story.name = "Icon Button Disabled"),
				(iconButtonDisabled.story.parameters = {
					mdxSource:
						'<Button disabled type="icon">\n\t\t\t{Delete}\n\t\t</Button>',
				});
			const componentMeta = {
					title: "Design System|Buttons",
					includeStories: [
						"primary",
						"secondary",
						"tertiary",
						"success",
						"warning",
						"error",
						"small",
						"medium",
						"large",
						"iconButton",
						"labelledIconSmall",
						"labelledIcon",
						"labelledIconLarge",
						"primaryDisabled",
						"secondaryDisabled",
						"iconButtonDisabled",
					],
				},
				mdxStoryNameToKey = {
					"Primary": "primary",
					"Secondary": "secondary",
					"Tertiary": "tertiary",
					"Success": "success",
					"Warning": "warning",
					"Error": "error",
					"Small": "small",
					"Medium": "medium",
					"Large": "large",
					"Icon Button": "iconButton",
					"Labelled Icon Small": "labelledIconSmall",
					"Labelled Icon": "labelledIcon",
					"Labelled Icon Large": "labelledIconLarge",
					"Primary Disabled": "primaryDisabled",
					"Secondary Disabled": "secondaryDisabled",
					"Icon Button Disabled": "iconButtonDisabled",
				};
			(componentMeta.parameters = componentMeta.parameters || {}),
				(componentMeta.parameters.docs = {
					...(componentMeta.parameters.docs || {}),
					page: () =>
						Object(esm.mdx)(
							blocks.AddContext,
							{
								mdxStoryNameToKey: mdxStoryNameToKey,
								mdxComponentMeta: componentMeta,
							},
							Object(esm.mdx)(MDXContent, null)
						),
				});
			__webpack_exports__.default = componentMeta;
			(primary.__docgenInfo = {
				description: "",
				methods: [],
				displayName: "primary",
			}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "primary",
						docgenInfo: primary.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(secondary.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "secondary",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "secondary",
						docgenInfo: secondary.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(tertiary.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "tertiary",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "tertiary",
						docgenInfo: tertiary.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(success.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "success",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "success",
						docgenInfo: success.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(warning.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "warning",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "warning",
						docgenInfo: warning.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(error.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "error",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "error",
						docgenInfo: error.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(Buttons_stories_small.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "small",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "small",
						docgenInfo: Buttons_stories_small.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(medium.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "medium",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "medium",
						docgenInfo: medium.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(Buttons_stories_large.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "large",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "large",
						docgenInfo: Buttons_stories_large.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(iconButton.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "iconButton",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "iconButton",
						docgenInfo: iconButton.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(labelledIconSmall.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "labelledIconSmall",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "labelledIconSmall",
						docgenInfo: labelledIconSmall.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(labelledIcon.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "labelledIcon",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "labelledIcon",
						docgenInfo: labelledIcon.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(labelledIconLarge.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "labelledIconLarge",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "labelledIconLarge",
						docgenInfo: labelledIconLarge.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(primaryDisabled.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "primaryDisabled",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "primaryDisabled",
						docgenInfo: primaryDisabled.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(secondaryDisabled.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "secondaryDisabled",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "secondaryDisabled",
						docgenInfo: secondaryDisabled.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					}),
				(iconButtonDisabled.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "iconButtonDisabled",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Buttons/Buttons.stories.mdx"
					] = {
						name: "iconButtonDisabled",
						docgenInfo: iconButtonDisabled.__docgenInfo,
						path: "src/components/Buttons/Buttons.stories.mdx",
					});
		},
		1357: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			__webpack_require__.r(__webpack_exports__);
			var react = __webpack_require__(0),
				react_default = __webpack_require__.n(react),
				client = __webpack_require__(109),
				addon_contexts_react = __webpack_require__(482),
				dist = __webpack_require__(151),
				styled_components_browser_esm = __webpack_require__(42),
				utils = __webpack_require__(47),
				contexts = [
					{
						icon: "box",
						title: "Themes",
						components: [styled_components_browser_esm.a],
						params: [
							{ name: "Default Theme", props: { theme: utils.b, default: !0 } },
						],
						options: { deep: !0, disable: !1, cancelable: !1 },
					},
				];
			Object(client.addParameters)({
				backgrounds: [{ name: "Default Theme", value: "#F4F5F7", default: !0 }],
			}),
				Object(client.addDecorator)(Object(addon_contexts_react.a)(contexts)),
				Object(client.addDecorator)(dist.withKnobs),
				Object(client.addDecorator)(function(style) {
					return react_default.a.createElement(
						react_default.a.Fragment,
						null,
						react_default.a.createElement(utils.a, null),
						style()
					);
				});
		},
		1358: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, "defaultStory", function() {
					return defaultStory;
				}),
				__webpack_require__.d(__webpack_exports__, "labelled", function() {
					return labelled;
				}),
				__webpack_require__.d(__webpack_exports__, "large", function() {
					return Checkbox_stories_large;
				}),
				__webpack_require__.d(__webpack_exports__, "errorMedium", function() {
					return errorMedium;
				}),
				__webpack_require__.d(__webpack_exports__, "errorLarge", function() {
					return errorLarge;
				}),
				__webpack_require__.d(__webpack_exports__, "disabled", function() {
					return Checkbox_stories_disabled;
				}),
				__webpack_require__.d(
					__webpack_exports__,
					"disabledChecked",
					function() {
						return disabledChecked;
					}
				);
			var react = __webpack_require__(0),
				react_default = __webpack_require__.n(react),
				esm = __webpack_require__(1),
				blocks = __webpack_require__(7),
				slicedToArray =
					(__webpack_require__(460),
					__webpack_require__(151),
					__webpack_require__(484)),
				objectWithoutProperties = __webpack_require__(206),
				taggedTemplateLiteral = __webpack_require__(46),
				styled_components_browser_esm = __webpack_require__(42),
				lib = __webpack_require__(70),
				utils = __webpack_require__(47);
			function _templateObject5() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\twidth: max-content;\n\tcolor: ",
					";\n\tmargin-left: 8px;\n\tuser-select: none;\n\n\t",
					"\n",
				]);
				return (
					(_templateObject5 = function _templateObject5() {
						return data;
					}),
					data
				);
			}
			function _templateObject4() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\t/* display: flex; */\n\twidth: 18px;\n\theight: 18px;\n\tbackground-color: ",
					";\n\tborder-radius: 2px;\n\tborder: 2px solid\n\t\t",
					";\n\ttransition: color 100ms linear, background-color 100ms linear,\n\t\tborder 100ms linear;\n\n\t&:hover {\n\t\tborder: 2px solid\n\t\t\t",
					";\n\t}\n\n\t&:focus {\n\t\toutline: 2px solid ",
					";\n\t\toutline-offset: 1px;\n\t}\n\n\t&:disabled {\n\t\tbackground-color: ",
					";\n\t\tborder: 2px solid\n\t\t\t",
					";\n\t\tcursor: not-allowed;\n\t}\n\n\t",
					" {\n\t\tvisibility: ",
					";\n\t}\n\n\t",
					"\n",
				]);
				return (
					(_templateObject4 = function _templateObject4() {
						return data;
					}),
					data
				);
			}
			function _templateObject3() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tfill: none;\n\tstroke: white;\n\tstroke-width: 2px;\n",
				]);
				return (
					(_templateObject3 = function _templateObject3() {
						return data;
					}),
					data
				);
			}
			function _templateObject2() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tborder: 0;\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n",
				]);
				return (
					(_templateObject2 = function _templateObject2() {
						return data;
					}),
					data
				);
			}
			function _templateObject() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\tmax-width: max-content;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\n\t",
					"\n",
				]);
				return (
					(_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			var CHECKBOX_MODIFIERS = {
					large: function large() {
						return "\n\t\t> div {\n\t\t\twidth: 24px;\n\t\t\theight: 24px;\n\t\t}\n\n\t\t> p {\n\t\t\tfont-size: ".concat(
							utils.d.h5,
							"\n\t\t}\n  "
						);
					},
					error: function error(_ref) {
						var theme = _ref.theme,
							checked = _ref.checked;
						return "\n\t> div {\n\t\tborder-color: "
							.concat(
								checked ? theme.color : theme.status.errorColor,
								"\n\t}\n\n\t> p {\n\t\tcolor: "
							)
							.concat(
								checked ? theme.defaultGrey : theme.status.errorColor,
								"\n\t}\n\n\t&:hover {\n\t\t> div {\n\t\t\tborder-color: "
							)
							.concat(
								checked ? theme.color : theme.status.errorColorHover,
								"\n\t\t}\n\t}\n\t"
							);
					},
					disabled: function disabled(_ref2) {
						var theme = _ref2.theme,
							checked = _ref2.checked;
						return "\n\n\t\tcursor: not-allowed;\n\n\t\t> div {\n\t\t\tbackground-color: "
							.concat(
								checked ? theme.colorDisabled : theme.disabledBackground,
								";\n\t\t\tborder-color: "
							)
							.concat(
								checked ? theme.colorDisabled : theme.disabled,
								";\n\t\t\tcursor: not-allowed;\n\t\t\tpointer-events:none;\n\t\t}\n\n\t\t> p {\n\t\t\tcolor: "
							)
							.concat(
								theme.disabled,
								";\n\t\t\tcursor: not-allowed;\n\t\t}\n\t"
							);
					},
				},
				CheckboxContainer = styled_components_browser_esm.c.div(
					_templateObject(),
					Object(lib.applyStyleModifiers)(CHECKBOX_MODIFIERS)
				),
				HiddenCheckbox = styled_components_browser_esm.c.input.attrs({
					type: "checkbox",
				})(_templateObject2()),
				Icon = styled_components_browser_esm.c.svg(_templateObject3()),
				StyledCheckbox = styled_components_browser_esm.c.div(
					_templateObject4(),
					function(_ref3) {
						var theme = _ref3.theme;
						return _ref3.checked ? theme.color : theme.backgroundWhite;
					},
					function(_ref4) {
						var theme = _ref4.theme;
						return _ref4.checked ? theme.color : theme.defaultGrey;
					},
					function(_ref5) {
						var theme = _ref5.theme;
						return _ref5.checked ? theme.color : theme.hover;
					},
					function(_ref6) {
						return _ref6.theme.focusOutline;
					},
					function(_ref7) {
						var theme = _ref7.theme;
						return _ref7.checked ? theme.color : theme.colorDisabled;
					},
					function(_ref8) {
						var theme = _ref8.theme;
						return _ref8.checked ? theme.color : "pink";
					},
					Icon,
					function(props) {
						return props.checked ? "visible" : "hidden";
					},
					Object(lib.applyStyleModifiers)(CHECKBOX_MODIFIERS)
				),
				Label = styled_components_browser_esm.c.p(
					_templateObject5(),
					function(_ref9) {
						var theme = _ref9.theme;
						return _ref9.disabled
							? theme.defaultGreyDisabled
							: theme.defaultGrey;
					},
					Object(lib.applyStyleModifiers)(CHECKBOX_MODIFIERS)
				);
			function Checkbox(_ref10) {
				var className = _ref10.className,
					label = _ref10.label,
					_ref10$size = _ref10.size,
					size = void 0 === _ref10$size ? "" : _ref10$size,
					_ref10$status = _ref10.status,
					status = void 0 === _ref10$status ? "" : _ref10$status,
					isChecked = (_ref10.disabled, _ref10.isChecked),
					props = Object(objectWithoutProperties.a)(_ref10, [
						"className",
						"label",
						"size",
						"status",
						"disabled",
						"isChecked",
					]),
					_useState = Object(react.useState)(isChecked),
					_useState2 = Object(slicedToArray.a)(_useState, 2),
					checked = _useState2[0],
					setChecked = _useState2[1];
				return react_default.a.createElement(
					CheckboxContainer,
					{ className: className, modifiers: [size, status], checked: checked },
					react_default.a.createElement(
						HiddenCheckbox,
						Object.assign({ checked: checked }, props)
					),
					react_default.a.createElement(
						StyledCheckbox,
						{
							checked: checked,
							onClick: function onClick() {
								return setChecked(!checked);
							},
						},
						react_default.a.createElement(
							Icon,
							{ viewBox: "0 0 24 24" },
							react_default.a.createElement("polyline", {
								points: "22 4 8 20 1 14",
							})
						)
					),
					label ? react_default.a.createElement(Label, null, label) : null
				);
			}
			function _extends() {
				return (_extends =
					Object.assign ||
					function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								Object.prototype.hasOwnProperty.call(source, key) &&
									(target[key] = source[key]);
						}
						return target;
					}).apply(this, arguments);
			}
			(Checkbox.__docgenInfo = {
				description: "",
				methods: [],
				displayName: "Checkbox",
				props: {
					size: { defaultValue: { value: '""', computed: !1 }, required: !1 },
					status: { defaultValue: { value: '""', computed: !1 }, required: !1 },
				},
			}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.js"] = {
						name: "Checkbox",
						docgenInfo: Checkbox.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.js",
					});
			const layoutProps = {};
			function MDXContent({ components: components, ...props }) {
				return Object(esm.mdx)(
					"wrapper",
					_extends({}, layoutProps, props, {
						components: components,
						mdxType: "MDXLayout",
					}),
					Object(esm.mdx)(blocks.Meta, {
						title: "Design System|Checkbox",
						component: Checkbox,
						mdxType: "Meta",
					}),
					Object(esm.mdx)("h1", { id: "checkbox" }, "Checkbox"),
					Object(esm.mdx)(
						"p",
						null,
						"Checkboxes are used when multiple optional or mandatory fields need to be selected."
					),
					Object(esm.mdx)("h3", { id: "default-checkbox" }, "Default Checkbox"),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Default", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, { mdxType: "Checkbox" })
						)
					),
					Object(esm.mdx)(
						"h3",
						{ id: "labelled-checkbox" },
						"Labelled Checkbox"
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Labelled", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, {
								label: "Check This",
								mdxType: "Checkbox",
							})
						)
					),
					Object(esm.mdx)("h3", { id: "sizes" }, "Sizes"),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Large", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, {
								label: "Check This",
								size: "large",
								mdxType: "Checkbox",
							})
						)
					),
					Object(esm.mdx)("h3", { id: "status" }, "Status"),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Error Medium", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, {
								label: "Check This",
								status: "error",
								mdxType: "Checkbox",
							})
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Error Large", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, {
								label: "Check This",
								size: "large",
								status: "error",
								mdxType: "Checkbox",
							})
						)
					),
					Object(esm.mdx)("h3", { id: "disabled" }, "Disabled"),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: "Preview" },
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Disabled", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, {
								label: "Check This",
								status: "disabled",
								mdxType: "Checkbox",
							})
						),
						Object(esm.mdx)(
							blocks.Story,
							{ name: "Disabled Checked", mdxType: "Story" },
							Object(esm.mdx)(Checkbox, {
								label: "Check This",
								status: "disabled",
								isChecked: !0,
								mdxType: "Checkbox",
							})
						)
					)
				);
			}
			MDXContent.isMDXComponent = !0;
			const defaultStory = () => Object(esm.mdx)(Checkbox, null);
			(defaultStory.story = {}),
				(defaultStory.story.name = "Default"),
				(defaultStory.story.parameters = { mdxSource: "<Checkbox />" });
			const labelled = () => Object(esm.mdx)(Checkbox, { label: "Check This" });
			(labelled.story = {}),
				(labelled.story.name = "Labelled"),
				(labelled.story.parameters = {
					mdxSource: '<Checkbox label="Check This" />',
				});
			const Checkbox_stories_large = () =>
				Object(esm.mdx)(Checkbox, { label: "Check This", size: "large" });
			(Checkbox_stories_large.story = {}),
				(Checkbox_stories_large.story.name = "Large"),
				(Checkbox_stories_large.story.parameters = {
					mdxSource: '<Checkbox label="Check This" size="large" />',
				});
			const errorMedium = () =>
				Object(esm.mdx)(Checkbox, { label: "Check This", status: "error" });
			(errorMedium.story = {}),
				(errorMedium.story.name = "Error Medium"),
				(errorMedium.story.parameters = {
					mdxSource: '<Checkbox label="Check This" status="error" />',
				});
			const errorLarge = () =>
				Object(esm.mdx)(Checkbox, {
					label: "Check This",
					size: "large",
					status: "error",
				});
			(errorLarge.story = {}),
				(errorLarge.story.name = "Error Large"),
				(errorLarge.story.parameters = {
					mdxSource:
						'<Checkbox label="Check This" size="large" status="error" />',
				});
			const Checkbox_stories_disabled = () =>
				Object(esm.mdx)(Checkbox, { label: "Check This", status: "disabled" });
			(Checkbox_stories_disabled.story = {}),
				(Checkbox_stories_disabled.story.name = "Disabled"),
				(Checkbox_stories_disabled.story.parameters = {
					mdxSource: '<Checkbox label="Check This" status="disabled" />',
				});
			const disabledChecked = () =>
				Object(esm.mdx)(Checkbox, {
					label: "Check This",
					status: "disabled",
					isChecked: !0,
				});
			(disabledChecked.story = {}),
				(disabledChecked.story.name = "Disabled Checked"),
				(disabledChecked.story.parameters = {
					mdxSource:
						'<Checkbox label="Check This" status="disabled" isChecked />',
				});
			const componentMeta = {
					title: "Design System|Checkbox",
					includeStories: [
						"defaultStory",
						"labelled",
						"large",
						"errorMedium",
						"errorLarge",
						"disabled",
						"disabledChecked",
					],
				},
				mdxStoryNameToKey = {
					"Default": "defaultStory",
					"Labelled": "labelled",
					"Large": "large",
					"Error Medium": "errorMedium",
					"Error Large": "errorLarge",
					"Disabled": "disabled",
					"Disabled Checked": "disabledChecked",
				};
			(componentMeta.parameters = componentMeta.parameters || {}),
				(componentMeta.parameters.docs = {
					...(componentMeta.parameters.docs || {}),
					page: () =>
						Object(esm.mdx)(
							blocks.AddContext,
							{
								mdxStoryNameToKey: mdxStoryNameToKey,
								mdxComponentMeta: componentMeta,
							},
							Object(esm.mdx)(MDXContent, null)
						),
				});
			__webpack_exports__.default = componentMeta;
			(defaultStory.__docgenInfo = {
				description: "",
				methods: [],
				displayName: "defaultStory",
			}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "defaultStory",
						docgenInfo: defaultStory.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					}),
				(labelled.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "labelled",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "labelled",
						docgenInfo: labelled.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					}),
				(Checkbox_stories_large.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "large",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "large",
						docgenInfo: Checkbox_stories_large.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					}),
				(errorMedium.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "errorMedium",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "errorMedium",
						docgenInfo: errorMedium.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					}),
				(errorLarge.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "errorLarge",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "errorLarge",
						docgenInfo: errorLarge.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					}),
				(Checkbox_stories_disabled.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "disabled",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "disabled",
						docgenInfo: Checkbox_stories_disabled.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					}),
				(disabledChecked.__docgenInfo = {
					description: "",
					methods: [],
					displayName: "disabledChecked",
				}),
				"undefined" != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES[
						"src/components/Checkbox/Checkbox.stories.mdx"
					] = {
						name: "disabledChecked",
						docgenInfo: disabledChecked.__docgenInfo,
						path: "src/components/Checkbox/Checkbox.stories.mdx",
					});
		},
		47: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			__webpack_require__.d(__webpack_exports__, "c", function() {
				return neutral;
			}),
				__webpack_require__.d(__webpack_exports__, "d", function() {
					return typeScale;
				}),
				__webpack_require__.d(__webpack_exports__, "b", function() {
					return defaultTheme;
				}),
				__webpack_require__.d(__webpack_exports__, "a", function() {
					return GlobalStyle;
				});
			var green_100 = "#C0E585",
				green_200 = "#97CA3D",
				green_300 = "#85BF31",
				green_400 = "#52850A",
				neutral = {
					100: "#FFFFFF",
					200: "#F4F5F7",
					300: "#D6D6D6",
					400: "#A7A7AF",
					500: "#89898E",
					600: "#000000",
				},
				success_100 = "#529E66",
				success_200 = "#367B48",
				success_300 = "#276738",
				warning_100 = "#E5BF29",
				warning_200 = "#D1AA29",
				warning_300 = "#B79326",
				error_100 = "#D0454C",
				error_200 = "#B54248",
				error_300 = "#95353A",
				typeScale = {
					h1: "2.488rem",
					h2: "2.074rem",
					h3: "1.728rem",
					h4: "1.44rem",
					h5: "1.2rem",
					paragraph: "1rem",
					helper: "0.833rem",
					copyright: "0.694rem",
				},
				defaultTheme = {
					color: green_300,
					hover: green_200,
					active: green_400,
					focus: green_300,
					focusOutline: green_200,
					disabled: neutral[300],
					disabledBackground: neutral[200],
					defaultGrey: neutral[500],
					active: green_400,
					colorDisabled: green_100,
					textColorBlack: neutral[600],
					textColorWhite: neutral[100],
					label: neutral[500],
					labelDisabled: neutral[300],
					placeholder: neutral[300],
					backgroundWhite: neutral[100],
					primaryFont: '"Lato", monospace',
					status: {
						warningColor: warning_200,
						warningColorHover: warning_100,
						warningColorActive: warning_300,
						errorColor: error_200,
						errorColorHover: error_100,
						errorColorActive: error_300,
						successColor: success_200,
						successColorHover: success_100,
						successColorActive: success_300,
					},
				},
				taggedTemplateLiteral = __webpack_require__(46),
				styled_components_browser_esm = __webpack_require__(42),
				polished_esm = __webpack_require__(44);
			function _templateObject() {
				var data = Object(taggedTemplateLiteral.a)([
					"\n\n  ",
					";\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  html {\n    font-size: 14px;\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    /* margin: 0; */\n    margin: 10px;\n    font-family: ",
					"\n  }\n\n  p {\n    margin: 0\n  }\n\n  main {\n    width: 90%;\n    margin: 0 auto;\n  }\n",
				]);
				return (
					(_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			var GlobalStyle = Object(styled_components_browser_esm.b)(
				_templateObject(),
				polished_esm.normalize,
				'"Lato", monospace'
			);
		},
		485: function(module, exports, __webpack_require__) {
			__webpack_require__(486),
				__webpack_require__(633),
				__webpack_require__(634),
				__webpack_require__(1275),
				__webpack_require__(1357),
				__webpack_require__(1320),
				(module.exports = __webpack_require__(1321));
		},
		552: function(module, exports) {},
	},
	[[485, 1, 2]],
]);
//# sourceMappingURL=main.bf5342c95165c646968e.bundle.js.map
