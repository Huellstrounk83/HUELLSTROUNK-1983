"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4650],{

/***/ 10826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ Grid)
/* harmony export */ });
/* unused harmony exports SortDescriptor, SortSettings, Predicate, InfiniteScrollSettings, FilterSettings, SelectionSettings, SearchSettings, RowDropSettings, TextWrapSettings, ResizeSettings, GroupSettings, EditSettings, LoadingIndicator */
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6841);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41271);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28132);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(76602);
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68576);
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(99320);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68198);
/* harmony import */ var _base_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16206);
/* harmony import */ var _renderer_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72737);
/* harmony import */ var _models_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12405);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88555);
/* harmony import */ var _renderer_row_renderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52624);
/* harmony import */ var _renderer_cell_renderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33572);
/* harmony import */ var _services_cell_render_factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61315);
/* harmony import */ var _services_service_locator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77201);
/* harmony import */ var _services_value_formatter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(67053);
/* harmony import */ var _services_renderer_factory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26097);
/* harmony import */ var _services_width_controller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71682);
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43638);
/* harmony import */ var _services_focus_strategy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(53211);
/* harmony import */ var _models_page_settings__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(82661);
/* harmony import */ var _models_column_chooser_settings__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(93593);
/* harmony import */ var _actions_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6950);
/* harmony import */ var _actions_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78600);
/* harmony import */ var _actions_show_hide__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41964);
/* harmony import */ var _actions_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98509);
/* harmony import */ var _actions_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81171);
/* harmony import */ var _models_aggregate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(63014);
/* harmony import */ var _actions_clipboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(49126);
/* harmony import */ var _actions_logger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(95060);
/* harmony import */ var _services_row_model_generator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(24039);
/* harmony import */ var _base_string_literals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89874);
/* harmony import */ var _renderer_header_cell_renderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92028);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































/**
 * Represents the field name and direction of sort column.
 */
var SortDescriptor = /** @class */ (function (_super) {
    __extends(SortDescriptor, _super);
    function SortDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], SortDescriptor.prototype, "field", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], SortDescriptor.prototype, "direction", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], SortDescriptor.prototype, "isFromGroup", void 0);
    return SortDescriptor;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the sorting behavior of Grid.
 */
var SortSettings = /** @class */ (function (_super) {
    __extends(SortSettings, _super);
    function SortSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Collection */ .pM)([], SortDescriptor)
    ], SortSettings.prototype, "columns", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], SortSettings.prototype, "allowUnsort", void 0);
    return SortSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Represents the predicate for the filter column.
 */
var Predicate = /** @class */ (function (_super) {
    __extends(Predicate, _super);
    function Predicate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "field", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "operator", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "value", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "matchCase", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Predicate.prototype, "ignoreAccent", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "predicate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)({})
    ], Predicate.prototype, "actualFilterValue", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)({})
    ], Predicate.prototype, "actualOperator", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "type", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "ejpredicate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "uid", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "isForeignKey", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Predicate.prototype, "condition", void 0);
    return Predicate;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the infinite scroll behavior of Grid.
 */
var InfiniteScrollSettings = /** @class */ (function (_super) {
    __extends(InfiniteScrollSettings, _super);
    function InfiniteScrollSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], InfiniteScrollSettings.prototype, "enableCache", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(3)
    ], InfiniteScrollSettings.prototype, "maxBlocks", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(3)
    ], InfiniteScrollSettings.prototype, "initialBlocks", void 0);
    return InfiniteScrollSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the filtering behavior of the Grid.
 */
var FilterSettings = /** @class */ (function (_super) {
    __extends(FilterSettings, _super);
    function FilterSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Collection */ .pM)([], Predicate)
    ], FilterSettings.prototype, "columns", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('FilterBar')
    ], FilterSettings.prototype, "type", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('OnEnter')
    ], FilterSettings.prototype, "mode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], FilterSettings.prototype, "showFilterBarStatus", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(1500)
    ], FilterSettings.prototype, "immediateModeDelay", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], FilterSettings.prototype, "operators", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], FilterSettings.prototype, "ignoreAccent", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], FilterSettings.prototype, "enableInfiniteScrolling", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(50)
    ], FilterSettings.prototype, "itemsCount", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Shimmer')
    ], FilterSettings.prototype, "loadingIndicator", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], FilterSettings.prototype, "enableCaseSensitivity", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], FilterSettings.prototype, "showFilterBarOperator", void 0);
    return FilterSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the selection behavior of the Grid.
 */
var SelectionSettings = /** @class */ (function (_super) {
    __extends(SelectionSettings, _super);
    function SelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Row')
    ], SelectionSettings.prototype, "mode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Flow')
    ], SelectionSettings.prototype, "cellSelectionMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Single')
    ], SelectionSettings.prototype, "type", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], SelectionSettings.prototype, "checkboxOnly", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], SelectionSettings.prototype, "persistSelection", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Default')
    ], SelectionSettings.prototype, "checkboxMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], SelectionSettings.prototype, "enableSimpleMultiRowSelection", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], SelectionSettings.prototype, "enableToggle", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], SelectionSettings.prototype, "allowColumnSelection", void 0);
    return SelectionSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the search behavior of the Grid.
 */
var SearchSettings = /** @class */ (function (_super) {
    __extends(SearchSettings, _super);
    function SearchSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)([])
    ], SearchSettings.prototype, "fields", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], SearchSettings.prototype, "key", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('contains')
    ], SearchSettings.prototype, "operator", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], SearchSettings.prototype, "ignoreCase", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], SearchSettings.prototype, "ignoreAccent", void 0);
    return SearchSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the row drop settings of the Grid.
 */
var RowDropSettings = /** @class */ (function (_super) {
    __extends(RowDropSettings, _super);
    function RowDropSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], RowDropSettings.prototype, "targetID", void 0);
    return RowDropSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the text wrap settings of the Grid.
 */
var TextWrapSettings = /** @class */ (function (_super) {
    __extends(TextWrapSettings, _super);
    function TextWrapSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Both')
    ], TextWrapSettings.prototype, "wrapMode", void 0);
    return TextWrapSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the resize behavior of the Grid.
 */
var ResizeSettings = /** @class */ (function (_super) {
    __extends(ResizeSettings, _super);
    function ResizeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Normal')
    ], ResizeSettings.prototype, "mode", void 0);
    return ResizeSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the group behavior of the Grid.
 */
var GroupSettings = /** @class */ (function (_super) {
    __extends(GroupSettings, _super);
    function GroupSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], GroupSettings.prototype, "showDropArea", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], GroupSettings.prototype, "allowReordering", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], GroupSettings.prototype, "showToggleButton", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], GroupSettings.prototype, "showGroupedColumn", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], GroupSettings.prototype, "showUngroupButton", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], GroupSettings.prototype, "disablePageWiseAggregates", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)([])
    ], GroupSettings.prototype, "columns", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], GroupSettings.prototype, "captionTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], GroupSettings.prototype, "enableLazyLoading", void 0);
    return GroupSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the edit behavior of the Grid.
 */
var EditSettings = /** @class */ (function (_super) {
    __extends(EditSettings, _super);
    function EditSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], EditSettings.prototype, "allowAdding", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], EditSettings.prototype, "allowEditing", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], EditSettings.prototype, "allowDeleting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Normal')
    ], EditSettings.prototype, "mode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], EditSettings.prototype, "allowEditOnDblClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], EditSettings.prototype, "showConfirmDialog", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], EditSettings.prototype, "showDeleteConfirmDialog", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], EditSettings.prototype, "template", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], EditSettings.prototype, "headerTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], EditSettings.prototype, "footerTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Top')
    ], EditSettings.prototype, "newRowPosition", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)({})
    ], EditSettings.prototype, "dialog", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], EditSettings.prototype, "allowNextRowEdit", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], EditSettings.prototype, "showAddNewRow", void 0);
    return EditSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Configures the Loading Indicator of the Grid.
 */
var LoadingIndicator = /** @class */ (function (_super) {
    __extends(LoadingIndicator, _super);
    function LoadingIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Spinner')
    ], LoadingIndicator.prototype, "indicatorType", void 0);
    return LoadingIndicator;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .ChildProperty */ .I1));

