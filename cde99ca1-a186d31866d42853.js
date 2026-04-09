"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8566],{

/***/ 32951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SfdtReader)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6841);
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61974);
/* harmony import */ var _list_list_level__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40669);
/* harmony import */ var _list_abstract_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2735);
/* harmony import */ var _list_level_override__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31611);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37603);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9690);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26886);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33077);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3241);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77853);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74744);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12695);
/* harmony import */ var _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74023);
/* harmony import */ var _base_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50836);
/* harmony import */ var _syncfusion_ej2_office_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87853);
/* harmony import */ var _track_changes_track_changes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5852);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88364);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36012);
/* eslint-disable */














/**
 * @private
 */
var SfdtReader = /** @class */ (function () {
    function SfdtReader(documentHelper) {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        this.documentHelper = undefined;
        /**
         * @private
         */
        this.commentStarts = undefined;
        /**
         * @private
         */
        this.commentEnds = undefined;
        /**
         * @private
         */
        this.commentsCollection = undefined;
        /**
         * @private
         */
        this.revisionCollection = undefined;
        this.isPageBreakInsideTable = false;
        this.isParseHeader = false;
        this.footnotes = undefined;
        this.endnotes = undefined;
        this.keywordIndex = undefined;
        this.themes = undefined;
        this.stylesCollection = [];
        /**
         * @private
         */
        this.isCutPerformed = false;
        /**
         * @private
         */
        this.isPaste = false;
        /**
         * @private
         */
        this.isContextBasedPaste = false;
        /**
         * @private
         */
        this.isHtmlPaste = false;
        this.hasFieldSeparator = false;
        this.documentHelper = documentHelper;
        this.editableRanges = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
    }
    Object.defineProperty(SfdtReader.prototype, "isPasting", {
        get: function () {
            return this.viewer && this.viewer.owner.isPastingContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SfdtReader.prototype, "viewer", {
        get: function () {
            return this.documentHelper.owner.viewer;
        },
        enumerable: true,
        configurable: true
    });
    SfdtReader.prototype.convertJsonToDocument = function (json, incrementalOperations) {
        this.commentStarts = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        this.commentEnds = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        this.commentsCollection = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        this.revisionCollection = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        this.fontInfoCollection = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        this.keywordIndex = 0;
        this.footnotes = new _page__WEBPACK_IMPORTED_MODULE_2__/* .Footnote */ .tW();
        this.endnotes = new _page__WEBPACK_IMPORTED_MODULE_2__/* .Footnote */ .tW();
        var sections = [];
        var jsonObject = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.getSfdtDocument(json);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject.optimizeSfdt) && jsonObject.optimizeSfdt) {
            this.keywordIndex = 1;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSubstitutionTableProperty */ .gG_[this.keywordIndex]])) {
            this.parseFontSubstitutionTable(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSubstitutionTableProperty */ .gG_[this.keywordIndex]]);
        }
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]])) {
            this.parseCharacterFormat(0, this.viewer.owner.characterFormat, this.documentHelper.characterFormat);
        }
        else {
            this.documentHelper.characterFormat.clearFormat();
            this.parseCharacterFormat(this.keywordIndex, jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], this.documentHelper.characterFormat);
        }
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]])) {
            this.parseParagraphFormat(0, this.viewer.owner.paragraphFormat, this.documentHelper.paragraphFormat);
        }
        else {
            this.parseParagraphFormat(this.keywordIndex, jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]], this.documentHelper.paragraphFormat);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .themeFontLanguagesProperty */ .L4m[this.keywordIndex]])) {
            this.parseCharacterFormat(this.keywordIndex, jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .themeFontLanguagesProperty */ .L4m[this.keywordIndex]], this.documentHelper.themeFontLanguage);
        }
        this.parseDocumentProtection(jsonObject);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .defaultTabWidthProperty */ .owP[this.keywordIndex]])) {
            this.documentHelper.defaultTabWidth = jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .defaultTabWidthProperty */ .owP[this.keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .trackChangesProperty */ .SEu[this.keywordIndex]])) {
            //when new document is open in collaborative editing, again building operation for enable track changes. So skipping it. 
            if (this.documentHelper.owner.enableTrackChanges !== _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .trackChangesProperty */ .SEu[this.keywordIndex]])) {
                this.documentHelper.owner.skipSettingsOps = true;
            }
            this.documentHelper.owner.enableTrackChanges = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .trackChangesProperty */ .SEu[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .doNotUseHTMLParagraphAutoSpacingProperty */ .A6j[this.keywordIndex]])) {
            this.documentHelper.dontUseHtmlParagraphAutoSpacing = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .doNotUseHTMLParagraphAutoSpacingProperty */ .A6j[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowSpaceOfSameStyleInTableProperty */ ._cN[this.keywordIndex]])) {
            this.documentHelper.allowSpaceOfSameStyleInTable = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowSpaceOfSameStyleInTableProperty */ ._cN[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .alignTablesRowByRowProperty */ .tMl[this.keywordIndex]])) {
            this.documentHelper.alignTablesRowByRow = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .alignTablesRowByRowProperty */ .tMl[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .backgroundProperty */ .SM0[this.keywordIndex]])) {
            this.documentHelper.backgroundColor = this.getColor(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .backgroundProperty */ .SM0[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .compatibilityModeProperty */ .fFD[this.keywordIndex]])) {
            this.documentHelper.compatibilityMode = this.getCompatibilityMode(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .compatibilityModeProperty */ .fFD[this.keywordIndex]]);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.owner.documentSettings)) {
                this.documentHelper.owner.documentSettings.compatibilityMode = this.getCompatibilityMode(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .compatibilityModeProperty */ .fFD[this.keywordIndex]]);
            }
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListsProperty */ .Nky[this.keywordIndex]])) {
            this.parseAbstractList(jsonObject, this.documentHelper.abstractLists);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .listsProperty */ .lne[this.keywordIndex]])) {
            this.parseList(jsonObject, this.documentHelper.lists);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]])) {
            this.parseStyles(jsonObject, this.documentHelper.styles);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .commentsProperty */ .GZZ[this.keywordIndex]])) {
            this.parseComments(jsonObject, this.documentHelper.comments);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionsProperty */ .QVc[this.keywordIndex]])) {
            this.parseRevisions(jsonObject, []);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .imagesProperty */ .oeq[this.keywordIndex]])) {
            this.parseImages(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .imagesProperty */ .oeq[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .sectionsProperty */ .gNC[this.keywordIndex]])) {
            this.parseSections(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .sectionsProperty */ .gNC[this.keywordIndex]], sections);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .customXmlProperty */ .k2s[this.keywordIndex]])) {
            this.parseCustomXml(jsonObject);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldShadingProperty */ .k$t[this.keywordIndex]])) {
            this.documentHelper.owner.documentEditorSettings.formFieldSettings.applyShading = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldShadingProperty */ .k$t[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .footnotesProperty */ .Tsn[this.keywordIndex]])) {
            this.parseFootnotes(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .footnotesProperty */ .Tsn[this.keywordIndex]], this.documentHelper.footnotes);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .endnotesProperty */ .Mo6[this.keywordIndex]])) {
            this.parseEndtnotes(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .endnotesProperty */ .Mo6[this.keywordIndex]], this.documentHelper.endnotes);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .themesProperty */ .qvS[this.keywordIndex]])) {
            this.parseThemes(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .themesProperty */ .qvS[this.keywordIndex]], this.documentHelper.themes);
        }
        this.removeUnmappedBookmark();
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .incrementalOps */ .nxG[0]])) {
            incrementalOperations[_index__WEBPACK_IMPORTED_MODULE_4__/* .incrementalOps */ .nxG[0]] = (jsonObject[_index__WEBPACK_IMPORTED_MODULE_4__/* .incrementalOps */ .nxG[0]]);
        }
        if (this.documentHelper.fieldStacks && this.documentHelper.fieldStacks.length > 0) {
            this.documentHelper.fieldStacks = [];
        }
        if (this.revisionMap) {
            this.revisionMap.clear();
            this.revisionMap = undefined;
        }
        if (this.revisionCollection) {
            this.revisionCollection.clear();
            this.revisionMap = undefined;
        }
        return sections;
    };
    SfdtReader.prototype.parseFontSubstitutionTable = function (fontSubstitutionTable) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable)) {
            if (Object.keys(fontSubstitutionTable).length > 0) {
                var keys = Object.keys(fontSubstitutionTable);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    this.documentHelper.fontSubstitutionTable.add(key, fontSubstitutionTable[key]);
                }
            }
        }
    };
    SfdtReader.prototype.removeUnmappedBookmark = function () {
        var bookmarkKeys = this.documentHelper.bookmarks.keys;
        var endBookmark = this.documentHelper.endBookmarksUpdated;
        for (var i = 0; i < bookmarkKeys.length; i++) {
            if (endBookmark.indexOf(bookmarkKeys[i]) === -1) {
                var bookmark = this.documentHelper.bookmarks.get(bookmarkKeys[i]);
                if (bookmark) {
                    bookmark.line.children.splice(bookmark.line.children.indexOf(bookmark), 1);
                }
                this.documentHelper.bookmarks.remove(bookmarkKeys[i]);
            }
        }
        this.documentHelper.endBookmarksUpdated = [];
    };
    SfdtReader.prototype.parseFootnotes = function (data, footnote) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .separatorProperty */ .jTJ[this.keywordIndex]])) {
            this.parseBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .separatorProperty */ .jTJ[this.keywordIndex]], footnote.separator);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]])) {
            this.parseBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]], footnote.continuationNotice);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]])) {
            this.parseBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]], footnote.continuationSeparator);
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseImages = function (data) {
        for (var img in data) {
            if (Array.isArray(data["" + img])) {
                this.documentHelper.images.add(parseInt(img), data["" + img]);
            }
            else {
                var images = [];
                images.push(data["" + img]);
                this.documentHelper.images.add(parseInt(img), images);
            }
        }
    };
    SfdtReader.prototype.parseEndtnotes = function (data, endnote) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .separatorProperty */ .jTJ[this.keywordIndex]])) {
            this.parseBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .separatorProperty */ .jTJ[this.keywordIndex]], endnote.separator);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]])) {
            this.parseBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]], endnote.continuationNotice);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]])) {
            this.parseBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]], endnote.continuationSeparator);
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseCustomXml = function (data) {
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .customXmlProperty */ .k2s[this.keywordIndex]].length; i++) {
            var xmlData = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .customXmlProperty */ .k2s[this.keywordIndex]][i];
            if (!this.documentHelper.customXmlData.containsKey(xmlData[_index__WEBPACK_IMPORTED_MODULE_4__/* .itemIDProperty */ .KlU[this.keywordIndex]])) {
                this.documentHelper.customXmlData.add(xmlData[_index__WEBPACK_IMPORTED_MODULE_4__/* .itemIDProperty */ .KlU[this.keywordIndex]], xmlData[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlProperty */ .XeO[this.keywordIndex]]);
            }
        }
    };
    SfdtReader.prototype.parseDocumentProtection = function (data) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .formattingProperty */ .XGw[this.keywordIndex]])) {
            this.documentHelper.restrictFormatting = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .formattingProperty */ .XGw[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .enforcementProperty */ .aIf[this.keywordIndex]])) {
            this.documentHelper.isDocumentProtected = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .enforcementProperty */ .aIf[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .protectionTypeProperty */ .FvF[this.keywordIndex]])) {
            this.documentHelper.protectionType = this.getProtectionType(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .protectionTypeProperty */ .FvF[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .hashValueProperty */ .n_F[this.keywordIndex]])) {
            this.documentHelper.hashValue = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .hashValueProperty */ .n_F[this.keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .saltValueProperty */ .ljK[this.keywordIndex]])) {
            this.documentHelper.saltValue = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .saltValueProperty */ .ljK[this.keywordIndex]];
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseStyles = function (data, styles) {
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]].length; i++) {
            var editor = this.documentHelper.owner.editorModule;
            var style = this.documentHelper.styles.findByName(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]);
            // As per MS Word Behaaviour we need to replace the existing style with same name & same type with incoming style.
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style) && this.stylesCollection.indexOf(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i]) < 0 && style.type === this.getStyleType(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]])) {
                styles.remove(style);
            }
            if ((!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) || !styles.contains(style)) {
                this.parseStyle(data, data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i], styles);
            }
        }
        this.stylesCollection = [];
    };
    SfdtReader.prototype.parseRevisions = function (data, revisions) {
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionsProperty */ .QVc[this.keywordIndex]].length; i++) {
            var revisionData = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionsProperty */ .QVc[this.keywordIndex]][i];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(revisionData[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdProperty */ .yy5[this.keywordIndex]]) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(revisionData[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionTypeProperty */ .RaC[this.keywordIndex]])) {
                var revision = this.parseRevision(revisionData);
                var revisionCheck = true;
                if (!this.documentHelper.owner.sfdtExportModule.copyWithTrackChange && this.isPaste) {
                    if (this.getRevisionType(revisionData[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionTypeProperty */ .RaC[this.keywordIndex]]) === 'Insertion' && this.isPaste && this.documentHelper.owner.enableTrackChanges && !this.documentHelper.owner.editorModule.isRemoteAction) {
                        // var editor = this.documentHelper.owner.editor;
                        // if (!isNullOrUndefined(editor) && editor.isRemoteAction) {
                        //     this.documentHelper.owner.editor.revisionData.push(this.documentHelper.owner.editor.getMarkerData(undefined, undefined, revision));
                        // }
                        continue;
                    }
                    else {
                        if (!this.revisionCollection.containsKey(revisionData[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdProperty */ .yy5[this.keywordIndex]])) {
                            this.revisionCollection.add(revisionData[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdProperty */ .yy5[this.keywordIndex]], revision);
                        }
                    }
                }
                else {
                    this.revisionCollection.add(revisionData[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdProperty */ .yy5[this.keywordIndex]], revision);
                }
                for (var j = 0; j < revisions.length; j++) {
                    if (revisions[j].revisionID === revision.revisionID) {
                        revisionCheck = false;
                    }
                }
                if (revisionCheck && !this.documentHelper.owner.editorModule.isRemoteAction) {
                    revisions.push(revision);
                }
            }
        }
        if (this.documentHelper.owner.sfdtExportModule) {
            this.documentHelper.owner.sfdtExportModule.copyWithTrackChange = false;
        }
    };
    SfdtReader.prototype.parseRevision = function (data) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data)) {
            var revision = new _track_changes_track_changes__WEBPACK_IMPORTED_MODULE_5__/* .Revision */ .A(this.viewer.owner, data[_index__WEBPACK_IMPORTED_MODULE_4__/* .authorProperty */ .BLc[this.keywordIndex]], data[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateProperty */ .wrk[this.keywordIndex]]);
            revision.revisionID = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdProperty */ .yy5[this.keywordIndex]];
            revision.revisionType = this.getRevisionType(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionTypeProperty */ .RaC[this.keywordIndex]]);
            revision.customData = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .customDataProperty */ .PmE[this.keywordIndex]];
            return revision;
        }
        else {
            return undefined;
        }
    };
    SfdtReader.prototype.checkAndApplyRevision = function (keyIndex, inline, item, owner) {
        var revisionIds = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[keyIndex]];
        if (!revisionIds || revisionIds.length === 0) {
            return;
        }
        var isRemotePasteRow = this.isPaste && this.documentHelper.owner.editorModule.isRemoteAction && item instanceof _format_index__WEBPACK_IMPORTED_MODULE_6__/* .WRowFormat */ .n;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(revisionIds) && revisionIds.length > 0) {
            for (var i = 0; i < revisionIds.length; i++) {
                var id = revisionIds[i];
                var revision = this.revisionCollection.get(id);
                if (revision) {
                    // This logic is added for Compatibility issue (Revisions are not added more than once for the same item if the author and revision type are the same).
                    if (item.revisionLength > 0 && item.getRevision(0).author == revision.author && item.getRevision(0).revisionType == revision.revisionType) {
                        return;
                    }
                    else {
                        var changes = this.viewer.owner.revisionsInternal.changes;
                        if (changes.indexOf(revision) === -1) {
                            changes.push(revision);
                            this.documentHelper.revisionsInternal.add(id, revision);
                        }
                        revision = this.checkAndCreateNewRevision(revision, owner, item);
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(revision)) {
                            item.revisions.push(revision);
                        }
                    }
                    if (isRemotePasteRow) {
                        this.documentHelper.owner.editorModule.remotePasteRevision.push(revision);
                    }
                }
            }
        }
    };
    SfdtReader.prototype.checkAndCreateNewRevision = function (revision, owner, item) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.revisionMap)) {
            this.revisionMap = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        }
        var parentRevisionId = revision.revisionID;
        var mapRevision = this.revisionMap.get(owner);
        var ownerMap = mapRevision ? mapRevision : undefined;
        var hasRevision = ownerMap ? ownerMap.get(parentRevisionId) : undefined;
        //Start of first compatibility check logic 
        //This logic is added for Compatibility issue (revisions are not splitted properly for different user/type).
        var canAddNewRevision = false;
        var previousElement;
        if (item instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .ElementBox */ .Qn && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(item.previousElement) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hasRevision)) {
            previousElement = item.previousElement;
            if (previousElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg || previousElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .CommentCharacterElementBox */ .Qh) {
                if (previousElement.revisionLength === 0) {
                    canAddNewRevision = true;
                }
                for (var i = 0; i < previousElement.revisionLength; i++) {
                    var itemRevision = previousElement.getRevision(i);
                    if (itemRevision.revisionType !== revision.revisionType || itemRevision.author !== revision.author) {
                        canAddNewRevision = true;
                    }
                }
            }
        }
        // End of first compatibility check logic
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(revision.ownerNode) && revision.ownerNode !== owner || canAddNewRevision) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hasRevision) && !canAddNewRevision) {
                revision = hasRevision;
            }
            else {
                //Create new revision id for next paragraph
                var revisionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                //Clone the revision
                revision = revision.cloneRevision();
                revision.revisionID = revisionId;
                var currentRevisionIndex = this.revisionCollection.values.indexOf(revision);
                this.revisionCollection.keys.splice(currentRevisionIndex + 1, 0, revisionId);
                this.revisionCollection.values.splice(currentRevisionIndex + 1, 0, revision);
                var changes = this.viewer.owner.revisionsInternal.changes;
                if (changes.indexOf(revision) === -1) {
                    changes.push(revision);
                    this.documentHelper.revisionsInternal.add(revision.revisionID, revision);
                }
            }
        }
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(ownerMap) || (ownerMap && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hasRevision))) {
            if (mapRevision) {
                mapRevision.add(parentRevisionId, revision);
            }
            else {
                var splittedRevison = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
                splittedRevison.add(parentRevisionId, revision);
                this.revisionMap.add(owner, splittedRevison);
            }
        }
        //Start of second compatibility check logic
        //The revision already inserted & new revision is created for the previousItem & the current item map's with older revision which is already added, we need to set current revision as previousItem's revision.
        if (!canAddNewRevision && previousElement && previousElement.revisionLength > 0) {
            var previousRevision = this.documentHelper.owner.editorModule.retrieveRevisionByType(previousElement, revision.revisionType);
            if (this.documentHelper.revisionsInternal.containsKey(revision.revisionID) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(previousRevision) && previousRevision !== revision) {
                revision = this.revisionCollection.get(previousRevision.revisionID);
            }
        }
        //End of second compatibility check logic
        revision.ownerNode = owner;
        return revision;
    };
    SfdtReader.prototype.parseComments = function (data, comments) {
        var count = 0;
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .commentsProperty */ .GZZ[this.keywordIndex]].length; i++) {
            var commentData = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .commentsProperty */ .GZZ[this.keywordIndex]][i];
            var commentElement = undefined;
            commentElement = this.parseComment(commentData, commentElement);
            while (count < commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .replyCommentsProperty */ .kln[this.keywordIndex]].length) {
                var replyComment = undefined;
                replyComment = this.parseComment(commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .replyCommentsProperty */ .kln[this.keywordIndex]][count], replyComment);
                replyComment.ownerComment = commentElement;
                replyComment.isReply = true;
                commentElement.replyComments.push(replyComment);
                this.commentsCollection.add(replyComment.commentId, replyComment);
                count++;
            }
            this.commentsCollection.add(commentElement.commentId, commentElement);
            comments.push(commentElement);
            count = 0;
        }
    };
    SfdtReader.prototype.parseComment = function (commentData, commentElement) {
        commentElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CommentElementBox */ .tX(commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateProperty */ .wrk[this.keywordIndex]]);
        commentElement.author = commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .authorProperty */ .BLc[this.keywordIndex]];
        commentElement.initial = commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .initialProperty */ .JTS[this.keywordIndex]];
        commentElement.commentId = commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .commentIdProperty */ .Cl$[this.keywordIndex]];
        commentElement.isResolved = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .doneProperty */ .gfu[this.keywordIndex]]);
        commentElement.text = this.parseCommentText(commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]]);
        commentElement.mentions = this.parseCommentMentions(commentData[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]]);
        commentElement.isPosted = true;
        return commentElement;
    };
    SfdtReader.prototype.parseCommentText = function (blocks) {
        var text = '';
        var isFieldDisplayText = false;
        for (var i = 0; i < blocks.length; i++) {
            if (i !== 0) {
                text += '<div>';
            }
            if (blocks[i][_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]].length > 0) {
                var inlines = blocks[i][_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]];
                for (var j = 0; j < inlines.length; j++) {
                    var inline = inlines[j];
                    if ((inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 0) || (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 1) || (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 2)) {
                        if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 0) {
                            j++;
                        }
                        else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 2) {
                            isFieldDisplayText = true;
                        }
                        continue;
                    }
                    var textValue = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]];
                    if (isFieldDisplayText) {
                        text = text + '<span contenteditable="false" class="e-mention-chip">' + textValue + '</span>';
                        isFieldDisplayText = false;
                    }
                    else if (textValue) {
                        text = text + textValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    }
                }
            }
            else {
                text += i === 0 ? '<div><br></div>' : '<br>';
            }
            if (i !== 0) {
                text += '</div>';
            }
        }
        return text;
    };
    SfdtReader.prototype.parseCommentMentions = function (blocks) {
        var data = [];
        var isFieldCode = false;
        var isFieldDisplayText = false;
        for (var i = 0; i < blocks.length; i++) {
            var inlines = blocks[i][_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]];
            var mention = {};
            for (var j = 0; j < inlines.length; j++) {
                var inline = inlines[j];
                if ((inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 0) || (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 1) || (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 2)) {
                    if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 0) {
                        isFieldCode = true;
                    }
                    else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 2) {
                        isFieldDisplayText = true;
                    }
                    continue;
                }
                var textValue = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]];
                if (isFieldCode) {
                    var updatedText = textValue.replace(/.*"(.*)".*/, '$1');
                    updatedText = updatedText.replace('mailto:', '');
                    mention.value = updatedText;
                    isFieldCode = false;
                }
                else if (isFieldDisplayText) {
                    mention.text = textValue;
                    isFieldDisplayText = false;
                    data.push(mention);
                    mention = {};
                }
            }
        }
        return data;
    };
    SfdtReader.prototype.parseStyle = function (data, style, styles, resetKeyIndex) {
        var wStyle;
        var keyIndex = 0;
        var editor = this.documentHelper.owner.editorModule;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(resetKeyIndex) && resetKeyIndex) {
            keyIndex = this.keywordIndex;
            this.keywordIndex = 0;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]])) {
            if (this.getStyleType(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]]) === 'Paragraph') {
                wStyle = new _format_index__WEBPACK_IMPORTED_MODULE_7__/* .WParagraphStyle */ .BG();
                wStyle.type = 'Paragraph';
            }
            if (this.getStyleType(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]]) === 'Character') {
                wStyle = new _format_index__WEBPACK_IMPORTED_MODULE_7__/* .WCharacterStyle */ .SV();
                wStyle.type = 'Character';
            }
            if (this.getStyleType(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]]) === 'Table') {
                wStyle = new _format_index__WEBPACK_IMPORTED_MODULE_7__/* .WTableStyle */ .rI();
                wStyle.type = 'Table';
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]])) {
                wStyle.name = style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]];
            }
            styles.push(wStyle);
            this.stylesCollection.push(style);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]])) {
                var basedOn = void 0;
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) {
                    basedOn = this.documentHelper.styles.findByName(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]]);
                }
                else {
                    basedOn = styles.findByName(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]]);
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(basedOn)) {
                    if (basedOn.type === wStyle.type && basedOn.name !== wStyle.name) {
                        wStyle.basedOn = basedOn;
                        var baseStyle = this.getStyle(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]], data);
                        if (this.isPaste && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(baseStyle)) {
                            if (wStyle.type === 'Paragraph' && this.getStyleType(baseStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]]) === 'Paragraph') {
                                this.updateParagraphFormatFromBaseStyle(style, baseStyle);
                            }
                        }
                    }
                }
                else {
                    var basedStyle = this.getStyle(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]], data);
                    var styleString = void 0;
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(basedStyle) && this.getStyleType(basedStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]]) === wStyle.type) {
                        styleString = basedStyle;
                    }
                    else {
                        if (wStyle.type === 'Paragraph') {
                            styleString = JSON.parse('{"type":"Paragraph","name":"Normal","next":"Normal"}');
                        }
                        else if (wStyle.type === 'Character') {
                            styleString = JSON.parse('{"type": "Character","name": "Default Paragraph Font"}');
                        }
                    }
                    this.parseStyle(data, styleString, styles);
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) {
                        wStyle.basedOn = this.documentHelper.styles.findByName(styleString[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]);
                    }
                    else {
                        wStyle.basedOn = styles.findByName(styleString[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]);
                    }
                }
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .linkProperty */ .YFC[this.keywordIndex]])) {
                var link = styles.findByName(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .linkProperty */ .YFC[this.keywordIndex]]);
                var linkStyle = this.getStyle(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .linkProperty */ .YFC[this.keywordIndex]], data);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) {
                    link = this.documentHelper.styles.findByName(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .linkProperty */ .YFC[this.keywordIndex]]);
                }
                var styleString = void 0;
                if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(link)) {
                    if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(linkStyle)) {
                        //Construct the CharacterStyle string
                        var charaStyle = {};
                        charaStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = style[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]];
                        charaStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]] = style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]] + ' Char';
                        charaStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]] = 'Character';
                        //TODO: Implement basedOn
                        charaStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]] = style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]] === 'Normal' ? 'Default Paragraph Font' : (style[_index__WEBPACK_IMPORTED_MODULE_4__/* .basedOnProperty */ .i8H[this.keywordIndex]] + ' Char');
                        styleString = charaStyle;
                    }
                    else {
                        styleString = linkStyle;
                    }
                    this.parseStyle(data, styleString, styles);
                    var linkedStyle = void 0;
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) {
                        linkedStyle = this.documentHelper.styles.findByName(styleString[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]);
                        wStyle.link = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(linkedStyle) ? style[_index__WEBPACK_IMPORTED_MODULE_4__/* .linkProperty */ .YFC[this.keywordIndex]] : linkedStyle;
                    }
                    else {
                        linkedStyle = styles.findByName(styleString[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]);
                        wStyle.link = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(linkedStyle) ? style[_index__WEBPACK_IMPORTED_MODULE_4__/* .linkProperty */ .YFC[this.keywordIndex]] : linkedStyle;
                    }
                }
                else {
                    wStyle.link = link;
                }
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]])) {
                this.parseCharacterFormat(this.keywordIndex, style[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], wStyle.characterFormat);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]])) {
                this.parseParagraphFormat(this.keywordIndex, style[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]], wStyle.paragraphFormat);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nextProperty */ .rJj[this.keywordIndex]])) {
                if (style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nextProperty */ .rJj[this.keywordIndex]] === style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]) {
                    wStyle.next = wStyle;
                }
                else {
                    var next = void 0;
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) {
                        next = this.documentHelper.styles.findByName(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nextProperty */ .rJj[this.keywordIndex]]);
                    }
                    else {
                        next = styles.findByName(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nextProperty */ .rJj[this.keywordIndex]]);
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(next) && next.type === wStyle.type) {
                        wStyle.next = next;
                    }
                    else {
                        var nextStyleString = this.getStyle(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .nextProperty */ .rJj[this.keywordIndex]], data);
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nextStyleString)) {
                            this.parseStyle(data, nextStyleString, styles);
                            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editor) && editor.isRemoteAction) {
                                wStyle.next = this.documentHelper.styles.findByName(nextStyleString.name);
                            }
                            else {
                                wStyle.next = styles.findByName(nextStyleString.name);
                            }
                        }
                        else {
                            wStyle.next = wStyle;
                        }
                    }
                }
            }
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(resetKeyIndex) && resetKeyIndex) {
            this.keywordIndex = keyIndex;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wStyle) && wStyle.type !== 'Table') {
            this.documentHelper.addToStylesMap(wStyle);
        }
    };
    SfdtReader.prototype.updateParagraphFormatFromBaseStyle = function (style, baseStyle) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]]) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(baseStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]])) {
            var paragraphFormat = style[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]];
            var baseParagraphFormat = baseStyle[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]];
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .rightIndentProperty */ .OLD[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .rightIndentProperty */ .OLD[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightIndentProperty */ .OLD[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightIndentProperty */ .OLD[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .beforeSpacingProperty */ .af2[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .beforeSpacingProperty */ .af2[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .beforeSpacingProperty */ .af2[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .beforeSpacingProperty */ .af2[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .afterSpacingProperty */ .NX2[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .afterSpacingProperty */ .NX2[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .afterSpacingProperty */ .NX2[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .afterSpacingProperty */ .NX2[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingTypeProperty */ .lcE[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingTypeProperty */ .lcE[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingTypeProperty */ .lcE[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingTypeProperty */ .lcE[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .textAlignmentProperty */ .GL[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .textAlignmentProperty */ .GL[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .textAlignmentProperty */ .GL[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .textAlignmentProperty */ .GL[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .outlineLevelProperty */ .u_B[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .outlineLevelProperty */ .u_B[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .outlineLevelProperty */ .u_B[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .outlineLevelProperty */ .u_B[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .contextualSpacingProperty */ .i9u[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .contextualSpacingProperty */ .i9u[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .contextualSpacingProperty */ .i9u[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .contextualSpacingProperty */ .i9u[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .keepWithNextProperty */ .K4C[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .keepWithNextProperty */ .K4C[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepWithNextProperty */ .K4C[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepWithNextProperty */ .K4C[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .keepLinesTogetherProperty */ .gvY[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .keepLinesTogetherProperty */ .gvY[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepLinesTogetherProperty */ .gvY[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepLinesTogetherProperty */ .gvY[this.keywordIndex]];
            }
            if (!paragraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .widowControlProperty */ .bAD[this.keywordIndex])
                && baseParagraphFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .widowControlProperty */ .bAD[this.keywordIndex])) {
                paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .widowControlProperty */ .bAD[this.keywordIndex]] = baseParagraphFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .widowControlProperty */ .bAD[this.keywordIndex]];
            }
        }
    };
    SfdtReader.prototype.getStyle = function (name, data) {
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]].length; i++) {
            if (data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]] === name) {
                return data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i];
            }
        }
        return undefined;
    };
    SfdtReader.prototype.parseAbstractList = function (data, abstractLists) {
        var abstractListMap = new _base_dictionary__WEBPACK_IMPORTED_MODULE_1__/* .Dictionary */ .b();
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListsProperty */ .Nky[this.keywordIndex]].length; i++) {
            var abstractList = new _list_abstract_list__WEBPACK_IMPORTED_MODULE_8__/* .WAbstractList */ .M();
            var abstract = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListsProperty */ .Nky[this.keywordIndex]][i];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(abstract)) {
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListIdProperty */ .zOm[this.keywordIndex]])) {
                    abstractList.abstractListId = abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListIdProperty */ .zOm[this.keywordIndex]];
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .nsidProperty */ .cUk])) {
                    abstractList.nsid = abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .nsidProperty */ .cUk];
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .levelsProperty */ .dxC[this.keywordIndex]])) {
                    for (var j = 0; j < abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .levelsProperty */ .dxC[this.keywordIndex]].length; j++) {
                        var level = abstract[_index__WEBPACK_IMPORTED_MODULE_4__/* .levelsProperty */ .dxC[this.keywordIndex]][j];
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(level)) {
                            var listLevel = this.parseListLevel(level, abstractList);
                            abstractList.levels.push(listLevel);
                        }
                    }
                }
            }
            if (abstractListMap.containsKey(abstractList.abstractListId)) {
                var index = abstractLists.indexOf(abstractListMap.get(abstractList.abstractListId));
                if (index >= 0) {
                    abstractLists.splice(index, 1);
                    abstractListMap.remove(abstractList.abstractListId);
                }
            }
            abstractListMap.add(abstractList.abstractListId, abstractList);
            abstractLists.push(abstractList);
        }
    };
    SfdtReader.prototype.parseListLevel = function (data, owner) {
        var listLevel = new _list_list_level__WEBPACK_IMPORTED_MODULE_9__/* .WListLevel */ .g(owner);
        if (this.getListLevelPattern(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .listLevelPatternProperty */ .K_H[this.keywordIndex]]) === 'Bullet') {
            listLevel.listLevelPattern = 'Bullet';
            listLevel.numberFormat = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberFormatProperty */ .kg5[this.keywordIndex]]) ? data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberFormatProperty */ .kg5[this.keywordIndex]] : '';
        }
        else {
            listLevel.listLevelPattern = this.getListLevelPattern(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .listLevelPatternProperty */ .K_H[this.keywordIndex]]);
            listLevel.startAt = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .startAtProperty */ .PEc[this.keywordIndex]];
            listLevel.numberFormat = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberFormatProperty */ .kg5[this.keywordIndex]]) ? data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberFormatProperty */ .kg5[this.keywordIndex]] : '';
            if (data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartLevelProperty */ .dli[this.keywordIndex]] >= 0) {
                listLevel.restartLevel = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartLevelProperty */ .dli[this.keywordIndex]];
            }
            else {
                listLevel.restartLevel = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .levelNumberProperty */ .$LD[this.keywordIndex]];
            }
        }
        listLevel.paraStyleName = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .paraStyleNameProperty */ .sWc[this.keywordIndex]]) ? data[_index__WEBPACK_IMPORTED_MODULE_4__/* .paraStyleNameProperty */ .sWc[this.keywordIndex]] : '';
        listLevel.isLegalStyleNumbering = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .isLegalStyleNumberingProperty */ .Vb9[this.keywordIndex]]) ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .isLegalStyleNumberingProperty */ .Vb9[this.keywordIndex]]) : false;
        listLevel.followCharacter = this.getFollowCharacterType(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .followCharacterProperty */ .Yuw[this.keywordIndex]]);
        this.parseCharacterFormat(this.keywordIndex, data[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], listLevel.characterFormat);
        this.parseParagraphFormat(this.keywordIndex, data[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]], listLevel.paragraphFormat);
        return listLevel;
    };
    SfdtReader.prototype.parseList = function (data, listCollection) {
        for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .listsProperty */ .lne[this.keywordIndex]].length; i++) {
            var list = new _list_list__WEBPACK_IMPORTED_MODULE_10__/* .WList */ .y();
            var lists = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .listsProperty */ .lne[this.keywordIndex]][i];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListIdProperty */ .zOm[this.keywordIndex]])) {
                list.abstractListId = lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListIdProperty */ .zOm[this.keywordIndex]];
                list.abstractList = this.documentHelper.getAbstractListById(lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .abstractListIdProperty */ .zOm[this.keywordIndex]]);
            }
            listCollection.push(list);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .listIdProperty */ .Bo2[this.keywordIndex]])) {
                list.listId = lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .listIdProperty */ .Bo2[this.keywordIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .nsidProperty */ .cUk])) {
                list.nsid = lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .nsidProperty */ .cUk];
            }
            else {
                list.nsid = list.abstractList.nsid;
            }
            if (lists.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .levelOverridesProperty */ .z66[this.keywordIndex])) {
                this.parseLevelOverride(lists[_index__WEBPACK_IMPORTED_MODULE_4__/* .levelOverridesProperty */ .z66[this.keywordIndex]], list);
            }
        }
    };
    SfdtReader.prototype.parseLevelOverride = function (data, list) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data)) {
            return;
        }
        for (var i = 0; i < data.length; i++) {
            var levelOverrides = new _list_level_override__WEBPACK_IMPORTED_MODULE_11__/* .WLevelOverride */ .c();
            var levelOverride = data[i];
            levelOverrides.startAt = levelOverride[_index__WEBPACK_IMPORTED_MODULE_4__/* .startAtProperty */ .PEc[this.keywordIndex]];
            levelOverrides.levelNumber = levelOverride[_index__WEBPACK_IMPORTED_MODULE_4__/* .levelNumberProperty */ .$LD[this.keywordIndex]];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(levelOverride[_index__WEBPACK_IMPORTED_MODULE_4__/* .overrideListLevelProperty */ .UjB[this.keywordIndex]])) {
                levelOverrides.overrideListLevel = this.parseListLevel(levelOverride[_index__WEBPACK_IMPORTED_MODULE_4__/* .overrideListLevelProperty */ .UjB[this.keywordIndex]], levelOverrides);
            }
            list.levelOverrides.push(levelOverrides);
        }
    };
    SfdtReader.prototype.parseSections = function (data, sections) {
        for (var i = 0; i < data.length; i++) {
            var section = new _page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$();
            section.sectionFormat = new _format_index__WEBPACK_IMPORTED_MODULE_12__/* .WSectionFormat */ .A(section);
            section.index = i;
            var item = data[i];
            var breakCode = '';
            var nextItem = data[i + 1];
            var sectionFormat = nextItem && nextItem[_index__WEBPACK_IMPORTED_MODULE_4__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]] ? nextItem[_index__WEBPACK_IMPORTED_MODULE_4__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]] : undefined;
            breakCode = sectionFormat && sectionFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .breakCodeProperty */ .G4q[this.keywordIndex]] ? sectionFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .breakCodeProperty */ .G4q[this.keywordIndex]] : 'NewPage';
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(item[_index__WEBPACK_IMPORTED_MODULE_4__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]])) {
                this.parseSectionFormat(this.keywordIndex, item[_index__WEBPACK_IMPORTED_MODULE_4__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]], section.sectionFormat);
            }
            if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(item[_index__WEBPACK_IMPORTED_MODULE_4__/* .headersFootersProperty */ .gID[this.keywordIndex]])) {
                item[_index__WEBPACK_IMPORTED_MODULE_4__/* .headersFootersProperty */ .gID[this.keywordIndex]] = {};
            }
            this.documentHelper.headersFooters.push(this.parseHeaderFooter(item[_index__WEBPACK_IMPORTED_MODULE_4__/* .headersFootersProperty */ .gID[this.keywordIndex]], this.documentHelper.headersFooters));
            this.isParseHeader = false;
            this.parseTextBody(item[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], section, i + 1 < data.length, breakCode);
            for (var i_1 = 0; i_1 < section.childWidgets.length; i_1++) {
                section.childWidgets[i_1].containerWidget = section;
            }
            sections.push(section);
        }
    };
    SfdtReader.prototype.parseHeaderFooter = function (data, headersFooters) {
        this.isParseHeader = true;
        var hfs = {};
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .headerProperty */ .ZCS[this.keywordIndex]])) {
            var oddHeader = new _page__WEBPACK_IMPORTED_MODULE_2__/* .HeaderFooterWidget */ .F3('OddHeader');
            hfs[0] = oddHeader;
            this.parseTextBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .headerProperty */ .ZCS[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], oddHeader);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .footerProperty */ .xnl[this.keywordIndex]])) {
            var oddFooter = new _page__WEBPACK_IMPORTED_MODULE_2__/* .HeaderFooterWidget */ .F3('OddFooter');
            hfs[1] = oddFooter;
            this.parseTextBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .footerProperty */ .xnl[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], oddFooter);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .evenHeaderProperty */ .ZAm[this.keywordIndex]])) {
            var evenHeader = new _page__WEBPACK_IMPORTED_MODULE_2__/* .HeaderFooterWidget */ .F3('EvenHeader');
            hfs[2] = evenHeader;
            this.parseTextBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .evenHeaderProperty */ .ZAm[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], evenHeader);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .evenFooterProperty */ .$of[this.keywordIndex]])) {
            var evenFooter = new _page__WEBPACK_IMPORTED_MODULE_2__/* .HeaderFooterWidget */ .F3('EvenFooter');
            hfs[3] = evenFooter;
            this.parseTextBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .evenFooterProperty */ .$of[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], evenFooter);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstPageHeaderProperty */ .elv[this.keywordIndex]])) {
            var firstPageHeader = new _page__WEBPACK_IMPORTED_MODULE_2__/* .HeaderFooterWidget */ .F3('FirstPageHeader');
            hfs[4] = firstPageHeader;
            this.parseTextBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstPageHeaderProperty */ .elv[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], firstPageHeader);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstPageFooterProperty */ .msI[this.keywordIndex]])) {
            var firstPageFooter = new _page__WEBPACK_IMPORTED_MODULE_2__/* .HeaderFooterWidget */ .F3('FirstPageFooter');
            hfs[5] = firstPageFooter;
            this.parseTextBody(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstPageFooterProperty */ .msI[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], firstPageFooter);
        }
        return hfs;
    };
    SfdtReader.prototype.parseTextBody = function (data, section, isSectionBreak, breakCode) {
        this.parseBody(data, section.childWidgets, section, isSectionBreak, undefined, undefined, breakCode);
    };
    SfdtReader.prototype.addCustomStyles = function (data) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]])) {
            for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]].length; i++) {
                var style = this.documentHelper.styles.findByName(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]]);
                if (style === undefined) {
                    this.parseStyle(data, data[_index__WEBPACK_IMPORTED_MODULE_4__/* .stylesProperty */ .C9Q[this.keywordIndex]][i], this.documentHelper.styles);
                }
            }
        }
    };
    SfdtReader.prototype.parseBody = function (data, blocks, container, isSectionBreak, contentControlProperties, styles, breakCode, isFootnoteEndnote) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data)) {
            for (var i = 0; i < data.length; i++) {
                var block = data[i];
                var hasValidElmts = false;
                if (block.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex])) {
                    var writeInlineFormat = false;
                    //writeInlineFormat = this.isPasting && i === data.length - 1;
                    var paragraph = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D();
                    paragraph.characterFormat = new _format_index__WEBPACK_IMPORTED_MODULE_13__/* .WCharacterFormat */ .q(paragraph);
                    paragraph.paragraphFormat = new _format_index__WEBPACK_IMPORTED_MODULE_14__/* .WParagraphFormat */ .F(paragraph);
                    var line = this.documentHelper.layout.addLineWidget(paragraph);
                    if (block[_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]].length > 0) {
                        hasValidElmts = this.parseParagraph(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]], paragraph, writeInlineFormat, line, isFootnoteEndnote && i === 0);
                    }
                    if (!(isSectionBreak && block === data[data.length - 1] && block[_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]].length === 0 && !hasValidElmts)) {
                        this.parseCharacterFormat(this.keywordIndex, block[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], paragraph.characterFormat);
                        this.parseParagraphFormat(this.keywordIndex, block[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]], paragraph.paragraphFormat);
                        var styleObj = void 0;
                        var styleName = 'Normal';
                        var isParaHasStyleName = false;
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]]) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .styleNameProperty */ .eEo[this.keywordIndex]])) {
                            //Default value to link style object.
                            styleName = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .styleNameProperty */ .eEo[this.keywordIndex]];
                            isParaHasStyleName = true;
                        }
                        styleObj = this.documentHelper.styles.findByName(styleName, 'Paragraph');
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(styleObj)) {
                            // The below lines are disabled because they cause a break for this task: 870732 
                            // if (this.isPaste && styles && isParaHasStyleName) {
                            //     for (let j = 0; j < styles.length; j++) {
                            //         if (styles[j][nameProperty[this.keywordIndex]] === styleName) {
                            //             var fontColor = styles[j][characterFormatProperty[this.keywordIndex]];
                            //             if (isNullOrUndefined(fontColor) || fontColor[fontColorProperty[this.keywordIndex]] !== (styleObj as WCharacterStyle).characterFormat.fontColor) {
                            //                 const charFormat: WCharacterFormat = new WCharacterFormat();
                            //                 this.parseCharacterFormat(this.keywordIndex, styles[j][characterFormatProperty[this.keywordIndex]], charFormat);
                            //                 (styleObj as WCharacterStyle).characterFormat.copyFormat(charFormat);
                            //                 break;
                            //             }
                            //         }
                            //     }
                            // }
                            paragraph.paragraphFormat.applyStyle(styleObj);
                        }
                        blocks.push(paragraph);
                    }
                    else if (isSectionBreak && data.length === 1) {
                        blocks.push(paragraph);
                    }
                    else {
                        // If section last paragraph is empty then we need to layout the paragraph in the previous widget which is handled similar to MS word.
                        paragraph.isSectionBreak = true;
                        blocks.push(paragraph);
                    }
                    paragraph.index = blocks.length - 1;
                    paragraph.containerWidget = container;
                }
                else if (block.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .rowsProperty */ .fDI[this.keywordIndex])) {
                    this.parseTable(block, blocks, blocks.length, container);
                }
                else if (block.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex])) {
                    var blockStartContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Block');
                    var blockEndContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Block');
                    this.parseContentControlProperties(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]], blockStartContentControl.contentControlProperties);
                    blockEndContentControl.contentControlProperties = blockStartContentControl.contentControlProperties;
                    blockStartContentControl.type = 0;
                    blockEndContentControl.type = 1;
                    this.parseBody(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], blocks, container, isSectionBreak, blockStartContentControl.contentControlProperties);
                    for (var j = 0; j < 2; j++) {
                        var para = (blocks.length < block[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]].length) ? blocks[0] : j === 0 ? blocks[blocks.length - block[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]].length] : blocks[blocks.length - 1];
                        var blockWidget = void 0;
                        if (para instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D) {
                            blockWidget = para;
                        }
                        else if (para instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TableWidget */ .ZR) {
                            if (j === 0) {
                                blockWidget = para.firstChild.firstChild.firstChild;
                            }
                            else {
                                var cell = para.lastChild.lastChild;
                                blockWidget = cell.lastChild;
                            }
                        }
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(blockWidget) && blockWidget.childWidgets.length === 0) {
                            var lineWidget = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9(blockWidget);
                            blockWidget.childWidgets.push(lineWidget);
                        }
                        if (j === 0) {
                            blockWidget.firstChild.children.splice(0, 0, blockStartContentControl);
                            blockStartContentControl.line = blockWidget.firstChild;
                        }
                        else {
                            blockWidget.lastChild.children.push(blockEndContentControl);
                            blockEndContentControl.line = blockWidget.lastChild;
                        }
                    }
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlProperties)) {
                    blocks[blocks.length - 1].contentControlProperties = contentControlProperties;
                }
            }
        }
    };
    SfdtReader.prototype.parseTable = function (block, blocks, index, section) {
        var table = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TableWidget */ .ZR();
        table.index = index;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .tableFormatProperty */ .xA2[this.keywordIndex]])) {
            this.parseTableFormat(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .tableFormatProperty */ .xA2[this.keywordIndex]], table.tableFormat, this.keywordIndex);
        }
        table.tableFormat.title = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[this.keywordIndex]];
        table.tableFormat.description = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .descriptionProperty */ .CWr[this.keywordIndex]];
        this.parseTablePositioning(block, table);
        for (var i = 0; i < block[_index__WEBPACK_IMPORTED_MODULE_4__/* .rowsProperty */ .fDI[this.keywordIndex]].length; i++) {
            var row = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TableRowWidget */ .np();
            row.rowFormat = new _format_index__WEBPACK_IMPORTED_MODULE_6__/* .WRowFormat */ .n(row);
            var tableRow = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .rowsProperty */ .fDI[this.keywordIndex]][i];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableRow[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]])) {
                row.contentControlProperties = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControlProperties */ ._j('Row');
                this.parseContentControlProperties(tableRow[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]], row.contentControlProperties);
            }
            if (tableRow.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .rowFormatProperty */ .rfM[this.keywordIndex])) {
                this.parseRowFormat(tableRow[_index__WEBPACK_IMPORTED_MODULE_4__/* .rowFormatProperty */ .rfM[this.keywordIndex]], row.rowFormat, this.keywordIndex);
                row.index = i;
                for (var j = 0; j < tableRow[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellsProperty */ .pzy[this.keywordIndex]].length; j++) {
                    var cell = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz();
                    cell.cellFormat = new _format_index__WEBPACK_IMPORTED_MODULE_15__/* .WCellFormat */ .B(cell);
                    var tableCell = tableRow[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellsProperty */ .pzy[this.keywordIndex]][j];
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableCell[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]])) {
                        cell.contentControlProperties = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControlProperties */ ._j('Cell');
                        this.parseContentControlProperties(tableCell[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]], cell.contentControlProperties);
                    }
                    row.childWidgets.push(cell);
                    cell.containerWidget = row;
                    cell.index = j;
                    cell.rowIndex = i;
                    cell.columnIndex = j;
                    if (tableCell.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .cellFormatProperty */ .Vre[this.keywordIndex])) {
                        this.parseCellFormat(tableCell[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellFormatProperty */ .Vre[this.keywordIndex]], cell.cellFormat, this.keywordIndex);
                    }
                    var item = tableCell[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]];
                    for (var k = 0; k < item.length; k++) {
                        if (item[k].hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .rowsProperty */ .fDI[this.keywordIndex]])) {
                            table.isContainInsideTable = true;
                        }
                    }
                    this.isPageBreakInsideTable = true;
                    this.parseTextBody(tableCell[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], cell, false);
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(cell.contentControlProperties)) {
                        var cellStartContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Cell');
                        var cellEndContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Cell');
                        cellStartContentControl.contentControlProperties = cell.contentControlProperties;
                        cellEndContentControl.contentControlProperties = cell.contentControlProperties;
                        cellStartContentControl.type = 0;
                        cellEndContentControl.type = 1;
                        if (cell.firstChild.childWidgets.length === 0) {
                            var lineWidget = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9(cell.firstChild);
                            cell.firstChild.childWidgets.push(lineWidget);
                        }
                        cellStartContentControl.line = cell.firstChild.firstChild;
                        cell.firstChild.firstChild.children.splice(0, 0, cellStartContentControl);
                        if (cell.lastChild.childWidgets.length === 0) {
                            var lineWidget = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9(cell.lastChild);
                            cell.lastChild.childWidgets.push(lineWidget);
                        }
                        cellEndContentControl.line = cell.lastChild.lastChild;
                        cell.lastChild.lastChild.children.push(cellEndContentControl);
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(row.contentControlProperties)) {
                        if (row.firstChild === cell) {
                            var rowStartContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Row');
                            rowStartContentControl.contentControlProperties = row.contentControlProperties;
                            rowStartContentControl.type = 0;
                            if (cell.firstChild.childWidgets.length === 0) {
                                var lineWidget = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9(cell.firstChild);
                                cell.firstChild.childWidgets.push(lineWidget);
                            }
                            rowStartContentControl.line = cell.firstChild.firstChild;
                            cell.firstChild.firstChild.children.splice(0, 0, rowStartContentControl);
                        }
                        else if (row.lastChild === cell) {
                            var rowEndContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Row');
                            rowEndContentControl.contentControlProperties = row.contentControlProperties;
                            rowEndContentControl.type = 1;
                            if (cell.lastChild.childWidgets.length === 0) {
                                var lineWidget = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9(cell.lastChild);
                                cell.lastChild.childWidgets.push(lineWidget);
                            }
                            rowEndContentControl.line = cell.lastChild.lastChild;
                            cell.lastChild.lastChild.children.push(rowEndContentControl);
                        }
                    }
                    this.isPageBreakInsideTable = false;
                }
            }
            if (row.childWidgets.length > 0) {
                table.childWidgets.push(row);
                row.containerWidget = table;
            }
        }
        table.containerWidget = section;
        if (table.childWidgets.length > 0) {
            blocks.push(table);
        }
        table.isGridUpdated = false;
        table.updateRowSpan();
    };
    SfdtReader.prototype.parseTablePositioning = function (block, table) {
        table.wrapTextAround = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .wrapTextAroundProperty */ .OXd[this.keywordIndex]]) ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .wrapTextAroundProperty */ .OXd[this.keywordIndex]]) : false;
        if (table.wrapTextAround) {
            table.positioning = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TablePosition */ .Kq();
            table.positioning.allowOverlap = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .allowOverlapProperty */ .IL1[this.keywordIndex]]);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceBottomProperty */ .kpo[this.keywordIndex]])) {
                table.positioning.distanceBottom = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceBottomProperty */ .kpo[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceLeftProperty */ .ggm[this.keywordIndex]])) {
                table.positioning.distanceLeft = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceLeftProperty */ .ggm[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceRightProperty */ .H35[this.keywordIndex]])) {
                table.positioning.distanceRight = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceRightProperty */ .H35[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceTopProperty */ .u_3[this.keywordIndex]])) {
                table.positioning.distanceTop = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceTopProperty */ .u_3[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]])) {
                table.positioning.verticalAlignment = this.getTableVerticalPosition(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalOriginProperty */ .kTt[this.keywordIndex]])) {
                table.positioning.verticalOrigin = this.getTableVerticalRelation(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalOriginProperty */ .kTt[this.keywordIndex]]);
            }
            table.positioning.verticalPosition = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalPositionProperty */ .Zib[this.keywordIndex]];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]])) {
                table.positioning.horizontalAlignment = this.getTableHorizontalPosition(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]])) {
                table.positioning.horizontalOrigin = this.getTableHorizontalRelation(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]]);
            }
            table.positioning.horizontalPosition = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionProperty */ .xVu[this.keywordIndex]];
        }
    };
    SfdtReader.prototype.parseRowGridValues = function (data, rowFormat, keyIndex) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridBeforeProperty */ .Rd3[keyIndex]])) {
            rowFormat.gridBefore = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridBeforeProperty */ .Rd3[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridBeforeWidthProperty */ .pFY[keyIndex]])) {
            rowFormat.gridBeforeWidth = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridBeforeWidthProperty */ .pFY[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridBeforeWidthTypeProperty */ .F$P[keyIndex]])) {
            rowFormat.gridBeforeWidthType = this.getWidthType(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridBeforeWidthTypeProperty */ .F$P[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridAfterProperty */ .wZ6[keyIndex]])) {
            rowFormat.gridAfter = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridAfterProperty */ .wZ6[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridAfterWidthProperty */ .oke[keyIndex]])) {
            rowFormat.gridAfterWidth = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridAfterWidthProperty */ .oke[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridAfterWidthTypeProperty */ .q76[keyIndex]])) {
            rowFormat.gridAfterWidthType = this.getWidthType(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .gridAfterWidthTypeProperty */ .q76[keyIndex]]);
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseContentControlProperties = function (wContentControlProperties, contentControlProperties, keywordIndex) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(keywordIndex)) {
            keywordIndex = this.keywordIndex;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .lockContentControlProperty */ .ZM4[keywordIndex]])) {
            contentControlProperties.lockContentControl = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .lockContentControlProperty */ .ZM4[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .lockContentsProperty */ .tiW[keywordIndex]])) {
            contentControlProperties.lockContents = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .lockContentsProperty */ .tiW[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .tagProperty */ .CJL[keywordIndex]])) {
            contentControlProperties.tag = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .tagProperty */ .CJL[keywordIndex]];
        }
        else {
            //Updating for undo/redo content control properties
            contentControlProperties.tag = undefined;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[keywordIndex]])) {
            contentControlProperties.color = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[keywordIndex]])) {
            contentControlProperties.title = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[keywordIndex]];
        }
        else {
            //Updating for undo/redo content control properties
            contentControlProperties.title = undefined;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .appearanceProperty */ .CD[keywordIndex]])) {
            contentControlProperties.appearance = this.getContentControlAppearance(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .appearanceProperty */ .CD[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[keywordIndex]])) {
            contentControlProperties.type = this.getContentControlType(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasPlaceHolderTextProperty */ .mHg[keywordIndex]])) {
            contentControlProperties.hasPlaceHolderText = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasPlaceHolderTextProperty */ .mHg[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .multiLineProperty */ .$zT[keywordIndex]])) {
            contentControlProperties.multiline = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .multiLineProperty */ .$zT[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .isTemporaryProperty */ .JE6[keywordIndex]])) {
            contentControlProperties.isTemporary = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .isTemporaryProperty */ .JE6[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[keywordIndex]])) {
            this.parseCharacterFormat(keywordIndex, wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[keywordIndex]], contentControlProperties.characterFormat);
        }
        if (contentControlProperties.type === 'CheckBox') {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .isCheckedProperty */ .djV[keywordIndex]])) {
                contentControlProperties.isChecked = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .isCheckedProperty */ .djV[keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .uncheckedStateProperty */ .XXD[keywordIndex]])) {
                contentControlProperties.uncheckedState = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CheckBoxState */ .tw();
                contentControlProperties.uncheckedState.font = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .uncheckedStateProperty */ .XXD[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .fontProperty */ .Xxk[keywordIndex]];
                contentControlProperties.uncheckedState.value = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .uncheckedStateProperty */ .XXD[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .valueProperty */ .tV8[keywordIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .checkedStateProperty */ .iv_[keywordIndex]])) {
                contentControlProperties.checkedState = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CheckBoxState */ .tw();
                contentControlProperties.checkedState.font = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .checkedStateProperty */ .iv_[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .fontProperty */ .Xxk[keywordIndex]];
                contentControlProperties.checkedState.value = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .checkedStateProperty */ .iv_[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .valueProperty */ .tV8[keywordIndex]];
            }
        }
        else if (contentControlProperties.type === 'Date') {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateCalendarTypeProperty */ .m$Q[keywordIndex]])) {
                contentControlProperties.dateCalendarType = this.getDateCalendarType(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateCalendarTypeProperty */ .m$Q[keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateStorageFormatProperty */ .u4X[keywordIndex]])) {
                contentControlProperties.dateStorageFormat = this.getDateStorageFormat(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateStorageFormatProperty */ .u4X[keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateDisplayLocaleProperty */ .oiV[keywordIndex]])) {
                contentControlProperties.dateDisplayLocale = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateDisplayLocaleProperty */ .oiV[keywordIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateDisplayFormatProperty */ .nw3[keywordIndex]])) {
                contentControlProperties.dateDisplayFormat = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .dateDisplayFormatProperty */ .nw3[keywordIndex]];
            }
        }
        else if (contentControlProperties.type === 'ComboBox' || contentControlProperties.type === 'DropDownList') {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlListItemsProperty */ .Axm[keywordIndex]])) {
                //Updating for undo/redo content control properties
                contentControlProperties.contentControlListItems = [];
                for (var i = 0; i < wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlListItemsProperty */ .Axm[keywordIndex]].length; i++) {
                    var contentControlListItem = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControlListItems */ .zN();
                    contentControlListItem.displayText = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlListItemsProperty */ .Axm[keywordIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .displayTextProperty */ .bO8[keywordIndex]];
                    contentControlListItem.value = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlListItemsProperty */ .Axm[keywordIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .valueProperty */ .tV8[keywordIndex]];
                    contentControlProperties.contentControlListItems.push(contentControlListItem);
                }
            }
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]])) {
            contentControlProperties.xmlMapping = new _page__WEBPACK_IMPORTED_MODULE_2__/* .XmlMapping */ .a8();
            contentControlProperties.xmlMapping.isMapped = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isMappedProperty */ .v4d[keywordIndex]]);
            contentControlProperties.xmlMapping.isWordMl = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isWordMlProperty */ .huQ[keywordIndex]]);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .prefixMappingProperty */ .y2Z[keywordIndex]])) {
                contentControlProperties.xmlMapping.prefixMapping = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .prefixMappingProperty */ .y2Z[keywordIndex]];
            }
            contentControlProperties.xmlMapping.xPath = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .xPathProperty */ .fz5[keywordIndex]];
            contentControlProperties.xmlMapping.storeItemId = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .storeItemIdProperty */ .BS[keywordIndex]];
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .customXmlPartProperty */ .jut[keywordIndex]])) {
                contentControlProperties.xmlMapping.customXmlPart = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CustomXmlPart */ .EI();
                contentControlProperties.xmlMapping.customXmlPart.id = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .customXmlPartProperty */ .jut[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .idProperty */ .nf$[keywordIndex]];
                contentControlProperties.xmlMapping.customXmlPart.xml = wContentControlProperties[_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlMappingProperty */ .pwc[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .customXmlPartProperty */ .jut[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .xmlProperty */ .XeO[keywordIndex]];
            }
        }
    };
    SfdtReader.prototype.parseSymbol = function (fieldCode, lineWidget) {
        var code = fieldCode.split(' ');
        var indexOf = code.indexOf('SYMBOL');
        if (indexOf !== -1) {
            var characterCode = code[indexOf + 1];
            var textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg();
            textElement.characterFormat = new _format_index__WEBPACK_IMPORTED_MODULE_13__/* .WCharacterFormat */ .q(textElement);
            textElement.text = String.fromCharCode(parseInt(characterCode));
            var fontIndex = code.indexOf('\\f');
            if (fontIndex !== -1) {
                var fontName = "";
                for (var j = fontIndex + 1; j < code.length; j++) {
                    if (code[j] === '\\s') {
                        break;
                    }
                    fontName += code[j] + ' ';
                }
                if (fontName !== null) {
                    fontName = fontName.replace(/"/g, '');
                    fontName = fontName.trim();
                    textElement.characterFormat.fontFamily = fontName;
                }
            }
            var sizeIndex = code.indexOf('\\s');
            if (sizeIndex !== -1) {
                textElement.characterFormat.fontSize = parseInt(code[sizeIndex + 1]);
            }
            textElement.line = lineWidget;
            lineWidget.children.push(textElement);
        }
    };
    /* eslint-disable  */
    SfdtReader.prototype.parseParagraph = function (data, paragraph, writeInlineFormat, lineWidget, isFootnoteEndnote) {
        var isContentControl = false;
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineWidget)) {
            lineWidget = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9(paragraph);
        }
        else {
            isContentControl = true;
        }
        var hasValidElmts = false;
        var revision;
        var trackChange = this.viewer.owner.enableTrackChanges;
        var isCreateTextEleBox = false;
        var isCreateField = false;
        var fieldCode = undefined;
        for (var i = 0; i < data.length; i++) {
            var inline = data[i];
            isCreateTextEleBox = false;
            if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]])) {
                if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 2 && (i === data.length - 1 || !data[i + 1].hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]))) {
                    this.hasFieldSeparator = true;
                }
                if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 1 && this.hasFieldSeparator) {
                    isCreateTextEleBox = true;
                }
            }
            if (isCreateTextEleBox && this.documentHelper.isPageField) {
                var textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldTextElementBox */ .pU();
                textElement.characterFormat = new _format_index__WEBPACK_IMPORTED_MODULE_13__/* .WCharacterFormat */ .q(textElement);
                textElement.text = "";
                textElement.line = lineWidget;
                lineWidget.children.push(textElement);
                this.hasFieldSeparator = false;
                hasValidElmts = true;
                i--;
                continue;
            }
            else if (isCreateTextEleBox && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(fieldCode) && fieldCode.indexOf('SYMBOL') !== -1) {
                this.parseSymbol(fieldCode, lineWidget);
                fieldCode = undefined;
                isCreateTextEleBox = false;
            }
            if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]) || inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .breakClearTypeProperty */ .Ouo[this.keywordIndex])) {
                var textElement = undefined;
                if (this.documentHelper.isPageField) {
                    textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldTextElementBox */ .pU();
                    textElement.fieldBegin = this.documentHelper.fieldStacks[this.documentHelper.fieldStacks.length - 1];
                }
                else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]] === '\t') {
                    textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TabElementBox */ .vd();
                }
                else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]] === '\f' && this.isPageBreakInsideTable) {
                    continue;
                }
                else {
                    if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .breakClearTypeProperty */ .Ouo[this.keywordIndex])) {
                        textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .BreakElementBox */ .ZS();
                        textElement.breakClearType = this.getBreakClearType(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .breakClearTypeProperty */ .Ouo[this.keywordIndex]]);
                    }
                    else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]] === '\u0002'
                        || (_editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.checkTextFormat(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]]) && lineWidget.children.length === 0 && i === 0 && isFootnoteEndnote)) {
                        textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FootnoteEndnoteMarkerElementBox */ .Ng();
                    }
                    else {
                        textElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg();
                        if ((inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]]).length === 0 && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]])) {
                            continue;
                        }
                    }
                }
                textElement.characterFormat = new _format_index__WEBPACK_IMPORTED_MODULE_13__/* .WCharacterFormat */ .q(textElement);
                this.parseCharacterFormat(this.keywordIndex, inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], textElement.characterFormat, writeInlineFormat);
                this.applyCharacterStyle(inline, textElement);
                textElement.text = textElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .BreakElementBox */ .ZS ? "\v" : inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textProperty */ .Puk[this.keywordIndex]].replace(/\n/g, ' ');
                fieldCode = textElement.text;
                if (this.isHtmlPaste && (textElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg || textElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .BreakElementBox */ .ZS)) {
                    var previousElement = void 0;
                    if (lineWidget.children.length > 0) {
                        previousElement = lineWidget.children[lineWidget.children.length - 1];
                    }
                    // In html content, text bidi property is not present in the file level
                    // Hence bidi property is false for RTL content
                    // So, For html pasting we need to check and content and enable bidi to order the content similar to MS Word
                    if (this.documentHelper.textHelper.isRTLText(textElement.text)) {
                        textElement.characterFormat.bidi = true;
                        if (previousElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg && previousElement.text === ' ') {
                            previousElement.characterFormat.bidi = true;
                        }
                    }
                    //If previous element is RTL element, the we need to enable bidi for space character
                    else if (textElement.text === ' ' && previousElement && previousElement.characterFormat.bidi) {
                        textElement.characterFormat.bidi = true;
                    }
                }
                textElement.line = lineWidget;
                // handling in case the previous element is bookmark with isAfterParagraph true
                var lineChildren = lineWidget.children;
                var lastIndex = lineChildren.length - 1;
                while (lineChildren.length > 0
                    && lineChildren[lastIndex] instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkElementBox */ .yk
                    && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineChildren[lastIndex].properties)
                    && lineChildren[lastIndex].properties['isAfterParagraphMark'] === true) {
                    lastIndex--;
                }
                if (lastIndex !== lineChildren.length - 1) {
                    lineChildren.splice(lastIndex + 1, 0, textElement);
                }
                else {
                    lineChildren.push(textElement);
                }
                if (this.documentHelper.owner.parser.isPaste && !(this.isCutPerformed)) {
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]])) {
                        for (var j = 0; j < inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]].length; j++) {
                            if (this.revisionCollection.containsKey(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j])) {
                                if (trackChange) {
                                    revision = this.revisionCollection.get(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j]);
                                }
                                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(revision) && lineWidget.children.length > 1 && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineWidget.children[i - 1].getRevision(j)) && ((!trackChange) || (trackChange && (revision.revisionType === 'Deletion')))) {
                                    if (revision.revisionID === inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j]) {
                                        inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j] = lineWidget.children[i - 1].getRevision(j).revisionID;
                                        this.checkAndApplyRevision(this.keywordIndex, inline, textElement, paragraph);
                                        continue;
                                    }
                                }
                                if (!trackChange) {
                                    if (this.documentHelper.revisionsInternal.containsKey(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j])) {
                                        revision = this.documentHelper.revisionsInternal.get(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j]);
                                    }
                                    else {
                                        revision = this.revisionCollection.get(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j]);
                                    }
                                }
                                if (this.documentHelper.owner.editorModule.isRemoteAction) {
                                    this.documentHelper.owner.editorModule.insertRevision(textElement, revision.revisionType, revision.author, undefined, undefined, false, revision.revisionID);
                                }
                                else {
                                    this.documentHelper.owner.editorModule.insertRevision(textElement, revision.revisionType, revision.author, undefined, undefined, false);
                                }
                                inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[this.keywordIndex]][j] = textElement.revisions[j].revisionID;
                            }
                        }
                    }
                }
                else {
                    this.checkAndApplyRevision(this.keywordIndex, inline, textElement, paragraph);
                }
                if (textElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg && textElement.text.length > 90) {
                    // Here, the text is split based on the maximum character length of 90.
                    _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.splitWordByMaxLength(textElement, lineWidget, true);
                }
                hasValidElmts = true;
            }
            else if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .footnoteTypeProperty */ .g5o[this.keywordIndex])) {
                var footnoteElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FootnoteElementBox */ .gP();
                footnoteElement.line = lineWidget;
                footnoteElement.footnoteType = this.getFootnoteType(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .footnoteTypeProperty */ .g5o[this.keywordIndex]]);
                if (footnoteElement.footnoteType === 'Footnote') {
                    this.documentHelper.footnoteCollection.push(footnoteElement);
                }
                else {
                    this.documentHelper.endnoteCollection.push(footnoteElement);
                }
                footnoteElement.symbolCode = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .symbolCodeProperty */ .vvU[this.keywordIndex]];
                footnoteElement.symbolFontName = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .symbolFontNameProperty */ .qBh[this.keywordIndex]];
                footnoteElement.customMarker = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .customMarkerProperty */ .R2R[this.keywordIndex]];
                footnoteElement.characterFormat = new _format_index__WEBPACK_IMPORTED_MODULE_13__/* .WCharacterFormat */ .q(footnoteElement);
                this.parseCharacterFormat(this.keywordIndex, inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], footnoteElement.characterFormat, writeInlineFormat);
                this.applyCharacterStyle(inline, footnoteElement);
                this.checkAndApplyRevision(this.keywordIndex, inline, footnoteElement, paragraph);
                this.parseBody(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], footnoteElement.bodyWidget.childWidgets, footnoteElement.bodyWidget, false, undefined, undefined, undefined, true);
                lineWidget.children.push(footnoteElement);
                hasValidElmts = true;
            }
            else if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTypeProperty */ .QoS[this.keywordIndex])) {
                // chartPreservation
                if (this.documentHelper.owner.editorModule) {
                    this.documentHelper.owner.editorModule.chartType = true;
                }
                this.parseChart(inline, lineWidget, false);
                hasValidElmts = true;
            }
            else if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .imageStringProperty */ .koM[this.keywordIndex])) {
                var image = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ImageElementBox */ .Rt(_editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .isInlineImageProperty */ .q2I[this.keywordIndex]]));
                image = this.parseImage(inline, lineWidget, false);
                if (this.getTextWrappingStyle(image.textWrappingStyle) !== 'Inline') {
                    paragraph.floatingElements.push(image);
                }
                this.parseCharacterFormat(this.keywordIndex, inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], image.characterFormat);
                hasValidElmts = true;
            }
            else if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .hasFieldEndProperty */ .Rxg[this.keywordIndex]) || (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]) && inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 0)) {
                isCreateField = true;
                var fieldBegin = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ(0);
                this.parseCharacterFormat(this.keywordIndex, inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], fieldBegin.characterFormat, writeInlineFormat);
                this.applyCharacterStyle(inline, fieldBegin);
                fieldBegin.fieldCodeType = inline.fieldCodeType;
                fieldBegin.hasFieldEnd = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasFieldEndProperty */ .Rxg[this.keywordIndex]];
                if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[this.keywordIndex])) {
                    var formFieldData = void 0;
                    formFieldData = this.parseFormFieldData(this.keywordIndex, inline, formFieldData);
                    fieldBegin.formFieldData = formFieldData;
                    if (!this.isContextBasedPaste) {
                        this.documentHelper.formFields.push(fieldBegin);
                    }
                }
                this.documentHelper.fieldStacks.push(fieldBegin);
                this.checkAndApplyRevision(this.keywordIndex, inline, fieldBegin, paragraph);
                fieldBegin.line = lineWidget;
                if (!this.isContextBasedPaste) {
                    this.documentHelper.fields.push(fieldBegin);
                }
                lineWidget.children.push(fieldBegin);
            }
            else if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]])) {
                var field = undefined;
                if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 2 || (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 1 && isCreateField)) {
                    field = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ(2);
                    this.parseCharacterFormat(this.keywordIndex, inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], field.characterFormat, writeInlineFormat);
                    this.checkAndApplyRevision(this.keywordIndex, inline, field, paragraph);
                    this.fieldSeparator = field;
                    if (this.documentHelper.fieldStacks.length > 0) {
                        field.fieldBegin = this.documentHelper.fieldStacks[this.documentHelper.fieldStacks.length - 1];
                        field.fieldBegin.fieldSeparator = field;
                        //finds the whether the field is page filed or not
                        var lineWidgetCount = lineWidget.children.length;
                        if (lineWidgetCount >= 2) {
                            var fieldTextElement = this.containsFieldBegin(lineWidget);
                            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(fieldTextElement) && fieldTextElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg && (fieldTextElement.text.match('PAGE') || fieldTextElement.text.match('page'))) {
                                var textField = fieldTextElement.text.replace(/^\s+/g, '');
                                if (!textField.startsWith('HYPERLINK')) {
                                    this.documentHelper.isPageField = true;
                                }
                            }
                        }
                    }
                    if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 1 && isCreateField) {
                        i--;
                        this.hasFieldSeparator = true;
                    }
                    isCreateField = false;
                }
                else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] === 1) {
                    field = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ(1);
                    this.parseCharacterFormat(this.keywordIndex, inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]], field.characterFormat, writeInlineFormat);
                    this.applyCharacterStyle(inline, field);
                    this.checkAndApplyRevision(this.keywordIndex, inline, field, paragraph);
                    //For Field End Updated begin and separator.                                      
                    if (this.documentHelper.fieldStacks.length > 0) {
                        field.fieldBegin = this.documentHelper.fieldStacks[this.documentHelper.fieldStacks.length - 1];
                        field.fieldBegin.fieldEnd = field;
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(field.fieldBegin) && field.fieldBegin.fieldSeparator) {
                        field.fieldSeparator = field.fieldBegin.fieldSeparator;
                        field.fieldBegin.fieldSeparator.fieldEnd = field;
                        hasValidElmts = true;
                    }
                    //After setting all the property clear the field values
                    this.documentHelper.fieldStacks.splice(this.documentHelper.fieldStacks.length - 1, 1);
                    this.fieldSeparator = undefined;
                    this.documentHelper.isPageField = false;
                    if (!this.isContextBasedPaste) {
                        this.documentHelper.fieldCollection.push(field.fieldBegin);
                    }
                    fieldCode = undefined;
                }
                field.line = lineWidget;
                lineWidget.children.push(field);
            }
            else if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .bookmarkTypeProperty */ .k$Q[this.keywordIndex]])) {
                var bookmark = undefined;
                bookmark = new _page__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkElementBox */ .yk(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .bookmarkTypeProperty */ .k$Q[this.keywordIndex]]);
                bookmark.name = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]];
                bookmark.properties = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]];
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]])) {
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterParagraphMarkProperty */ .LvU[this.keywordIndex]])) {
                        bookmark.properties['isAfterParagraphMark'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterParagraphMarkProperty */ .LvU[this.keywordIndex]]);
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterTableMarkProperty */ .Heq[this.keywordIndex]])) {
                        bookmark.properties['isAfterTableMark'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterTableMarkProperty */ .Heq[this.keywordIndex]]);
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterRowMarkProperty */ .x1y[this.keywordIndex]])) {
                        bookmark.properties['isAfterRowMark'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterRowMarkProperty */ .x1y[this.keywordIndex]]);
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterCellMarkProperty */ .b9g[this.keywordIndex]])) {
                        bookmark.properties['isAfterCellMark'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .isAfterCellMarkProperty */ .b9g[this.keywordIndex]]);
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .columnFirstProperty */ .u3$[this.keywordIndex]])) {
                        bookmark.properties['columnFirst'] = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .columnFirstProperty */ .u3$[this.keywordIndex]];
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .columnLastProperty */ ._f6[this.keywordIndex]])) {
                        bookmark.properties['columnLast'] = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .propertiesProperty */ .Vuk[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .columnLastProperty */ ._f6[this.keywordIndex]];
                    }
                }
                this.checkAndApplyRevision(this.keywordIndex, inline, bookmark, paragraph);
                lineWidget.children.push(bookmark);
                bookmark.line = lineWidget;
                if (!this.isParseHeader || this.isPaste) {
                    if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .bookmarkTypeProperty */ .k$Q[this.keywordIndex]] === 0) {
                        var isAdd = this.isPaste && !this.documentHelper.bookmarks.containsKey(bookmark.name);
                        if (!this.isPaste) {
                            this.documentHelper.bookmarks.add(bookmark.name, bookmark);
                        }
                        else if (!isAdd) {
                            lineWidget.children.splice(lineWidget.children.indexOf(bookmark), 1);
                        }
                    }
                    else if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .bookmarkTypeProperty */ .k$Q[this.keywordIndex]] === 1) {
                        if (this.documentHelper.bookmarks.containsKey(bookmark.name)) {
                            var bookmarkStart = this.documentHelper.bookmarks.get(bookmark.name);
                            var isConsider = this.isPaste && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(bookmarkStart.reference);
                            if (!this.isPaste || (isConsider && !this.isContextBasedPaste)) {
                                bookmarkStart.reference = bookmark;
                                bookmark.reference = bookmarkStart;
                                this.documentHelper.endBookmarksUpdated.push(bookmark.name);
                            }
                            else if (!isConsider) {
                                lineWidget.children.splice(lineWidget.children.indexOf(bookmark), 1);
                            }
                        }
                    }
                }
                if (bookmark.name.indexOf('_') !== 0) {
                    hasValidElmts = true;
                }
            }
            else if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]])) {
                if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .editableRangeStartProperty */ .LIW[this.keywordIndex])) {
                    var permEnd = new _page__WEBPACK_IMPORTED_MODULE_2__/* .EditRangeEndElementBox */ .C7();
                    if (this.editableRanges.containsKey(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]])) {
                        var start = this.editableRanges.get(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]]);
                        permEnd.editRangeStart = start;
                        start.editRangeEnd = permEnd;
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]])) {
                            permEnd.editRangeId = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]];
                        }
                        this.editableRanges.remove(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]]);
                    }
                    lineWidget.children.push(permEnd);
                    permEnd.line = lineWidget;
                }
                else {
                    var permStart = this.parseEditableRangeStart(inline);
                    lineWidget.children.push(permStart);
                    permStart.line = lineWidget;
                    if (!this.editableRanges.containsKey(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]])) {
                        this.editableRanges.add(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]], permStart);
                    }
                }
                hasValidElmts = true;
            }
            else if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .commentIdProperty */ .Cl$[this.keywordIndex]])) {
                var commentID = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .commentIdProperty */ .Cl$[this.keywordIndex]];
                var commentStart = undefined;
                var comment = void 0;
                if (this.commentStarts.containsKey(commentID)) {
                    commentStart = this.commentStarts.get(commentID);
                }
                var commentEnd = undefined;
                if (this.commentEnds.containsKey(commentID)) {
                    commentEnd = this.commentEnds.get(commentID);
                }
                if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .commentCharacterTypeProperty */ .ikb[this.keywordIndex]])) {
                    if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .commentCharacterTypeProperty */ .ikb[this.keywordIndex]] === 0) {
                        var commentStartElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CommentCharacterElementBox */ .Qh(0);
                        commentStartElement.commentId = commentID;
                        if (!this.commentStarts.containsKey(commentID)) {
                            this.commentStarts.add(commentID, commentStartElement);
                        }
                        commentStartElement.line = lineWidget;
                        lineWidget.children.push(commentStartElement);
                        comment = this.commentsCollection.get(commentID);
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(comment)) {
                            comment.commentStart = commentStartElement;
                            commentStartElement.comment = comment;
                        }
                    }
                    else {
                        var commentEndElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CommentCharacterElementBox */ .Qh(1);
                        commentEndElement.commentId = commentID;
                        if (!this.commentEnds.containsKey(commentID)) {
                            this.commentEnds.add(commentID, commentEndElement);
                        }
                        commentEndElement.line = lineWidget;
                        lineWidget.children.push(commentEndElement);
                        comment = this.commentsCollection.get(commentID);
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(comment)) {
                            comment.commentEnd = commentEndElement;
                            commentEndElement.comment = comment;
                        }
                    }
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(comment) && comment.isReply) {
                        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(comment.ownerComment.commentStart)) {
                            comment.ownerComment.commentStart = comment.commentStart;
                        }
                        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(comment.ownerComment.commentEnd)) {
                            comment.ownerComment.commentEnd = comment.commentEnd;
                        }
                    }
                }
            }
            else if (inline.hasOwnProperty([_index__WEBPACK_IMPORTED_MODULE_4__/* .shapeIdProperty */ .was[this.keywordIndex]])) {
                var shape = this.parseShape(inline, lineWidget);
                shape.line = lineWidget;
                this.checkAndApplyRevision(this.keywordIndex, inline, shape, paragraph);
                lineWidget.children.push(shape);
                paragraph.floatingElements.push(shape);
            }
            else if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex])) {
                var inlineStartContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Inline');
                var inlineEndContentControl = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM('Inline');
                this.parseContentControlProperties(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]], inlineStartContentControl.contentControlProperties);
                inlineEndContentControl.contentControlProperties = inlineStartContentControl.contentControlProperties;
                inlineStartContentControl.line = lineWidget;
                inlineEndContentControl.line = lineWidget;
                inlineStartContentControl.type = 0;
                inlineEndContentControl.type = 1;
                lineWidget.children.push(inlineStartContentControl);
                this.parseParagraph(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .inlinesProperty */ .K2P[this.keywordIndex]], paragraph, writeInlineFormat, lineWidget);
                var element = lineWidget.children[lineWidget.children.length - 1];
                while (!(element instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM)) {
                    element.contentControlProperties = inlineStartContentControl.contentControlProperties;
                    element = element.previousElement;
                }
                lineWidget.children.push(inlineEndContentControl);
                hasValidElmts = true;
            }
        }
        this.isCutPerformed = false;
        if (!isContentControl) {
            paragraph.childWidgets.push(lineWidget);
        }
        return hasValidElmts;
    };
    SfdtReader.prototype.parseShape = function (inline, lineWidget) {
        var shape;
        if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .imageStringProperty */ .koM[this.keywordIndex])) {
            var imageShape = this.parseImage(inline, lineWidget, true);
            return imageShape;
        }
        else if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTypeProperty */ .QoS[this.keywordIndex])) {
            var chartShape = this.parseChart(inline, lineWidget, true);
            return chartShape;
        }
        else {
            if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .childShapeProperty */ .hN2[this.keywordIndex]]) {
                shape = new _page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF();
            }
            else {
                shape = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ShapeElementBox */ .DE();
            }
            shape = this.ParseChildShape(inline, shape);
        }
        if (shape instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF) {
            for (var i = 0; i < inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .childShapeProperty */ .hN2[this.keywordIndex]].length; i++) {
                var childInline = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .childShapeProperty */ .hN2[this.keywordIndex]][i];
                var childShape = this.parseShape(childInline, lineWidget);
                childShape.line = lineWidget;
                childShape.containerShape = shape;
                if (!(childShape instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF)) {
                    childShape.shapeX = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(childInline['x']);
                    childShape.shapeY = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(childInline['y']);
                    childShape.shapeWidth = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(childInline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[this.keywordIndex]]);
                    childShape.shapeHeight = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(childInline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[this.keywordIndex]]);
                }
                this.checkAndApplyRevision(this.keywordIndex, childInline, childShape, lineWidget.paragraph);
                shape.childWidgets.push(childShape);
            }
            shape.shapeX = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline['x']);
            shape.shapeY = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline['y']);
            shape.shapeWidth = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[this.keywordIndex]]);
            shape.shapeHeight = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[this.keywordIndex]]);
            shape.offsetXValue = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .offsetXValue */ .NDH[this.keywordIndex]]);
            shape.offsetYValue = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .offsetYValue */ .ev3[this.keywordIndex]]);
            shape.extentXValue = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .extentXValue */ .EtO[this.keywordIndex]]);
            shape.extentYValue = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .extentYValue */ .FUt[this.keywordIndex]]);
        }
        return shape;
    };
    SfdtReader.prototype.ParseChildShape = function (inline, shape) {
        shape.shapeId = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .shapeIdProperty */ .was[this.keywordIndex]];
        shape.name = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]];
        shape.alternateText = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .alternativeTextProperty */ .gMY[this.keywordIndex]];
        shape.title = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[this.keywordIndex]];
        shape.visible = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .visibleProperty */ .gTz[this.keywordIndex]]);
        shape.width = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[this.keywordIndex]]);
        shape.height = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[this.keywordIndex]]);
        if (shape.height === 0) {
            shape.isZeroHeight = true;
        }
        shape.widthScale = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthScaleProperty */ .eH7[this.keywordIndex]];
        shape.heightScale = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightScaleProperty */ .$v[this.keywordIndex]];
        shape.verticalPosition = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalPositionProperty */ .Zib[this.keywordIndex]]);
        shape.verticalOrigin = this.getVerticalOrigin(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalOriginProperty */ .kTt[this.keywordIndex]]);
        shape.verticalAlignment = this.getShapeVerticalAlignment(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]]);
        shape.verticalRelativePercent = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalRelativePercentProperty */ .RWV[this.keywordIndex]];
        shape.horizontalPosition = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionProperty */ .xVu[this.keywordIndex]]);
        shape.horizontalOrigin = this.getHorizontalOrigin(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]]);
        shape.horizontalAlignment = this.getShapeHorizontalAlignment(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]]);
        shape.horizontalRelativePercent = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalRelativePercentProperty */ .xR3[this.keywordIndex]];
        shape.heightRelativePercent = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightRelativePercentProperty */ .kw3[this.keywordIndex]];
        shape.widthRelativePercent = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthRelativePercentProperty */ .bD$[this.keywordIndex]];
        shape.zOrderPosition = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .zOrderPositionProperty */ .Ver[this.keywordIndex]];
        shape.allowOverlap = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowOverlapProperty */ .IL1[this.keywordIndex]]);
        shape.textWrappingStyle = this.getTextWrappingStyle(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textWrappingStyleProperty */ .Ewx[this.keywordIndex]]);
        shape.textWrappingType = this.getTextWrappingType(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textWrappingTypeProperty */ .ro2[this.keywordIndex]]);
        shape.isBelowText = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .belowTextProperty */ .cpS[this.keywordIndex]]);
        shape.isHorizontalRule = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalRuleProperty */ .SD5[this.keywordIndex]]);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceBottomProperty */ .kpo[this.keywordIndex]])) {
            shape.distanceBottom = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceBottomProperty */ .kpo[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceLeftProperty */ .ggm[this.keywordIndex]])) {
            shape.distanceLeft = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceLeftProperty */ .ggm[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceRightProperty */ .H35[this.keywordIndex]])) {
            shape.distanceRight = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceRightProperty */ .H35[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceTopProperty */ .u_3[this.keywordIndex]])) {
            shape.distanceTop = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceTopProperty */ .u_3[this.keywordIndex]]);
        }
        shape.layoutInCell = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .layoutInCellProperty */ .D5Z[this.keywordIndex]]);
        shape.lockAnchor = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .lockAnchorProperty */ .uNp[this.keywordIndex]]);
        shape.autoShapeType = this.getAutoShapeType(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .autoShapeTypeProperty */ .w4j[this.keywordIndex]]);
        shape.editingPoints = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .editingPointsProperty */ .Nqc[this.keywordIndex]];
        if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatProperty */ .$Hn[this.keywordIndex])) {
            var lineFormat = new _page__WEBPACK_IMPORTED_MODULE_2__/* .LineFormat */ .Yv();
            lineFormat.line = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .lineProperty */ .O$n[this.keywordIndex]]);
            lineFormat.lineFormatType = this.getLineFormatType(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatTypeProperty */ .FgB[this.keywordIndex]]);
            lineFormat.color = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[this.keywordIndex]];
            lineFormat.weight = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .weightProperty */ .OwH[this.keywordIndex]];
            lineFormat.dashStyle = this.getLineDashStyle(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .lineStyleProperty */ .Fg0[this.keywordIndex]]);
            shape.lineFormat = lineFormat;
        }
        if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .fillFormatProperty */ .eZy[this.keywordIndex])) {
            var fillFormat = new _page__WEBPACK_IMPORTED_MODULE_2__/* .FillFormat */ .dT();
            fillFormat.color = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fillFormatProperty */ .eZy[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[this.keywordIndex]];
            fillFormat.fill = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .fillFormatProperty */ .eZy[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .fillProperty */ .XJR[this.keywordIndex]]);
            shape.fillFormat = fillFormat;
        }
        if (shape instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .ShapeElementBox */ .DE && inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex])) {
            var textFrame = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TextFrame */ .j2();
            textFrame.textVerticalAlignment = this.getTextVerticalAlignment(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .textVerticalAlignmentProperty */ .Evz[this.keywordIndex]]);
            textFrame.marginLeft = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[this.keywordIndex]]);
            textFrame.marginRight = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[this.keywordIndex]]);
            textFrame.marginTop = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[this.keywordIndex]]);
            textFrame.marginBottom = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[this.keywordIndex]]);
            if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]].length == 0) {
                var block = { i: [] };
                inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]].push(block);
            }
            this.parseBody(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .blocksProperty */ .u3O[this.keywordIndex]], textFrame.childWidgets, textFrame);
            shape.textFrame = textFrame;
            textFrame.containerShape = shape;
        }
        return shape;
    };
    SfdtReader.prototype.parseImage = function (inline, lineWidget, isGroupShape) {
        var _this = this;
        var image = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ImageElementBox */ .Rt(_editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .isInlineImageProperty */ .q2I[this.keywordIndex]]));
        image.isMetaFile = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .isMetaFileProperty */ .z86[this.keywordIndex]]);
        image.isCompressed = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .isCompressedProperty */ .z5x[this.keywordIndex]];
        image.metaFileImageString = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .metaFileImageStringProperty */ .HKM[this.keywordIndex]];
        image.characterFormat = new _format_index__WEBPACK_IMPORTED_MODULE_13__/* .WCharacterFormat */ .q(image);
        image.line = lineWidget;
        if (!(isGroupShape)) {
            this.checkAndApplyRevision(this.keywordIndex, inline, image, lineWidget.paragraph);
            lineWidget.children.push(image);
        }
        var imageString = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.formatClippedString(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .imageStringProperty */ .koM[this.keywordIndex]]).formatClippedString;
        var isValidImage = this.validateImageUrl(imageString);
        if (!isValidImage) {
            image.imageString = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADgAADY2Njl5eVcXFxjY2NZWVl/f3+wsLCmpqb4+PiioqKpqam7u7vV1dX2uLj2wsLhFRXzpKT3vb30sbHhCwv74+P40dH+9vbkIyO2trbBwcHLy8tsbGycnJz529v4zMzrbGzlLS3qZmblNzfrdXXoRkbvi4vvgYHlHh7CZsBOAAADpUlEQVR4nO3da1faQBSF4ekAUQlUEFs14AXxVv7/D6yaQiZx5mSEYXF2ut+PNKzyyK5diYDmR9czx34AB49C/CjE759w3jvvWr15Tdgz3atXE54f++EcIArxoxA/CvGjED8K8aMQPwrxoxA/CvGLEeZ9jPJdhfk4GyCUjb3ECGE/Q6m/q3DwfudjP0ERZYN9hKdn2hvd3+0jHJz5/kBVuTk96bbQUEjhYR9ckiikUH8UUqg/CinUH4UU6o9CCvVHIYX6o5BC/VFIof4opFB/FFKoPwop1B+FFOqPQgrjyxfjVC38Lxk9tnAxGqZqdKtSOE4GHA5/fuNJpDCtcNHbv4VqYYqPLjgfUViPQgrjozA2CptRSGF8/59w+Wrt+rr1btNna1cPzg0wwuXavncxabnX7PfHYYXzlYARvlobQZyUR9mXm+1NMEK7SSLONgcVV9vb8IQXv4J3KSeKKlxXxNCzONkeYp8AV3p9UT1+P3FWHVAsq5thhGZSEb1DrSZq7dS5HUdoLiuBZ6jORG3tCwAkNJfCUJ2Jrqe1P0ESCkMNTdSACYNDDU7UoAkDQw1P1MAJvUMVJmrwhJ6hShM1gMIvQxUnahCFjaHKEzWQQneoxR95ogZTWBuqPFEDKnSHKk/UoArdoYoTNbDC5lBDEzW4QjMpYiZqgIXG/S76JhwHK5zVVipcnkIVuv/RW/HyFKhwYhuFr6NiCmdNoDBUSGFjovJQEYXuRN9ahwoorJ8uSZenPsMTNk+X2q6jwgm/ntHL11HhhL4zenmoYEL/Gb04VCxh6KKTNFQoYfiikzBUJKF00Sk8VCChfF00OFQcYdt10dBQYYRT5xn0n9G7Q0X8GfCzNNEyZ6iPgD/HlydaVg11DfhajJaJlm2HugIUrlomWrYZKuJKHz6vHhbSM/hROdRnxNe1meuXYvW0DB6+aflYrB7dlzDiCM3N1dVN6GDhMCDhjlHYjEIK46MwNgqbUUhhfJ/vA07wO8N1vw94ONo/3e/lTpVOYfc/UyG//ZmqW52fi/FuTNW3/lZ+eguF+qOQQv1RSKH+KKRQfxRSqD8KKdQfhRTqj0IK9UchhfqjkEL9UUih/iikUH8UUqg/CmXh6Hsv3jlK+wnvD/vgkrSHMMuyu1P9ZdmuwnycDQYn+svG3n9KEUKT9zHyf6+IEWJHIX4U4kchfhTiRyF+FOJHIX4U4kchfnVhijeZa6sunCf4ZdPamteEHY5C/CjEr/vCv0ec0g+AtS1QAAAAAElFTkSuQmCC';
        }
        else {
            if (this.isPaste && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.owner.editorModule.pasteImageIndex)) {
                image.imageString = this.documentHelper.owner.editorModule.pasteImageIndex.get(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .imageStringProperty */ .koM[this.keywordIndex]]);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .metaFileImageStringProperty */ .HKM[this.keywordIndex]])) {
                    image.metaFileImageString = this.documentHelper.owner.editorModule.pasteImageIndex.get(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .metaFileImageStringProperty */ .HKM[this.keywordIndex]]);
                }
            }
            else {
                image.imageString = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .imageStringProperty */ .koM[this.keywordIndex]];
            }
        }
        // Before 21.1 duplicate images are preserved as inline images with direct base64 string in the image string property. TO provide backward compatibility we are checking both the index based retrieval from images collections and inline image string.
        var imgStrValue = parseInt(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .imageStringProperty */ .koM[this.keywordIndex]]);
        if (imgStrValue.toString() === "NaN" ? true : false) {
            this.documentHelper.addBase64StringInCollection(image);
        }
        image.width = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[this.keywordIndex]]);
        image.height = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[this.keywordIndex]]);
        if (!this.isContextBasedPaste) {
            var imgStr = this.documentHelper.getImageString(image);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(imgStr) && (_editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.startsWith(imgStr, 'http://') || _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.startsWith(imgStr, 'https://'))) {
                // Generate fall back image for URL images.
                image.element.crossOrigin = 'Anonymous';
                this.viewer.documentHelper.getBase64(imgStr, image.width, image.height).then(function (imageUrlString) {
                    _this.viewer.documentHelper.images.get(parseInt(image.imageString))[1] = imageUrlString;
                    image.element.src = imageUrlString;
                });
            }
            image.element.src = imgStr;
        }
        image.top = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .topProperty */ .xOy[this.keywordIndex]];
        image.left = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftProperty */ .pkW[this.keywordIndex]];
        image.bottom = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomProperty */ .HAU[this.keywordIndex]];
        image.right = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightProperty */ .E$6[this.keywordIndex]];
        image.cropHeightScale = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .getImageHeightProperty */ .mT8[this.keywordIndex]];
        image.cropWidthScale = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .getImageWidthProperty */ .fnf[this.keywordIndex]];
        image.name = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]];
        image.alternateText = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .alternativeTextProperty */ .gMY[this.keywordIndex]];
        image.title = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[this.keywordIndex]];
        image.visible = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .visibleProperty */ .gTz[this.keywordIndex]]);
        image.widthScale = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthScaleProperty */ .eH7[this.keywordIndex]];
        image.heightScale = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightScaleProperty */ .$v[this.keywordIndex]];
        image.verticalPosition = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalPositionProperty */ .Zib[this.keywordIndex]]);
        image.verticalOrigin = this.getVerticalOrigin(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalOriginProperty */ .kTt[this.keywordIndex]]);
        image.verticalAlignment = this.getShapeVerticalAlignment(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]]);
        image.horizontalPosition = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionProperty */ .xVu[this.keywordIndex]]);
        image.horizontalOrigin = this.getHorizontalOrigin(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]]);
        image.horizontalAlignment = this.getShapeHorizontalAlignment(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]]);
        image.allowOverlap = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowOverlapProperty */ .IL1[this.keywordIndex]]);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasImageReferenceProperty */ .K_M[this.keywordIndex]])) {
            image.hasImageReference = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasImageReferenceProperty */ .K_M[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textWrappingStyleProperty */ .Ewx[this.keywordIndex]])) {
            image.textWrappingStyle = this.getTextWrappingStyle(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textWrappingStyleProperty */ .Ewx[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textWrappingTypeProperty */ .ro2[this.keywordIndex]])) {
            image.textWrappingType = this.getTextWrappingType(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .textWrappingTypeProperty */ .ro2[this.keywordIndex]]);
        }
        image.isBelowText = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .belowTextProperty */ .cpS[this.keywordIndex]]);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceBottomProperty */ .kpo[this.keywordIndex]])) {
            image.distanceBottom = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceBottomProperty */ .kpo[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceLeftProperty */ .ggm[this.keywordIndex]])) {
            image.distanceLeft = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceLeftProperty */ .ggm[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceRightProperty */ .H35[this.keywordIndex]])) {
            image.distanceRight = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceRightProperty */ .H35[this.keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceTopProperty */ .u_3[this.keywordIndex]])) {
            image.distanceTop = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .distanceTopProperty */ .u_3[this.keywordIndex]]);
        }
        image.zOrderPosition = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .zOrderPositionProperty */ .Ver[this.keywordIndex]];
        image.layoutInCell = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .layoutInCellProperty */ .D5Z[this.keywordIndex]]);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .topProperty */ .xOy[this.keywordIndex]]) && inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .topProperty */ .xOy[this.keywordIndex]] !== 0 ||
            !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomProperty */ .HAU[this.keywordIndex]]) && inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomProperty */ .HAU[this.keywordIndex]] !== 0 ||
            !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftProperty */ .pkW[this.keywordIndex]]) && inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftProperty */ .pkW[this.keywordIndex]] !== 0 ||
            !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightProperty */ .E$6[this.keywordIndex]]) && inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightProperty */ .E$6[this.keywordIndex]] !== 0) {
            image.isCrop = true;
        }
        return image;
    };
    SfdtReader.prototype.parseChart = function (inline, linewidget, isGroupShape) {
        var chartElement = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartElementBox */ .Ct();
        chartElement.line = linewidget;
        if (!isGroupShape) {
            this.checkAndApplyRevision(this.keywordIndex, inline, chartElement, linewidget.paragraph);
            linewidget.children.push(chartElement);
        }
        chartElement.title = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTitleProperty */ .c2l[this.keywordIndex]];
        chartElement.type = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTypeProperty */ .QoS[this.keywordIndex]];
        chartElement.chartGapWidth = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .gapWidthProperty */ .Url[this.keywordIndex]];
        chartElement.chartOverlap = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .overlapProperty */ .Bu8[this.keywordIndex]];
        this.parseChartTitleArea(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]], chartElement.chartTitleArea);
        this.parseChartArea(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartAreaProperty */ .r0i[this.keywordIndex]], chartElement.chartArea);
        this.parseChartArea(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .plotAreaProperty */ .MYX[this.keywordIndex]], chartElement.chartPlotArea);
        this.parseChartLegend(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartLegendProperty */ .ny2[this.keywordIndex]], chartElement.chartLegend);
        this.parseChartData(inline, chartElement);
        this.parseChartCategoryAxis(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartPrimaryCategoryAxisProperty */ .ltJ[this.keywordIndex]], chartElement.chartPrimaryCategoryAxis);
        this.parseChartCategoryAxis(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartPrimaryValueAxisProperty */ .ygi[this.keywordIndex]], chartElement.chartPrimaryValueAxis);
        if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartDataTableProperty */ .CQB[this.keywordIndex]] != null) {
            this.parseChartDataTable(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartDataTableProperty */ .CQB[this.keywordIndex]], chartElement.chartDataTable);
        }
        chartElement.height = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[this.keywordIndex]]);
        chartElement.width = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[this.keywordIndex]]);
        var officeChart = new _syncfusion_ej2_office_chart__WEBPACK_IMPORTED_MODULE_16__/* .ChartComponent */ .Q();
        officeChart.chartRender(inline, this.keywordIndex);
        chartElement.officeChart = officeChart;
        officeChart.chart.appendTo(chartElement.targetElement);
        return chartElement;
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseFormFieldData = function (keywordIndex, sourceData, formFieldData) {
        if (formFieldData instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextFormField */ .uS || formFieldData instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .CheckBoxFormField */ .av || formFieldData instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .DropDownFormField */ .iP) {
            if (formFieldData instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .CheckBoxFormField */ .av) {
                formFieldData.sizeType = sourceData.sizeType;
                formFieldData.size = sourceData.size;
                formFieldData.defaultValue = sourceData.defaultValue;
                formFieldData.checked = sourceData.checked;
            }
            else if (formFieldData instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextFormField */ .uS) {
                formFieldData.type = sourceData.type;
                formFieldData.maxLength = sourceData.maxLength;
                formFieldData.defaultValue = sourceData.defaultValue;
                formFieldData.format = sourceData.format;
            }
            else {
                formFieldData.dropdownItems = sourceData.dropdownItems;
                formFieldData.selectedIndex = sourceData.selectedIndex;
            }
            formFieldData.name = sourceData.name;
            formFieldData.enabled = sourceData.enabled;
            formFieldData.helpText = sourceData.helpText;
            formFieldData.statusText = sourceData.statusText;
        }
        else {
            if (sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]].hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .textInputProperty */ .HMj[keywordIndex])) {
                formFieldData = new _page__WEBPACK_IMPORTED_MODULE_2__/* .TextFormField */ .uS();
                formFieldData.type = this.getTextFormFieldType(sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .textInputProperty */ .HMj[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[keywordIndex]]);
                formFieldData.maxLength = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .textInputProperty */ .HMj[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .maxLengthProperty */ .meh[keywordIndex]];
                formFieldData.defaultValue = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .textInputProperty */ .HMj[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .defaultValueProperty */ ._zf[keywordIndex]];
                formFieldData.format = this.getTextFormFieldFormat(sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .textInputProperty */ .HMj[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .formatProperty */ .Lyi[keywordIndex]]);
            }
            else if (sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]].hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .checkBoxProperty */ .Z4M[keywordIndex])) {
                formFieldData = new _page__WEBPACK_IMPORTED_MODULE_2__/* .CheckBoxFormField */ .av();
                formFieldData.sizeType = this.getCheckBoxSizeType(sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .checkBoxProperty */ .Z4M[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .sizeTypeProperty */ .l2j[keywordIndex]]);
                formFieldData.size = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .checkBoxProperty */ .Z4M[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .sizeProperty */ .x4o[keywordIndex]];
                formFieldData.defaultValue = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .checkBoxProperty */ .Z4M[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .defaultValueProperty */ ._zf[keywordIndex]]);
                formFieldData.checked = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .checkBoxProperty */ .Z4M[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .checkedProperty */ .N7s[keywordIndex]]);
            }
            else {
                formFieldData = new _page__WEBPACK_IMPORTED_MODULE_2__/* .DropDownFormField */ .iP();
                var sourceItems = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .dropDownListProperty */ .xg8[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .dropDownItemsProperty */ .PDu[keywordIndex]];
                for (var i = 0; i < sourceItems.length; i++) {
                    if (formFieldData.dropdownItems.length > 24) {
                        break;
                    }
                    formFieldData.dropdownItems.push(sourceItems[i]);
                }
                formFieldData.selectedIndex = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .dropDownListProperty */ .xg8[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .selectedIndexProperty */ .bFh[keywordIndex]];
            }
            formFieldData.name = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[keywordIndex]];
            formFieldData.enabled = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .enabledProperty */ .TEs[keywordIndex]]);
            formFieldData.helpText = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .helpTextProperty */ .YtX[keywordIndex]];
            formFieldData.statusText = sourceData[_index__WEBPACK_IMPORTED_MODULE_4__/* .formFieldDataProperty */ .K0Q[keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .statusTextProperty */ .V_I[keywordIndex]];
        }
        return formFieldData;
    };
    SfdtReader.prototype.applyCharacterStyle = function (inline, elementbox) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]]) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .styleNameProperty */ .eEo[this.keywordIndex]])) {
            var charStyle = this.documentHelper.styles.findByName(inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterFormatProperty */ .yjl[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .styleNameProperty */ .eEo[this.keywordIndex]], 'Character');
            elementbox.characterFormat.applyStyle(charStyle);
        }
    };
    SfdtReader.prototype.parseEditableRangeStart = function (data) {
        var permStart = new _page__WEBPACK_IMPORTED_MODULE_2__/* .EditRangeStartElementBox */ .NR();
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnFirstProperty */ .u3$[this.keywordIndex]])) {
            permStart.columnFirst = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnFirstProperty */ .u3$[this.keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnLastProperty */ ._f6[this.keywordIndex]])) {
            permStart.columnLast = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnLastProperty */ ._f6[this.keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]])) {
            permStart.editRangeId = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .editRangeIdProperty */ .AUk[this.keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .userProperty */ .J7t[this.keywordIndex]])) {
            permStart.user = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .userProperty */ .J7t[this.keywordIndex]];
            if (this.documentHelper.userCollection.indexOf(permStart.user) === -1) {
                this.documentHelper.userCollection.push(permStart.user);
            }
            this.addEditRangeCollection(permStart.user, permStart);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .groupProperty */ .nFd[this.keywordIndex]]) && data[_index__WEBPACK_IMPORTED_MODULE_4__/* .groupProperty */ .nFd[this.keywordIndex]] !== '') {
            permStart.group = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .groupProperty */ .nFd[this.keywordIndex]];
            permStart.group = permStart.group === 'everyone' ? 'Everyone' : permStart.group;
            if (this.documentHelper.userCollection.indexOf(permStart.group) === -1) {
                this.documentHelper.userCollection.push(permStart.group);
            }
            this.addEditRangeCollection(permStart.group, permStart);
        }
        return permStart;
    };
    SfdtReader.prototype.addEditRangeCollection = function (name, permStart) {
        if (this.documentHelper.editRanges.containsKey(name)) {
            var editStartCollection = this.documentHelper.editRanges.get(name);
            editStartCollection.push(permStart);
        }
        else {
            var newEditStartCollection = [];
            newEditStartCollection.push(permStart);
            this.documentHelper.editRanges.add(name, newEditStartCollection);
        }
    };
    SfdtReader.prototype.parseChartTitleArea = function (titleArea, chartTitleArea) {
        chartTitleArea.chartfontName = titleArea[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontNameProperty */ .Agd[this.keywordIndex]];
        chartTitleArea.chartFontSize = titleArea[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[this.keywordIndex]];
        this.parseChartDataFormat(titleArea[_index__WEBPACK_IMPORTED_MODULE_4__/* .dataFormatProperty */ .zQ7[this.keywordIndex]], chartTitleArea.dataFormat);
        this.parseChartLayout(titleArea[_index__WEBPACK_IMPORTED_MODULE_4__/* .layoutProperty */ .iBE[this.keywordIndex]], chartTitleArea.layout);
    };
    SfdtReader.prototype.parseChartDataFormat = function (format, dataFormat) {
        dataFormat.fill.color = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .fillProperty */ .XJR[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .foreColorProperty */ .J98[this.keywordIndex]];
        dataFormat.fill.rgb = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .fillProperty */ .XJR[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .rgbProperty */ .VKB[this.keywordIndex]];
        dataFormat.line.color = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineProperty */ .O$n[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[this.keywordIndex]];
        dataFormat.line.rgb = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineProperty */ .O$n[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .rgbProperty */ .VKB[this.keywordIndex]];
    };
    SfdtReader.prototype.parseChartLayout = function (layout, chartLayout) {
        chartLayout.chartLayoutLeft = layout[_index__WEBPACK_IMPORTED_MODULE_4__/* .layoutXProperty */ .KgS[this.keywordIndex]];
        chartLayout.chartLayoutTop = layout[_index__WEBPACK_IMPORTED_MODULE_4__/* .layoutYProperty */ .jIK[this.keywordIndex]];
    };
    SfdtReader.prototype.parseChartLegend = function (legend, chartLegend) {
        chartLegend.chartLegendPostion = legend[_index__WEBPACK_IMPORTED_MODULE_4__/* .positionProperty */ .FDR[this.keywordIndex]];
        this.parseChartTitleArea(legend[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]], chartLegend.chartTitleArea);
    };
    SfdtReader.prototype.parseChartCategoryAxis = function (categoryAxis, primaryAxis) {
        primaryAxis.categoryAxisType = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .categoryTypeProperty */ .OwU[this.keywordIndex]];
        primaryAxis.categoryNumberFormat = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberFormatProperty */ .kg5[this.keywordIndex]];
        if (categoryAxis.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .isAutoMajorProperty */ .SlD[this.keywordIndex])) {
            primaryAxis.isAutoInternal = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .isAutoMajorProperty */ .SlD[this.keywordIndex]]);
        }
        primaryAxis.interval = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .majorUnitProperty */ .fxC[this.keywordIndex]];
        primaryAxis.axisFontSize = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[this.keywordIndex]];
        primaryAxis.axisFontName = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontNameProperty */ .Agd[this.keywordIndex]];
        primaryAxis.max = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .maximumValueProperty */ .PSr[this.keywordIndex]];
        primaryAxis.min = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .minimumValueProperty */ .P1n[this.keywordIndex]];
        primaryAxis.majorGridLines = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasMajorGridLinesProperty */ .iHy[this.keywordIndex]]);
        primaryAxis.minorGridLines = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasMinorGridLinesProperty */ .qNO[this.keywordIndex]]);
        primaryAxis.majorTick = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .majorTickMarkProperty */ .bEv[this.keywordIndex]];
        primaryAxis.minorTick = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .minorTickMarkProperty */ .zer[this.keywordIndex]];
        primaryAxis.tickPosition = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .tickLabelPositionProperty */ .otn[this.keywordIndex]];
        primaryAxis.categoryAxisTitle = categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTitleProperty */ .c2l[this.keywordIndex]];
        if (categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTitleProperty */ .c2l[this.keywordIndex]] != null) {
            this.parseChartTitleArea(categoryAxis[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]], primaryAxis.chartTitleArea);
        }
    };
    SfdtReader.prototype.parseChartDataTable = function (dataTable, chartDataTable) {
        chartDataTable.showSeriesKeys = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataTable[_index__WEBPACK_IMPORTED_MODULE_4__/* .showSeriesKeysProperty */ .eKo[this.keywordIndex]]);
        chartDataTable.hasHorzBorder = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataTable[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasHorizontalBorderProperty */ .SoG[this.keywordIndex]]);
        chartDataTable.hasVertBorder = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataTable[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasVerticalBorderProperty */ .Uo_[this.keywordIndex]]);
        chartDataTable.hasBorders = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataTable[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasBordersProperty */ .Xwy[this.keywordIndex]]);
    };
    SfdtReader.prototype.parseChartArea = function (area, chartArea) {
        chartArea.chartForeColor = area[_index__WEBPACK_IMPORTED_MODULE_4__/* .foreColorProperty */ .J98[this.keywordIndex]];
    };
    SfdtReader.prototype.parseChartData = function (inline, chart) {
        for (var i = 0; i < inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartCategoryProperty */ .WhX[this.keywordIndex]].length; i++) {
            var chartCategory = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartCategory */ .fC();
            var xData = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartCategoryProperty */ .WhX[this.keywordIndex]][i];
            if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .categoryXNameProperty */ .jZw[this.keywordIndex])) {
                chartCategory.xName = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .categoryXNameProperty */ .jZw[this.keywordIndex]];
            }
            for (var j = 0; j < xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartDataProperty */ ._Vu[this.keywordIndex]].length; j++) {
                var chartData = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartData */ .hl();
                var yData = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartDataProperty */ ._Vu[this.keywordIndex]][j];
                chartData.yAxisValue = yData[_index__WEBPACK_IMPORTED_MODULE_4__/* .yValueProperty */ .EZM[this.keywordIndex]];
                if (inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTypeProperty */ .QoS[this.keywordIndex]] === 'Bubble') {
                    chartData.bubbleSize = yData[_index__WEBPACK_IMPORTED_MODULE_4__/* .sizeProperty */ .x4o[this.keywordIndex]];
                }
                chartCategory.chartData.push(chartData);
            }
            chart.chartCategory.push(chartCategory);
        }
        this.parseChartSeries(inline, chart);
    };
    SfdtReader.prototype.parseChartSeries = function (inline, chart) {
        var chartType = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartTypeProperty */ .QoS[this.keywordIndex]];
        var isPieType = (chartType === 'Pie' || chartType === 'Doughnut');
        for (var i = 0; i < inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartSeriesProperty */ .Jtp[this.keywordIndex]].length; i++) {
            var chartSeries = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartSeries */ .Eu();
            var xData = inline[_index__WEBPACK_IMPORTED_MODULE_4__/* .chartSeriesProperty */ .Jtp[this.keywordIndex]][i];
            if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .seriesNameProperty */ .Eq8[this.keywordIndex])) {
                chartSeries.seriesName = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .seriesNameProperty */ .Eq8[this.keywordIndex]];
                if (isPieType) {
                    if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .firstSliceAngleProperty */ .dyS[this.keywordIndex])) {
                        chartSeries.firstSliceAngle = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstSliceAngleProperty */ .dyS[this.keywordIndex]];
                    }
                    if (chartType === 'Doughnut') {
                        chartSeries.doughnutHoleSize = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .holeSizeProperty */ .LeI[this.keywordIndex]];
                    }
                }
                if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .dataLabelProperty */ .AHL[this.keywordIndex])) {
                    this.parseChartDataLabels(xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .dataLabelProperty */ .AHL[this.keywordIndex]], chartSeries);
                }
                if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .seriesFormatProperty */ .ckl[this.keywordIndex])) {
                    var seriesFormat = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartSeriesFormat */ .Xl();
                    var format = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .seriesFormatProperty */ .ckl[this.keywordIndex]];
                    seriesFormat.markerStyle = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .markerStyleProperty */ .Lvu[this.keywordIndex]];
                    seriesFormat.markerColor = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .markerColorProperty */ .FNw[this.keywordIndex]];
                    seriesFormat.numberValue = format[_index__WEBPACK_IMPORTED_MODULE_4__/* .markerSizeProperty */ .$AM[this.keywordIndex]];
                    chartSeries.seriesFormat = seriesFormat;
                }
                if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .errorBarProperty */ .Zfq[this.keywordIndex])) {
                    var errorBar = chartSeries.errorBar;
                    errorBar.errorType = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .errorBarProperty */ .Zfq[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]];
                    errorBar.errorDirection = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .errorBarProperty */ .Zfq[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .directionProperty */ .t$c[this.keywordIndex]];
                    errorBar.errorEndStyle = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .errorBarProperty */ .Zfq[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .endStyleProperty */ .G3k[this.keywordIndex]];
                    errorBar.numberValue = xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .errorBarProperty */ .Zfq[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .numberValueProperty */ .kVE[this.keywordIndex]];
                }
                if (xData.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .trendLinesProperty */ .abV[this.keywordIndex])) {
                    this.parseChartTrendLines(xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .trendLinesProperty */ .abV[this.keywordIndex]], chartSeries);
                }
                this.parseChartSeriesDataPoints(xData[_index__WEBPACK_IMPORTED_MODULE_4__/* .dataPointsProperty */ .JbX[this.keywordIndex]], chartSeries);
            }
            chart.chartSeries.push(chartSeries);
        }
    };
    SfdtReader.prototype.parseChartDataLabels = function (dataLabels, series) {
        var dataLabel = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartDataLabels */ .iO();
        dataLabel.labelPosition = dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .positionProperty */ .FDR[this.keywordIndex]];
        dataLabel.fontName = dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontNameProperty */ .Agd[this.keywordIndex]];
        dataLabel.fontColor = dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontColorProperty */ .w6H[this.keywordIndex]];
        dataLabel.fontSize = dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[this.keywordIndex]];
        dataLabel.isLegendKey = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isLegendKeyProperty */ .MKA[this.keywordIndex]]);
        dataLabel.isBubbleSize = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isBubbleSizeProperty */ .ZrW[this.keywordIndex]]);
        dataLabel.isCategoryName = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isCategoryNameProperty */ .xb9[this.keywordIndex]]);
        dataLabel.isSeriesName = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isSeriesNameProperty */ .W9F[this.keywordIndex]]);
        dataLabel.isValue = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isValueProperty */ .BBl[this.keywordIndex]]);
        dataLabel.isPercentage = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isPercentageProperty */ .WeS[this.keywordIndex]]);
        dataLabel.isLeaderLines = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(dataLabels[_index__WEBPACK_IMPORTED_MODULE_4__/* .isLeaderLinesProperty */ .K5[this.keywordIndex]]);
        series.dataLabels = dataLabel;
    };
    SfdtReader.prototype.parseChartSeriesDataPoints = function (dataPoints, series) {
        for (var i = 0; i < dataPoints.length; i++) {
            var chartFormat = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartDataFormat */ .Ej();
            if (dataPoints[i].hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .idProperty */ .nf$[this.keywordIndex])) {
                chartFormat.id = dataPoints[i][_index__WEBPACK_IMPORTED_MODULE_4__/* .idProperty */ .nf$[this.keywordIndex]];
            }
            this.parseChartDataFormat(dataPoints[i], chartFormat);
            series.chartDataFormat.push(chartFormat);
        }
    };
    SfdtReader.prototype.parseChartTrendLines = function (trendLines, series) {
        for (var i = 0; i < trendLines.length; i++) {
            var data = trendLines[i];
            var trendLine = new _page__WEBPACK_IMPORTED_MODULE_2__/* .ChartTrendLines */ .qe();
            trendLine.trendLineName = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]];
            trendLine.trendLineType = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .typeProperty */ .sf$[this.keywordIndex]];
            trendLine.forwardValue = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .forwardProperty */ .dFG[this.keywordIndex]];
            trendLine.backwardValue = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .backwardProperty */ .xSX[this.keywordIndex]];
            trendLine.interceptValue = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .interceptProperty */ .k1J[this.keywordIndex]];
            trendLine.isDisplayEquation = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .isDisplayEquationProperty */ .a9d[this.keywordIndex]]);
            trendLine.isDisplayRSquared = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .isDisplayRSquaredProperty */ .nAX[this.keywordIndex]]);
            series.trendLines.push(trendLine);
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseTableFormat = function (sourceFormat, tableFormat, keywordIndex) {
        this.parseBorders(keywordIndex, sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bordersProperty */ .TVR[keywordIndex]], tableFormat.borders);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowAutoFitProperty */ .N0D[keywordIndex]])) {
            tableFormat.allowAutoFit = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowAutoFitProperty */ .N0D[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellSpacingProperty */ .dL2[keywordIndex]])) {
            tableFormat.cellSpacing = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellSpacingProperty */ .dL2[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keywordIndex]])) {
            tableFormat.leftMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keywordIndex]])) {
            tableFormat.topMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keywordIndex]])) {
            tableFormat.rightMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keywordIndex]])) {
            tableFormat.bottomMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[keywordIndex]])) {
            tableFormat.leftIndent = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[keywordIndex]];
        }
        this.parseShading(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .shadingProperty */ ._Y1[keywordIndex]], tableFormat.shading, keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .tableAlignmentProperty */ .jpM[keywordIndex]])) {
            tableFormat.tableAlignment = this.getTableAlignment(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .tableAlignmentProperty */ .jpM[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthProperty */ .P22[keywordIndex]])) {
            tableFormat.preferredWidth = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthProperty */ .P22[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthTypeProperty */ .$0U[keywordIndex]])) {
            tableFormat.preferredWidthType = this.getWidthType(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthTypeProperty */ .$0U[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keywordIndex]])) {
            tableFormat.bidi = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionAbsProperty */ .HQC[keywordIndex]])) {
            tableFormat.horizontalPositionAbs = this.getHorizontalPositionAbs(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionAbsProperty */ .HQC[keywordIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionProperty */ .xVu[keywordIndex]])) {
            tableFormat.horizontalPosition = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalPositionProperty */ .xVu[keywordIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .styleNameProperty */ .eEo[keywordIndex]])) {
            tableFormat.styleName = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .styleNameProperty */ .eEo[keywordIndex]];
        }
        if (this.documentHelper.owner.enableCollaborativeEditing && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[keywordIndex]])) {
            tableFormat.title = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .titleProperty */ .akK[keywordIndex]];
        }
        if (this.documentHelper.owner.enableCollaborativeEditing && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .descriptionProperty */ .CWr[keywordIndex]])) {
            tableFormat.description = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .descriptionProperty */ .CWr[keywordIndex]];
        }
        if (this.isPaste && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.owner.editorModule) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lastParagraphMarkCopiedProperty */ .BY3[keywordIndex]])) {
            this.documentHelper.owner.editorModule.isLastParaMarkCopied = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lastParagraphMarkCopiedProperty */ .BY3[keywordIndex]];
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseCellFormat = function (sourceFormat, cellFormat, keyIndex) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat)) {
            this.parseBorders(keyIndex, sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bordersProperty */ .TVR[keyIndex]], cellFormat.borders);
            if (!sourceFormat.isSamePaddingAsTable) {
                //    cellFormat.ClearMargins();
                //else
                this.parseCellMargin(sourceFormat, cellFormat, keyIndex);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellWidthProperty */ .M2S[keyIndex]])) {
                cellFormat.cellWidth = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .cellWidthProperty */ .M2S[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnSpanProperty */ .IYo[keyIndex]])) {
                cellFormat.columnSpan = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnSpanProperty */ .IYo[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rowSpanProperty */ .uHM[keyIndex]])) {
                cellFormat.rowSpan = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rowSpanProperty */ .uHM[keyIndex]];
            }
            this.parseShading(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .shadingProperty */ ._Y1[keyIndex]], cellFormat.shading, keyIndex);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalAlignmentProperty */ .x07[keyIndex]])) {
                cellFormat.verticalAlignment = this.getCellVerticalAlignment(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalAlignmentProperty */ .x07[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthTypeProperty */ .$0U[keyIndex]])) {
                cellFormat.preferredWidthType = this.getWidthType(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthTypeProperty */ .$0U[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthProperty */ .P22[keyIndex]])) {
                cellFormat.preferredWidth = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .preferredWidthProperty */ .P22[keyIndex]];
            }
        }
    };
    SfdtReader.prototype.parseCellMargin = function (sourceFormat, cellFormat, keyIndex) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keyIndex]])) {
            cellFormat.leftMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keyIndex]])) {
            cellFormat.rightMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keyIndex]])) {
            cellFormat.topMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keyIndex]])) {
            cellFormat.bottomMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keyIndex]];
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseRowFormat = function (sourceFormat, rowFormat, keyIndex) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat)) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowBreakAcrossPagesProperty */ .z$_[keyIndex]])) {
                rowFormat.allowBreakAcrossPages = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .allowBreakAcrossPagesProperty */ .z$_[this.keywordIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .isHeaderProperty */ .pk2[keyIndex]])) {
                rowFormat.isHeader = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .isHeaderProperty */ .pk2[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightTypeProperty */ .Zdb[keyIndex]])) {
                rowFormat.heightType = this.getHeightType(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightTypeProperty */ .Zdb[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[keyIndex]])) {
                rowFormat.height = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .heightProperty */ .xf2[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keyIndex]])) {
                rowFormat.leftMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keyIndex]])) {
                rowFormat.topMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keyIndex]])) {
                rowFormat.rightMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keyIndex]])) {
                rowFormat.bottomMargin = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[keyIndex]])) {
                rowFormat.leftIndent = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[keyIndex]]) && sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[keyIndex]].length > 0) {
                this.checkAndApplyRevision(keyIndex, sourceFormat, rowFormat, rowFormat);
            }
            this.parseRowGridValues(sourceFormat, rowFormat, keyIndex);
            this.parseBorders(keyIndex, sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bordersProperty */ .TVR[keyIndex]], rowFormat.borders);
        }
    };
    SfdtReader.prototype.parseBorders = function (keyIndex, sourceBorders, destBorder) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorders)) {
            destBorder.isParsing = true;
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftProperty */ .pkW[keyIndex]], destBorder.left);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightProperty */ .E$6[keyIndex]], destBorder.right);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .topProperty */ .xOy[keyIndex]], destBorder.top);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomProperty */ .HAU[keyIndex]], destBorder.bottom);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .verticalProperty */ .aHk[keyIndex]], destBorder.vertical);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .horizontalProperty */ .QRf[keyIndex]], destBorder.horizontal);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .diagonalDownProperty */ .ZtF[keyIndex]], destBorder.diagonalDown);
            this.parseBorder(keyIndex, sourceBorders[_index__WEBPACK_IMPORTED_MODULE_4__/* .diagonalUpProperty */ .oor[keyIndex]], destBorder.diagonalUp);
            destBorder.isParsing = false;
        }
    };
    SfdtReader.prototype.parseBorder = function (keyIndex, sourceBorder, destBorder) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder)) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[keyIndex]])) {
                destBorder.color = this.getColor(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .colorProperty */ .N64[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineStyleProperty */ .Fg0[keyIndex]])) {
                destBorder.lineStyle = this.getLineStyle(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineStyleProperty */ .Fg0[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineWidthProperty */ .u8R[keyIndex]])) {
                destBorder.lineWidth = sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineWidthProperty */ .u8R[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasNoneStyleProperty */ .VFH[keyIndex]])) {
                destBorder.hasNoneStyle = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .hasNoneStyleProperty */ .VFH[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceProperty */ .yip[keyIndex]])) {
                destBorder.space = sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceProperty */ .yip[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .shadowProperty */ .w1c[keyIndex]])) {
                destBorder.shadow = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceBorder[_index__WEBPACK_IMPORTED_MODULE_4__/* .shadowProperty */ .w1c[keyIndex]]);
            }
        }
    };
    SfdtReader.prototype.parseShading = function (sourceShading, destShading, keyIndex) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceShading)) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .backgroundColorProperty */ .FIL[keyIndex]])) {
                destShading.backgroundColor = this.getColor(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .backgroundColorProperty */ .FIL[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .foregroundColorProperty */ .wIP[keyIndex]])) {
                destShading.foregroundColor = this.getColor(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .foregroundColorProperty */ .wIP[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .textureProperty */ .rTL[keyIndex]]) || !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceShading.textureStyle)) {
                destShading.textureStyle = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .textureProperty */ .rTL[keyIndex]]) ? this.getTextureStyle(sourceShading[_index__WEBPACK_IMPORTED_MODULE_4__/* .textureProperty */ .rTL[keyIndex]]) : this.getTextureStyle(sourceShading.textureStyle);
            }
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.parseCharacterFormat = function (keyIndex, sourceFormat, characterFormat, writeInlineFormat) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat)) {
            if (writeInlineFormat && sourceFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .inlineFormatProperty */ .K1K[keyIndex])) {
                this.parseCharacterFormat(keyIndex, sourceFormat.inlineFormat, characterFormat);
                return;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .baselineAlignmentProperty */ ._fy[keyIndex]])) {
                characterFormat.baselineAlignment = this.getBaseAlignment(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .baselineAlignmentProperty */ ._fy[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .underlineProperty */ .UYh[keyIndex]])) {
                characterFormat.underline = this.getUnderline(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .underlineProperty */ .UYh[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .underlineColorProperty */ .HOd[keyIndex]])) {
                characterFormat.underlineColor = this.getColor(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .underlineColorProperty */ .HOd[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontHintTypeProperty */ .WEp[keyIndex]])) {
                characterFormat.fontHintType = this.getFontHintType(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontHintTypeProperty */ .WEp[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .strikethroughProperty */ .xS6[keyIndex]])) {
                characterFormat.strikethrough = this.getStrikethrough(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .strikethroughProperty */ .xS6[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]])) {
                sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]] = parseFloat(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]]);
                var number = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]] * 10;
                if (number % 10 !== 0) {
                    number = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]].toFixed(1) * 10;
                    //to check worst case scenerio like 8.2 or 8.7 like these to round off
                    if (number % 5 === 0) {
                        sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]] = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]].toFixed(1);
                    }
                    else {
                        sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]] = Math.round(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]]);
                    }
                }
                var fontSize = parseFloat(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeProperty */ .Woy[keyIndex]]);
                characterFormat.fontSize = fontSize < 0 ? 0 : fontSize;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyProperty */ .deU[keyIndex]])) {
                if (sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyProperty */ .deU[keyIndex]].indexOf('"') !== -1) {
                    sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyProperty */ .deU[keyIndex]] = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyProperty */ .deU[keyIndex]].replace('"', '');
                }
                var fontFamily = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyProperty */ .deU[keyIndex]];
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable) && this.documentHelper.fontSubstitutionTable.containsKey(fontFamily) && !this.isFontInstalled(fontFamily)) {
                    fontFamily = this.documentHelper.fontSubstitutionTable.get(fontFamily);
                }
                characterFormat.fontFamily = fontFamily;
                if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyAsciiProperty */ ._Zw[keyIndex]])) {
                    characterFormat.fontFamilyAscii = fontFamily;
                }
                if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyNonFarEastProperty */ .wRS[keyIndex]])) {
                    characterFormat.fontFamilyNonFarEast = fontFamily;
                }
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .boldProperty */ .DIu[keyIndex]])) {
                characterFormat.bold = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .boldProperty */ .DIu[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .italicProperty */ .kH9[keyIndex]])) {
                characterFormat.italic = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .italicProperty */ .kH9[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .highlightColorProperty */ .Xun[keyIndex]])) {
                characterFormat.highlightColor = this.getHighlightColor(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .highlightColorProperty */ .Xun[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontColorProperty */ .w6H[keyIndex]])) {
                characterFormat.fontColor = this.getColor(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontColorProperty */ .w6H[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keyIndex]])) {
                characterFormat.bidi = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bdoProperty */ .N8M[keyIndex]])) {
                characterFormat.bdo = this.getBiDirectionalOverride(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bdoProperty */ .N8M[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeBidiProperty */ .Ai7[keyIndex]])) {
                var fontSize = parseFloat(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSizeBidiProperty */ .Ai7[keyIndex]]);
                characterFormat.fontSizeBidi = fontSize < 0 ? 0 : fontSize;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyBidiProperty */ .$ER[keyIndex]])) {
                if (sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyBidiProperty */ .$ER[keyIndex]].indexOf('"') !== -1) {
                    sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyBidiProperty */ .$ER[keyIndex]] = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyBidiProperty */ .$ER[keyIndex]].replace('"', '');
                }
                var fontFamilyBidi = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyBidiProperty */ .$ER[keyIndex]];
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable) && this.documentHelper.fontSubstitutionTable.containsKey(fontFamilyBidi) && !this.isFontInstalled(fontFamilyBidi)) {
                    fontFamilyBidi = this.documentHelper.fontSubstitutionTable.get(fontFamilyBidi);
                }
                characterFormat.fontFamilyBidi = fontFamilyBidi;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .boldBidiProperty */ .jpm[keyIndex]])) {
                characterFormat.boldBidi = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .boldBidiProperty */ .jpm[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .italicBidiProperty */ .qfo[keyIndex]])) {
                characterFormat.italicBidi = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .italicBidiProperty */ .qfo[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[keyIndex]]) && sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .revisionIdsProperty */ .PQt[keyIndex]].length > 0) {
                this.checkAndApplyRevision(keyIndex, sourceFormat, characterFormat, characterFormat);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .allCapsProperty */ .SAy[keyIndex]])) {
                characterFormat.allCaps = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .allCapsProperty */ .SAy[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .localeIdBidiProperty */ .FOQ[keyIndex]])) {
                characterFormat.localeIdBidi = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .localeIdBidiProperty */ .FOQ[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .localeIdProperty */ .dVg[keyIndex]])) {
                characterFormat.localeIdAscii = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .localeIdProperty */ .dVg[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .localeIdFarEastProperty */ .fqX[keyIndex]])) {
                characterFormat.localeIdFarEast = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .localeIdFarEastProperty */ .fqX[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .complexScriptProperty */ .jdo[keyIndex]])) {
                characterFormat.complexScript = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .complexScriptProperty */ .jdo[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .hiddenProperty */ .c$R[keyIndex]])) {
                characterFormat.hidden = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .hiddenProperty */ .c$R[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyFarEastProperty */ .rd3[keyIndex]])) {
                if (sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyFarEastProperty */ .rd3[keyIndex]].indexOf('"') !== -1) {
                    sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyFarEastProperty */ .rd3[keyIndex]] = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyFarEastProperty */ .rd3[keyIndex]].replace('"', '');
                }
                var fontFamilyFarEast = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyFarEastProperty */ .rd3[keyIndex]];
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable) && this.documentHelper.fontSubstitutionTable.containsKey(fontFamilyFarEast) && !this.isFontInstalled(fontFamilyFarEast)) {
                    fontFamilyFarEast = this.documentHelper.fontSubstitutionTable.get(fontFamilyFarEast);
                }
                characterFormat.fontFamilyFarEast = fontFamilyFarEast;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyAsciiProperty */ ._Zw[keyIndex]])) {
                if (sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyAsciiProperty */ ._Zw[keyIndex]].indexOf('"') !== -1) {
                    sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyAsciiProperty */ ._Zw[keyIndex]] = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyAsciiProperty */ ._Zw[keyIndex]].replace('"', '');
                }
                var fontFamilyAscii = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyAsciiProperty */ ._Zw[keyIndex]];
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable) && this.documentHelper.fontSubstitutionTable.containsKey(fontFamilyAscii) && !this.isFontInstalled(fontFamilyAscii)) {
                    fontFamilyAscii = this.documentHelper.fontSubstitutionTable.get(fontFamilyAscii);
                }
                characterFormat.fontFamilyAscii = fontFamilyAscii;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyNonFarEastProperty */ .wRS[keyIndex]])) {
                if (sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyNonFarEastProperty */ .wRS[keyIndex]].indexOf('"') !== -1) {
                    sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyNonFarEastProperty */ .wRS[keyIndex]] = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyNonFarEastProperty */ .wRS[keyIndex]].replace('"', '');
                }
                var fontFamilyNonFarEast = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontFamilyNonFarEastProperty */ .wRS[keyIndex]];
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable) && this.documentHelper.fontSubstitutionTable.containsKey(fontFamilyNonFarEast) && !this.isFontInstalled(fontFamilyNonFarEast)) {
                    fontFamilyNonFarEast = this.documentHelper.fontSubstitutionTable.get(fontFamilyNonFarEast);
                }
                characterFormat.fontFamilyNonFarEast = fontFamilyNonFarEast;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterSpacingProperty */ .SSb[keyIndex]])) {
                characterFormat.characterSpacing = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .characterSpacingProperty */ .SSb[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .scalingProperty */ .Rhy[keyIndex]])) {
                characterFormat.scaling = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .scalingProperty */ .Rhy[keyIndex]];
            }
        }
    };
    // Bug 864876: Here, we have checking whether the font is installed or not. If not installed, then we have changed the font name from the font substitution table.
    // The below code is implemented by refering the following link. (https://www.samclarke.com/javascript-is-font-available/#:~:text=Then%20to%20check%20a%20font,otherwise%20another%20fallback%20is%20tried.)
    /**
     * @private
     * @returns {boolean}
     */
    SfdtReader.prototype.isFontInstalled = function (fontFamily) {
        if (this.fontInfoCollection && this.fontInfoCollection.containsKey(fontFamily)) {
            return this.fontInfoCollection.get(fontFamily);
        }
        var monoWidth = this.getWidth('monospace');
        var sansWidth = this.getWidth('sans-serif');
        var serifWidth = this.getWidth('serif');
        var isFontInstalled = monoWidth !== this.getWidth(fontFamily + ', monospace', monoWidth) ||
            sansWidth !== this.getWidth(fontFamily + ', sans-serif', sansWidth) ||
            serifWidth !== this.getWidth(fontFamily + ', serif', serifWidth);
        if (this.fontInfoCollection) {
            this.fontInfoCollection.add(fontFamily, isFontInstalled);
        }
        return isFontInstalled;
    };
    SfdtReader.prototype.getWidth = function (fontFamily, defaultWidth) {
        var width;
        var container = document.createElement('span');
        container.innerHTML = Array(100).join('wi');
        container.style.cssText = [
            'position:absolute',
            'width:auto',
            'font-size:128px',
            'left:-99999px'
        ].join(' !important;');
        container.style.fontFamily = fontFamily;
        document.body.appendChild(container);
        width = container.clientWidth;
        if (container.style.fontFamily === "" && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(defaultWidth)) {
            width = defaultWidth;
        }
        document.body.removeChild(container);
        return width;
    };
    SfdtReader.prototype.getColor = function (color) {
        var convertColor = color;
        return convertColor || '#ffffff';
    };
    SfdtReader.prototype.parseThemes = function (sourceFormat, themes) {
        this.parseFontScheme(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeProperty */ .GtS[this.keywordIndex]], themes);
    };
    SfdtReader.prototype.parseFontScheme = function (sourceFormat, themes) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeNameProperty */ .ntg[this.keywordIndex]]))
            themes.fontScheme.fontSchemeName = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeNameProperty */ .ntg[this.keywordIndex]];
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .majorFontSchemeProperty */ .jhr[this.keywordIndex]])) {
            this.parseMajorMinorFontScheme(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .majorFontSchemeProperty */ .jhr[this.keywordIndex]], themes.fontScheme.majorFontScheme);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .minorFontSchemeProperty */ .tEd[this.keywordIndex]])) {
            this.parseMajorMinorFontScheme(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .minorFontSchemeProperty */ .tEd[this.keywordIndex]], themes.fontScheme.minorFontScheme);
        }
    };
    SfdtReader.prototype.parseMajorMinorFontScheme = function (sourceFormat, majorMinor) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontTypefaceProperty */ .yEQ[this.keywordIndex]]) && Object.keys(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontTypefaceProperty */ .yEQ[this.keywordIndex]]).length > 0) {
            var keys = Object.keys(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontTypefaceProperty */ .yEQ[this.keywordIndex]]);
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                majorMinor.fontTypeface.add(key, sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontTypefaceProperty */ .yEQ[this.keywordIndex]][key]);
            }
            this.documentHelper.hasThemes = true;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeListProperty */ .eHu[this.keywordIndex]]) && sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeListProperty */ .eHu[this.keywordIndex]].length > 0) {
            for (var j = 0; j < sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeListProperty */ .eHu[this.keywordIndex]].length; j++) {
                var data = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontSchemeListProperty */ .eHu[this.keywordIndex]][j];
                var fontList = new _index__WEBPACK_IMPORTED_MODULE_17__/* .FontSchemeStruct */ .g();
                fontList.name = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data.fontName) ? data[_index__WEBPACK_IMPORTED_MODULE_4__/* .fontNameProperty */ .Agd[this.keywordIndex]] : data[_index__WEBPACK_IMPORTED_MODULE_4__/* .nameProperty */ .RL$[this.keywordIndex]];
                fontList.typeface = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data.fontTypeface) ? data.fontTypeface : data[_index__WEBPACK_IMPORTED_MODULE_4__/* .typefaceProperty */ .NK_[this.keywordIndex]];
                fontList.panose = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data.pnose) ? data.pnose : data[_index__WEBPACK_IMPORTED_MODULE_4__/* .panoseProperty */ .orq[this.keywordIndex]];
                majorMinor.fontSchemeList.push(fontList);
            }
            this.documentHelper.hasThemes = true;
        }
    };
    SfdtReader.prototype.parseParagraphFormat = function (keyIndex, sourceFormat, paragraphFormat) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat)) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bordersProperty */ .TVR[keyIndex]])) {
                this.parseBorders(keyIndex, sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bordersProperty */ .TVR[keyIndex]], paragraphFormat.borders);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keyIndex]])) {
                paragraphFormat.bidi = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[keyIndex]])) {
                paragraphFormat.leftIndent = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftIndentProperty */ .xtd[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightIndentProperty */ .OLD[keyIndex]])) {
                paragraphFormat.rightIndent = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightIndentProperty */ .OLD[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstLineIndentProperty */ .oLG[keyIndex]])) {
                paragraphFormat.firstLineIndent = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .firstLineIndentProperty */ .oLG[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .afterSpacingProperty */ .NX2[keyIndex]])) {
                paragraphFormat.afterSpacing = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .afterSpacingProperty */ .NX2[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .beforeSpacingProperty */ .af2[keyIndex]])) {
                paragraphFormat.beforeSpacing = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .beforeSpacingProperty */ .af2[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceBeforeAutoProperty */ .Kql[keyIndex]])) {
                paragraphFormat.spaceBeforeAuto = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceBeforeAutoProperty */ .Kql[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceAfterAutoProperty */ .hnh[keyIndex]])) {
                paragraphFormat.spaceAfterAuto = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceAfterAutoProperty */ .hnh[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[keyIndex]])) {
                paragraphFormat.lineSpacing = sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[keyIndex]];
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingTypeProperty */ .lcE[keyIndex]])) {
                paragraphFormat.lineSpacingType = this.getLineSpacingType(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingTypeProperty */ .lcE[keyIndex]]);
            }
            else {
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineSpacingProperty */ .LhI[keyIndex]])) {
                    paragraphFormat.lineSpacingType = 'Multiple';
                }
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .textAlignmentProperty */ .GL[keyIndex]])) {
                paragraphFormat.textAlignment = this.getTextAlignment(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .textAlignmentProperty */ .GL[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .outlineLevelProperty */ .u_B[keyIndex]])) {
                paragraphFormat.outlineLevel = this.getOutlineLevel(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .outlineLevelProperty */ .u_B[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .contextualSpacingProperty */ .i9u[keyIndex]])) {
                paragraphFormat.contextualSpacing = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .contextualSpacingProperty */ .i9u[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepWithNextProperty */ .K4C[keyIndex]])) {
                paragraphFormat.keepWithNext = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepWithNextProperty */ .K4C[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepLinesTogetherProperty */ .gvY[keyIndex]])) {
                paragraphFormat.keepLinesTogether = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .keepLinesTogetherProperty */ .gvY[keyIndex]]);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .widowControlProperty */ .bAD[keyIndex]])) {
                paragraphFormat.widowControl = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .widowControlProperty */ .bAD[keyIndex]]);
            }
            paragraphFormat.listFormat = new _format_index__WEBPACK_IMPORTED_MODULE_18__/* .WListFormat */ .Z(paragraphFormat);
            if (sourceFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex])) {
                this.parseListFormat(keyIndex, sourceFormat, paragraphFormat.listFormat);
            }
            if (sourceFormat.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_4__/* .tabsProperty */ .e6f[keyIndex])) {
                this.parseTabStop(keyIndex, sourceFormat[_index__WEBPACK_IMPORTED_MODULE_4__/* .tabsProperty */ .e6f[keyIndex]], paragraphFormat.tabs);
            }
        }
    };
    SfdtReader.prototype.parseListFormat = function (keyIndex, block, listFormat) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]])) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .listIdProperty */ .Bo2[keyIndex]])) {
                var listId = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .listIdProperty */ .Bo2[keyIndex]];
                var list = this.documentHelper.getListById(listId);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(list) || listId === -1) {
                    listFormat.listId = listId;
                    listFormat.list = list;
                }
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .nsidProperty */ .cUk])) {
                listFormat.nsid = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .nsidProperty */ .cUk];
            }
            else if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(listFormat.list)) {
                // Backward compatibility
                listFormat.nsid = listFormat.list.nsid;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .listLevelNumberProperty */ .TtU[keyIndex]])) {
                listFormat.listLevelNumber = block[_index__WEBPACK_IMPORTED_MODULE_4__/* .listFormatProperty */ .pBP[keyIndex]][_index__WEBPACK_IMPORTED_MODULE_4__/* .listLevelNumberProperty */ .TtU[keyIndex]];
            }
        }
    };
    SfdtReader.prototype.parseSectionFormat = function (keyIndex, data, sectionFormat) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageWidthProperty */ .LWC[keyIndex]])) {
            sectionFormat.pageWidth = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageWidthProperty */ .LWC[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageHeightProperty */ .sT9[keyIndex]])) {
            sectionFormat.pageHeight = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageHeightProperty */ .sT9[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keyIndex]])) {
            sectionFormat.leftMargin = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .leftMarginProperty */ .FJj[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keyIndex]])) {
            sectionFormat.topMargin = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .topMarginProperty */ .PkB[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keyIndex]])) {
            sectionFormat.rightMargin = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .rightMarginProperty */ .wW3[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keyIndex]])) {
            sectionFormat.bottomMargin = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .bottomMarginProperty */ .fRV[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .headerDistanceProperty */ .GHV[keyIndex]])) {
            sectionFormat.headerDistance = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .headerDistanceProperty */ .GHV[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .footerDistanceProperty */ .mGG[keyIndex]])) {
            sectionFormat.footerDistance = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .footerDistanceProperty */ .mGG[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .differentFirstPageProperty */ .y5G[keyIndex]])) {
            sectionFormat.differentFirstPage = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .differentFirstPageProperty */ .y5G[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .differentOddAndEvenPagesProperty */ .DFv[keyIndex]])) {
            sectionFormat.differentOddAndEvenPages = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .differentOddAndEvenPagesProperty */ .DFv[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keyIndex]])) {
            sectionFormat.bidi = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .bidiProperty */ .y1q[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartPageNumberingProperty */ .P_6[keyIndex]])) {
            sectionFormat.restartPageNumbering = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartPageNumberingProperty */ .P_6[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageStartingNumberProperty */ .GBM[keyIndex]])) {
            sectionFormat.pageStartingNumber = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageStartingNumberProperty */ .GBM[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .endnoteNumberFormatProperty */ .tgw[keyIndex]])) {
            sectionFormat.endnoteNumberFormat = this.getFootEndNoteNumberFormat(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .endnoteNumberFormatProperty */ .tgw[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .footNoteNumberFormatProperty */ .Cfz[keyIndex]])) {
            sectionFormat.footNoteNumberFormat = this.getFootEndNoteNumberFormat(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .footNoteNumberFormatProperty */ .Cfz[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartIndexForFootnotesProperty */ .BU5[keyIndex]])) {
            sectionFormat.restartIndexForFootnotes = this.getFootnoteRestartIndex(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartIndexForFootnotesProperty */ .BU5[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartIndexForEndnotesProperty */ .GYd[keyIndex]])) {
            sectionFormat.restartIndexForEndnotes = this.getFootnoteRestartIndex(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .restartIndexForEndnotesProperty */ .GYd[keyIndex]]);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .initialFootNoteNumberProperty */ .TGt[keyIndex]])) {
            sectionFormat.initialFootNoteNumber = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .initialFootNoteNumberProperty */ .TGt[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .initialEndNoteNumberProperty */ .G4M[keyIndex]])) {
            sectionFormat.initialEndNoteNumber = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .initialEndNoteNumberProperty */ .G4M[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageNumberStyleProperty */ .tkr[keyIndex]])) {
            sectionFormat.pageNumberStyle = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .pageNumberStyleProperty */ .tkr[keyIndex]];
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnsProperty */ .FCt[keyIndex]]) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberOfColumnsProperty */ .Rm5[keyIndex]]) && data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberOfColumnsProperty */ .Rm5[keyIndex]] > 1) {
            sectionFormat.numberOfColumns = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .numberOfColumnsProperty */ .Rm5[keyIndex]];
            sectionFormat.equalWidth = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .equalWidthProperty */ .WUD[keyIndex]]);
            sectionFormat.lineBetweenColumns = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.parseBoolValue(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .lineBetweenColumnsProperty */ .lW5[keyIndex]]);
            if (data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnsProperty */ .FCt[keyIndex]]) {
                for (var i = 0; i < data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnsProperty */ .FCt[keyIndex]].length; i++) {
                    var newCol = new _format_index__WEBPACK_IMPORTED_MODULE_12__/* .WColumnFormat */ .f();
                    newCol.width = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnsProperty */ .FCt[keyIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[keyIndex]]);
                    newCol.space = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .columnsProperty */ .FCt[keyIndex]][i][_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceProperty */ .yip[keyIndex]]);
                    newCol.index = i;
                    sectionFormat.columns.push(newCol);
                }
            }
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(data[_index__WEBPACK_IMPORTED_MODULE_4__/* .breakCodeProperty */ .G4q[keyIndex]])) {
            sectionFormat.breakCode = data[_index__WEBPACK_IMPORTED_MODULE_4__/* .breakCodeProperty */ .G4q[keyIndex]];
        }
    };
    SfdtReader.prototype.parseColumns = function (wCols, columns) {
        columns = [];
        if (wCols) {
            for (var i = 0; i < wCols.length; i++) {
                var newCol = new _format_index__WEBPACK_IMPORTED_MODULE_12__/* .WColumnFormat */ .f();
                newCol.width = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(wCols[i][_index__WEBPACK_IMPORTED_MODULE_4__/* .widthProperty */ .u5V[this.keywordIndex]]);
                newCol.space = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_3__/* .HelperMethods */ .LD.convertPointToPixel(wCols[i][_index__WEBPACK_IMPORTED_MODULE_4__/* .spaceProperty */ .yip[this.keywordIndex]]);
                newCol.index = i;
                columns.push(newCol);
            }
        }
    };
    SfdtReader.prototype.parseTabStop = function (keyIndex, wTabs, tabs) {
        if (wTabs) {
            for (var i = 0; i < wTabs.length; i++) {
                var isDuplicate = false;
                var tab = wTabs[i];
                if (Object.keys(tab).length > 0) {
                    var tabStop = new _format_index__WEBPACK_IMPORTED_MODULE_14__/* .WTabStop */ .$();
                    tabStop.position = tab[_index__WEBPACK_IMPORTED_MODULE_4__/* .positionProperty */ .FDR[keyIndex]];
                    tabStop.tabLeader = this.getTabLeader(tab[_index__WEBPACK_IMPORTED_MODULE_4__/* .tabLeaderProperty */ .Qrb[keyIndex]]);
                    tabStop.deletePosition = tab[_index__WEBPACK_IMPORTED_MODULE_4__/* .deletePositionProperty */ .U$i[keyIndex]];
                    tabStop.tabJustification = this.getTabJustification(tab[_index__WEBPACK_IMPORTED_MODULE_4__/* .tabJustificationProperty */ .Xyg[keyIndex]]);
                    for (var j = 0; j < tabs.length; j++) {
                        var existingTab = tabs[j];
                        if (existingTab.position === tabStop.position &&
                            existingTab.tabLeader === tabStop.tabLeader &&
                            existingTab.deletePosition === tabStop.deletePosition &&
                            existingTab.tabJustification === tabStop.tabJustification) {
                            isDuplicate = true;
                            break;
                        }
                    }
                    if (!isDuplicate) {
                        tabs.push(tabStop);
                    }
                }
            }
        }
    };
    SfdtReader.prototype.validateImageUrl = function (imagestr) {
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        imagestr = imagestr.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        var totalLength = imagestr.length * 3 / 4;
        if (imagestr.charAt(imagestr.length - 1) === keyStr.charAt(64)) {
            totalLength--;
        }
        if (imagestr.charAt(imagestr.length - 2) === keyStr.charAt(64)) {
            totalLength--;
        }
        if (totalLength % 1 !== 0) {
            // totalLength is not an integer, the length does not match a valid
            // base64 content. That can happen if:
            // - the imagestr is not a base64 content
            // - the imagestr is *almost* a base64 content, with a extra chars at the
            // beginning or at the end
            // - the imagestr uses a base64 variant (base64url for example)
            return false;
        }
        return true;
    };
    SfdtReader.prototype.containsFieldBegin = function (line) {
        var element = undefined;
        for (var i = line.children.length - 1; i >= 0; i--) {
            element = line.children[i];
            if (element instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ && element.hasFieldEnd && element.nextElement instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg) {
                return element.nextElement;
            }
            else if (element instanceof _page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ) {
                return undefined;
            }
        }
        return element;
    };
    SfdtReader.prototype.getBaseAlignment = function (baselineAlignment) {
        switch (baselineAlignment) {
            case 0:
                return 'Normal';
            case 1:
                return 'Superscript';
            case 2:
                return 'Subscript';
            default:
                return baselineAlignment;
        }
    };
    SfdtReader.prototype.getUnderline = function (underline) {
        switch (underline) {
            case 0:
                return 'None';
            case 1:
                return 'Single';
            case 2:
                return 'Words';
            case 3:
                return 'Double';
            case 4:
                return 'Dotted';
            case 5:
                return 'Thick';
            case 6:
                return 'Dash';
            case 7:
                return 'DashLong';
            case 8:
                return 'DotDash';
            case 9:
                return 'DotDotDash';
            case 10:
                return 'Wavy';
            case 11:
                return 'DottedHeavy';
            case 12:
                return 'DashHeavy';
            case 13:
                return 'DashLongHeavy';
            case 14:
                return 'DotDashHeavy';
            case 15:
                return 'DotDotDashHeavy';
            case 16:
                return 'WavyHeavy';
            case 17:
                return 'WavyDouble';
            default:
                return underline;
        }
    };
    SfdtReader.prototype.getFontHintType = function (fontHintType) {
        switch (fontHintType) {
            case 0:
                return 'Default';
            case 1:
                return 'EastAsia';
            case 2:
                return 'CS';
            default:
                return fontHintType;
        }
    };
    SfdtReader.prototype.getStrikethrough = function (strikethrough) {
        switch (strikethrough) {
            case 0:
                return 'None';
            case 1:
                return 'SingleStrike';
            case 2:
                return 'DoubleStrike';
            default:
                return strikethrough;
        }
    };
    SfdtReader.prototype.getHighlightColor = function (highlightColor) {
        switch (highlightColor) {
            case 0:
                return 'NoColor';
            case 1:
                return 'Yellow';
            case 2:
                return 'BrightGreen';
            case 3:
                return 'Turquoise';
            case 4:
                return 'Pink';
            case 5:
                return 'Blue';
            case 6:
                return 'Red';
            case 7:
                return 'DarkBlue';
            case 8:
                return 'Teal';
            case 9:
                return 'Green';
            case 10:
                return 'Violet';
            case 11:
                return 'DarkRed';
            case 12:
                return 'DarkYellow';
            case 13:
                return 'Gray50';
            case 14:
                return 'Gray25';
            case 15:
                return 'Black';
            default:
                return highlightColor;
        }
    };
    SfdtReader.prototype.getLineSpacingType = function (lineSpacingType) {
        switch (lineSpacingType) {
            case 0:
                return 'Multiple';
            case 1:
                return 'AtLeast';
            case 2:
                return 'Exactly';
            default:
                return lineSpacingType;
        }
    };
    SfdtReader.prototype.getOutlineLevel = function (outlineLevel) {
        switch (outlineLevel) {
            case 0:
                return 'BodyText';
            case 1:
                return 'Level1';
            case 2:
                return 'Level2';
            case 3:
                return 'Level3';
            case 4:
                return 'Level4';
            case 5:
                return 'Level5';
            case 6:
                return 'Level6';
            case 7:
                return 'Level7';
            case 8:
                return 'Level8';
            case 9:
                return 'Level9';
            default:
                return outlineLevel;
        }
    };
    SfdtReader.prototype.getTextAlignment = function (textAlignment) {
        switch (textAlignment) {
            case 0:
                return 'Left';
            case 1:
                return 'Center';
            case 2:
                return 'Right';
            case 3:
                return 'Justify';
            default:
                return textAlignment;
        }
    };
    SfdtReader.prototype.getWidthType = function (widthType) {
        switch (widthType) {
            case 0:
                return 'Auto';
            case 1:
                return 'Percent';
            case 2:
                return 'Point';
            default:
                return widthType;
        }
    };
    SfdtReader.prototype.getTableAlignment = function (tableAlignment) {
        switch (tableAlignment) {
            case 0:
                return 'Left';
            case 1:
                return 'Center';
            case 2:
                return 'Right';
            default:
                return tableAlignment;
        }
    };
    SfdtReader.prototype.getLineStyle = function (lineStyle) {
        switch (lineStyle) {
            case 0:
                return 'Single';
            case 1:
                return 'None';
            case 2:
                return 'Dot';
            case 3:
                return 'DashSmallGap';
            case 4:
                return 'DashLargeGap';
            case 5:
                return 'DashDot';
            case 6:
                return 'DashDotDot';
            case 7:
                return 'Double';
            case 8:
                return 'Triple';
            case 9:
                return 'ThinThickSmallGap';
            case 10:
                return 'ThickThinSmallGap';
            case 11:
                return 'ThinThickThinSmallGap';
            case 12:
                return 'ThinThickMediumGap';
            case 13:
                return 'ThickThinMediumGap';
            case 14:
                return 'ThinThickThinMediumGap';
            case 15:
                return 'ThinThickLargeGap';
            case 16:
                return 'ThickThinLargeGap';
            case 17:
                return 'ThinThickThinLargeGap';
            case 18:
                return 'SingleWavy';
            case 19:
                return 'DoubleWavy';
            case 20:
                return 'DashDotStroked';
            case 21:
                return 'Emboss3D';
            case 22:
                return 'Engrave3D';
            case 23:
                return 'Outset';
            case 24:
                return 'Inset';
            case 25:
                return 'Thick';
            case 26:
                return 'Cleared';
            default:
                return lineStyle;
        }
    };
    SfdtReader.prototype.getTextureStyle = function (textureStyle) {
        switch (textureStyle) {
            case 0:
                return 'TextureNone';
            case 1:
                return 'Texture2Pt5Percent';
            case 2:
                return 'Texture5Percent';
            case 3:
                return 'Texture7Pt5Percent';
            case 4:
                return 'Texture10Percent';
            case 5:
                return 'Texture12Pt5Percent';
            case 6:
                return 'Texture15Percent';
            case 7:
                return 'Texture17Pt5Percent';
            case 8:
                return 'Texture20Percent';
            case 9:
                return 'Texture22Pt5Percent';
            case 10:
                return 'Texture25Percent';
            case 11:
                return 'Texture27Pt5Percent';
            case 12:
                return 'Texture30Percent';
            case 13:
                return 'Texture32Pt5Percent';
            case 14:
                return 'Texture35Percent';
            case 15:
                return 'Texture37Pt5Percent';
            case 16:
                return 'Texture40Percent';
            case 17:
                return 'Texture42Pt5Percent';
            case 18:
                return 'Texture45Percent';
            case 19:
                return 'Texture47Pt5Percent';
            case 20:
                return 'Texture50Percent';
            case 21:
                return 'Texture52Pt5Percent';
            case 22:
                return 'Texture55Percent';
            case 23:
                return 'Texture57Pt5Percent';
            case 24:
                return 'Texture60Percent';
            case 25:
                return 'Texture62Pt5Percent';
            case 26:
                return 'Texture65Percent';
            case 27:
                return 'Texture67Pt5Percent';
            case 28:
                return 'Texture70Percent';
            case 29:
                return 'Texture72Pt5Percent';
            case 30:
                return 'Texture75Percent';
            case 31:
                return 'Texture77Pt5Percent';
            case 32:
                return 'Texture80Percent';
            case 33:
                return 'Texture82Pt5Percent';
            case 34:
                return 'Texture85Percent';
            case 35:
                return 'Texture87Pt5Percent';
            case 36:
                return 'Texture90Percent';
            case 37:
                return 'Texture92Pt5Percent';
            case 38:
                return 'Texture95Percent';
            case 39:
                return 'Texture97Pt5Percent';
            case 40:
                return 'TextureSolid';
            case 41:
                return 'TextureDarkHorizontal';
            case 42:
                return 'TextureDarkVertical';
            case 43:
                return 'TextureDarkDiagonalDown';
            case 44:
                return 'TextureDarkDiagonalUp';
            case 45:
                return 'TextureDarkCross';
            case 46:
                return 'TextureDarkDiagonalCross';
            case 47:
                return 'TextureHorizontal';
            case 48:
                return 'TextureVertical';
            case 49:
                return 'TextureDiagonalDown';
            case 50:
                return 'TextureDiagonalUp';
            case 51:
                return 'TextureCross';
            case 52:
                return 'TextureDiagonalCross';
            default:
                return textureStyle;
        }
    };
    SfdtReader.prototype.getHeightType = function (heightType) {
        switch (heightType) {
            case 0:
                return 'AtLeast';
            case 1:
                return 'Exactly';
            default:
                return heightType;
        }
    };
    SfdtReader.prototype.getCellVerticalAlignment = function (cellVerticalAlignment) {
        switch (cellVerticalAlignment) {
            case 0:
                return 'Top';
            case 1:
                return 'Center';
            case 2:
                return 'Bottom';
            default:
                return cellVerticalAlignment;
        }
    };
    /**
     * @private
     */
    SfdtReader.prototype.getListLevelPattern = function (listLevelPattern) {
        switch (listLevelPattern) {
            case 0:
                return 'None';
            case 1:
            // In online Ms Word, the Arabic pattern is applied for unsupported list level pattern.
            case 13:
            case 'KanjiDigit':
                return 'Arabic';
            case 2:
                return 'UpRoman';
            case 3:
                return 'LowRoman';
            case 4:
                return 'UpLetter';
            case 5:
                return 'LowLetter';
            case 6:
                return 'Ordinal';
            case 7:
                return 'Number';
            case 8:
                return 'OrdinalText';
            case 9:
                return 'LeadingZero';
            case 10:
                return 'Bullet';
            case 11:
                return 'FarEast';
            case 12:
                return 'Special';
            default:
                return listLevelPattern;
        }
    };
    SfdtReader.prototype.getFollowCharacterType = function (followCharacterType) {
        switch (followCharacterType) {
            case 0:
                return 'Tab';
            case 1:
                return 'Space';
            case 2:
                return 'None';
            default:
                return followCharacterType;
        }
    };
    SfdtReader.prototype.getStyleType = function (styleType) {
        switch (styleType) {
            case 0:
                return 'Paragraph';
            case 1:
                return 'Character';
            case 2:
                return 'Table';
            default:
                return styleType;
        }
    };
    SfdtReader.prototype.getProtectionType = function (protectionType) {
        switch (protectionType) {
            case 0:
                return 'NoProtection';
            case 1:
                return 'ReadOnly';
            case 2:
                return 'FormFieldsOnly';
            case 3:
                return 'CommentsOnly';
            case 4:
                return 'RevisionsOnly';
            default:
                return protectionType;
        }
    };
    SfdtReader.prototype.getRevisionType = function (revisionType) {
        switch (revisionType) {
            case 1:
                return 'Insertion';
            case 2:
                return 'Deletion';
            case 3:
                return 'MoveTo';
            case 4:
                return 'MoveFrom';
            default:
                return revisionType;
        }
    };
    SfdtReader.prototype.getFootnoteType = function (footnoteType) {
        switch (footnoteType) {
            case 0:
                return 'Footnote';
            case 1:
                return 'Endnote';
            default:
                return footnoteType;
        }
    };
    SfdtReader.prototype.getFootnoteRestartIndex = function (footnoteRestartIndex) {
        switch (footnoteRestartIndex) {
            case 0:
                return 'DoNotRestart';
            case 1:
                return 'RestartForEachSection';
            case 2:
                return 'RestartForEachPage';
            default:
                return footnoteRestartIndex;
        }
    };
    SfdtReader.prototype.getFootEndNoteNumberFormat = function (footEndNoteNumberFormat) {
        switch (footEndNoteNumberFormat) {
            case 0:
                return 'Arabic';
            case 1:
                return 'UpperCaseRoman';
            case 2:
                return 'LowerCaseRoman';
            case 3:
                return 'UpperCaseLetter';
            case 4:
                return 'LowerCaseLetter';
            default:
                return footEndNoteNumberFormat;
        }
    };
    SfdtReader.prototype.getBiDirectionalOverride = function (biDirectionalOverride) {
        switch (biDirectionalOverride) {
            case 0:
                return 'None';
            case 1:
                return 'LTR';
            case 2:
                return 'RTL';
            default:
                return biDirectionalOverride;
        }
    };
    SfdtReader.prototype.getBreakClearType = function (breakClearType) {
        switch (breakClearType) {
            case 0:
                return 'None';
            case 1:
                return 'Left';
            case 2:
                return 'Right';
            case 3:
                return 'All';
            default:
                return breakClearType;
        }
    };
    SfdtReader.prototype.getTextVerticalAlignment = function (textVerticalAlignment) {
        switch (textVerticalAlignment) {
            case 0:
                return 'Top';
            case 1:
                return 'Center';
            case 2:
                return 'Bottom';
            default:
                return textVerticalAlignment;
        }
    };
    SfdtReader.prototype.getShapeVerticalAlignment = function (shapeVerticalAlignment) {
        switch (shapeVerticalAlignment) {
            case 0:
                return 'None';
            case 1:
                return 'Top';
            case 2:
                return 'Center';
            case 3:
                return 'Bottom';
            case 4:
                return 'Inline';
            case 5:
                return 'Inside';
            case 6:
                return 'Outside';
            default:
                return shapeVerticalAlignment;
        }
    };
    SfdtReader.prototype.getShapeHorizontalAlignment = function (shapeHorizontalAlignment) {
        switch (shapeHorizontalAlignment) {
            case 0:
                return 'None';
            case 1:
                return 'Center';
            case 2:
                return 'Inside';
            case 3:
                return 'Left';
            case 4:
                return 'Outside';
            case 5:
                return 'Right';
            default:
                return shapeHorizontalAlignment;
        }
    };
    SfdtReader.prototype.getVerticalOrigin = function (verticalOrigin) {
        switch (verticalOrigin) {
            case 0:
                return 'Paragraph';
            case 1:
                return 'BottomMargin';
            case 2:
                return 'InsideMargin';
            case 3:
                return 'Line';
            case 4:
                return 'Margin';
            case 5:
                return 'OutsideMargin';
            case 6:
                return 'Page';
            case 7:
                return 'TopMargin';
            default:
                return verticalOrigin;
        }
    };
    SfdtReader.prototype.getHorizontalOrigin = function (horizontalOrigin) {
        switch (horizontalOrigin) {
            case 0:
                return 'Column';
            case 1:
                return 'Character';
            case 2:
                return 'InsideMargin';
            case 3:
                return 'LeftMargin';
            case 4:
                return 'Margin';
            case 5:
                return 'OutsideMargin';
            case 6:
                return 'Page';
            case 7:
                return 'RightMargin';
            default:
                return horizontalOrigin;
        }
    };
    SfdtReader.prototype.getTableVerticalRelation = function (tableRelation) {
        switch (tableRelation) {
            case 0:
                return 'Paragraph';
            case 1:
                return 'Margin';
            case 2:
                return 'Page';
            default:
                return tableRelation;
        }
    };
    SfdtReader.prototype.getTableHorizontalRelation = function (tableRelation) {
        switch (tableRelation) {
            case 0:
                return 'Column';
            case 1:
                return 'Margin';
            case 2:
                return 'Page';
            default:
                return tableRelation;
        }
    };
    SfdtReader.prototype.getTableVerticalPosition = function (tableVerticalPosition) {
        switch (tableVerticalPosition) {
            case 0:
                return 'None';
            case 1:
                return 'Top';
            case 2:
                return 'Center';
            case 3:
                return 'Bottom';
            case 4:
                return 'Inside';
            case 5:
                return 'Outside';
            default:
                return tableVerticalPosition;
        }
    };
    SfdtReader.prototype.getTableHorizontalPosition = function (tableHorizontalPosition) {
        switch (tableHorizontalPosition) {
            case 0:
                return 'Left';
            case 1:
                return 'Center';
            case 2:
                return 'Inside';
            case 3:
                return 'Outside';
            case 4:
                return 'Right';
            default:
                return tableHorizontalPosition;
        }
    };
    SfdtReader.prototype.getLineDashStyle = function (lineDashStyle) {
        switch (lineDashStyle) {
            case 0:
                return 'Solid';
            case 1:
                return 'Dash';
            case 2:
                return 'DashDot';
            case 3:
                return 'DashDotDot';
            case 4:
                return 'DashDotGEL';
            case 5:
                return 'DashGEL';
            case 6:
                return 'Dot';
            case 7:
                return 'DotGEL';
            case 8:
                return 'LongDashDotDotGEL';
            case 9:
                return 'LongDashDotGEL';
            case 10:
                return 'LongDashGEL';
            default:
                return lineDashStyle;
        }
    };
    SfdtReader.prototype.getHorizontalPositionAbs = function (horizontalPositionAbs) {
        switch (horizontalPositionAbs) {
            case 0:
                return 'Left';
            case 1:
                return 'Center';
            case 2:
                return 'Right';
            case 3:
                return 'Inside';
            case 4:
                return 'Outside';
            default:
                return horizontalPositionAbs;
        }
    };
    SfdtReader.prototype.getTabJustification = function (tabJustification) {
        switch (tabJustification) {
            case 0:
                return 'Left';
            case 1:
                return 'Bar';
            case 2:
                return 'Center';
            case 3:
                return 'Decimal';
            case 4:
                return 'List';
            case 5:
                return 'Right';
            default:
                return tabJustification;
        }
    };
    SfdtReader.prototype.getTabLeader = function (tabLeader) {
        switch (tabLeader) {
            case 0:
                return 'None';
            case 1:
                return 'Single';
            case 2:
                return 'Dot';
            case 3:
                return 'Hyphen';
            case 4:
                return 'Underscore';
            default:
                return tabLeader;
        }
    };
    SfdtReader.prototype.getTextFormFieldType = function (textFormFieldType) {
        switch (textFormFieldType) {
            case 0:
                return 'Text';
            case 1:
                return 'Number';
            case 2:
                return 'Date';
            case 3:
                return 'Calculation';
            default:
                return textFormFieldType;
        }
    };
    SfdtReader.prototype.getTextFormFieldFormat = function (textFormFieldFormat) {
        switch (textFormFieldFormat) {
            case 0:
                return 'None';
            case 1:
                return 'FirstCapital';
            case 2:
                return 'Lowercase';
            case 3:
                return 'Uppercase';
            case 4:
                return 'Titlecase';
            default:
                return textFormFieldFormat;
        }
    };
    SfdtReader.prototype.getCheckBoxSizeType = function (checkBoxSizeType) {
        switch (checkBoxSizeType) {
            case 0:
                return 'Auto';
            case 1:
                return 'Exactly';
            default:
                return checkBoxSizeType;
        }
    };
    SfdtReader.prototype.getContentControlAppearance = function (contentControlAppearance) {
        switch (contentControlAppearance) {
            case 1:
                return 'BoundingBox';
            case 2:
                return 'Hidden';
            case 3:
                return 'Tags';
            default:
                return contentControlAppearance;
        }
    };
    SfdtReader.prototype.getContentControlType = function (contentControlType) {
        switch (contentControlType) {
            case 0:
                return 'RichText';
            case 1:
                return 'BuildingBlockGallery';
            case 2:
                return 'CheckBox';
            case 3:
                return 'ComboBox';
            case 4:
                return 'Date';
            case 5:
                return 'DropDownList';
            case 6:
                return 'Group';
            case 7:
                return 'Picture';
            case 8:
                return 'RepeatingSection';
            case 9:
                return 'Text';
            default:
                return contentControlType;
        }
    };
    SfdtReader.prototype.getDateCalendarType = function (dateCalendarType) {
        switch (dateCalendarType) {
            case 0:
                return 'Gregorian';
            case 1:
                return 'GregorianArabic';
            case 2:
                return 'GregorianEnglish';
            case 3:
                return 'GregorianMiddleEastFrench';
            case 4:
                return 'GregorianTransliteratedEnglish';
            case 5:
                return 'GregorianTransliteratedFrench';
            case 6:
                return 'Hebrew';
            case 7:
                return 'Hijri';
            case 8:
                return 'Japan';
            case 9:
                return 'Korean';
            case 10:
                return 'Saka';
            case 11:
                return 'Taiwan';
            case 12:
                return 'Thai';
            default:
                return dateCalendarType;
        }
    };
    SfdtReader.prototype.getDateStorageFormat = function (dateStorageFormat) {
        switch (dateStorageFormat) {
            case 1:
                return 'DateStorageDate';
            case 2:
                return 'DateStorageDateTime';
            case 3:
                return 'DateStorageText';
            default:
                return dateStorageFormat;
        }
    };
    SfdtReader.prototype.getTextWrappingStyle = function (textWrappingStyle) {
        switch (textWrappingStyle) {
            case 0:
                return 'Inline';
            case 1:
                return 'InFrontOfText';
            case 2:
                return 'Square';
            case 3:
                return 'TopAndBottom';
            case 4:
                return 'Behind';
            default:
                return textWrappingStyle;
        }
    };
    SfdtReader.prototype.getTextWrappingType = function (textWrappingType) {
        switch (textWrappingType) {
            case 0:
                return 'Both';
            case 1:
                return 'Left';
            case 2:
                return 'Right';
            case 3:
                return 'Largest';
            default:
                return textWrappingType;
        }
    };
    SfdtReader.prototype.getCompatibilityMode = function (compatibilityMode) {
        switch (compatibilityMode) {
            case 0:
                return 'Word2013';
            case 1:
                return 'Word2003';
            case 2:
                return 'Word2007';
            case 3:
                return 'Word2010';
            default:
                return compatibilityMode;
        }
    };
    SfdtReader.prototype.getLineFormatType = function (lineFormatType) {
        switch (lineFormatType) {
            case 0:
                return 'Solid';
            case 1:
                return 'Patterned';
            case 2:
                return 'Gradient';
            case 3:
                return 'None';
            default:
                return lineFormatType;
        }
    };
    SfdtReader.prototype.getAutoShapeType = function (autoShapeType) {
        switch (autoShapeType) {
            case 1:
                return 'Rectangle';
            case 2:
                return 'RoundedRectangle';
            case 3:
                return 'StraightConnector';
            case 4:
                return "Oval";
            case 5:
                return "IsoscelesTriangle";
            case 6:
                return "RightTriangle";
            case 7:
                return "Parallelogram";
            case 8:
                return "Trapezoid";
            case 9:
                return "Diamond";
            case 10:
                return "RegularPentagon";
            case 11:
                return "Hexagon";
            case 12:
                return "Heptagon";
            case 13:
                return "Octagon";
            case 14:
                return "Decagon";
            case 15:
                return "Dodecagon";
            case 16:
                return "Chord";
            case 17:
                return "Teardrop";
            case 18:
                return "Frame";
            case 19:
                return "HalfFrame";
            case 20:
                return "L_Shape";
            case 21:
                return "Pie";
            case 22:
                return "DiagonalStripe";
            case 23:
                return "Cross";
            case 24:
                return "Plaque";
            case 25:
                return "Can";
            case 26:
                return "Cube";
            case 27:
                return "Bevel";
            case 28:
                return "Donut";
            case 29:
                return "NoSymbol";
            case 30:
                return "BlockArc";
            case 31:
                return "FoldedCorner";
            case 32:
                return "SmileyFace";
            case 33:
                return "Heart";
            case 34:
                return "LightningBolt";
            case 35:
                return "Sun";
            case 36:
                return "Moon";
            case 37:
                return "Cloud";
            case 38:
                return "Arc";
            case 39:
                return "DoubleBracket";
            case 40:
                return "DoubleBrace";
            case 41:
                return "LeftBracket";
            case 42:
                return "RightBracket";
            case 43:
                return "LeftBrace";
            case 44:
                return "RightBrace";
            case 45:
                return "FlowChartProcess";
            case 46:
                return "FlowChartAlternateProcess";
            case 47:
                return "FlowChartDecision";
            case 48:
                return "FlowChartData";
            case 49:
                return "FlowChartPredefinedProcess";
            case 50:
                return "FlowChartInternalStorage";
            case 51:
                return "FlowChartDocument";
            case 52:
                return "FlowChartMultiDocument";
            case 53:
                return "FlowChartTerminator";
            case 54:
                return "FlowChartPreparation";
            case 55:
                return "FlowChartManualInput";
            case 56:
                return "FlowChartManualOperation";
            case 57:
                return "FlowChartConnector";
            case 58:
                return "FlowChartOffPageConnector";
            case 59:
                return "FlowChartCard";
            case 60:
                return "FlowChartPunchedTape";
            case 61:
                return "FlowChartSummingJunction";
            case 62:
                return "FlowChartOr";
            case 63:
                return "FlowChartCollate";
            case 64:
                return "FlowChartSort";
            case 65:
                return "FlowChartExtract";
            case 66:
                return "FlowChartMerge";
            case 67:
                return "FlowChartStoredData";
            case 68:
                return "FlowChartDelay";
            case 69:
                return "FlowChartSequentialAccessStorage";
            case 70:
                return "FlowChartMagneticDisk";
            case 71:
                return "FlowChartDirectAccessStorage";
            case 72:
                return "FlowChartDisplay";
            case 73:
                return "RightArrow";
            case 74:
                return "LeftArrow";
            case 75:
                return "UpArrow";
            case 76:
                return "DownArrow";
            case 77:
                return "LeftRightArrow";
            case 78:
                return "UpDownArrow";
            case 79:
                return "QuadArrow";
            case 80:
                return "LeftRightUpArrow";
            case 81:
                return "BentArrow";
            case 82:
                return "UTurnArrow";
            case 83:
                return "LeftUpArrow";
            case 84:
                return "BentUpArrow";
            case 85:
                return "CurvedRightArrow";
            case 86:
                return "CurvedLeftArrow";
            case 87:
                return "CurvedUpArrow";
            case 88:
                return "CurvedDownArrow";
            case 89:
                return "StripedRightArrow";
            case 90:
                return "NotchedRightArrow";
            case 91:
                return "Pentagon";
            case 92:
                return "Chevron";
            case 93:
                return "RightArrowCallout";
            case 94:
                return "DownArrowCallout";
            case 95:
                return "LeftArrowCallout";
            case 96:
                return "UpArrowCallout";
            case 97:
                return "LeftRightArrowCallout";
            case 98:
                return "QuadArrowCallout";
            case 99:
                return "CircularArrow";
            case 100:
                return "MathPlus";
            case 101:
                return "MathMinus";
            case 102:
                return "MathMultiply";
            case 103:
                return "MathDivision";
            case 104:
                return "MathEqual";
            case 105:
                return "MathNotEqual";
            case 106:
                return "Explosion1";
            case 107:
                return "Explosion2";
            case 108:
                return "Star4Point";
            case 109:
                return "Star5Point";
            case 110:
                return "Star6Point";
            case 111:
                return "Star7Point";
            case 112:
                return "Star8Point";
            case 113:
                return "Star10Point";
            case 114:
                return "Star12Point";
            case 115:
                return "Star16Point";
            case 116:
                return "Star24Point";
            case 117:
                return "Star32Point";
            case 118:
                return "UpRibbon";
            case 119:
                return "DownRibbon";
            case 120:
                return "CurvedUpRibbon";
            case 121:
                return "CurvedDownRibbon";
            case 122:
                return "VerticalScroll";
            case 123:
                return "HorizontalScroll";
            case 124:
                return "Wave";
            case 125:
                return "DoubleWave";
            case 126:
                return "SnipSingleCornerRectangle";
            case 127:
                return "SnipSameSideCornerRectangle";
            case 128:
                return "SnipDiagonalCornerRectangle";
            case 129:
                return "SnipAndRoundSingleCornerRectangle";
            case 130:
                return "RoundSingleCornerRectangle";
            case 131:
                return "RoundSameSideCornerRectangle";
            case 132:
                return "RoundDiagonalCornerRectangle";
            case 133:
                return "Unknown";
            case 134:
                return "ElbowConnector";
            case 135:
                return "CurvedConnector";
            default:
                return autoShapeType;
        }
    };
    /**
     * @private
     * @returns {void}
     */
    SfdtReader.prototype.destroy = function () {
        if (this.footnotes) {
            this.footnotes.destroy();
        }
        this.footnotes = undefined;
        if (this.endnotes) {
            this.endnotes.destroy();
        }
        this.endnotes = undefined;
        if (this.editableRanges) {
            this.editableRanges.destroy();
        }
        this.editableRanges = undefined;
        if (this.commentEnds) {
            this.commentEnds.destroy();
        }
        this.commentEnds = undefined;
        if (this.commentStarts) {
            this.commentStarts.destroy();
        }
        this.commentStarts = undefined;
        if (this.commentsCollection) {
            this.commentsCollection.destroy();
        }
        this.commentsCollection = undefined;
        if (this.revisionCollection) {
            this.revisionCollection.destroy();
        }
        this.revisionCollection = undefined;
        if (this.fontInfoCollection) {
            this.fontInfoCollection.destroy();
        }
        if (this.revisionMap) {
            this.revisionMap.destroy();
        }
        this.revisionMap = undefined;
        this.stylesCollection = undefined;
        this.fontInfoCollection = undefined;
        this.documentHelper = undefined;
        this.keywordIndex = undefined;
    };
    return SfdtReader;
}());



/***/ })

}]);
//# sourceMappingURL=cde99ca1-a186d31866d42853.js.map