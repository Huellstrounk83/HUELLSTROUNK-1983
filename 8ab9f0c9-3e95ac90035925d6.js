"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7619],{

/***/ 53517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ Ribbon)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6841);
/* harmony import */ var _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6720);
/* harmony import */ var _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63160);
/* harmony import */ var _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94715);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32047);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34384);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(98328);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35172);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57280);
/* harmony import */ var _items_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10063);
/* harmony import */ var _items_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72434);
/* harmony import */ var _items_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75282);
/* harmony import */ var _items_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38173);
/* harmony import */ var _items_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72180);
/* harmony import */ var _items_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76794);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36222);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72473);
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94920);
/* harmony import */ var _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14629);
/* harmony import */ var _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16106);
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57266);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/**
 * The Ribbon Component is a structured layout to manage tools with tabs and groups.
 */
var Ribbon = /** @class */ (function (_super) {
    __extends(Ribbon, _super);
    /**
     * Constructor for creating the widget.
     *
     * @param  {RibbonModel} options - Specifies the ribbon model
     * @param  {string|HTMLDivElement} element - Specifies the target element
     */
    function Ribbon(options, element) {
        var _this = this;
        Ribbon_1.Inject(_items_index__WEBPACK_IMPORTED_MODULE_1__/* .RibbonButton */ .R, _items_index__WEBPACK_IMPORTED_MODULE_2__/* .RibbonCheckBox */ .S, _items_index__WEBPACK_IMPORTED_MODULE_3__/* .RibbonDropDown */ .E, _items_index__WEBPACK_IMPORTED_MODULE_4__/* .RibbonSplitButton */ .$, _items_index__WEBPACK_IMPORTED_MODULE_5__/* .RibbonComboBox */ ._, _items_index__WEBPACK_IMPORTED_MODULE_6__/* .RibbonGroupButton */ .I);
        _this = _super.call(this, options, element) || this;
        return _this;
    }
    Ribbon_1 = Ribbon;
    /**
     * Initialize the control rendering.
     *
     * @returns {void}
     * @private
     */
    Ribbon.prototype.render = function () {
        this.initialize();
    };
    Ribbon.prototype.preRender = function () {
        this.keysPress = '';
        this.idIndex = 0;
        this.tooltipData = [];
        this.initialPropsData = {};
        this.hiddenElements = {};
        this.keyTipElements = {};
        this.hiddenGroups = [];
        this.itemsModel = [];
        this.targetTabs = {};
        this.isAddRemove = false;
        this.isUpdateItems = false;
        this.keyConfigs = {
            leftarrow: 'leftarrow',
            rightarrow: 'rightarrow',
            tab: 'tab',
            shiftTab: 'shift+tab'
        };
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    Ribbon.prototype.getPersistData = function () {
        return this.addOnPersist(['activeLayout']);
    };
    /**
     * Get component name.
     *
     * @returns {string} - Module name
     * @private
     */
    Ribbon.prototype.getModuleName = function () {
        return 'ribbon';
    };
    /**
     * To provide the array of modules needed for component rendering
     *
     * @returns {ModuleDeclaration[]} - returns module declaration.
     * @hidden
     */
    Ribbon.prototype.requiredModules = function () {
        var modules = [];
        modules.push({ member: 'ribbonButton', args: [this], name: 'RibbonButton' }, { member: 'ribbonDropDown', args: [this], name: 'RibbonDropDown' }, { member: 'ribbonSplitButton', args: [this], name: 'RibbonSplitButton' }, { member: 'ribbonCheckBox', args: [this], name: 'RibbonCheckBox' }, { member: 'ribbonComboBox', args: [this], name: 'RibbonComboBox' }, { member: 'ribbonGroupButton', args: [this], name: 'RibbonGroupButton' });
        var canInjectColorPickerModule = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, null, _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.ColorPicker);
        var canInjectGalleryModule = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, null, _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery);
        if (canInjectColorPickerModule) {
            modules.push({ member: 'ribbonColorPicker', args: [this], name: 'RibbonColorPicker' });
        }
        if (canInjectGalleryModule) {
            modules.push({ member: 'ribbonGallery', args: [this], name: 'RibbonGallery' });
        }
        if (this.backStageMenu.visible || this.backStageMenu.items.length) {
            modules.push({ member: 'ribbonBackstage', args: [this], name: 'RibbonBackstage' });
        }
        if (this.fileMenu.visible || this.fileMenu.menuItems.length) {
            modules.push({ member: 'ribbonFileMenu', args: [this], name: 'RibbonFileMenu' });
        }
        if (this.contextualTabs.length) {
            modules.push({ member: 'ribbonContextualTab', args: [this], name: 'RibbonContextualTab' });
        }
        if (this.enableKeyTips) {
            modules.push({ member: 'ribbonKeyTip', args: [this], name: 'RibbonKeyTip' });
        }
        return modules;
    };
    Ribbon.prototype.initialize = function () {
        this.element.id = this.element.id || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getUniqueID */ .Lz)('e-' + this.getModuleName());
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([this.element], ['e-rbn'].concat((this.cssClass ? this.cssClass.split(_constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6) : [])));
        if (this.enableRtl) {
            this.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RTL_CSS */ .rT);
        }
        this.element.style.width = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .formatUnit */ .IV)(this.width);
        this.renderTabs();
        if (this.ribbonContextualTabModule) {
            this.ribbonContextualTabModule.addContextualTabs();
        }
        if (this.ribbonFileMenuModule) {
            this.ribbonFileMenuModule.createFileMenu(this.fileMenu);
        }
        if (this.ribbonBackstageModule) {
            this.ribbonBackstageModule.createBackStage(this.backStageMenu);
        }
        this.createHelpPaneTemplate();
        var toolbar = this.tabObj['tbObj'];
        toolbar.refreshOverflow();
        this.addTabOverflowKeyTip();
        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .createTooltip */ .Ck)(this.element, this);
        this.isKeytipOpen = false;
        this.wireEvents();
        this.wireKeyboardEvent();
        this.currentControlIndex = 0;
    };
    Ribbon.prototype.wireEvents = function () {
        this.resizeListener = this.resizeHandler.bind(this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(window, 'resize', this.resizeListener);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(document.body, 'keydown', this.keytipActionHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(document, 'mousedown', this.mouseEventHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(document, 'scroll', this.mouseEventHandler, this);
    };
    Ribbon.prototype.wireKeyboardEvent = function () {
        this.keyboardModuleRibbon = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .KeyboardEvents */ .j9(this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown'
        });
    };
    Ribbon.prototype.keyActionHandler = function (e) {
        if (((e.key === 'Tab') && (!(e.target.classList.contains('e-tab-wrap')) && !(e.target.classList.contains('e-combobox'))))) {
            e.preventDefault();
        }
        var activeContent = this.tabObj.element.querySelector('#' + this.tabs[this.selectedTab].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
        var controlElements = Array.prototype.slice.call(activeContent.querySelectorAll('.e-control'));
        var templateElements = Array.prototype.slice.call(activeContent.querySelectorAll('.e-ribbon-template'));
        var galleryElements = Array.prototype.slice.call(activeContent.querySelectorAll('.e-ribbon-gallery-item'));
        var ribbonControls = controlElements.concat(templateElements, galleryElements);
        var comboBoxElements = activeContent.querySelectorAll('.e-combobox');
        var comboBoxEle;
        if (comboBoxElements) {
            for (var i = 0; i < comboBoxElements.length; i++) {
                if (comboBoxElements[parseInt(i.toString(), 10)].closest('.e-input-focus')) {
                    comboBoxEle = comboBoxElements[parseInt(i.toString(), 10)];
                }
            }
        }
        if (comboBoxEle) {
            for (var i = 0; i < ribbonControls.length; i++) {
                if (ribbonControls[parseInt(i.toString(), 10)].classList.contains('e-combobox')) {
                    if (ribbonControls[parseInt(i.toString(), 10)].closest('.e-input-focus')) {
                        this.currentControlIndex = i;
                    }
                }
            }
        }
        if (this.currentControlIndex === 0) {
            var item = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
            while (item && item.classList.contains('e-disabled')) {
                this.currentControlIndex++;
                item = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
            }
        }
        if (e.target.classList.contains('e-control') || e.target.classList.contains('e-ribbon-launcher-icon') ||
            e.target.classList.contains('e-ribbon-collapse-btn') || e.target.classList.contains('e-ribbon-last-item') ||
            e.target.classList.contains('e-ribbon-first-item') || e.target.classList.contains('e-ribbon-group-of-btn') ||
            e.target.classList.contains('e-ribbon-overall-of-btn') || e.target.classList.contains('e-ribbon-template') || e.target.classList.contains('e-ribbon-gallery-item')) {
            switch (e.action) {
                case 'rightarrow':
                    this.handleNavigation(e, !this.enableRtl, ribbonControls);
                    break;
                case 'leftarrow':
                    this.handleNavigation(e, this.enableRtl, ribbonControls);
                    break;
                case 'tab':
                    if (e.target.classList.contains('e-combobox')) {
                        if (this.currentControlIndex < ribbonControls.length - 1) {
                            this.currentControlIndex++;
                        }
                    }
                    break;
                case 'shiftTab':
                    if (e.target.classList.contains('e-combobox')) {
                        if (this.currentControlIndex > 0) {
                            this.currentControlIndex--;
                        }
                    }
                    else {
                        this.tabObj.element.querySelector('.e-toolbar-item.e-active').querySelector('.e-tab-wrap').focus();
                        this.currentControlIndex = 0;
                    }
            }
        }
    };
    Ribbon.prototype.handleNavigation = function (e, enableRtl, ribbonControls) {
        var groupContainer;
        var prevGroupId;
        if (enableRtl) {
            if (this.currentControlIndex < ribbonControls.length - 1 && ribbonControls[this.currentControlIndex + 1].classList.contains('e-colorpicker')) {
                this.currentControlIndex++;
            }
        }
        else {
            if (this.currentControlIndex > 0 && ribbonControls[this.currentControlIndex - 1].classList.contains('e-colorpicker')) {
                this.currentControlIndex--;
            }
        }
        if ((!enableRtl && (this.currentControlIndex > 0)) || (enableRtl && (this.currentControlIndex < ribbonControls.length - 1))) {
            if (!e.target.classList.contains('e-combobox') && (e.target.classList.contains('e-control') || e.target.classList.contains('e-ribbon-template') || e.target.classList.contains('e-ribbon-gallery-item')) && !e.target.classList.contains('e-ribbon-last-item')) {
                if (enableRtl) {
                    this.currentControlIndex++;
                }
                else {
                    var prevGroupContainer = ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTAINER */ .eO);
                    if (prevGroupContainer) {
                        prevGroupId = prevGroupContainer.getAttribute('id');
                    }
                    this.currentControlIndex--;
                }
                var item = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
                while (item && item.classList.contains('e-disabled')) {
                    if (((enableRtl && this.currentControlIndex === ribbonControls.length - 1) ||
                        (!enableRtl && this.currentControlIndex === 0))) {
                        if (ribbonControls[this.currentControlIndex].closest('.e-ribbon-item').classList.contains('e-disabled')) {
                            this.tabObj.element.querySelector('.e-ribbon-collapse-btn').focus();
                            break;
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    enableRtl ? this.currentControlIndex++ : this.currentControlIndex--;
                    item = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
                }
                ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
                if (this.activeLayout === 'Classic') {
                    groupContainer = ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTAINER */ .eO);
                    if (enableRtl) {
                        var launcherIconEle = void 0;
                        if (groupContainer) {
                            launcherIconEle = groupContainer.querySelector('.e-ribbon-launcher-icon');
                        }
                        if (launcherIconEle) {
                            var items = groupContainer.querySelectorAll('.e-ribbon-item');
                            var elem = items[items.length - 1].querySelector('.e-control');
                            if (elem) {
                                elem.classList.add('e-ribbon-last-item');
                            }
                        }
                    }
                    else {
                        if (groupContainer) {
                            var groupContainerId = groupContainer.getAttribute('id');
                            if (prevGroupId !== groupContainerId) {
                                var launcherIconEle = groupContainer.querySelector('.e-ribbon-launcher-icon');
                                if (launcherIconEle) {
                                    ribbonControls[parseInt((this.currentControlIndex + 1).toString(), 10)].classList.add('e-ribbon-first-item');
                                }
                            }
                        }
                    }
                }
                else {
                    if (ribbonControls[parseInt((this.currentControlIndex).toString(), 10)].classList.contains('e-ribbon-first-item')) {
                        ribbonControls[parseInt((this.currentControlIndex).toString(), 10)].classList.remove('e-ribbon-first-item');
                    }
                    else if (ribbonControls[parseInt((this.currentControlIndex).toString(), 10)].classList.contains('e-ribbon-last-item')) {
                        ribbonControls[parseInt((this.currentControlIndex).toString(), 10)].classList.remove('e-ribbon-last-item');
                    }
                }
            }
        }
        else {
            if (this.activeLayout === 'Classic') {
                this.tabObj.element.querySelector('.e-ribbon-collapse-btn').focus();
            }
            if (this.activeLayout === 'Simplified') {
                var overflowButton = this.tabObj.element.querySelector('.e-ribbon-overall-of-btn');
                if (enableRtl && (overflowButton && !overflowButton.classList.contains('e-ribbon-hide'))) {
                    overflowButton.focus();
                }
                else {
                    this.tabObj.element.querySelector('.e-ribbon-collapse-btn').focus();
                }
            }
        }
        if (e.target.classList.contains('e-ribbon-last-item')) {
            if (enableRtl) {
                groupContainer = ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTAINER */ .eO);
                groupContainer.querySelector('.e-ribbon-launcher-icon').focus();
            }
            else {
                this.currentControlIndex--;
                ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
            }
        }
        if (!enableRtl && e.target.classList.contains('e-ribbon-first-item')) {
            groupContainer = ribbonControls[parseInt((this.currentControlIndex - 1).toString(), 10)].closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTAINER */ .eO);
            var launcherIconEle = groupContainer.querySelector('.e-ribbon-launcher-icon');
            if (launcherIconEle) {
                groupContainer.querySelector('.e-ribbon-launcher-icon').focus();
            }
        }
        if (e.target.classList.contains('e-ribbon-launcher-icon')) {
            if (enableRtl) {
                this.currentControlIndex++;
                ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
                if (ribbonControls[parseInt((this.currentControlIndex - 1).toString(), 10)].classList.contains('e-ribbon-last-item')) {
                    ribbonControls[parseInt((this.currentControlIndex - 1).toString(), 10)].classList.remove('e-ribbon-last-item');
                }
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                this.currentControlIndex;
                ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
            }
        }
        if (e.target.classList.contains('e-ribbon-collapse-btn')) {
            if (enableRtl) {
                this.currentControlIndex = 0;
                var ribbonItem = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
                while (ribbonItem && ribbonItem.classList.contains('e-disabled')) {
                    this.currentControlIndex++;
                    ribbonItem = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
                }
                ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
            }
            else {
                var overflowButton = this.tabObj.element.querySelector('.e-ribbon-overall-of-btn');
                if ((overflowButton && !overflowButton.classList.contains('e-ribbon-hide'))) {
                    overflowButton.focus();
                }
                else {
                    this.currentControlIndex = ribbonControls.length - 1;
                    var ribbonItem = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
                    while (ribbonItem && ribbonItem.classList.contains('e-disabled')) {
                        this.currentControlIndex--;
                        ribbonItem = ribbonControls[this.currentControlIndex].closest('.e-ribbon-item');
                    }
                    ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
                }
            }
        }
        if (this.activeLayout === 'Simplified' && e.target.classList.contains('e-ribbon-overall-of-btn')) {
            if (enableRtl) {
                this.tabObj.element.querySelector('.e-ribbon-collapse-btn').focus();
            }
            else {
                this.currentControlIndex = ribbonControls.length - 1;
                ribbonControls[parseInt(this.currentControlIndex.toString(), 10)].focus();
            }
        }
    };
    Ribbon.prototype.resizeHandler = function () {
        var activeContent = this.tabObj.element.querySelector('#' + this.tabs[this.selectedTab].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(activeContent)) {
            this.checkOverflow(this.selectedTab, activeContent);
        }
        if (this.scrollModule) {
            var scrollEle = this.tabObj.element.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HORIZONTAL_SCROLLBAR */ .s3);
            this.scrollModule.scrollStep = scrollEle.offsetWidth;
        }
        if (this.activeLayout === 'Simplified') {
            var activePopup = document.querySelectorAll('.e-ribbon .e-dropdown-btn.e-active, .e-ribbon-group-overflow-ddb .e-dropdown-btn.e-active');
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(activePopup) && activePopup.length) {
                for (var i = 0; i < activePopup.length; i++) {
                    var dropDownBtn = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(activePopup[parseInt(i.toString(), 10)], _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    dropDownBtn.toggle();
                }
            }
        }
        var galleryPopupEle = document.querySelector('.e-ribbon-gallery-popup.e-popup-open');
        if (galleryPopupEle) {
            var popup = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(galleryPopupEle, _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_11__/* .Popup */ .zD);
            popup.hide();
        }
        if (this.ribbonKeyTipModule && this.enableKeyTips) {
            this.ribbonKeyTipModule.removeKeytip();
        }
    };
    Ribbon.prototype.mouseEventHandler = function () {
        if (this.ribbonKeyTipModule && this.enableKeyTips) {
            this.ribbonKeyTipModule.removeKeytip();
        }
    };
    Ribbon.prototype.keytipActionHandler = function (e) {
        if (this.enableKeyTips) {
            var isKeyTipPresent = false;
            var keyPress = e.key;
            if (e.altKey && e.key === 'Meta') {
                var activePopup = document.querySelectorAll('.e-ribbon .e-dropdown-btn.e-active, .e-ribbon-group-overflow-ddb .e-dropdown-btn.e-active');
                if (activePopup.length) {
                    for (var i = 0; i < activePopup.length; i++) {
                        var dropDownBtn = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(activePopup[parseInt(i.toString(), 10)], _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                        dropDownBtn.toggle();
                    }
                    this.ribbonKeyTipModule.removeKeytip();
                }
                else {
                    if (!this.isKeytipOpen) {
                        var backstagePopup = document.querySelector('.e-ribbon-backstage-popup');
                        if (backstagePopup && backstagePopup.classList.contains('e-popup-open')) {
                            this.ribbonBackstageModule.hideBackstage();
                        }
                        this.ribbonKeyTipModule.createKeytip('tab');
                    }
                    else {
                        this.ribbonKeyTipModule.removeKeytip();
                    }
                }
            }
            else if (e.key === 'Escape' || e.key === 'Tab' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                this.ribbonKeyTipModule.removeKeytip(e.key);
            }
            else {
                var keyTipItems = document.querySelectorAll('.e-ribbon-keytip');
                if (keyTipItems) {
                    for (var i = 0; i < keyTipItems.length; i++) {
                        var keyTipItem = keyTipItems[parseInt(i.toString(), 10)];
                        if (keyTipItem.innerHTML.toLowerCase() === keyPress) {
                            isKeyTipPresent = true;
                            this.ribbonKeyTipModule.keytipPress(keyPress);
                            break;
                        }
                    }
                    if (!isKeyTipPresent) {
                        this.checkKeyTipPresent(keyPress, this.keysPress.length);
                    }
                }
            }
        }
    };
    Ribbon.prototype.checkKeyTipPresent = function (keyTip, length) {
        var keyTipItems = document.querySelectorAll('.e-ribbon-keytip');
        for (var i = 0; i < keyTipItems.length; i++) {
            var keyTipItem = keyTipItems[parseInt(i.toString(), 10)];
            if (keyTipItem.innerHTML.length > 1 && keyTipItem.innerHTML[parseInt(length.toString(), 10)].toLowerCase() === keyTip) {
                this.keysPress += keyTip;
                this.ribbonKeyTipModule.keytipPress(this.keysPress);
                this.removeKeytip(this.keysPress);
                break;
            }
        }
    };
    Ribbon.prototype.removeKeytip = function (keyTip) {
        var keyTipItems = document.querySelectorAll('.e-ribbon-keytip');
        for (var i = 0; i < keyTipItems.length; i++) {
            var keyTipItem = keyTipItems[parseInt(i.toString(), 10)];
            if (keyTipItem.innerHTML[0].toLowerCase() !== keyTip && keyTip !== '') {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(keyTipItem);
            }
        }
    };
    Ribbon.prototype.addKeyTip = function (tabIndex, keyTip, id, type) {
        if (this.keyTipElements && this.keyTipElements[parseInt(tabIndex.toString(), 10)]) {
            var isKeyTipExist = false;
            if (!(this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type])) {
                this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type] = [];
            }
            if (Object.keys(this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type]).length) {
                var keytipData = this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type];
                for (var i = 0; i < Object.keys(this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type]).length; i++) {
                    if (keytipData[parseInt(i.toString(), 10)].id === id) {
                        isKeyTipExist = true;
                    }
                }
                if (!isKeyTipExist) {
                    this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type].
                        push({ id: id, type: type, keyTip: keyTip });
                }
            }
            else {
                this.keyTipElements[parseInt(tabIndex.toString(), 10)]["" + type].push({ id: id, type: type, keyTip: keyTip });
            }
        }
    };
    Ribbon.prototype.renderTabs = function () {
        this.tabsInternal = this.tabs.slice();
        this.tabsInternal = this.checkID(this.tabsInternal, 'tab', this.element.id);
        this.setProperties({ tabs: this.tabsInternal }, true);
        var tabEle = this.createElement('div', {
            id: this.element.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_ID */ .Os
        });
        this.element.appendChild(tabEle);
        this.validateItemSize();
        var tabItems = this.createTabItems(this.tabs);
        this.tabObj = new _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_12__/* .Tab */ .oz({
            cssClass: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TAB */ .pE,
            selectedItem: this.selectedTab,
            overflowMode: 'Popup',
            width: this.width,
            items: tabItems,
            enableRtl: this.enableRtl,
            created: this.tabCreated.bind(this),
            selected: this.ribbonTabSelected.bind(this),
            selecting: this.ribbonTabSelecting.bind(this),
            animation: this.tabAnimation
        });
        this.tabObj.appendTo(tabEle);
        //Set the width value as "0px" with unit for proper calculation.
        this.element.style.setProperty(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_FILE_MENU_WIDTH */ .Dp, '0px');
        this.element.style.setProperty(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_HELP_PANE_TEMPLATE_WIDTH */ .Oy, '0px');
        var toolbarEle = tabEle.querySelector('.e-toolbar');
        var toolbar = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(toolbarEle, _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_13__/* .Toolbar */ .M);
        toolbar.setProperties({ width: 'calc(100% - var(--fileMenuWidth) - var(--helpTemplateWidth))' });
        this.element.classList[this.isMinimized ? 'add' : 'remove'](_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MINIMIZE */ .oK);
    };
    Ribbon.prototype.minimize = function (val) {
        var _this = this;
        if (val === this.isMinimized) {
            return;
        }
        var eventArgs = { cancel: false };
        this.trigger(val ? 'ribbonCollapsing' : 'ribbonExpanding', eventArgs, function (args) {
            if (args.cancel) {
                return;
            }
            _this.setProperties({ isMinimized: val }, true);
            _this.element.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MINIMIZE */ .oK, _this.isMinimized);
            //to overwrite inline styles from hscroll
            _this.tabObj.element.querySelector('.e-content').style.display = val ? 'none' : 'block';
            if (!val) {
                _this.refreshLayout();
            }
        });
    };
    Ribbon.prototype.toggleLayout = function (args) {
        this.setProperties({ activeLayout: this.activeLayout === 'Simplified' ? 'Classic' : 'Simplified' }, true);
        this.switchLayout();
        var eventArgs = { activeLayout: this.activeLayout, event: args };
        this.trigger('ribbonLayoutSwitched', eventArgs);
    };
    Ribbon.prototype.tabCreated = function () {
        if (!this.hideLayoutSwitcher) {
            this.addExpandCollapse();
        }
        this.renderInitialTab(this.selectedTab);
    };
    Ribbon.prototype.ribbonTabSelected = function (e) {
        e.preventFocus = true;
        this.isAddRemove = false;
        var selectedTabId = e.selectedItem.getAttribute('data-id');
        var selectedIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, (function (tab) { return (tab.id === selectedTabId); }));
        selectedIndex = selectedIndex === -1 ? this.selectedTab : selectedIndex;
        var selectedContent = this.tabObj.items[parseInt(selectedIndex.toString(), 10)].content;
        if ((!selectedContent.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP */ .PH)) && (this.tabs[parseInt(selectedIndex.toString(), 10)].groups.length !== 0)) {
            var elements = this.createGroups(this.tabs[parseInt(selectedIndex.toString(), 10)].groups, selectedIndex);
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, selectedContent);
        }
        var isContextual = this.isContextualTab(selectedTabId);
        this.updateSelectedState(selectedTabId);
        var eventArgs = { previousIndex: this.selectedTab, selectedIndex: selectedIndex, isContextual: isContextual };
        this.setProperties({ selectedTab: selectedIndex }, true);
        this.calculateHiddenElementsWidth(selectedIndex);
        if (this.isUpdateItems) {
            for (var i = 0; i < this.itemsModel.length; i++) {
                var item = this.itemsModel[parseInt(i.toString(), 10)];
                if (this.selectedTab === this.targetTabs[item.id]) {
                    this.updateItem(item);
                    this.itemsModel.splice(i, 1);
                    i--;
                }
            }
            if (this.itemsModel.length === 0) {
                this.isUpdateItems = false;
            }
        }
        if (this.ribbonGalleryModule) {
            this.ribbonGalleryModule.checkAvailableHeight(e.selectedContent.firstChild);
        }
        this.checkOverflow(selectedIndex, selectedContent);
        if (this.activeLayout === 'Simplified' && this.overflowDDB) {
            var overflowTarget = this.overflowDDB.target;
            var ofTabContainer = overflowTarget.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TAB_ACTIVE */ .ML);
            if (ofTabContainer) {
                ofTabContainer.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TAB_ACTIVE */ .ML);
            }
            var activeTab = overflowTarget.querySelector('#' + selectedTabId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
            if (activeTab) {
                activeTab.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TAB_ACTIVE */ .ML);
                this.overflowDDB.element.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .HIDE_CSS */ .XD);
                this.checkOverflowHiddenItems(false, selectedIndex);
            }
            else {
                this.overflowDDB.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .HIDE_CSS */ .XD);
            }
        }
        this.trigger('tabSelected', eventArgs);
    };
    Ribbon.prototype.updateSelectedState = function (tabID) {
        if (this.contextualTabs.length) {
            for (var i = 0; i < this.contextualTabs.length; i++) {
                var isSelected = false;
                for (var j = 0; j < this.contextualTabs[parseInt(i.toString(), 10)].tabs.length; j++) {
                    if (this.contextualTabs[parseInt(i.toString(), 10)].tabs[parseInt(j.toString(), 10)].id === tabID) {
                        isSelected = true;
                        break;
                    }
                }
                this.contextualTabs[parseInt(i.toString(), 10)].
                    setProperties({ isSelected: isSelected }, true);
            }
        }
    };
    Ribbon.prototype.checkOverflow = function (tabIndex, activeContent) {
        var tabContent = activeContent.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_CONTENT */ .gU);
        var isOverFlow = tabContent.offsetWidth < activeContent.offsetWidth;
        if (isOverFlow && !this.scrollModule) {
            if (this.activeLayout === 'Classic') {
                // Defines whether the shrinking is breaked due to insufficient space.
                var isBreak = false;
                isBreak = this.checkGroupShrinking(tabIndex, tabContent, activeContent, true);
                if (!isBreak && (tabContent.offsetWidth < activeContent.offsetWidth)) {
                    isBreak = this.checkGroupShrinking(tabIndex, tabContent, activeContent, false);
                }
                if (tabContent.offsetWidth < activeContent.offsetWidth) {
                    this.createOverflowDropdown(tabIndex, tabContent, activeContent);
                }
            }
            else {
                this.checkSimplifiedItemShrinking(tabIndex, tabContent, activeContent);
                if (tabContent.offsetWidth < activeContent.offsetWidth) {
                    this.createSimplfiedOverflow(tabContent, activeContent, tabIndex);
                }
            }
            //Adds Scroll if the tabwidth is less the content width even after adding overflow dropdown.
            if ((tabContent.offsetWidth < activeContent.offsetWidth) && (!this.scrollModule)) {
                this.scrollModule = new _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_14__/* .HScroll */ .q({
                    enableRtl: this.enableRtl
                }, this.tabObj.element.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_CONTENT */ .gU));
            }
        }
        else if (!isOverFlow) {
            this.destroyScroll();
            if (this.activeLayout === 'Classic') {
                var isBreak = false;
                isBreak = this.removeOverflowDropdown(tabContent, activeContent, false, tabIndex);
                //Check for expanding small items to medium items.
                if (!isBreak && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                    isBreak = this.checkGroupExpanding(tabIndex, tabContent, activeContent, true);
                }
                //Check for expanding medium items to large items.
                if (!isBreak && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                    isBreak = this.checkGroupExpanding(tabIndex, tabContent, activeContent, false);
                }
            }
            else {
                this.removeSimplfiedOverflow(tabContent, activeContent, tabIndex);
                if (tabContent.offsetWidth > activeContent.offsetWidth) {
                    this.checkSimplifiedItemExpanding(tabIndex, tabContent, activeContent);
                }
            }
        }
        this.addTabOverflowKeyTip();
    };
    Ribbon.prototype.addTabOverflowKeyTip = function () {
        var tabOverflow = this.tabObj.element.querySelector('#_nav');
        if (tabOverflow) {
            this.keyTipElements['taboverflow'] = [];
            this.keyTipElements['taboverflow'].push({ id: tabOverflow.id, type: 'taboverflow', keyTip: '00' });
        }
        else {
            delete (this.keyTipElements['taboverflow']);
        }
    };
    Ribbon.prototype.checkSimplifiedItemShrinking = function (tabIndex, tabContent, activeContent) {
        var tab = this.tabs[parseInt(tabIndex.toString(), 10)];
        for (var i = (tab.groups.length - 1); (i >= 0); i--) {
            var group = tab.groups[parseInt(i.toString(), 10)];
            var groupContainer = tabContent.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
            for (var j = 0; ((j < group.collections.length) && (tabContent.offsetWidth < activeContent.offsetWidth)); j++) {
                var collection = group.collections[parseInt(j.toString(), 10)];
                for (var k = collection.items.length; ((k >= 1) && (tabContent.offsetWidth < activeContent.offsetWidth)); k--) {
                    var item = collection.items[k - 1];
                    if (((item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small) && (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium))
                        && (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) && (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified)) {
                        var itemContainer = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                        if (itemContainer) {
                            var itemEle = itemContainer.querySelector('#' + item.id);
                            itemContainer.setAttribute('data-medium-width', activeContent.offsetWidth.toString());
                            item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small }, true);
                            this.setItemSize(itemEle, item);
                        }
                    }
                }
            }
        }
    };
    Ribbon.prototype.checkSimplifiedItemExpanding = function (tabIndex, tabContent, activeContent) {
        var tab = this.tabs[parseInt(tabIndex.toString(), 10)];
        for (var i = (tab.groups.length - 1); (i >= 0); i--) {
            var group = tab.groups[parseInt(i.toString(), 10)];
            var groupContainer = tabContent.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
            for (var j = 0; ((j < group.collections.length) && (tabContent.offsetWidth > activeContent.offsetWidth)); j++) {
                var collection = group.collections[parseInt(j.toString(), 10)];
                for (var k = collection.items.length; ((k >= 1) && (tabContent.offsetWidth > activeContent.offsetWidth)); k--) {
                    var item = collection.items[k - 1];
                    if (((item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small) && (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium))
                        && (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small) && (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified)) {
                        var itemContainer = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                        if (itemContainer) {
                            var valString = itemContainer.getAttribute('data-medium-width');
                            var value = valString ? parseInt(valString, 10) : null;
                            if (value && (tabContent.offsetWidth > value)) {
                                itemContainer.removeAttribute('data-medium-width');
                                var itemEle = itemContainer.querySelector('#' + item.id);
                                item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                                this.setItemSize(itemEle, item);
                            }
                        }
                    }
                }
            }
        }
    };
    Ribbon.prototype.createSimplfiedOverflow = function (tabContent, activeContent, tabIndex) {
        var orderedGroups = this.getGroupResizeOrder(true, tabIndex);
        var isEmptyCollection;
        for (var i = 0; ((i < orderedGroups.length) && (tabContent.offsetWidth < activeContent.offsetWidth)); i++) {
            var isGroupUpdated = false;
            var group = orderedGroups[parseInt(i.toString(), 10)];
            var groupEle = tabContent.querySelector('#' + group.id);
            var groupContainer = groupEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
            for (var j = group.collections.length; ((j >= 1) && (tabContent.offsetWidth < activeContent.offsetWidth)); j--) {
                var collection = group.collections[parseInt((j - 1).toString(), 10)];
                var collectionEle = groupEle.querySelector('#' + collection.id);
                for (var k = collection.items.length; ((k >= 1) && (tabContent.offsetWidth < activeContent.offsetWidth)); k--) {
                    var item = collection.items[k - 1];
                    var itemContainer = collectionEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (((item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Auto) ||
                        (item.displayOptions === (_interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified | _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow))) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(itemContainer)) {
                        var groupHidden = false;
                        var itemHidden = false;
                        var isAllItemHidden = false;
                        var isEmptyCollection_1 = false;
                        var groupItems = void 0;
                        if (groupEle.classList.contains('e-hidden') || groupEle.classList.contains('e-hide-group')) {
                            groupItems = groupEle.querySelectorAll('.e-ribbon-item.e-hidden');
                            if (groupItems.length) {
                                for (var i_1 = 0; i_1 < groupItems.length; i_1++) {
                                    groupItems[parseInt(i_1.toString(), 10)].classList.remove('e-hidden');
                                }
                            }
                            if (groupEle.classList.contains('e-hide-group')) {
                                isAllItemHidden = true;
                                groupEle.classList.remove('e-hide-group');
                                groupEle.classList.remove('e-ribbon-emptyCollection');
                                if (this.hiddenGroups.indexOf(groupEle.id) !== -1) {
                                    this.hiddenGroups.splice(this.hiddenGroups.indexOf(groupEle.id), 1);
                                }
                            }
                            else {
                                groupHidden = true;
                                groupEle.classList.remove('e-hidden');
                            }
                            if (!isGroupUpdated) {
                                this.calculateOverflowItemsWidth(groupEle.offsetWidth, false, tabIndex);
                                this.calculateMediumDataWidth(groupEle.offsetWidth, tabIndex, false);
                                isGroupUpdated = true;
                            }
                        }
                        else {
                            if (itemContainer.classList.contains('e-hidden')) {
                                itemHidden = true;
                                itemContainer.classList.remove('e-hidden');
                                if (groupEle.classList.contains('e-ribbon-emptyCollection')) {
                                    isEmptyCollection_1 = true;
                                    groupEle.classList.remove('e-ribbon-emptyCollection');
                                }
                                this.calculateOverflowItemsWidth(itemContainer.offsetWidth, false, tabIndex);
                                this.calculateMediumDataWidth(itemContainer.offsetWidth, tabIndex, false);
                            }
                        }
                        itemContainer.setAttribute('data-simplified-width', (activeContent.offsetWidth).toString());
                        if (itemHidden) {
                            itemContainer.classList.add('e-hidden');
                        }
                        if (groupItems && groupItems.length) {
                            for (var i_2 = 0; i_2 < groupItems.length; i_2++) {
                                groupItems[parseInt(i_2.toString(), 10)].classList.add('e-hidden');
                            }
                        }
                        if (groupHidden) {
                            groupEle.classList.add('e-hidden');
                        }
                        if (isAllItemHidden) {
                            groupEle.classList.add('e-hide-group');
                            groupEle.classList.add('e-ribbon-emptyCollection');
                        }
                        if (isEmptyCollection_1) {
                            groupEle.classList.add('e-ribbon-emptyCollection');
                        }
                        this.createOverflowPopup(item, tabIndex, group.enableGroupOverflow, group.id, group.header, itemContainer, groupContainer, true);
                        if (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small) {
                            var itemEle = itemContainer.querySelector('#' + item.id);
                            item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                            this.setItemSize(itemEle, item);
                        }
                        if ((item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) ||
                            (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                            this.updatePopupItems(item, itemContainer, group.enableGroupOverflow, true);
                        }
                    }
                }
            }
            if (!(group.enableGroupOverflow || groupEle.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5))) {
                groupEle.classList.add('e-ribbon-emptyCollection');
            }
            var itemsLength = groupEle.querySelectorAll('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5);
            if (itemsLength && !group.enableGroupOverflow) {
                isEmptyCollection = this.checkEmptyCollection(itemsLength);
                if (isEmptyCollection) {
                    groupEle.classList.add('e-ribbon-emptyCollection');
                }
            }
            this.checkOverflowHiddenItems(group.enableGroupOverflow, tabIndex, group.id);
        }
    };
    Ribbon.prototype.checkEmptyCollection = function (itemsLength) {
        var isEmptyCollection = true;
        for (var i = 0; i < itemsLength.length; i++) {
            if (!(itemsLength[parseInt(i.toString(), 10)].classList.contains('e-hidden'))) {
                isEmptyCollection = false;
                break;
            }
        }
        return isEmptyCollection;
    };
    Ribbon.prototype.updatePopupItems = function (item, itemEle, isGroupOF, isMenu) {
        var _this = this;
        var dropdown = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(itemEle.querySelector('#' + item.id), (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown || item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery || item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) ? _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q : _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_15__/* .SplitButton */ .f);
        var dropDownPopup = dropdown.dropDown;
        // popup is on right if (isGroupOF && isMenu)
        // The position is reversed if RTL is enabled.
        // isRight = ((isGroupOF && isMenu) && !this.enableRtl ) || (!(isGroupOF && isMenu) && this.enableRtl)  ==> (isGroupOF && isMenu) !== this.enableRtl
        var isLeft = (isGroupOF && isMenu) === this.enableRtl;
        if (dropDownPopup) {
            dropDownPopup.setProperties({ position: { X: isLeft ? 'left' : 'right', Y: isMenu ? 'top' : 'bottom' } }, true);
            if (isMenu) {
                dropdown.beforeOpen = function (e) {
                    if (isLeft) {
                        if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery && _this.ribbonGalleryModule) {
                            _this.ribbonGalleryModule.checkCollision(dropDownPopup, dropDownPopup.element);
                        }
                        dropDownPopup.element.style.setProperty('visibility', 'hidden');
                        dropDownPopup.element.style.setProperty('display', 'block');
                        dropDownPopup.setProperties({ offsetX: -1 * dropDownPopup.element.offsetWidth });
                        dropDownPopup.element.style.removeProperty('display');
                        dropDownPopup.element.style.removeProperty('visibility');
                    }
                    if (item.splitButtonSettings.beforeOpen) {
                        item.splitButtonSettings.beforeOpen.call(_this, e);
                    }
                    if (item.dropDownSettings.beforeOpen) {
                        item.dropDownSettings.beforeOpen.call(_this, e);
                    }
                };
            }
            else {
                dropDownPopup.setProperties({ offsetX: 0 }, true);
                dropdown.beforeOpen = null;
            }
        }
    };
    Ribbon.prototype.removeSimplfiedOverflow = function (tabContent, activeContent, tabIndex, isClear) {
        if (isClear === void 0) { isClear = false; }
        var orderedGroups = this.getGroupResizeOrder(false, tabIndex);
        var flag = true;
        var isEmptyCollection;
        for (var i = 0; ((i < orderedGroups.length) && flag); i++) {
            var group = orderedGroups[parseInt(i.toString(), 10)];
            var overflowDDB = void 0;
            var overflowtarget = void 0;
            if (group.enableGroupOverflow) {
                var overflowDDBEle = tabContent.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
                if (overflowDDBEle) {
                    overflowDDB = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDBEle, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    overflowtarget = overflowDDB.target;
                }
            }
            else {
                overflowDDB = this.overflowDDB;
                overflowtarget = this.overflowDDB ? this.overflowDDB.target : null;
            }
            for (var j = 0; ((j < group.collections.length) && flag); j++) {
                var collection = group.collections[parseInt(j.toString(), 10)];
                // eslint-disable-next-line max-len
                for (var k = 0; ((k < collection.items.length) && flag && !isClear && (tabContent.offsetWidth > activeContent.offsetWidth)); k++) {
                    var item = collection.items[parseInt(k.toString(), 10)];
                    var itemContainer = void 0;
                    if (overflowtarget) {
                        itemContainer = overflowtarget.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    }
                    if (((item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Auto) ||
                        (item.displayOptions === (_interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified | _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow))) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(itemContainer)) {
                        var width = parseInt(itemContainer.getAttribute('data-simplified-width'), 10);
                        var groupItemEle = tabContent.querySelector('#' + group.id);
                        if (itemContainer.classList.contains('e-hidden') || groupItemEle.classList.contains('e-hidden')) {
                            width = Math.abs(width - activeContent.offsetWidth);
                        }
                        if (!isClear && (tabContent.offsetWidth < width)) {
                            flag = false;
                            break;
                        }
                        var groupEle = tabContent.querySelector('#' + collection.id);
                        if ((item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) ||
                            (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                            this.updatePopupItems(item, itemContainer, group.enableGroupOverflow, false);
                        }
                        groupEle.append(itemContainer);
                        if (itemContainer.classList.contains('e-hidden') || groupItemEle.classList.contains('e-hidden')) {
                            itemContainer.setAttribute('data-simplified-width', width.toString());
                            var isGroupHidden = false;
                            var widthDifference = 0;
                            if (itemContainer.classList.contains('e-hidden')) {
                                itemContainer.classList.remove('e-hidden');
                                if (groupItemEle.classList.contains('e-hide-group')) {
                                    isGroupHidden = true;
                                    widthDifference = this.checkWidthDifference(itemContainer, groupItemEle);
                                }
                                width = itemContainer.offsetWidth + widthDifference;
                                itemContainer.classList.add('e-hidden');
                            }
                            this.calculateOverflowItemsWidth(width, true, tabIndex);
                            this.calculateMediumDataWidth(width, tabIndex, true);
                            if (isGroupHidden) {
                                groupItemEle.classList.add('e-hide-group');
                                groupItemEle.classList.add('e-ribbon-emptyCollection');
                            }
                        }
                        this.removeOverflowEvent(item, itemContainer);
                        if (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small) {
                            item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small }, true);
                            this.setItemSize(itemContainer.querySelector('#' + item.id), item);
                        }
                        var groupElement = tabContent.querySelector('#' + group.id);
                        var itemEle = groupElement.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5);
                        if (groupElement.classList.contains('e-ribbon-emptyCollection') && itemEle !== null) {
                            var itemsLength = groupElement.querySelectorAll('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5);
                            if (itemsLength) {
                                isEmptyCollection = this.checkEmptyCollection(itemsLength);
                                if (!isEmptyCollection) {
                                    groupElement.classList.remove('e-ribbon-emptyCollection');
                                }
                            }
                        }
                    }
                }
            }
            if (overflowDDB) {
                if (group.enableGroupOverflow) {
                    if (overflowtarget.childElementCount === 0 ||
                        (overflowtarget.childElementCount === 1 && this.isHeaderVisible(overflowtarget, group.id))) {
                        this.removeOverflowButton(overflowDDB);
                    }
                }
                else {
                    var ofGroupContainer = overflowtarget.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (ofGroupContainer && ofGroupContainer.childElementCount === 1) {
                        ofGroupContainer.remove();
                    }
                    var ofTabContainer = overflowtarget.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                    if (ofTabContainer && ofTabContainer.childElementCount === 0) {
                        ofTabContainer.remove();
                        this.overflowDDB.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .HIDE_CSS */ .XD);
                    }
                }
            }
        }
        for (var i = 0; i < orderedGroups.length; i++) {
            this.checkOverflowHiddenItems(orderedGroups[parseInt(i.toString(), 10)].enableGroupOverflow, tabIndex, orderedGroups[parseInt(i.toString(), 10)].id);
        }
        if (this.overflowDDB) {
            var overflowEle = this.overflowDDB.target;
            if (overflowEle.childElementCount === 0) {
                this.removeOverflowButton(this.overflowDDB);
                this.overflowDDB = null;
            }
        }
    };
    Ribbon.prototype.checkOverflowHiddenItems = function (isGroupOF, tabIndex, groupId) {
        if (isGroupOF) {
            var overflowDDB = document.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
            if (overflowDDB) {
                var overflowButton = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDB, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                var overflowBtnTarget = overflowButton.target;
                var itemEle = overflowBtnTarget.querySelectorAll('.e-ribbon-item');
                var isHidden = true;
                for (var i = 0; i < itemEle.length; i++) {
                    if (!(itemEle[parseInt(i.toString(), 10)].classList.contains('e-hidden'))) {
                        isHidden = false;
                        break;
                    }
                }
                overflowButton.element.classList[isHidden ? 'add' : 'remove']('e-hidden');
            }
        }
        else {
            if (this.overflowDDB) {
                var isGroupHidden = true;
                var isItemHidden = void 0;
                var overflowEle = this.overflowDDB.target;
                var ofTabContainer = overflowEle.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                if (ofTabContainer) {
                    for (var k = 0; k < ofTabContainer.children.length; k++) {
                        isItemHidden = true;
                        var overflowTab = ofTabContainer.children[parseInt(k.toString(), 10)];
                        var groupTabContainer = overflowTab.querySelectorAll('.e-ribbon-item');
                        for (var n = 0; n < groupTabContainer.length; n++) {
                            if (!(groupTabContainer[parseInt(n.toString(), 10)].classList.contains('e-hidden'))) {
                                isItemHidden = false;
                                break;
                            }
                        }
                        overflowTab.classList[isItemHidden ? 'add' : 'remove']('e-hide-group');
                        if (!(overflowTab.classList.contains('e-hide-group')) && !(overflowTab.classList.contains('e-hidden'))) {
                            isGroupHidden = false;
                        }
                    }
                    this.overflowDDB.element.classList[isGroupHidden ? 'add' : 'remove'](_constant__WEBPACK_IMPORTED_MODULE_9__/* .HIDE_CSS */ .XD);
                }
            }
        }
    };
    Ribbon.prototype.createOverflowPopup = function (item, tabIndex, isGroupOF, groupId, groupHeader, itemEle, groupContainer, isResize) {
        var overflowButton;
        var overflowtarget;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupId);
        var contentEle = this.tabObj.items[parseInt(tabIndex.toString(), 10)].content;
        var groupEle = contentEle.querySelector('#' + groupId);
        if (isGroupOF) {
            var overflowDDB = groupContainer.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
            if (!overflowDDB) {
                overflowButton = this.addOverflowButton(groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW, isGroupOF);
                overflowButton.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_OF_BUTTON */ .O2);
                groupContainer.appendChild(overflowButton.element);
            }
            else {
                overflowButton = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDB, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
            }
            this.addKeyTip(tabIndex, '0' + (itemProp.groupIndex + 1), overflowButton.element.id, 'grpofbtn');
            overflowtarget = overflowButton.target;
            var overflowBtnTarget = overflowButton.target;
            var headerEle = overflowBtnTarget.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG);
            if (!headerEle) {
                if (itemProp.group.overflowHeader) {
                    var groupHeader_1 = this.createElement('div', {
                        className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERFLOW_HEADER */ .Om,
                        id: groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG,
                        innerHTML: itemProp.group.overflowHeader
                    });
                    overflowBtnTarget.append(groupHeader_1);
                }
            }
            if (groupEle) {
                if (groupEle.classList.contains('e-disabled')) {
                    overflowBtnTarget.classList.add('e-disabled');
                }
                if (groupEle.classList.contains('e-hidden')) {
                    overflowBtnTarget.classList.add('e-hidden');
                }
                if (groupEle.classList.contains('e-hide-group')) {
                    overflowBtnTarget.classList.add('e-hide-group');
                }
            }
            if (isResize) {
                overflowBtnTarget.insertBefore(itemEle, overflowBtnTarget.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5));
            }
            else {
                overflowBtnTarget.append(itemEle);
            }
        }
        else {
            if (!this.overflowDDB) {
                this.overflowDDB = this.addOverflowButton(this.tabObj.element.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVRLOF_BUTTON_ID */ .E5, isGroupOF);
                this.tabObj.element.insertBefore(this.overflowDDB.element, this.collapseButton);
                this.overflowDDB.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERALL_OF_BUTTON */ .AW);
                this.createOfTabContainer(groupId, groupHeader, itemEle, tabIndex);
            }
            else {
                this.overflowDDB.element.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .HIDE_CSS */ .XD);
                var overflowEle = this.overflowDDB.target;
                var ofTabContainer = overflowEle.querySelector('#' +
                    this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                if (ofTabContainer) {
                    var ofGroupContainer = overflowEle.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (!ofGroupContainer) {
                        ofGroupContainer = itemProp.group.overflowHeader ? this.createGroupContainer(groupId, itemProp.group.overflowHeader) : this.createGroupContainer(groupId, groupHeader);
                        if (groupEle) {
                            if (groupEle.classList.contains('e-disabled')) {
                                ofGroupContainer.classList.add('e-disabled');
                            }
                            if (groupEle.classList.contains('e-hidden')) {
                                ofGroupContainer.classList.add('e-hidden');
                            }
                            if (groupEle.classList.contains('e-hide-group')) {
                                ofGroupContainer.classList.add('e-hide-group');
                            }
                        }
                        ofTabContainer.append(ofGroupContainer);
                    }
                    if (isResize) {
                        ofGroupContainer.insertBefore(itemEle, ofGroupContainer.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5));
                    }
                    else {
                        ofGroupContainer.append(itemEle);
                    }
                }
                else {
                    this.createOfTabContainer(groupId, groupHeader, itemEle, tabIndex);
                }
            }
            overflowButton = this.overflowDDB;
            overflowtarget = this.overflowDDB ? this.overflowDDB.target : null;
        }
        if (itemEle !== null) {
            this.addOverflowEvents(item, itemEle, overflowButton);
        }
        if (overflowtarget) {
            if (item.keyTip) {
                this.addKeyTip(tabIndex, item.keyTip, item.id, 'popupitem');
            }
        }
    };
    Ribbon.prototype.addOverflowEvents = function (item, itemEle, overflowButton) {
        switch (item.type) {
            case 'Button':
                this.ribbonButtonModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
            case 'DropDown':
                this.ribbonDropDownModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
            case 'SplitButton':
                this.ribbonSplitButtonModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
            case 'CheckBox':
                this.ribbonCheckBoxModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
            case 'ColorPicker':
                this.ribbonColorPickerModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
            case 'ComboBox':
                this.ribbonComboBoxModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
            case 'Gallery':
                if (this.activeLayout === 'Simplified') {
                    this.ribbonGalleryModule.addOverFlowEvents(item, itemEle);
                }
                break;
            case 'GroupButton':
                this.ribbonGroupButtonModule.addOverFlowEvents(item, itemEle, overflowButton);
                break;
        }
    };
    Ribbon.prototype.createOfTabContainer = function (groupId, groupHeader, itemEle, tabIndex) {
        var ofTabContainer = this.createElement('div', {
            id: this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4,
            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OF_TAB_CONTAINER */ .TM
        });
        var overflowtarget = this.overflowDDB.target;
        overflowtarget.append(ofTabContainer);
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupId);
        var ofGroupContainer = itemProp.group.overflowHeader ?
            this.createGroupContainer(groupId, itemProp.group.overflowHeader) : this.createGroupContainer(groupId, groupHeader);
        ofGroupContainer.append(itemEle);
        ofTabContainer.append(ofGroupContainer);
        if (tabIndex === this.selectedTab) {
            ofTabContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TAB_ACTIVE */ .ML);
        }
        var groupEle = document.querySelector('#' + groupId);
        if (groupEle) {
            if (groupEle.classList.contains('e-disabled')) {
                ofGroupContainer.classList.add('e-disabled');
            }
            if (groupEle.classList.contains('e-hidden')) {
                ofGroupContainer.classList.add('e-hidden');
            }
            if (groupEle.classList.contains('e-hide-group')) {
                ofGroupContainer.classList.add('e-hide-group');
            }
        }
    };
    Ribbon.prototype.checkGroupShrinking = function (tabIndex, tabContent, activeContent, isLarge) {
        var isOverFlow = true;
        var isBreak = false;
        var tab = this.tabs[parseInt(tabIndex.toString(), 10)];
        for (var j = (tab.groups.length - 1); (isOverFlow && (j >= 0)); j--) {
            // eslint-disable-next-line max-len
            isBreak = isLarge ? this.checkLargeToMedium(tabIndex, tab, j, tabContent, activeContent) : this.checkMediumToSmall(tabIndex, tab, j, tabContent, activeContent);
            isOverFlow = !isBreak && (tabContent.offsetWidth < activeContent.offsetWidth);
        }
        return isBreak;
    };
    Ribbon.prototype.checkValidCollectionLength = function (collections) {
        var count = 0;
        for (var i = 0; i < collections.length; i++) {
            var items = collections[parseInt(i.toString(), 10)].items;
            for (var ind = 0; ind < items.length; ind++) {
                if (items[parseInt(ind.toString(), 10)].displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                    count++;
                    break;
                }
            }
            if (count > 1) {
                return false;
            }
        }
        return count === 1;
    };
    Ribbon.prototype.checkClassicCollection = function (collections, n, isIncrement) {
        var items = collections[parseInt(n.toString(), 10)].items;
        for (var ind = 0; ind < items.length; ind++) {
            if (items[parseInt(ind.toString(), 10)].displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                return n;
            }
        }
        n = isIncrement ? n + 1 : n - 1;
        if (isIncrement) {
            return (n === collections.length) ? n : this.checkClassicCollection(collections, n, isIncrement);
        }
        else {
            return (n < 0) ? n : this.checkClassicCollection(collections, n, isIncrement);
        }
    };
    Ribbon.prototype.checkClassicItem = function (items, n, isIncrement) {
        var item = items[parseInt(n.toString(), 10)];
        if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
            return n;
        }
        n = isIncrement ? n + 1 : n - 1;
        if (isIncrement) {
            return (n === items.length) ? n : this.checkClassicItem(items, n, isIncrement);
        }
        else {
            return (n < 0) ? n : this.checkClassicItem(items, n, isIncrement);
        }
    };
    Ribbon.prototype.checkLargeToMedium = function (tabIndex, tab, groupIndex, tabContent, activeContent, shouldSkip) {
        var _this = this;
        if (shouldSkip === void 0) { shouldSkip = false; }
        var group = tab.groups[parseInt(groupIndex.toString(), 10)];
        if (group.isCollapsed && !shouldSkip) {
            return false;
        }
        var canReduceCollection = function (collection) {
            return (collection.items.length === 1) && canReduceItem(collection.items[0]);
        };
        var canReduceItem = function (item) {
            return (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) && (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large);
        };
        var createShrinkEle = function (id, firstItem, start, end) {
            var shrinkEle = _this.createElement('div', {
                className: 'e-ribbon-shrink' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH,
                id: id + '_shrink_container' + start,
                attrs: { 'data-start': start.toString(), 'data-end': end.toString() }
            });
            firstItem.parentElement.insertBefore(shrinkEle, firstItem);
            if (!shouldSkip) {
                shrinkEle.setAttribute('data-large-width', activeContent.offsetWidth.toString());
            }
            return shrinkEle;
        };
        var moveItemToColumn = function (start, end) {
            var collection = _this.tabs[parseInt(tabIndex.toString(), 10)]
                .groups[parseInt(groupIndex.toString(), 10)].collections[0];
            var firstItem = activeContent.querySelector('#' + collection.items[parseInt(start.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
            var shrinkEle = shouldSkip ? activeContent.querySelector('#' + collection.id + '_shrink_container' + start) :
                createShrinkEle(collection.id, firstItem, start, end);
            for (var i = start; i <= end; i++) {
                var item = collection.items[parseInt(i.toString(), 10)];
                if (!(item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic)) {
                    continue;
                }
                var ele = activeContent.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                shrinkEle.appendChild(ele);
                item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton && _this.activeLayout === 'Classic') {
                    _this.setItemSize(ele.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL), item);
                }
                else {
                    _this.setItemSize(ele.querySelector('#' + item.id), item);
                }
            }
        };
        var moveCollectionToColumn = function (start, end) {
            var group = _this.tabs[parseInt(tabIndex.toString(), 10)]
                .groups[parseInt(groupIndex.toString(), 10)];
            var firstItem = activeContent.querySelector('#' + group.collections[parseInt(start.toString(), 10)].id);
            var shrinkEle = shouldSkip ? activeContent.querySelector('#' + group.id + '_shrink_container' + start) :
                createShrinkEle(group.id, firstItem, start, end);
            for (var i = start; i <= end; i++) {
                var collection = group.collections[parseInt(i.toString(), 10)];
                var ele = activeContent.querySelector('#' + collection.id);
                shrinkEle.appendChild(ele);
                collection.items[0].setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                if (collection.items[0].type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton && _this.activeLayout === 'Classic') {
                    _this.setItemSize(ele.querySelector('#' + collection.items[0].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL), collection.items[0]);
                }
                else {
                    _this.setItemSize(ele.querySelector('#' + collection.items[0].id), collection.items[0]);
                }
            }
        };
        var orientation = group.orientation;
        if (orientation === _interface__WEBPACK_IMPORTED_MODULE_8__/* .ItemOrientation */ .sj.Column) {
            for (var k = (group.collections.length - 1); k > 0; k--) {
                //to avoid negative index while checking for the second collection
                k = this.checkClassicCollection(group.collections, k, false);
                var l = k - 1;
                //Checks the element rendered at position n
                if ((l >= 0) && canReduceCollection(group.collections[parseInt(k.toString(), 10)])) {
                    l = this.checkClassicCollection(group.collections, l, false);
                    //Checks the element rendered at position n-1
                    if ((l >= 0) && canReduceCollection(group.collections[parseInt(l.toString(), 10)])) {
                        var m = l - 1;
                        if (m >= 0) {
                            m = this.checkClassicCollection(group.collections, m, false);
                        }
                        //Checks the element rendered at position n-2
                        if ((m >= 0) && canReduceCollection(group.collections[parseInt(m.toString(), 10)])) {
                            moveCollectionToColumn(m, k);
                        }
                        else {
                            moveCollectionToColumn(l, k);
                        }
                        k = m;
                        if (!shouldSkip && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                            return true;
                        }
                    }
                    else {
                        k = l;
                    }
                }
            }
        }
        else {
            if (this.checkValidCollectionLength(group.collections)) {
                var collection = group.collections[0];
                for (var k = (collection.items.length - 1); k > 0; k--) {
                    //to avoid negative index while checking for the second item
                    k = this.checkClassicItem(collection.items, k, false);
                    var l = k - 1;
                    //Checks the element rendered at position n
                    if ((l >= 0) && canReduceItem(collection.items[parseInt(k.toString(), 10)])) {
                        l = this.checkClassicItem(collection.items, l, false);
                        //Checks the element rendered at position n-1
                        if ((l >= 0) && canReduceItem(collection.items[parseInt(l.toString(), 10)])) {
                            var m = l - 1;
                            //Checks the element rendered at position n-2
                            if (m >= 0) {
                                m = this.checkClassicItem(collection.items, m, false);
                            }
                            if ((m >= 0) && canReduceItem(collection.items[parseInt(m.toString(), 10)])) {
                                moveItemToColumn(m, k);
                            }
                            else {
                                moveItemToColumn(l, k);
                            }
                            k = m;
                            if (!shouldSkip && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                                return true;
                            }
                        }
                        else {
                            k = l;
                        }
                    }
                }
            }
        }
        return false;
    };
    Ribbon.prototype.checkMediumToSmall = function (tabIndex, tab, groupIndex, tabContent, activeContent, shouldSkip) {
        var _this = this;
        if (shouldSkip === void 0) { shouldSkip = false; }
        var group = tab.groups[parseInt(groupIndex.toString(), 10)];
        if (group.isCollapsed && !shouldSkip) {
            return false;
        }
        var orientation = group.orientation;
        var ele = activeContent.querySelector('#' + group.id);
        var shrinkColumns = ele.querySelectorAll('.' + 'e-ribbon-shrink');
        var canReduceItem = function (item) {
            return (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small) && (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium);
        };
        var reduceItemsToSmall = function (collectionIndex, start, end, middle) {
            if (middle === void 0) { middle = null; }
            var collection = _this.tabs[parseInt(tabIndex.toString(), 10)]
                .groups[parseInt(groupIndex.toString(), 10)].collections[parseInt(collectionIndex.toString(), 10)];
            var reduce = function (i) {
                var item = collection.items[parseInt(i.toString(), 10)];
                if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                    var ele_1 = activeContent.querySelector('#' + item.id);
                    item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small }, true);
                    if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                        ele_1 = activeContent.querySelector('#' + item.id + '_grpbtn');
                    }
                    _this.setItemSize(ele_1, item);
                }
            };
            reduce(start);
            if (middle) {
                reduce(middle);
            }
            reduce(end);
        };
        var reduceCollectionsToSmall = function (index, start, end, middle) {
            if (middle === void 0) { middle = null; }
            var group = _this.tabs[parseInt(tabIndex.toString(), 10)]
                .groups[parseInt(groupIndex.toString(), 10)];
            if (!shouldSkip) {
                shrinkColumns[parseInt(index.toString(), 10)].setAttribute('data-medium-width', activeContent.offsetWidth.toString());
            }
            var reduce = function (i) {
                var collection = group.collections[parseInt(i.toString(), 10)];
                if (collection.items[0].displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                    var ele_2 = activeContent.querySelector('#' + collection.items[0].id);
                    collection.items[0].setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small }, true);
                    if (collection.items[0].type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                        ele_2 = activeContent.querySelector('#' + collection.items[0].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                    }
                    _this.setItemSize(ele_2, collection.items[0]);
                }
            };
            reduce(start);
            if (middle) {
                reduce(middle);
            }
            reduce(end);
        };
        var setWidth = function (id) {
            if (!shouldSkip) {
                var ele_3 = activeContent.querySelector('#' + id);
                ele_3.setAttribute('data-medium-width', activeContent.offsetWidth.toString());
            }
        };
        if (orientation === _interface__WEBPACK_IMPORTED_MODULE_8__/* .ItemOrientation */ .sj.Column) {
            if (shrinkColumns.length > 0) {
                for (var k = (shrinkColumns.length - 1); k >= 0; k--) {
                    var start = parseInt(shrinkColumns[parseInt(k.toString(), 10)].getAttribute('data-start'), 10);
                    var end = parseInt(shrinkColumns[parseInt(k.toString(), 10)].getAttribute('data-end'), 10);
                    //only 2 or 3 itmes alone can be present in shrinked column
                    var l = this.checkClassicCollection(group.collections, start + 1, false); //next valid item
                    if (canReduceItem(group.collections[parseInt(start.toString(), 10)].items[0])
                        && canReduceItem(group.collections[parseInt(l.toString(), 10)].items[0])) {
                        if (end === l) { //if only 2 item, then next valid item will be the end item, else check for 3 rd item satus.
                            reduceCollectionsToSmall(k, start, end);
                        }
                        else if (canReduceItem(group.collections[parseInt(end.toString(), 10)].items[0])) {
                            reduceCollectionsToSmall(k, start, end, l);
                        }
                        if (!shouldSkip && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                            return true;
                        }
                    }
                }
            }
            for (var k = (group.collections.length - 1); k >= 0; k--) {
                var collection = group.collections[parseInt(k.toString(), 10)];
                var classicItems = [];
                for (var i = 0; i < collection.items.length; i++) {
                    if (collection.items[parseInt(i.toString(), 10)].displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                        classicItems.push(i);
                    }
                }
                //If items length is 1 then, it would have been already check for shrinked column
                if ((classicItems.length > 1)) {
                    if (canReduceItem(collection.items[classicItems[0]]) && canReduceItem(collection.items[classicItems[1]])) {
                        if (classicItems.length === 2) {
                            setWidth(collection.id);
                            reduceItemsToSmall(k, classicItems[0], classicItems[1]);
                        }
                        else if (canReduceItem(collection.items[classicItems[2]])) {
                            setWidth(collection.id);
                            reduceItemsToSmall(k, classicItems[0], classicItems[2], classicItems[1]);
                        }
                        if (!shouldSkip && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                            return true;
                        }
                    }
                }
            }
        }
        else {
            if (this.checkValidCollectionLength(group.collections)) {
                if (shrinkColumns.length > 0) {
                    for (var k = (shrinkColumns.length - 1); k >= 0; k--) {
                        var shrinkColumn = shrinkColumns[parseInt(k.toString(), 10)];
                        var start = parseInt(shrinkColumn.getAttribute('data-start'), 10);
                        var end = parseInt(shrinkColumn.getAttribute('data-end'), 10);
                        //only 2 or 3 itmes alone can be present in shrinked column
                        var collection = group.collections[0];
                        var l = this.checkClassicItem(collection.items, start + 1, false); //next valid item
                        if (canReduceItem(group.collections[0].items[parseInt(start.toString(), 10)])
                            && canReduceItem(group.collections[0].items[parseInt(l.toString(), 10)])) {
                            if (end === l) { //if only 2 item, then next valid item will be the end item, else check for 3 rd item satus.
                                setWidth(shrinkColumn.id);
                                reduceItemsToSmall(0, start, end);
                            }
                            else if (canReduceItem(group.collections[0].items[parseInt(end.toString(), 10)])) {
                                setWidth(shrinkColumn.id);
                                reduceItemsToSmall(0, start, end, l);
                            }
                            if (!shouldSkip && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                                return true;
                            }
                        }
                    }
                }
            }
            else {
                for (var k = (group.collections.length - 1); k >= 0; k--) {
                    var collection = group.collections[parseInt(k.toString(), 10)];
                    for (var l = (collection.items.length - 1); l >= 0; l--) {
                        l = this.checkClassicItem(collection.items, l, false);
                        if (l < 0) {
                            continue;
                        }
                        var item = collection.items[parseInt(l.toString(), 10)];
                        if (canReduceItem(item)) {
                            if (item.type !== _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                                setWidth(item.id);
                            }
                            else {
                                setWidth(item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                            }
                            reduceItemsToSmall(k, l, l);
                            if (!shouldSkip && (tabContent.offsetWidth > activeContent.offsetWidth)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    };
    Ribbon.prototype.checkGroupExpanding = function (tabIndex, tabContent, activeContent, isSmall) {
        var isBreak = false;
        var tab = this.tabs[parseInt(tabIndex.toString(), 10)];
        for (var j = 0; (!isBreak && (j < tab.groups.length)); j++) {
            isBreak = isSmall ? this.checkSmallToMedium(tabIndex, tab, j, tabContent, activeContent, false, true) :
                this.checkMediumToLarge(tabIndex, tab, j, tabContent, activeContent, false, true);
        }
        return isBreak;
    };
    // eslint-disable-next-line max-len
    Ribbon.prototype.checkSmallToMedium = function (tabIndex, tab, groupIndex, tabContent, activeContent, shouldSkip, shouldClear) {
        var _this = this;
        var group = tab.groups[parseInt(groupIndex.toString(), 10)];
        var orientation = group.orientation;
        var ele = activeContent.querySelector('#' + group.id);
        var shrinkColumns = ele.querySelectorAll('.' + 'e-ribbon-shrink');
        var canExpandItem = function (item) {
            return (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) && (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small);
        };
        var expandItemToMedium = function (collectionIndex, index, parentEle) {
            var collection = _this.tabs[parseInt(tabIndex.toString(), 10)]
                .groups[parseInt(groupIndex.toString(), 10)].collections[parseInt(collectionIndex.toString(), 10)];
            var item = collection.items[parseInt(index.toString(), 10)];
            if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                var ele_4 = parentEle.id === item.id ? parentEle : parentEle.querySelector('#' + item.id);
                item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                    ele_4 = document.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                }
                _this.setItemSize(ele_4, item);
            }
        };
        var expandCollectionsToMedium = function (i) {
            var collections = _this.tabs[parseInt(tabIndex.toString(), 10)]
                .groups[parseInt(groupIndex.toString(), 10)].collections;
            var item = collections[parseInt(i.toString(), 10)].items[0];
            if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                var ele_5 = activeContent.querySelector('#' + collections[parseInt(i.toString(), 10)].items[0].id);
                collections[parseInt(i.toString(), 10)].items[0].setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                    ele_5 = activeContent.querySelector('#' + collections[parseInt(i.toString(), 10)].items[0].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                }
                _this.setItemSize(ele_5, collections[parseInt(i.toString(), 10)].items[0]);
            }
        };
        if (orientation === _interface__WEBPACK_IMPORTED_MODULE_8__/* .ItemOrientation */ .sj.Row) {
            // collection length is 1, then the it wll be covered in shrinked columns
            if (!this.checkValidCollectionLength(group.collections)) {
                for (var k = 0; k < group.collections.length; k++) {
                    var collection = group.collections[parseInt(k.toString(), 10)];
                    for (var l = 0; l < collection.items.length; l++) {
                        l = this.checkClassicItem(collection.items, l, true);
                        if (l === collection.items.length) {
                            continue;
                        }
                        var item = collection.items[parseInt(l.toString(), 10)];
                        if (canExpandItem(item)) {
                            var itemEle = activeContent.querySelector('#' + item.id);
                            if (item.type === 'GroupButton') {
                                itemEle = activeContent.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                            }
                            var valString = itemEle.getAttribute('data-medium-width');
                            var value = valString ? parseInt(valString, 10) : null;
                            if (value && (shouldSkip || (tabContent.offsetWidth > value))) {
                                expandItemToMedium(k, l, itemEle);
                                if (!shouldSkip || shouldClear) {
                                    itemEle.removeAttribute('data-medium-width');
                                }
                            }
                            else if (value) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        else {
            for (var k = 0; k < group.collections.length; k++) {
                //If items length is 1 then, it will be handled in shrinked column
                if ((group.collections[parseInt(k.toString(), 10)].items.length > 1)) {
                    var collection = group.collections[parseInt(k.toString(), 10)];
                    var itemEle = activeContent.querySelector('#' + collection.id);
                    var valString = itemEle.getAttribute('data-medium-width');
                    var value = valString ? parseInt(valString, 10) : null;
                    var classicItems = [];
                    for (var i = 0; i < collection.items.length; i++) {
                        if (collection.items[parseInt(i.toString(), 10)].displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                            classicItems.push(i);
                        }
                    }
                    if ((classicItems.length > 1) && value && (shouldSkip || (tabContent.offsetWidth > value))) {
                        expandItemToMedium(k, classicItems[0], itemEle);
                        expandItemToMedium(k, classicItems[1], itemEle);
                        if (classicItems.length === 3) {
                            expandItemToMedium(k, classicItems[2], itemEle);
                        }
                        if (!shouldSkip || shouldClear) {
                            itemEle.removeAttribute('data-medium-width');
                        }
                    }
                    else if (value) {
                        return true;
                    }
                }
            }
        }
        if (shrinkColumns.length > 0) {
            for (var k = 0; k < shrinkColumns.length; k++) {
                var shrinkColumn = shrinkColumns[parseInt(k.toString(), 10)];
                var valString = shrinkColumn.getAttribute('data-medium-width');
                var value = valString ? parseInt(valString, 10) : null;
                if (value && (shouldSkip || (tabContent.offsetWidth > value))) {
                    var start = parseInt(shrinkColumn.getAttribute('data-start'), 10);
                    var end = parseInt(shrinkColumn.getAttribute('data-end'), 10);
                    if (orientation === _interface__WEBPACK_IMPORTED_MODULE_8__/* .ItemOrientation */ .sj.Row) {
                        var collection = group.collections[0];
                        var l = this.checkClassicItem(collection.items, start + 1, true); //next valid item
                        expandItemToMedium(0, start, shrinkColumn);
                        expandItemToMedium(0, l, shrinkColumn);
                        // if l == end, then l is the last item, else L is the middle item. If l is middle then call the method for end.
                        if (l !== end) {
                            expandItemToMedium(0, end, shrinkColumn);
                        }
                    }
                    else {
                        var m = this.checkClassicCollection(group.collections, start + 1, true); //next valid item
                        expandCollectionsToMedium(start);
                        expandCollectionsToMedium(m);
                        if (m !== end) {
                            expandCollectionsToMedium(end);
                        }
                    }
                    if (!shouldSkip || shouldClear) {
                        shrinkColumn.removeAttribute('data-medium-width');
                    }
                }
                else if (value) {
                    return true;
                }
            }
        }
        return false;
    };
    Ribbon.prototype.checkMediumToLarge = function (tabIndex, tab, groupIndex, tabContent, activeContent, shouldSkip, shouldClear) {
        var _this = this;
        var group = tab.groups[parseInt(groupIndex.toString(), 10)];
        var orientation = group.orientation;
        var ele = activeContent.querySelector('#' + group.id);
        var shrinkColumns = ele.querySelectorAll('.' + 'e-ribbon-shrink');
        if (shrinkColumns.length === 0) {
            return false;
        }
        var expandItemsToLarge = function (start, end, parentEle, middle) {
            var items = _this.tabs[parseInt(tabIndex.toString(), 10)].
                groups[parseInt(groupIndex.toString(), 10)].collections[0].items;
            var reduce = function (i) {
                var item = items[parseInt(i.toString(), 10)];
                if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                    var container = parentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    var ele_6 = container.querySelector('#' + item.id);
                    item.setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large }, true);
                    if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                        ele_6 = container.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                    }
                    _this.setItemSize(ele_6, item);
                    parentEle.insertAdjacentElement('beforebegin', container);
                }
            };
            reduce(start);
            if (middle) {
                reduce(middle);
            }
            reduce(end);
            if (!shouldSkip || shouldClear) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(parentEle);
            }
        };
        var expandCollectionsToLarge = function (start, end, parentEle, middle) {
            var collections = _this.tabs[parseInt(tabIndex.toString(), 10)].
                groups[parseInt(groupIndex.toString(), 10)].collections;
            var reduce = function (i) {
                var collection = collections[parseInt(i.toString(), 10)];
                if (collection.items[0].displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                    var collectionEle = parentEle.querySelector('#' + collection.id);
                    var ele_7 = collectionEle.querySelector('#' + collection.items[0].id);
                    collection.items[0].setProperties({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large }, true);
                    if (collection.items[0].type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                        ele_7 = collectionEle.querySelector('#' + collection.items[0].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                    }
                    _this.setItemSize(ele_7, collection.items[0]);
                    parentEle.insertAdjacentElement('beforebegin', collectionEle);
                }
            };
            reduce(start);
            if (middle) {
                reduce(middle);
            }
            reduce(end);
            if (!shouldSkip || shouldClear) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(parentEle);
            }
        };
        for (var k = 0; k < shrinkColumns.length; k++) {
            var shrinkColumn = shrinkColumns[parseInt(k.toString(), 10)];
            var valString = shrinkColumn.getAttribute('data-large-width');
            var value = valString ? parseInt(valString, 10) : null;
            if (value && (shouldSkip || (tabContent.offsetWidth > value))) {
                var start = parseInt(shrinkColumn.getAttribute('data-start'), 10);
                var end = parseInt(shrinkColumn.getAttribute('data-end'), 10);
                if (orientation === _interface__WEBPACK_IMPORTED_MODULE_8__/* .ItemOrientation */ .sj.Row) {
                    var collection = group.collections[0];
                    var l = this.checkClassicItem(collection.items, start + 1, true); //next valid item
                    if (l === end) {
                        expandItemsToLarge(start, end, shrinkColumn);
                    }
                    else {
                        expandItemsToLarge(start, end, shrinkColumn, l);
                    }
                }
                else {
                    var m = this.checkClassicCollection(group.collections, start + 1, true); //next valid item
                    if (m === end) {
                        expandCollectionsToLarge(start, end, shrinkColumn);
                    }
                    else {
                        expandCollectionsToLarge(start, end, shrinkColumn, m);
                    }
                }
                if (!shouldSkip || shouldClear) {
                    shrinkColumn.removeAttribute('data-large-width');
                }
            }
            else if (value) {
                return true;
            }
        }
        return false;
    };
    Ribbon.prototype.handleContentSize = function (itemEle, isRemoveOverflow) {
        var itemContainer = itemEle.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTENT */ .Nb);
        if (isRemoveOverflow) {
            itemContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
        }
        else {
            itemContainer.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
        }
    };
    Ribbon.prototype.setItemSize = function (itemEle, item) {
        if (itemEle) {
            var itemContainer = itemEle.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5);
            if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Button) {
                this.ribbonButtonModule.updateButtonSize(itemEle, item);
            }
            else if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) {
                this.ribbonDropDownModule.updateDropDownSize(itemEle, item);
            }
            else if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) {
                this.ribbonSplitButtonModule.updateSplitButtonSize(itemEle, item);
            }
            else if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Template) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(itemEle);
                this.createTemplateContent(item, itemContainer);
            }
            else if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                this.ribbonGroupButtonModule.updateGroupButtonSize(itemEle, item);
            }
            itemContainer.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LARGE_ITEM */ .rv, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MEDIUM_ITEM */ .NQ, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SMALL_ITEM */ .Xl);
            if (item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) {
                itemContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LARGE_ITEM */ .rv, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
            }
            else {
                itemContainer.classList.add((item.activeSize === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) ?
                    _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MEDIUM_ITEM */ .NQ : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SMALL_ITEM */ .Xl);
            }
        }
    };
    Ribbon.prototype.createOverflowDropdown = function (tabIndex, tabContent, activeContent) {
        var collapseOrder = this.getGroupResizeOrder(true, tabIndex);
        if (collapseOrder.length === 0) {
            return;
        }
        var _loop_1 = function (i) {
            var group = collapseOrder[parseInt(i.toString(), 10)];
            var groupEle = this_1.tabObj.element.querySelector('#' + group.id);
            groupEle.setAttribute('data-expanded-width', activeContent.offsetWidth.toString());
            var groupContainer = groupEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
            var groupOverFlow = this_1.createElement('div', {
                className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_OVERFLOW */ .g9 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LARGE_ITEM */ .rv,
                id: group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut
            });
            groupEle.insertBefore(groupOverFlow, groupContainer);
            var groupIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this_1.tabs[parseInt(tabIndex.toString(), 10)].groups, function (e) { return e.id === group.id; });
            var tab = this_1.tabs[parseInt(tabIndex.toString(), 10)];
            //Expanding the items in the group to their original expanded state
            this_1.checkSmallToMedium(tabIndex, tab, groupIndex, tabContent, activeContent, true, false);
            this_1.checkMediumToLarge(tabIndex, tab, groupIndex, tabContent, activeContent, true, false);
            var dropdown = this_1.ribbonDropDownModule.createOverFlowDropDown(group.id, group.header, group.groupIconCss, groupContainer, groupOverFlow, this_1.enableRtl);
            if (group.keyTip) {
                var overflowDDB = group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9;
                this_1.addKeyTip(tabIndex, group.keyTip, overflowDDB, 'grpoverflow');
            }
            this_1.tabs[parseInt(tabIndex.toString(), 10)].
                groups[parseInt(groupIndex.toString(), 10)].setProperties({ isCollapsed: true }, true);
            for (var j = 0; j < group.collections.length; j++) {
                var collection = group.collections[parseInt(j.toString(), 10)];
                var collectionEle = groupContainer.querySelector('#' + collection.id);
                for (var k = 0; k < collection.items.length; k++) {
                    var item = collection.items[parseInt(k.toString(), 10)];
                    var itemEle = collectionEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (itemEle !== null) {
                        this_1.handleContentSize(itemEle);
                        this_1.addOverflowEvents(item, itemEle, dropdown);
                    }
                    var overflowDDB = document.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9);
                    var overflowButton = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDB, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    if (overflowButton) {
                        var overflowtarget = overflowButton.target;
                        if (overflowtarget) {
                            if (this_1.keyTipElements[parseInt(tabIndex.toString(), 10)]) {
                                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                                    for (var i_3 = 0; i_3 < item.groupButtonSettings.items.length; i_3++) {
                                        if (item.groupButtonSettings.items[parseInt(i_3.toString(), 10)].keyTip) {
                                            this_1.addKeyTip(tabIndex, item.groupButtonSettings.items[parseInt(i_3.toString(), 10)].keyTip, item.id + (_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i_3), 'grpoverflowpopup');
                                        }
                                    }
                                }
                                if (item.keyTip) {
                                    this_1.addKeyTip(tabIndex, item.keyTip, item.id, 'grpoverflowpopup');
                                }
                            }
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var i = 0; ((i < collapseOrder.length) && (tabContent.offsetWidth < activeContent.offsetWidth)); i++) {
            _loop_1(i);
        }
    };
    // eslint-disable-next-line max-len
    Ribbon.prototype.removeOverflowDropdown = function (tabContent, activeContent, isClear, tabIndex) {
        if (isClear === void 0) { isClear = false; }
        var expandOrder = this.getGroupResizeOrder(false, tabIndex);
        if (expandOrder.length === 0) {
            return false;
        }
        var _loop_2 = function (i) {
            var group = expandOrder[parseInt(i.toString(), 10)];
            var groupEle = this_2.tabObj.element.querySelector('#' + group.id);
            if (!groupEle) {
                return "break";
            } //to handle the rerendering of tabcontrol when a ribbon tab is added/removed
            var width = parseInt(groupEle.getAttribute('data-expanded-width'), 10);
            if (!isClear && (tabContent.offsetWidth < width)) {
                return { value: true };
            }
            this_2.removeDropdown(group.id);
            var groupIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this_2.tabs[parseInt(tabIndex.toString(), 10)].groups, function (e) { return e.id === group.id; });
            this_2.tabs[parseInt(tabIndex.toString(), 10)].
                groups[parseInt(groupIndex.toString(), 10)].setProperties({ isCollapsed: false }, true);
            var tab = this_2.tabs[parseInt(tabIndex.toString(), 10)];
            //Shrinking the items in the group to their previous shrinked state (before moving to dropdown)
            this_2.checkLargeToMedium(tabIndex, tab, groupIndex, tabContent, activeContent, true);
            this_2.checkMediumToSmall(tabIndex, tab, groupIndex, tabContent, activeContent, true);
            for (var j = 0; j < group.collections.length; j++) {
                var collection = group.collections[parseInt(j.toString(), 10)];
                var collectionEle = groupEle.querySelector('#' + collection.id);
                for (var k = 0; k < collection.items.length; k++) {
                    var item = collection.items[parseInt(k.toString(), 10)];
                    var itemEle = collectionEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (itemEle !== null) {
                        this_2.handleContentSize(itemEle, true);
                        this_2.removeOverflowEvent(item, itemEle);
                    }
                }
            }
        };
        var this_2 = this;
        for (var i = 0; i < expandOrder.length; i++) {
            var state_1 = _loop_2(i);
            if (typeof state_1 === "object")
                return state_1.value;
            if (state_1 === "break")
                break;
        }
        return false;
    };
    Ribbon.prototype.removeDropdown = function (groupId) {
        var dropdownElement = this.tabObj.element.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9);
        if (dropdownElement) {
            var groupOverFlow = dropdownElement.parentElement;
            this.ribbonDropDownModule.removeOverFlowDropDown(dropdownElement);
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(groupOverFlow);
        }
    };
    Ribbon.prototype.getGroupResizeOrder = function (isCollapse, tabIndex) {
        var _this = this;
        var groups = this.tabs[parseInt(tabIndex.toString(), 10)].groups;
        groups = groups.filter(function (e) {
            // (isUndefined(e.isCollapsible) || e.isCollapsible) => check whethe rhte item is collapsible
            // if a isCollapsed property is undefined, then it is considered collapsible and included in collapsible list
            // ((isCollapse && !e.isCollapsed)||(!isCollapse && e.isCollapsed)) => isCollapse !== e.isCollapsed
            return (_this.activeLayout === 'Classic') ? ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(e.isCollapsible) || e.isCollapsible) && ((isCollapse &&
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(e.isCollapsed)) || (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(e.isCollapsed) && (isCollapse !== e.isCollapsed))) : true;
        });
        //sort the collapsible groups based on the priority
        groups.sort(function (a, b) { return a.priority - b.priority; });
        //reverse the sorted array to return the array in descending order while collapsing.
        return isCollapse ? groups.reverse() : groups;
    };
    Ribbon.prototype.destroyScroll = function () {
        if (this.scrollModule) {
            this.scrollModule.destroy();
            this.scrollModule = null;
        }
    };
    Ribbon.prototype.clearOverflowDropDown = function (index) {
        var activeContent = this.tabObj.element.querySelector('#' + this.tabs[parseInt(index.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
        if (!activeContent) {
            return;
        }
        var tabContent = activeContent.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_CONTENT */ .gU);
        if (this.activeLayout === 'Simplified') {
            this.removeSimplfiedOverflow(activeContent, tabContent, index, true);
        }
        else {
            this.removeOverflowDropdown(activeContent, tabContent, true, index);
        }
    };
    Ribbon.prototype.isContextualTab = function (tabID) {
        var isContextual = false;
        if (this.contextualTabs.length) {
            for (var i = 0; i < this.contextualTabs.length; i++) {
                for (var j = 0; j < this.contextualTabs[parseInt(i.toString(), 10)].tabs.length; j++) {
                    if (this.contextualTabs[parseInt(i.toString(), 10)].tabs[parseInt(j.toString(), 10)].id === tabID) {
                        isContextual = true;
                        break;
                    }
                }
            }
        }
        return isContextual;
    };
    Ribbon.prototype.ribbonTabSelecting = function (e) {
        var _this = this;
        this.currentControlIndex = 0;
        var nextTabId = e.selectingItem ? e.selectingItem.getAttribute('data-id') : null;
        var previousTabId = e.previousItem.getAttribute('data-id');
        var nextIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, (function (tab) { return (tab.id === nextTabId); }));
        var isContextual = this.isContextualTab(nextTabId);
        var previousIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, (function (tab) { return (tab.id === previousTabId); }));
        nextIndex = nextIndex === -1 ? this.selectedTab : nextIndex;
        var eventArgs = {
            cancel: e.cancel, isInteracted: e.isInteracted, previousIndex: previousIndex,
            selectedIndex: nextIndex, isContextual: isContextual
        };
        this.trigger('tabSelecting', eventArgs, function (args) {
            if (args.cancel) {
                return;
            }
            _this.destroyScroll();
            if (!_this.isAddRemove && (previousIndex !== -1)) {
                _this.clearOverflowDropDown(previousIndex);
            }
            var selectedTabContent = _this.tabObj.items[parseInt(nextIndex.toString(), 10)].content;
            if ((!selectedTabContent.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP */ .PH)) && (_this.tabs[parseInt(nextIndex.toString(), 10)].groups.length !== 0)) {
                var elements = _this.createGroups(_this.tabs[parseInt(nextIndex.toString(), 10)].groups, nextIndex);
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, selectedTabContent);
            }
        });
    };
    Ribbon.prototype.createTabItems = function (tabs) {
        var _this = this;
        var tabItems = [];
        var _loop_3 = function (i) {
            var ribbonTab = tabs[parseInt(i.toString(), 10)];
            var header = this_3.createElement('span', {
                innerHTML: ribbonTab.header,
                id: ribbonTab.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG
            });
            var tabIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this_3.tabs, (function (tab) { return (tab.id === ribbonTab.id); }));
            if (ribbonTab.keyTip) {
                if (!this_3.keyTipElements[parseInt(tabIndex.toString(), 10)]) {
                    this_3.keyTipElements[parseInt(tabIndex.toString(), 10)] = {};
                }
                this_3.addKeyTip(tabIndex, ribbonTab.keyTip, ribbonTab.id, 'tab');
            }
            header.onclick = function () { _this.minimize(false); };
            header.ondblclick = function () { _this.minimize(true); };
            var tab = { header: { text: header }, id: ribbonTab.id, cssClass: ribbonTab.cssClass };
            var content = this_3.createElement('div', {
                className: tab.cssClass,
                id: ribbonTab.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o
            });
            content.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TAB_ITEM */ .Be);
            tab.content = content;
            tabItems.push(tab);
        };
        var this_3 = this;
        for (var i = 0; i < tabs.length; i++) {
            _loop_3(i);
        }
        return tabItems;
    };
    Ribbon.prototype.renderInitialTab = function (index) {
        var elements = this.createGroups(this.tabs[parseInt(index.toString(), 10)].groups, index);
        var content = this.tabObj.items[parseInt(index.toString(), 10)].content;
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, content);
        if (this.activeLayout === 'Simplified') {
            this.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SIMPLIFIED_MODE */ .iR);
        }
        var activeContent = this.tabObj.element.querySelector('#' + this.tabs[this.selectedTab].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
        if (this.ribbonGalleryModule) {
            this.ribbonGalleryModule.checkAvailableHeight(activeContent);
        }
        this.checkOverflow(this.selectedTab, activeContent);
    };
    Ribbon.prototype.addOverflowButton = function (btnId, isGroupOF) {
        var _this = this;
        var overflowButton = this.createElement('button', {
            id: btnId
        });
        var overflowTarget = this.createElement('div', {
            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERFLOW_TARGET */ .EF,
            attrs: { 'tabindex': '0' }
        });
        var overFlowCss = this.cssClass ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + this.cssClass : '';
        var overflowDDB = new _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q({
            iconCss: _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ICON */ .zf,
            cssClass: _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWNBUTTON_HIDE */ .ZO + _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_OVERFLOW_DDB */ .Ht + overFlowCss,
            target: overflowTarget,
            locale: this.locale,
            enableRtl: this.enableRtl,
            enablePersistence: this.enablePersistence,
            beforeOpen: function (args) {
                var eventArgs = { element: args.element, event: args.event, cancel: args.cancel };
                _this.trigger('overflowPopupOpen', eventArgs, function (ribbonArgs) {
                    if (ribbonArgs.cancel) {
                        args.cancel = true;
                    }
                });
            },
            beforeClose: function (args) {
                var ele = args.event ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(args.event.target, '.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_POPUP_CONTROL */ .eN) : null;
                var groupButtonEle = args.event ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(args.event.target, '.e-ribbon-group-button-overflow-popup') : null;
                var eventArgs = { element: args.element, event: args.event, cancel: args.cancel };
                _this.trigger('overflowPopupClose', eventArgs, function (ribbonArgs) {
                    if (ele || ribbonArgs.cancel || groupButtonEle) {
                        args.element = null;
                        args.cancel = true;
                    }
                });
            }
        }, overflowButton);
        this.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERFLOW */ .Qf);
        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .createTooltip */ .Ck)(overflowTarget, this);
        if (!isGroupOF) {
            this.keyTipElements['overflowbtn'] = [];
            this.keyTipElements['overflowbtn'].push({ id: btnId, type: 'overflowbtn', keyTip: '00' });
        }
        var isGroupOf;
        overflowButton.onkeydown = overflowButton.onclick = function () { _this.itemIndex = -1; isGroupOf = overflowButton.classList.contains('e-ribbon-overall-of-btn') ? false : true; };
        overflowTarget.onkeydown = function (e) { return (_this.upDownKeyHandler(e, overflowTarget, isGroupOf), _this); };
        return overflowDDB;
    };
    Ribbon.prototype.upDownKeyHandler = function (e, target, isGroupOf) {
        var items;
        if (isGroupOf) {
            items = target.getElementsByClassName('e-ribbon-item');
        }
        else {
            var currentList = target.querySelector('.e-ribbon-of-tab.e-ribbon-active');
            items = currentList.getElementsByClassName('e-ribbon-item');
        }
        var control = items[(!this.itemIndex || this.itemIndex < 0) ? 0 : this.itemIndex].querySelector('.e-control');
        var comboBoxEle = control && control.classList.contains('e-combobox') ?
            items[(!this.itemIndex || this.itemIndex < 0) ? 0 : this.itemIndex].querySelector('.e-combobox') : null;
        var ribbonItem;
        var templateEle;
        if (comboBoxEle === null || (e.key === 'Tab') || this.itemIndex < 0) {
            if (e.key === 'ArrowDown' || (!e.shiftKey && e.key === 'Tab')) {
                if ((!this.itemIndex && this.itemIndex !== 0) || this.itemIndex < 0 || this.itemIndex === items.length - 1) {
                    this.itemIndex = 0;
                    ribbonItem = items[this.itemIndex].closest('.e-ribbon-item');
                    this.findDisabledItem(ribbonItem, items, true);
                    if (comboBoxEle && e.key === 'Tab') {
                        e.preventDefault();
                        var item = items[this.itemIndex].querySelector('.e-control');
                        if (item) {
                            item.focus();
                        }
                    }
                    templateEle = items[this.itemIndex].querySelector('.e-ribbon-template');
                }
                else if (this.itemIndex < items.length - 1 && this.itemIndex >= 0) {
                    this.itemIndex++;
                    ribbonItem = items[this.itemIndex].closest('.e-ribbon-item');
                    this.findDisabledItem(ribbonItem, items, true);
                    templateEle = items[this.itemIndex].querySelector('.e-ribbon-template');
                }
                if (templateEle) {
                    templateEle.focus();
                }
            }
            else if (e.key === 'ArrowUp' || (e.shiftKey && e.key === 'Tab')) {
                if (comboBoxEle === null || (e.key === 'Tab')) {
                    if (!this.itemIndex || this.itemIndex === -1) {
                        this.itemIndex = items.length - 1;
                        ribbonItem = items[this.itemIndex].closest('.e-ribbon-item');
                        this.findDisabledItem(ribbonItem, items, false);
                        if (comboBoxEle && (e.shiftKey && e.key === 'Tab')) {
                            e.preventDefault();
                            var item = items[this.itemIndex].querySelector('.e-control');
                            if (item) {
                                item.focus();
                            }
                        }
                        templateEle = items[this.itemIndex].querySelector('.e-ribbon-template');
                    }
                    else if (this.itemIndex <= items.length - 1 && this.itemIndex > 0) {
                        this.itemIndex--;
                        ribbonItem = items[this.itemIndex].closest('.e-ribbon-item');
                        this.findDisabledItem(ribbonItem, items, false);
                        templateEle = items[this.itemIndex].querySelector('.e-ribbon-template');
                    }
                    if (templateEle) {
                        templateEle.focus();
                    }
                }
            }
            target.setAttribute('index', this.itemIndex.toString());
        }
        var currentItemIndex = parseInt(target.getAttribute('index'), 10);
        var itemType = '';
        var controlItem = items[parseInt(currentItemIndex.toString(), 10)] ? items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-control') : null;
        if (controlItem) {
            itemType = controlItem.getAttribute('data-control');
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ' || e.key === 'Tab') {
            if (itemType === 'ColorPicker') {
                if (e.key === 'Tab') {
                    e.preventDefault();
                }
                items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-split-colorpicker').focus();
            }
            else {
                if (e.key === 'Tab') {
                    e.preventDefault();
                }
                var elem = items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-control');
                if (elem) {
                    elem.focus();
                }
            }
            if (e.key === ' ' && (itemType === 'CheckBox')) {
                var checkBoxEle = items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-control');
                var checkBox = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(checkBoxEle, _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_16__/* .CheckBox */ .o);
                this.itemIndex = -1;
                checkBox.click();
            }
        }
        if (((itemType === 'SplitButton') && (e.key === 'ArrowRight' || e.key === 'ArrowLeft'))) {
            if (e.key === 'ArrowRight') {
                if (this.enableRtl) {
                    items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-control').focus();
                }
                else {
                    items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-dropdown-btn').focus();
                }
            }
            if (e.key === 'ArrowLeft') {
                if (this.enableRtl) {
                    items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-dropdown-btn').focus();
                }
                else {
                    items[parseInt(currentItemIndex.toString(), 10)].querySelector('.e-control').focus();
                }
            }
        }
        if (e.key === 'Enter') {
            this.itemIndex = -1;
        }
    };
    Ribbon.prototype.findDisabledItem = function (ribbonItem, items, isIncrease) {
        while (ribbonItem && ribbonItem.classList.contains('e-disabled')) {
            if (isIncrease) {
                if (this.itemIndex === items.length - 1 && items[this.itemIndex].closest('.e-ribbon-item').classList.contains('e-disabled')) {
                    this.itemIndex = -1;
                }
            }
            else {
                if (this.itemIndex === 0 && items[this.itemIndex].closest('.e-ribbon-item').classList.contains('e-disabled')) {
                    this.itemIndex = items.length;
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isIncrease ? this.itemIndex++ : this.itemIndex--;
            ribbonItem = items[this.itemIndex].closest('.e-ribbon-item');
        }
    };
    Ribbon.prototype.removeOverflowButton = function (overflowDDB) {
        if (overflowDDB) {
            var btnEle = overflowDDB.element;
            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .destroyTooltip */ .wF)(overflowDDB.target);
            overflowDDB.destroy();
            btnEle.remove();
        }
    };
    Ribbon.prototype.removeOverflowEvent = function (item, itemEle) {
        if (itemEle) {
            switch (item.type) {
                case 'Button':
                    this.ribbonButtonModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'DropDown':
                    this.ribbonDropDownModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'SplitButton':
                    this.ribbonSplitButtonModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'CheckBox':
                    this.ribbonCheckBoxModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'ColorPicker':
                    this.ribbonColorPickerModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'ComboBox':
                    this.ribbonComboBoxModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'Gallery':
                    this.ribbonGalleryModule.removeOverFlowEvents(item, itemEle);
                    break;
                case 'GroupButton':
                    this.ribbonGroupButtonModule.removeOverFlowEvents(item, itemEle);
                    break;
            }
        }
    };
    Ribbon.prototype.createGroupContainer = function (groupId, groupHeader) {
        var ofGroupContainer = this.createElement('div', {
            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OF_GROUP_CONTAINER */ .xj,
            id: groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut
        });
        var ofGroupHeader = this.createElement('div', {
            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERFLOW_HEADER */ .Om,
            id: groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG,
            innerHTML: groupHeader
        });
        ofGroupContainer.append(ofGroupHeader);
        return ofGroupContainer;
    };
    Ribbon.prototype.addExpandCollapse = function () {
        var _this = this;
        this.collapseButton = this.createElement('span', {
            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLLAPSE_BUTTON */ .il + _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .EXPAND_COLLAPSE_ICON */ .T6,
            id: this.tabObj.element.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .COLLAPSE_BUTTON_ID */ .nr,
            attrs: { 'tabindex': '0', 'type': 'button', 'aria-label': 'Layout Switcher', 'role': 'button' }
        });
        this.collapseButton.onclick = function (e) { _this.toggleLayout(e); };
        this.collapseButton.onkeydown = function (e) {
            if (e.key === 'Enter') {
                _this.toggleLayout(e);
            }
        };
        this.element.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLLAPSIBLE */ .EA);
        if (this.activeLayout === 'Simplified') {
            this.collapseButton.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_EXPAND_BUTTON */ .VF);
        }
        this.tabObj.element.appendChild(this.collapseButton);
        if (this.layoutSwitcherKeyTip) {
            this.keyTipElements['collapse'] = [];
            this.keyTipElements['collapse'].push({ id: this.collapseButton.id, type: 'collapse', keyTip: this.layoutSwitcherKeyTip });
        }
    };
    Ribbon.prototype.removeExpandCollapse = function () {
        var _this = this;
        var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tooltipData, function (e) { return e.id === _this.collapseButton.id; });
        if (index !== -1) {
            this.tooltipData.splice(index, 1);
        }
        this.element.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLLAPSIBLE */ .EA);
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this.tabObj.element.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLLAPSE_BUTTON */ .il));
        this.collapseButton = null;
    };
    Ribbon.prototype.reRenderTabs = function (tabs) {
        this.destroyScroll();
        this.checkID(this.tabs, 'tab', this.element.id);
        for (var _i = 0, _a = Object.keys(tabs); _i < _a.length; _i++) {
            var key = _a[_i];
            var index = parseInt(key, 10);
            var tab = tabs[parseInt(index.toString(), 10)];
            var isNewTab = false;
            for (var j = 0; j < (this.tabObj.items.length); j++) {
                if (this.tabs[parseInt(index.toString(), 10)].id === this.tabObj.items[parseInt(j.toString(), 10)].id) {
                    isNewTab = true;
                    break;
                }
            }
            if (!isNewTab) {
                this.destroyTabItems(this.tabsInternal);
                this.tabsInternal = this.tabs.slice();
                this.validateItemSize();
                var tabItems = this.createTabItems(this.tabs);
                if (this.selectedTab >= this.tabs.length) {
                    this.selectedTab = this.tabs.length - 1;
                }
                this.tabObj.setProperties({ items: tabItems, selectedItem: this.selectedTab });
                break;
            }
            else {
                var groups = this.tabs[parseInt(index.toString(), 10)].groups;
                var tabEle = this.tabObj.element;
                var ribbonTab = this.tabs[parseInt(index.toString(), 10)];
                ribbonTab.setProperties(tab, true);
                this.setProperties({ groups: this.checkID(ribbonTab.groups, 'group', ribbonTab.id) }, true);
                this.validateItemSize();
                var contentEle = this.tabObj.items[parseInt(index.toString(), 10)].content;
                if (groups) {
                    // Check whether header is passed by the user and sets the updated values.
                    if (tab.header) {
                        this.tabObj.items[parseInt(index.toString(), 10)].header.text.innerText = ribbonTab.header;
                    }
                    // Check whether cssClass is passed by the user, and if it is, then remove the old values.
                    if (tab.cssClass) {
                        if (this.tabObj.items[parseInt(index.toString(), 10)].cssClass) {
                            contentEle.classList.remove(this.tabObj.items[parseInt(index.toString(), 10)].cssClass);
                            tabEle.querySelector('.e-active').classList.remove(this.tabObj.items[parseInt(index.toString(), 10)].cssClass);
                        }
                        contentEle.classList.add(ribbonTab.cssClass);
                        tabEle.querySelector('.e-active').classList.add(ribbonTab.cssClass);
                    }
                    // Check whether group is passed by the user, and if it is, then remove the old values.
                    if (tab.groups) {
                        for (var _b = 0, groups_1 = groups; _b < groups_1.length; _b++) {
                            var group = groups_1[_b];
                            var dropdownElement = group.isCollapsed ? contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9) : null;
                            for (var _c = 0, _d = group.collections; _c < _d.length; _c++) {
                                var collection = _d[_c];
                                for (var _e = 0, _f = collection.items; _e < _f.length; _e++) {
                                    var item = _f[_e];
                                    var ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id) : contentEle.querySelector('#' + item.id);
                                    if (ele) {
                                        this.destroyFunction(item, ele);
                                    }
                                }
                            }
                            if (dropdownElement) {
                                this.ribbonDropDownModule.removeOverFlowDropDown(dropdownElement);
                            }
                        }
                        var groupElements = contentEle.querySelectorAll('.e-ribbon-group');
                        // eslint-disable-next-line @typescript-eslint/tslint/config
                        groupElements.forEach(function (groupEle) { groupEle.remove(); });
                        var elements = this.createGroups(ribbonTab.groups, index);
                        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, contentEle);
                    }
                }
            }
        }
        if (this.tabsInternal !== this.tabs) {
            this.tabsInternal = this.tabs;
            var tabItems = this.createTabItems(this.tabs);
            if (this.selectedTab >= this.tabs.length) {
                this.selectedTab = this.tabs.length - 1;
            }
            this.tabObj.setProperties({ items: tabItems, selectedItem: this.selectedTab });
        }
        var activeContent = this.tabObj.element.querySelector('#' + this.tabs[this.selectedTab].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
        this.checkOverflow(this.selectedTab, activeContent);
    };
    Ribbon.prototype.switchLayout = function () {
        this.currentControlIndex = 0;
        this.destroyScroll();
        this.collapseButton.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_EXPAND_BUTTON */ .VF, this.activeLayout === 'Simplified');
        this.element.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SIMPLIFIED_MODE */ .iR, this.activeLayout === 'Simplified');
        for (var i = 0; i <= (this.tabs.length - 1); i++) {
            var tabIndex = i;
            var contentEle = this.tabObj.items[parseInt(tabIndex.toString(), 10)].content;
            if (contentEle.innerHTML !== '') {
                var tab = this.tabs[parseInt(tabIndex.toString(), 10)];
                var groupList = this.tabs[parseInt(tabIndex.toString(), 10)].groups;
                var activeContent = this.tabObj.element.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
                var tabContent = activeContent.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_CONTENT */ .gU);
                if (this.activeLayout === 'Simplified') {
                    for (var i_4 = 0; i_4 < groupList.length; i_4++) {
                        var group = groupList[parseInt(i_4.toString(), 10)];
                        var alignType = groupList[parseInt(i_4.toString(), 10)].orientation;
                        if (group.isCollapsed) {
                            group.setProperties({ isCollapsed: false }, true);
                            this.removeDropdown(group.id);
                        }
                        else {
                            this.checkSmallToMedium(tabIndex, tab, i_4, tabContent, activeContent, true, false);
                            this.checkMediumToLarge(tabIndex, tab, i_4, tabContent, activeContent, true, false);
                        }
                        var groupEle = tabContent.querySelector('#' + group.id);
                        var groupContainer = groupEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                        var shrinkColumns = groupContainer.querySelectorAll('.' + 'e-ribbon-shrink');
                        for (var i_5 = 0; i_5 < shrinkColumns.length; i_5++) {
                            shrinkColumns[parseInt(i_5.toString(), 10)].remove();
                        }
                        var groupHeader = groupContainer.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG);
                        groupHeader.remove();
                        var groupContent = groupContainer.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
                        groupContent.classList.replace(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk);
                        groupContent.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
                        for (var j = 0; j < group.collections.length; j++) {
                            var collection = group.collections[parseInt(j.toString(), 10)];
                            var groupCollection = groupContainer.querySelector('#' + collection.id);
                            groupCollection.classList.replace(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk);
                            for (var k = 0; k < collection.items.length; k++) {
                                var itemList = collection.items;
                                var item = collection.items[parseInt(k.toString(), 10)];
                                var flag = true;
                                while ((flag) && (item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic)) {
                                    k++;
                                    var itemEle_1 = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                    var ele = itemEle_1.querySelector('#' + item.id);
                                    this.destroyFunction(item, ele);
                                    itemEle_1.remove();
                                    if (k < itemList.length) {
                                        item = itemList[parseInt(k.toString(), 10)];
                                    }
                                    else {
                                        flag = false;
                                    }
                                }
                                if (!flag) {
                                    break;
                                }
                                var size = ((item.allowedSizes === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) ||
                                    (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium)) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium : _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small;
                                size = (!(item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) && (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow))
                                    ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium : size;
                                var itemEle = void 0;
                                if (!(item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic)) {
                                    itemEle = this.createItems([item], alignType, group.id, group.header, group.enableGroupOverflow, tabIndex, groupContainer)[0];
                                    if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) {
                                        groupCollection.append(itemEle);
                                    }
                                }
                                else {
                                    itemEle = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                    if (item.displayOptions === (_interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic | _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow)) {
                                        this.createOverflowPopup(item, tabIndex, group.enableGroupOverflow, group.id, group.header, itemEle, groupContainer);
                                        if ((item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) ||
                                            (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                                            this.updatePopupItems(item, itemEle, group.enableGroupOverflow, true);
                                        }
                                    }
                                    if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                                        this.ribbonGroupButtonModule.switchGroupButton(item, itemEle);
                                    }
                                    item.setProperties({ activeSize: size }, true);
                                    if (itemEle) {
                                        var ele = itemEle.querySelector('#' + item.id);
                                        this.setItemSize(ele, item);
                                    }
                                }
                                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery) {
                                    this.ribbonGalleryModule.switchGalleryItems(this.activeLayout, item.id);
                                }
                            }
                        }
                        if (!(group.enableGroupOverflow || groupEle.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5))) {
                            groupEle.classList.add('e-ribbon-emptyCollection');
                        }
                    }
                }
                else {
                    this.element.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERFLOW */ .Qf);
                    for (var i_6 = 0; i_6 < groupList.length; i_6++) {
                        var group = groupList[parseInt(i_6.toString(), 10)];
                        var alignType = groupList[parseInt(i_6.toString(), 10)].orientation;
                        var groupContainer = tabContent.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                        var groupContent = groupContainer.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
                        var groupHeader = this.createElement('div', {
                            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_HEADER */ .pD,
                            id: group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG,
                            innerHTML: group.header
                        });
                        groupContainer.appendChild(groupHeader);
                        if (alignType === 'Row') {
                            groupContent.classList.replace(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH);
                        }
                        groupContent.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
                        for (var j = 0; j < group.collections.length; j++) {
                            var overflowDDB = void 0;
                            var overflowtarget = void 0;
                            if (!group.enableGroupOverflow) {
                                overflowDDB = this.overflowDDB;
                                if (overflowDDB) {
                                    overflowtarget = this.overflowDDB.target;
                                }
                            }
                            else {
                                var overflowDDBEle = groupContainer.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
                                if (overflowDDBEle) {
                                    overflowDDB = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDBEle, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                                    overflowtarget = overflowDDB.target;
                                }
                            }
                            var collection = group.collections[parseInt(j.toString(), 10)];
                            var groupCollection = groupContainer.querySelector('#' + collection.id);
                            if (alignType === 'Column') {
                                groupCollection.classList.replace(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH);
                            }
                            for (var k = 0; k < collection.items.length; k++) {
                                var itemList = collection.items;
                                var item = collection.items[parseInt(k.toString(), 10)];
                                var flag = true;
                                while ((flag) && !(item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic)) {
                                    k++;
                                    var itemEle = void 0;
                                    if ((item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) || (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow)) {
                                        if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) {
                                            itemEle = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                        }
                                        else {
                                            itemEle = overflowtarget.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                        }
                                        if (itemEle !== null) {
                                            var ele_8 = itemEle.querySelector('#' + item.id);
                                            this.destroyFunction(item, ele_8);
                                            itemEle.remove();
                                        }
                                    }
                                    if (k < itemList.length) {
                                        item = itemList[parseInt(k.toString(), 10)];
                                    }
                                    else {
                                        flag = false;
                                    }
                                }
                                if (!flag) {
                                    break;
                                }
                                if (!(item.displayOptions & (_interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified | _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow))) {
                                    var itemEle = this.createItems([item], alignType, group.id, group.header, group.enableGroupOverflow, tabIndex)[0];
                                    groupCollection.append(itemEle);
                                }
                                else {
                                    var itemEle = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                    if (!itemEle && overflowtarget) {
                                        itemEle = overflowtarget.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                        if ((item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) ||
                                            (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                                            this.updatePopupItems(item, itemEle, group.enableGroupOverflow, false);
                                        }
                                        this.removeOverflowEvent(item, itemEle);
                                    }
                                    if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                                        this.ribbonGroupButtonModule.switchGroupButton(item, itemEle);
                                    }
                                    if (itemEle) {
                                        groupCollection.append(itemEle);
                                    }
                                }
                                var ele = groupContainer.querySelector('#' + item.id);
                                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                                    ele = groupContainer.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                                }
                                var itemsize = (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large :
                                    (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium : _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small;
                                item.setProperties({ activeSize: itemsize }, true);
                                this.setItemSize(ele, item);
                                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery) {
                                    this.ribbonGalleryModule.switchGalleryItems(this.activeLayout, item.id);
                                }
                            }
                            if (group.enableGroupOverflow && overflowDDB) {
                                if (overflowtarget.childElementCount === 0 ||
                                    (overflowtarget.childElementCount === 1 && this.isHeaderVisible(overflowtarget, group.id))) {
                                    this.removeOverflowButton(overflowDDB);
                                }
                            }
                        }
                    }
                }
                if (this.selectedTab === tabIndex) {
                    this.checkOverflow(tabIndex, activeContent);
                }
            }
        }
        if (this.activeLayout === 'Classic') {
            this.removeOverflowButton(this.overflowDDB);
            this.overflowDDB = null;
        }
    };
    Ribbon.prototype.createLauncherIcon = function (groupId, groupContainer, tabIndex) {
        var _this = this;
        var launcherIcon = this.createElement('div', {
            className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LAUNCHER_ICON_ELE */ .fb + ' ' + (this.launcherIconCss ? this.launcherIconCss : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LAUNCHER_ICON */ .kM),
            id: groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .LAUNCHER_ID */ .PI,
            attrs: { 'tabindex': '0', 'type': 'button', 'aria-label': 'Launcher Icon', 'role': 'button' }
        });
        groupContainer.appendChild(launcherIcon);
        groupContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LAUNCHER */ .c);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(launcherIcon, 'click', this.launcherIconClicked.bind(this, groupId), this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(launcherIcon, 'keydown', function (e) {
            if (e.key === 'Enter') {
                _this.launcherIconClicked(groupId);
            }
        }, this);
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupId);
        if (itemProp.group.launcherIconKeyTip) {
            this.addKeyTip(tabIndex, itemProp.group.launcherIconKeyTip, launcherIcon.id, 'launcher');
        }
    };
    Ribbon.prototype.launcherIconClicked = function (id) {
        var eventArgs = { groupId: id };
        this.trigger('launcherIconClick', eventArgs);
    };
    Ribbon.prototype.createGroups = function (groupList, tabIndex) {
        var groupElements = [];
        for (var i = 0; i < groupList.length; i++) {
            var group = groupList[parseInt(i.toString(), 10)];
            var alignType = group.orientation;
            var groupEle = this.createElement('div', {
                className: group.cssClass,
                id: group.id
            });
            groupEle.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP */ .PH);
            groupElements.push(groupEle);
            var groupContainer = this.createElement('div', {
                className: group.cssClass,
                id: group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut
            });
            groupContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTAINER */ .eO);
            groupEle.appendChild(groupContainer);
            var groupContent = this.createElement('div', {
                className: this.activeLayout === 'Simplified' ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTENT */ .Nb : (_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_CONTENT */ .Nb + _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg),
                id: group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o
            });
            groupContent.classList.add(((alignType === 'Column') || (this.activeLayout === 'Simplified')) ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH);
            groupContainer.appendChild(groupContent);
            if (this.activeLayout === 'Classic') {
                var groupHeader = this.createElement('div', {
                    className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_HEADER */ .pD,
                    id: group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG,
                    innerHTML: group.header
                });
                groupContainer.appendChild(groupHeader);
            }
            if (group.showLauncherIcon) {
                this.createLauncherIcon(group.id, groupContainer, tabIndex);
            }
            var elements = this.createCollection(group.collections, group.orientation, group.id, group.header, group.enableGroupOverflow, tabIndex, groupContainer);
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, groupContent);
            var isItemsHidden = true;
            for (var j = 0; j < elements.length; j++) {
                if (isItemsHidden) {
                    for (var k = 0; k < elements[parseInt(j.toString(), 10)].children.length; k++) {
                        if (!(elements[parseInt(j.toString(), 10)].children[parseInt(k.toString(), 10)].classList.contains('e-hidden'))) {
                            isItemsHidden = false;
                            break;
                        }
                    }
                }
            }
            if (isItemsHidden) {
                groupEle.classList.add('e-hide-group');
            }
            if ((this.activeLayout === 'Simplified') && !(group.enableGroupOverflow || groupEle.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5))) {
                groupEle.classList.add('e-ribbon-emptyCollection');
            }
            var initialProps = this.initialPropsData[parseInt(tabIndex.toString(), 10)];
            if (initialProps) {
                if (initialProps.hiddenGroups && initialProps.hiddenGroups.length) {
                    this.updateGroupProps('hiddenGroups', initialProps, groupEle);
                }
                if (initialProps.disabledGroups && initialProps.disabledGroups.length) {
                    this.updateGroupProps('disabledGroups', initialProps, groupEle);
                }
            }
        }
        if (this.initialPropsData[parseInt(tabIndex.toString(), 10)]) {
            delete this.initialPropsData[parseInt(tabIndex.toString(), 10)];
        }
        return groupElements;
    };
    Ribbon.prototype.updateGroupProps = function (key, initialProps, groupEle) {
        // eslint-disable-next-line
        var groupIndex = initialProps[key].indexOf(groupEle.id);
        if (groupIndex !== -1) {
            if (key === 'hiddenGroups') {
                groupEle.classList.add('e-hidden');
            }
            else {
                groupEle.classList.add('e-disabled');
            }
        }
    };
    Ribbon.prototype.validateItemSize = function () {
        for (var k = 0; k < this.tabs.length; k++) {
            var groupList = this.tabs[parseInt(k.toString(), 10)].groups;
            for (var l = 0; l < groupList.length; l++) {
                var collectionList = groupList[parseInt(l.toString(), 10)].collections;
                var alignType = groupList[parseInt(l.toString(), 10)].orientation;
                for (var i = 0; i < collectionList.length; i++) {
                    var items = collectionList[parseInt(i.toString(), 10)].items;
                    for (var j = 0; j < items.length; j++) {
                        var ribbonitem = items[parseInt(j.toString(), 10)];
                        if (!ribbonitem.allowedSizes || (ribbonitem.allowedSizes === 0)) {
                            ribbonitem.setProperties({
                                allowedSizes: (_interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small | _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium | _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large)
                            }, true);
                        }
                        if ((ribbonitem.type === 'ColorPicker') && (ribbonitem.allowedSizes !== _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small)) {
                            ribbonitem.setProperties({ allowedSizes: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small }, true);
                        }
                        else if ((ribbonitem.type === 'ComboBox' || ribbonitem.type === 'CheckBox') &&
                            (ribbonitem.allowedSizes !== _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium)) {
                            ribbonitem.setProperties({ allowedSizes: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium }, true);
                        }
                        else if (((alignType === 'Column') && (items.length > 1)) || ((alignType === 'Row') && (collectionList.length > 1))) {
                            if (ribbonitem.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) {
                                // To remove large size, perform 'and' with 011(3).
                                var sizeVal = ribbonitem.allowedSizes & (_interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small | _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium);
                                sizeVal = sizeVal ? sizeVal : _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium;
                                ribbonitem.setProperties({ allowedSizes: sizeVal }, true);
                            }
                        }
                        var itemsize = (ribbonitem.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large :
                            (ribbonitem.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium : _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small;
                        ribbonitem.setProperties({ activeSize: itemsize }, true);
                    }
                }
            }
        }
    };
    Ribbon.prototype.createCollection = function (collectionList, alignType, groupId, groupHeader, isGroupOF, tabIndex, groupContainer) {
        var collectionElements = [];
        for (var i = 0; i < collectionList.length; i++) {
            var collection = collectionList[parseInt(i.toString(), 10)];
            var collectionEle = this.createElement('div', {
                className: collection.cssClass,
                id: collection.id
            });
            collectionEle.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLLECTION */ .CV);
            collectionEle.classList.add(((alignType !== 'Column') || (this.activeLayout === 'Simplified')) ?
                _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH);
            collectionElements.push(collectionEle);
            var elements = this.createItems(collection.items, alignType, groupId, groupHeader, isGroupOF, tabIndex, groupContainer);
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, collectionEle);
            if ((alignType === 'Row') && (i === 2)) {
                break;
            }
        }
        return collectionElements;
    };
    Ribbon.prototype.createRibbonItem = function (item, itemEle) {
        switch (item.type) {
            case 'Button':
                this.ribbonButtonModule.createButton(item, itemEle);
                break;
            case 'DropDown':
                this.ribbonDropDownModule.createDropDown(item, itemEle);
                break;
            case 'SplitButton':
                this.ribbonSplitButtonModule.createSplitButton(item, itemEle);
                break;
            case 'CheckBox':
                this.ribbonCheckBoxModule.createCheckBox(item, itemEle);
                break;
            case 'ColorPicker':
                this.ribbonColorPickerModule.createColorPicker(item, itemEle);
                break;
            case 'ComboBox':
                this.ribbonComboBoxModule.createComboBox(item, itemEle);
                break;
            case 'Template':
                this.createTemplateContent(item, itemEle);
                break;
            case 'GroupButton':
                this.ribbonGroupButtonModule.createGroupButton(item, itemEle);
                break;
            case 'Gallery':
                this.ribbonGalleryModule.createGallery(item, itemEle);
                break;
        }
    };
    Ribbon.prototype.createItems = function (itemList, alignType, groupId, groupHeader, isGroupOF, tabIndex, groupContainer) {
        var _a;
        var itemElements = [];
        for (var i = 0; i < itemList.length; i++) {
            var item = itemList[parseInt(i.toString(), 10)];
            //To stop rendering of items with simplified mode position type as none
            var flag = true;
            while (flag &&
                (((this.activeLayout === 'Simplified') && !(item.displayOptions & (_interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified | _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow))) ||
                    ((this.activeLayout === 'Classic') && !(item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic)))) {
                i++;
                if (i < itemList.length) {
                    item = itemList[parseInt(i.toString(), 10)];
                }
                else {
                    flag = false;
                }
            }
            if (!flag) {
                break;
            }
            var itemEle = this.createElement('div', {
                className: item.cssClass,
                id: item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut
            });
            (_a = itemEle.classList).add.apply(_a, [_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5].concat((item.disabled ? [_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0] : [])));
            // To avoid undefined items condition is added
            if (item.ribbonTooltipSettings && (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .isTooltipPresent */ .FZ)(item.ribbonTooltipSettings)) {
                itemEle.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TOOLTIP_TARGET */ .xt);
                this.tooltipData.push({ id: itemEle.id, data: item.ribbonTooltipSettings });
            }
            if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                for (var i_7 = 0; i_7 < item.groupButtonSettings.items.length; i_7++) {
                    if (this.keyTipElements[parseInt(tabIndex.toString(), 10)] &&
                        item.groupButtonSettings.items[parseInt(i_7.toString(), 10)].keyTip) {
                        this.addKeyTip(tabIndex, item.groupButtonSettings.items[parseInt(i_7.toString(), 10)].keyTip, item.id + (_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i_7), 'item');
                    }
                }
            }
            if (item.keyTip) {
                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery) {
                    this.addKeyTip(tabIndex, item.keyTip, (item.id + '_popupButton'), 'item');
                }
                else {
                    this.addKeyTip(tabIndex, item.keyTip, item.id, 'item');
                }
            }
            var size = item.activeSize;
            if (!(item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                if (this.activeLayout === 'Simplified') {
                    size = ((item.allowedSizes === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) || (item.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) ||
                        (item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow)) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium : _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small;
                    item.setProperties({ activeSize: size }, true);
                }
                if (size & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) {
                    itemEle.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LARGE_ITEM */ .rv, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
                }
                else {
                    itemEle.classList.add((size & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MEDIUM_ITEM */ .NQ : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SMALL_ITEM */ .Xl);
                }
            }
            var initialProps = this.initialPropsData[parseInt(tabIndex.toString(), 10)];
            if (initialProps && initialProps.hiddenItems && initialProps.hiddenItems.length) {
                var itemIndex = initialProps.hiddenItems.indexOf(item.id);
                if (itemIndex !== -1) {
                    itemEle.classList.add('e-hidden');
                }
            }
            this.createRibbonItem(item, itemEle);
            if ((this.activeLayout === 'Simplified') && ((item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow) || (item.displayOptions === (_interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic | _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow)))) {
                this.createOverflowPopup(item, tabIndex, isGroupOF, groupId, groupHeader, itemEle, groupContainer);
                if ((item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) ||
                    (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                    this.updatePopupItems(item, itemEle, isGroupOF, true);
                }
            }
            else {
                // For normal mode and Simplified mode position type as Group and Auto
                itemElements.push(itemEle);
            }
            if ((alignType === 'Column') && (i === 2)) {
                break;
            }
        }
        return itemElements;
    };
    Ribbon.prototype.createHelpPaneTemplate = function () {
        if (this.helpPaneTemplate) {
            var templateName = 'helpPaneTemplate';
            this.clearTemplate([templateName]);
            this.ribbonTempEle = this.createElement('div', {
                className: _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_HELP_TEMPLATE */ .Ab,
                id: this.element.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_HELP_PANE_TEMPLATE_ID */ .XB
            });
            var templateFunction = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTemplateFunction */ .fj)(this.helpPaneTemplate);
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(templateFunction({}, this, templateName, 'helpPaneTemplate', this.isStringTemplate), this.ribbonTempEle);
            var tabEle = this.tabObj.element;
            var toolbarEle = tabEle.querySelector('.e-toolbar');
            toolbarEle.after(this.ribbonTempEle);
            tabEle.style.setProperty(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_HELP_PANE_TEMPLATE_WIDTH */ .Oy, this.ribbonTempEle.offsetWidth + 'px');
            this.renderReactTemplates();
        }
    };
    Ribbon.prototype.createTemplateContent = function (item, itemElement) {
        var itemEle = this.createElement('div', {
            className: item.cssClass ? (_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TEMPLATE */ .wj + _constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6 + item.cssClass) : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TEMPLATE */ .wj,
            id: item.id,
            attrs: { 'tabindex': '-1' }
        });
        if (item.disabled) {
            itemEle.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0);
            itemEle.setAttribute('disabled', '');
        }
        itemElement.appendChild(itemEle);
        this.renderItemTemplate(item, itemEle);
    };
    Ribbon.prototype.renderItemTemplate = function (item, itemElement) {
        var templateName = 'ribbon' + item.id + 'itemTemplate';
        this.clearTemplate([templateName]);
        var templateFunction = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTemplateFunction */ .fj)(item.itemTemplate);
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(templateFunction({ activeSize: _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3[item.activeSize] }, this, templateName, (item.id + 'itemTemplate'), this.isStringTemplate), itemElement);
        this.renderReactTemplates();
    };
    Ribbon.prototype.checkID = function (list, type, initId) {
        var key = type === 'tab' ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_ID */ .Os : type === 'group' ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUP_ID */ .SS :
            type === 'collection' ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .COLLECTION_ID */ .D0 : _constant__WEBPACK_IMPORTED_MODULE_9__/* .ITEM_ID */ .k8;
        for (var i = 0; i < list.length; i++) {
            var listitem = list[parseInt(i.toString(), 10)];
            if (!listitem.id) {
                var htmlAttrID = void 0;
                if (type === 'item') {
                    htmlAttrID = this.hasHtmlAtrrID(listitem);
                }
                listitem.setProperties({ id: htmlAttrID ? htmlAttrID : initId + key + (this.idIndex++) }, true);
            }
            switch (type) {
                case 'tab':
                    listitem.setProperties({ groups: this.checkID(listitem.groups, 'group', listitem.id) }, true);
                    break;
                case 'group':
                    listitem.setProperties({ collections: this.checkID(listitem.collections, 'collection', listitem.id) }, true);
                    break;
                case 'collection':
                    listitem.setProperties({ items: this.checkID(listitem.items, 'item', listitem.id) }, true);
                    break;
                default:
                    break;
            }
        }
        return list;
    };
    Ribbon.prototype.hasHtmlAtrrID = function (listItem) {
        var id = '';
        if (listItem.buttonSettings.htmlAttributes.id) {
            id = listItem.buttonSettings.htmlAttributes.id;
        }
        else if (listItem.checkBoxSettings.htmlAttributes.id) {
            id = listItem.checkBoxSettings.htmlAttributes.id;
        }
        else if (listItem.colorPickerSettings.htmlAttributes.id) {
            id = listItem.colorPickerSettings.htmlAttributes.id;
        }
        else if (listItem.comboBoxSettings.htmlAttributes.id) {
            id = listItem.comboBoxSettings.htmlAttributes.id;
        }
        else if (listItem.dropDownSettings.htmlAttributes.id) {
            id = listItem.dropDownSettings.htmlAttributes.id;
        }
        else if (listItem.splitButtonSettings.htmlAttributes.id) {
            id = listItem.splitButtonSettings.htmlAttributes.id;
        }
        return id;
    };
    Ribbon.prototype.updateCommonProperty = function (commonProp) {
        this.tabObj.setProperties(commonProp);
        if (this.ribbonFileMenuModule) {
            this.ribbonFileMenuModule.setCommonProperties(commonProp);
        }
        if (this.ribbonBackstageModule) {
            this.ribbonBackstageModule.setCommonProperties(commonProp);
        }
        for (var i = 0; i < this.tabs.length; i++) {
            var tab = this.tabs[parseInt(i.toString(), 10)];
            var contentEle = this.tabObj.items[parseInt(i.toString(), 10)].content;
            if (contentEle.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP */ .PH)) {
                for (var _i = 0, _a = tab.groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    var dropdownElement = void 0;
                    var dropdown = void 0;
                    if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) {
                        dropdownElement = group.isCollapsed ?
                            contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9) : null;
                    }
                    else {
                        dropdownElement = group.enableGroupOverflow ?
                            contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                        dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
                        if (dropdown) {
                            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateTooltipProp */ .Qs)(dropdown.target, commonProp);
                            dropdown.setProperties(commonProp);
                        }
                    }
                    for (var _b = 0, _c = group.collections; _b < _c.length; _b++) {
                        var collection = _c[_b];
                        for (var _d = 0, _e = collection.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            var ele = null;
                            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) {
                                if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                                    ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id) : item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton ? contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL) : contentEle.querySelector('#' + item.id);
                                }
                            }
                            else {
                                //Checks for Simplified and Auto options (Auto = classic + simplified + popup)
                                ele = (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) ? contentEle.querySelector('#' + item.id) : null;
                                // element will be null for "Popup" and if the item is moved to overflow in "Auto" mode
                                if (!ele) {
                                    ele = dropdown.target.querySelector('#' + item.id);
                                    if (item.type === 'DropDown') {
                                        this.updatePopupItems(item, dropdown.target, group.enableGroupOverflow, true);
                                    }
                                }
                            }
                            if (ele) {
                                var moduleName = this.getItemModuleName(item);
                                if (moduleName !== 'template') {
                                    if (moduleName === 'group-btn' && this.activeLayout === 'Classic') {
                                        for (var i_8 = 0; i_8 < item.groupButtonSettings.items.length; i_8++) {
                                            var btnEle = ele.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i_8);
                                            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateCommonProperty */ .MZ)(btnEle, 'btn', commonProp);
                                        }
                                    }
                                    else if (moduleName === 'group-btn' && this.activeLayout === 'Simplified') {
                                        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateCommonProperty */ .MZ)(ele, 'dropdown-btn', commonProp);
                                        for (var i_9 = 0; i_9 < item.groupButtonSettings.items.length; i_9++) {
                                            var btnEle = document.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i_9);
                                            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateCommonProperty */ .MZ)(btnEle, 'btn', commonProp);
                                        }
                                    }
                                    else {
                                        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateCommonProperty */ .MZ)(ele, moduleName, commonProp);
                                    }
                                }
                                else if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(commonProp.enableRtl)) {
                                    ele.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RTL_CSS */ .rT, commonProp.enableRtl);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    Ribbon.prototype.removeLauncherIcon = function (groupId, dropdownElement, contentEle) {
        var containerId = groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut;
        var containerEle = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, containerId) : contentEle.querySelector('#' + containerId);
        if (containerEle) {
            containerEle.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LAUNCHER */ .c);
            var launcherIcon = containerEle.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .LAUNCHER_ID */ .PI);
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(launcherIcon);
        }
    };
    Ribbon.prototype.destroyTabItems = function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[parseInt(i.toString(), 10)];
            var contentEle = this.tabObj.items[parseInt(i.toString(), 10)].content;
            for (var _i = 0, _a = tab.groups; _i < _a.length; _i++) {
                var group = _a[_i];
                var dropdownElement = void 0;
                var dropdown = void 0;
                if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) {
                    dropdownElement = group.isCollapsed ?
                        contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9) : null;
                    if (group.showLauncherIcon) {
                        this.removeLauncherIcon(group.id, dropdownElement, contentEle);
                    }
                }
                else {
                    dropdownElement = group.enableGroupOverflow ?
                        contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                    dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
                }
                for (var _b = 0, _c = group.collections; _b < _c.length; _b++) {
                    var collection = _c[_b];
                    for (var _d = 0, _e = collection.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        var ele = void 0;
                        if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) {
                            if (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) {
                                ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id) :
                                    contentEle.querySelector('#' + item.id);
                                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) {
                                    ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id +
                                        _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL) : contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                                }
                                if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery) {
                                    ele = contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                                }
                            }
                        }
                        else {
                            //Checks for Simplified and Auto options (Auto = classic + simplified + popup)
                            ele = (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) ?
                                contentEle.querySelector('#' + item.id) : null;
                            if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery) {
                                ele = (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) ? contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut) : null;
                            }
                            // element will be null for "Popup" and if the item is moved to overflow in "Auto" mode
                            if (!ele) {
                                ele = dropdown ? dropdown.target.querySelector('#' + item.id) : null;
                            }
                        }
                        if (ele) {
                            this.destroyFunction(item, ele);
                        }
                    }
                }
                if ((this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) && dropdownElement) {
                    this.ribbonDropDownModule.removeOverFlowDropDown(dropdownElement);
                }
                else if ((this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) && group.enableGroupOverflow && dropdownElement) {
                    this.removeOverflowButton(dropdown);
                }
            }
        }
        if (this.overflowDDB) {
            this.removeOverflowButton(this.overflowDDB);
            this.overflowDDB = null;
        }
    };
    Ribbon.prototype.destroyFunction = function (item, ele) {
        var moduleName = this.getItemModuleName(item);
        if (moduleName === 'colorpicker') {
            this.ribbonColorPickerModule.unwireColorPickerEvents(ele);
        }
        else if (moduleName === 'group-btn') {
            if (this.activeLayout === 'Classic') {
                for (var i = 0; i < item.groupButtonSettings.items.length; i++) {
                    var btnEle = ele.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i);
                    if (btnEle) {
                        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .destroyControl */ .cm)(btnEle, 'btn');
                    }
                }
            }
            else {
                this.ribbonGroupButtonModule.destroyDropDown(item);
            }
            var _loop_4 = function (i) {
                if (item.groupButtonSettings.items[parseInt(i.toString(), 10)].ribbonTooltipSettings) {
                    var groupButtonID_1 = item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i;
                    var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this_4.tooltipData, function (e) { return e.id === groupButtonID_1; });
                    if (index !== -1) {
                        this_4.tooltipData.splice(index, 1);
                    }
                }
            };
            var this_4 = this;
            for (var i = 0; i < item.groupButtonSettings.items.length; i++) {
                _loop_4(i);
            }
        }
        else if (moduleName === 'gallery') {
            if (ele.closest('.e-ribbon-overflow-target')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .destroyControl */ .cm)(ele, 'dropdown-btn');
                var galleryPopupEle = Array.prototype.slice.call(document.querySelectorAll('#' + item.id + '_galleryPopup'));
                galleryPopupEle.concat(Array.prototype.slice.call(document.querySelectorAll('#' + item.id + '-popup')));
                for (var i = 0; i < galleryPopupEle.length; i++) {
                    galleryPopupEle[parseInt(i.toString(), 10)].remove();
                }
                var galleryPopupBtn = document.querySelector('#' + item.id + '_popupButton');
                if (galleryPopupBtn) {
                    galleryPopupBtn.remove();
                }
                var galleryWrapper = document.querySelector('#' + item.id + '_galleryWrapper');
                if (galleryWrapper) {
                    galleryWrapper.remove();
                }
            }
            else {
                var galleryEle = ele.querySelectorAll('.e-ribbon-gallery-item');
                var galleryPopupBtn = ele.parentElement.querySelector('#' + item.id + '_popupButton');
                if (galleryPopupBtn) {
                    galleryPopupBtn.remove();
                }
                for (var i = 0; i < galleryEle.length; i++) {
                    galleryEle[parseInt(i.toString(), 10)].remove();
                }
                var galleryPopupEle = document.querySelectorAll('#' + item.id + '_galleryPopup');
                for (var i = 0; i < galleryPopupEle.length; i++) {
                    galleryPopupEle[parseInt(i.toString(), 10)].remove();
                }
            }
        }
        else if (moduleName !== 'template') {
            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .destroyControl */ .cm)(ele, moduleName);
        }
        if (item.ribbonTooltipSettings) {
            var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tooltipData, function (e) { return e.id === item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut; });
            if (index !== -1) {
                this.tooltipData.splice(index, 1);
            }
        }
        if (item.type === 'GroupButton') {
            this.ribbonGroupButtonModule.destroyDropDown(item);
        }
    };
    /**
     * Gets the item module name.
     *
     * @param {RibbonItemModel} item - Gets the ribbon item model.
     * @returns {void}
     * @hidden
     */
    Ribbon.prototype.getItemModuleName = function (item) {
        switch (item.type) {
            case 'Button':
                return 'btn';
            case 'DropDown':
                return 'dropdown-btn';
            case 'SplitButton':
                return 'split-btn';
            case 'CheckBox':
                return 'checkbox';
            case 'ColorPicker':
                return 'colorpicker';
            case 'ComboBox':
                return 'combobox';
            case 'GroupButton':
                return 'group-btn';
            case 'Gallery':
                return 'gallery';
            default:
                return 'template';
        }
    };
    Ribbon.prototype.clearOverflowResize = function () {
        this.destroyScroll();
        this.clearOverflowDropDown(this.selectedTab);
        var tab = this.tabs[this.selectedTab];
        var activeContent = this.tabObj.element.querySelector('#' + this.tabs[this.selectedTab].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
        var tabContent = activeContent.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_CONTENT */ .gU);
        for (var j = 0; (j < tab.groups.length); j++) {
            this.checkSmallToMedium(this.selectedTab, tab, j, tabContent, activeContent, true, true);
            this.checkMediumToLarge(this.selectedTab, tab, j, tabContent, activeContent, true, true);
        }
    };
    /**
     * Refreshes the layout.
     *
     * @returns {void}
     */
    Ribbon.prototype.refreshLayout = function () {
        this.resizeHandler();
    };
    /**
     * Selects the tab
     *
     * @param  {string} tabId - Gets the tab ID
     * @returns {void}
     */
    Ribbon.prototype.selectTab = function (tabId) {
        var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === tabId; });
        this.setProperties({ selectedTab: index });
    };
    /**
     * Shows a specific tab in the ribbon.
     *
     * @param {string} tabId - The ID of the tab to be shown.
     * @param {boolean} isContextual - The boolean if the rendering is contextual.
     * @returns {void}
     */
    Ribbon.prototype.showTab = function (tabId, isContextual) {
        if (isContextual === void 0) { isContextual = false; }
        this.showHideTab(tabId, false, isContextual);
    };
    /**
     * Hides a specific tab in the ribbon.
     *
     * @param {string} tabId - The ID of the tab to be hidden.
     * @param {boolean} isContextual - The boolean if the rendering is contextual.
     * @returns {void}
     */
    Ribbon.prototype.hideTab = function (tabId, isContextual) {
        if (isContextual === void 0) { isContextual = false; }
        this.showHideTab(tabId, true, isContextual);
    };
    Ribbon.prototype.showHideTab = function (tabId, value, isContextual) {
        var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === tabId; });
        if (index === -1) {
            return;
        }
        this.tabObj.hideTab(index, value);
        if (isContextual) {
            var contextualTab_1;
            var tabEle = this.tabObj.element;
            for (var i = 0; i < this.contextualTabs.length; i++) {
                for (var j = 0; j < this.contextualTabs[parseInt(i.toString(), 10)].tabs.length; j++) {
                    if (tabId === this.contextualTabs[parseInt(i.toString(), 10)].tabs[parseInt(j.toString(), 10)].id) {
                        contextualTab_1 = this.contextualTabs[parseInt(i.toString(), 10)];
                    }
                }
            }
            if (contextualTab_1) {
                var isTabHidden = true;
                var _loop_5 = function (i) {
                    var index_1 = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this_5.tabs, function (e) {
                        return e.id === contextualTab_1.tabs[parseInt(i.toString(), 10)].id;
                    });
                    if (index_1 !== -1) {
                        var toolbarEle = tabEle.querySelectorAll('.e-toolbar-item')[parseInt(index_1.toString(), 10)];
                        if (!(toolbarEle.classList.contains('e-hidden'))) {
                            isTabHidden = false;
                        }
                    }
                };
                var this_5 = this;
                for (var i = 0; i < contextualTab_1.tabs.length; i++) {
                    _loop_5(i);
                }
                if (isTabHidden) {
                    contextualTab_1.setProperties({ visible: false }, true);
                }
                else {
                    contextualTab_1.setProperties({ visible: true }, true);
                }
            }
        }
    };
    /**
     * Enables a specific tab in the ribbon.
     *
     * @param {string} tabId - The ID of the tab to be enabled.
     * @returns {void}
     */
    Ribbon.prototype.enableTab = function (tabId) {
        this.enableDisableTab(tabId, true);
    };
    /**
     * Disables a specific tab in the ribbon.
     *
     * @param {string} tabId - The ID of the tab to be disabled.
     * @returns {void}
     */
    Ribbon.prototype.disableTab = function (tabId) {
        this.enableDisableTab(tabId, false);
    };
    Ribbon.prototype.enableDisableTab = function (tabId, value) {
        var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === tabId; });
        if (index === -1) {
            return;
        }
        var tbItems = this.tabObj.items[parseInt(index.toString(), 10)].content;
        this.tabObj.element.querySelector('#' + tabId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG).classList[value ? 'remove' : 'add']('e-disabled');
        tbItems.classList[value ? 'remove' : 'add']('e-disabled');
        this.tabObj.enableTab(index, value);
    };
    /**
     * Adds the ribbon tab.
     *
     * @param {RibbonTabModel} tab - Gets the ribbon tab model
     * @param {string} targetId  - Gets the ID of the target tab to add the new tab.
     * @param {boolean} isAfter - Defines whether the tab is added before or after the target.
     * @returns {void}
     */
    Ribbon.prototype.addTab = function (tab, targetId, isAfter) {
        var index = targetId ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === targetId; }) : -1;
        index = (index === -1) ? this.tabs.length : (index + (isAfter ? 1 : 0));
        this.tabsInternal = this.tabs.slice();
        this.tabsInternal.splice(index, 0, tab);
        this.setProperties({ tabs: this.tabsInternal }, true);
        this.checkID([this.tabs[parseInt(index.toString(), 10)]], 'tab', this.element.id);
        this.tabsInternal = this.tabs.slice();
        this.validateItemSize();
        var tabItem = this.createTabItems([tab]);
        this.tabObj.addTab(tabItem, index);
    };
    /**
     * Removes the ribbon tab.
     *
     * @param {string} tabId - Gets the tab ID
     * @returns {void}
     */
    Ribbon.prototype.removeTab = function (tabId) {
        var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === tabId; });
        if (index === -1) {
            return;
        }
        var contentEle = this.tabObj.items[parseInt(index.toString(), 10)].content;
        var groups = this.tabs[parseInt(index.toString(), 10)].groups;
        if (groups && (contentEle.innerHTML !== '')) {
            for (var _i = 0, groups_2 = groups; _i < groups_2.length; _i++) {
                var group = groups_2[_i];
                var dropdownElement = group.isCollapsed ? contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9) : null;
                for (var _a = 0, _b = group.collections; _a < _b.length; _a++) {
                    var collection = _b[_a];
                    for (var _c = 0, _d = collection.items; _c < _d.length; _c++) {
                        var item = _d[_c];
                        var ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id) : contentEle.querySelector('#' + item.id);
                        if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton && this.activeLayout === 'Classic') {
                            ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id +
                                _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL) : contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                        }
                        if (ele) {
                            this.destroyFunction(item, ele);
                        }
                    }
                }
                if (dropdownElement) {
                    this.ribbonDropDownModule.removeOverFlowDropDown(dropdownElement);
                }
            }
        }
        if (index === this.selectedTab) {
            this.isAddRemove = true;
        }
        this.tabsInternal = this.tabs.slice();
        this.tabsInternal.splice(index, 1);
        this.setProperties({ tabs: this.tabsInternal }, true);
        this.tabObj.removeTab(index);
    };
    /**
     * Adds the ribbon group.
     *
     * @param {string} tabId - Gets the tab ID.
     * @param {RibbonGroupModel} group - Gets the ribbon group model.
     * @param {string} targetId - Gets the ID of the target group to add the new group.
     * @param {boolean} isAfter - Defines whether the group is added before or after the target.
     * @returns {void}
     */
    Ribbon.prototype.addGroup = function (tabId, group, targetId, isAfter) {
        var tabIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === tabId; });
        if (tabIndex === -1) {
            return;
        }
        if (this.selectedTab === tabIndex) {
            this.clearOverflowResize();
        }
        var tab = this.tabs[parseInt(tabIndex.toString(), 10)];
        var ribbonGroups = tab.groups.slice();
        var index = targetId ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(ribbonGroups, function (e) { return e.id === targetId; }) : -1;
        index = (index === -1) ? ribbonGroups.length : (index + (isAfter ? 1 : 0));
        ribbonGroups.splice(index, 0, group);
        tab.setProperties({ groups: ribbonGroups }, true);
        this.checkID([tab.groups[parseInt(index.toString(), 10)]], 'group', tabId);
        this.validateItemSize();
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[parseInt(tabIndex.toString(), 10)].content;
        if (contentEle.innerHTML !== '') {
            var element = this.createGroups([tab.groups[parseInt(index.toString(), 10)]], tabIndex)[0];
            //insert the element in tab items property.
            var targetEle = targetId ? contentEle.querySelector('#' + targetId) : null;
            if (targetEle) {
                targetEle.insertAdjacentElement(isAfter ? 'afterend' : 'beforebegin', element);
            }
            else {
                contentEle.append(element);
            }
        }
        if (this.selectedTab === tabIndex) {
            this.refreshLayout();
        }
    };
    /**
     * Removes the ribbon group.
     *
     * @param {string} groupId -Gets the group ID.
     * @returns {void}
     */
    Ribbon.prototype.removeGroup = function (groupId) {
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupId);
        if (!itemProp) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        if (contentEle.innerHTML !== '') {
            var dropdownElement = void 0;
            var dropdown = void 0;
            if (itemProp.group.showLauncherIcon) {
                this.removeLauncherIcon(itemProp.group.id, null, contentEle);
            }
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                dropdownElement = itemProp.group.enableGroupOverflow ?
                    contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
            }
            for (var _i = 0, _a = itemProp.group.collections; _i < _a.length; _i++) {
                var collection = _a[_i];
                for (var _b = 0, _c = collection.items; _b < _c.length; _b++) {
                    var item = _c[_b];
                    this.removeItemElement(contentEle, item, dropdown);
                }
            }
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                if (itemProp.group.enableGroupOverflow) {
                    if (dropdown.target.childElementCount === 0 || (dropdown.target.childElementCount
                        === 1 && this.isHeaderVisible(dropdown.target, itemProp.group.id))) {
                        this.removeOverflowButton(dropdown);
                    }
                }
                else {
                    var ofGroupContainer = dropdown.target.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (ofGroupContainer && ofGroupContainer.childElementCount === 1) {
                        ofGroupContainer.remove();
                    }
                    var ofTabContainer = dropdown.target.querySelector('#' + this.tabs[parseInt(itemProp.tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                    if (ofTabContainer && ofTabContainer.childElementCount === 0) {
                        ofTabContainer.remove();
                    }
                }
            }
            var groupEle = contentEle.querySelector('#' + groupId);
            if (groupEle) {
                groupEle.remove();
            }
        }
        var ribbonGroups = this.tabs[itemProp.tabIndex].groups.slice();
        ribbonGroups.splice(itemProp.groupIndex, 1);
        this.tabs[itemProp.tabIndex].setProperties({ groups: ribbonGroups }, true);
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
    };
    Ribbon.prototype.isHeaderVisible = function (headerEle, groupID) {
        return headerEle.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG) ? true : false;
    };
    /**
     * Hides a specific group within a ribbon tab.
     *
     * @param {string} groupID - The ID of the group to be hidden.
     * @returns {void}
     */
    Ribbon.prototype.hideGroup = function (groupID) {
        this.showHideGroup(groupID, true);
    };
    /**
     * Shows a specific group within a ribbon tab.
     *
     * @param {string} groupID - The ID of the group to be shown.
     * @returns {void}
     */
    Ribbon.prototype.showGroup = function (groupID) {
        this.showHideGroup(groupID, false);
    };
    Ribbon.prototype.showHideGroup = function (groupID, isHidden) {
        var overflowDDB;
        var overflowtarget;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupID);
        if (!itemProp) {
            return;
        }
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        var groupEle = contentEle.querySelector('#' + groupID);
        if (groupEle) {
            this.updateHiddenElements(itemProp.tabIndex, isHidden ? 'hideGroup' : 'showGroup', groupID, isHidden, groupEle);
        }
        else {
            this.updateInitialProps(itemProp.tabIndex, groupID, 'hiddenGroups', isHidden);
        }
        if (this.overflowDDB) {
            var overflowEle = this.overflowDDB.target;
            var ofTabContainer = overflowEle.querySelector('#' + this.tabs[parseInt(itemProp.tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
            if (itemProp.group.enableGroupOverflow) {
                var overflowDDBEle = contentEle.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
                if (overflowDDBEle) {
                    overflowDDB = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDBEle, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    overflowtarget = overflowDDB.target;
                }
                if (overflowtarget) {
                    if (isHidden) {
                        overflowtarget.classList.add('e-hidden');
                    }
                    else {
                        overflowtarget.classList.remove('e-hidden');
                    }
                }
            }
            else if (ofTabContainer) {
                var grpContainer = ofTabContainer.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                if (grpContainer) {
                    if (isHidden) {
                        grpContainer.classList.add('e-hidden');
                    }
                    else {
                        grpContainer.classList.remove('e-hidden');
                    }
                }
            }
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
    };
    Ribbon.prototype.updateHiddenElements = function (tabIndex, key, id, isHidden, element, group) {
        if (isHidden) {
            if (!(element.classList.contains('e-hidden'))) {
                this.checkHiddenElements(key, id, tabIndex);
                element.classList.add('e-hidden');
                if (key === 'hideItem') {
                    this.checkHiddenItems(group, isHidden, tabIndex);
                }
                this.calculateHiddenElementsWidth(tabIndex);
            }
        }
        else {
            if (element.classList.contains('e-hidden')) {
                this.checkHiddenElements(key, id, tabIndex);
                element.classList.remove('e-hidden');
                this.calculateHiddenElementsWidth(tabIndex);
                if (key === 'showItem') {
                    this.checkHiddenItems(group, isHidden, tabIndex);
                }
            }
        }
    };
    Ribbon.prototype.checkHiddenElements = function (key, id, tabIndex) {
        if (this.activeLayout === 'Simplified') {
            var hiddenProps = this.hiddenElements[parseInt(tabIndex.toString(), 10)];
            if (!hiddenProps) {
                this.hiddenElements[parseInt(tabIndex.toString(), 10)] = {};
                hiddenProps = this.hiddenElements[parseInt(tabIndex.toString(), 10)];
            }
            if (hiddenProps) {
                if (!hiddenProps["" + key]) {
                    hiddenProps["" + key] = [];
                }
                if (hiddenProps["" + key].length) {
                    var index = hiddenProps["" + key].indexOf(id);
                    if (index === -1) {
                        hiddenProps["" + key].push(id);
                    }
                }
                else {
                    hiddenProps["" + key].push(id);
                }
            }
        }
    };
    Ribbon.prototype.updateItemsSimplifiedWidth = function (tabIndex, key) {
        var hiddenProps = this.hiddenElements[parseInt(tabIndex.toString(), 10)];
        if (hiddenProps && hiddenProps["" + key] && hiddenProps["" + key].length) {
            var _loop_6 = function (i) {
                var contentEle = this_6.tabObj.items[parseInt(tabIndex.toString(), 10)].content;
                var hiddenEle;
                var groupEle = void 0;
                var isGroupHidden = false;
                var widthDifference = 0;
                if (key === 'hideGroup' || key === 'showGroup') {
                    hiddenEle = contentEle.querySelector('#' + hiddenProps["" + key][parseInt(i.toString(), 10)]);
                }
                else {
                    hiddenEle = contentEle.querySelector('#' + hiddenProps["" + key][parseInt(i.toString(), 10)] + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                }
                if (hiddenEle) {
                    if (key === 'hideGroup' || key === 'hideItem') {
                        var isHidden = false;
                        if (hiddenEle.classList.contains('e-hidden')) {
                            isHidden = true;
                            hiddenEle.classList.remove('e-hidden');
                        }
                        if (key === 'hideItem') {
                            groupEle = hiddenEle.closest('.e-ribbon-group');
                            if (groupEle.classList.contains('e-hide-group')) {
                                isGroupHidden = true;
                                widthDifference = this_6.checkWidthDifference(hiddenEle, groupEle);
                            }
                        }
                        this_6.calculateOverflowItemsWidth(hiddenEle.offsetWidth + widthDifference, true, tabIndex);
                        this_6.calculateMediumDataWidth(hiddenEle.offsetWidth + widthDifference, tabIndex, true);
                        if (isHidden) {
                            hiddenEle.classList.add('e-hidden');
                        }
                    }
                    else {
                        if (key === 'showItem') {
                            groupEle = hiddenEle.closest('.e-ribbon-group');
                            if (groupEle.classList.contains('e-hide-group')) {
                                isGroupHidden = true;
                                groupEle.classList.remove('e-hide-group');
                                groupEle.classList.remove('e-ribbon-emptyCollection');
                                widthDifference = Math.abs(hiddenEle.offsetWidth - groupEle.offsetWidth);
                                if (this_6.hiddenGroups.indexOf(groupEle.id) !== -1) {
                                    this_6.hiddenGroups.splice(this_6.hiddenGroups.indexOf(groupEle.id), 1);
                                }
                            }
                            else {
                                if (this_6.hiddenGroups.indexOf(groupEle.id) !== -1) {
                                    var hiddenItems = groupEle.querySelectorAll('.e-ribbon-item:not(.e-hidden)');
                                    hiddenItems.forEach(function (item) {
                                        if (item.id !== hiddenEle.id) {
                                            item.classList.add('e-hidden');
                                        }
                                    });
                                    widthDifference = Math.abs(hiddenEle.offsetWidth - groupEle.offsetWidth);
                                    hiddenItems.forEach(function (item) {
                                        if (item.id !== hiddenEle.id) {
                                            item.classList.remove('e-hidden');
                                        }
                                    });
                                    this_6.hiddenGroups.splice(this_6.hiddenGroups.indexOf(groupEle.id), 1);
                                }
                            }
                        }
                        this_6.calculateOverflowItemsWidth(hiddenEle.offsetWidth + widthDifference, false, tabIndex);
                        this_6.calculateMediumDataWidth(hiddenEle.offsetWidth + widthDifference, tabIndex, false);
                    }
                    if (isGroupHidden) {
                        groupEle.classList.add('e-hide-group');
                        groupEle.classList.add('e-ribbon-emptyCollection');
                    }
                }
                var index = hiddenProps["" + key].indexOf(hiddenProps["" + key][parseInt(i.toString(), 10)]);
                if (index !== -1) {
                    hiddenProps["" + key].splice(index, 1);
                    i--;
                }
                out_i_1 = i;
            };
            var this_6 = this, out_i_1;
            for (var i = 0; i < hiddenProps["" + key].length; i++) {
                _loop_6(i);
                i = out_i_1;
            }
        }
    };
    Ribbon.prototype.checkWidthDifference = function (hiddenEle, groupEle) {
        var widthDifference = 0;
        groupEle.classList.remove('e-hide-group');
        groupEle.classList.remove('e-ribbon-emptyCollection');
        if (this.hiddenGroups.length) {
            if (this.hiddenGroups.indexOf(groupEle.id) === -1) {
                this.hiddenGroups.push(groupEle.id);
                widthDifference = Math.abs(hiddenEle.offsetWidth - groupEle.offsetWidth);
            }
        }
        else {
            this.hiddenGroups.push(groupEle.id);
            widthDifference = Math.abs(hiddenEle.offsetWidth - groupEle.offsetWidth);
        }
        return widthDifference;
    };
    Ribbon.prototype.calculateHiddenElementsWidth = function (tabIndex) {
        if (tabIndex === this.selectedTab && this.activeLayout === 'Simplified') {
            var hiddenProps = this.hiddenElements[parseInt(tabIndex.toString(), 10)];
            if (hiddenProps) {
                for (var i = 0; i < Object.keys(hiddenProps).length; i++) {
                    this.updateItemsSimplifiedWidth(tabIndex, Object.keys(hiddenProps)[parseInt(i.toString(), 10)]);
                }
            }
        }
    };
    Ribbon.prototype.calculateMediumDataWidth = function (hiddenWidth, tabIndex, isHidden) {
        if (this.selectedTab === tabIndex && this.activeLayout === 'Simplified') {
            var activeContent = this.tabObj.element.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o);
            var mediumDataItems = Array.prototype.slice.call(activeContent.querySelectorAll('.e-ribbon-item'));
            if (this.overflowDDB) {
                var overflowEle = this.overflowDDB.target;
                var overflowItems = overflowEle.querySelectorAll('.e-ribbon-item');
                var selectedOFTab = document.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                for (var i = 0; i < overflowItems.length; i++) {
                    var ofTab = overflowItems[parseInt(i.toString(), 10)].closest('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                    if (selectedOFTab && ofTab && selectedOFTab.id === ofTab.id && overflowItems[parseInt(i.toString(), 10)].hasAttribute('data-medium-width')) {
                        mediumDataItems.push(overflowItems[parseInt(i.toString(), 10)]);
                    }
                }
            }
            var groupOFButton = activeContent.querySelectorAll('.e-ribbon-group-of-btn');
            for (var i = 0; i < groupOFButton.length; i++) {
                var overflowButton = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(groupOFButton[parseInt(i.toString(), 10)], _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                var overflowBtnTarget = overflowButton.target;
                var overflowItems = overflowBtnTarget.querySelectorAll('.e-ribbon-item');
                for (var i_10 = 0; i_10 < overflowItems.length; i_10++) {
                    if (overflowItems[parseInt(i_10.toString(), 10)].hasAttribute('data-medium-width')) {
                        mediumDataItems.push(overflowItems[parseInt(i_10.toString(), 10)]);
                    }
                }
            }
            for (var i = 0; i < mediumDataItems.length; i++) {
                if (mediumDataItems[parseInt(i.toString(), 10)].hasAttribute('data-medium-width')) {
                    var previousWidth = parseInt(mediumDataItems[parseInt(i.toString(), 10)].getAttribute('data-medium-width'), 10);
                    mediumDataItems[parseInt(i.toString(), 10)].setAttribute('data-medium-width', isHidden ? (previousWidth - hiddenWidth).toString() : (previousWidth + hiddenWidth).toString());
                }
            }
        }
    };
    Ribbon.prototype.calculateOverflowItemsWidth = function (hiddenItem, isHidden, tabIndex) {
        if (this.selectedTab === tabIndex && this.activeLayout === 'Simplified') {
            var groupList = this.tabs[parseInt(tabIndex.toString(), 10)].groups;
            for (var i = 0; i < groupList.length; i++) {
                var group = groupList[parseInt(i.toString(), 10)];
                if (group.enableGroupOverflow) {
                    var groupContainer = document.querySelector('#' + group.id);
                    var overflowButton = void 0;
                    var overflowDDB = groupContainer.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
                    if (overflowDDB) {
                        overflowButton = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDB, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    }
                    if (overflowButton) {
                        var overflowEle = overflowButton.target;
                        var overflowItems = overflowEle.querySelectorAll('.e-ribbon-item');
                        for (var i_11 = 0; i_11 < overflowItems.length; i_11++) {
                            var previousWidth = parseInt(overflowItems[parseInt(i_11.toString(), 10)].getAttribute('data-simplified-width'), 10);
                            if (previousWidth) {
                                overflowItems[parseInt(i_11.toString(), 10)].setAttribute('data-simplified-width', isHidden ? (previousWidth - hiddenItem).toString() : (previousWidth + hiddenItem).toString());
                            }
                        }
                    }
                }
            }
        }
        if (this.overflowDDB) {
            var selectedOFTab = document.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
            var overflowEle = this.overflowDDB.target;
            var overflowItems = overflowEle.querySelectorAll('.e-ribbon-item');
            for (var i = 0; i < overflowItems.length; i++) {
                var ofTab = overflowItems[parseInt(i.toString(), 10)].closest('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                if (selectedOFTab && ofTab && selectedOFTab.id === ofTab.id) {
                    var previousWidth = parseInt(overflowItems[parseInt(i.toString(), 10)].getAttribute('data-simplified-width'), 10);
                    if (previousWidth) {
                        overflowItems[parseInt(i.toString(), 10)].setAttribute('data-simplified-width', isHidden ? (previousWidth - hiddenItem).toString() : (previousWidth + hiddenItem).toString());
                    }
                }
            }
        }
    };
    /**
     * Disables a specific group within a ribbon tab.
     *
     * @param {string} groupID - The ID of the group to be disabled.
     * @returns {void}
     */
    Ribbon.prototype.disableGroup = function (groupID) {
        this.enableDisableGroup(groupID, true);
    };
    /**
     * Enables a specific group within a ribbon tab.
     *
     * @param {string} groupID - The ID of the group to be enabled.
     * @returns {void}
     */
    Ribbon.prototype.enableGroup = function (groupID) {
        this.enableDisableGroup(groupID, false);
    };
    Ribbon.prototype.enableDisableGroup = function (groupID, isDisabled) {
        var overflowDDB;
        var overflowtarget;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupID);
        if (!itemProp) {
            return;
        }
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        var groupEle = contentEle.querySelector('#' + groupID);
        if (groupEle) {
            if (isDisabled) {
                groupEle.classList.add('e-disabled');
            }
            else {
                groupEle.classList.remove('e-disabled');
            }
        }
        else {
            this.updateInitialProps(itemProp.tabIndex, groupID, 'disabledGroups', isDisabled);
        }
        if (this.overflowDDB) {
            var overflowEle = this.overflowDDB.target;
            var ofTabContainer = overflowEle.querySelector('#' + this.tabs[parseInt(itemProp.tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
            if (itemProp.group.enableGroupOverflow) {
                var overflowDDBEle = contentEle.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
                if (overflowDDBEle) {
                    overflowDDB = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDBEle, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    overflowtarget = overflowDDB.target;
                }
                if (overflowtarget) {
                    if (isDisabled) {
                        overflowtarget.classList.add('e-disabled');
                    }
                    else {
                        overflowtarget.classList.remove('e-disabled');
                    }
                }
            }
            else if (ofTabContainer) {
                var grpContainer = ofTabContainer.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                if (grpContainer) {
                    if (isDisabled) {
                        grpContainer.classList.add('e-disabled');
                    }
                    else {
                        grpContainer.classList.remove('e-disabled');
                    }
                }
            }
        }
    };
    /**
     * adds the ribbon collection.
     *
     * @param {string} groupId - Gets the ribbon group ID.
     * @param {RibbonCollectionModel} collection - Gets the ribbon collection model.
     * @param {string} targetId - Gets the ID of the target collection to add the new collection.
     * @param {boolean} isAfter - Defines whether the collection is added before or after the target.
     * @returns {void}
     */
    Ribbon.prototype.addCollection = function (groupId, collection, targetId, isAfter) {
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupId);
        if (!itemProp) {
            return;
        }
        if ((itemProp.group.orientation === 'Row') && (itemProp.group.collections.length === 3)) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        var ribbonCollections = itemProp.group.collections.slice();
        var index = targetId ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(ribbonCollections, function (e) { return e.id === targetId; }) : -1;
        index = (index === -1) ? ribbonCollections.length : (index + (isAfter ? 1 : 0));
        ribbonCollections.splice(index, 0, collection);
        itemProp.group.setProperties({ collections: ribbonCollections }, true);
        this.checkID([itemProp.group.collections[parseInt(index.toString(), 10)]], 'collection', groupId);
        this.validateItemSize();
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        if (contentEle.innerHTML !== '') {
            var collection_1 = itemProp.group.collections[parseInt(index.toString(), 10)];
            var element = this.createCollection([collection_1], itemProp.group.orientation, itemProp.group.id, itemProp.group.header, itemProp.group.enableGroupOverflow, itemProp.tabIndex)[0];
            if (itemProp.group.isCollapsed) {
                contentEle = this.ribbonDropDownModule.getOverflowDropDownPopup(itemProp, contentEle);
            }
            //insert the element in tab items property.
            var targetEle = targetId ? contentEle.querySelector('#' + targetId) : null;
            if (targetEle) {
                targetEle.insertAdjacentElement(isAfter ? 'afterend' : 'beforebegin', element);
            }
            else {
                contentEle.querySelector('#' + groupId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTENT_ID */ .o).append(element);
            }
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
    };
    /**
     * Removes the ribbon collection.
     *
     * @param {string} collectionId - Gets the collection ID.
     * @returns {void}
     */
    Ribbon.prototype.removeCollection = function (collectionId) {
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCollection */ .X_)(this.tabs, collectionId);
        if (!itemProp) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        if (contentEle.innerHTML !== '') {
            var dropdownElement = void 0;
            var dropdown = void 0;
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                dropdownElement = itemProp.group.enableGroupOverflow ?
                    contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
            }
            for (var _i = 0, _a = itemProp.collection.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.removeItemElement(contentEle, item, dropdown);
            }
            var groupEle = contentEle.querySelector('#' + collectionId);
            if (groupEle) {
                groupEle.remove();
            }
        }
        var ribbonGroup = itemProp.group;
        var ribbonCollections = ribbonGroup.collections.slice();
        ribbonCollections.splice(itemProp.collectionIndex, 1);
        ribbonGroup.setProperties({ collections: ribbonCollections }, true);
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
    };
    /**
     * Adds ribbon item.
     *
     * @param {string} collectionId - Gets the collection ID.
     * @param {RibbonItemModel} item - Gets the ribbon item model.
     * @param {string} targetId - Gets the ID of the target item to add the new item.
     * @param {boolean} isAfter - Defines whether the item is added before or after the target.
     * @returns {void}
     */
    Ribbon.prototype.addItem = function (collectionId, item, targetId, isAfter) {
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCollection */ .X_)(this.tabs, collectionId);
        if (!itemProp) {
            return;
        }
        if ((itemProp.group.orientation === 'Column') && (itemProp.collection.items.length === 3)) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        var ribbonItems = itemProp.collection.items.slice();
        var index = targetId ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(ribbonItems, function (e) { return e.id === targetId; }) : -1;
        index = (index === -1) ? ribbonItems.length : (index + (isAfter ? 1 : 0));
        ribbonItems.splice(index, 0, item);
        itemProp.collection.setProperties({ items: ribbonItems }, true);
        this.checkID([itemProp.collection.items[parseInt(index.toString(), 10)]], 'item', collectionId);
        this.validateItemSize();
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        var groupContainer = contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
        if (contentEle.innerHTML !== '') {
            var item_1 = itemProp.collection.items[parseInt(index.toString(), 10)];
            var element = this.createItems([item_1], itemProp.group.orientation, itemProp.group.id, itemProp.group.header, itemProp.group.enableGroupOverflow, itemProp.tabIndex, groupContainer)[0];
            if (itemProp.group.isCollapsed) {
                contentEle = this.ribbonDropDownModule.getOverflowDropDownPopup(itemProp, contentEle);
            }
            //insert the element in tab items property.
            var targetEle = targetId ? contentEle.querySelector('#' + targetId) : null;
            if (targetEle) {
                targetEle.closest('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5).insertAdjacentElement(isAfter ? 'afterend' : 'beforebegin', element);
            }
            else {
                if (element) {
                    contentEle.querySelector('#' + collectionId).append(element);
                }
            }
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
    };
    /**
     * Removes ribbon item.
     *
     * @param {string} itemId - Gets the item ID.
     * @returns {void}
     */
    Ribbon.prototype.removeItem = function (itemId) {
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, itemId);
        if (!itemProp) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        if (contentEle.innerHTML !== '') {
            var dropdownElement = void 0;
            var dropdown = void 0;
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                dropdownElement = itemProp.group.enableGroupOverflow ?
                    contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
            }
            var item = itemProp.item;
            this.removeItemElement(contentEle, item, dropdown);
        }
        var ribbonCollection = itemProp.collection;
        var ribbonItems = ribbonCollection.items;
        ribbonItems.splice(itemProp.itemIndex, 1);
        ribbonCollection.setProperties({ items: ribbonItems }, true);
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
    };
    /**
     * Hides a specific ribbon item.
     *
     * @param {string} itemId - The ID of the item to be hidden.
     * @returns {void}
     */
    Ribbon.prototype.hideItem = function (itemId) {
        this.showHideItem(itemId, true);
    };
    /**
     * Shows a specific ribbon item.
     *
     * @param {string} itemId - The ID of the item to be shown.
     * @returns {void}
     */
    Ribbon.prototype.showItem = function (itemId) {
        this.showHideItem(itemId, false);
    };
    Ribbon.prototype.showHideItem = function (itemId, isHidden) {
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, itemId);
        if (!itemProp) {
            return;
        }
        var ele;
        if (itemProp.item.type === 'GroupButton') {
            ele = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItemElement */ .au)(this, itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL, itemProp);
        }
        else {
            ele = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItemElement */ .au)(this, itemId, itemProp);
        }
        if (ele) {
            var itemEle = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(ele, '.e-ribbon-item');
            this.updateHiddenElements(itemProp.tabIndex, isHidden ? 'hideItem' : 'showItem', itemId, isHidden, itemEle, itemProp.group);
            if (this.selectedTab === itemProp.tabIndex) {
                this.refreshLayout();
            }
        }
        else {
            this.updateInitialProps(itemProp.tabIndex, itemId, 'hiddenItems', isHidden);
        }
    };
    Ribbon.prototype.updateInitialProps = function (tabIndex, id, key, isInsert) {
        var initialProps = this.initialPropsData[parseInt(tabIndex.toString(), 10)];
        if (!initialProps) {
            this.initialPropsData[parseInt(tabIndex.toString(), 10)] = {};
            initialProps = this.initialPropsData[parseInt(tabIndex.toString(), 10)];
        }
        if (initialProps) {
            if (!initialProps["" + key]) {
                initialProps["" + key] = [];
            }
            var itemIndex = initialProps["" + key].indexOf(id);
            if (isInsert) {
                if (itemIndex === -1) {
                    initialProps["" + key].push(id);
                }
            }
            else {
                if (itemIndex !== -1) {
                    initialProps["" + key].splice(itemIndex, 1);
                }
                if (initialProps["" + key].length === 0) {
                    delete initialProps["" + key];
                }
                if (Object.keys(initialProps).length === 0) {
                    delete this.initialPropsData[parseInt(tabIndex.toString(), 10)];
                }
            }
        }
    };
    Ribbon.prototype.checkHiddenItems = function (group, isHidden, tabIndex) {
        var isItemsHidden = true;
        var isEmptyCollection;
        var contentEle = this.tabObj.items[parseInt(tabIndex.toString(), 10)].content;
        var groupEle = contentEle.querySelector('#' + group.id);
        if (isHidden) {
            for (var i = 0; i < group.collections.length; i++) {
                if (isItemsHidden) {
                    var collection = group.collections[parseInt(i.toString(), 10)];
                    for (var j = 0; j < collection.items.length; j++) {
                        var item = collection.items[parseInt(j.toString(), 10)];
                        var itemEle = void 0;
                        if (item.type === 'GroupButton') {
                            var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, item.id);
                            itemEle = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItemElement */ .au)(this, item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL, itemProp);
                        }
                        else {
                            itemEle = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItemElement */ .au)(this, item.id);
                        }
                        var itemContainer = itemEle ? itemEle.closest('.e-ribbon-item') : null;
                        if (!(itemContainer.classList.contains('e-hidden'))) {
                            isItemsHidden = false;
                            break;
                        }
                    }
                }
            }
            if (isItemsHidden) {
                groupEle.classList.add('e-hide-group');
                this.checkOverflowItems(isHidden, contentEle, group.enableGroupOverflow, tabIndex, group.id);
            }
        }
        else {
            groupEle.classList.remove('e-hide-group');
            this.checkOverflowItems(isHidden, contentEle, group.enableGroupOverflow, tabIndex, group.id);
        }
        if (this.activeLayout === 'Simplified' && !group.enableGroupOverflow) {
            var itemsLength = groupEle.querySelectorAll('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ITEM */ .Y5);
            if (itemsLength) {
                isEmptyCollection = this.checkEmptyCollection(itemsLength);
                groupEle.classList[isEmptyCollection ? 'add' : 'remove']('e-ribbon-emptyCollection');
            }
        }
    };
    Ribbon.prototype.checkOverflowItems = function (isHidden, contentEle, isGroupOF, tabIndex, groupID) {
        var overflowDDB;
        var overflowtarget;
        if (isGroupOF) {
            var overflowDDBEle = contentEle.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW);
            if (overflowDDBEle) {
                overflowDDB = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowDDBEle, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                overflowtarget = overflowDDB.target;
            }
            if (overflowtarget) {
                if (isHidden) {
                    overflowtarget.classList.add('e-hide-group');
                }
                else {
                    overflowtarget.classList.remove('e-hide-group');
                }
            }
        }
        else {
            if (this.overflowDDB) {
                var overflowEle = this.overflowDDB.target;
                var ofTabContainer = overflowEle.querySelector('#' + this.tabs[parseInt(tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                if (ofTabContainer) {
                    var grpContainer = ofTabContainer.querySelector('#' + groupID + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (grpContainer) {
                        if (isHidden) {
                            grpContainer.classList.add('e-hide-group');
                        }
                        else {
                            grpContainer.classList.remove('e-hide-group');
                        }
                    }
                }
            }
        }
    };
    /**
     * tab - Gets the ribbon tab to be updated. The id of the tab is a required property. Other properties are optional.
     *
     * @param {RibbonTabModel} tab - Gets the ribbon tab model.
     * @returns {void}
     */
    Ribbon.prototype.updateTab = function (tab) {
        var tabId = tab.id;
        var index = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getIndex */ .Dx)(this.tabs, function (e) { return e.id === tabId; });
        if (index === -1) {
            return;
        }
        var contentEle = this.tabObj.items[parseInt(index.toString(), 10)].content;
        var groups = this.tabs[parseInt(index.toString(), 10)].groups;
        var tabEle = this.tabObj.element;
        if (groups && (contentEle.innerHTML !== '')) {
            // Check whether cssClass is passed by the user, and if it is, then remove the old values.
            if (tab.cssClass) {
                if (this.tabs[parseInt(index.toString(), 10)].cssClass) {
                    contentEle.classList.remove(this.tabs[parseInt(index.toString(), 10)].cssClass);
                    tabEle.querySelector('.e-active').classList.remove(this.tabs[parseInt(index.toString(), 10)].cssClass);
                }
            }
            // Check whether group is passed by the user, and if it is, then remove the old values.
            if (tab.groups) {
                for (var _i = 0, groups_3 = groups; _i < groups_3.length; _i++) {
                    var group = groups_3[_i];
                    var dropdownElement = group.isCollapsed ? contentEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9) : null;
                    for (var _a = 0, _b = group.collections; _a < _b.length; _a++) {
                        var collection = _b[_a];
                        for (var _c = 0, _d = collection.items; _c < _d.length; _c++) {
                            var item = _d[_c];
                            var ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id) : contentEle.querySelector('#' + item.id);
                            if (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton && this.activeLayout === 'Classic') {
                                ele = dropdownElement ? this.ribbonDropDownModule.getDDBItemElement(dropdownElement, item.id +
                                    _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL) : contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                            }
                            if (ele) {
                                this.destroyFunction(item, ele);
                            }
                        }
                    }
                    if (dropdownElement) {
                        this.ribbonDropDownModule.removeOverFlowDropDown(dropdownElement);
                    }
                }
                var groupElements = contentEle.querySelectorAll('.e-ribbon-group');
                // eslint-disable-next-line @typescript-eslint/tslint/config
                groupElements.forEach(function (groupEle) { groupEle.remove(); });
            }
        }
        if (index === this.selectedTab) {
            this.isAddRemove = true;
        }
        var ribbonTab = this.tabs[parseInt(index.toString(), 10)];
        ribbonTab.setProperties(tab, true);
        this.setProperties({ groups: this.checkID(ribbonTab.groups, 'group', ribbonTab.id) }, true);
        this.validateItemSize();
        if (contentEle.innerHTML === '') {
            // Check whether group is passed by the user and sets the updated values.
            if (tab.groups) {
                var elements = this.createGroups(ribbonTab.groups, index);
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, contentEle);
            }
            if (this.selectedTab === index) {
                this.refreshLayout();
            }
            // Check whether cssClass is passed by the user and sets the updated values.
            if (tab.cssClass) {
                contentEle.classList.add(ribbonTab.cssClass);
                tabEle.querySelector('.e-active').classList.add(ribbonTab.cssClass);
            }
            // Check whether header is passed by the user and sets the updated values.
            if (tab.header) {
                tabEle.querySelector('#' + tabId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG).innerText = ribbonTab.header;
            }
        }
    };
    /**
     * group - Gets the ribbon group to be updated. The id of the group is a required property. Other properties are optional.
     *
     * @param {RibbonGroupModel} group - Gets the ribbon group model.
     * @returns {void}
     */
    Ribbon.prototype.updateGroup = function (group) {
        var groupId = group.id;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getGroup */ .Wx)(this.tabs, groupId);
        if (!itemProp) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        var groupEle = contentEle.querySelector('#' + groupId);
        var groupContainer = groupEle.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
        var dropdownElement;
        var dropdown;
        if (contentEle.innerHTML !== '') {
            if (itemProp.group.showLauncherIcon) {
                this.removeLauncherIcon(itemProp.group.id, null, contentEle);
            }
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                dropdownElement = itemProp.group.enableGroupOverflow ?
                    contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
            }
            // Check whether cssClass is passed by the user, and if it is, then remove the old values.
            if (group.cssClass) {
                if (itemProp.group.cssClass) {
                    groupEle.classList.remove(itemProp.group.cssClass);
                    if (groupContainer) {
                        groupContainer.classList.remove(itemProp.group.cssClass);
                    }
                }
            }
            // Check whether collections or orientation is passed by the user, and if it is, then remove the old values.
            if (group.collections || group.orientation) {
                if (itemProp.group.collections || itemProp.group.orientation) {
                    for (var _i = 0, _a = itemProp.group.collections; _i < _a.length; _i++) {
                        var collection = _a[_i];
                        for (var _b = 0, _c = collection.items; _b < _c.length; _b++) {
                            var item = _c[_b];
                            this.removeItemElement(contentEle, item, dropdown);
                        }
                    }
                    var collectionElements = groupEle.querySelectorAll('.e-ribbon-collection');
                    // eslint-disable-next-line @typescript-eslint/tslint/config
                    collectionElements.forEach(function (collectionEle) { collectionEle.remove(); });
                    if (group.orientation) {
                        var groupContent = groupContainer.querySelector('.e-ribbon-group-content');
                        var removeCss = groupContent.classList.value.match(/(e-ribbon-[column|row]+)/g);
                        if (removeCss) {
                            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([groupContent], removeCss);
                        }
                    }
                }
            }
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                if (itemProp.group.enableGroupOverflow) {
                    if (dropdown.target.childElementCount === 0 || (dropdown.target.childElementCount
                        === 1 && this.isHeaderVisible(dropdown.target, itemProp.group.id))) {
                        this.removeOverflowButton(dropdown);
                    }
                }
                else {
                    var ofGroupContainer = dropdown.target.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    if (ofGroupContainer && ofGroupContainer.childElementCount === 1) {
                        ofGroupContainer.remove();
                    }
                    var ofTabContainer = dropdown.target.querySelector('#' + this.tabs[parseInt(itemProp.tabIndex.toString(), 10)].id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4);
                    if (ofTabContainer && ofTabContainer.childElementCount === 0) {
                        ofTabContainer.remove();
                    }
                }
            }
        }
        var ribbongroup = itemProp.group;
        ribbongroup.setProperties(group, true);
        ribbongroup.setProperties({ collections: this.checkID(ribbongroup.collections, 'collection', ribbongroup.id) }, true);
        this.validateItemSize();
        if (contentEle.innerHTML !== '') {
            // Check whether showLauncherIcon or orientation is passed by the user and sets the updated values.
            if (group.showLauncherIcon) {
                this.createLauncherIcon(ribbongroup.id, groupContainer, itemProp.tabIndex);
            }
            // Check whether collections or orientation is passed by the user and sets the updated values.
            if (group.collections || group.orientation) {
                var groupContent = groupContainer.querySelector('.e-ribbon-group-content');
                groupContent.classList.add(((ribbongroup.orientation === 'Column') || (this.activeLayout === 'Simplified')) ? _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLUMN */ .Kk : _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_ROW */ .KH);
                var elements = this.createCollection(ribbongroup.collections, ribbongroup.orientation, ribbongroup.id, ribbongroup.header, ribbongroup.enableGroupOverflow, itemProp.tabIndex, groupContainer);
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, groupContent);
            }
            if (this.selectedTab === itemProp.tabIndex) {
                this.refreshLayout();
            }
            // Check whether cssClass is passed by the user and sets the updated values.
            if (group.cssClass) {
                groupEle.classList.add(ribbongroup.cssClass);
                if (groupContainer) {
                    groupContainer.classList.add(ribbongroup.cssClass);
                }
            }
            // Check whether header is passed by the user and sets the updated values.
            if (group.header) {
                if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified && !group.enableGroupOverflow) {
                    var overflowHeader = dropdown.target.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG);
                    if (overflowHeader) {
                        overflowHeader.innerText = ribbongroup.header;
                    }
                }
                else if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic && !ribbongroup.isCollapsed) {
                    groupEle.querySelector('.e-ribbon-group-header').innerText = ribbongroup.header;
                }
                else if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic && ribbongroup.isCollapsed) {
                    var overflowEle = groupEle.querySelector('#' + ribbongroup.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9);
                    // need to set instance for dropdown
                    var dropDownBtn = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getInstance */ .iE)(overflowEle, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                    var overflowHeader = dropDownBtn.target.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_ID */ .yG);
                    if (overflowHeader) {
                        overflowHeader.innerText = ribbongroup.header;
                    }
                }
            }
        }
    };
    /**
     * collection - Gets the ribbon collection to be updated. The id of the collection is a required property. Other properties are optional.
     *
     * @param {RibbonCollectionModel} collection - Gets the ribbon collection model.
     * @returns {void}
     */
    Ribbon.prototype.updateCollection = function (collection) {
        var collectionId = collection.id;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCollection */ .X_)(this.tabs, collectionId);
        if (!itemProp) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        var collectionEle = contentEle.querySelector('#' + collectionId);
        if (contentEle.innerHTML !== '') {
            var dropdownElement = void 0;
            var dropdown = void 0;
            if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                dropdownElement = itemProp.group.enableGroupOverflow ?
                    contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
            }
            // Check whether cssClass is passed by the user, and if it is, then remove the old values.
            if (collection.cssClass) {
                if (itemProp.collection.cssClass) {
                    collectionEle.classList.remove(itemProp.collection.cssClass);
                }
            }
            if (collection.items) {
                if (itemProp.collection.items) {
                    for (var _i = 0, _a = itemProp.collection.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.removeItemElement(contentEle, item, dropdown);
                    }
                }
            }
        }
        var ribboncollection = itemProp.collection;
        ribboncollection.setProperties(collection, true);
        ribboncollection.setProperties({ items: this.checkID(ribboncollection.items, 'item', ribboncollection.id) }, true);
        this.validateItemSize();
        if (contentEle.innerHTML !== '') {
            if (collection.items) {
                var groupContainer = contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                var elements = this.createItems(ribboncollection.items, itemProp.group.orientation, itemProp.group.id, itemProp.group.header, itemProp.group.enableGroupOverflow, itemProp.tabIndex, groupContainer);
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)(elements, collectionEle);
            }
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.refreshLayout();
        }
        // Check whether cssClass is passed by the user and sets the updated values.
        if (collection.cssClass) {
            collectionEle.classList.add(ribboncollection.cssClass);
        }
    };
    /**
     * item - Gets the ribbon item to be updated. The id of the item is a required property. Other properties are optional.
     *
     * @param {RibbonItemModel} item - Gets the ribbon item model.
     * @returns {void}
     */
    Ribbon.prototype.updateItem = function (item) {
        var itemId = item.id;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, itemId);
        if (!itemProp) {
            return;
        }
        if (this.selectedTab === itemProp.tabIndex) {
            this.clearOverflowResize();
        }
        //Check whether the tab items are rendered
        var contentEle = this.tabObj.items[itemProp.tabIndex].content;
        var groupEle = contentEle.querySelector('#' + itemProp.group.id);
        if (groupEle) {
            var groupContainer = groupEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
            var itemContainer = null;
            var itemEle = null;
            var dropdownElement = void 0;
            var dropdown = void 0;
            if (contentEle.innerHTML !== '') {
                if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                    dropdownElement = itemProp.group.enableGroupOverflow ?
                        contentEle.querySelector('#' + itemProp.group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .GROUPOF_BUTTON_ID */ .IW) : null;
                    dropdown = dropdownElement ? (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(dropdownElement, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q) : this.overflowDDB;
                }
                if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified && itemProp.item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow) {
                    itemContainer = dropdown.target.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    itemEle = dropdown.target.querySelector('#' + itemId);
                    if (item.displayOptions && item.displayOptions !== _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow) {
                        var collectionEle = groupContainer.querySelector('#' + itemProp.collection.id);
                        if (collectionEle) {
                            collectionEle.appendChild(itemContainer);
                        }
                    }
                }
                else {
                    itemContainer = groupContainer.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    itemEle = contentEle.querySelector('#' + itemId);
                    if (!itemContainer) {
                        itemContainer = dropdown ? dropdown.target.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut) : groupContainer.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut);
                    }
                    if (!itemEle) {
                        itemEle = dropdown ? dropdown.target.querySelector('#' + itemId) : contentEle.querySelector('#' + itemId);
                    }
                    if (itemProp.item.type === 'Gallery') {
                        if (!itemEle) {
                            itemEle = contentEle.querySelector('#' + itemId + '_galleryWrapper');
                        }
                    }
                    if (itemProp.item.type === 'GroupButton' && this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) {
                        itemEle = contentEle.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL);
                    }
                    if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified && item.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow) {
                        this.createOverflowPopup(itemProp.item, itemProp.tabIndex, itemProp.group.enableGroupOverflow, itemProp.group.id, itemProp.group.header, itemContainer, groupContainer);
                        if ((itemProp.item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.DropDown) || (itemProp.item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.SplitButton) ||
                            (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.GroupButton) || (item.type === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemType */ .gG.Gallery)) {
                            this.updatePopupItems(itemProp.item, itemContainer, itemProp.group.enableGroupOverflow, true);
                        }
                    }
                }
                // Check whether cssClass is passed by the user, and if it is, then remove the old values.
                if (item.cssClass) {
                    if (itemProp.item.cssClass) {
                        itemContainer.classList.remove(itemProp.item.cssClass);
                    }
                }
                this.destroyFunction(itemProp.item, itemEle);
                itemEle.remove();
                var removeCss = itemContainer.classList.value.match(/(e-ribbon-[large|medium|small]+-item)/g);
                if (removeCss) {
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([itemContainer], removeCss);
                }
            }
            var ribbonItem = itemProp.item;
            ribbonItem.setProperties(item, true);
            this.validateItemSize();
            if (contentEle.innerHTML !== '') {
                // To avoid undefined items condition is added
                if (ribbonItem.ribbonTooltipSettings && (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .isTooltipPresent */ .FZ)(ribbonItem.ribbonTooltipSettings)) {
                    itemContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_TOOLTIP_TARGET */ .xt);
                    this.tooltipData.push({ id: itemContainer.id, data: ribbonItem.ribbonTooltipSettings });
                }
                var size = ribbonItem.activeSize;
                if (this.activeLayout === 'Simplified') {
                    size = ((ribbonItem.allowedSizes === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) || (ribbonItem.allowedSizes & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) ||
                        (ribbonItem.displayOptions === _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow)) ? _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium : _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Small;
                    ribbonItem.setProperties({ activeSize: size }, true);
                }
                if (size & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Large) {
                    itemContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LARGE_ITEM */ .rv, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_CONTENT_HEIGHT */ .Pg);
                }
                else {
                    if (size & _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonItemSize */ .h3.Medium) {
                        itemContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MEDIUM_ITEM */ .NQ);
                    }
                    else {
                        itemContainer.classList.add(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SMALL_ITEM */ .Xl);
                    }
                }
                this.createRibbonItem(ribbonItem, itemContainer);
                if (itemProp.item.type === 'Gallery' && document.querySelector('#' + itemId + '_container').closest('.e-ribbon-overflow-target') && item.displayOptions !== _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Overflow) {
                    this.createOverflowPopup(itemProp.item, itemProp.tabIndex, itemProp.group.enableGroupOverflow, itemProp.group.id, itemProp.group.header, itemContainer, groupContainer);
                }
                if (this.activeLayout === 'Simplified' && itemProp.group.enableGroupOverflow && dropdown) {
                    if (dropdown.target.childElementCount === 0 ||
                        (dropdown.target.childElementCount === 1 &&
                            this.isHeaderVisible(dropdown.target, itemProp.group.id))) {
                        this.removeOverflowButton(dropdown);
                    }
                }
                if (this.selectedTab === itemProp.tabIndex) {
                    this.refreshLayout();
                }
                if (item.cssClass) {
                    itemContainer.classList.add(ribbonItem.cssClass);
                }
                if (!(ribbonItem.disabled) && itemContainer.classList.contains(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0)) {
                    itemContainer.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0);
                }
                this.enableDisableItem(ribbonItem.id, ribbonItem.disabled);
            }
        }
        else {
            this.isUpdateItems = true;
            this.itemsModel.push(item);
            this.targetTabs[item.id] = itemProp.tabIndex;
        }
    };
    Ribbon.prototype.removeItemElement = function (contentEle, item, dropdown) {
        var ele = null;
        if (this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Classic) {
            ele = (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) ? contentEle.querySelector('#' + item.id) : null;
            if (item.type === 'GroupButton') {
                ele = (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Classic) ? contentEle.querySelector('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL) : null;
            }
        }
        else {
            //Checks for Simplified and Auto options (Auto = classic + simplified + popup)
            ele = (item.displayOptions & _interface__WEBPACK_IMPORTED_MODULE_8__/* .DisplayMode */ .q5.Simplified) ? contentEle.querySelector('#' + item.id) : null;
            // element will be null for "Popup" and if the item is moved to overflow in "Auto" mode
            if (!ele) {
                ele = dropdown.target.querySelector('#' + item.id);
            }
        }
        if (ele) {
            this.destroyFunction(item, ele);
            if (item.type === 'GroupButton' && this.activeLayout === _interface__WEBPACK_IMPORTED_MODULE_8__/* .RibbonLayout */ .jO.Simplified) {
                document.getElementById(item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut).remove();
            }
            else {
                ele.closest('#' + item.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .CONTAINER_ID */ .Ut).remove();
            }
        }
    };
    /**
     * Enables ribbon item.
     *
     * @param {string} itemId - Gets the item ID.
     * @returns {void}
     */
    Ribbon.prototype.enableItem = function (itemId) {
        this.enableDisableItem(itemId, false);
    };
    /**
     * Disables ribbon item.
     *
     * @param {string} itemId - Gets the item ID.
     * @returns {void}
     */
    Ribbon.prototype.disableItem = function (itemId) {
        this.enableDisableItem(itemId, true);
    };
    /**
     * Gets the Ribbon item model associated with the specified item ID.
     *
     * @param {string} itemId - The unique ID of the Ribbon item.
     * @returns {RibbonItemModel} - Returns the Ribbon item model.
     */
    Ribbon.prototype.getItem = function (itemId) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, itemId).item;
    };
    Ribbon.prototype.enableDisableItem = function (itemId, isDisabled) {
        var isUpdated = false;
        var isOverflow = false;
        var itemProp = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .Gq)(this.tabs, itemId);
        if (!itemProp) {
            return;
        }
        itemProp.item.setProperties({ disabled: isDisabled }, true);
        var ele;
        if (itemProp.item.type === 'GroupButton') {
            ele = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItemElement */ .au)(this, itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL, itemProp);
        }
        else if (itemProp.item.type === 'Gallery') {
            ele = document.querySelector('#' + itemId);
            if (!ele) {
                ele = document.querySelector('#' + itemId + '_galleryWrapper');
            }
            else {
                isOverflow = true;
            }
        }
        else {
            ele = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItemElement */ .au)(this, itemId, itemProp);
        }
        if (ele) {
            var itemEle = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(ele, '.e-ribbon-item');
            var moduleName = this.getItemModuleName(itemProp.item);
            isUpdated = isDisabled ? !itemEle.classList.contains(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0) :
                itemEle.classList.contains(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0);
            if (moduleName !== 'template') {
                if (isUpdated) {
                    if (moduleName === 'group-btn' && this.activeLayout === 'Simplified') {
                        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateControlDisabled */ .Je)(ele, 'dropdown-btn', isDisabled);
                        for (var i = 0; i < itemProp.item.groupButtonSettings.items.length; i++) {
                            var btnEle = document.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i);
                            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateControlDisabled */ .Je)(btnEle, 'btn', isDisabled);
                        }
                    }
                    else if (moduleName === 'group-btn' && this.activeLayout === 'Classic') {
                        for (var i = 0; i < itemProp.item.groupButtonSettings.items.length; i++) {
                            var btnEle = ele.querySelector('#' + itemId + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP_BUTTON_ID */ .CL + i);
                            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateControlDisabled */ .Je)(btnEle, 'btn', isDisabled);
                        }
                    }
                    else if (moduleName === 'gallery') {
                        ele.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0, isDisabled);
                        document.getElementById(itemId + '_popupButton').classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0, isDisabled);
                        if (isOverflow) {
                            var galleryEle = document.getElementById(itemId + '_galleryWrapper');
                            galleryEle.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0, isDisabled);
                        }
                    }
                    else {
                        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .updateControlDisabled */ .Je)(ele, moduleName, isDisabled);
                    }
                }
            }
            else {
                ele.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0, isDisabled);
                ele.toggleAttribute('disabled', isDisabled);
            }
            itemEle.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .DISABLED_CSS */ .p0, itemProp.item.disabled);
        }
    };
    Ribbon.prototype.unwireEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(window, 'resize', this.resizeListener);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(document.body, 'keydown', this.keytipActionHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(document, 'mousedown', this.mouseEventHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(document, 'scroll', this.mouseEventHandler);
    };
    Ribbon.prototype.destroy = function () {
        this.keyboardModuleRibbon.destroy();
        this.keyboardModuleRibbon = null;
        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .destroyTooltip */ .wF)(this.element);
        if (this.refreshing) {
            this.clearOverflowDropDown(this.selectedTab);
        }
        this.destroyTabItems(this.tabs);
        if (!this.hideLayoutSwitcher) {
            this.removeExpandCollapse();
        }
        this.collapseButton = undefined;
        if (this.scrollModule) {
            this.scrollModule.destroy();
            this.scrollModule = null;
        }
        if (this.ribbonTempEle) {
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this.ribbonTempEle);
            this.ribbonTempEle = null;
        }
        _super.prototype.destroy.call(this);
        this.tabObj.destroy();
        this.tabObj = undefined;
        this.initialPropsData = {};
        this.hiddenGroups = [];
        this.hiddenElements = {};
        this.keyTipElements = {};
        this.itemsModel = [];
        this.targetTabs = {};
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this.element.querySelector('#' + this.element.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .TAB_ID */ .Os));
        this.element.style.removeProperty(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_FILE_MENU_WIDTH */ .Dp);
        this.element.style.removeProperty(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_HELP_PANE_TEMPLATE_WIDTH */ .Oy);
        this.element.style.removeProperty('width');
        if (this.cssClass) {
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([this.element], this.cssClass.split(_constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6));
        }
        this.element.classList.remove(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RTL_CSS */ .rT, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_SIMPLIFIED_MODE */ .iR, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_OVERFLOW */ .Qf, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_COLLAPSIBLE */ .EA, _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MINIMIZE */ .oK, 'e-rbn');
        this.unwireEvents();
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {RibbonModel} newProp - Specifies new properties
     * @param  {RibbonModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    Ribbon.prototype.onPropertyChanged = function (newProp, oldProp) {
        var _a, _b;
        for (var _i = 0, _c = Object.keys(newProp); _i < _c.length; _i++) {
            var prop = _c[_i];
            switch (prop) {
                case 'activeLayout':
                    this.switchLayout();
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        (_a = this.element.classList).remove.apply(_a, oldProp.cssClass.split(_constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6));
                    }
                    if (newProp.cssClass) {
                        (_b = this.element.classList).add.apply(_b, newProp.cssClass.split(_constant__WEBPACK_IMPORTED_MODULE_9__/* .SPACE */ .t6));
                    }
                    break;
                case 'isMinimized':
                    this.element.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_MINIMIZE */ .oK, this.isMinimized);
                    this.tabObj.element.querySelector('.e-content').style.display = this.isMinimized ? 'none' : 'block';
                    if (!this.isMinimized) {
                        this.refreshLayout();
                    }
                    break;
                case 'locale':
                    this.updateCommonProperty({ locale: this.locale });
                    break;
                case 'enablePersistence':
                    this.updateCommonProperty({ enablePersistence: this.enablePersistence });
                    break;
                case 'enableRtl':
                    this.element.classList.toggle(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RTL_CSS */ .rT, this.enableRtl);
                    this.updateCommonProperty({ enableRtl: newProp.enableRtl });
                    if (this.scrollModule) {
                        this.scrollModule.setProperties({ enableRtl: newProp.enableRtl });
                    }
                    break;
                case 'launcherIconCss':
                    for (var i = 0; i < this.tabs.length; i++) {
                        var tabContent = this.tabObj.items[parseInt(i.toString(), 10)].content;
                        var tab = this.tabs[parseInt(i.toString(), 10)];
                        if (tabContent.querySelector('.' + _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_GROUP */ .PH)) {
                            for (var _d = 0, _e = tab.groups; _d < _e.length; _d++) {
                                var group = _e[_d];
                                if (group.showLauncherIcon) {
                                    var className = _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LAUNCHER_ICON_ELE */ .fb + ' ' + (this.launcherIconCss || _constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_LAUNCHER_ICON */ .kM);
                                    if (group.isCollapsed) {
                                        var element = tabContent.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .OVERFLOW_ID */ .J4 + _constant__WEBPACK_IMPORTED_MODULE_9__/* .DROPDOWN_ID */ .s9);
                                        var dropdown = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getComponent */ .QQ)(element, _syncfusion_ej2_splitbuttons__WEBPACK_IMPORTED_MODULE_10__/* .DropDownButton */ .Q);
                                        var launcherIconEle = dropdown.target.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .LAUNCHER_ID */ .PI);
                                        launcherIconEle.className = className;
                                    }
                                    else {
                                        var element = tabContent.querySelector('#' + group.id + _constant__WEBPACK_IMPORTED_MODULE_9__/* .LAUNCHER_ID */ .PI);
                                        element.className = className;
                                    }
                                }
                            }
                        }
                    }
                    break;
                case 'selectedTab': {
                    var tabEle = this.tabObj.element;
                    var toolbarItem = tabEle.querySelectorAll('.e-toolbar-item')[parseInt(newProp.selectedTab.toString(), 10)];
                    if (!(toolbarItem.classList.contains('e-hidden') || toolbarItem.classList.contains('e-disable'))) {
                        this.tabObj.setProperties({ selectedItem: newProp.selectedTab });
                    }
                    break;
                }
                case 'tabAnimation':
                    this.tabObj.setProperties({ animation: newProp.tabAnimation });
                    break;
                case 'tabs':
                    this.reRenderTabs(newProp.tabs);
                    break;
                case 'contextualTabs':
                    for (var i = 0; i < this.contextualTabs.length; i++) {
                        if (newProp.contextualTabs[parseInt(i.toString(), 10)]) {
                            this.ribbonContextualTabModule.updateContextualTabs(newProp.contextualTabs[parseInt(i.toString(), 10)], this.contextualTabs[parseInt(i.toString(), 10)]);
                        }
                    }
                    break;
                case 'width':
                    this.element.style.width = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .formatUnit */ .IV)(newProp.width);
                    this.refreshLayout();
                    break;
                case 'fileMenu': {
                    if (this.ribbonFileMenuModule) {
                        this.ribbonFileMenuModule.updateFileMenu(this.fileMenu);
                    }
                    var toolbarEle = this.tabObj['tbObj'];
                    toolbarEle.refreshOverflow();
                    break;
                }
                case 'backStageMenu': {
                    if (this.ribbonBackstageModule) {
                        this.ribbonBackstageModule.updateBackStageMenu(this.backStageMenu);
                    }
                    var toolbarElement = this.tabObj['tbObj'];
                    toolbarElement.refreshOverflow();
                    break;
                }
                case 'helpPaneTemplate': {
                    if (this.ribbonTempEle) {
                        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this.ribbonTempEle);
                        this.ribbonTempEle = null;
                        this.tabObj.element.style.setProperty(_constant__WEBPACK_IMPORTED_MODULE_9__/* .RIBBON_HELP_PANE_TEMPLATE_WIDTH */ .Oy, '0px');
                    }
                    if (this.helpPaneTemplate) {
                        this.createHelpPaneTemplate();
                    }
                    var toolbar_1 = this.tabObj['tbObj'];
                    toolbar_1.refreshOverflow();
                    break;
                }
                case 'hideLayoutSwitcher':
                    if (this.hideLayoutSwitcher) {
                        this.removeExpandCollapse();
                    }
                    else {
                        this.addExpandCollapse();
                    }
                    break;
            }
        }
    };
    var Ribbon_1;
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Classic')
    ], Ribbon.prototype, "activeLayout", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], Ribbon.prototype, "cssClass", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Ribbon.prototype, "enableKeyTips", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], Ribbon.prototype, "layoutSwitcherKeyTip", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, _models_index__WEBPACK_IMPORTED_MODULE_17__/* .FileMenuSettings */ .r)
    ], Ribbon.prototype, "fileMenu", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, _models_index__WEBPACK_IMPORTED_MODULE_18__/* .BackStageMenu */ .t)
    ], Ribbon.prototype, "backStageMenu", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], Ribbon.prototype, "launcherIconCss", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Ribbon.prototype, "isMinimized", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('en-us')
    ], Ribbon.prototype, "locale", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(0)
    ], Ribbon.prototype, "selectedTab", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_12__/* .TabAnimationSettings */ .hP)
    ], Ribbon.prototype, "tabAnimation", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Collection */ .pM)([], _models_index__WEBPACK_IMPORTED_MODULE_19__/* .RibbonTab */ .A)
    ], Ribbon.prototype, "tabs", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Collection */ .pM)([], _models_index__WEBPACK_IMPORTED_MODULE_20__/* .RibbonContextualTabSettings */ .s)
    ], Ribbon.prototype, "contextualTabs", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('100%')
    ], Ribbon.prototype, "width", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], Ribbon.prototype, "helpPaneTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Ribbon.prototype, "hideLayoutSwitcher", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "tabSelecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "tabSelected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "ribbonExpanding", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "ribbonCollapsing", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "ribbonLayoutSwitched", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "launcherIconClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "created", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "overflowPopupOpen", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Ribbon.prototype, "overflowPopupClose", void 0);
    Ribbon = Ribbon_1 = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .NotifyPropertyChanges */ .kc
    ], Ribbon);
    return Ribbon;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .uA));



/***/ })

}]);
//# sourceMappingURL=8ab9f0c9-3e95ac90035925d6.js.map