/**
 * Represents the Grid component.
 * ```html
 * <div id="grid"></div>
 * <script>
 *  var gridObj = new Grid({ allowPaging: true });
 *  gridObj.appendTo("#grid");
 * </script>
 * ```
 */
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    /**
     * Constructor for creating the component
     *
     * @param {GridModel} options - specifies the options
     * @param {string | HTMLElement} element - specifies the element
     * @hidden
     */
    function Grid(options, element) {
        var _this_1 = _super.call(this, options, element) || this;
        _this_1.isPreventScrollEvent = false;
        _this_1.inViewIndexes = [];
        _this_1.keyA = false;
        _this_1.frozenRightCount = 0;
        _this_1.freezeColumnRefresh = true;
        _this_1.rightcount = 0;
        _this_1.frozenLeftCount = 0;
        _this_1.leftcount = 0;
        _this_1.tablesCount = 1;
        _this_1.movableCount = 0;
        _this_1.movablecount = 0;
        _this_1.fixedcount = 0;
        _this_1.fixedCount = 0;
        _this_1.visibleFrozenLeft = 0;
        _this_1.visibleFrozenFixed = 0;
        _this_1.isPreparedFrozenColumns = false;
        _this_1.visibleFrozenRight = 0;
        _this_1.visibleMovable = 0;
        _this_1.frozenLeftColumns = [];
        _this_1.frozenRightColumns = [];
        _this_1.movableColumns = [];
        _this_1.fixedColumns = [];
        _this_1.stackedLeft = [];
        _this_1.stackedRight = [];
        _this_1.stackedFixed = [];
        _this_1.stackedMovable = [];
        _this_1.stackedarrayLeft = [];
        _this_1.stackedarrayRight = [];
        _this_1.stackedarrayFixed = [];
        _this_1.stackedarrayMovable = [];
        _this_1.media = {};
        _this_1.autoFitColumnsResize = false;
        /** @hidden */
        _this_1.tableIndex = 0;
        _this_1.componentRefresh = _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .uA.prototype.refresh;
        _this_1.isChangeDataSourceCall = false;
        _this_1.mergedColumns = false;
        /** @hidden */
        _this_1.isVirtualAdaptive = false;
        /** @hidden */
        /**
         * * If `requireTemplateRef` is set to false in the load event, then the template element can't be accessed in grid queryCellInfo, and rowDataBound events.
         * * By default, React's grid queryCellInfo and rowDataBound events allow access to the template element.
         * * Avoid accessing the template elements in the grid queryCellInfo and rowDataBound events to improve rendering performance by setting this value as false.
         *
         * @default true
         */
        _this_1.requireTemplateRef = true;
        /** @hidden */
        _this_1.vRows = [];
        /** @hidden */
        _this_1.vcRows = [];
        /** @hidden */
        _this_1.vGroupOffsets = {};
        /** @hidden */
        _this_1.rowUid = 0;
        /** @hidden */
        _this_1.translateX = 0;
        /** @hidden */
        _this_1.isManualRefresh = false;
        /** @hidden */
        _this_1.isAutoFitColumns = false;
        /** @hidden */
        _this_1.enableDeepCompare = false;
        /** @hidden */
        _this_1.totalDataRecordsCount = 0;
        /** @hidden */
        _this_1.disableSelectedRecords = [];
        /** @hidden */
        _this_1.partialSelectedRecords = [];
        /** @hidden */
        _this_1.isSpan = false;
        /** @hidden */
        _this_1.islazyloadRequest = false;
        /** @hidden */
        _this_1.isAddNewRow = false;
        /** @hidden */
        _this_1.addNewRowFocus = true;
        /** @hidden */
        _this_1.selectVirtualRowOnAdd = false;
        /** @hidden */
        _this_1.lockcolPositionCount = 0;
        /** @hidden */
        _this_1.prevPageMoving = false;
        /** @hidden */
        _this_1.pageTemplateChange = false;
        /** @hidden */
        _this_1.isAutoGen = false;
        /** @hidden */
        _this_1.isAutoGenerateColumns = false;
        /** @hidden */
        _this_1.pageRequireRefresh = true;
        _this_1.mediaBindInstance = {};
        /** @hidden */
        _this_1.commandDelIndex = undefined;
        /** @hidden */
        _this_1.preventAutoFit = false;
        /** @hidden */
        _this_1.asyncTimeOut = 50;
        /** @hidden */
        _this_1.isExportGrid = false;
        /** @hidden */
        _this_1.isWidgetsDestroyed = false;
        _this_1.enableLogger = false;
        _this_1.needsID = true;
        Grid_1.Inject(_actions_selection__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L);
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .setValue */ .KY)('mergePersistData', _this_1.mergePersistGridData, _this_1);
        return _this_1;
    }
    Grid_1 = Grid;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} returns the persist data
     */
    Grid.prototype.getPersistData = function () {
        var keyEntity = ['pageSettings', 'sortSettings',
            'filterSettings', 'groupSettings', 'columns', 'searchSettings', 'selectedRowIndex', 'scrollPosition'];
        var ignoreOnPersist = {
            pageSettings: ['template', 'pageSizes', 'enableQueryString', 'totalRecordsCount', 'pageCount'],
            filterSettings: ['type', 'mode', 'showFilterBarStatus', 'immediateModeDelay', 'ignoreAccent'],
            groupSettings: ['showDropArea', 'showToggleButton', 'showGroupedColumn', 'showUngroupButton',
                'disablePageWiseAggregates', 'hideCaptionCount'],
            searchSettings: ['fields', 'operator', 'ignoreCase'],
            sortSettings: [], columns: [], selectedRowIndex: [], scrollPosition: []
        };
        for (var i = 0; i < keyEntity.length; i++) {
            var currentObject = this[keyEntity[parseInt(i.toString(), 10)]];
            for (var _i = 0, _a = ignoreOnPersist[keyEntity[parseInt(i.toString(), 10)]]; _i < _a.length; _i++) {
                var val = _a[_i];
                delete currentObject["" + val];
            }
        }
        var temp = this.pageSettings.template;
        var settings = Object.assign({ template: undefined }, this.pageSettings);
        if (this.enableVirtualization && this.enablePersistence && this.contentModule &&
            this.contentModule.getPageFromTop && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.scrollPosition) &&
            !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.scrollPosition.top)) {
            settings['properties']['currentPage'] = this.contentModule.getPageFromTop(this.scrollPosition.top, { block: 1 });
        }
        this.setProperties({ pageSettings: settings }, true);
        var captionTemplateRef = this.groupSettings.captionTemplate;
        var isAngularCaptionTemplate = captionTemplateRef && this.isAngular;
        if (isAngularCaptionTemplate) {
            delete this.groupSettings['properties']['captionTemplate'];
        }
        this.pageTemplateChange = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pagerTemplate);
        var persistData = this.addOnPersist(keyEntity);
        settings.template = temp;
        this.setProperties({ pageSettings: settings }, true);
        if (isAngularCaptionTemplate) {
            this.groupSettings.captionTemplate = captionTemplateRef;
        }
        return persistData;
    };
    /**
     * To provide the array of modules needed for component rendering
     *
     * @returns {ModuleDeclaration[]} Returns the module Declaration
     * @hidden
     */
    Grid.prototype.requiredModules = function () {
        this.setFrozenCount();
        this.enableInfiniteAggrgate();
        var modules = [];
        if (this.isDestroyed) {
            return modules;
        }
        if (this.allowFiltering) {
            modules.push({
                member: 'filter',
                args: [this, this.filterSettings, this.serviceLocator],
                name: 'Filter'
            });
        }
        if (this.allowExcelExport) {
            modules.push({
                member: 'ExcelExport',
                args: [this, this.serviceLocator],
                name: 'ExcelExport'
            });
        }
        if (this.allowPdfExport) {
            modules.push({
                member: 'PdfExport',
                args: [this],
                name: 'PdfExport'
            });
        }
        if (this.allowSorting) {
            modules.push({
                member: 'sort',
                args: [this, this.sortSettings, this.sortedColumns, this.serviceLocator],
                name: 'Sort'
            });
        }
        if (this.allowPaging) {
            modules.push({
                member: 'pager',
                args: [this, this.pageSettings],
                name: 'Page'
            });
        }
        if (this.allowSelection) {
            modules.push({
                member: 'selection',
                args: [this, this.selectionSettings, this.serviceLocator],
                name: 'Selection'
            });
        }
        if (this.resizeCheck()) {
            modules.push({
                member: 'resize',
                args: [this],
                name: 'Resize'
            });
        }
        if (this.allowReordering) {
            modules.push({
                member: 'reorder',
                args: [this],
                name: 'Reorder'
            });
        }
        if (this.allowRowDragAndDrop) {
            modules.push({
                member: 'rowDragAndDrop',
                args: [this],
                name: 'RowDD'
            });
        }
        if (this.allowGrouping) {
            modules.push({
                member: 'group',
                args: [this, this.groupSettings, this.sortedColumns, this.serviceLocator],
                name: 'Group'
            });
        }
        if (this.aggregates.length) {
            modules.push({ member: 'aggregate', args: [this, this.serviceLocator], name: 'Aggregate' });
        }
        if (this.isDetail()) {
            modules.push({
                member: 'detailRow',
                args: [this, this.serviceLocator],
                name: 'DetailRow'
            });
        }
        if (this.toolbar || this.toolbarTemplate) {
            modules.push({
                member: 'toolbar',
                args: [this, this.serviceLocator],
                name: 'Toolbar'
            });
        }
        if (this.enableVirtualization || this.enableColumnVirtualization) {
            modules.push({
                member: 'virtualscroll',
                args: [this, this.serviceLocator],
                name: 'VirtualScroll'
            });
        }
        if (this.getFrozenColumns() || this.frozenRows || this.frozenRightCount || this.frozenLeftCount) {
            modules.push({ member: 'freeze', args: [this, this.serviceLocator], name: 'Freeze' });
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.columns) && this.isCommandColumn(this.columns)) {
            modules.push({
                member: 'commandColumn',
                args: [this, this.serviceLocator],
                name: 'CommandColumn'
            });
        }
        if (this.editSettings.allowAdding || this.editSettings.allowDeleting || this.editSettings.allowEditing) {
            modules.push({
                member: 'edit',
                args: [this, this.serviceLocator],
                name: 'Edit'
            });
        }
        this.extendRequiredModules(modules);
        return modules;
    };
    Grid.prototype.extendRequiredModules = function (modules) {
        if (this.enableInfiniteScrolling) {
            modules.push({
                member: 'infiniteScroll',
                args: [this, this.serviceLocator],
                name: 'InfiniteScroll'
            });
        }
        if (this.groupSettings.enableLazyLoading) {
            modules.push({
                member: 'lazyLoadGroup',
                args: [this, this.serviceLocator],
                name: 'LazyLoadGroup'
            });
        }
        if (this.contextMenuItems) {
            modules.push({
                member: 'contextMenu',
                args: [this, this.serviceLocator],
                name: 'ContextMenu'
            });
        }
        if (this.showColumnMenu) {
            modules.push({
                member: 'columnMenu',
                args: [this, this.serviceLocator],
                name: 'ColumnMenu'
            });
        }
        if (this.showColumnChooser) {
            modules.push({
                member: 'columnChooser',
                args: [this, this.serviceLocator],
                name: 'ColumnChooser'
            });
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.columns) && this.isForeignKeyEnabled(this.columns)) {
            modules.push({ member: 'foreignKey', args: [this, this.serviceLocator], name: 'ForeignKey' });
        }
        if (this.enableLogger) {
            modules.push({ member: 'logger', args: [this], name: 'Logger' });
        }
    };
    Grid.prototype.resizeCheck = function () {
        var autoFitColumns = this.getColumns().filter(function (c) { return c.autoFit === true; }).length ? true : false;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.columnModel) && this.columnModel.length && !(this.columnModel[0] instanceof _models_column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .VP)) {
            this.columnModel = [];
        }
        var columnMenu = this.showColumnMenu && (!this.columnMenuItems || this.columnMenuItems
            .filter(function (c) { return c === 'AutoFit' || c === 'AutoFitAll'; }).length) ? true : false;
        var contextMenu = this.contextMenuItems && this.contextMenuItems
            .filter(function (c) { return c === 'AutoFit' || c === 'AutoFitAll'; }).length ? true : false;
        return this.allowResizing || this.autoFitColumnsResize || autoFitColumns || columnMenu || contextMenu;
    };
    /**
     * For internal use only - Initialize the event handler;
     *
     * @returns {void}
     * @private
     */
    Grid.prototype.preRender = function () {
        this.serviceLocator = new _services_service_locator__WEBPACK_IMPORTED_MODULE_3__/* .ServiceLocator */ .q;
        this.initProperties();
        this.initializeServices();
    };
    Grid.prototype.initProperties = function () {
        this.isInitial = true;
        this.sortedColumns = [];
        this.inViewIndexes = [];
        this.mediaCol = [];
        this.isInitialLoad = false;
        this.allowServerDataBinding = false;
        this.ignoreCollectionWatch = true;
        this.mergeCells = {};
        this.isEdit = false;
        this.checkAllRows = 'None';
        this.isCheckBoxSelection = false;
        this.isPersistSelection = false;
        this.componentRefresh = _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .uA.prototype.refresh;
        this.freezeColumnRefresh = true;
        this.filterOperators = {
            contains: 'contains', endsWith: 'endswith', equal: 'equal', greaterThan: 'greaterthan', greaterThanOrEqual: 'greaterthanorequal',
            lessThan: 'lessthan', lessThanOrEqual: 'lessthanorequal', notEqual: 'notequal', startsWith: 'startswith', wildCard: 'wildcard',
            isNull: 'isnull', notNull: 'notnull', like: 'like'
        };
        this.defaultChartLocale = {
            Chart: 'Chart',
            BarChart: 'Bar Chart',
            Bar: 'Bar',
            StackingBar: 'Stacked Bar',
            StackingBar100: '100% Stacked Bar',
            Pie: 'Pie Chart',
            ColumnChart: 'Column Chart',
            Column: 'Column',
            StackingColumn: 'Stacked Column',
            StackingColumn100: '100% Stacked Column',
            LineChart: 'Line Chart',
            Line: 'Line',
            StackingLine: 'Stacked Line',
            StackingLine100: '100% Stacked Line',
            AreaChart: 'Area Chart',
            Area: 'Area',
            StackingArea: 'Stacked Area',
            StackingArea100: '100% Stacked Area',
            Scatter: 'Scatter Chart'
        };
        this.defaultLocale = __assign({ EmptyRecord: 'No records to display', True: 'true', False: 'false', InvalidFilterMessage: 'Invalid Filter Data', GroupDropArea: 'Drag a column header here to group its column', UnGroup: 'Click here to ungroup', UnGroupButton: 'Click here to ungroup', GroupDisable: 'Grouping is disabled for this column', FilterbarTitle: '\'s filter bar cell', EmptyDataSourceError: 'DataSource must not be empty at initial load since columns are generated from dataSource in AutoGenerate Column Grid', 
            // Toolbar Items
            Add: 'Add', Edit: 'Edit', Cancel: 'Cancel', Update: 'Update', Delete: 'Delete', Print: 'Print', Pdfexport: 'PDF Export', Excelexport: 'Excel Export', Wordexport: 'Word Export', Csvexport: 'CSV Export', Search: 'Search', Columnchooser: 'Columns', Save: 'Save', Item: 'item', Items: 'items', EditOperationAlert: 'No records selected for edit operation', DeleteOperationAlert: 'No records selected for delete operation', SaveButton: 'Save', OKButton: 'OK', CancelButton: 'Cancel', EditFormTitle: 'Details of ', AddFormTitle: 'Add New Record', BatchSaveConfirm: 'Are you sure you want to save changes?', BatchSaveLostChanges: 'Unsaved changes will be lost. Are you sure you want to continue?', ConfirmDelete: 'Are you sure you want to Delete Record?', CancelEdit: 'Are you sure you want to Cancel the changes?', ChooseColumns: 'Choose Column', ColumnMenu: 'Column Menu', SearchColumns: 'search columns', Matchs: 'No matches found', FilterButton: 'Filter', FilterTitle: 'Filter', FilterIcon: 'Filter', ClearButton: 'Clear', StartsWith: 'Starts With', NotStartsWith: 'Does Not Start With', Like: 'Like', EndsWith: 'Ends With', NotEndsWith: 'Does Not End With', Contains: 'Contains', NotContains: 'Does Not Contain', IsNull: 'Null', NotNull: 'Not Null', IsEmpty: 'Empty', IsNotEmpty: 'Not Empty', Equal: 'Equal', NotEqual: 'Not Equal', LessThan: 'Less Than', LessThanOrEqual: 'Less Than Or Equal', GreaterThan: 'Greater Than', GreaterThanOrEqual: 'Greater Than Or Equal', In: 'In', NotIn: 'Not In', ChooseDate: 'Choose a Date', EnterValue: 'Enter the value', Copy: 'Copy', Group: 'Group by this column', Ungroup: 'Ungroup by this column', GroupButton: 'Group button', UnGroupAria: 'ungroup button', GroupSeperator: 'Separator for the grouped columns', UnGroupIcon: 'ungroup the grouped column ', GroupedSortIcon: 'sort the grouped column ', GroupedDrag: 'Drag the grouped column', GroupCaption: ' is groupcaption cell', CheckBoxLabel: 'checkbox', SelectAllCheckbox: 'Select all checkbox', SelectRow: 'Select row', autoFitAll: 'Autofit all columns', autoFit: 'Autofit this column', AutoFitAll: 'Autofit all columns', AutoFit: 'Autofit this column', Export: 'Export', FirstPage: 'First Page', LastPage: 'Last Page', PreviousPage: 'Previous Page', NextPage: 'Next Page', SortAscending: 'Sort Ascending', SortDescending: 'Sort Descending', EditRecord: 'Edit Record', DeleteRecord: 'Delete Record', FilterMenu: 'Filter', SelectAll: 'Select All', AddCurrentSelection: 'Add current selection to filter', Blanks: 'Blanks', FilterTrue: 'True', FilterFalse: 'False', NoResult: 'No matches found', ClearFilter: 'Clear Filter', Clear: 'Clear', NumberFilter: 'Number Filters', TextFilter: 'Text Filters', DateFilter: 'Date Filters', DateTimeFilter: 'DateTime Filters', MatchCase: 'Match Case', Between: 'Between', CustomFilter: 'Custom Filter', CustomFilterPlaceHolder: 'Enter the value', CustomFilterDatePlaceHolder: 'Choose a date', AND: 'AND', OR: 'OR', ShowRowsWhere: 'Show rows where:', ToolbarMenuDialogARIA: 'Toolbar menu dialog', FilterMenuDialogARIA: 'Filter menu', ExcelFilterDialogARIA: 'Excel filter', CheckBoxFilterDialogARIA: 'Checkbox filter', DialogEditARIA: 'Edit dialog', ColumnMenuDialogARIA: 'Column menu dialog', CustomFilterDialogARIA: 'Customer filter dialog', SortAtoZ: 'Sort A to Z', SortZtoA: 'Sort Z to A', SortByOldest: 'Sort by Oldest', SortByNewest: 'Sort by Newest', SortSmallestToLargest: 'Sort Smallest to Largest', SortLargestToSmallest: 'Sort Largest to Smallest', Sort: 'Sort', SortIcon: 'Sort', FilterDescription: 'Press Alt Down to open filter Menu', SortDescription: 'Press Enter to sort', ColumnMenuDescription: 'Press Alt Down to open Column Menu', GroupDescription: 'Press Ctrl space to group', ColumnHeader: ' column header ', TemplateCell: ' is template cell', CommandColumnAria: 'is Command column column header ', DialogEdit: 'Dialog edit', ClipBoard: 'clipboard', AscendingText: 'Ascending', DescendingText: 'Descending', NoneText: 'None', Expanded: 'Expanded', Collapsed: 'Collapsed' }, this.defaultChartLocale);
        this.keyConfigs = {
            downArrow: 'downarrow',
            upArrow: 'uparrow',
            rightArrow: 'rightarrow',
            leftArrow: 'leftarrow',
            shiftDown: 'shift+downarrow',
            shiftUp: 'shift+uparrow',
            shiftRight: 'shift+rightarrow',
            shiftLeft: 'shift+leftarrow',
            home: 'home',
            end: 'end',
            escape: 'escape',
            ctrlHome: 'ctrl+home',
            ctrlEnd: 'ctrl+end',
            pageUp: 'pageup',
            pageDown: 'pagedown',
            ctrlAltPageUp: 'ctrl+alt+pageup',
            ctrlAltPageDown: 'ctrl+alt+pagedown',
            altPageUp: 'alt+pageup',
            altPageDown: 'alt+pagedown',
            altDownArrow: 'alt+downarrow',
            altUpArrow: 'alt+uparrow',
            ctrlDownArrow: 'ctrl+downarrow',
            ctrlUpArrow: 'ctrl+uparrow',
            ctrlPlusA: 'ctrl+A',
            ctrlPlusP: 'ctrl+P',
            insert: 'insert',
            delete: 'delete',
            f2: 'f2',
            enter: 'enter',
            ctrlEnter: 'ctrl+enter',
            shiftEnter: 'shift+enter',
            tab: 'tab',
            shiftTab: 'shift+tab',
            space: 'space',
            ctrlPlusC: 'ctrl+C',
            ctrlShiftPlusH: 'ctrl+shift+H',
            ctrlSpace: 'ctrl+space',
            ctrlLeftArrow: 'ctrl+leftarrow',
            ctrlRightArrow: 'ctrl+rightarrow'
        };
    };
    /**
     * For internal use only - To Initialize the component rendering.
     *
     * @returns {void}
     * @private
     */
    Grid.prototype.render = function () {
        this.log(['module_missing', 'promise_enabled', 'locale_missing', 'check_datasource_columns']);
        this.ariaService.setOptions(this.element, { role: 'grid' });
        (0,_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_4__/* .createSpinner */ .GF)({ target: this.element, cssClass: this.cssClass ? this.cssClass : null }, this.createElement);
        this.renderModule = new _renderer_render__WEBPACK_IMPORTED_MODULE_5__/* .Render */ .d(this, this.serviceLocator);
        this.searchModule = new _actions_search__WEBPACK_IMPORTED_MODULE_6__/* .Search */ .v(this);
        this.scrollModule = new _actions_scroll__WEBPACK_IMPORTED_MODULE_7__/* .Scroll */ .O(this);
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .initialLoad */ .X0B, {});
        if (this.pageSettings.enableQueryString) {
            var pageValue = new URL(window.location.href).searchParams.get('page');
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(pageValue) && window.location.href.indexOf('?page=') > 0) {
                var currentPageValue = parseInt(pageValue, 10);
                this.setProperties({ pageSettings: { currentPage: currentPageValue } }, true);
                this.pageSettings.currentPage = currentPageValue;
            }
        }
        if ((this.getDataModule().dataManager.dataSource.offline === true || this.getDataModule().dataManager.dataSource.url === undefined)
            && !(!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.dataSource) && this.dataSource.result)) {
            this.isVirtualAdaptive = true;
        }
        if (this.aggregateModule && this.aggregates.length) {
            for (var i = 0; i < this.aggregates.length; i++) {
                for (var j = 0; j < this.aggregates[parseInt(i.toString(), 10)].columns.length; j++) {
                    var column = this.aggregates[parseInt(i.toString(), 10)].columns[parseInt(j.toString(), 10)];
                    if (column['types']) {
                        column.type = column['types'];
                    }
                }
            }
        }
        if (this.isReact) {
            var args = { requireTemplateRef: this.requireTemplateRef };
            this.trigger(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .load */ .Hh6, args);
            if (!args.requireTemplateRef) {
                this.requireTemplateRef = args.requireTemplateRef;
            }
        }
        else {
            this.trigger(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .load */ .Hh6);
        }
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .prepareColumns */ .X2)(this.columns, this.enableColumnVirtualization, this);
        if (this.enableColumnVirtualization && this.isChangeDataSourceCall && this.columnModel) {
            this.columnModel = [];
            this.updateColumnModel(this.columns);
        }
        this.isPreparedFrozenColumns = true;
        if (this.enablePersistence) {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .columnsPrepared */ .JKj, {});
        }
        this.getMediaColumns();
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .setColumnIndex */ .zg)(this.columns);
        if (this.isFrozenGrid() && !this.mergedColumns) {
            this.setInitialFrozenColumnIndex(this.columns);
        }
        this.checkLockColumns(this.columns);
        this.getColumns();
        this.processModel();
        this.gridRender();
        this.wireEvents();
        this.addListener();
        this.updateDefaultCursor();
        this.updateStackedFilter();
        if (this.loadingIndicator.indicatorType === 'Spinner') {
            this.showSpinner();
        }
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .initialEnd */ .qOR, {});
        if (this.loadingIndicator.indicatorType === 'Shimmer') {
            this.refreshMaskRow();
        }
        if (this.refreshing) {
            this.trigger('created');
        }
    };
    Grid.prototype.setInitialFrozenColumnIndex = function (columns) {
        for (var i = 0; i < columns.length; i++) {
            var column = columns[parseInt(i.toString(), 10)];
            column["" + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .initialFrozenColumnIndex */ .Vu] = column.index;
            if (column.columns) {
                this.setInitialFrozenColumnIndex(column.columns);
            }
        }
    };
    /**
     * By default, grid shows the spinner for all its actions. You can use this method to show spinner at your needed time.
     *
     * @returns {void}
     */
    Grid.prototype.showSpinner = function () {
        if (!this.isExportGrid) {
            (0,_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_4__/* .showSpinner */ .xc)(this.element);
        }
    };
    /**
     * By default, grid shows the spinner for all its actions. You can use this method to show spinner at your needed time.
     *
     * @returns {void}
     */
    Grid.prototype.hideSpinner = function () {
        if (!this.isExportGrid) {
            (0,_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_4__/* .hideSpinner */ .W$)(this.element);
        }
    };
    Grid.prototype.showMaskRow = function (axisDirection, dialogElement) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.headerModule) || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.contentModule)) {
            return;
        }
        var gridHeader = this.getHeaderContent().firstChild;
        var gridContent = this.getContent().firstChild;
        var gridFooter = this.getFooterContent();
        if (dialogElement) {
            var dialogHolder = dialogElement.querySelector('.e-checkboxlist');
            var maskRowCount = Math.floor(dialogHolder.getBoundingClientRect().height / this.getRowHeight());
            var maskTemplate = '<div class="e-ftrchk e-mask-ftrchk">'
                + '<div class="e-checkbox-wrapper"><input class="e-chk-hidden">'
                + this.getShimmerTemplate() + this.getShimmerTemplate() + '</div></div>';
            dialogHolder.innerHTML = '';
            for (var i = 0; i < maskRowCount; i++) {
                dialogHolder.innerHTML += maskTemplate;
                dialogHolder.querySelector('.e-ftrchk.e-mask-ftrchk').style.width = '100%';
                dialogHolder.querySelector('.e-checkbox-wrapper').style.width = '100%';
                var maskSpan = [].slice.call(dialogHolder
                    .querySelectorAll('.e-mask:not(.e-mask-checkbox-filter-intent):not(.e-mask-checkbox-filter-span-intent)'));
                maskSpan[0].classList.add('e-mask-checkbox-filter-intent');
                maskSpan[1].classList.add('e-mask-checkbox-filter-span-intent');
            }
            return;
        }
        if ((!this.enableRtl && !this.getHeaderContent().style.paddingRight)
            || (this.enableRtl && !this.getHeaderContent().style.paddingLeft)) {
            gridContent.style.overflowY = 'hidden';
        }
        if (!this.isInitialLoad && !this.getColumns().length) {
            var contentHeight = gridContent.getBoundingClientRect().height;
            var maskTableHeight = contentHeight === 0 ? this.allowPaging ? this.pageSettings.pageSize * this.getRowHeight()
                : window.innerHeight : contentHeight;
            var contentRowCount = Math.ceil(maskTableHeight / this.getRowHeight());
            if (this.rowRenderingMode !== 'Vertical') {
                this.headerMaskTable = this.createEmptyMaskTable(gridHeader, 1);
            }
            this.contentMaskTable = this.createEmptyMaskTable(gridContent, contentRowCount);
            return;
        }
        this.maskRowContentScroll = (this.enableVirtualization || this.enableColumnVirtualization) && axisDirection ? true : false;
        if (!this.contentMaskTable) {
            var content = gridContent;
            if (this.enableVirtualization || this.enableColumnVirtualization) {
                content = content.querySelector('.e-virtualtable');
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(content.querySelector('tbody'))) {
                this.contentMaskTable = this.createMaskTable(content, this.getContentMaskColumns(), axisDirection);
            }
        }
        if (!this.headerMaskTable && (this.isFrozenGrid() || (this.enableColumnVirtualization && axisDirection === 'X'))) {
            var content = gridHeader;
            if (this.enableColumnVirtualization && axisDirection === 'X') {
                content = content.querySelector('.e-virtualtable');
            }
            this.headerMaskTable = this.createMaskTable(content, this.getContentMaskColumns(), axisDirection);
        }
        if (gridFooter && gridFooter.querySelector('.e-summaryrow')) {
            var gridFooterContent = gridFooter.firstChild;
            if (!this.footerContentMaskTable) {
                var footerContent = gridFooterContent;
                this.footerContentMaskTable = this.createMaskTable(footerContent);
            }
        }
        if (!(this.enableVirtualization && axisDirection)) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(gridContent, 'scroll', this.translateMaskRow, this);
        }
    };
    Grid.prototype.getContentMaskColumns = function () {
        return this.getColumns();
    };
    Grid.prototype.createEmptyMaskTable = function (maskElement, rowCount) {
        var table = this.createElement('table', { className: 'e-table e-masked-table' });
        var tbody = this.createElement('tbody', { className: 'e-masked-tbody' });
        var row = this.createElement('tr', { className: 'e-masked-row e-row' });
        row.style.height = this.getRowHeight() + "px";
        var cell = this.createElement('td', { className: 'e-masked-cell e-rowcell' });
        cell.innerHTML = this.getShimmerTemplate();
        row.appendChild(cell);
        for (var i = 0; i < rowCount; i++) {
            tbody.appendChild(row.cloneNode(true));
        }
        table.appendChild(tbody);
        maskElement.appendChild(table);
        return table;
    };
    Grid.prototype.createFrozenMaskRow = function (td, columns) {
        for (var i = 0; i < td.length; i++) {
            if (i < this.frozenLeftCount) {
                if (this.frozenLeftCount - 1 === i) {
                    td[parseInt(i.toString(), 10)].classList.add('e-freezeleftborder');
                }
                td[parseInt(i.toString(), 10)].classList.add('e-leftfreeze');
                td[parseInt(i.toString(), 10)].setAttribute('aria-colindex', (i + 1).toString());
                td[parseInt(i.toString(), 10)].style.left = (columns[parseInt(i.toString(), 10)].valueX -
                    this.translateX) + 'px';
            }
            else if ((td.length - this.frozenRightCount) <= i && columns[parseInt(i.toString(), 10)]) {
                if ((td.length - this.frozenRightCount) === i) {
                    td[parseInt(i.toString(), 10)].classList.add('e-freezerightborder');
                }
                td[parseInt(i.toString(), 10)].classList.add('e-rightfreeze');
                td[parseInt(i.toString(), 10)].setAttribute('aria-colindex', (i + 1).toString());
                td[parseInt(i.toString(), 10)].style.right = (this.translateX +
                    columns[parseInt(i.toString(), 10)].valueX) + 'px';
            }
        }
    };
    Grid.prototype.createMaskTable = function (element, columns, axisDirection) {
        var parentElement = element;
        var header = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(parentElement, '.e-gridheader') ? true : false;
        var content = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(parentElement, '.e-gridcontent') ? true : false;
        var footer = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(parentElement, '.e-gridfooter') ? true : false;
        var gridContent = this.getContent().firstChild;
        var gridContentScrollHeight = gridContent.scrollHeight;
        var table = parentElement.querySelector('table');
        var maskTable = table.cloneNode();
        maskTable.removeAttribute('role');
        maskTable.removeAttribute('id');
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .updateCSSText */ .Un)(maskTable, "position: absolute; z-index: 5; width: " + table.getBoundingClientRect().width + "px;");
        if (header && !(this.enableColumnVirtualization && axisDirection === 'X')) {
            maskTable.style.transform = 'translate(0px,'
                + table.querySelector('thead').getBoundingClientRect().height + 'px)';
        }
        maskTable.setAttribute('class', 'e-table e-masked-table');
        var maskColgroup = table.querySelector('colgroup').cloneNode(true);
        maskColgroup.removeAttribute('id');
        maskColgroup.setAttribute('class', 'e-masked-colgroup');
        maskTable.appendChild(maskColgroup);
        if (header && this.enableColumnVirtualization && axisDirection === 'X') {
            var row = this.createMaskRow(maskColgroup, columns);
            if (this.isFrozenGrid()) {
                var frozenTd = [].slice.call(row.querySelectorAll('.e-rowcell'));
                this.createFrozenMaskRow(frozenTd, columns);
            }
            var thead = table.querySelector('thead');
            var rows = [].slice.call(thead.querySelectorAll('tr'));
            var maskTHead = thead.cloneNode();
            maskTHead.removeAttribute('role');
            maskTHead.setAttribute('class', 'e-masked-thead');
            var rowCount = rows.length;
            for (var i = 0; i < rowCount; i++) {
                maskTHead.appendChild(row.cloneNode(true));
                maskTHead.childNodes[parseInt(i.toString(), 10)].style
                    .height = rows[parseInt(i.toString(), 10)].getBoundingClientRect().height + 'px';
            }
            maskTable.appendChild(maskTHead);
        }
        var maskTBody = table.querySelector('tbody').cloneNode();
        maskTBody.removeAttribute('role');
        maskTBody.setAttribute('class', 'e-masked-tbody');
        var tbody = table.querySelector('tbody');
        if (content || header) {
            var rowCountElement = gridContent;
            var rowCount = Math.ceil(rowCountElement.getBoundingClientRect().height / this.getRowHeight());
            if (this.allowPaging && this.pageSettings.pageSize !== this.currentViewData.length &&
                this.pagerModule.pagerObj.totalPages !== this.pageSettings.currentPage) {
                var row = this.createMaskRow(maskColgroup, columns);
                var altRow = row.cloneNode(true);
                altRow.classList.add('e-altrow');
                for (var i = 0; i < this.pageSettings.pageSize - this.currentViewData.length; i++) {
                    maskTBody.appendChild((i % 2 === 1) ? altRow.cloneNode(true) : row.cloneNode(true));
                }
            }
            if (tbody.querySelector('.e-emptyrow') || !tbody.childNodes.length || (content && this.childGrid)) {
                var row = this.createMaskRow(maskColgroup, columns);
                var altRow = row.cloneNode(true);
                altRow.classList.add('e-altrow');
                for (var i = 0; i < rowCount; i++) {
                    var altNumber = 1;
                    maskTBody.appendChild((i + altNumber) % 2 === 0 ? altRow.cloneNode(true) : row.cloneNode(true));
                }
            }
            else {
                var rowsQuery = 'tr:not(.e-hide):not([style*="display:none"]):not([style*="display: none"])';
                if (this.isTreeGrid) {
                    rowsQuery = 'tr:not(.e-hide):not([style*="display:none"]):not([style*="display: none"]):not(.e-childrow-hidden)';
                }
                var rows = [].slice.call(tbody.querySelectorAll(rowsQuery));
                var addEditRow = tbody.querySelector('.e-addedrow, .e-editedrow');
                var addEditRowIndex = void 0;
                if (addEditRow) {
                    addEditRowIndex = rows.indexOf(addEditRow);
                    if (this.isFrozenGrid() && this.enableColumnVirtualization) {
                        var frzTd = [].slice.call(rows[addEditRowIndex + 1].querySelectorAll('.e-rowcell'));
                        for (var i = 0; i < frzTd.length; i++) {
                            if (i < this.frozenLeftCount) {
                                frzTd[parseInt(i.toString(), 10)].classList.add('e-leftfreeze');
                                frzTd[parseInt(i.toString(), 10)].setAttribute('aria-colindex', (i + 1).toString());
                                frzTd[parseInt(i.toString(), 10)].style.left = (columns[parseInt(i.toString(), 10)].valueX - this.translateX) + 'px';
                            }
                            else if ((frzTd.length - this.frozenRightCount) <= i && columns[parseInt(i.toString(), 10)]) {
                                frzTd[parseInt(i.toString(), 10)].classList.add('e-rightfreeze');
                                frzTd[parseInt(i.toString(), 10)].setAttribute('aria-colindex', (i + 1).toString());
                                frzTd[parseInt(i.toString(), 10)].style.right = (this.translateX +
                                    columns[parseInt(i.toString(), 10)].valueX) + 'px';
                            }
                        }
                    }
                    if (addEditRow.classList.contains('e-addedrow')) {
                        rows.splice(addEditRowIndex, 2);
                    }
                    else {
                        rows.splice(addEditRowIndex, 1);
                    }
                }
                rowCount = (this.enableVirtualization || this.enableColumnVirtualization) && axisDirection ? rows.length
                    : rowCount <= rows.length ? rowCount : rows.length;
                for (var i = 0; i < rowCount; i++) {
                    var maskTBodyRow = this.applyMaskRow(rows[parseInt(i.toString(), 10)].cloneNode(true), rows[parseInt(i.toString(), 10)].getBoundingClientRect().height);
                    if (this.enableColumnVirtualization && axisDirection === 'X' && this.isFrozenGrid()) {
                        var frozenTd = [].slice.call(maskTBodyRow.querySelectorAll('.e-masked-cell'));
                        this.createFrozenMaskRow(frozenTd, columns);
                    }
                    maskTBody.appendChild(maskTBodyRow);
                }
                if (addEditRow && addEditRow.classList.contains('e-editedrow') && addEditRowIndex < rowCount) {
                    var addEditMaskRow = maskTBody.childNodes[parseInt(addEditRowIndex.toString(), 10)];
                    addEditMaskRow.style.height = this.getRowHeight() + 'px';
                    addEditMaskRow.classList.add('e-row');
                    if (addEditRow.classList.contains('e-altrow')) {
                        addEditMaskRow.classList.add('e-altrow');
                    }
                }
            }
        }
        maskTable.appendChild(maskTBody);
        if (footer) {
            var tfoot = table.querySelector('tfoot');
            var maskTFoot = tfoot.cloneNode();
            maskTFoot.setAttribute('class', 'e-masked-tfoot');
            var rows = [].slice.call(tfoot.querySelectorAll('tr'));
            for (var i = 0; i < rows.length; i++) {
                maskTFoot.appendChild(this.applyMaskRow(rows[parseInt(i.toString(), 10)].cloneNode(true), rows[parseInt(i.toString(), 10)].getBoundingClientRect().height));
            }
            maskTable.appendChild(maskTFoot);
        }
        if (header && this.isFrozenGrid() && !this.enableColumnVirtualization) {
            this.getHeaderContent().querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .headerContent */ .VW).style.position = 'relative';
        }
        parentElement.insertBefore(maskTable, parentElement.firstChild);
        if (content && !(this.enableVirtualization && axisDirection)) {
            var minScrollTop = gridContentScrollHeight - maskTable.getBoundingClientRect().height;
            minScrollTop = minScrollTop < 0 ? 0 : minScrollTop;
            var scrollTop = gridContent.scrollTop <= minScrollTop ? gridContent.scrollTop : minScrollTop;
            if (this.enableVirtualization) {
                scrollTop -= (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .getTransformValues */ .ld)((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(parentElement, '.e-virtualtable')).height;
            }
            maskTable.style.transform = 'translate(0px,' + scrollTop + 'px)';
        }
        return maskTable;
    };
    Grid.prototype.applyMaskRow = function (row, rowHeight) {
        var maskRow = row;
        maskRow.removeAttribute('role');
        maskRow.removeAttribute('aria-rowindex');
        maskRow.removeAttribute('data-uid');
        maskRow.classList.add('e-masked-row');
        maskRow.style.height = rowHeight + 'px';
        var maskCells = [].slice.call(maskRow.childNodes);
        for (var i = 0; i < maskCells.length; i++) {
            var maskCell = maskCells[parseInt(i.toString(), 10)];
            var displayAsCheckBoxCell = maskCell.firstChild && maskCell.firstChild.classList
                && maskCell.firstChild.classList.contains('e-checkbox-wrapper');
            maskCell.removeAttribute('role');
            maskCell.removeAttribute('tabindex');
            maskCell.removeAttribute('aria-label');
            if (this.enableColumnVirtualization && maskCell.classList.contains('e-fixedfreeze')) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([maskCell], ['e-fixedfreeze', 'e-freezeleftborder', 'e-freezerightborder']);
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([maskCell], ['e-unfreeze']);
            }
            maskCell.removeAttribute('aria-colindex');
            maskCell.removeAttribute('index');
            maskCell.removeAttribute('ej-mappingname');
            maskCell.removeAttribute('ej-mappingvalue');
            maskCell.removeAttribute('e-mappinguid');
            maskCell.removeAttribute('aria-expanded');
            maskCell.classList.add('e-masked-cell');
            maskCell.innerHTML = this.getShimmerTemplate();
            if (maskCell.classList.contains('e-recordplusexpand') || maskCell.classList.contains('e-recordpluscollapse')) {
                maskCell.firstChild.classList.add('e-mask-group-intent');
            }
            else if (maskCell.classList.contains('e-gridchkbox') || displayAsCheckBoxCell) {
                maskCell.firstChild.classList.add('e-mask-checkbox-intent');
            }
            else if (maskCell.classList.contains('e-rowdragdrop')) {
                maskCell.firstChild.classList.add('e-mask-drag-intent');
            }
            else if (maskCell.classList.contains('e-indentcell')) {
                maskCell.innerHTML = '';
            }
        }
        return maskRow;
    };
    Grid.prototype.createMaskRow = function (refColgroup, refColumns) {
        var colgroup = refColgroup;
        var columns = refColumns;
        var row = this.createElement('tr', { className: 'e-masked-row e-row' });
        if (this.rowRenderingMode !== 'Vertical') {
            row.style.height = this.getRowHeight() + 'px';
        }
        var td = this.createElement('td', { className: 'e-masked-cell e-rowcell' });
        for (var i = 0, colIndex = 0; i < colgroup.childNodes.length; i++) {
            var col = colgroup.childNodes[parseInt(i.toString(), 10)];
            var localTD = td.cloneNode();
            localTD.innerHTML = this.getShimmerTemplate();
            if (!(col.classList.contains('e-group-intent') || col.classList.contains('e-detail-intent')
                || col.classList.contains('e-drag-intent'))) {
                if (this.rowRenderingMode === 'Vertical' && columns[parseInt(colIndex.toString(), 10)]) {
                    localTD.setAttribute('data-cell', columns[parseInt(colIndex.toString(), 10)].headerText ?
                        columns[parseInt(colIndex.toString(), 10)].headerText : columns[parseInt(colIndex.toString(), 10)].field);
                }
                if (col.style.display === 'none') {
                    localTD.classList.add('e-hide');
                }
                else {
                    localTD.style.textAlign = columns[parseInt(colIndex.toString(), 10)]
                        && columns[parseInt(colIndex.toString(), 10)].textAlign ?
                        columns[parseInt(colIndex.toString(), 10)].textAlign.toLowerCase()
                        : this.enableRtl ? 'right' : 'left';
                    if (columns[parseInt(colIndex.toString(), 10)] && (columns[parseInt(colIndex.toString(), 10)].type === 'checkbox'
                        || columns[parseInt(colIndex.toString(), 10)].displayAsCheckBox)) {
                        localTD.firstChild.classList.add('e-mask-checkbox-intent');
                    }
                }
                colIndex++;
            }
            else {
                if (col.classList.contains('e-group-intent')) {
                    localTD.firstChild.classList.add('e-mask-group-intent');
                }
                else if (col.classList.contains('e-detail-intent')) {
                    localTD.firstChild.classList.add('e-mask-detail-intent');
                }
                else if (col.classList.contains('e-drag-intent')) {
                    localTD.firstChild.classList.add('e-mask-drag-intent');
                }
            }
            row.appendChild(localTD);
        }
        return row;
    };
    Grid.prototype.getShimmerTemplate = function () {
        if (this.maskRowContentScroll) {
            return '<span class="e-mask e-skeleton e-skeleton-text"></span>';
        }
        return '<span class="e-mask e-skeleton e-skeleton-text e-shimmer-wave"></span>';
    };
    Grid.prototype.addShimmerEffect = function () {
        this.maskRowContentScroll = false;
        var maskSpan = [].slice.call(this.element.querySelectorAll('.e-mask:not(.e-shimmer-wave)'));
        for (var i = 0; i < maskSpan.length; i++) {
            if (maskSpan[parseInt(i.toString(), 10)]) {
                maskSpan[parseInt(i.toString(), 10)].classList.add('e-shimmer-wave');
            }
        }
    };
    Grid.prototype.translateMaskRow = function (e) {
        var target = e.target;
        var maskTables = target.querySelectorAll('.e-masked-table');
        for (var i = 0; i < maskTables.length; i++) {
            var maskTable = maskTables[parseInt(i.toString(), 10)];
            if (maskTable) {
                var minScrollTop = target.scrollHeight - maskTable.getBoundingClientRect().height;
                minScrollTop = minScrollTop < 0 ? 0 : minScrollTop;
                var scrollTop = target.scrollTop <= minScrollTop ? target.scrollTop : minScrollTop;
                if (this.enableVirtualization) {
                    scrollTop -= (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .getTransformValues */ .ld)((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(maskTable, '.e-virtualtable')).height;
                }
                maskTable.style.transform = 'translate(0px,' + scrollTop + 'px)';
            }
        }
    };
    Grid.prototype.removeMaskRow = function () {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.contentModule)) {
            var gridContent = this.getContent().firstChild;
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(gridContent, 'scroll', this.translateMaskRow);
        }
        if (this.headerMaskTable && this.isFrozenGrid() && !this.enableColumnVirtualization) {
            this.getHeaderContent().querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .headerContent */ .VW).style.position = '';
        }
        var maskTables = [this.headerMaskTable,
            this.contentMaskTable, this.footerContentMaskTable];
        for (var i = 0; i < maskTables.length; i++) {
            var maskTable = maskTables[parseInt(i.toString(), 10)];
            if (maskTable) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(maskTable);
            }
        }
        this.headerMaskTable = null;
        this.contentMaskTable = null;
        this.footerContentMaskTable = null;
    };
    Grid.prototype.refreshMaskRow = function () {
        var gridContent = this.getContent().firstChild;
        if (!this.isInitialLoad && !this.getColumns().length) {
            return;
        }
        if (this.contentMaskTable && gridContent.querySelector('.e-masked-table')) {
            var content = gridContent;
            if (this.enableVirtualization) {
                content = content.querySelector('.e-virtualtable');
            }
            this.refreshMaskRowColgroupWidth(content);
        }
    };
    Grid.prototype.refreshMaskRowColgroupWidth = function (content) {
        var table = content.querySelector('table:not(.e-masked-table)');
        var colgroup = table.querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .colGroup */ .uo).cloneNode(true);
        var maskTable = content.querySelector('.e-masked-table');
        colgroup.removeAttribute('id');
        colgroup.setAttribute('class', 'e-masked-colgroup');
        for (var i = 0; i < colgroup.childNodes.length; i++) {
            colgroup.childNodes[parseInt(i.toString(), 10)].removeAttribute('class');
        }
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(maskTable.querySelector('.e-masked-colgroup'));
        maskTable.insertBefore(colgroup, maskTable.firstChild);
        maskTable.style.width = table.getBoundingClientRect().width + 'px';
    };
    Grid.prototype.updateStackedFilter = function () {
        if (this.allowFiltering && this.filterSettings.type === 'FilterBar' &&
            this.getHeaderContent().getElementsByClassName('e-stackedheadercell').length) {
            this.getHeaderContent().classList.add('e-stackedfilter');
        }
        else {
            this.getHeaderContent().classList.remove('e-stackedfilter');
        }
    };
    Grid.prototype.getMediaColumns = function () {
        if (!this.enableColumnVirtualization) {
            var gcol = this.getColumns();
            this.getShowHideService = this.serviceLocator.getService('showHideService');
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(gcol)) {
                for (var index = 0; index < gcol.length; index++) {
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(gcol[parseInt(index.toString(), 10)].hideAtMedia)
                        && ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(gcol[parseInt(index.toString(), 10)].visible)
                            || gcol[parseInt(index.toString(), 10)].visible)) {
                        this.pushMediaColumn(gcol[parseInt(index.toString(), 10)], index);
                    }
                }
            }
        }
        this.updateFrozenColumnsWidth();
    };
    Grid.prototype.pushMediaColumn = function (col, index) {
        this.mediaCol.push(col);
        this.media[col.uid] = window.matchMedia(col.hideAtMedia);
        this.mediaQueryUpdate(index, this.media[col.uid]);
        this.mediaBindInstance[parseInt(index.toString(), 10)] = this.mediaQueryUpdate.bind(this, index);
        this.media[col.uid].addListener(this.mediaBindInstance[parseInt(index.toString(), 10)]);
    };
    /**
     * @param {Column} col - specifies the column
     * @returns {void}
     * @hidden
     */
    Grid.prototype.updateMediaColumns = function (col) {
        if (!this.enableColumnVirtualization) {
            var index = this.getColumnIndexByUid(col.uid);
            for (var i = 0; i < this.mediaCol.length; i++) {
                if (col.uid === this.mediaCol[parseInt(i.toString(), 10)].uid) {
                    this.mediaCol.splice(i, 1);
                    return;
                }
            }
            this.pushMediaColumn(col, index);
        }
    };
    /**
     * @param {number} columnIndex - specifies the column index
     * @param {MediaQueryList} e - specifies the MediaQueryList
     * @returns {void}
     * @hidden
     */
    Grid.prototype.mediaQueryUpdate = function (columnIndex, e) {
        var col = this.getColumns()[parseInt(columnIndex.toString(), 10)];
        if (this.mediaCol.some(function (mediaColumn) { return mediaColumn.uid === col.uid; })) {
            col.visible = e.matches;
            if (this.isInitialLoad) {
                this.invokedFromMedia = true;
                if (col.visible) {
                    this.showHider.show(col.headerText, 'headerText');
                }
                else {
                    this.showHider.hide(col.headerText, 'headerText');
                }
            }
        }
    };
    Grid.prototype.refreshMediaCol = function () {
        this.isInitialLoad = true;
        var footerContent = this.element.querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridFooter */ .kC);
        if (this.aggregates.length && this.element.scrollHeight > parseInt(this.height.toString(), 10) && footerContent) {
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([footerContent], ['e-footerpadding']);
        }
        var columns = this.enableColumnVirtualization ? this.columns : this.getColumns();
        var checkboxColumn = columns.filter(function (col) { return col.type === 'checkbox'; });
        if (checkboxColumn.length === 0 || checkboxColumn.length && this.selectionSettings.checkboxMode === 'ResetOnRowClick') {
            this.isCheckBoxSelection = false;
        }
        if (this.rowRenderingMode === 'Vertical') {
            if (this.enableHover) {
                this.setProperties({ enableAdaptiveUI: true, enableHover: false }, true);
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([this.element], 'e-gridhover');
            }
        }
        if (this.enableAdaptiveUI && this.scrollModule) {
            this.scrollModule.refresh();
        }
        if (this.isFrozenGrid() && this.isAutoGenerateColumns) {
            this.widthService.setWidthToColumns();
            this.isAutoGenerateColumns = false;
        }
    };
    Grid.prototype.removeMediaListener = function () {
        for (var i = 0; i < this.mediaCol.length; i++) {
            this.media[this.mediaCol[parseInt(i.toString(), 10)].uid]
                .removeListener(this.mediaBindInstance[this.mediaCol[parseInt(i.toString(), 10)].index]);
        }
    };
    /**
     * For internal use only - Initialize the event handler
     *
     * @returns {void}
     * @private
     */
    Grid.prototype.eventInitializer = function () {
        //eventInitializer
    };
    /**
     * Destroys the component (detaches/removes all event handlers, attributes, classes, and empties the component element).
     *
     * @function destroy
     * @returns {void}
     */
    Grid.prototype.destroy = function () {
        var gridElement = this.element;
        if (!gridElement) {
            return;
        }
        var hasGridChild = gridElement.querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridHeader */ .iM) &&
            gridElement.querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridContent */ .iV) ? true : false;
        if (hasGridChild) {
            this.unwireEvents();
        }
        this.removeListener();
        this.removeMediaListener();
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .destroy */ .zrj, {});
        this.destroyDependentModules();
        if (this.isReact) {
            this.destroyTemplate(['template']);
        }
        if (this.isVue) {
            this.destroyTemplate();
        }
        if (hasGridChild) {
            _super.prototype.destroy.call(this);
        }
        this.toolTipObj.destroy();
        if (this.isReact && !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isIE) {
            this.element.innerHTML = '';
        }
        var modules = ['renderModule', 'headerModule', 'contentModule', 'valueFormatterService',
            'serviceLocator', 'ariaService', 'keyboardModule', 'widthService', 'searchModule', 'showHider',
            'scrollModule', 'printModule', 'clipboardModule', 'focusModule'];
        for (var i = 0; i < modules.length; i++) {
            if (this[modules[parseInt(i.toString(), 10)]]) {
                this[modules[parseInt(i.toString(), 10)]] = null;
            }
        }
        this.element.innerHTML = '';
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .classList */ .pP)(this.element, [], ['e-rtl', 'e-gridhover', 'e-responsive', 'e-default', 'e-device', 'e-grid-min-height']);
    };
    Grid.prototype.destroyDependentModules = function () {
        var gridElement = this.element;
        if (!gridElement || (!gridElement.querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridHeader */ .iM) && !gridElement.querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridContent */ .iV))) {
            return;
        }
        this.scrollModule.destroy();
        this.keyboardModule.destroy();
        this.focusModule.destroy();
        this.clipboardModule.destroy();
        this.printModule.destroy();
    };
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} returns the module name
     * @private
     */
    Grid.prototype.getModuleName = function () {
        return 'grid';
    };
    Grid.prototype.enableBoxSelection = function () {
        if (this.enableAutoFill) {
            this.selectionSettings.cellSelectionMode = 'BoxWithBorder';
            this.element.classList.add('e-afenabled');
        }
        else {
            this.element.classList.remove('e-afenabled');
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .destroyAutoFillElements */ .CZS, {});
        }
    };
    Grid.prototype.setCSSClass = function (oldCSSClass) {
        if (this.cssClass) {
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([this.element], this.cssClass.split(' '));
        }
        if (oldCSSClass) {
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([this.element], oldCSSClass.split(' '));
        }
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param {GridModel} newProp - Defines new properties
     * @param {GridModel} oldProp - Defines old properties
     * @returns {void}
     * @hidden
     */
    Grid.prototype.onPropertyChanged = function (newProp, oldProp) {
        var requireRefresh = false;
        var requireGridRefresh = false;
        var freezeRefresh = false;
        var checkCursor;
        var args = { requestType: 'refresh' };
        var childGridParent = null;
        var parentInstance = null;
        if (this.isDestroyed) {
            return;
        }
        this.log('module_missing');
        if (this.isEllipsisTooltip()) {
            this.toolTipObj.close();
        }
        var properties = Object.keys(newProp);
        if (properties.indexOf('columns') > -1) {
            if (this.enableColumnVirtualization) {
                this.columnModel = [];
            }
            this.updateColumnObject();
            requireGridRefresh = true;
        }
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var prop = properties_1[_i];
            switch (prop) {
                case 'allowPaging':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'pager', enable: this.allowPaging });
                    requireRefresh = true;
                    if (this.height === '100%') {
                        this.scrollModule.refresh();
                    }
                    break;
                case 'pageSettings':
                    if (this.pageTemplateChange) {
                        this.pageTemplateChange = false;
                        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'pager', properties: newProp.pageSettings });
                        break;
                    }
                    if (this.pagerModule && this.pagerModule.isCancel) {
                        this.pagerModule.isCancel = false;
                        return;
                    }
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'pager', properties: newProp.pageSettings });
                    if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(newProp.pageSettings.currentPage) && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(newProp.pageSettings.pageSize)
                        && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(newProp.pageSettings.totalRecordsCount)
                        || !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(oldProp.pageSettings) &&
                            ((newProp.pageSettings.currentPage !== oldProp.pageSettings.currentPage)
                                && !this.enableColumnVirtualization && !this.enableVirtualization && this.pageRequireRefresh
                                && this.pageSettings.totalRecordsCount <= this.pageSettings.pageSize)) {
                        requireRefresh = true;
                    }
                    if (!this.pageRequireRefresh) {
                        this.pageRequireRefresh = true;
                    }
                    if (this.pagerModule && this.pagerModule.isCancel) {
                        this.pagerModule.isCancel = false;
                    }
                    break;
                case 'allowSorting':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'sort', enable: this.allowSorting });
                    requireRefresh = true;
                    checkCursor = true;
                    break;
                case 'allowFiltering':
                    this.updateStackedFilter();
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'filter', enable: this.allowFiltering });
                    requireRefresh = true;
                    if (this.filterSettings.type !== 'FilterBar' || (this.editSettings.showAddNewRow && this.filterSettings.type === 'FilterBar')) {
                        this.refreshHeader();
                    }
                    else {
                        if (this.height === '100%') {
                            this.scrollModule.refresh();
                        }
                    }
                    break;
                case 'height':
                case 'width':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'scroll', properties: { width: newProp.width, height: newProp.height } });
                    if (this.allowPaging) {
                        this.pagerModule.refresh();
                    }
                    break;
                case 'allowReordering':
                    this.headerModule.refreshUI();
                    checkCursor = true;
                    break;
                case 'allowRowDragAndDrop':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'rowDragAndDrop', enable: this.allowRowDragAndDrop });
                    this.renderModule.refresh();
                    this.headerModule.refreshUI();
                    break;
                case 'allowSelection':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'selection', enable: this.allowSelection });
                    this.renderModule.refresh();
                    break;
                case 'cssClass':
                    this.setCSSClass(oldProp.cssClass);
                    break;
                case 'enableAutoFill':
                    if (this.selectionModule) {
                        this.enableBoxSelection();
                        this.selectionModule.updateAutoFillPosition();
                    }
                    break;
                case 'rowTemplate':
                    this.rowTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.rowTemplate);
                    requireRefresh = true;
                    break;
                case 'emptyRecordTemplate':
                    this.emptyRecordTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.emptyRecordTemplate);
                    requireRefresh = true;
                    break;
                case 'detailTemplate':
                    this.detailTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.detailTemplate);
                    requireRefresh = true;
                    break;
                case 'allowGrouping':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'group', enable: this.allowGrouping });
                    this.headerModule.refreshUI();
                    requireRefresh = true;
                    checkCursor = true;
                    if (this.height === '100%') {
                        this.scrollModule.refresh();
                    }
                    break;
                case 'enableInfiniteScrolling':
                case 'childGrid':
                    requireRefresh = true;
                    childGridParent = this.parentDetails ? document.querySelector("#" + this.parentDetails.parentID) : null;
                    parentInstance = childGridParent ? childGridParent.ej2_instances[0] : null;
                    if (this.childGrid && parentInstance && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(parentInstance.childGrid.childGrid)) {
                        var childGridObject = Object.assign({}, parentInstance.childGrid, { childGrid: newProp.childGrid });
                        parentInstance.setProperties({ childGrid: childGridObject }, true);
                        while (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(parentInstance.parentDetails)) {
                            var currentParent = document.querySelector("#" + parentInstance.parentDetails.parentID);
                            var currentParentInstance = currentParent ? currentParent.ej2_instances[0] : null;
                            if (currentParentInstance) {
                                var currentChildObject = Object.assign({}, currentParentInstance.childGrid);
                                currentChildObject.childGrid = parentInstance.childGrid;
                                currentParentInstance.setProperties({ childGrid: currentChildObject }, true);
                            }
                            parentInstance = currentParentInstance;
                        }
                    }
                    this.headerModule.refreshUI();
                    break;
                case 'toolbar':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'toolbar' });
                    if (this.height === '100%') {
                        this.scrollModule.refresh();
                    }
                    break;
                case 'groupSettings':
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, {
                        module: 'group', properties: newProp.groupSettings,
                        oldProperties: oldProp.groupSettings
                    });
                    break;
                case 'aggregates':
                    if (!this.aggregates.length && this.allowGrouping && this.groupSettings.columns.length) {
                        requireRefresh = true;
                    }
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'aggregate', properties: newProp });
                    if (this.height === '100%') {
                        this.scrollModule.refresh();
                    }
                    break;
                case 'frozenColumns':
                case 'frozenRows':
                case 'enableVirtualization':
                case 'enableColumnVirtualization':
                case 'currencyCode':
                case 'locale':
                    if (this.isFrozenGrid()) {
                        this.log('frozen_rows_columns');
                    }
                    freezeRefresh = true;
                    requireGridRefresh = true;
                    this.addNewRowFocus = true;
                    break;
                case 'query':
                    if (!this.getDataModule().isQueryInvokedFromData) {
                        requireRefresh = true;
                    }
                    this.getDataModule().isQueryInvokedFromData = false;
                    break;
                case 'autoFit':
                    if (this.autoFit) {
                        this.preventAdjustColumns();
                    }
                    else {
                        this.restoreAdjustColumns();
                    }
                    break;
                default:
                    this.extendedPropertyChange(prop, newProp, requireGridRefresh);
            }
        }
        if (checkCursor) {
            this.updateDefaultCursor();
        }
        if (requireGridRefresh) {
            if (freezeRefresh || this.getFrozenColumns() || this.frozenRows
                || (this.frozenLeftColumns.length || this.frozenRightColumns.length)) {
                this.freezeRefresh();
            }
            else {
                this.refresh();
            }
        }
        else if (requireRefresh) {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .modelChanged */ .AyK, args);
            requireRefresh = false;
            this.maintainSelection(newProp.selectedRowIndex);
        }
    };
    Grid.prototype.extendedPropertyChange = function (prop, newProp, requireGridRefresh) {
        switch (prop) {
            case 'enableRtl':
                this.updateRTL();
                if (this.allowPaging) {
                    this.element.querySelector('.e-gridpager').ej2_instances[0].enableRtl = newProp.enableRtl;
                    this.element.querySelector('.e-gridpager').ej2_instances[0].dataBind();
                }
                if (this.height !== 'auto') {
                    this.scrollModule.removePadding(!newProp.enableRtl);
                    this.scrollModule.setPadding();
                }
                if (this.toolbar && this.toolbarModule) {
                    this.toolbarModule.getToolbar().ej2_instances[0].enableRtl = newProp.enableRtl;
                    this.toolbarModule.getToolbar().ej2_instances[0].dataBind();
                }
                if (this.contextMenuItems && this.contextMenuModule) {
                    this.contextMenuModule.getContextMenu().ej2_instances[0].enableRtl = newProp.enableRtl;
                    this.contextMenuModule.getContextMenu().ej2_instances[0].dataBind();
                }
                if (this.showColumnMenu && this.columnMenuModule && !this.enableAdaptiveUI) {
                    this.columnMenuModule.getColumnMenu().ej2_instances[0].enableRtl = newProp.enableRtl;
                    this.columnMenuModule.getColumnMenu().ej2_instances[0].dataBind();
                }
                if (this.filterSettings.type === 'FilterBar' && this.filterSettings.showFilterBarOperator) {
                    this.refreshHeader();
                }
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .rtlUpdated */ .mkw, {});
                break;
            case 'enableAltRow':
                this.renderModule.refresh();
                break;
            case 'allowResizing':
                if (this.resizeModule) {
                    this.resizeModule.render();
                }
                this.headerModule.refreshUI();
                this.updateResizeLines();
                break;
            case 'rowHeight':
                if (this.rowHeight) {
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([this.element], 'e-grid-min-height');
                }
                else {
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([this.element], 'e-grid-min-height');
                }
                this.renderModule.refresh();
                this.headerModule.refreshUI();
                break;
            case 'gridLines':
                this.updateGridLines();
                break;
            case 'showColumnMenu':
                this.headerModule.refreshUI();
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'columnMenu', enable: true });
                break;
            case 'columnMenuItems':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'columnMenu', enable: this.columnMenuItems });
                break;
            case 'contextMenuItems':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'contextMenu', enable: this.contextMenuItems });
                break;
            case 'showColumnChooser':
                if (this.toolbarModule) {
                    this.toolbarModule.refreshToolbarItems();
                }
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .uiUpdate */ .yPb, { module: 'columnChooser', enable: this.showColumnChooser });
                break;
            case 'filterSettings':
                this.updateStackedFilter();
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'filter', properties: newProp.filterSettings });
                break;
            case 'searchSettings':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'search', properties: newProp.searchSettings });
                break;
            case 'sortSettings':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'sort' });
                break;
            case 'selectionSettings':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'selection', properties: newProp.selectionSettings });
                break;
            case 'editSettings':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'edit', properties: newProp.editSettings });
                break;
            case 'allowTextWrap':
            case 'textWrapSettings':
                if (this.allowTextWrap) {
                    this.applyTextWrap();
                }
                else {
                    this.removeTextWrap();
                }
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .freezeRender */ .kuM, { case: 'textwrap', isModeChg: (prop === 'textWrapSettings') });
                this.refreshHeader();
                if (this.height === '100%') {
                    this.scrollModule.refresh();
                }
                break;
            case 'dataSource':
                // eslint-disable-next-line no-case-declarations
                var requestPendingState = this.getDataModule().getState();
                if (this.allowPaging && this.pageSettings.pageSizes && !this.getDataModule().isRemote()
                    && !(requestPendingState && requestPendingState.isPending)) {
                    if (this.pagerModule.pagerObj.isAllPage) {
                        var count = this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__/* .DataManager */ .M ? this.dataSource.dataSource.json.length :
                            'result' in this.dataSource ? this.dataSource.count : this.dataSource.length;
                        var isAllPage = Array.isArray(this.pageSettings.pageSizes) &&
                            this.pageSettings.pageSizes.indexOf('All') > -1 ? true : this.pageSettings.pageSizes;
                        if (!isAllPage && this.pageSettings.pageSize !== count) {
                            this.pagerModule.pagerObj.isAllPage = false;
                        }
                        else {
                            this.setProperties({ pageSettings: { pageSize: count } }, true);
                            this.pagerModule.pagerObj.setProperties({ pageSize: count }, true);
                        }
                    }
                }
                if (this.allowSelection && this.isPersistSelection && !(requestPendingState && requestPendingState.isPending)) {
                    this.clearSelection();
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.dataSource) && this.dataSource.result) {
                    this.isVirtualAdaptive = false;
                }
                if (Object.getPrototypeOf(newProp).deepWatch) {
                    var pKeyField = this.getPrimaryKeyFieldNames()[0];
                    for (var i = 0, props = Object.keys(newProp.dataSource); i < props.length; i++) {
                        this.setRowData((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getValue */ ._W)(pKeyField, this.dataSource[props[parseInt(i.toString(), 10)]]), this.dataSource[props[parseInt(i.toString(), 10)]]);
                    }
                }
                else if (requestPendingState.isPending) {
                    var gResult = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.dataSource) ? this.dataSource.result : [];
                    var names = (requestPendingState.group || []);
                    if (names.length && !this.groupSettings.enableLazyLoading && !(gResult.length && gResult[0].field)) {
                        for (var i = 0; i < names.length; i++) {
                            gResult = _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_12__/* .DataUtil */ .$.group(gResult, names[parseInt(i.toString(), 10)], requestPendingState.aggregates
                                || []);
                        }
                    }
                    this.dataSource = {
                        result: gResult, count: this.dataSource.count,
                        aggregates: this.dataSource.aggregates
                    };
                    this.getDataModule().setState({});
                    requestPendingState.resolver(this.dataSource);
                }
                else {
                    if ((!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.dataSource) && this.dataSource.result
                        && this.dataSource.count && this.groupSettings.columns.length)) {
                        var gResult = this.dataSource.result;
                        var names = this.groupSettings.columns;
                        if (names.length && !(gResult.length && gResult[0].field)) {
                            for (var i = 0; i < names.length; i++) {
                                gResult = _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_12__/* .DataUtil */ .$.group(gResult, names[parseInt(i.toString(), 10)]);
                            }
                        }
                        this.dataSource = {
                            result: gResult, count: this.dataSource.count
                        };
                    }
                    this.getDataModule().setState({ isDataChanged: false });
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .dataSourceModified */ .dZ5, {});
                    if (!requireGridRefresh) {
                        this.renderModule.refresh();
                        if (this.isCheckBoxSelection) {
                            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .beforeRefreshOnDataChange */ .eAe, {});
                        }
                    }
                }
                this.scrollRefresh();
                break;
            case 'enableHover':
                // eslint-disable-next-line no-case-declarations
                var action = newProp.enableHover ? _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy;
                action([this.element], 'e-gridhover');
                break;
            case 'selectedRowIndex':
                if (!this.isSelectedRowIndexUpdating) {
                    this.selectRow(newProp.selectedRowIndex);
                }
                this.isSelectedRowIndexUpdating = false;
                break;
            case 'resizeSettings':
                this.widthService.setWidthToTable();
                break;
            case 'enableAdaptiveUI':
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .setFullScreenDialog */ .omZ, {});
                break;
            case 'rowRenderingMode':
                this.enableVerticalRendering();
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .rowModeChange */ .iMW, {});
                this.refresh();
                break;
            case 'enableStickyHeader':
                this.scrollModule.addStickyListener(newProp.enableStickyHeader);
                break;
            case 'allowPdfExport':
                if (this.toolbarModule) {
                    this.toolbarModule.refreshToolbarItems();
                }
                break;
            case 'allowExcelExport':
                if (this.toolbarModule) {
                    this.toolbarModule.refreshToolbarItems();
                }
                break;
        }
    };
    Grid.prototype.maintainSelection = function (index) {
        var _this_1 = this;
        if (index !== -1) {
            var fn_1 = function () {
                _this_1.selectRow(index);
                _this_1.off(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .contentReady */ .PRb, fn_1);
            };
            this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .contentReady */ .PRb, fn_1, this);
        }
    };
    /**
     * @param {Object} prop - Defines the property
     * @param {boolean} muteOnChange - Defines the mute on change
     * @returns {void}
     * @private
     */
    Grid.prototype.setProperties = function (prop, muteOnChange) {
        _super.prototype.setProperties.call(this, prop, muteOnChange);
        var filterSettings = 'filterSettings';
        if (prop["" + filterSettings] && this.filterModule && muteOnChange) {
            this.filterModule.refreshFilter();
        }
    };
    /**
     * @hidden
     * @returns {number} - Returns the tables count
     */
    Grid.prototype.getTablesCount = function () {
        return this.tablesCount;
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.updateDefaultCursor = function () {
        var headerCells = [].slice.call(this.getHeaderContent().querySelectorAll('.e-headercell:not(.e-stackedheadercell)'));
        var stdHdrCell = [].slice.call(this.getHeaderContent().getElementsByClassName('e-stackedheadercell'));
        var cols = this.getColumns();
        for (var i = 0; i < headerCells.length; i++) {
            var cell = headerCells[parseInt(i.toString(), 10)];
            var column = cols[parseInt(i.toString(), 10)];
            if ((this.allowGrouping && column.allowGrouping) || (this.allowReordering && column.allowReordering)
                || (this.allowSorting && column.allowSorting)) {
                cell.classList.add('e-mousepointer');
            }
            else {
                cell.classList.add('e-defaultcursor');
            }
        }
        for (var count = 0; count < stdHdrCell.length; count++) {
            if (this.allowReordering) {
                stdHdrCell[parseInt(count.toString(), 10)].classList.add('e-mousepointer');
            }
        }
    };
    Grid.prototype.updateColumnModel = function (columns, isRecursion) {
        for (var i = 0, len = (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(columns) ? columns.length : 0); i < len; i++) {
            if (columns[parseInt(i.toString(), 10)].columns) {
                this.updateColumnModel(columns[parseInt(i.toString(), 10)].columns, true);
            }
            else {
                this.columnModel.push(columns[parseInt(i.toString(), 10)]);
            }
        }
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(isRecursion) || !isRecursion) {
            this.updateLockableColumns();
        }
    };
    Grid.prototype.getFrozenLeftCount = function () {
        return this.getFrozenColumns() || this.getFrozenLeftColumnsCount();
    };
    Grid.prototype.isFrozenGrid = function () {
        return this.getFrozenColumns() !== 0 || this.frozenLeftColumns.length !== 0 || this.frozenRightColumns.length !== 0 ||
            this.fixedColumns.length !== 0;
    };
    Grid.prototype.getFrozenMode = function () {
        return this.frozenName;
    };
    Grid.prototype.updateLockableColumns = function () {
        var cols = this.columnModel;
        var frozenCount = 0;
        var movableCount = 0;
        var frozenColumns = this.getFrozenColumns();
        for (var i = 0; i < cols.length; i++) {
            if (cols[parseInt(i.toString(), 10)].lockColumn) {
                if (i < frozenColumns) {
                    cols.splice(frozenCount, 0, cols.splice(i, 1)[0]);
                    frozenCount++;
                }
                else {
                    cols.splice(frozenColumns + movableCount, 0, cols.splice(i, 1)[0]);
                    movableCount++;
                }
            }
        }
    };
    Grid.prototype.checkLockColumns = function (cols) {
        for (var i = 0; i < cols.length; i++) {
            if (cols[parseInt(i.toString(), 10)].columns) {
                this.checkLockColumns(cols[parseInt(i.toString(), 10)].columns);
            }
            else if (cols[parseInt(i.toString(), 10)].lockColumn) {
                this.lockcolPositionCount++;
            }
        }
    };
    /**
     * @param {string} position - specifies position
     * @returns {number} returns the width
     * @hidden
     */
    Grid.prototype.leftrightColumnWidth = function (position) {
        var cols = position === 'left' ? this.getFrozenLeftColumns() : position === 'right' ? this.getFrozenRightColumns() : [];
        var width = 0;
        cols.filter(function (col) {
            if (col.visible) {
                width += parseInt(col.width.toString(), 10);
            }
        });
        return width;
    };
    /**
     * Gets the columns from the Grid.
     *
     * @param {boolean} isRefresh - Defines the boolean whether to refresh
     * @returns {Column[]} - returns the column
     */
    Grid.prototype.getColumns = function (isRefresh) {
        var _this_1 = this;
        var inview = this.inViewIndexes.map(function (v) { return v - _this_1.groupSettings.columns.length; }).filter(function (v) { return v > -1; });
        var vLen = inview.length;
        if (!this.enableColumnVirtualization || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.columnModel) || this.columnModel.length === 0 || isRefresh) {
            this.columnModel = [];
            this.updateColumnModel(this.columns);
        }
        var columns = vLen === 0 ? this.columnModel :
            this.getVisibleColumns().slice(inview[0], inview[vLen - 1] + 1);
        var left = [];
        var right = [];
        var movable = [];
        var isLeftRightFrozen = this.enableColumnVirtualization && this.isPreparedFrozenColumns && vLen === 0;
        if (isLeftRightFrozen) {
            this.frozenRightColumns = [];
            this.frozenLeftColumns = [];
        }
        for (var i = 0; i < columns.length; i++) {
            if (columns[parseInt(i.toString(), 10)].freeze === 'Left' || columns[parseInt(i.toString(), 10)].isFrozen) {
                left.push(columns[parseInt(i.toString(), 10)]);
                if (isLeftRightFrozen) {
                    this.frozenLeftColumns.push(columns[parseInt(i.toString(), 10)]);
                }
            }
            else if (columns[parseInt(i.toString(), 10)].freeze === 'Right') {
                right.push(columns[parseInt(i.toString(), 10)]);
                if (isLeftRightFrozen) {
                    this.frozenRightColumns.push(columns[parseInt(i.toString(), 10)]);
                }
            }
            else {
                movable.push(columns[parseInt(i.toString(), 10)]);
            }
        }
        if (this.enableColumnVirtualization && this.isFrozenGrid()) {
            if (this.frozenLeftColumns.length) {
                left = this.frozenLeftColumns;
            }
            if (this.frozenRightColumns.length) {
                right = this.frozenRightColumns;
            }
        }
        return left.concat(movable).concat(right);
    };
    /**
     * @private
     * @param {string} stackedHeader - Defines the stacked header
     * @param {Column[]} col - Defines the column
     * @returns {Column} Returns the Column
     */
    Grid.prototype.getStackedHeaderColumnByHeaderText = function (stackedHeader, col) {
        for (var i = 0; i < col.length; i++) {
            var individualColumn = col[parseInt(i.toString(), 10)];
            if (individualColumn.field === stackedHeader || individualColumn.headerText === stackedHeader) {
                this.stackedColumn = individualColumn;
                break;
            }
            else if (individualColumn.columns) {
                this.getStackedHeaderColumnByHeaderText(stackedHeader, individualColumn.columns);
            }
        }
        return this.stackedColumn;
    };
    /**
     * @private
     * @returns {number[]} Returns the column indexes
     */
    Grid.prototype.getColumnIndexesInView = function () {
        return this.inViewIndexes;
    };
    /**
     * @private
     * @returns {Query} - returns the query
     */
    Grid.prototype.getQuery = function () {
        return this.query;
    };
    /**
     * @private
     * @returns {object} - returns the locale constants
     */
    Grid.prototype.getLocaleConstants = function () {
        return this.defaultLocale;
    };
    /**
     * @param {number[]} indexes - specifies the indexes
     * @returns {void}
     * @private
     */
    Grid.prototype.setColumnIndexesInView = function (indexes) {
        this.inViewIndexes = indexes;
    };
    /**
     * Gets the visible columns from the Grid.
     *
     * @returns {Column[]} returns the column
     */
    Grid.prototype.getVisibleColumns = function () {
        return this.getCurrentVisibleColumns();
    };
    /**
     * Gets the header div of the Grid.
     *
     * @returns {Element} - Returns the element
     */
    Grid.prototype.getHeaderContent = function () {
        return this.headerModule.getPanel();
    };
    /**
     * Sets the header div of the Grid to replace the old header.
     *
     * @param  {Element} element - Specifies the Grid header.
     *
     * @returns {void}
     */
    Grid.prototype.setGridHeaderContent = function (element) {
        this.headerModule.setPanel(element);
    };
    /**
     * Gets the content table of the Grid.
     *
     * @returns {Element} - Returns the element
     */
    Grid.prototype.getContentTable = function () {
        return this.contentModule.getTable();
    };
    /**
     * Sets the content table of the Grid to replace the old content table.
     *
     * @param  {Element} element - Specifies the Grid content table.
     *
     * @returns {void}
     */
    Grid.prototype.setGridContentTable = function (element) {
        this.contentModule.setTable(element);
    };
    /**
     * Gets the content div of the Grid.
     *
     * @returns {Element} Returns the element
     */
    Grid.prototype.getContent = function () {
        return this.contentModule.getPanel();
    };
    /**
     * Sets the content div of the Grid to replace the old Grid content.
     *
     * @param  {Element} element - Specifies the Grid content.
     *
     * @returns {void}
     */
    Grid.prototype.setGridContent = function (element) {
        this.contentModule.setPanel(element);
    };
    /**
     * Gets the header table element of the Grid.
     *
     * @returns {Element} returns the element
     */
    Grid.prototype.getHeaderTable = function () {
        return this.headerModule.getTable();
    };
    /**
     * Sets the header table of the Grid to replace the old one.
     *
     * @param  {Element} element - Specifies the Grid header table.
     *
     * @returns {void}
     */
    Grid.prototype.setGridHeaderTable = function (element) {
        this.headerModule.setTable(element);
    };
    /**
     * Gets the footer div of the Grid.
     *
     * @returns {Element} returns the element
     */
    Grid.prototype.getFooterContent = function () {
        this.footerElement = this.element.getElementsByClassName(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridFooter */ .kC)[0];
        return this.footerElement;
    };
    /**
     * Gets the footer table element of the Grid.
     *
     * @returns {Element} returns the element
     */
    Grid.prototype.getFooterContentTable = function () {
        this.footerElement = this.element.getElementsByClassName(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridFooter */ .kC)[0];
        return this.footerElement.firstChild.firstChild;
    };
    /**
     * Gets the pager of the Grid.
     *
     * @returns {Element} returns the element
     */
    Grid.prototype.getPager = function () {
        return this.gridPager; //get element from pager
    };
    /**
     * Sets the pager of the Grid to replace the old pager.
     *
     * @param  {Element} element - Specifies the Grid pager.
     *
     * @returns {void}
     */
    Grid.prototype.setGridPager = function (element) {
        this.gridPager = element;
    };
    /**
     * Gets a row by index.
     *
     * @param  {number} index - Specifies the row index.
     *
     * @returns {Element} returns the element
     */
    Grid.prototype.getRowByIndex = function (index) {
        if (this.enableVirtualization && this.groupSettings.enableLazyLoading) {
            return this.lazyLoadRender.getRowByIndex(index);
        }
        else {
            return this.contentModule.getRowByIndex(index);
        }
    };
    /**
     * Gets a movable tables row by index.
     *
     * @param  {number} index - Specifies the row index.
     *
     * @returns {Element} returns the element

     */
    Grid.prototype.getMovableRowByIndex = function (index) {
        return this.contentModule.getRowByIndex(index);
    };
    /**
     * Gets a frozen tables row by index.
     *
     * @param  {number} index - Specifies the row index.
     * @returns {Element} returns the element

     */
    Grid.prototype.getFrozenRowByIndex = function (index) {
        return this.contentModule.getRowByIndex(index);
    };
    /**
     * Gets all the data rows of the Grid.
     *
     * @returns {Element[]} returns the element
     */
    Grid.prototype.getRows = function () {
        return this.contentModule.getRowElements();
    };
    /**
     * Gets a frozen right tables row element by index.
     *
     * @param  {number} index - Specifies the row index.
     * @returns {Element} returns the element

     */
    Grid.prototype.getFrozenRightRowByIndex = function (index) {
        return this.contentModule.getRowByIndex(index);
    };
    /**
     * Get a row information based on cell
     *
     * @param {Element | EventTarget} target - specifies the element
     *
     * @returns {RowInfo} returns the row info
     */
    Grid.prototype.getRowInfo = function (target) {
        var ele = target;
        var args = { target: target };
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(target) && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(ele, 'e-detailrowcollapse')
            && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(ele, 'e-recordplusexpand')))) {
            var cell = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(ele, '.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .rowCell */ .Jt);
            if (!cell) {
                var row_1 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(ele, '.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .row */ .nM);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(row_1) && !row_1.classList.contains('e-addedrow')) {
                    var rowObj = this.getRowObjectFromUID(row_1.getAttribute('data-uid'));
                    var rowIndex = parseInt(row_1.getAttribute(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .ariaRowIndex */ .E3), 10) - 1;
                    args = { row: row_1, rowData: rowObj.data, rowIndex: rowIndex };
                }
                return args;
            }
            var cellIndex = parseInt(cell.getAttribute(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .ariaColIndex */ .ql), 10) - 1;
            var row_2 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(cell, '.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .row */ .nM);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(cell) && !isNaN(cellIndex) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(row_2)) {
                var rowIndex = parseInt(row_2.getAttribute(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .ariaRowIndex */ .E3), 10) - 1;
                var rows = this.contentModule.getRows();
                var index = cellIndex + this.getIndentCount();
                var rowsObject = rows.filter(function (r) { return r.uid === row_2.getAttribute('data-uid'); });
                var rowData = {};
                var column = void 0;
                if (Object.keys(rowsObject).length) {
                    rowData = rowsObject[0].data;
                    column = rowsObject[0].cells[parseInt(index.toString(), 10)].column;
                }
                args = { cell: cell, cellIndex: cellIndex, row: row_2, rowIndex: rowIndex, rowData: rowData, column: column, target: target };
            }
        }
        return args;
    };
    /**
     * Gets the Grid's movable content rows from frozen grid.
     *
     * @returns {Element[]} returns the element

     */
    Grid.prototype.getMovableRows = function () {
        return this.contentModule.getRowElements();
    };
    /**
     * Gets the Grid's frozen right content rows from frozen grid.
     *
     * @returns {Element[]} returns the element

     */
    Grid.prototype.getFrozenRightRows = function () {
        return this.contentModule.getRowElements();
    };
    /**
     * Gets all the Grid's data rows.
     *
     * @returns {Element[]} returns the element
     */
    Grid.prototype.getDataRows = function () {
        return this.getAllDataRows();
    };
    /**
     * @param {boolean} includeAdd - specifies includeAdd
     * @returns {Element[]} returns the element
     * @hidden
     */
    Grid.prototype.getAllDataRows = function (includeAdd) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.getContentTable().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_))) {
            return [];
        }
        var tbody = this.getContentTable().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
        var rows = [].slice.call(tbody.children);
        if (this.editSettings.showAddNewRow) {
            if (rows[0].classList.contains('e-addedrow')) {
                rows.shift();
            }
            else if (rows[rows.length - 1].classList.contains('e-addedrow')) {
                rows.pop();
            }
        }
        if (this.frozenRows) {
            var hdrTbody = this.getHeaderTable().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
            var freezeRows = [].slice.call(hdrTbody.children);
            rows = this.addMovableRows(freezeRows, rows);
            if (this.editSettings.showAddNewRow && freezeRows[0].classList.contains('e-addedrow')) {
                freezeRows.shift();
            }
        }
        var dataRows = this.generateDataRows(rows, includeAdd);
        return dataRows;
    };
    /**
     * @param {HTMLElement[]} fRows - Defines the frozen Rows
     * @param {HTMLElement[]} mrows - Defines the movable Rows
     * @returns {HTMLElement[]} Returns the element
     * @hidden
     */
    Grid.prototype.addMovableRows = function (fRows, mrows) {
        for (var i = 0, len = mrows.length; i < len; i++) {
            fRows.push(mrows[parseInt(i.toString(), 10)]);
        }
        return fRows;
    };
    Grid.prototype.generateDataRows = function (rows, includAdd) {
        var dRows = [];
        for (var i = 0, len = rows.length; i < len; i++) {
            if (rows[parseInt(i.toString(), 10)].classList.contains(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .row */ .nM)
                && (!rows[parseInt(i.toString(), 10)].classList.contains('e-hiddenrow') || includAdd)) {
                if (this.isCollapseStateEnabled()) {
                    dRows[parseInt(rows[parseInt(i.toString(), 10)].getAttribute('aria-rowindex'), 10) - 1] = rows[parseInt(i.toString(), 10)];
                }
                else {
                    dRows.push(rows[parseInt(i.toString(), 10)]);
                }
            }
        }
        return dRows;
    };
    /**
     * Gets all the Grid's movable table data rows.
     *
     * @returns {Element[]} Returns the element

     */
    Grid.prototype.getMovableDataRows = function () {
        return this.getAllMovableDataRows();
    };
    /**
     * @param {boolean} includeAdd Defines the include add in boolean
     * @returns {Element[]} Returns the element

     * @hidden
     */
    Grid.prototype.getAllMovableDataRows = function (includeAdd) {
        return this.getAllDataRows(includeAdd);
    };
    /**
     * Gets all the Grid's frozen table data rows.
     *
     * @returns {Element[]} returns the element

     */
    Grid.prototype.getFrozenDataRows = function () {
        return this.getAllFrozenDataRows();
    };
    /**
     * @param {boolean} includeAdd Defines the include add in boolean
     * @returns {Element[]} Returns the element

     * @hidden
     */
    Grid.prototype.getAllFrozenDataRows = function (includeAdd) {
        return this.getAllDataRows(includeAdd);
    };
    /**
     * Gets all the Grid's frozen right table data rows.
     *
     * @returns {Element[]} Returns the Element

     */
    Grid.prototype.getFrozenRightDataRows = function () {
        return this.getAllFrozenRightDataRows();
    };
    /**
     * @param {boolean} includeAdd Defines the include add in boolean
     * @returns {Element[]} Returns the element

     * @hidden
     */
    Grid.prototype.getAllFrozenRightDataRows = function (includeAdd) {
        return this.getAllDataRows(includeAdd);
    };
    /**
     * Updates particular cell value based on the given primary key value.
     * > Primary key column must be specified using `columns.isPrimaryKey` property.
     *
     * @param {string| number} key - Specifies the PrimaryKey value of dataSource.
     * @param {string } field - Specifies the field name which you want to update.
     * @param {string | number | boolean | Date} value - To update new value for the particular cell.
     *
     * @returns {void}
     */
    Grid.prototype.setCellValue = function (key, field, value) {
        var cells = 'cells';
        var rowData = 'data';
        var rowIdx = 'index';
        var rowuID = 'uid';
        var pkName = this.getPrimaryKeyFieldNames()[0];
        var cell = new _renderer_cell_renderer__WEBPACK_IMPORTED_MODULE_13__/* .CellRenderer */ .w(this, this.serviceLocator);
        var fieldIdx = this.getColumnIndexByField(field);
        var col = this.getColumnByField(field);
        var rowObjects = this.contentModule.getRows();
        var selectedRow = rowObjects.filter(function (r) {
            return (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getValue */ ._W)(pkName, r.data) === key;
        })[0];
        var tr = selectedRow ? this.element.querySelector('[data-uid=' + selectedRow["" + rowuID] + ']') : null;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tr)) {
            if (typeof value === 'string') {
                value = this.sanitize(value);
            }
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .setValue */ .KY)(field, value, selectedRow["" + rowData]);
            var td = this.enableVirtualization ? tr.children[parseInt(fieldIdx.toString(), 10)]
                : this.getCellFromIndex(selectedRow["" + rowIdx], fieldIdx);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(td)) {
                var Idx = 0;
                if (this.groupSettings.columns.length) {
                    fieldIdx = fieldIdx + this.groupSettings.columns.length;
                }
                if (this.childGrid || this.detailTemplate) {
                    fieldIdx++;
                }
                if (this.isRowDragable()) {
                    fieldIdx++;
                }
                var sRow = selectedRow["" + cells][fieldIdx - Idx];
                cell.refreshTD(td, sRow, selectedRow["" + rowData], { index: selectedRow["" + rowIdx] });
                if (this.isReact) {
                    td = this.enableVirtualization ? tr.children[parseInt(fieldIdx.toString(), 10)]
                        : this.getCellFromIndex(selectedRow["" + rowIdx], fieldIdx);
                }
                if (this.aggregates.length > 0) {
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshFooterRenderer */ .whj, {});
                    if (this.groupSettings.columns.length > 0) {
                        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .groupAggregates */ .a_A, {});
                    }
                }
                /* tslint:disable:no-string-literal */
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(selectedRow) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(selectedRow['changes'])) {
                    selectedRow['changes']["" + field] = value;
                }
                /* tslint:disable:no-string-literal */
                this.trigger(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .queryCellInfo */ .B55, {
                    cell: td, column: col, data: selectedRow["" + rowData]
                });
                if (this.isReact && td.getAttribute('tabindex') === '0' && td.classList.contains('e-focused')) {
                    td.focus();
                }
            }
        }
        else {
            return;
        }
    };
    /**
     * @param {string} columnUid - Defines column uid
     * @param {boolean} renderTemplates - Defines renderTemplates need to invoke
     * @returns {void}
     * @hidden
     */
    Grid.prototype.refreshReactColumnTemplateByUid = function (columnUid, renderTemplates) {
        var _this_1 = this;
        if (this.isReact) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.clearTemplate(['columnTemplate'], undefined, function () {
                var isChildGrid = _this_1.childGrid && _this_1.element.querySelectorAll('.e-childgrid').length ? true : false;
                var rows = isChildGrid ? _this_1.getContentTable().querySelectorAll('.e-row') :
                    _this_1.getDataRows();
                _this_1.refreshReactTemplateTD(rows, isChildGrid);
                if (renderTemplates) {
                    _this_1.renderTemplates();
                }
            });
        }
    };
    /**
     * @param {Element[] | NodeListOf<Element>} rows - Defines the rows
     * @param {boolean} isChildGrid - Defines whether it is a Hierarchy Grid.
     * @param {boolean} isFrozen - Defines whether it is a Frozen Grid
     * @returns {void}
     * @hidden
     */
    Grid.prototype.refreshReactTemplateTD = function (rows, isChildGrid, isFrozen) {
        var cells = 'cells';
        var rowIdx = 'index';
        var indent = this.getIndentCount();
        var childIndent = 0;
        var isChildRow = false;
        for (var j = 0; j < rows.length; j++) {
            var rowsObj = this.getRowObjectFromUID(rows[parseInt(j.toString(), 10)].getAttribute('data-uid'));
            if (isChildGrid && !rowsObj && (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(rows[parseInt(j.toString(), 10)], 'e-childgrid')) {
                var gridObj = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(rows[parseInt(j.toString(), 10)], 'e-childgrid').ej2_instances[0];
                rowsObj = gridObj.getRowObjectFromUID(rows[parseInt(j.toString(), 10)].getAttribute('data-uid'));
                childIndent = gridObj.getIndentCount();
                isChildRow = true;
            }
            if (rowsObj && rowsObj.isDataRow && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(rowsObj.index) &&
                !rows[parseInt(j.toString(), 10)].classList.contains('e-editedrow')) {
                for (var i = 0; i < rowsObj["" + cells].length; i++) {
                    var cell = rowsObj["" + cells][parseInt(i.toString(), 10)];
                    if (cell.isTemplate) {
                        var cellRenderer = new _renderer_cell_renderer__WEBPACK_IMPORTED_MODULE_13__/* .CellRenderer */ .w(this, this.serviceLocator);
                        var td = isChildGrid ? rows[parseInt(j.toString(), 10)]
                            .children[cell.index + (isChildRow ? childIndent : indent)] : this.getCellFromIndex(j, isFrozen ? cell.index : i - indent);
                        cellRenderer.refreshTD(td, cell, rowsObj.data, { index: rowsObj["" + rowIdx] });
                    }
                }
            }
            isChildRow = false;
        }
    };
    /**
     * @returns {void}
     * @hidden
     */
    Grid.prototype.refreshGroupCaptionFooterTemplate = function () {
        var isChildGrid = this.childGrid && this.element.querySelectorAll('.e-childgrid').length ? true : false;
        var rows = this.getContentTable().querySelectorAll('.e-groupcaptionrow, .e-groupfooterrow');
        for (var i = 0; i < rows.length; i++) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var gridObj = this;
            var rowsObj = this.getRowObjectFromUID(rows[parseInt(i.toString(), 10)].getAttribute('data-uid'));
            if (isChildGrid && !rowsObj && (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(rows[parseInt(i.toString(), 10)], 'e-childgrid')) {
                gridObj = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(rows[parseInt(i.toString(), 10)], 'e-childgrid').ej2_instances[0];
                rowsObj = gridObj.getRowObjectFromUID(rows[parseInt(i.toString(), 10)].getAttribute('data-uid'));
            }
            if (rowsObj) {
                var cells = rowsObj.cells.filter(function (cell) { return cell.isDataCell; });
                var args = { cells: cells, data: rowsObj.data, dataUid: rowsObj.uid };
                gridObj.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshAggregateCell */ .h7G, args);
            }
        }
    };
    /**
     * @param {string} columnUid - Defines column uid
     * @returns {void}
     * @hidden
     */
    Grid.prototype.refreshReactHeaderTemplateByUid = function (columnUid) {
        if (this.isReact) {
            var cells = 'cells';
            var rowsObj = this.headerModule.rows;
            var cellIndex = this.getNormalizedColumnIndex(columnUid);
            var _loop_1 = function (j) {
                var cell = rowsObj[parseInt(j.toString(), 10)]["" + cells][parseInt(cellIndex.toString(), 10)];
                if (cell && cell.column.uid === columnUid) {
                    var headerCellRenderer = new _renderer_header_cell_renderer__WEBPACK_IMPORTED_MODULE_14__/* .HeaderCellRenderer */ .f(this_1, this_1.serviceLocator);
                    var td = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(this_1.element.querySelectorAll('[e-mappinguid=' + columnUid + ']')[0], 'e-templatecell');
                    headerCellRenderer.refresh(cell, td);
                    var cols = this_1.sortSettings.columns;
                    var columnIndex = cols.findIndex(function (col) {
                        return col.field === cell
                            .column.field;
                    });
                    if (columnIndex !== -1) {
                        var header = this_1.getColumnHeaderByField(cell.column.field);
                        this_1.ariaService.setSort(header, (cols[parseInt(columnIndex.toString(), 10)].direction).toLowerCase());
                        if (cols.length > 1) {
                            header.querySelector('.e-headercelldiv').insertBefore(this_1.createElement('span', { className: 'e-sortnumber', innerHTML: (columnIndex + 1).toString() }), header.querySelector('.e-headertext'));
                        }
                        var filterElement = header.querySelector('.e-sortfilterdiv');
                        if (cols[parseInt(columnIndex.toString(), 10)].direction === 'Ascending') {
                            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .classList */ .pP)(filterElement, ['e-ascending', 'e-icon-ascending'], []);
                        }
                        else {
                            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .classList */ .pP)(filterElement, ['e-descending', 'e-icon-descending'], []);
                        }
                    }
                }
            };
            var this_1 = this;
            for (var j = 0; j < rowsObj.length; j++) {
                _loop_1(j);
            }
        }
    };
    /**
     * Updates and refresh the particular row values based on the given primary key value.
     * > Primary key column must be specified using `columns.isPrimaryKey` property.
     *
     * @param {string| number} key - Specifies the PrimaryKey value of dataSource.
     * @param {Object} rowData - To update new data for the particular row.
     *
     * @returns {void}
     */
    Grid.prototype.setRowData = function (key, rowData) {
        var rowuID = 'uid';
        var rowObjects = this.contentModule.getRows();
        var pkName = this.getPrimaryKeyFieldNames()[0];
        if (this.groupSettings.columns.length > 0 && this.aggregates.length > 0) {
            rowObjects = rowObjects.filter(function (row) { return row.isDataRow; });
        }
        var selectedRow = rowObjects.filter(function (r) {
            return (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .getValue */ ._W)(pkName, r.data) === key;
        })[0];
        var selectRowEle = selectedRow ? [].slice.call(this.element.querySelectorAll('[data-uid=' + selectedRow["" + rowuID] + ']')) : undefined;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(selectedRow) && selectRowEle.length) {
            selectedRow.changes = rowData;
            if (this.frozenRows) {
                var fRowTr = this.getRowsObject()[selectedRow.index];
                this.setFrozenRowData(fRowTr, rowData);
            }
            else {
                var rowElement = this.getRowElementByUID(selectedRow.uid);
                var isLastRowCell = rowElement && rowElement.querySelector('.e-lastrowcell') ? true : false;
                this.setFrozenRowData(selectedRow, rowData);
                if (isLastRowCell) {
                    this.scrollModule.setLastRowCell();
                }
            }
            if (this.aggregates.length > 0) {
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshFooterRenderer */ .whj, {});
                if (this.groupSettings.columns.length > 0) {
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .groupAggregates */ .a_A, {});
                }
            }
        }
        else {
            return;
        }
    };
    Grid.prototype.setFrozenRowData = function (fTr, rowData) {
        var rowRenderer = new _renderer_row_renderer__WEBPACK_IMPORTED_MODULE_15__/* .RowRenderer */ .k(this.serviceLocator, null, this);
        fTr.changes = rowData;
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .refreshForeignData */ .AZ)(fTr, this.getForeignKeyColumns(), fTr.changes);
        rowRenderer.refresh(fTr, this.getColumns(), true);
    };
    /**
     * Gets a cell by row and column index.
     *
     * @param  {number} rowIndex - Specifies the row index.
     * @param  {number} columnIndex - Specifies the column index.
     *
     * @returns {Element} Returns the Element
     */
    Grid.prototype.getCellFromIndex = function (rowIndex, columnIndex) {
        var col = this.getColumnByIndex(columnIndex);
        return (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .getCellByColAndRowIndex */ .lK)(this, col, rowIndex, columnIndex);
    };
    /**
     * Gets a movable table cell by row and column index.
     *
     * @param  {number} rowIndex - Specifies the row index.
     * @param  {number} columnIndex - Specifies the column index.
     *
     * @returns {Element} Returns the Element

     */
    Grid.prototype.getMovableCellFromIndex = function (rowIndex, columnIndex) {
        return this.getCellFromIndex(rowIndex, columnIndex);
    };
    /**
     * Gets a frozen right table cell by row and column index.
     *
     * @param  {number} rowIndex - Specifies the row index.
     * @param  {number} columnIndex - Specifies the column index.
     * @returns {Element} Returns the Element

     */
    Grid.prototype.getFrozenRightCellFromIndex = function (rowIndex, columnIndex) {
        return this.getCellFromIndex(rowIndex, columnIndex);
    };
    /**
     * Gets a column header by column index.
     *
     * @param  {number} index - Specifies the column index.
     *
     * @returns {Element} Returns the Element
     */
    Grid.prototype.getColumnHeaderByIndex = function (index) {
        return this.getHeaderTable().getElementsByClassName('e-headercell')[parseInt(index.toString(), 10)];
    };
    /**
     * Gets a movable column header by column index.
     *
     * @param  {number} index - Specifies the column index.
     * @returns {Element} Returns the Element

     */
    Grid.prototype.getMovableColumnHeaderByIndex = function (index) {
        return this.getColumnHeaderByIndex(index);
    };
    /**
     * Gets a frozen right column header by column index.
     *
     * @param  {number} index - Specifies the column index.
     * @returns {Element} Returns the Element

     */
    Grid.prototype.getFrozenRightColumnHeaderByIndex = function (index) {
        return this.getColumnHeaderByIndex(index);
    };
    /**
     * Gets a frozen left column header by column index.
     *
     * @param  {number} index - Specifies the column index.
     * @returns {Element} Returns the Element

     */
    Grid.prototype.getFrozenLeftColumnHeaderByIndex = function (index) {
        return this.getColumnHeaderByIndex(index);
    };
    /**
     * @param {string} uid - Defines the uid
     * @returns {Row<Column>} Returns the row object
     * @hidden
     */
    Grid.prototype.getRowObjectFromUID = function (uid) {
        var rows = this.contentModule.getRows();
        var row = this.rowObject(rows, uid);
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(row) && this.enableVirtualization && this.groupSettings.columns.length > 0) {
            row = this.rowObject(this.vRows, uid);
            return row;
        }
        return row;
    };
    Grid.prototype.rowObject = function (rows, uid) {
        if (rows) {
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                if (row.uid === uid) {
                    return row;
                }
            }
        }
        return null;
    };
    /**
     * Get an array of row objects.
     *
     * @returns {Row<Column>[]} Returns the Row object
     */
    Grid.prototype.getRowsObject = function () {
        return this.contentModule.getRows();
    };
    /**
     * @hidden
     * @returns {Row<Column>[]} Returns the Row object

     */
    Grid.prototype.getMovableRowsObject = function () {
        return this.contentModule.getRows();
    };
    /**
     * @hidden
     * @returns {Row<Column>[]} Returns the Row object

     */
    Grid.prototype.getFrozenRightRowsObject = function () {
        return this.contentModule.getRows();
    };
    /**
     * Gets a column header by column name.
     *
     * @param  {string} field - Specifies the column name.
     *
     * @returns {Element} - Returns the element
     */
    Grid.prototype.getColumnHeaderByField = function (field) {
        var column = this.getColumnByField(field);
        return column ? this.getColumnHeaderByUid(column.uid) : undefined;
    };
    /**
     * Gets a column header by UID.
     *
     * @param {string} uid - Specifies the column uid.
     *
     * @returns {Element} - Returns the element
     */
    Grid.prototype.getColumnHeaderByUid = function (uid) {
        var element = this.getHeaderContent().querySelector('[e-mappinguid=' + uid + ']');
        return element ? element.parentElement : undefined;
    };
    /**
     * @hidden
     * @param {number} index - Defines the index
     * @returns {Column} Returns the column
     */
    Grid.prototype.getColumnByIndex = function (index) {
        var column;
        this.getColumns().some(function (col, i) {
            column = col;
            return i === index;
        });
        return column;
    };
    /**
     * Gets a Column by column name.
     *
     * @param  {string} field - Specifies the column name.
     *
     * @returns {Column} Returns the column
     */
    Grid.prototype.getColumnByField = function (field) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .iterateArrayOrObject */ .mg)(this.getColumns(), function (item) {
            if (item.field === field) {
                return item;
            }
            return undefined;
        })[0];
    };
    /**
     * Gets a column index by column name.
     *
     * @param  {string} field - Specifies the column name.
     *
     * @returns {number} Returns the index by field
     */
    Grid.prototype.getColumnIndexByField = function (field) {
        var cols = this.getColumns();
        for (var i = 0; i < cols.length; i++) {
            if (cols[parseInt(i.toString(), 10)].field === field) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Gets a column by UID.
     *
     * @param  {string} uid - Specifies the column UID.
     * @param  {boolean} isColumns - Defines the all columns.
     *
     * @returns {Column} Returns the column
     */
    Grid.prototype.getColumnByUid = function (uid, isColumns) {
        var cols = isColumns ? this.columns : this.getColumns();
        return (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .iterateArrayOrObject */ .mg)(cols.concat(this.getStackedColumns(this.columns)), function (item) {
            if (item.uid === uid) {
                return item;
            }
            return undefined;
        })[0];
    };
    /**
     * @param {Column[]} columns - Defines the columns
     * @param {Column[]} stackedColumn - Defines the stacked columns
     * @returns {Column[]} Returns the columns
     * @hidden
     */
    Grid.prototype.getStackedColumns = function (columns, stackedColumn) {
        if (stackedColumn === void 0) { stackedColumn = []; }
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (column.columns) {
                stackedColumn.push(column);
                this.getStackedColumns(column.columns, stackedColumn);
            }
        }
        return stackedColumn;
    };
    /**
     * Gets a column index by UID.
     *
     * @param  {string} uid - Specifies the column UID.
     *
     * @returns {number} Returns the column by index
     */
    Grid.prototype.getColumnIndexByUid = function (uid) {
        var index = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .iterateArrayOrObject */ .mg)(this.getColumns(), function (item, index) {
            if (item.uid === uid) {
                return index;
            }
            return undefined;
        })[0];
        return !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(index) ? index : -1;
    };
    /**
     * Gets UID by column name.
     *
     * @param  {string} field - Specifies the column name.
     *
     * @returns {string} Returns the column by field
     */
    Grid.prototype.getUidByColumnField = function (field) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .iterateArrayOrObject */ .mg)(this.getColumns(), function (item) {
            if (item.field === field) {
                return item.uid;
            }
            return undefined;
        })[0];
    };
    /**
     * Gets column index by column uid value.
     *
     * @private
     * @param  {string} uid - Specifies the column uid.
     * @returns {number} Returns the column by field
     */
    Grid.prototype.getNormalizedColumnIndex = function (uid) {
        var index = this.getColumnIndexByUid(uid);
        return index + this.getIndentCount();
    };
    /**
     * Gets indent cell count.
     *
     * @private
     * @returns {number} Returns the indent count
     */
    Grid.prototype.getIndentCount = function () {
        var index = 0;
        if (this.allowGrouping) {
            index += this.groupSettings.columns.length;
        }
        if (this.isDetail()) {
            index++;
        }
        if (this.isRowDragable() && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.rowDropSettings.targetID)) {
            index++;
        }
        /**
         * TODO: index normalization based on the stacked header, grouping and detailTemplate
         * and frozen should be handled here
         */
        return index;
    };
    /**
     * Gets the collection of column fields.
     *
     * @returns {string[]} Returns the Field names
     */
    Grid.prototype.getColumnFieldNames = function () {
        var columnNames = [];
        var column;
        for (var i = 0, len = this.getColumns().length; i < len; i++) {
            column = this.getColumns()[parseInt(i.toString(), 10)];
            if (column.visible) {
                columnNames.push(column.field);
            }
        }
        return columnNames;
    };
    /**
     * Gets a compiled row template.
     *
     * @returns {Function} Returns the row TEmplate
     * @private
     */
    Grid.prototype.getRowTemplate = function () {
        return this.rowTemplateFn;
    };
    /**
     * Gets a compiled empty Record template.
     *
     * @returns {Function} Returns the empty Record template
     * @private
     */
    Grid.prototype.getEmptyRecordTemplate = function () {
        return this.emptyRecordTemplateFn;
    };
    /**
     * Gets a compiled detail row template.
     *
     * @private
     * @returns {Function} Returns the Detail template
     */
    Grid.prototype.getDetailTemplate = function () {
        return this.detailTemplateFn;
    };
    /**
     * Gets a compiled dialog edit template.
     *
     * @private
     * @returns {Function} Returns the Edit template
     */
    Grid.prototype.getEditTemplate = function () {
        return this.editTemplateFn;
    };
    /**
     * Gets a compiled dialog edit header template.
     *
     * @private
     * @returns {Function} returns template function
     */
    Grid.prototype.getEditHeaderTemplate = function () {
        return this.editHeaderTemplateFn;
    };
    /**
     * Gets a compiled dialog edit footer template.
     *
     * @private
     * @returns {Function} Returns the Footer template
     */
    Grid.prototype.getEditFooterTemplate = function () {
        return this.editFooterTemplateFn;
    };
    /**
     * Gets a compiled column chooser template.
     *
     * @private
     * @returns {Function} Returns the template
     */
    Grid.prototype.getColumnChooserTemplate = function () {
        return this.columnChooserTemplateFn;
    };
    /**
     * Gets a compiled column chooser header template.
     *
     * @private
     * @returns {Function} returns the header template
     */
    Grid.prototype.getColumnChooserHeaderTemplate = function () {
        return this.columnChooserHeaderTemplateFn;
    };
    /**
     * Gets a compiled column chooser footer template.
     *
     * @private
     * @returns {Function} Returns the Footer template
     */
    Grid.prototype.getColumnChooserFooterTemplate = function () {
        return this.columnChooserFooterTemplateFn;
    };
    /**
     * Get the names of the primary key columns of the Grid.
     *
     * @returns {string[]} Returns the field names
     */
    Grid.prototype.getPrimaryKeyFieldNames = function () {
        var keys = [];
        for (var k = 0; k < this.columnModel.length; k++) {
            if (this.columnModel[parseInt(k.toString(), 10)].isPrimaryKey) {
                keys.push(this.columnModel[parseInt(k.toString(), 10)].field);
            }
        }
        return keys;
    };
    /**
     * Refreshes the Grid header and content.
     *
     * @returns {void}
     */
    Grid.prototype.refresh = function () {
        if (!this.isDestroyed) {
            this.isManualRefresh = true;
            this.headerModule.refreshUI();
            this.updateStackedFilter();
            this.renderModule.refresh();
        }
    };
    /**
     * Refreshes the Grid header.
     *
     * @returns {void}
     */
    Grid.prototype.refreshHeader = function () {
        this.headerModule.refreshUI();
    };
    /**
     * Gets the collection of selected rows.
     *
     * @returns {Element[]} Returns the element
     */
    Grid.prototype.getSelectedRows = function () {
        return this.selectionModule ? this.selectionModule.selectedRecords : [];
    };
    /**
     * Gets the collection of selected row indexes.
     *
     * @returns {number[]} Returns the Selected row indexes
     */
    Grid.prototype.getSelectedRowIndexes = function () {
        return this.selectionModule ? this.selectionModule.selectedRowIndexes : [];
    };
    /**
     * Gets the collection of selected row and cell indexes.
     *
     * @returns {number[]} Returns the Selected row cell indexes
     */
    Grid.prototype.getSelectedRowCellIndexes = function () {
        return this.selectionModule ? this.selectionModule.selectedRowCellIndexes : [];
    };
    /**
     * Gets the collection of selected records.
     *
     * @returns {Object[]} Returns the selected records
     * @isGenericType true
     */
    Grid.prototype.getSelectedRecords = function () {
        return this.selectionModule ? this.selectionModule.getSelectedRecords() : [];
    };
    /**
     * Gets the collection of selected columns uid.
     *
     * @returns {string[]} Returns the selected column uid
     * @isGenericType true
     */
    Grid.prototype.getSelectedColumnsUid = function () {
        var _this_1 = this;
        var uid = [];
        if (this.selectionModule) {
            this.selectionModule.selectedColumnsIndexes.filter(function (i) { return uid.push(_this_1.getColumns()[parseInt(i.toString(), 10)].uid); });
        }
        return uid;
    };
    /**
     * Returns the data module used by the grid.
     *
     * Use this to access the current applied queries and data related configuration settings for the grid.
     *
     * @returns {Data} The data module currently used by the grid.
     */
    Grid.prototype.getDataModule = function () {
        return this.renderModule.data;
    };
    /**
     * Shows a column by its column name.
     *
     * @param  {string|string[]} keys - Defines a single or collection of column names.
     * @param  {string} showBy - Defines the column key either as field name or header text.
     *
     * @returns {void}
     */
    Grid.prototype.showColumns = function (keys, showBy) {
        showBy = showBy ? showBy : 'headerText';
        this.showHider.show(keys, showBy);
    };
    /**
     * Hides a column by column name.
     *
     * @param  {string|string[]} keys - Defines a single or collection of column names.
     * @param  {string} hideBy - Defines the column key either as field name or header text.
     *
     * @returns {void}
     */
    Grid.prototype.hideColumns = function (keys, hideBy) {
        hideBy = hideBy ? hideBy : 'headerText';
        this.showHider.hide(keys, hideBy);
    };
    /**
     * @hidden
     * @returns {number} Returns the Frozen column
     */
    Grid.prototype.getFrozenColumns = function () {
        return this.frozenColumns + this.getFrozenCount(this.columns, 0, 0);
    };
    /**
     * @hidden
     * @returns {number} Returns the Frozen Right column count
     */
    Grid.prototype.getFrozenRightColumnsCount = function () {
        return this.frozenRightCount || this.rightcount;
    };
    /**
     * @hidden
     * @returns {number} Returns the Frozen Left column
     */
    Grid.prototype.getFrozenLeftColumnsCount = function () {
        return this.frozenLeftCount || this.leftcount;
    };
    /**
     * @hidden
     * @returns {number} Returns the movable column count
     */
    Grid.prototype.getMovableColumnsCount = function () {
        return this.movableCount || this.movablecount;
    };
    Grid.prototype.updateFrozenColumnsWidth = function () {
        if (this.isFrozenGrid() && !this.enableColumnVirtualization) {
            var gcol = this.getColumns();
            var isAutoWidth = true;
            var autoCol_1 = 0;
            var difference_1 = 0;
            var autoWidth_1 = 0;
            var isFrozenAuto = gcol.some(function (data) {
                return (data.freeze === 'Left' || data.freeze === 'Right'
                    || data.freeze === 'Fixed' || data.isFrozen) && data.width === 'auto';
            });
            var _loop_2 = function (i) {
                var col = gcol[parseInt(i.toString(), 10)];
                if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(col.width) && (col.freeze === 'Left' || col.freeze === 'Right' || col.freeze === 'Fixed' || col.isFrozen)) {
                    col.width = Math.max(200, col.minWidth ? parseFloat(col.minWidth.toString()) : 0);
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(col.maxWidth) && parseFloat(col.maxWidth.toString()) < col.width) {
                        col.width = col.maxWidth;
                    }
                }
                if (col.width === 'auto' && isFrozenAuto) {
                    var tWidth_1 = 0;
                    if (isAutoWidth) {
                        gcol.filter(function (cols) {
                            if (cols.visible) {
                                if (cols.width === 'auto') {
                                    autoCol_1++;
                                }
                                if (cols.width !== 'auto') {
                                    var width = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(cols.width) ? parseFloat(cols.width.toString()) :
                                        Math.max(200, cols.minWidth ? parseFloat(cols.minWidth.toString()) : 0);
                                    tWidth_1 += width;
                                }
                            }
                        });
                        var gWidth = this_2.isPercentageWidthGrid() || this_2.width === 'auto' ? this_2.element.getBoundingClientRect().width :
                            parseFloat(this_2.width.toString());
                        difference_1 = this_2.height === 'auto' ? gWidth - tWidth_1 : ((gWidth - tWidth_1) - (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .getScrollBarWidth */ .F_)());
                        if (difference_1 < 0) {
                            difference_1 = 0;
                        }
                        autoWidth_1 = parseFloat((difference_1 / autoCol_1).toString());
                        gcol.filter(function (col) {
                            if (col.visible) {
                                if (col.minWidth && parseFloat(col.minWidth.toString()) > autoWidth_1) {
                                    difference_1 = difference_1 - parseFloat(col.minWidth.toString());
                                    autoCol_1--;
                                }
                            }
                        });
                        isAutoWidth = false;
                    }
                    if (col.minWidth && parseFloat(col.minWidth.toString()) > autoWidth_1) {
                        col.width = parseFloat(col.minWidth.toString());
                    }
                    else {
                        col.width = difference_1 / autoCol_1;
                    }
                }
            };
            var this_2 = this;
            for (var i = 0; i < gcol.length; i++) {
                _loop_2(i);
            }
        }
    };
    Grid.prototype.refreshSplitFrozenColumn = function () {
        this.splitFrozenCount(this.columns);
        this.updateFrozenColumnsWidth();
        this.isAutoGenerateColumns = true;
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.setFrozenCount = function () {
        this.frozenLeftCount = this.frozenRightCount = this.movableCount = 0;
        this.visibleFrozenLeft = this.visibleFrozenRight = this.visibleMovable = 0;
        this.frozenLeftColumns = [];
        this.frozenRightColumns = [];
        this.movableColumns = [];
        this.fixedColumns = [];
        this.splitFrozenCount(this.columns);
        this.leftcount = this.frozenLeftCount;
        this.rightcount = this.frozenRightCount;
        this.movablecount = this.movableCount;
        // if (this.frozenColumns && (this.frozenLeftCount || this.frozenRightCount)) {
        //     this.setProperties({ frozenColumns: 0 }, true);
        // }
        if (this.frozenLeftCount && !this.frozenRightCount) {
            this.frozenName = 'Left';
        }
        else if (this.frozenRightCount && !this.frozenLeftCount) {
            this.frozenName = 'Right';
        }
        else if (this.frozenLeftCount && this.frozenRightCount) {
            this.frozenName = 'Left-Right';
        }
        else if (this.frozenColumns || this.frozenRows) {
            this.frozenName = 'Left';
        }
        else {
            this.frozenName = undefined;
        }
    };
    /**
     * @hidden
     * @returns {number} Returns the visible Frozen left count
     */
    Grid.prototype.getVisibleFrozenLeftCount = function () {
        return this.visibleFrozenLeft;
    };
    /**
     * @hidden
     * @returns {number} Returns the visible Frozen Right count
     */
    Grid.prototype.getVisibleFrozenRightCount = function () {
        return this.visibleFrozenRight;
    };
    /**
     * @hidden
     * @returns {number} Returns the visible movable count
     */
    Grid.prototype.getVisibleMovableCount = function () {
        return this.visibleMovable;
    };
    /**
     * @hidden
     * @returns {Column[]} Returns the column
     */
    Grid.prototype.getFrozenRightColumns = function () {
        return this.frozenRightColumns;
    };
    /**
     * @hidden
     * @returns {Column[]} Returns the column
     */
    Grid.prototype.getFrozenLeftColumns = function () {
        return this.frozenLeftColumns;
    };
    /**
     * @hidden
     * @returns {Column[]} Returns the column
     */
    Grid.prototype.getMovableColumns = function () {
        return this.movableColumns;
    };
    Grid.prototype.splitStackedColumns = function (columns) {
        for (var i = 0; i < columns.length; i++) {
            if (columns[parseInt(i.toString(), 10)].columns) {
                this.splitStackedColumns(columns[parseInt(i.toString(), 10)].columns);
            }
            else {
                if (columns[parseInt(i.toString(), 10)].freeze === 'Left' || columns[parseInt(i.toString(), 10)].isFrozen) {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleFrozenLeft++;
                    }
                    this.leftcount++;
                }
                else if (columns[parseInt(i.toString(), 10)].freeze === 'Right') {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleFrozenRight++;
                    }
                    this.rightcount++;
                }
                else if (columns[parseInt(i.toString(), 10)].freeze === 'Fixed') {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleFrozenFixed++;
                    }
                    this.fixedcount++;
                }
                else {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleMovable++;
                    }
                    this.movablecount++;
                }
            }
        }
    };
    Grid.prototype.pushStackedColumns = function (columns, index, arr, col, stackedcol) {
        arr[parseInt(index.toString(), 10)] = { headerText: col.headerText };
        if (col.textAlign) {
            arr[parseInt(index.toString(), 10)].textAlign = col.textAlign;
        }
        if (col.customAttributes) {
            arr[parseInt(index.toString(), 10)].customAttributes = col.customAttributes;
        }
        for (var i = 0; i < columns.length; i++) {
            if (columns[parseInt(i.toString(), 10)].columns) {
                index = index + 1;
                this.pushStackedColumns(columns[parseInt(i.toString(), 10)].columns, index, arr, columns[parseInt(i.toString(), 10)], stackedcol);
                index = index - 1;
            }
            else {
                var stockCol = [];
                stockCol = arr.slice().slice(0, index + 1);
                if (columns[parseInt(i.toString(), 10)].freeze === 'Left' || columns[parseInt(i.toString(), 10)].isFrozen) {
                    this.stackedLeft.push(stockCol);
                    this.stackedarrayLeft.push(columns[parseInt(i.toString(), 10)]);
                }
                else if (columns[parseInt(i.toString(), 10)].freeze === 'Right') {
                    this.stackedRight.push(stockCol);
                    this.stackedarrayRight.push(columns[parseInt(i.toString(), 10)]);
                }
                else if (columns[parseInt(i.toString(), 10)].freeze === 'Fixed') {
                    this.stackedFixed.push(stockCol);
                    this.stackedarrayFixed.push(columns[parseInt(i.toString(), 10)]);
                }
                else {
                    this.stackedMovable.push(stockCol);
                    this.stackedarrayMovable.push(columns[parseInt(i.toString(), 10)]);
                }
            }
        }
    };
    Grid.prototype.pushallcol = function (text, text1, col, columns, isTrue) {
        if (col.headerText === text1.headerText) {
            if (isTrue) {
                col.columns.push(columns);
            }
            else {
                var newColumn = { headerText: text.headerText, columns: [] };
                if (text.textAlign) {
                    newColumn.textAlign = text.textAlign;
                }
                if (text.customAttributes) {
                    newColumn.customAttributes = text.customAttributes;
                }
                col.columns.push(newColumn);
            }
        }
        else {
            if (col.columns && col.columns.length) {
                for (var i = 0; i < col.columns.length; i++) {
                    this.pushallcol(text, text1, col.columns[parseInt(i.toString(), 10)], columns, isTrue);
                }
            }
        }
    };
    Grid.prototype.resetStackedColumns = function (headercol, gridcolumns, freeze) {
        var col = {};
        var tempHead = [];
        for (var i = 1; i <= headercol.length; i++) {
            var firstcol = headercol[i - 1];
            for (var j = 0; j < firstcol.length; j++) {
                if (!col.columns && i === 1) {
                    col = { headerText: firstcol[parseInt(j.toString(), 10)].headerText,
                        textAlign: firstcol[parseInt(j.toString(), 10)].textAlign,
                        customAttributes: firstcol[parseInt(j.toString(), 10)].customAttributes, columns: [] };
                    tempHead.push(firstcol[parseInt(j.toString(), 10)]);
                }
                else {
                    if (tempHead.indexOf(firstcol[parseInt(j.toString(), 10)]) === -1) {
                        this.pushallcol(firstcol[parseInt(j.toString(), 10)], firstcol[j - 1], col);
                        tempHead.push(firstcol[parseInt(j.toString(), 10)]);
                    }
                }
                if (j === firstcol.length - 1) {
                    this.pushallcol(null, firstcol[parseInt(j.toString(), 10)], col, gridcolumns[i - 1], true);
                    var count = 0;
                    while (count !== headercol.length - 1 && i !== headercol.length) {
                        var firstColHeaders = firstcol.map(function (col) {
                            return col.headerText;
                        }).join(', ');
                        var headerColHeaders = headercol[parseInt(i.toString(), 10)].map(function (item) { return item.headerText; }).join(', ');
                        if (firstColHeaders === headerColHeaders) {
                            i++;
                            this.pushallcol(null, firstcol[parseInt(j.toString(), 10)], col, gridcolumns[i - 1], true);
                        }
                        count++;
                    }
                }
            }
        }
        if (freeze === 'Left') {
            this.frozenLeftColumns.push(col);
        }
        else if (freeze === 'Right') {
            this.frozenRightColumns.push(col);
        }
        else {
            this.movableColumns.push(col);
        }
    };
    Grid.prototype.splitFrozenCount = function (columns) {
        if (this.frozenColumns || (this.changedProperties && this.changedProperties.frozenColumns === 0)) {
            var cols = !this.enableColumnVirtualization || (this.enableColumnVirtualization && this.isPreparedFrozenColumns) ?
                this.enableColumnVirtualization && this.columnModel && this.columnModel.length ? this.columnModel :
                    this.getColumns() : this.columns;
            if (!this.changedProperties || (this.changedProperties && !this.changedProperties.frozenColumns)) {
                for (var i = 0; i < cols.length; i++) {
                    if (this.frozenColumns > i) {
                        cols[parseInt(i.toString(), 10)].freeze = 'Left';
                    }
                    else if (cols[parseInt(i.toString(), 10)].freeze === 'Right' || cols[parseInt(i.toString(), 10)].freeze === 'Fixed') {
                        cols[parseInt(i.toString(), 10)].freeze = cols[parseInt(i.toString(), 10)].freeze;
                    }
                    else {
                        cols[parseInt(i.toString(), 10)].freeze = undefined;
                    }
                }
            }
        }
        for (var i = 0; i < (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(columns) ? columns.length : 0); i++) {
            if (columns[parseInt(i.toString(), 10)].columns) {
                this.leftcount = 0;
                this.rightcount = 0;
                this.movablecount = 0;
                this.fixedcount = 0;
                var arr = [];
                this.splitStackedColumns(columns[parseInt(i.toString(), 10)].columns);
                if (this.leftcount && !this.rightcount && !this.movablecount && !this.fixedcount) {
                    this.frozenLeftCount += this.leftcount;
                    this.frozenLeftColumns.push(columns[parseInt(i.toString(), 10)]);
                }
                else if (this.rightcount && !this.leftcount && !this.movablecount && !this.fixedcount) {
                    this.frozenRightCount += this.rightcount;
                    this.frozenRightColumns.push(columns[parseInt(i.toString(), 10)]);
                }
                else if (this.movablecount && !this.leftcount && !this.rightcount && !this.fixedcount) {
                    this.movableCount += this.movablecount;
                    this.movableColumns.push(columns[parseInt(i.toString(), 10)]);
                }
                else if (this.fixedcount && !this.leftcount && !this.rightcount && !this.movablecount) {
                    this.fixedCount += this.fixedcount;
                    this.fixedColumns.push(columns[parseInt(i.toString(), 10)]);
                    this.movableCount += this.movablecount;
                    this.movableColumns.push(columns[parseInt(i.toString(), 10)]);
                }
                else {
                    this.frozenLeftCount += this.leftcount;
                    this.frozenRightCount += this.rightcount;
                    this.movableCount += this.movablecount;
                    this.fixedCount += this.fixedcount;
                    this.leftcount = 0;
                    this.rightcount = 0;
                    this.movablecount = 0;
                    this.fixedcount = 0;
                    this.stackedLeft = [];
                    this.stackedRight = [];
                    this.stackedFixed = [];
                    this.stackedMovable = [];
                    this.stackedarrayLeft = [];
                    this.stackedarrayRight = [];
                    this.stackedarrayFixed = [];
                    this.stackedarrayMovable = [];
                    this.pushStackedColumns(columns[parseInt(i.toString(), 10)].columns, 0, arr, columns[parseInt(i.toString(), 10)], { headerText: columns[parseInt(i.toString(), 10)].headerText,
                        textAlign: columns[parseInt(i.toString(), 10)].textAlign,
                        customAttributes: columns[parseInt(i.toString(), 10)].customAttributes, columns: [] });
                    if (this.stackedarrayLeft.length) {
                        this.resetStackedColumns(this.stackedLeft, this.stackedarrayLeft, 'Left');
                    }
                    if (this.stackedarrayRight.length) {
                        this.resetStackedColumns(this.stackedRight, this.stackedarrayRight, 'Right');
                    }
                    if (this.stackedarrayFixed.length) {
                        this.resetStackedColumns(this.stackedFixed, this.stackedarrayFixed, 'Fixed');
                    }
                    if (this.stackedarrayMovable.length) {
                        this.resetStackedColumns(this.stackedMovable, this.stackedarrayMovable, 'Movable');
                    }
                    this.stackedLeft = [];
                    this.stackedRight = [];
                    this.stackedMovable = [];
                    this.stackedFixed = [];
                    this.stackedarrayLeft = [];
                    this.stackedarrayRight = [];
                    this.stackedarrayMovable = [];
                    this.stackedarrayFixed = [];
                }
            }
            else {
                if (columns[parseInt(i.toString(), 10)].freeze === 'Right') {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleFrozenRight++;
                    }
                    this.frozenRightColumns.push(columns[parseInt(i.toString(), 10)]);
                    this.frozenRightCount++;
                }
                else if (columns[parseInt(i.toString(), 10)].freeze === 'Left' || columns[parseInt(i.toString(), 10)].isFrozen) {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleFrozenLeft++;
                    }
                    this.frozenLeftColumns.push(columns[parseInt(i.toString(), 10)]);
                    this.frozenLeftCount++;
                }
                else if (columns[parseInt(i.toString(), 10)].freeze === 'Fixed') {
                    this.fixedColumns.push(columns[parseInt(i.toString(), 10)]);
                    this.fixedCount++;
                    this.movableColumns.push(columns[parseInt(i.toString(), 10)]);
                    this.movableCount++;
                }
                else {
                    if (columns[parseInt(i.toString(), 10)].visible !== false) {
                        this.visibleMovable++;
                    }
                    this.movableColumns.push(columns[parseInt(i.toString(), 10)]);
                    this.movableCount++;
                }
            }
        }
        if (this.frozenLeftColumns.length) {
            var cols = this.frozenLeftColumns[this.frozenLeftColumns.length - 1];
            this.removeBorder(this.frozenLeftColumns);
            this.frozenLeftBorderColumns(cols instanceof _models_column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .VP ? this.lastVisibleLeftCol(this.frozenLeftColumns) : cols);
        }
        if (this.frozenRightColumns.length) {
            var cols = this.frozenRightColumns[0];
            this.removeBorder(this.frozenRightColumns);
            this.frozenRightBorderColumns(cols instanceof _models_column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .VP ? this.firstVisibleRightCol(this.frozenRightColumns) : cols);
        }
        if ((this.frozenLeftColumns.length || this.frozenRightColumns.length) && this.freezeColumnRefresh) {
            var cols = (this.frozenLeftColumns.concat(this.movableColumns)).concat(this.frozenRightColumns);
            this.setProperties({ columns: cols }, true);
            this.freezeColumnRefresh = false;
        }
    };
    Grid.prototype.removeBorder = function (columns) {
        for (var i = 0; i < columns.length; i++) {
            if (columns[parseInt(i.toString(), 10)].columns && columns[parseInt(i.toString(), 10)].columns.length) {
                if (columns[parseInt(i.toString(), 10)].border === 'Right' ||
                    columns[parseInt(i.toString(), 10)].border === 'Left') {
                    columns[parseInt(i.toString(), 10)].border = undefined;
                }
                this.removeBorder(columns[parseInt(i.toString(), 10)].columns);
            }
            else {
                if (columns[parseInt(i.toString(), 10)].border === 'Right' ||
                    columns[parseInt(i.toString(), 10)].border === 'Left') {
                    columns[parseInt(i.toString(), 10)].border = undefined;
                }
            }
        }
    };
    Grid.prototype.isVisibleColumns = function (column, arr) {
        if (column.columns && column.columns.length) {
            for (var i = 0; i < column.columns.length; i++) {
                this.isVisibleColumns(column.columns[parseInt(i.toString(), 10)], arr);
                if (column.columns[parseInt(i.toString(), 10)].visible &&
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(column.columns[parseInt(i.toString(), 10)].columns) &&
                    (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(column.columns[parseInt(i.toString(), 10)].freeze) ||
                        column.columns[parseInt(i.toString(), 10)].isFrozen)) {
                    arr.push('true');
                }
            }
        }
        else {
            if (column.visible && (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(column.freeze) || column.isFrozen)) {
                arr.push('true');
            }
        }
    };
    Grid.prototype.lastVisibleLeftCol = function (columns) {
        var column;
        for (var i = columns.length - 1; i >= 0; i--) {
            var arr = [];
            this.isVisibleColumns(columns[parseInt(i.toString(), 10)], arr);
            if (columns[parseInt(i.toString(), 10)].visible && arr.indexOf('true') !== -1) {
                column = columns[parseInt(i.toString(), 10)];
                break;
            }
        }
        return column;
    };
    Grid.prototype.firstVisibleRightCol = function (columns) {
        var column;
        for (var i = 0; i < columns.length; i++) {
            var arr = [];
            this.isVisibleColumns(columns[parseInt(i.toString(), 10)], arr);
            if (columns[parseInt(i.toString(), 10)].visible && arr.indexOf('true') !== -1) {
                column = columns[parseInt(i.toString(), 10)];
                break;
            }
        }
        return column;
    };
    Grid.prototype.frozenLeftBorderColumns = function (columns) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(columns)) {
            return;
        }
        if (columns.columns && columns.columns.length) {
            columns.border = 'Left';
            var cols = columns.columns[columns.columns.length - 1];
            this.frozenLeftBorderColumns(cols instanceof _models_column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .VP && cols.columns ? this.lastVisibleLeftCol(columns.columns) : cols);
        }
        else {
            columns.border = 'Left';
        }
    };
    Grid.prototype.frozenRightBorderColumns = function (columns) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(columns)) {
            return;
        }
        if (columns.columns && columns.columns.length) {
            columns.border = 'Right';
            var cols = columns.columns[0];
            this.frozenRightBorderColumns(cols instanceof _models_column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .VP && cols.columns ? this.firstVisibleRightCol(columns.columns) : cols);
        }
        else {
            columns.border = 'Right';
        }
    };
    /**
     * @hidden
     * @returns {number} Returns the visible frozen columns count
     */
    Grid.prototype.getVisibleFrozenColumns = function () {
        return this.getVisibleFrozenColumnsCount() + this.getVisibleFrozenCount(this.columns, 0);
    };
    /**
     * Get the current Filter operator and field.
     *
     * @returns {FilterUI} Returns the filter UI
     */
    Grid.prototype.getFilterUIInfo = function () {
        return this.filterModule ? this.filterModule.getFilterUIInfo() : {};
    };
    Grid.prototype.getVisibleFrozenColumnsCount = function () {
        var visibleFrozenColumns = 0;
        var columns = this.columnModel;
        for (var i = 0; i < this.frozenColumns; i++) {
            if (columns[parseInt(i.toString(), 10)].visible) {
                visibleFrozenColumns++;
            }
        }
        if ((this.frozenLeftCount || this.leftcount) || (this.frozenRightCount || this.rightcount)) {
            for (var i = 0; i < columns.length; i++) {
                if (columns[parseInt(i.toString(), 10)].visible && (columns[parseInt(i.toString(), 10)].freeze === 'Left'
                    || columns[parseInt(i.toString(), 10)].freeze === 'Right')) {
                    visibleFrozenColumns++;
                }
            }
        }
        return visibleFrozenColumns;
    };
    Grid.prototype.getVisibleFrozenCount = function (cols, cnt) {
        if ((!this.frozenLeftCount && !this.leftcount) && (!this.frozenRightCount || !this.rightcount)) {
            for (var i = 0, len = cols.length; i < len; i++) {
                if (cols[parseInt(i.toString(), 10)].columns) {
                    cnt = this.getVisibleFrozenCount(cols[parseInt(i.toString(), 10)].columns, cnt);
                }
                else {
                    if (cols[parseInt(i.toString(), 10)].isFrozen && cols[parseInt(i.toString(), 10)].visible) {
                        cnt++;
                    }
                }
            }
        }
        return cnt;
    };
    Grid.prototype.getFrozenCount = function (cols, cnt, index) {
        for (var i = 0, len = (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(cols) ? cols.length : 0); i < len; i++) {
            if (cols[parseInt(i.toString(), 10)].columns) {
                cnt = this.getFrozenCount(cols[parseInt(i.toString(), 10)].columns, cnt, index);
            }
            else {
                if (cols[parseInt(i.toString(), 10)].isFrozen && index > this.frozenColumns - 1) {
                    cnt++;
                }
                index++;
            }
        }
        return cnt;
    };
    /**
     * Navigates to the specified target page.
     *
     * @param  {number} pageNo - Defines the page number to navigate.
     *
     * @returns {void}
     */
    Grid.prototype.goToPage = function (pageNo) {
        if (this.pagerModule) {
            this.pagerModule.goToPage(pageNo);
        }
    };
    /**
     * Defines the text of external message.
     *
     * @param  {string} message - Defines the message to update.
     *
     * @returns {void}
     */
    Grid.prototype.updateExternalMessage = function (message) {
        if (this.pagerModule && !this.pagerTemplate) {
            this.pagerModule.updateExternalMessage(message);
        }
    };
    /**
     * Sorts a column with the given options.
     *
     * @param {string} columnName - Defines the column name to be sorted.
     * @param {SortDirection} direction - Defines the direction of sorting field.
     * @param {boolean} isMultiSort - Specifies whether the previous sorted columns are to be maintained.
     *
     * @returns {void}
     */
    Grid.prototype.sortColumn = function (columnName, direction, isMultiSort) {
        if (this.sortModule) {
            this.sortModule.sortColumn(columnName, direction, isMultiSort);
        }
    };
    /**
     * Remove the existing columns along with the grid actions like sorting, filtering, searching, grouping, aggregate, etc., and grid will refresh with new columns based on the updated new data source.
     * > * If no columns are specified while changing the data source, then the columns are auto generated in the Grid based on the list of columns in the updated data source.
     *
     * @param {Object | DataManager | DataResult} dataSource -  Assign the new datasource.
     * @param {Column[] | string[] | ColumnModel[]} columns - Defines columns.
     * @returns {void}
     *
     *
     * ```typescript
     * <button id="btn">change dataSource </button>
     * <div id="Grid"></div>
     * <script>
     * let gridObj: Grid = new Grid({
     *     dataSource: employeeData,  // you can define the datamanager here if you are binding a data through datamanager
     *     columns: [
     *         { field: 'OrderID', headerText: 'Order ID', width:100 },
     *         { field: 'EmployeeID', headerText: 'Employee ID' }],
     * });
     * gridObj.appendTo('#Grid');
     * document.getElementById('btn').addEventListener("click", function(){
     * let newColumn: [
     *     { field: 'CustomerID', headerText: 'Customer ID', width:100 },
     *     { field: 'FirstName', headerText: 'Name' }];
     * gridObj.changeDataSource(customerData, newColumn);
     * });
     * </script>
     * ```
     *
     */
    Grid.prototype.changeDataSource = function (dataSource, columns) {
        this.isChangeDataSourceCall = true;
        this.setProperties({ sortSettings: { columns: [] } }, true);
        this.setProperties({ filterSettings: { columns: [] } }, true);
        this.setProperties({ searchSettings: { key: '' } }, true);
        if (this.allowGrouping) {
            this.setProperties({ groupSettings: { columns: [] } }, true);
        }
        if (columns && columns.length) {
            this.setProperties({ columns: columns }, true);
        }
        if (dataSource) {
            if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(columns)) {
                this.setProperties({ columns: [] }, true);
            }
            this.setProperties({ dataSource: dataSource }, true);
        }
        this.freezeRefresh();
        this.isChangeDataSourceCall = false;
    };
    /**
     * Clears all the sorted columns of the Grid.
     *
     * @returns {void}
     */
    Grid.prototype.clearSorting = function () {
        if (this.sortModule) {
            this.sortModule.clearSorting();
        }
    };
    /**
     * Remove sorted column by field name.
     *
     * @param {string} field - Defines the column field name to remove sort.
     * @returns {void}
     * @hidden
     */
    Grid.prototype.removeSortColumn = function (field) {
        if (this.sortModule) {
            this.sortModule.removeSortColumn(field);
        }
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.clearGridActions = function () {
        this.setProperties({ sortSettings: { columns: [] } }, true);
        this.setProperties({ filterSettings: { columns: [] } }, true);
        this.setProperties({ searchSettings: { key: '' } }, true);
        if (this.allowGrouping) {
            this.setProperties({ groupSettings: { columns: [] } }, false);
        }
        else {
            this.freezeRefresh();
        }
    };
    /**
     * Filters grid row by column name with the given options.
     *
     * @param  {string} fieldName - Defines the field name of the column.
     * @param  {string} filterOperator - Defines the operator to filter records.
     * @param  {string | number | Date | boolean} filterValue - Defines the value used to filter records.
     * @param  {string} predicate - Defines the relationship between one filter query and another by using AND or OR predicate.
     * @param  {boolean} matchCase - If match case is set to true, the grid filters the records with exact match. if false, it filters case
     * insensitive records (uppercase and lowercase letters treated the same).
     * @param  {boolean} ignoreAccent - If ignoreAccent set to true,
     * then filter ignores the diacritic characters or accents while filtering.
     * @param  {string} actualFilterValue - Defines the actual filter value for the filter column.
     * @param  {string} actualOperator - Defines the actual filter operator for the filter column.
     *
     * @returns {void}
     */
    Grid.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
        if (this.filterModule) {
            this.filterModule.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
        }
    };
    /**
     * Clears all the filtered rows of the Grid.
     *
     * @param {string[]} fields - Defines the Fields
     * @returns {void}
     */
    Grid.prototype.clearFiltering = function (fields) {
        if (this.filterModule) {
            this.filterModule.clearFiltering(fields);
        }
    };
    /**
     * Removes filtered column by field name.
     *
     * @param  {string} field - Defines column field name to remove filter.
     * @param  {boolean} isClearFilterBar -  Specifies whether the filter bar value needs to be cleared.
     * @returns {void}
     * @hidden
     */
    Grid.prototype.removeFilteredColsByField = function (field, isClearFilterBar) {
        if (this.filterModule) {
            this.filterModule.removeFilteredColsByField(field, isClearFilterBar);
        }
    };
    /**
     * Selects a row by given index.
     *
     * @param  {number} index - Defines the row index.
     * @param  {boolean} isToggle - If set to true, then it toggles the selection.
     *
     * @returns {void}
     */
    Grid.prototype.selectRow = function (index, isToggle) {
        if (this.selectionModule) {
            this.selectionModule.selectRow(index, isToggle);
        }
    };
    /**
     * Selects a collection of rows by indexes.
     *
     * @param  {number[]} rowIndexes - Specifies the row indexes.
     *
     * @returns {void}
     */
    Grid.prototype.selectRows = function (rowIndexes) {
        if (this.selectionModule) {
            this.selectionModule.selectRows(rowIndexes);
        }
    };
    /**
     * Deselects the current selected rows and cells.
     *
     * @returns {void}
     */
    Grid.prototype.clearSelection = function () {
        if (this.selectionModule) {
            this.selectionModule.clearSelection();
        }
    };
    /**
     * Selects a cell by the given index.
     *
     * @param  {IIndex} cellIndex - Defines the row and column indexes.
     * @param  {boolean} isToggle - If set to true, then it toggles the selection.
     *
     * @returns {void}
     */
    Grid.prototype.selectCell = function (cellIndex, isToggle) {
        if (this.selectionModule) {
            this.selectionModule.selectCell(cellIndex, isToggle);
        }
    };
    /**
     * Selects a range of cells from start and end indexes.
     *
     * @param  {IIndex} startIndex - Specifies the row and column's start index.
     * @param  {IIndex} endIndex - Specifies the row and column's end index.
     *
     * @returns {void}
     */
    Grid.prototype.selectCellsByRange = function (startIndex, endIndex) {
        this.selectionModule.selectCellsByRange(startIndex, endIndex);
    };
    /**
     * Searches Grid records using the given key.
     * You can customize the default search option by using the
     * [`searchSettings`](./#searchsettings/).
     *
     * @param  {string} searchString - Defines the key.
     *
     * @returns {void}
     */
    Grid.prototype.search = function (searchString) {
        if (this.searchModule) {
            this.searchModule.search(searchString);
        }
    };
    /**
     * By default, prints all the pages of the Grid and hides the pager.
     * > You can customize print options using the
     * [`printMode`](./#printmode).
     *
     * @returns {void}
     */
    Grid.prototype.print = function () {
        if (this.printModule) {
            this.printModule.print();
        }
    };
    /**
     * Delete a record with Given options. If fieldname and data is not given then grid will delete the selected record.
     * > `editSettings.allowDeleting` should be true.
     *
     * @param {string} fieldname - Defines the primary key field, 'Name of the column'.
     * @param {Object} data - Defines the JSON data of the record to be deleted.
     * @returns {void}
     */
    Grid.prototype.deleteRecord = function (fieldname, data) {
        if (this.editModule) {
            this.editModule.deleteRecord(fieldname, data);
        }
    };
    /**
     * Starts edit the selected row. At least one row must be selected before invoking this method.
     * `editSettings.allowEditing` should be true.
     * {% codeBlock src='grid/startEdit/index.md' %}{% endcodeBlock %}
     *
     * @returns {void}
     */
    Grid.prototype.startEdit = function () {
        if (this.editModule) {
            this.editModule.startEdit();
        }
    };
    /**
     * If Grid is in editable state, you can save a record by invoking endEdit.
     *
     * @returns {void}
     */
    Grid.prototype.endEdit = function () {
        if (this.editModule) {
            this.editModule.endEdit();
        }
    };
    /**
     * Cancels edited state.
     *
     * @returns {void}
     */
    Grid.prototype.closeEdit = function () {
        if (this.editModule) {
            this.editModule.closeEdit();
        }
    };
    /**
     * Adds a new record to the Grid. Without passing parameters, it adds empty rows.
     * > `editSettings.allowEditing` should be true.
     *
     * @param {Object} data - Defines the new add record data.
     * @param {number} index - Defines the row index to be added
     * @returns {void}
     */
    Grid.prototype.addRecord = function (data, index) {
        if (this.editModule) {
            this.editModule.addRecord(data, index);
        }
    };
    /**
     * Delete any visible row by TR element.
     *
     * @param {HTMLTableRowElement} tr - Defines the table row element.
     * @returns {void}
     */
    Grid.prototype.deleteRow = function (tr) {
        if (this.editModule) {
            this.editModule.deleteRow(tr);
        }
    };
    /**
     * Changes a particular cell into edited state based on the row index and field name provided in the `batch` mode.
     *
     * @param {number} index - Defines row index to edit a particular cell.
     * @param {string} field - Defines the field name of the column to perform batch edit.
     *
     * @returns {void}
     */
    Grid.prototype.editCell = function (index, field) {
        if (this.editModule) {
            this.editModule.editCell(index, field);
        }
    };
    /**
     * Saves the cell that is currently edited. It does not save the value to the DataSource.
     *
     * @returns {void}
     * {% codeBlock src='grid/saveCell/index.md' %}{% endcodeBlock %}
     */
    Grid.prototype.saveCell = function () {
        if (this.editModule) {
            this.editModule.saveCell();
        }
    };
    /**
     * To update the specified cell by given value without changing into edited state.
     *
     * @param {number} rowIndex Defines the row index.
     * @param {string} field Defines the column field.
     * @param {string | number | boolean | Date} value - Defines the value to be changed.
     *
     * @returns {void}
     */
    Grid.prototype.updateCell = function (rowIndex, field, value) {
        if (this.editModule) {
            this.editModule.updateCell(rowIndex, field, value);
        }
    };
    /**
     * To update the specified row by given values without changing into edited state.
     *
     * {% codeBlock src='grid/updateRow/index.md' %}{% endcodeBlock %}
     *
     * @param {number} index Defines the row index.
     * @param {Object} data Defines the data object to be updated.
     *
     * @returns {void}
     */
    Grid.prototype.updateRow = function (index, data) {
        if (this.editModule) {
            this.editModule.updateRow(index, data);
        }
    };
    /**
     * Gets the added, edited,and deleted data before bulk save to the DataSource in batch mode.
     *
     * @returns {Object} Returns the batch changes
     */
    Grid.prototype.getBatchChanges = function () {
        if (this.editModule) {
            return this.editModule.getBatchChanges();
        }
        return {};
    };
    /**
     * Enables or disables ToolBar items.
     *
     * @param {string[]} items - Defines the collection of itemID of ToolBar items.
     * @param {boolean} isEnable - Defines the items to be enabled or disabled.
     *
     * @returns {void}
     */
    Grid.prototype.enableToolbarItems = function (items, isEnable) {
        if (this.toolbarModule) {
            this.toolbarModule.enableItems(items, isEnable);
        }
    };
    /**
     * Copy the selected rows or cells data into clipboard.
     *
     * @param {boolean} withHeader - Specifies whether the column header text needs to be copied along with rows or cells.
     * @returns {void}
     */
    Grid.prototype.copy = function (withHeader) {
        if (this.clipboardModule) {
            this.clipboardModule.copy(withHeader);
        }
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.recalcIndentWidth = function () {
        var _this_1 = this;
        if (!this.getHeaderTable().querySelector('.e-emptycell')) {
            return;
        }
        if ((!this.groupSettings.columns.length && !this.isDetail() && !this.isRowDragable()) ||
            this.getHeaderTable().querySelector('.e-emptycell.e-indentRefreshed') ||
            !this.getContentTable()) {
            return;
        }
        var indentWidth = this.getHeaderTable().querySelector('.e-emptycell').parentElement.offsetWidth;
        var headerCol = [].slice.call(this.getHeaderTable().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .colGroup */ .uo).childNodes);
        var contentCol = [].slice.call(this.getContentTable().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .colGroup */ .uo).childNodes);
        var perPixel = indentWidth / 30;
        var i = this.getFrozenMode() === 'Right' ? this.groupSettings.columns.length + this.getColumns().length : 0;
        var parentOffset = this.element.offsetWidth;
        var applyWidth = function (index, width) {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .ispercentageWidth */ .$m)(_this_1)) {
                var newWidth = (width / parentOffset * 100).toFixed(1) + '%';
                headerCol[parseInt(index.toString(), 10)].style.width = newWidth;
                contentCol[parseInt(index.toString(), 10)].style.width = newWidth;
            }
            else {
                headerCol[parseInt(index.toString(), 10)].style.width = width + 'px';
                contentCol[parseInt(index.toString(), 10)].style.width = width + 'px';
            }
            _this_1.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .columnWidthChanged */ .XEZ, { index: index, width: width });
        };
        if (perPixel >= 1) {
            indentWidth = (30 / perPixel);
        }
        if (indentWidth < 1) {
            indentWidth = 1;
        }
        if (this.enableColumnVirtualization || this.isAutoGen || (this.columns.length === this.groupSettings.columns.length)) {
            indentWidth = 30;
        }
        while (i < this.groupSettings.columns.length) {
            applyWidth(i, indentWidth);
            i++;
        }
        if (this.isDetail()) {
            applyWidth(i, indentWidth);
            i++;
        }
        if (this.isRowDragable()) {
            applyWidth(i, indentWidth);
        }
        this.isAutoGen = false;
        this.getHeaderTable().querySelector('.e-emptycell').classList.add('e-indentRefreshed');
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.resetIndentWidth = function () {
        if (this.isDestroyed) {
            return;
        }
        if ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .ispercentageWidth */ .$m)(this)) {
            this.getHeaderTable().querySelector('.e-emptycell').classList.remove('e-indentRefreshed');
            this.widthService.setWidthToColumns();
            this.recalcIndentWidth();
            if (this.autoFit) {
                this.preventAdjustColumns();
            }
        }
        if ((this.width === 'auto' || typeof (this.width) === 'string' && this.width.indexOf('%') !== -1)
            && this.getColumns().filter(function (col) { return (!col.width || col.width === 'auto') && col.minWidth; }).length > 0) {
            var tgridWidth = this.widthService.getTableWidth(this.getColumns(), true);
            this.widthService.setMinwidthBycalculation(tgridWidth);
        }
        if (this.isFrozenGrid() && this.enableColumnVirtualization && this.widthService) {
            this.widthService.refreshFrozenScrollbar();
        }
        if (this.allowTextWrap && this.textWrapSettings.wrapMode !== 'Content') {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshHandlers */ .Drr, {});
        }
        if (this.frozenRows && this.scrollModule) {
            this.scrollModule.resizeFrozenRowBorder();
        }
        if (this.enableStickyHeader) {
            this.scrollModule.makeStickyHeader();
        }
        if (this.enableAutoFill && this.selectionSettings.type === 'Multiple' &&
            this.selectionSettings.mode === 'Cell' && this.selectionModule.selectedRowCellIndexes.length) {
            this.selectionModule.updateAutoFillPosition();
            this.selectionModule.drawBorders();
        }
    };
    /**
     * @hidden
     * @returns {boolean} Returns isRowDragable
     */
    Grid.prototype.isRowDragable = function () {
        return this.allowRowDragAndDrop && !this.rowDropSettings.targetID;
    };
    /**
     * Changes the Grid column positions by field names.
     *
     * @param  {string} fromFName - Defines the origin field name.
     * @param  {string} toFName - Defines the destination field name.
     *
     * @returns {void}
     */
    Grid.prototype.reorderColumns = function (fromFName, toFName) {
        if (this.reorderModule) {
            this.reorderModule.reorderColumns(fromFName, toFName);
        }
    };
    /**
     * Reorders a column in the Grid using column models.
     *
     * Moves the specified column (fromColumn) before the target column (toColumn),
     * supporting both standard and stacked header columns.
     *
     * @param {Column} fromColumn - The column model to be moved.
     * @param {Column} toColumn - The target column model before which the source column will be placed.
     *
     * @returns {void}
     */
    Grid.prototype.reorderColumnByModel = function (fromColumn, toColumn) {
        if (this.reorderModule) {
            this.reorderModule.reorderColumnByModel(fromColumn, toColumn);
        }
    };
    /**
     * Changes the Grid column positions by field index. If you invoke reorderColumnByIndex multiple times,
     * then you won't get the same results every time.
     *
     * @param  {number} fromIndex - Defines the origin field index.
     * @param  {number} toIndex - Defines the destination field index.
     *
     * @returns {void}
     */
    Grid.prototype.reorderColumnByIndex = function (fromIndex, toIndex) {
        if (this.reorderModule) {
            this.reorderModule.reorderColumnByIndex(fromIndex, toIndex);
        }
    };
    /**
     * Changes the Grid column positions by field index. If you invoke reorderColumnByTargetIndex multiple times,
     * then you will get the same results every time.
     *
     * @param  {string} fieldName - Defines the field name.
     * @param  {number} toIndex - Defines the destination field index.
     *
     * @returns {void}
     */
    Grid.prototype.reorderColumnByTargetIndex = function (fieldName, toIndex) {
        if (this.reorderModule) {
            this.reorderModule.reorderColumnByTargetIndex(fieldName, toIndex);
        }
    };
    /**
     * Changes the Grid Row position with given indexes.
     *
     * @param  {number} fromIndexes - Defines the origin Indexes.
     * @param  {number} toIndex - Defines the destination Index.
     *
     * @returns {void}
     */
    Grid.prototype.reorderRows = function (fromIndexes, toIndex) {
        if (this.rowDragAndDropModule) {
            this.rowDragAndDropModule.reorderRows(fromIndexes, toIndex);
        }
    };
    /**
     * @param {ReturnType} e - Defines the Return type
     * @returns {void}
     * @hidden
     */
    Grid.prototype.refreshDataSource = function (e) {
        this.notify('refreshdataSource', e);
    };
    /**
     * @param {boolean} enable -Defines the enable
     * @returns {void}
     * @hidden
     */
    Grid.prototype.disableRowDD = function (enable) {
        var headerTable = this.getHeaderTable();
        var contentTable = this.getContentTable();
        var headerRows = headerTable.querySelectorAll('th.e-rowdragheader, th.e-mastercell');
        var rows = this.getRows();
        var disValue = enable ? 'none' : '';
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .setStyleAttribute */ .sN)(headerTable.querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .colGroup */ .uo).childNodes[0], { 'display': disValue });
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .setStyleAttribute */ .sN)(contentTable.querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .colGroup */ .uo).childNodes[0], { 'display': disValue });
        for (var i = 0; i < this.getRows().length; i++) {
            var ele = rows[parseInt(i.toString(), 10)].firstElementChild;
            if (enable) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([ele], 'e-hide');
            }
            else {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([ele], ['e-hide']);
            }
        }
        for (var j = 0; j < headerTable.querySelectorAll('th.e-rowdragheader, th.e-mastercell').length; j++) {
            var ele = headerRows[parseInt(j.toString(), 10)];
            if (enable) {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([ele], 'e-hide');
            }
            else {
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([ele], ['e-hide']);
            }
        }
    };
    /**
     * Changes the column width to automatically fit its content to ensure that the width shows the content without wrapping/hiding.
     * > * This method ignores the hidden columns.
     * > * Uses the `autoFitColumns` method in the `dataBound` event to resize at initial rendering.
     * > * By specifying the start row index and end row index, providing the range within which the maximum width for that column should be considered when applying `autoFitColumns`.
     * > * The width of header rows is always calculated. If the width of a header row exceeds the specified range, its width will be allocated to the specific content rows.
     *
     * @param  {string |string[]} fieldNames - Defines the column names.
     * @param  {number} startRowIndex - Specifies the start index of the content row.
     * @param  {number} endRowIndex - Specifies the end index of content row.
     * @returns {void}
     *
     *
     * ```typescript
     * <div id="Grid"></div>
     * <script>
     * let gridObj: Grid = new Grid({
     *     dataSource: employeeData,
     *     columns: [
     *         { field: 'OrderID', headerText: 'Order ID', width:100 },
     *         { field: 'EmployeeID', headerText: 'Employee ID' }],
     *     dataBound: () => gridObj.autoFitColumns('EmployeeID');
     * });
     * gridObj.appendTo('#Grid');
     * </script>
     * ```
     *
     */
    Grid.prototype.autoFitColumns = function (fieldNames, startRowIndex, endRowIndex) {
        var injectedModules = this.getInjectedModules();
        var resize = injectedModules.find(function (item) {
            if (typeof item === 'function' && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(item.prototype)) {
                return item.prototype.getModuleName() === 'resize';
            }
            else {
                return item.name === 'Resize';
            }
        });
        if (!this.resizeModule && resize) {
            this.autoFitColumnsResize = true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.injectModules();
        }
        if (this.resizeModule) {
            this.resizeModule.autoFitColumns(fieldNames, startRowIndex, endRowIndex);
        }
    };
    /**
     * @returns {void}
     * @hidden
     */
    Grid.prototype.preventAdjustColumns = function () {
        if ((this.enableAdaptiveUI && this.rowRenderingMode === 'Vertical')
            || (this.allowResizing && this.resizeSettings.mode === 'Auto')) {
            return;
        }
        var columns = this.getColumns();
        var headerTable = this.getHeaderTable();
        var tableWidth = 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[parseInt(i.toString(), 10)].visible) {
                if (this.groupSettings.columns.length
                    && this.groupSettings.columns.indexOf(columns[parseInt(i.toString(), 10)].field) > -1) {
                    var headerCol = [].slice.call(headerTable.querySelector('colgroup')
                        .querySelectorAll(':not(.e-group-intent):not(.e-detail-intent):not(.e-drag-intent)'));
                    if (headerCol[parseInt(i.toString(), 10)].style.display === 'none') {
                        continue;
                    }
                }
                if (columns[parseInt(i.toString(), 10)].width) {
                    tableWidth += parseFloat(columns[parseInt(i.toString(), 10)].width.toString());
                }
                else {
                    tableWidth = 0;
                    break;
                }
            }
        }
        if (tableWidth) {
            var percentageWidth = this.isPercentageWidthGrid();
            var unit = this.widthUnit(percentageWidth);
            var contentTable = this.getContentTable();
            if (this.groupSettings.columns.length || this.isDetail() || this.isRowDragable()) {
                var indentWidth = this.defaultIndentWidth(percentageWidth);
                var indentWidthUnitFormat = indentWidth.toString() + unit;
                var headerIndentCol = [].slice.call(headerTable.querySelector('colgroup')
                    .querySelectorAll('.e-group-intent, .e-detail-intent, .e-drag-intent'));
                var contentIndentCol = [].slice.call(contentTable.querySelector('colgroup')
                    .querySelectorAll('.e-group-intent, .e-detail-intent, .e-drag-intent'));
                for (var i = 0; i < headerIndentCol.length; i++) {
                    headerIndentCol[parseInt(i.toString(), 10)].style.setProperty('width', indentWidthUnitFormat);
                    contentIndentCol[parseInt(i.toString(), 10)].style.setProperty('width', indentWidthUnitFormat);
                    tableWidth += indentWidth;
                }
            }
            if ((percentageWidth && tableWidth < 100)
                || (!percentageWidth && tableWidth < contentTable.parentElement.clientWidth)) {
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentTable.querySelector('.e-emptyrow'))) {
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([headerTable], ['e-tableborder']);
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([contentTable], ['e-tableborder']);
                }
                else {
                    (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .addClass */ .iQ)([headerTable, contentTable], ['e-tableborder']);
                }
            }
            var tableWidthUnitFormat = tableWidth.toString() + unit;
            headerTable.style.setProperty('width', tableWidthUnitFormat);
            contentTable.style.setProperty('width', tableWidthUnitFormat);
        }
        else {
            this.restoreAdjustColumns();
        }
    };
    Grid.prototype.restoreAdjustColumns = function () {
        if ((this.enableAdaptiveUI && this.rowRenderingMode === 'Vertical')
            || (this.allowResizing && this.resizeSettings.mode === 'Auto')) {
            return;
        }
        var headerTable = this.getHeaderTable();
        var contentTable = this.getContentTable();
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([headerTable, contentTable], ['e-tableborder']);
        headerTable.style.removeProperty('width');
        contentTable.style.removeProperty('width');
        if (this.groupSettings.columns.length || this.isDetail() || this.isRowDragable()) {
            var percentageWidth = this.isPercentageWidthGrid();
            var indentWidthUnitFormat_1 = this.defaultIndentWidth(percentageWidth).toString() + this.widthUnit(percentageWidth);
            var headerIndentCol = [].slice.call(headerTable.querySelector('colgroup')
                .querySelectorAll('.e-group-intent, .e-detail-intent, .e-drag-intent'));
            headerIndentCol.forEach(function (element) {
                element.style.setProperty('width', indentWidthUnitFormat_1);
            });
            headerTable.querySelector('.e-emptycell').classList.remove('e-indentRefreshed');
            this.recalcIndentWidth();
        }
    };
    Grid.prototype.widthUnit = function (percentageWidth) {
        return percentageWidth ? '%' : 'px';
    };
    Grid.prototype.defaultIndentWidth = function (percentageWidth) {
        return percentageWidth ? parseFloat((30 / this.element.offsetWidth * 100).toFixed(1)) : 30;
    };
    Grid.prototype.isPercentageWidthGrid = function () {
        var column = this.getColumns().find(function (col) { return !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(col.width); });
        return column ? column.width.toString().indexOf('%') > -1 : false;
    };
    /**
     * @param {number} x - Defines the number
     * @param {number} y - Defines the number
     * @param {Element} target - Defines the Element
     * @returns {void}
     * @hidden
     */
    Grid.prototype.createColumnchooser = function (x, y, target) {
        if (this.columnChooserModule) {
            this.columnChooserModule.renderColumnChooser(x, y, target);
        }
    };
    Grid.prototype.initializeServices = function () {
        this.serviceLocator.register('widthService', this.widthService = new _services_width_controller__WEBPACK_IMPORTED_MODULE_16__/* .ColumnWidthService */ .u(this));
        this.serviceLocator.register('cellRendererFactory', new _services_cell_render_factory__WEBPACK_IMPORTED_MODULE_17__/* .CellRendererFactory */ .o);
        this.serviceLocator.register('rendererFactory', new _services_renderer_factory__WEBPACK_IMPORTED_MODULE_18__/* .RendererFactory */ .O);
        this.serviceLocator.register('localization', this.localeObj = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .L10n */ .Wo(this.getModuleName(), this.defaultLocale, this.locale));
        this.serviceLocator.register('valueFormatter', this.valueFormatterService = new _services_value_formatter__WEBPACK_IMPORTED_MODULE_19__/* .ValueFormatter */ .c(this.locale));
        this.serviceLocator.register('showHideService', this.showHider = new _actions_show_hide__WEBPACK_IMPORTED_MODULE_20__/* .ShowHide */ .C(this));
        this.serviceLocator.register('ariaService', this.ariaService = new _services_aria_service__WEBPACK_IMPORTED_MODULE_21__/* .AriaService */ .F());
        this.serviceLocator.register('focus', this.focusModule = new _services_focus_strategy__WEBPACK_IMPORTED_MODULE_22__/* .FocusStrategy */ .KL(this));
    };
    Grid.prototype.processModel = function () {
        var gCols = this.groupSettings.columns;
        var sCols = this.sortSettings.columns;
        var flag;
        var j;
        if (this.allowGrouping) {
            var _loop_3 = function (i, len) {
                flag = false;
                j = 0;
                for (var sLen = sCols.length; j < sLen; j++) {
                    if (sCols[parseInt(j.toString(), 10)].field === gCols[parseInt(i.toString(), 10)]) {
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    sCols.push({ field: gCols[parseInt(i.toString(), 10)], direction: 'Ascending', isFromGroup: true });
                }
                else {
                    if (this_3.allowSorting) {
                        this_3.sortedColumns.push(sCols[parseInt(j.toString(), 10)].field);
                    }
                    else {
                        sCols[parseInt(j.toString(), 10)].direction = 'Ascending';
                    }
                }
                if (!this_3.groupSettings.showGroupedColumn) {
                    var column = this_3.enableColumnVirtualization ?
                        this_3.columns.filter(function (c) { return c.field === gCols[parseInt(i.toString(), 10)]; })[0]
                        : this_3.getColumnByField(gCols[parseInt(i.toString(), 10)]);
                    if (column) {
                        column.visible = false;
                    }
                    else {
                        this_3.log('initial_action', { moduleName: 'group', columnName: gCols[parseInt(i.toString(), 10)] });
                    }
                }
            };
            var this_3 = this;
            for (var i = 0, len = gCols.length; i < len; i++) {
                _loop_3(i, len);
            }
        }
        if (!gCols.length) {
            for (var i = 0; i < sCols.length; i++) {
                this.sortedColumns.push(sCols[parseInt(i.toString(), 10)].field);
            }
        }
        this.rowTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.rowTemplate);
        this.emptyRecordTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.emptyRecordTemplate);
        this.detailTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.detailTemplate);
        this.editTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.editSettings.template);
        this.editHeaderTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.editSettings.headerTemplate);
        this.editFooterTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.editSettings.footerTemplate);
        this.columnChooserTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.columnChooserSettings.template);
        this.columnChooserHeaderTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.columnChooserSettings.headerTemplate);
        this.columnChooserFooterTemplateFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .templateCompiler */ .M2)(this.columnChooserSettings.footerTemplate);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.parentDetails)) {
            var value = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.parentDetails.parentKeyFieldValue) ? 'undefined' :
                this.parentDetails.parentKeyFieldValue;
            this.query.where(this.queryString, 'equal', value, true);
        }
        this.initForeignColumn();
    };
    Grid.prototype.initForeignColumn = function () {
        if (this.isForeignKeyEnabled(this.getColumns())) {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .initForeignKeyColumn */ .USQ, this.getForeignKeyColumns());
        }
    };
    Grid.prototype.enableVerticalRendering = function () {
        if (this.rowRenderingMode === 'Vertical') {
            this.element.classList.add('e-row-responsive');
        }
        else {
            this.element.classList.remove('e-row-responsive');
        }
    };
    Grid.prototype.gridRender = function () {
        var _a;
        this.updateRTL();
        if (this.rowRenderingMode === 'Vertical') {
            this.element.classList.add('e-row-responsive');
        }
        if (this.enableHover) {
            this.element.classList.add('e-gridhover');
        }
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) || _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isSafari()) {
            this.element.classList.add('e-mac-safari');
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isDevice) {
            this.element.classList.add('e-device');
            if (this.adaptiveUIMode === 'Desktop') {
                this.enableAdaptiveUI = false;
            }
        }
        if (this.adaptiveUIMode === 'Mobile' && !(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isDevice || this.rowRenderingMode === 'Vertical')) {
            this.enableAdaptiveUI = false;
        }
        if (this.rowHeight) {
            this.element.classList.add('e-grid-min-height');
        }
        if (this.cssClass) {
            if (this.cssClass.indexOf(' ') !== -1) {
                (_a = this.element.classList).add.apply(_a, this.cssClass.split(' '));
            }
            else {
                this.element.classList.add(this.cssClass);
            }
        }
        // If the below if statement is removed, then drag and drop between grids will not work in firefox browser.
        if (this.allowRowDragAndDrop && this.rowDropSettings.targetID && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.info.name === 'mozilla') {
            this.element.classList.add('e-disableuserselect');
        }
        if (this.editSettings.showAddNewRow && (this.enableVirtualization || this.enableInfiniteScrolling)) {
            this.editSettings.newRowPosition = 'Top';
        }
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .classList */ .pP)(this.element, ['e-responsive', 'e-default'], []);
        var rendererFactory = this.serviceLocator.getService('rendererFactory');
        this.headerModule = rendererFactory.getRenderer(_enum__WEBPACK_IMPORTED_MODULE_23__/* .RenderType */ .nJ.Header);
        this.contentModule = rendererFactory.getRenderer(_enum__WEBPACK_IMPORTED_MODULE_23__/* .RenderType */ .nJ.Content);
        this.printModule = new _actions_print__WEBPACK_IMPORTED_MODULE_24__/* .Print */ .a(this, this.scrollModule);
        this.clipboardModule = new _actions_clipboard__WEBPACK_IMPORTED_MODULE_25__/* .Clipboard */ .B(this, this.serviceLocator);
        this.renderModule.render();
        this.eventInitializer();
        this.createGridPopUpElement();
        this.widthService.setWidthToColumns();
        this.updateGridLines();
        this.applyTextWrap();
        this.createTooltip(); //for clip mode ellipsis
        this.enableBoxSelection();
    };
    Grid.prototype.dataReady = function () {
        this.scrollModule.setWidth();
        this.scrollModule.setHeight();
        if (this.height !== 'auto') {
            this.scrollModule.setPadding();
        }
    };
    Grid.prototype.updateRTL = function () {
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        else {
            this.element.classList.remove('e-rtl');
        }
    };
    Grid.prototype.createGridPopUpElement = function () {
        var popup = this.createElement('div', { className: 'e-gridpopup' });
        popup.style.display = 'none';
        var content = this.createElement('div', { className: _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .content */ .Qs, attrs: { tabIndex: '-1' } });
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)([content, this.createElement('div', { className: 'e-uptail e-tail' })], popup);
        content.appendChild(this.createElement('span'));
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .append */ .BC)([content, this.createElement('div', { className: 'e-downtail e-tail' })], popup);
        this.element.appendChild(popup);
    };
    Grid.prototype.updateGridLines = function () {
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .classList */ .pP)(this.element, [], ['e-verticallines', 'e-horizontallines', 'e-hidelines', 'e-bothlines']);
        switch (this.gridLines) {
            case 'Horizontal':
                this.element.classList.add('e-horizontallines');
                break;
            case 'Vertical':
                this.element.classList.add('e-verticallines');
                break;
            case 'None':
                this.element.classList.add('e-hidelines');
                break;
            case 'Both':
                this.element.classList.add('e-bothlines');
                break;
        }
        this.updateResizeLines();
    };
    Grid.prototype.updateResizeLines = function () {
        if (this.allowResizing &&
            !(this.gridLines === 'Vertical' || this.gridLines === 'Both')) {
            this.element.classList.add('e-resize-lines');
        }
        else {
            this.element.classList.remove('e-resize-lines');
        }
    };
    /**
     * The function is used to apply text wrap
     *
     * @returns {void}
     * @hidden
     */
    Grid.prototype.applyTextWrap = function () {
        if (this.allowTextWrap) {
            var headerRows = [].slice.call(this.element.getElementsByClassName('e-columnheader'));
            switch (this.textWrapSettings.wrapMode) {
                case 'Header':
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.element, false);
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.getContent(), false);
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(headerRows, true);
                    break;
                case 'Content':
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.getContent(), true);
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.element, false);
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(headerRows, false);
                    break;
                default:
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.element, true);
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.getContent(), false);
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(headerRows, false);
            }
            if (this.textWrapSettings.wrapMode !== 'Content') {
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshHandlers */ .Drr, {});
            }
        }
    };
    /**
     * The function is used to remove text wrap
     *
     * @returns {void}
     * @hidden
     */
    Grid.prototype.removeTextWrap = function () {
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.element, false);
        var headerRows = [].slice.call(this.element.getElementsByClassName('e-columnheader'));
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(headerRows, false);
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(this.getContent(), false);
        if (this.textWrapSettings.wrapMode !== 'Content') {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshHandlers */ .Drr, {});
        }
    };
    /**
     * The function is used to add Tooltip to the grid cell that has ellipsiswithtooltip clip mode.
     *
     * @returns {void}
     * @hidden
     */
    Grid.prototype.createTooltip = function () {
        this.toolTipObj = new _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_26__/* .Tooltip */ .m({
            opensOn: 'custom',
            content: '',
            cssClass: this.cssClass ? this.cssClass : null
        }, this.element);
    };
    /**
     * Initiates a complete refresh of the Grid's column and layout.
     *
     * This method forces a full re-render of the Grid, ensuring that any dynamic
     * changes to columns or layout are immediately reflected.
     *
     * @returns {void}
     */
    Grid.prototype.freezeRefresh = function () {
        if (this.enableVirtualization || this.enableInfiniteScrolling) {
            this.pageSettings.currentPage = 1;
        }
        this.componentRefresh();
    };
    Grid.prototype.getTooltipStatus = function (element) {
        var headerTable = this.getHeaderTable();
        var headerDivTag = this.enableAdaptiveUI && this.rowRenderingMode === 'Vertical' ? 'e-gridcontent' : 'e-gridheader';
        var htable = this.createTable(headerTable, headerDivTag, 'header');
        var ctable = this.createTable(headerTable, headerDivTag, 'content');
        var table = element.classList.contains('e-headercell') ? htable : ctable;
        var ele = element.classList.contains('e-headercell') ? 'th' : 'tr';
        table.querySelector(ele).className = element.className;
        var targetElement = table.querySelector(ele);
        targetElement.innerHTML = '';
        Array.from(element.childNodes).forEach(function (child) {
            targetElement.appendChild(child.cloneNode(true));
        });
        var width = table.querySelector(ele).getBoundingClientRect().width;
        document.body.removeChild(htable);
        document.body.removeChild(ctable);
        if ((width > element.getBoundingClientRect().width && !element.classList.contains('e-editedbatchcell')) ||
            (this.enableAdaptiveUI && this.rowRenderingMode === 'Vertical' &&
                width > (element.getBoundingClientRect().width * 0.55) - (this.height !== 'auto' ? 16 : 0))) {
            // 0.55 - defines the width of adaptive content cell, 16 - defines the scrollbar width
            return true;
        }
        return false;
    };
    Grid.prototype.mouseMoveHandler = function (e) {
        if (this.isEllipsisTooltip()) {
            var element = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-ellipsistooltip');
            if (e.type === 'mouseout' && (this.prevElement !== element || element !== (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.relatedTarget, 'e-ellipsistooltip'))) {
                this.toolTipObj.close();
                this.prevElement = null;
            }
            var tagName = e.target.tagName;
            var elemNames = ['A', 'BUTTON', 'INPUT'];
            if (element && e.type !== 'mouseout' && !(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isDevice && elemNames.indexOf(tagName) !== -1)) {
                if (this.getTooltipStatus(element)) {
                    var col = this.getColumns()[parseInt(element.getAttribute(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .ariaColIndex */ .ql), 10) - 1];
                    var domSetter = col && col.disableHtmlEncode ? 'innerText' : 'innerHTML';
                    var contentDiv = this.createElement('div');
                    if (element.getElementsByClassName('e-headertext').length) {
                        var innerElement = element.getElementsByClassName('e-headertext')[0];
                        contentDiv["" + domSetter] = this.sanitize(innerElement.innerText);
                        this.toolTipObj.content = contentDiv;
                    }
                    else {
                        contentDiv["" + domSetter] = this.sanitize(element.innerText);
                        this.toolTipObj.content = contentDiv;
                    }
                    if (this.enableHtmlSanitizer) {
                        this.toolTipObj.enableHtmlSanitizer = true;
                    }
                    if (col && col.disableHtmlEncode) {
                        this.toolTipObj.enableHtmlParse = false;
                    }
                    if (element !== this.prevElement) {
                        this.toolTipObj['open'](element);
                    }
                    this.prevElement = element;
                }
            }
        }
    };
    Grid.prototype.isEllipsisTooltip = function () {
        var cols = this.getColumns();
        if (this.clipMode === 'EllipsisWithTooltip') {
            return true;
        }
        for (var i = 0; i < cols.length; i++) {
            if (cols[parseInt(i.toString(), 10)].clipMode === 'EllipsisWithTooltip') {
                return true;
            }
        }
        return false;
    };
    Grid.prototype.scrollHandler = function () {
        if (this.isEllipsisTooltip()) {
            this.toolTipObj.close();
        }
    };
    /**
     * To create table for ellipsiswithtooltip
     *
     * @param {Element} table - Defines the table
     * @param {string} tag - Defines the tag
     * @param {string} type - Defines the type
     * @returns {HTMLDivElement} Returns the HTML div ELement
     * @hidden
     */
    Grid.prototype.createTable = function (table, tag, type) {
        var myTableDiv = this.createElement('div');
        myTableDiv.className = this.element.className;
        myTableDiv.style.cssText = 'display: inline-block;visibility:hidden;position:absolute';
        var mySubDiv = this.createElement('div');
        mySubDiv.className = tag;
        var myTable = this.createElement('table');
        myTable.className = table.className;
        myTable.style.cssText = 'table-layout: auto;width: auto';
        var ele = (type === 'header') ? 'th' : 'td';
        var myTr = this.createElement('tr', { attrs: { role: 'row' } });
        var mytd = this.createElement(ele);
        myTr.appendChild(mytd);
        myTable.appendChild(myTr);
        mySubDiv.appendChild(myTable);
        myTableDiv.appendChild(mySubDiv);
        document.body.appendChild(myTableDiv);
        return myTableDiv;
    };
    Grid.prototype.onKeyPressed = function (e) {
        if (e.action === 'tab' || e.action === 'shiftTab') {
            this.toolTipObj.close();
        }
    };
    /**
     * Binding events to the element while component creation.
     *
     * @hidden
     * @returns {void}
     */
    Grid.prototype.wireEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'click', this.mouseClickHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'touchend', this.mouseClickHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'focusout', this.focusOutHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'dblclick', this.dblClickHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'keydown', this.keyPressHandler, this);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(window, 'resize', this.resetIndentWidth, this);
        if (this.allowKeyboard) {
            this.element.tabIndex = this.element.tabIndex === -1 ? 0 : this.element.tabIndex;
        }
        this.keyboardModule = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .KeyboardEvents */ .j9(this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown'
        });
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.getContent().firstElementChild, 'scroll', this.scrollHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'mouseover', this.mouseMoveHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.element, 'mouseout', this.mouseMoveHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(this.getContent(), 'touchstart', this.tapEvent, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.add(document.body, 'keydown', this.keyDownHandler, this);
    };
    /**
     * Unbinding events from the element while component destroy.
     *
     * @hidden
     * @returns {void}
     */
    Grid.prototype.unwireEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'click', this.mouseClickHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'touchend', this.mouseClickHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'focusout', this.focusOutHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'dblclick', this.dblClickHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.getContent().firstElementChild, 'scroll', this.scrollHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'mouseover', this.mouseMoveHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'mouseout', this.mouseMoveHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.element, 'keydown', this.keyPressHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(this.getContent(), 'touchstart', this.tapEvent);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(document.body, 'keydown', this.keyDownHandler);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .EventHandler */ .Jm.remove(window, 'resize', this.resetIndentWidth);
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.addListener = function () {
        if (this.isDestroyed) {
            return;
        }
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .dataReady */ .yUO, this.dataReady, this);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .contentReady */ .PRb, this.recalcIndentWidth, this);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .headerRefreshed */ .CRr, this.recalcIndentWidth, this);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshFrozenPosition */ .x2c, this.refreshFrozenPosition, this);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshSplitFrozenColumn */ .IB4, this.refreshSplitFrozenColumn, this);
        this.dataBoundFunction = this.refreshMediaCol.bind(this);
        this.addEventListener(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .dataBound */ .BPR, this.dataBoundFunction);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .keyPressed */ ._ld, this.onKeyPressed, this);
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.removeListener = function () {
        if (this.isDestroyed) {
            return;
        }
        this.off(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .dataReady */ .yUO, this.dataReady);
        this.off(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .contentReady */ .PRb, this.recalcIndentWidth);
        this.off(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .headerRefreshed */ .CRr, this.recalcIndentWidth);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshFrozenPosition */ .x2c, this.refreshFrozenPosition, this);
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshSplitFrozenColumn */ .IB4, this.refreshSplitFrozenColumn, this);
        this.removeEventListener(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .dataBound */ .BPR, this.dataBoundFunction);
        this.off(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .keyPressed */ ._ld, this.onKeyPressed);
    };
    /**
     * Get current visible data of grid.
     *
     * @returns {Object[]} Returns the current view records
     *
     * @isGenericType true
     */
    Grid.prototype.getCurrentViewRecords = function () {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .isGroupAdaptive */ .Gj)(this)) {
            return (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.currentViewData.records) ?
                this.currentViewData : this.currentViewData.records;
        }
        if (this.groupSettings.enableLazyLoading) {
            return this.currentViewData;
        }
        return (this.allowGrouping && this.groupSettings.columns.length && this.currentViewData.length
            && this.currentViewData.records) ? this.currentViewData.records
            : this.currentViewData;
    };
    Grid.prototype.mouseClickHandler = function (e) {
        if (this.isChildGrid(e) || ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-gridpopup') && e.touches) ||
            this.element.getElementsByClassName('e-cloneproperties').length || this.checkEdit(e)) {
            return;
        }
        if (((!this.allowRowDragAndDrop && ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .gridContent */ .iV) ||
            e.target.tagName === 'TD')) || ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-headercell') &&
            (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-headercell').querySelector('.e-checkselectall')) ||
            (!(this.allowGrouping || this.allowReordering) && (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-gridheader'))) &&
            e.touches) {
            return;
        }
        if (this.allowRowDragAndDrop && (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-rowcell')
            && !(0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-rowdragdrop') && e.touches) {
            return;
        }
        if ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-gridheader') && this.allowRowDragAndDrop &&
            !((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-filterbarcell')) && (e.target &&
            ['A', 'BUTTON', 'INPUT'].indexOf(e.target.tagName) === -1)) {
            e.preventDefault();
        }
        var args = this.getRowInfo(e.target);
        var cancel = 'cancel';
        args["" + cancel] = false;
        var isDataRow = false;
        var tr = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(e.target, 'tr');
        if (tr && tr.getAttribute('data-uid')) {
            var rowObj = this.getRowObjectFromUID(tr.getAttribute('data-uid'));
            isDataRow = rowObj ? rowObj.isDataRow : false;
        }
        if (isDataRow) {
            this.trigger(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .recordClick */ .kB6, args);
        }
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .click */ .jMr, e);
    };
    Grid.prototype.checkEdit = function (e) {
        var tr = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .row */ .nM);
        var isEdit = this.editSettings.mode !== 'Batch' &&
            this.isEdit && tr && (tr.classList.contains(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .editedRow */ .QF) || (tr.classList.contains(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .addedRow */ .jm)) &&
            !this.editSettings.showAddNewRow);
        return !(0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-unboundcelldiv') && (isEdit || ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .rowCell */ .Jt) &&
            (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .rowCell */ .Jt).classList.contains('e-editedbatchcell')));
    };
    Grid.prototype.dblClickHandler = function (e) {
        var grid = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-grid');
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(grid) || grid.id !== this.element.id || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(e.target, '.e-unboundcelldiv')) {
            return;
        }
        var dataRow = false;
        var tr = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(e.target, 'tr');
        if (tr && tr.getAttribute('data-uid')) {
            var rowObj = this.getRowObjectFromUID(tr.getAttribute('data-uid'));
            dataRow = rowObj ? rowObj.isDataRow : false;
        }
        var args = this.getRowInfo(e.target);
        args.target = e.target;
        if (dataRow) {
            this.trigger(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .recordDoubleClick */ .nUn, args);
        }
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .dblclick */ .lVf, e);
    };
    Grid.prototype.focusOutHandler = function (e) {
        if (this.isChildGrid(e)) {
            return;
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-grid')) {
            this.element.querySelector('.e-gridpopup').style.display = 'None';
        }
        var filterClear = this.element.querySelector('.e-cancel:not(.e-hide)');
        if (filterClear && !filterClear.parentElement.classList.contains('e-tbar-btn')) {
            filterClear.classList.add('e-hide');
        }
        var relatedTarget = e.relatedTarget;
        var ariaOwns = relatedTarget ? relatedTarget.getAttribute('aria-owns') : null;
        if ((!relatedTarget || (!(0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-grid') &&
            (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(ariaOwns) &&
                (ariaOwns)) !== e.target.getAttribute('aria-owns')))
            && !this.keyPress && this.isEdit && !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isDevice) {
            if (this.editSettings.mode === 'Batch' && !((((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-ddl') || (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-ddt')) &&
                ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-multi-select-list-wrapper') || (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-input-filter'))) &&
                (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-input-group')) && ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-uploader') || (!(relatedTarget &&
                (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(relatedTarget, 'e-input-group'))) && !(0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'edit-custom-template')))) {
                this.editModule.saveCell();
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .editNextValCell */ .lJd, {});
            }
            if (this.editSettings.mode === 'Normal' && !this.isWidgetsDestroyed) {
                this.editModule.editFormValidate();
            }
        }
        if (this.editSettings.showAddNewRow) {
            this.editModule.isShowAddedRowValidate = false;
        }
        this.keyPress = false;
    };
    Grid.prototype.isChildGrid = function (e) {
        var gridElement = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-grid');
        if ((gridElement && gridElement.id !== this.element.id) || ((0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-unboundcelldiv') &&
            (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(gridElement))) {
            return true;
        }
        return false;
    };
    /**
     * @param {Object} persistedData - Defines the persisted data
     * @returns {void}
     * @hidden
     */
    Grid.prototype.mergePersistGridData = function (persistedData) {
        var data = this.getLocalData();
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data) || (data === '')) || !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(persistedData)) {
            var dataObj = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(persistedData) ? persistedData : JSON.parse(data);
            var keys = Object.keys(dataObj);
            this.isProtectedOnChange = true;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if ((typeof this["" + key] === 'object') && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this["" + key])) {
                    if (Array.isArray(this["" + key]) && key === 'columns') {
                        this.setFrozenCount();
                        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .setColumnIndex */ .zg)(this["" + key]);
                        this.mergeColumns(dataObj["" + key], this["" + key]);
                        this.mergedColumns = true;
                        this["" + key] = dataObj["" + key];
                    }
                    else {
                        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X$)(this["" + key], dataObj["" + key]);
                    }
                }
                else {
                    this["" + key] = dataObj["" + key];
                }
            }
            this.isProtectedOnChange = false;
        }
    };
    Grid.prototype.mergeColumns = function (storedColumn, columns) {
        var storedColumns = storedColumn;
        var isFrozenGrid = this.isFrozenGrid();
        var _loop_4 = function (i) {
            var localCol = columns.filter(function (tCol) { return isFrozenGrid ?
                tCol.index === storedColumns[parseInt(i.toString(), 10)]["" + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .initialFrozenColumnIndex */ .Vu] :
                tCol.index === storedColumns[parseInt(i.toString(), 10)].index; })[0];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(localCol)) {
                if (isFrozenGrid) {
                    localCol = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X$)({}, localCol, {}, true);
                    localCol.freeze = storedColumns[parseInt(i.toString(), 10)].freeze;
                }
                if (localCol.columns && localCol.columns.length) {
                    this_4.mergeColumns(storedColumns[parseInt(i.toString(), 10)].columns, localCol.columns);
                    storedColumns[parseInt(i.toString(), 10)] = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X$)(localCol, storedColumns[parseInt(i.toString(), 10)], {}, true);
                }
                else {
                    storedColumns[parseInt(i.toString(), 10)] = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X$)(localCol, storedColumns[parseInt(i.toString(), 10)], {}, true);
                }
            }
        };
        var this_4 = this;
        for (var i = 0; i < storedColumns.length; i++) {
            _loop_4(i);
        }
    };
    /**
     * @hidden
     * @returns {boolean} Returns the isDetail
     */
    Grid.prototype.isDetail = function () {
        return !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.detailTemplate) || !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.childGrid);
    };
    Grid.prototype.isCommandColumn = function (columns) {
        var _this_1 = this;
        return columns.some(function (col) {
            if (col.columns) {
                return _this_1.isCommandColumn(col.columns);
            }
            return !!(col.commands || col.commandsTemplate);
        });
    };
    Grid.prototype.isForeignKeyEnabled = function (columns) {
        var _this_1 = this;
        return columns.some(function (col) {
            if (col.columns) {
                return _this_1.isForeignKeyEnabled(col.columns);
            }
            return !!(col.dataSource && col.foreignKeyValue);
        });
    };
    Grid.prototype.keyPressHandler = function (e) {
        var presskey = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X$)(e, { cancel: false });
        this.trigger('keyPressed', presskey);
        if (presskey.cancel === true || (this.isEdit && e && (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-gridform') &&
            (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .parentsUntil */ .oC)(e.target, 'e-ddl') && e.action === 'open' && e.altKey === true && e.code === 'ArrowDown')) {
            e.stopImmediatePropagation();
        }
    };
    Grid.prototype.keyDownHandler = function (e) {
        if (e.altKey) {
            if (e.keyCode === 74) { //alt j
                if (this.keyA) { //alt A J
                    this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .groupCollapse */ .z4n, { target: e.target, collapse: false });
                    this.keyA = false;
                }
                else {
                    if (this.focusModule && this.focusModule.currentInfo && this.focusModule.currentInfo.element) {
                        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .removeClass */ .vy)([this.focusModule.currentInfo.element, this.focusModule.currentInfo.elementToFocus], ['e-focused', 'e-focus']);
                        this.focusModule.currentInfo.element.tabIndex = -1;
                    }
                    if (!this.element.classList.contains('e-childgrid')) {
                        this.element.focus();
                    }
                }
            }
            if (e.keyCode === 87) { //alt w
                var focusModule = this.focusModule;
                if (focusModule) {
                    if (!this.currentViewData.length) {
                        return;
                    }
                    if (this.element.getBoundingClientRect().width !== 0) {
                        focusModule.focusContent();
                    }
                    focusModule.addOutline();
                }
            }
            if (e.keyCode === 65) { //alt A
                this.keyA = true;
            }
            if (e.keyCode === 72 && this.keyA) { //alt A H
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .groupCollapse */ .z4n, { target: e.target, collapse: true });
                this.keyA = false;
            }
        }
        if (e.keyCode === 13) {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .enterKeyHandler */ .w7v, e);
        }
    };
    Grid.prototype.keyActionHandler = function (e) {
        if (this.isChildGrid(e) ||
            (this.editModule && ((this.editModule.alertDObj && this.editModule.alertDObj.visible) ||
                (this.editModule.dialogObj && this.editModule.dialogObj.visible))) ||
            ((this.isEdit && (!this.editSettings.showAddNewRow || (this.editSettings.showAddNewRow &&
                this.element.querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .editedRow */ .QF)))) && e.action !== 'escape' && e.action !== 'enter'
                && e.action !== 'shiftEnter' && e.action !== 'tab' && e.action !== 'shiftTab')) {
            return;
        }
        else {
            this.keyPress = true;
        }
        if (this.allowKeyboard) {
            if (e.action === 'ctrlPlusP') {
                e.preventDefault();
                this.print();
            }
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .keyPressed */ ._ld, e);
        }
    };
    /**
     * @param {Function[]} modules - Defines the modules
     * @returns {void}
     * @hidden
     */
    Grid.prototype.setInjectedModules = function (modules) {
        this.injectedModules = modules;
    };
    Grid.prototype.updateColumnObject = function () {
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .prepareColumns */ .X2)(this.columns, this.enableColumnVirtualization, this);
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .setColumnIndex */ .zg)(this.columns);
        this.initForeignColumn();
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .autoCol */ .a6z, {});
    };
    Grid.prototype.refreshFrozenPosition = function (obj) {
        if (obj && obj.isModeChg) {
            this.refreshColumns();
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .refreshResizePosition */ .Zhk, {});
        }
        else {
            this.refreshColumns();
        }
    };
    /**
     * Gets the foreign columns from Grid.
     *
     * @returns {Column[]} Returns Foreign key column
     */
    Grid.prototype.getForeignKeyColumns = function () {
        var cols = this.enableColumnVirtualization ? this.columns : this.getColumns();
        return cols.filter(function (col) {
            return col.isForeignColumn();
        });
    };
    /**
     * @hidden
     * @param {boolean} accurateHeight - Defines the accurate row height
     * @returns {number} Returns row height
     */
    Grid.prototype.getRowHeight = function (accurateHeight) {
        return this.rowHeight ? this.rowHeight : (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .getRowHeight */ .gi)(this.element, accurateHeight);
    };
    /**
     * Refreshes the Grid column changes.
     *
     * @returns {void}
     */
    Grid.prototype.refreshColumns = function () {
        this.freezeColumnRefresh = true;
        this.setFrozenCount();
        this.updateFrozenColumnsWidth();
        if (this.isFrozenGrid()) {
            this.isPreventScrollEvent = true;
        }
        this.updateColumnObject();
        this.checkLockColumns(this.getColumns());
        this.refresh();
        if (this.isFrozenGrid() && this.enableColumnVirtualization) {
            var left = this.getContent().querySelector('.e-movablescrollbar').scrollLeft;
            this.getHeaderContent().querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .headerContent */ .VW).scrollLeft = left;
            this.getContent().querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .content */ .Qs).scrollLeft = left;
        }
    };
    /**
     * Export Grid data to Excel file(.xlsx).
     *
     * @param  {ExcelExportProperties} excelExportProperties - Defines the export properties of the Grid.
     * @param  {boolean} isMultipleExport - Define to enable multiple export.
     * @param  {Workbook} workbook - Defines the Workbook if multiple export is enabled.
     * @param  {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     * @returns {Promise<any>} Returns the excelexport
     */
    Grid.prototype.excelExport = function (excelExportProperties, isMultipleExport, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    workbook, isBlob) {
        if (this.exportGrids && this.exportGrids.length) {
            var gridIds = this.exportGrids.slice();
            return this.exportMultipleExcelGrids(gridIds, excelExportProperties, isMultipleExport, workbook, isBlob);
        }
        else {
            return this.excelExportModule ?
                this.excelExportModule.Map(this, excelExportProperties, isMultipleExport, workbook, false, isBlob) : null;
        }
    };
    /**
     * Export Grid data to CSV file.
     *
     * @param  {ExcelExportProperties} excelExportProperties - Defines the export properties of the Grid.
     * @param  {boolean} isMultipleExport - Define to enable multiple export.
     * @param  {Workbook} workbook - Defines the Workbook if multiple export is enabled.
     * @param  {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     * @returns {Promise<any>} Returns csv export
     */
    Grid.prototype.csvExport = function (excelExportProperties, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isMultipleExport, workbook, isBlob) {
        return this.excelExportModule ?
            this.excelExportModule.Map(this, excelExportProperties, isMultipleExport, workbook, true, isBlob) : null;
    };
    /**
     * Export Grid data to PDF document.
     *
     * @param {pdfExportProperties} pdfExportProperties - Defines the export properties of the Grid.
     * @param {isMultipleExport} isMultipleExport - Define to enable multiple export.
     * @param {pdfDoc} pdfDoc - Defined the Pdf Document if multiple export is enabled.
     * @param {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     *
     * @returns {Promise<any>} Returns pdfexport
     */
    Grid.prototype.pdfExport = function (pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        if (this.exportGrids && this.exportGrids.length) {
            var gridIds = this.exportGrids.slice();
            return this.exportMultiplePdfGrids(gridIds, pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
        }
        else {
            return this.pdfExportModule ? this.pdfExportModule.Map(this, pdfExportProperties, isMultipleExport, pdfDoc, isBlob) : null;
        }
    };
    Grid.prototype.exportMultiplePdfGrids = function (gridIds, pdfExportProperties, isMultipleExport, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pdfDoc, isBlob) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var _this = this;
        if (gridIds.length !== 0) {
            var currentGridId = gridIds.shift();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var currentGridInstance = document.getElementById(currentGridId).ej2_instances[0];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var exportPromise = currentGridInstance.pdfExportModule ?
                currentGridInstance.pdfExportModule.Map(currentGridInstance, pdfExportProperties, isMultipleExport, pdfDoc, isBlob)
                : Promise.resolve();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return exportPromise.then(function (exportedGridResults) {
                isMultipleExport = gridIds.length === 1 ? false : true;
                return _this.exportMultiplePdfGrids(gridIds, pdfExportProperties, isMultipleExport, exportedGridResults, isBlob);
            });
        }
        return null;
    };
    Grid.prototype.exportMultipleExcelGrids = function (gridIds, excelExportProperties, isMultipleExport, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    workbook, isBlob) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var _this = this;
        if (gridIds.length !== 0) {
            var currentGridId = gridIds.shift();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var currentGridInstance = document.getElementById(currentGridId).ej2_instances[0];
            var exportPromise = currentGridInstance.excelExportModule ?
                currentGridInstance.excelExportModule.Map(currentGridInstance, excelExportProperties, isMultipleExport, workbook, false, isBlob) : null;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return exportPromise.then(function (exportedGridResults) {
                isMultipleExport = gridIds.length === 1 ? false : true;
                return _this.exportMultipleExcelGrids(gridIds, excelExportProperties, isMultipleExport, exportedGridResults, isBlob);
            });
        }
        return null;
    };
    /**
     * Groups a column by column name.
     *
     * @param  {string} columnName - Defines the column name to group.
     *
     * @returns {void}
     */
    Grid.prototype.groupColumn = function (columnName) {
        if (this.groupModule) {
            this.groupModule.groupColumn(columnName);
        }
    };
    /**
     * Expands all the grouped rows of the Grid.
     *
     * @returns {void}
     */
    Grid.prototype.groupExpandAll = function () {
        if (this.groupModule) {
            this.groupModule.expandAll();
        }
    };
    /**
     * Collapses all the grouped rows of the Grid.
     *
     * @returns {void}
     */
    Grid.prototype.groupCollapseAll = function () {
        if (this.groupModule) {
            this.groupModule.collapseAll();
        }
    };
    /**
     * Expands or collapses grouped rows by target element.
     *
     * @param  {Element} target - Defines the target element of the grouped row.
     * @returns {void}
     */
    // public expandCollapseRows(target: Element): void {
    //     if (this.groupModule) {
    //         this.groupModule.expandCollapseRows(target);
    //     }
    // }
    /**
     * Clears all the grouped columns of the Grid.
     *
     * @returns {void}
     */
    Grid.prototype.clearGrouping = function () {
        if (this.groupModule) {
            this.groupModule.clearGrouping();
        }
    };
    /**
     * Ungroups a column by column name.
     *
     * {% codeBlock src='grid/ungroupColumn/index.md' %}{% endcodeBlock %}
     *
     * @param  {string} columnName - Defines the column name to ungroup.
     *
     * @returns {void}
     */
    Grid.prototype.ungroupColumn = function (columnName) {
        if (this.groupModule) {
            this.groupModule.ungroupColumn(columnName);
        }
    };
    /**
     * Column chooser can be displayed on screen by given position(X and Y axis).
     *
     * @param {number} x - Defines the X axis.
     * @param {number} y - Defines the Y axis.
     *
     * @returns {void}
     */
    Grid.prototype.openColumnChooser = function (x, y) {
        if (this.columnChooserModule) {
            this.columnChooserModule.openColumnChooser(x, y);
        }
    };
    Grid.prototype.scrollRefresh = function () {
        var _this_1 = this;
        var refresh = function () {
            _this_1.scrollModule.refresh();
            _this_1.off(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .contentReady */ .PRb, refresh);
        };
        this.on(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .contentReady */ .PRb, refresh, this);
    };
    /**
     * Collapses a detail row with the given target.
     *
     * @param  {Element} target - Defines the expanded element to collapse.
     * @returns {void}
     */
    // public detailCollapse(target: number | Element): void {
    //     if (this.detailRowModule) {
    //         this.detailRowModule.collapse(target);
    //     }
    // }
    /**
     * Collapses all the detail rows of the Grid.
     *
     * @returns {void}
     */
    Grid.prototype.detailCollapseAll = function () {
        if (this.detailRowModule) {
            this.detailRowModule.collapseAll();
        }
    };
    /**
     * Expands a detail row with the given target.
     *
     * @param  {Element} target - Defines the collapsed element to expand.
     * @returns {void}
     */
    // public detailExpand(target: number | Element): void {
    //     if (this.detailRowModule) {
    //         this.detailRowModule.expand(target);
    //     }
    // }
    /**
     * Expands all the detail rows of the Grid.
     *
     * @returns {void}
     */
    Grid.prototype.detailExpandAll = function () {
        if (this.detailRowModule) {
            this.detailRowModule.expandAll();
        }
    };
    /**
     * Deselects the currently selected cells.
     *
     * @returns {void}
     */
    Grid.prototype.clearCellSelection = function () {
        if (this.selectionModule) {
            this.selectionModule.clearCellSelection();
        }
    };
    /**
     * Deselects the currently selected rows.
     *
     * @returns {void}
     */
    Grid.prototype.clearRowSelection = function () {
        if (this.selectionModule) {
            this.selectionModule.clearRowSelection();
        }
    };
    /**
     * Selects a collection of cells by row and column indexes.
     *
     * @param  {ISelectedCell[]} rowCellIndexes - Specifies the row and column indexes.
     *
     * @returns {void}
     */
    Grid.prototype.selectCells = function (rowCellIndexes) {
        if (this.selectionModule) {
            this.selectionModule.selectCells(rowCellIndexes);
        }
    };
    /**
     * Selects a range of rows from start and end row indexes.
     *
     * @param  {number} startIndex - Specifies the start row index.
     * @param  {number} endIndex - Specifies the end row index.
     *
     * @returns {void}
     */
    Grid.prototype.selectRowsByRange = function (startIndex, endIndex) {
        if (this.selectionModule) {
            this.selectionModule.selectRowsByRange(startIndex, endIndex);
        }
    };
    /**
     * @hidden
     * @returns {boolean} Returns whether context menu is open or not
     */
    Grid.prototype.isContextMenuOpen = function () {
        return this.contextMenuModule && this.contextMenuModule.isOpen;
    };
    /**
     * @param {Function} module - Defines the module
     * @returns {boolean} return the injected modules
     * @hidden
     */
    Grid.prototype.ensureModuleInjected = function (module) {
        return this.getInjectedModules().indexOf(module) >= 0;
    };
    /**
     * Destroys the given template reference.
     *
     * @param {string[]} propertyNames - Defines the collection of template name.
     * @param {any} index - specifies the index
     * @param {Function} callback - Defines the callback function that is triggered after the template is cleared
     *
     * @returns {void}
     */
    // eslint-disable-next-line
    Grid.prototype.destroyTemplate = function (propertyNames, index, callback) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.clearTemplate(propertyNames, index, callback);
    };
    /**
     * @param {string | string[]} type - Defines the type
     * @param {Object} args - Defines the arguments
     * @returns {void}
     * @hidden
     * @private
     */
    Grid.prototype.log = function (type, args) {
        var injectedModules = this.getInjectedModules();
        var logger = injectedModules.find(function (item) { return item.name === 'Logger'; });
        if (!logger) {
            Grid_1.Inject(_actions_logger__WEBPACK_IMPORTED_MODULE_27__/* .Logger */ .V);
            this.enableLogger = true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.injectModules();
        }
        // eslint-disable-next-line
        this.loggerModule ? this.loggerModule.log(type, args) : (function () { return 0; })();
    };
    /**
     * @param {Element} element - Defines the element
     * @returns {void}
     * @hidden
     */
    Grid.prototype.applyBiggerTheme = function (element) {
        if (this.element.classList.contains('e-bigger')) {
            element.classList.add('e-bigger');
        }
    };
    /**
     * @hidden
     * @returns {Object} Returns the previous row data
     */
    Grid.prototype.getPreviousRowData = function () {
        var previousRowData = this.getRowsObject()[this.getRows().length - 1].data;
        return previousRowData;
    };
    /**
     * Hides the scrollbar placeholder of Grid content when grid content is not overflown.
     *
     * @returns {void}
     */
    Grid.prototype.hideScroll = function () {
        var content = this.getContent().querySelector('.' + _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .content */ .Qs);
        if (content.scrollHeight <= content.clientHeight) {
            this.scrollModule.removePadding();
            content.style.overflowY = 'auto';
        }
    };
    /**
     * Get row index by primary key or row data.
     *
     * @param  {string | Object} value - Defines the primary key value.
     *
     * @returns {number} Returns the index
     */
    Grid.prototype.getRowIndexByPrimaryKey = function (value) {
        var pkName = this.getPrimaryKeyFieldNames()[0];
        value = typeof value === 'object' ? value["" + pkName] : value;
        var rows = this.getRowsObject();
        for (var i = 0; i < rows.length; i++) {
            if (rows[parseInt(i.toString(), 10)].isDetailRow || rows[parseInt(i.toString(), 10)].isCaptionRow) {
                continue;
            }
            var pKvalue = rows[parseInt(i.toString(), 10)].data["" + pkName];
            if (pkName.split('.').length > 1) {
                pKvalue = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .performComplexDataOperation */ .D)(pkName, rows[parseInt(i.toString(), 10)].data);
            }
            if (pKvalue === value) {
                return rows[parseInt(i.toString(), 10)].index;
            }
        }
        return -1;
    };
    /**
     * @param {string} field - Defines the field name
     * @param {boolean} isForeignKey - Defines the foreign key
     * @returns {Column} returns the column
     * @hidden
     */
    // Need to have all columns while filtering with ColumnVirtualization.
    Grid.prototype.grabColumnByFieldFromAllCols = function (field, isForeignKey) {
        var column;
        this.columnModel = [];
        this.updateColumnModel(this.columns);
        var gCols = this.columnModel;
        for (var i = 0; i < gCols.length; i++) {
            if ((!isForeignKey && field === gCols[parseInt(i.toString(), 10)].field) ||
                (isForeignKey && gCols[parseInt(i.toString(), 10)].isForeignColumn() &&
                    field === gCols[parseInt(i.toString(), 10)].foreignKeyValue)) {
                column = gCols[parseInt(i.toString(), 10)];
                break;
            }
        }
        return column;
    };
    /**
     * @param {string} uid - Defines the uid
     * @returns {Column} returns the column
     * @hidden
     */
    // Need to have all columns while filtering with ColumnVirtualization.
    Grid.prototype.grabColumnByUidFromAllCols = function (uid) {
        var column;
        this.columnModel = [];
        this.updateColumnModel(this.columns);
        var gCols = this.columnModel;
        for (var i = 0; i < gCols.length; i++) {
            if (uid === gCols[parseInt(i.toString(), 10)].uid) {
                column = gCols[parseInt(i.toString(), 10)];
            }
        }
        return column;
    };
    /**
     * Get all filtered records from the Grid and it returns array of objects for the local dataSource, returns a promise object if the Grid has remote data.
     *
     * @returns {Object[] | Promise<Object>} Returns the filtered records
     */
    Grid.prototype.getFilteredRecords = function () {
        if ((this.allowFiltering && this.filterSettings.columns.length) || this.searchSettings.key.length) {
            var query = this.renderModule.data.generateQuery(true);
            if (this.dataSource && this.renderModule.data.isRemote() && this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__/* .DataManager */ .M) {
                return this.renderModule.data.getData(this.dataSource, query);
            }
            else {
                if (this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__/* .DataManager */ .M) {
                    return this.dataSource.executeLocal(query);
                }
                else {
                    return new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__/* .DataManager */ .M(this.dataSource, query).executeLocal(query);
                }
            }
        }
        return [];
    };
    Grid.prototype.getUserAgent = function () {
        var userAgent = _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.userAgent.toLowerCase();
        return /iphone|ipod|ipad|macintosh/.test(userAgent);
    };
    /**
     * @param {TouchEventArgs} e - Defines the TouchEventArgs
     * @returns {void}
     * @hidden
     */
    // Need to have all columns while filtering with ColumnVirtualization.
    // eslint-disable-next-line
    Grid.prototype.tapEvent = function (e) {
        if (this.getUserAgent()) {
            if (!_util__WEBPACK_IMPORTED_MODULE_9__/* .Global */ .mL.timer) {
                _util__WEBPACK_IMPORTED_MODULE_9__/* .Global */ .mL.timer = setTimeout(function () {
                    _util__WEBPACK_IMPORTED_MODULE_9__/* .Global */ .mL.timer = null;
                }, 300);
            }
            else {
                clearTimeout(_util__WEBPACK_IMPORTED_MODULE_9__/* .Global */ .mL.timer);
                _util__WEBPACK_IMPORTED_MODULE_9__/* .Global */ .mL.timer = null;
                this.dblClickHandler(e);
                this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .doubleTap */ .jnc, e);
            }
        }
    };
    /**
     * @param {string} prefix - specifies the prefix
     * @returns {string} returns the row uid
     * @hidden
     */
    Grid.prototype.getRowUid = function (prefix) {
        return "" + prefix + this.rowUid++;
    };
    /**
     * @param {string} uid - specifies the uid
     * @returns {Element} returns the element
     * @hidden
     */
    Grid.prototype.getRowElementByUID = function (uid) {
        var rowEle;
        var rows = [];
        var cntRows = [].slice.call(this.getContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_).children);
        if (this.frozenRows) {
            rows = [].slice.call(this.getHeaderContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_).children);
            rows = rows.concat(cntRows);
        }
        else {
            rows = cntRows;
        }
        for (var _i = 0, rows_2 = rows; _i < rows_2.length; _i++) {
            var row = rows_2[_i];
            if (row.getAttribute('data-uid') === uid) {
                rowEle = row;
                break;
            }
        }
        return rowEle;
    };
    /**
     * Gets the hidden columns from the Grid.
     *
     * @returns {Column[]} Returns the Column
     */
    Grid.prototype.getHiddenColumns = function () {
        var cols = [];
        for (var _i = 0, _a = this.columnModel; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.visible === false) {
                cols.push(col);
            }
        }
        return cols;
    };
    /**
     * Calculates the page size by parent element height
     *
     * @param {number | string } containerHeight - specifies the container height
     * @returns {number} returns the page size
     */
    Grid.prototype.calculatePageSizeByParentHeight = function (containerHeight) {
        if (this.allowPaging) {
            if ((this.allowTextWrap && this.textWrapSettings.wrapMode === 'Header') || (!this.allowTextWrap)) {
                var pagesize = 0;
                if (containerHeight.indexOf('%') !== -1) {
                    containerHeight = parseInt(containerHeight, 10) / 100 * this.element.clientHeight;
                }
                var nonContentHeight = this.getNoncontentHeight() + this.getRowHeight();
                if (containerHeight > nonContentHeight) {
                    var contentHeight = 0;
                    contentHeight = containerHeight - this.getNoncontentHeight();
                    pagesize = (contentHeight / this.getRowHeight());
                }
                if (pagesize > 0) {
                    return Math.floor(pagesize);
                }
            }
        }
        return 0;
    };
    Grid.prototype.getNoncontentHeight = function () {
        var height = 0;
        if (this.getHeaderContent() && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.getHeaderContent().clientHeight)) {
            height += this.getHeaderContent().clientHeight;
        }
        if (this.toolbar && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.element.querySelector('.e-toolbar').clientHeight)) {
            height += this.element.querySelector('.e-toolbar').clientHeight;
        }
        if (this.allowPaging && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.element.querySelector('.e-gridpager').clientHeight)) {
            height += this.element.querySelector('.e-gridpager').clientHeight;
        }
        if (this.showColumnChooser && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.element.querySelector('.e-columnheader').clientHeight)) {
            height += this.element.querySelector('.e-columnheader').clientHeight;
        }
        if (this.allowGrouping && this.groupSettings.showDropArea && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.element.querySelector('.e-groupdroparea').clientHeight)) {
            height += this.element.querySelector('.e-groupdroparea').clientHeight;
        }
        if (this.aggregates.length > 0 && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.element.querySelector('.e-summaryrow').clientHeight)) {
            for (var i = 0; i < this.element.getElementsByClassName('e-summaryrow').length; i++) {
                height += this.element.getElementsByClassName('e-summaryrow')[parseInt(i.toString(), 10)].clientHeight;
            }
        }
        return height;
    };
    /**
     *To perform aggregate operation on a column.
     *
     * @param  {AggregateColumnModel} summaryCol - Pass Aggregate Column details.
     * @param  {Object} summaryData - Pass JSON Array for which its field values to be calculated.
     *
     * @returns {number} returns the summary values
     */
    Grid.prototype.getSummaryValues = function (summaryCol, summaryData) {
        return _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_12__/* .DataUtil */ .$.aggregates[summaryCol.type.toLowerCase()](summaryData, summaryCol.field);
    };
    /**
     * Sends a Post request to export Grid to Excel file in server side.
     *
     * @param  {string} url - Pass Url for server side excel export action.
     *
     * @param  {ExportHeaders} headers - The headers to include in the export request.
     *
     * @returns {void}
     */
    Grid.prototype.serverExcelExport = function (url, headers) {
        this.isExcel = true;
        this.exportGrid(url, headers);
    };
    /**
     * Sends a Post request to export Grid to Pdf file in server side.
     *
     * @param  {string} url - Pass Url for server side pdf export action.
     *
     * @param  {ExportHeaders} headers - The headers to include in the export request.
     *
     * @returns {void}
     */
    Grid.prototype.serverPdfExport = function (url, headers) {
        this.isExcel = false;
        this.exportGrid(url, headers);
    };
    /**
     * Sends a Post request to export Grid to CSV file in server side.
     *
     * @param  {string} url - Pass Url for server side csv export action.
     *
     * @param  {ExportHeaders} headers - The headers to include in the export request.
     *
     * @returns {void}
     */
    Grid.prototype.serverCsvExport = function (url, headers) {
        this.isExcel = true;
        this.exportGrid(url, headers);
    };
    /**
     * @param {string} url - Defines exporting url
     * @param {ExportHeaders} headers - The optional headers for the export request.
     * @returns {void}
     * @hidden
     */
    Grid.prototype.exportGrid = function (url, headers) {
        var _this_1 = this;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var grid = this;
        var query = grid.getDataModule().generateQuery(true);
        var state = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_28__/* .UrlAdaptor */ .V5().processQuery(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__/* .DataManager */ .M({ url: '' }), query);
        var queries = JSON.parse(state.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var gridModel = JSON.parse(this.addOnPersist(['allowGrouping', 'allowPaging', 'pageSettings', 'sortSettings', 'allowPdfExport', 'allowExcelExport', 'aggregates',
            'filterSettings', 'groupSettings', 'columns', 'locale', 'searchSettings']));
        var include = ['field', 'headerText', 'type', 'format', 'visible', 'foreignKeyValue', 'foreignKeyField',
            'template', 'index', 'width', 'textAlign', 'headerTextAlign', 'columns'];
        gridModel.filterSettings.columns = queries.where;
        gridModel.searchSettings.fields = queries.search && queries.search[0]['fields'] || [];
        gridModel.sortSettings.columns = queries.sorted;
        gridModel.columns = this.setHeaderText(gridModel.columns, include);
        var form = this.createElement('form', { id: 'ExportForm' });
        form.style.display = 'none';
        var gridInput = this.createElement('input', { id: 'gridInput', attrs: { name: 'gridModel' } });
        gridInput.value = JSON.stringify(gridModel);
        form.method = 'POST';
        form.action = url;
        form.appendChild(gridInput);
        if (headers && headers.headers && Array.isArray(headers.headers)) {
            headers.headers.forEach(function (header) {
                Object.keys(header).forEach(function (key) {
                    var value = typeof header["" + key] === 'string' ? header["" + key] : JSON.stringify(header["" + key]);
                    var headerInput = _this_1.createElement('input', { attrs: { name: key, value: value, type: 'hidden' } });
                    form.appendChild(headerInput);
                });
            });
        }
        document.body.appendChild(form);
        form.submit();
        form.remove();
    };
    /**
     * @param {Column[]} columns - Defines array of columns
     * @param {string[]} include - Defines array of sting
     * @returns {Column[]} returns array of columns
     * @hidden
     */
    Grid.prototype.setHeaderText = function (columns, include) {
        for (var i = 0; i < columns.length; i++) {
            var column = this.getColumnByUid(columns[parseInt(i.toString(), 10)].uid);
            columns[parseInt(i.toString(), 10)].headerText = column.headerText;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(column.template)) {
                columns[parseInt(i.toString(), 10)].template = 'true';
            }
            if (columns[parseInt(i.toString(), 10)].format) {
                columns[parseInt(i.toString(), 10)].format = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .getNumberFormat */ .JI)(this.getFormat(columns[parseInt(i.toString(), 10)].format), columns[parseInt(i.toString(), 10)].type, false, _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .defaultCurrencyCode */ .Uf);
                if (column.type === 'datetime' || column.type === 'date' || column.type === 'time') {
                    columns[parseInt(i.toString(), 10)].format = columns[parseInt(i.toString(), 10)].format.toString().replace('AM/PM', 'tt');
                }
            }
            if (columns[parseInt(i.toString(), 10)].columns) {
                this.setHeaderText(columns[parseInt(i.toString(), 10)].columns, include);
            }
            var keys = Object.keys(columns[parseInt(i.toString(), 10)]);
            for (var j = 0; j < keys.length; j++) {
                if (include.indexOf(keys[parseInt(j.toString(), 10)]) < 0) {
                    delete columns[parseInt(i.toString(), 10)][keys[parseInt(j.toString(), 10)]];
                }
            }
        }
        return columns;
    };
    Grid.prototype.getFormat = function (format) {
        return typeof (format) === 'object' ? !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(format.format) ?
            format.format : format.skeleton : format;
    };
    /**
     * @hidden
     * @returns {boolean} returns the isCollapseStateEnabled
     */
    Grid.prototype.isCollapseStateEnabled = function () {
        var isExpanded = 'isExpanded';
        return this["" + isExpanded] === false;
    };
    /**
     * @param {number} key - Defines the primary key value.
     * @param {Object} rowData - Defines the rowData
     * @returns {void}
     */
    Grid.prototype.updateRowValue = function (key, rowData) {
        var args = {
            requestType: 'save', data: rowData
        };
        this.showSpinner();
        this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .updateData */ .O6x, args);
        this.refresh();
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.setForeignKeyData = function () {
        this.dataBind();
        var colpending = this.getDataModule().getForeignKeyDataState();
        if (colpending.isPending) {
            this.getDataModule().setForeignKeyDataState({});
            colpending.resolver();
        }
        else {
            this.getDataModule().setForeignKeyDataState({ isDataChanged: false });
            if (this.contentModule || this.headerModule) {
                this.renderModule.render();
            }
        }
    };
    /**
     * @param {string} field - specifies the field
     * @returns {void}
     * @hidden
     */
    Grid.prototype.resetFilterDlgPosition = function (field) {
        var header = this.getColumnHeaderByField(field);
        if (header) {
            var target = header.querySelector('.e-filtermenudiv');
            var filterDlg = this.element.querySelector('.e-filter-popup');
            if (target) {
                var gClient = this.element.getBoundingClientRect();
                var fClient = target.getBoundingClientRect();
                if (filterDlg) {
                    if ((filterDlg.offsetWidth + fClient.right) > gClient.right) {
                        filterDlg.style.left = ((fClient.right - filterDlg.offsetWidth) - gClient.left).toString() + 'px';
                    }
                    else {
                        filterDlg.style.left = (fClient.right - gClient.left).toString() + 'px';
                    }
                }
            }
        }
    };
    /**
     * @param {any} callBack - specifies the callBack method
     * @returns {void}
     * @hidden
     */
    // eslint-disable-next-line
    Grid.prototype.renderTemplates = function (callBack) {
        var isReactChild = this.parentDetails && this.parentDetails.parentInstObj && this.parentDetails.parentInstObj.isReact;
        var isReactPrintGrid = this.printGridParent && this.printGridParent.isReact;
        if ((isReactChild || isReactPrintGrid) && this['portals']) {
            var parentInstObj = isReactPrintGrid ? this.printGridParent : this.parentDetails.parentInstObj;
            parentInstObj['portals'] = parentInstObj['portals'].concat(this['portals']);
            parentInstObj.renderTemplates(callBack);
            this['portals'] = undefined;
        }
        else {
            var portals = 'portals';
            this.notify('reactTemplateRender', this["" + portals]);
            this.renderReactTemplates(callBack);
        }
    };
    /**
     * Apply the changes to the Grid without refreshing the rows.
     *
     * @param  {BatchChanges} changes - Defines changes to be updated.
     * @returns {void}
     */
    Grid.prototype.batchUpdate = function (changes) {
        this.processRowChanges(changes);
    };
    /**
     * Apply the changes to the Grid in one batch after 50ms without refreshing the rows.
     *
     * @param  {BatchChanges} changes - Defines changes to be updated.
     * @returns {void}
     */
    Grid.prototype.batchAsyncUpdate = function (changes) {
        this.processBulkRowChanges(changes);
    };
    Grid.prototype.processBulkRowChanges = function (changes) {
        var _this_1 = this;
        if (!this.dataToBeUpdated) {
            this.dataToBeUpdated = Object.assign({ addedRecords: [], changedRecords: [], deletedRecords: [] }, changes);
            setTimeout(function () {
                _this_1.processRowChanges(_this_1.dataToBeUpdated);
                _this_1.dataToBeUpdated = null;
            }, this.asyncTimeOut);
        }
        else {
            var loopstring = [_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .addedRecords */ .V0, _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .changedRecords */ .BP, _base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .deletedRecords */ .S4];
            var keyField = this.getPrimaryKeyFieldNames()[0];
            for (var i = 0; i < loopstring.length; i++) {
                if (changes[loopstring[parseInt(i.toString(), 10)]]) {
                    (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .compareChanges */ .vF)(this, changes, loopstring[parseInt(i.toString(), 10)], keyField);
                }
            }
        }
    };
    Grid.prototype.processRowChanges = function (changes) {
        var _this_1 = this;
        var keyField = this.getPrimaryKeyFieldNames()[0];
        changes = Object.assign({ addedRecords: [], changedRecords: [], deletedRecords: [] }, changes);
        var promise = this.getDataModule().saveChanges(changes, keyField, {}, this.getDataModule().generateQuery().requiresCount());
        if (this.getDataModule().isRemote()) {
            promise.then(function () {
                _this_1.setNewData();
            });
        }
        else {
            this.setNewData();
        }
    };
    Grid.prototype.setNewData = function () {
        var _this_1 = this;
        var oldValues = JSON.parse(JSON.stringify(this.getCurrentViewRecords()));
        var getData = this.getDataModule().getData({}, this.getDataModule().generateQuery().requiresCount());
        getData.then(function (e) {
            _this_1.bulkRefresh(e.result, oldValues, e.count);
        });
    };
    Grid.prototype.deleteRowElement = function (row) {
        var tr = this.getRowElementByUID(row.uid);
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(tr);
    };
    Grid.prototype.bulkRefresh = function (result, oldValues, count) {
        var _this_1 = this;
        var rowObj = this.getRowsObject();
        var keyField = this.getPrimaryKeyFieldNames()[0];
        var _loop_5 = function (i) {
            if (!result.filter(function (e) { return e["" + keyField] === rowObj[parseInt(i.toString(), 10)].data["" + keyField]; }).length) {
                this_5.deleteRowElement(rowObj[parseInt(i.toString(), 10)]);
                rowObj.splice(i, 1);
                i--;
            }
            out_i_1 = i;
        };
        var this_5 = this, out_i_1;
        for (var i = 0; i < rowObj.length; i++) {
            _loop_5(i);
            i = out_i_1;
        }
        var _loop_6 = function (i) {
            var isRowExist;
            oldValues.filter(function (e) {
                if (e["" + keyField] === result[parseInt(i.toString(), 10)]["" + keyField]) {
                    if (e !== result[parseInt(i.toString(), 10)]) {
                        _this_1.setRowData(result[parseInt(i.toString(), 10)]["" + keyField], result[parseInt(i.toString(), 10)]);
                    }
                    isRowExist = true;
                }
            });
            if (!isRowExist) {
                this_6.renderRowElement(result[parseInt(i.toString(), 10)], i);
            }
        };
        var this_6 = this;
        for (var i = 0; i < result.length; i++) {
            _loop_6(i);
        }
        this.currentViewData = result;
        var rows = [].slice.call(this.getContentTable().getElementsByClassName(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .row */ .nM));
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .resetRowIndex */ .Kc)(this, this.getRowsObject(), rows);
        (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .setRowElements */ .cz)(this);
        if (this.allowPaging) {
            this.notify(_base_constant__WEBPACK_IMPORTED_MODULE_8__/* .inBoundModelChanged */ .$HR, { module: 'pager', properties: { totalRecordsCount: count } });
        }
    };
    Grid.prototype.renderRowElement = function (data, index) {
        var row = new _renderer_row_renderer__WEBPACK_IMPORTED_MODULE_15__/* .RowRenderer */ .k(this.serviceLocator, null, this);
        var model = new _services_row_model_generator__WEBPACK_IMPORTED_MODULE_29__/* .RowModelGenerator */ .Z(this);
        var modelData = model.generateRows([data]);
        var tr = row.render(modelData[0], this.getColumns());
        this.addRowObject(modelData[0], index);
        var tbody = this.getContentTable().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
        if (tbody.querySelector('.e-emptyrow')) {
            var emptyRow = tbody.querySelector('.e-emptyrow');
            emptyRow.parentNode.removeChild(emptyRow);
            if (this.frozenRows && this.element.querySelector('.e-frozenrow-empty')) {
                this.element.querySelector('.e-frozenrow-empty').classList.remove('e-frozenrow-empty');
            }
        }
        if (this.frozenRows && index < this.frozenRows) {
            tbody = this.getHeaderContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
        }
        else {
            tbody = this.getContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
        }
        tbody = this.getContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
        tbody.appendChild(tr);
    };
    Grid.prototype.addRowObject = function (row, index) {
        this.getRowsObject().splice(index, 1, row);
    };
    /**
     * @hidden
     * @returns {void}
     */
    Grid.prototype.updateVisibleExpandCollapseRows = function () {
        var rows = this.getRowsObject();
        for (var i = 0, len = rows.length; i < len; i++) {
            if ((rows[parseInt(i.toString(), 10)].isDataRow || rows[parseInt(i.toString(), 10)].isAggregateRow)
                && this.getRowElementByUID(rows[parseInt(i.toString(), 10)].uid)
                && this.getRowElementByUID(rows[parseInt(i.toString(), 10)].uid).style.display === 'none') {
                rows[parseInt(i.toString(), 10)].visible = false;
            }
            else {
                rows[parseInt(i.toString(), 10)].visible = true;
            }
        }
    };
    /**
     * Method to sanitize any suspected untrusted strings and scripts before rendering them.
     *
     * @param {string} value - Specifies the html value to sanitize
     * @returns {string} Returns the sanitized html string
     * @hidden
     */
    Grid.prototype.sanitize = function (value) {
        if (this.enableHtmlSanitizer) {
            return _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .SanitizeHtmlHelper */ .r4.sanitize(value);
        }
        return value;
    };
    /**
     * @param {string | number} height - specifies the height
     * @returns {number | string} - specifies the height number
     * @hidden
     */
    Grid.prototype.getHeight = function (height) {
        if (!Number.isInteger(height) && height.indexOf('%') !== -1) {
            height = parseInt(height, 10) / 100 * this.element.clientHeight;
        }
        else if (!Number.isInteger(height) && this.height !== 'auto') {
            height = parseInt(height, 10);
        }
        else {
            height = this.height;
        }
        return height;
    };
    /**
     * @hidden
     * @returns {Element} - returns frozen right content

     */
    Grid.prototype.getFrozenRightContent = function () {
        return this.contentModule.getPanel();
    };
    /**
     * @hidden
     * @returns {Element} - returns frozen right header

     */
    Grid.prototype.getFrozenRightHeader = function () {
        return this.headerModule.getPanel();
    };
    /**
     * @hidden
     * @returns {Element} - returns movable header tbody

     */
    Grid.prototype.getMovableHeaderTbody = function () {
        return this.getHeaderContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
    };
    /**
     * @hidden
     * @returns {Element} - returns movable content tbody

     */
    Grid.prototype.getMovableContentTbody = function () {
        return this.getContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
    };
    /**
     * @hidden
     * @returns {Element} - returns frozen header tbody

     */
    Grid.prototype.getFrozenHeaderTbody = function () {
        return this.getHeaderContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
    };
    /**
     * @hidden
     * @returns {Element} - returns frozen left content tbody

     */
    Grid.prototype.getFrozenLeftContentTbody = function () {
        return this.getContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
    };
    /**
     * @hidden
     * @returns {Element} - returns frozen right header tbody

     */
    Grid.prototype.getFrozenRightHeaderTbody = function () {
        return this.getHeaderContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
    };
    /**
     * @returns {Element} returns frozen right content tbody

     * @hidden
     */
    Grid.prototype.getFrozenRightContentTbody = function () {
        return this.getContent().querySelector(_base_string_literals__WEBPACK_IMPORTED_MODULE_10__/* .tbody */ .T_);
    };
    /**
     * @param {boolean} isCustom - Defines custom filter dialog open
     * @returns {void}
     * @hidden
     */
    Grid.prototype.showResponsiveCustomFilter = function (isCustom) {
        if (this.filterModule) {
            this.filterModule.showCustomFilter(isCustom || this.rowRenderingMode === 'Vertical');
        }
    };
    /**
     * @param {boolean} isCustom - Defines custom sort dialog open
     * @returns {void}
     * @hidden
     */
    Grid.prototype.showResponsiveCustomSort = function (isCustom) {
        if (this.sortModule) {
            this.sortModule.showCustomSort(isCustom || this.rowRenderingMode === 'Vertical');
        }
    };
    /**
     * @param {boolean} isCustom - Defines custom column chooser dialog open
     * @returns {void}
     * @hidden
     */
    Grid.prototype.showResponsiveCustomColumnChooser = function (isCustom) {
        if (this.columnChooserModule) {
            this.columnChooserModule.showCustomColumnChooser(isCustom || this.rowRenderingMode === 'Vertical');
        }
    };
    /**
     * To manually show the vertical row mode filter dialog
     *
     * @returns {void}
     */
    Grid.prototype.showAdaptiveFilterDialog = function () {
        if (this.enableAdaptiveUI) {
            this.showResponsiveCustomFilter(true);
        }
    };
    /**
     * To manually show the vertical row sort filter dialog
     *
     * @returns {void}
     */
    Grid.prototype.showAdaptiveSortDialog = function () {
        if (this.enableAdaptiveUI) {
            this.showResponsiveCustomSort(true);
        }
    };
    /**
     * @param {boolean} isColVirtualization - Defines column virtualization
     * @returns {Column[]} returns array of column models
     * @hidden
     */
    Grid.prototype.getCurrentVisibleColumns = function (isColVirtualization) {
        var cols = [];
        var gridCols = isColVirtualization ? this.getColumns() : this.columnModel;
        for (var _i = 0, gridCols_1 = gridCols; _i < gridCols_1.length; _i++) {
            var col = gridCols_1[_i];
            if (col.visible) {
                cols.push(col);
            }
        }
        return cols;
    };
    Grid.prototype.enableInfiniteAggrgate = function () {
        if (this.enableInfiniteScrolling && this.groupSettings.columns.length && !this.groupSettings.disablePageWiseAggregates
            && !this.groupSettings.enableLazyLoading) {
            this.setProperties({ groupSettings: { disablePageWiseAggregates: true } }, true);
        }
    };
    var Grid_1;
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)([])
    ], Grid.prototype, "currentViewData", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "parentDetails", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "showHider", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)([])
    ], Grid.prototype, "columns", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], Grid.prototype, "enableAltRow", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], Grid.prototype, "enableHover", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableAutoFill", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], Grid.prototype, "allowKeyboard", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableStickyHeader", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowTextWrap", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, TextWrapSettings)
    ], Grid.prototype, "textWrapSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, ResizeSettings)
    ], Grid.prototype, "resizeSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowPaging", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, _models_page_settings__WEBPACK_IMPORTED_MODULE_30__/* .PageSettings */ .n)
    ], Grid.prototype, "pageSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, LoadingIndicator)
    ], Grid.prototype, "loadingIndicator", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], Grid.prototype, "enableVirtualMaskRow", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableVirtualization", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableColumnVirtualization", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableInfiniteScrolling", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, SearchSettings)
    ], Grid.prototype, "searchSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowSorting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Ellipsis')
    ], Grid.prototype, "clipMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], Grid.prototype, "allowMultiSorting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowExcelExport", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowPdfExport", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, SortSettings)
    ], Grid.prototype, "sortSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, InfiniteScrollSettings)
    ], Grid.prototype, "infiniteScrollSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(true)
    ], Grid.prototype, "allowSelection", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(-1)
    ], Grid.prototype, "selectedRowIndex", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, SelectionSettings)
    ], Grid.prototype, "selectionSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowFiltering", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Horizontal')
    ], Grid.prototype, "rowRenderingMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableAdaptiveUI", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Both')
    ], Grid.prototype, "adaptiveUIMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowReordering", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowResizing", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowRowDragAndDrop", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, RowDropSettings)
    ], Grid.prototype, "rowDropSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, FilterSettings)
    ], Grid.prototype, "filterSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "allowGrouping", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableImmutableMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "showColumnMenu", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "autoFit", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, GroupSettings)
    ], Grid.prototype, "groupSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, EditSettings)
    ], Grid.prototype, "editSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Collection */ .pM)([], _models_aggregate__WEBPACK_IMPORTED_MODULE_31__/* .AggregateRow */ .K)
    ], Grid.prototype, "aggregates", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "showColumnChooser", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Complex */ .pr)({}, _models_column_chooser_settings__WEBPACK_IMPORTED_MODULE_32__/* .ColumnChooserSettings */ .J)
    ], Grid.prototype, "columnChooserSettings", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(false)
    ], Grid.prototype, "enableHeaderFocus", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('auto')
    ], Grid.prototype, "height", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('auto')
    ], Grid.prototype, "width", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Default')
    ], Grid.prototype, "gridLines", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "rowTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "emptyRecordTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "detailTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "childGrid", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "queryString", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('AllPages')
    ], Grid.prototype, "printMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('Expanded')
    ], Grid.prototype, "hierarchyPrintMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)([])
    ], Grid.prototype, "dataSource", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(null)
    ], Grid.prototype, "rowHeight", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "query", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('USD')
    ], Grid.prototype, "currencyCode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "exportGrids", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "toolbar", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "contextMenuItems", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "columnMenuItems", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "toolbarTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)()
    ], Grid.prototype, "pagerTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(0)
    ], Grid.prototype, "frozenRows", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)(0)
    ], Grid.prototype, "frozenColumns", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], Grid.prototype, "cssClass", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('All')
    ], Grid.prototype, "columnQueryMode", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)({})
    ], Grid.prototype, "currentAction", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Property */ .mA)('')
    ], Grid.prototype, "ej2StatePersistenceVersion", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "created", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "destroyed", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "load", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDataBound", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "queryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "headerCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "actionBegin", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "actionComplete", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "actionFailure", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "dataBound", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "recordDoubleClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "recordClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowSelecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowSelected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDeselecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDeselected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellSelecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellSelected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellDeselecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellDeselected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnSelecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnSelected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnDeselecting", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnDeselected", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnDragStart", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnDrag", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnDrop", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "printComplete", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforePrint", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "pdfQueryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "pdfHeaderQueryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "pdfAggregateQueryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "excelAggregateQueryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "exportDetailDataBound", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "exportDetailTemplate", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "excelQueryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "excelHeaderQueryCellInfo", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeExcelExport", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "excelExportComplete", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforePdfExport", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "pdfExportComplete", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDragStartHelper", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "detailDataBound", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDragStart", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDrag", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "rowDrop", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "toolbarClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeOpenColumnChooser", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeOpenAdaptiveDialog", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "batchAdd", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "batchDelete", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "batchCancel", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeBatchAdd", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeBatchDelete", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeBatchSave", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beginEdit", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "commandClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellEdit", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellSave", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "cellSaved", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "resizeStart", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "resizing", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "resizeStop", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "keyPressed", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeDataBound", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "contextMenuOpen", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "contextMenuClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "contextMenuClose", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnMenuOpen", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnMenuClick", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnMenuClose", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "checkBoxChange", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeCopy", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforePaste", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeAutoFill", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "columnDataStateChange", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "dataStateChange", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "dataSourceChanged", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "exportGroupCaption", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "lazyLoadGroupExpand", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "lazyLoadGroupCollapse", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeDetailTemplateDetach", void 0);
    __decorate([
        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .Jh)()
    ], Grid.prototype, "beforeCustomFilterOpen", void 0);
    Grid = Grid_1 = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .NotifyPropertyChanges */ .kc
    ], Grid);
    return Grid;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .uA));



/***/ })

}]);
//# sourceMappingURL=2f4b903e-6d2ad0bf550bcfff.js.map