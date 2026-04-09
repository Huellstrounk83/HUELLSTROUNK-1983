"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1388],{

/***/ 53115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ SfdtExport)
/* harmony export */ });
/* harmony import */ var _format_paragraph_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33077);
/* harmony import */ var _format_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26886);
/* harmony import */ var _viewer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12695);
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6841);
/* harmony import */ var _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74023);
/* harmony import */ var _syncfusion_ej2_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14964);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36012);








/**
 * Exports the document to Sfdt format.
 */
var SfdtExport = /** @class */ (function () {
    function SfdtExport(documentHelper) {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        this.startLine = undefined;
        this.endLine = undefined;
        this.endOffset = undefined;
        this.endCell = undefined;
        this.startColumnIndex = undefined;
        this.endColumnIndex = undefined;
        this.lists = undefined;
        this.images = undefined;
        this.document = undefined;
        this.writeInlineStyles = undefined;
        this.blockContent = false;
        this.startContent = false;
        this.multipleLineContent = false;
        this.nestedContent = false;
        this.editRangeId = -1;
        this.selectedCommentsId = [];
        this.selectedRevisionId = [];
        this.nestedBlockContent = false;
        this.nestedBlockEnabled = false;
        /**
         * @private
         */
        this.blocks = [];
        this.contentInline = [];
        this.isContentControl = false;
        this.isBlockClosed = true;
        this.isWriteInlinesFootNote = false;
        this.isWriteEndFootNote = false;
        this.bookmarkCollection = [];
        /**
         * @private
         */
        // For spell check when serailize the page no to need to wirte the formatting. So we do this property as true it will skip the formatting.
        this.skipExporting = false;
        /**
         * @private
         */
        this.iscontentInsert = true;
        /**
         * @private
         */
        this.keywordIndex = undefined;
        /**
         * @private
         */
        this.isExport = true;
        /**
         * @private
         */
        this.isPartialExport = false;
        this.checkboxOrDropdown = false;
        /**
         * @private
         */
        this.copyWithTrackChange = false;
        this.documentHelper = documentHelper;
    }
    Object.defineProperty(SfdtExport.prototype, "viewer", {
        get: function () {
            return this.documentHelper.owner.viewer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SfdtExport.prototype, "owner", {
        get: function () {
            return this.documentHelper.owner;
        },
        enumerable: true,
        configurable: true
    });
    SfdtExport.prototype.getModuleName = function () {
        return 'SfdtExport';
    };
    SfdtExport.prototype.clear = function () {
        this.writeInlineStyles = undefined;
        this.startLine = undefined;
        this.endLine = undefined;
        this.lists = undefined;
        this.images = undefined;
        this.document = undefined;
        this.endCell = undefined;
        this.startColumnIndex = undefined;
        this.endColumnIndex = undefined;
        this.selectedCommentsId = [];
        this.selectedRevisionId = [];
        this.startBlock = undefined;
        this.endBlock = undefined;
        this.isPartialExport = false;
        this.keywordIndex = undefined;
    };
    /**
     * Serialize the data as Syncfusion document text.
     *
     * @private
     */
    SfdtExport.prototype.serialize = function () {
        return this.seralizeInternal(this.owner.documentEditorSettings.optimizeSfdt ? 1 : 0);
    };
    /**
     * Serialize the data as Syncfusion document text.
     *
     * @private
     */
    SfdtExport.prototype.seralizeInternal = function (index) {
        return JSON.stringify(this.write(index));
    };
    /**
     * @private
     * @param documentHelper - Specifies document helper instance.
     * @returns {Promise<Blob>}
     */
    SfdtExport.prototype.saveAsBlobNonOptimized = function (documentHelper) {
        var sfdt = new Blob([this.serialize()], { type: 'text/plain' });
        return new Promise(function (resolve, reject) {
            resolve(sfdt);
        });
    };
    /**
     * @private
     * @param documentHelper - Specifies document helper instance.
     * @returns {Promise<Blob>}
     */
    SfdtExport.prototype.saveAsBlob = function (documentHelper) {
        var jsonString = this.serialize();
        var blob = new Blob([jsonString], {
            type: 'application/json'
        });
        var archiveItem = new _syncfusion_ej2_compression__WEBPACK_IMPORTED_MODULE_1__/* .ZipArchiveItem */ .B8(blob, "sfdt");
        var mArchive = new _syncfusion_ej2_compression__WEBPACK_IMPORTED_MODULE_1__/* .ZipArchive */ .SJ();
        mArchive.addItem(archiveItem);
        return mArchive.saveAsBlob();
    };
    SfdtExport.prototype.updateEditRangeId = function () {
        var index = -1;
        for (var i = 0; i < this.documentHelper.editRanges.keys.length; i++) {
            var keys = this.documentHelper.editRanges.keys;
            for (var j = 0; j < keys[i].length; j++) {
                var editRangeStart = this.documentHelper.editRanges.get(keys[i]);
                for (var z = 0; z < editRangeStart.length; z++) {
                    index++;
                    editRangeStart[z].editRangeId = index;
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(editRangeStart[z].editRangeEnd)) {
                        editRangeStart[z].editRangeEnd.editRangeId = index;
                    }
                }
            }
        }
    };
    /**
     * @private
     */
    /* eslint-disable  */
    SfdtExport.prototype.write = function (index, line, startOffset, endLine, endOffset, writeInlineStyles, isExport) {
        var _a;
        if (writeInlineStyles) {
            this.writeInlineStyles = true;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(index)) {
            this.keywordIndex = index;
        }
        else {
            this.keywordIndex = this.owner.documentEditorSettings.optimizeSfdt ? 1 : 0;
        }
        this.Initialize();
        this.updateEditRangeId();
        if (line instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9 && endLine instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9) {
            this.isExport = false;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(isExport)) {
                this.isExport = isExport;
            }
            // For selection
            var startPara = line.paragraph;
            var endPara = endLine.paragraph;
            if (this.isPartialExport) {
                this.startBlock = this.getParentBlock(startPara);
                this.endBlock = this.getParentBlock(endPara);
            }
            var startCell = startPara.associatedCell;
            var endCell = endPara.associatedCell;
            // Creates section
            var bodyWidget = startPara.bodyWidget;
            var section = this.createSection(line.paragraph.bodyWidget);
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].push(section);
            var selectionStartCell = startCell;
            var selectionEndCell = endCell;
            if (startCell instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz) {
                selectionStartCell = this.getParentCell(selectionStartCell);
            }
            if (endCell instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz) {
                selectionEndCell = this.getParentCell(selectionEndCell);
            }
            var isSameCell = selectionStartCell instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz && selectionEndCell instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz
                && selectionStartCell.equals(selectionEndCell);
            if (isSameCell || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(endCell)) {
                this.startLine = line;
                this.endLine = endLine;
                this.endOffset = endOffset;
            }
            else {
                // Todo: Handle nested table cases
                if (startCell instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz) {
                    var startTable = startCell.getContainerTable();
                    var endTable = endCell.getContainerTable();
                    if (startTable.tableFormat === endTable.tableFormat) {
                        this.endCell = endCell;
                        if (this.endCell.ownerTable !== startCell.ownerTable && startCell.ownerTable.associatedCell
                            && startCell.ownerTable.associatedCell.ownerTable === this.endCell.ownerTable &&
                            (startCell.ownerTable.associatedCell.childWidgets.indexOf(startCell.ownerTable) === 0)) {
                            startCell = startCell.ownerTable.associatedCell;
                        }
                        this.endColumnIndex = this.endCell.columnIndex + this.endCell.cellFormat.columnSpan;
                        this.startColumnIndex = startCell.columnIndex;
                    }
                }
                else {
                    this.endCell = endCell;
                }
            }
            var nextBlock = void 0;
            if ((isSameCell && !this.isPartialExport) || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(startCell)) {
                var lastBlock = line.paragraph;
                var paraEndOffset = this.owner.selection.getLineLength(endPara.lastChild);
                var isBlockContentControl = startPara === endPara && this.endOffset === paraEndOffset + 1;
                if (this.owner.documentHelper.isCopying && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(startPara.contentControlProperties) && (startOffset === 0 || startOffset === 1) && (startPara !== endPara || (isBlockContentControl))) {
                    this.isContentControl = true;
                    nextBlock = this.writeBlock(lastBlock, 0, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
                    if (isBlockContentControl) {
                        var paragraph = this.createParagraph(line.paragraph);
                        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(paragraph);
                    }
                    this.isContentControl = false;
                }
                else {
                    var paragraph = this.createParagraph(line.paragraph);
                    section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(paragraph);
                    nextBlock = this.writeParagraph(line.paragraph, paragraph, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]], line.indexInOwner, startOffset);
                }
                if (this.isPartialExport) {
                    nextBlock = this.getNextBlock(nextBlock, lastBlock);
                    section = this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]][this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].length - 1];
                }
                while (nextBlock) {
                    var isDifferentSection = nextBlock.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$ && lastBlock.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$ && nextBlock.containerWidget.sectionIndex !== lastBlock.containerWidget.sectionIndex;
                    if (isDifferentSection) {
                        section = this.createSection(nextBlock.containerWidget);
                        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].push(section);
                        var paragraph = this.createParagraph(nextBlock);
                        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(paragraph);
                        lastBlock = nextBlock;
                        nextBlock = this.writeParagraph(lastBlock, paragraph, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]], line.indexInOwner, startOffset);
                        continue;
                    }
                    lastBlock = nextBlock;
                    if (this.owner.documentHelper.isCopying && nextBlock instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nextBlock.contentControlProperties) && nextBlock === endPara && this.endOffset !== paraEndOffset + 1) {
                        this.isContentControl = true;
                        var paragraph = this.createParagraph(nextBlock);
                        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(paragraph);
                        var offset = !nextBlock.isEmpty() ? this.owner.selection.getNextValidOffset(nextBlock.firstChild, 0) : 0;
                        nextBlock = this.writeParagraph(nextBlock, paragraph, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]], 0, offset);
                        this.isContentControl = false;
                    }
                    else {
                        nextBlock = this.writeBlock(nextBlock, 0, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
                    }
                    if (this.isPartialExport && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nextBlock)) {
                        nextBlock = this.getNextBlock(nextBlock, lastBlock);
                        section = this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]][this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].length - 1];
                    }
                }
                // Todo:continue in next section
            }
            else {
                // Specially handled for nested table cases
                // selection start inside table and end in paragraph outside table
                if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(endCell) && startCell.ownerTable.associatedCell) {
                    var startTable = startCell.getContainerTable();
                    var lastRow = startTable.childWidgets[startTable.childWidgets.length - 1];
                    var endCell_1 = lastRow.childWidgets[lastRow.childWidgets.length - 1];
                    if (endCell_1.ownerTable !== startCell.ownerTable && startCell.ownerTable.associatedCell
                        && (startCell.ownerTable.associatedCell.childWidgets.indexOf(startCell.ownerTable) === 0)) {
                        while (startCell.ownerTable !== endCell_1.ownerTable) {
                            startCell = startCell.ownerTable.associatedCell;
                        }
                    }
                    this.endColumnIndex = endCell_1.columnIndex + endCell_1.cellFormat.columnSpan;
                    this.startColumnIndex = startCell.columnIndex;
                }
                var table = this.createTable(startCell.ownerTable);
                section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(table);
                var lastBlock = startCell.ownerTable;
                nextBlock = this.writeTable(startCell.ownerTable, table, startCell.ownerRow.indexInOwner, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
                if (this.isPartialExport) {
                    nextBlock = this.getNextBlock(nextBlock, lastBlock);
                    section = this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]][this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].length - 1];
                }
                while (nextBlock) {
                    var isDifferentSection = nextBlock.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$ && lastBlock.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$ && nextBlock.containerWidget.sectionIndex !== lastBlock.containerWidget.sectionIndex;
                    if (isDifferentSection) {
                        section = this.createSection(nextBlock.containerWidget);
                        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].push(section);
                        var paragraph = this.createParagraph(nextBlock);
                        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(paragraph);
                        lastBlock = nextBlock;
                        nextBlock = this.writeParagraph(lastBlock, paragraph, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]], line.indexInOwner, startOffset);
                        continue;
                    }
                    lastBlock = nextBlock;
                    nextBlock = this.writeBlock(nextBlock, 0, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
                    if (this.isPartialExport) {
                        nextBlock = this.getNextBlock(nextBlock, lastBlock);
                        section = this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]][this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].length - 1];
                    }
                }
            }
        }
        else {
            this.isExport = true;
            if (this.documentHelper.pages.length > 0) {
                var page = this.documentHelper.pages[0];
                this.writePage(page, false);
            }
            else {
                this.serializeMinimal();
            }
        }
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .backgroundProperty */ .SM0[this.keywordIndex]] = (_a = {}, _a[_index__WEBPACK_IMPORTED_MODULE_3__/* .colorProperty */ .N64[this.keywordIndex]] = this.documentHelper.backgroundColor, _a);
        this.writeStyles(this.documentHelper);
        this.writeLists(this.documentHelper);
        this.writeComments(this.documentHelper);
        this.writeRevisions(this.documentHelper);
        this.writeCustomXml(this.documentHelper);
        this.writeImages(this.documentHelper);
        this.footnotes(this.documentHelper);
        this.endnotes(this.documentHelper);
        var doc = this.document;
        this.clear();
        return doc;
    };
    SfdtExport.prototype.serializeMinimal = function () {
        var section = {};
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]] = {};
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = [];
        var paragraph = {};
        paragraph[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = [];
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]].push(paragraph);
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .headersFootersProperty */ .gID[this.keywordIndex]] = {};
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].push(section);
    };
    SfdtExport.prototype.getNextBlock = function (nextBlock, lastBlock) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nextBlock) && this.isPartialExport && this.endBlock
            && !this.endBlock.equals(lastBlock)) {
            nextBlock = lastBlock.getSplitWidgets().pop().nextRenderedWidget;
            if (nextBlock && lastBlock.bodyWidget.index !== nextBlock.bodyWidget.index) {
                var section = this.createSection(nextBlock.bodyWidget);
                this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].push(section);
            }
            else {
                nextBlock = undefined;
            }
        }
        return nextBlock;
    };
    /**
     * @private
     */
    SfdtExport.prototype.Initialize = function () {
        this.lists = [];
        this.images = [];
        this.document = {};
        this.document.optimizeSfdt = this.owner.documentEditorSettings.optimizeSfdt;
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]] = [];
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(this.documentHelper.characterFormat, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]] = this.writeParagraphFormat(this.documentHelper.paragraphFormat, this.keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.documentHelper.fontSubstitutionTable)) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSubstitutionTableProperty */ .gG_[this.keywordIndex]] = this.writeFontSubsitutionTable(this.documentHelper);
        }
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .themeFontLanguagesProperty */ .L4m[this.keywordIndex]] = this.writeCharacterFormat(this.documentHelper.themeFontLanguage, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .defaultTabWidthProperty */ .owP[this.keywordIndex]] = this.documentHelper.defaultTabWidth;
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .trackChangesProperty */ .SEu[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(this.owner.enableTrackChanges, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .enforcementProperty */ .aIf[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(this.documentHelper.isDocumentProtected, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .hashValueProperty */ .n_F[this.keywordIndex]] = this.documentHelper.hashValue;
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .saltValueProperty */ .ljK[this.keywordIndex]] = this.documentHelper.saltValue;
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .formattingProperty */ .XGw[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(this.documentHelper.restrictFormatting, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .protectionTypeProperty */ .FvF[this.keywordIndex]] = this.keywordIndex == 1 ? this.getProtectionTypeEnumValue(this.documentHelper.protectionType) : this.documentHelper.protectionType;
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .doNotUseHTMLParagraphAutoSpacingProperty */ .A6j[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(this.documentHelper.dontUseHtmlParagraphAutoSpacing, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldShadingProperty */ .k$t[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(this.documentHelper.owner.documentEditorSettings.formFieldSettings.applyShading, this.keywordIndex);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .compatibilityModeProperty */ .fFD[this.keywordIndex]] = this.keywordIndex == 1 ? this.getCompatibilityModeEnumValue(this.documentHelper.compatibilityMode) : this.documentHelper.compatibilityMode;
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .allowSpaceOfSameStyleInTableProperty */ ._cN[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(this.documentHelper.allowSpaceOfSameStyleInTable, this.keywordIndex);
        if (this.documentHelper.hasThemes) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .themesProperty */ .qvS[this.keywordIndex]] = this.writeThemes(this.documentHelper.themes);
        }
    };
    SfdtExport.prototype.writeFontSubsitutionTable = function (documentHelper) {
        var fontSubstitutionTable = {};
        for (var i = 0; i < documentHelper.fontSubstitutionTable.length; i++) {
            var key = documentHelper.fontSubstitutionTable.keys[i];
            fontSubstitutionTable[key] = this.documentHelper.fontSubstitutionTable.get(key);
        }
        return fontSubstitutionTable;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writePage = function (page, spellChecker) {
        this.skipExporting = spellChecker;
        if (page.bodyWidgets.length > 0) {
            var nextBlock = page.bodyWidgets[0];
            do {
                nextBlock = this.writeBodyWidget(nextBlock, 0);
            } while (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nextBlock));
        }
        this.skipExporting = false;
        return this.document;
    };
    SfdtExport.prototype.writeBodyWidget = function (bodyWidget, index) {
        if (!(bodyWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$)) {
            return undefined;
        }
        var section = this.createSection(bodyWidget);
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionsProperty */ .gNC[this.keywordIndex]].push(section);
        this.writeHeaderFooters(this.documentHelper.headersFooters[bodyWidget.index], section);
        var firstBlock = bodyWidget.childWidgets[index];
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(firstBlock) && bodyWidget.nextRenderedWidget) {
            firstBlock = bodyWidget.nextRenderedWidget.childWidgets[index];
        }
        do {
            firstBlock = this.writeBlock(firstBlock, 0, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
        } while (firstBlock);
        var next = bodyWidget;
        do {
            bodyWidget = next;
            next = next.nextRenderedWidget;
            if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(next) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(bodyWidget.page.nextPage) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(bodyWidget.page.nextPage)) {
                next = bodyWidget.page.nextPage.bodyWidgets[0];
            }
        } while (next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$ && next.index === bodyWidget.index);
        // While importing, If the last paragraph is empty and the section break is present, then the empty paragraph is removed. So, added the empty paragraph at the end of the section while exporting.
        // let islastEmptyParagraph: boolean;
        // if (!isNullOrUndefined(bodyWidget.lastChild) && bodyWidget.lastChild instanceof ParagraphWidget) {
        //     islastEmptyParagraph = (bodyWidget.lastChild as ParagraphWidget).isEmpty();
        //     if (bodyWidget.lastChild.isSectionBreak && !isNullOrUndefined(bodyWidget.lastChild.previousRenderedWidget) && bodyWidget.lastChild.previousRenderedWidget instanceof TableWidget) {
        //         islastEmptyParagraph = false;
        //     }
        // } 
        // if (!isNullOrUndefined(next) && next instanceof BodyWidget && bodyWidget.sectionIndex !== next.sectionIndex && islastEmptyParagraph) {
        //     var paragraph = {};
        //     paragraph[inlinesProperty[this.keywordIndex]] = [];
        //     section[blocksProperty[this.keywordIndex]].push(paragraph);
        // }
        return next;
    };
    SfdtExport.prototype.writeHeaderFooters = function (hfs, section) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs)) {
            return;
        }
        var headersFooters = section[_index__WEBPACK_IMPORTED_MODULE_3__/* .headersFootersProperty */ .gID[this.keywordIndex]];
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs[0]) || hfs[0].isEmpty)) {
            headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .headerProperty */ .ZCS[this.keywordIndex]] = this.writeHeaderFooter(hfs[0]);
            if (JSON.stringify(headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .headerProperty */ .ZCS[this.keywordIndex]]) == "{}") {
                delete headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .headerProperty */ .ZCS[this.keywordIndex]];
            }
        }
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs[1]) || hfs[1].isEmpty)) {
            headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .footerProperty */ .xnl[this.keywordIndex]] = this.writeHeaderFooter(hfs[1]);
            if (JSON.stringify(headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .footerProperty */ .xnl[this.keywordIndex]]) == "{}") {
                delete headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .footerProperty */ .xnl[this.keywordIndex]];
            }
        }
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs[2]) || hfs[2].isEmpty)) {
            headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .evenHeaderProperty */ .ZAm[this.keywordIndex]] = this.writeHeaderFooter(hfs[2]);
            if (JSON.stringify(headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .evenHeaderProperty */ .ZAm[this.keywordIndex]]) == "{}") {
                delete headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .evenHeaderProperty */ .ZAm[this.keywordIndex]];
            }
        }
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs[3]) || hfs[3].isEmpty)) {
            headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .evenFooterProperty */ .$of[this.keywordIndex]] = this.writeHeaderFooter(hfs[3]);
            if (JSON.stringify(headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .evenFooterProperty */ .$of[this.keywordIndex]]) == "{}") {
                delete headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .evenFooterProperty */ .$of[this.keywordIndex]];
            }
        }
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs[4]) || hfs[4].isEmpty)) {
            headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstPageHeaderProperty */ .elv[this.keywordIndex]] = this.writeHeaderFooter(hfs[4]);
            if (JSON.stringify(headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstPageHeaderProperty */ .elv[this.keywordIndex]]) == "{}") {
                delete headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstPageHeaderProperty */ .elv[this.keywordIndex]];
            }
        }
        if (!((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(hfs[5]) || hfs[5].isEmpty)) {
            headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstPageFooterProperty */ .msI[this.keywordIndex]] = this.writeHeaderFooter(hfs[5]);
            if (JSON.stringify(headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstPageFooterProperty */ .msI[this.keywordIndex]]) == "{}") {
                delete headersFooters[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstPageFooterProperty */ .msI[this.keywordIndex]];
            }
        }
    };
    SfdtExport.prototype.writeHeaderFooter = function (widget) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(widget) || widget.isEmpty) {
            return undefined;
        }
        var headerFooter = {};
        if (widget && widget.childWidgets && widget.childWidgets.length > 0) {
            headerFooter[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = [];
            var firstBlock = widget.firstChild;
            do {
                firstBlock = this.writeBlock(firstBlock, 0, headerFooter[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
            } while (firstBlock);
        }
        return headerFooter;
    };
    SfdtExport.prototype.createSection = function (bodyWidget) {
        var section = {};
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]] = {};
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]] = this.writeSectionFormat(bodyWidget.sectionFormat, section[_index__WEBPACK_IMPORTED_MODULE_3__/* .sectionFormatProperty */ .Kbh[this.keywordIndex]], this.keywordIndex);
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = [];
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .headersFootersProperty */ .gID[this.keywordIndex]] = {};
        return section;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeSectionFormat = function (sectionFormat, section, keywordIndex) {
        if (this.skipExporting) {
            return section;
        }
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .pageWidthProperty */ .LWC[keywordIndex]] = sectionFormat.pageWidth;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .pageHeightProperty */ .sT9[keywordIndex]] = sectionFormat.pageHeight;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftMarginProperty */ .FJj[keywordIndex]] = sectionFormat.leftMargin;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .rightMarginProperty */ .wW3[keywordIndex]] = sectionFormat.rightMargin;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .topMarginProperty */ .PkB[keywordIndex]] = sectionFormat.topMargin;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomMarginProperty */ .fRV[keywordIndex]] = sectionFormat.bottomMargin;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .headerDistanceProperty */ .GHV[keywordIndex]] = sectionFormat.headerDistance;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .footerDistanceProperty */ .mGG[keywordIndex]] = sectionFormat.footerDistance;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .differentFirstPageProperty */ .y5G[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(sectionFormat.differentFirstPage, keywordIndex);
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .differentOddAndEvenPagesProperty */ .DFv[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(sectionFormat.differentOddAndEvenPages, keywordIndex);
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .bidiProperty */ .y1q[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(sectionFormat.bidi, keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sectionFormat.breakCode)) {
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .breakCodeProperty */ .G4q[keywordIndex]] = sectionFormat.breakCode;
        }
        if (sectionFormat.restartPageNumbering) {
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .restartPageNumberingProperty */ .P_6[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(sectionFormat.restartPageNumbering, keywordIndex);
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .pageStartingNumberProperty */ .GBM[keywordIndex]] = sectionFormat.pageStartingNumber;
        }
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnoteNumberFormatProperty */ .tgw[keywordIndex]] = keywordIndex == 1 ? this.getFootEndNoteNumberFormatEnumValue(sectionFormat.endnoteNumberFormat) : sectionFormat.endnoteNumberFormat;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .footNoteNumberFormatProperty */ .Cfz[keywordIndex]] = keywordIndex == 1 ? this.getFootEndNoteNumberFormatEnumValue(sectionFormat.footNoteNumberFormat) : sectionFormat.footNoteNumberFormat;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .restartIndexForFootnotesProperty */ .BU5[keywordIndex]] = keywordIndex == 1 ? this.getFootnoteRestartIndexEnumValue(sectionFormat.restartIndexForFootnotes) : sectionFormat.restartIndexForFootnotes;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .restartIndexForEndnotesProperty */ .GYd[keywordIndex]] = keywordIndex == 1 ? this.getFootnoteRestartIndexEnumValue(sectionFormat.restartIndexForEndnotes) : sectionFormat.restartIndexForEndnotes;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .initialFootNoteNumberProperty */ .TGt[keywordIndex]] = sectionFormat.initialFootNoteNumber;
        section[_index__WEBPACK_IMPORTED_MODULE_3__/* .initialEndNoteNumberProperty */ .G4M[keywordIndex]] = sectionFormat.initialEndNoteNumber;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sectionFormat.pageNumberStyle)) {
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .pageNumberStyleProperty */ .tkr[keywordIndex]] = sectionFormat.pageNumberStyle;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sectionFormat.columns) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(sectionFormat.numberOfColumns && sectionFormat.numberOfColumns > 1)) {
            var cols = sectionFormat.columns;
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .numberOfColumnsProperty */ .Rm5[keywordIndex]] = sectionFormat.numberOfColumns;
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .equalWidthProperty */ .WUD[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(sectionFormat.equalWidth, keywordIndex);
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineBetweenColumnsProperty */ .lW5[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(sectionFormat.lineBetweenColumns, keywordIndex);
            section[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnsProperty */ .FCt[keywordIndex]] = [];
            for (var i = 0; i < cols.length; i++) {
                var newCol = {};
                newCol[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(cols[i].width);
                newCol[_index__WEBPACK_IMPORTED_MODULE_3__/* .spaceProperty */ .yip[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(cols[i].space);
                section[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnsProperty */ .FCt[keywordIndex]].push(newCol);
            }
        }
        return section;
    };
    SfdtExport.prototype.writeBlock = function (widget, index, blocks) {
        if (!(widget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BlockWidget */ .yJ)) {
            return undefined;
        }
        //Export block content control       
        if (widget.hasOwnProperty('contentControlProperties') && widget.contentControlProperties && widget.contentControlProperties.type !== 'BuildingBlockGallery') {
            var block = this.blockContentControl(widget);
            this.blockContent = false;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block) && (this.isBlockClosed || !this.nestedBlockContent)) {
                this.nestedBlockEnabled = false;
                blocks.push(block);
                this.blocks = [];
            }
            return this.nextBlock;
        }
        else if (widget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D) {
            var paragraph = this.createParagraph(widget);
            blocks.push(paragraph);
            return this.writeParagraph(widget, paragraph, blocks);
        }
        else {
            var tableWidget = widget;
            if (tableWidget.hasOwnProperty('contentControlProperties') && tableWidget.contentControlProperties && tableWidget.contentControlProperties.type !== 'BuildingBlockGallery') {
                var block = this.tableContentControl(tableWidget);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block) && this.isBlockClosed) {
                    blocks.push(block);
                }
                return this.nextBlock;
            }
            var table = this.createTable(tableWidget);
            blocks.push(table);
            return this.writeTable(tableWidget, table, 0, blocks);
        }
    };
    // private writeParagraphs(widget: ParagraphWidget): any {
    //     let blocks: any = this.blocks;
    //     let child: LineWidget = widget.childWidgets[0] as LineWidget;
    //     let firstElement: ElementBox = child.children[0];
    //     let secondElement: ElementBox = child.children[1];
    //     if (firstElement instanceof ListTextElementBox || secondElement instanceof ListTextElementBox) {
    //         firstElement = child.children[2];
    //         secondElement = child.children[3];
    //     }
    //     if (this.nestedBlockEnabled) {
    //         blocks = [];
    //     }
    //     if ((firstElement instanceof ContentControl && secondElement instanceof ContentControl && !this.nestedBlockContent) || (this.blockContent && firstElement instanceof ContentControl && !this.nestedBlockContent)) {
    //         let nestedBlocks: boolean = false;
    //         if (secondElement instanceof ContentControl) {
    //             if ((secondElement as ContentControl).contentControlWidgetType === 'Block') {
    //                 nestedBlocks = true;
    //             }
    //         }
    //         if ((nestedBlocks || (this.blockContent && firstElement instanceof ContentControl && !this.nestedBlockContent && (firstElement as ContentControl).type === 0 && secondElement instanceof ContentControl && (firstElement as ContentControl).contentControlWidgetType === 'Block'))) {
    //             this.nestedBlockContent = true;
    //             this.nestedBlockEnabled = true;
    //             let block: any = this.blockContentControl(widget);
    //             if (!isNullOrUndefined(block)) {
    //                 this.blocks.push(block);
    //             }
    //         } else if(this.blocks.length > 0 &&  (firstElement instanceof ContentControl)&& (firstElement as ContentControl).contentControlWidgetType === 'Block') {
    //               this.nestedBlockContent = true;
    //             this.nestedBlockEnabled = true;
    //             let block: any = this.blockContentControl(widget);
    //             if (!isNullOrUndefined(block)) {
    //                 this.blocks.push(block);
    //             }
    //         }else {
    //             let paragraph: any = this.createParagraph(widget);
    //             blocks.push(paragraph);
    //             this.nextBlock = this.writeParagraph(widget, paragraph, blocks);
    //         }
    //     } else {
    //         let paragraph: any = this.createParagraph(widget);
    //         blocks.push(paragraph);
    //         this.nextBlock = this.writeParagraph(widget, paragraph, blocks);
    //     }
    //     if (!this.nestedBlockContent && this.nestedBlockEnabled) {
    //         this.nestedBlockEnabled = false;
    //     }
    //     return blocks;
    // }
    /**
     * @private
     */
    SfdtExport.prototype.contentControlProperty = function (contentControlPropertie, keywordIndex) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(keywordIndex)) {
            keywordIndex = this.keywordIndex;
        }
        var contentControlProperties = {};
        var contentControlListItems = [];
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .lockContentControlProperty */ .ZM4[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.lockContentControl, keywordIndex);
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .lockContentsProperty */ .tiW[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.lockContents, keywordIndex);
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .tagProperty */ .CJL[keywordIndex]] = contentControlPropertie.tag;
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .colorProperty */ .N64[keywordIndex]] = contentControlPropertie.color;
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .titleProperty */ .akK[keywordIndex]] = contentControlPropertie.title;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.appearance)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .appearanceProperty */ .CD[keywordIndex]] = keywordIndex == 1 ? this.getContentControlAppearanceEnumValue(contentControlPropertie.appearance) : contentControlPropertie.appearance;
        }
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[keywordIndex]] = keywordIndex == 1 ? this.getContentControlTypeEnumValue(contentControlPropertie.type) : contentControlPropertie.type;
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasPlaceHolderTextProperty */ .mHg[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.hasPlaceHolderText, keywordIndex);
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .multiLineProperty */ .$zT[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.multiline, keywordIndex);
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .isTemporaryProperty */ .JE6[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.isTemporary, keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.isChecked)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .isCheckedProperty */ .djV[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.isChecked, keywordIndex);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.uncheckedState)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .uncheckedStateProperty */ .XXD[keywordIndex]] = this.tounCheckedState(contentControlPropertie.uncheckedState);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.checkedState)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .checkedStateProperty */ .iv_[keywordIndex]] = this.toCheckedState(contentControlPropertie.checkedState);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.dateCalendarType)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .dateCalendarTypeProperty */ .m$Q[keywordIndex]] = keywordIndex == 1 ? this.getDateCalendarTypeEnumValue(contentControlPropertie.dateCalendarType) : contentControlPropertie.dateCalendarType;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.dateStorageFormat)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .dateStorageFormatProperty */ .u4X[keywordIndex]] = keywordIndex == 1 ? this.getDateStorageFormatEnumValue(contentControlPropertie.dateStorageFormat) : contentControlPropertie.dateStorageFormat;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.dateDisplayLocale)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .dateDisplayLocaleProperty */ .oiV[keywordIndex]] = contentControlPropertie.dateDisplayLocale;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.dateDisplayFormat)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .dateDisplayFormatProperty */ .nw3[keywordIndex]] = contentControlPropertie.dateDisplayFormat;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.xmlMapping)) {
            var xmlMapping = {};
            var customXmlPart = {};
            xmlMapping[_index__WEBPACK_IMPORTED_MODULE_3__/* .isMappedProperty */ .v4d[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.xmlMapping.isMapped, keywordIndex);
            xmlMapping[_index__WEBPACK_IMPORTED_MODULE_3__/* .isWordMlProperty */ .huQ[keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(contentControlPropertie.xmlMapping.isWordMl, keywordIndex);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.xmlMapping.prefixMapping)) {
                xmlMapping[_index__WEBPACK_IMPORTED_MODULE_3__/* .prefixMappingProperty */ .y2Z[keywordIndex]] = contentControlPropertie.xmlMapping.prefixMapping;
            }
            xmlMapping[_index__WEBPACK_IMPORTED_MODULE_3__/* .xPathProperty */ .fz5[keywordIndex]] = contentControlPropertie.xmlMapping.xPath;
            xmlMapping[_index__WEBPACK_IMPORTED_MODULE_3__/* .storeItemIdProperty */ .BS[keywordIndex]] = contentControlPropertie.xmlMapping.storeItemId;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.xmlMapping.customXmlPart)) {
                customXmlPart[_index__WEBPACK_IMPORTED_MODULE_3__/* .idProperty */ .nf$[keywordIndex]] = contentControlPropertie.xmlMapping.customXmlPart.id;
                customXmlPart[_index__WEBPACK_IMPORTED_MODULE_3__/* .xmlProperty */ .XeO[keywordIndex]] = contentControlPropertie.xmlMapping.customXmlPart.xml;
                xmlMapping[_index__WEBPACK_IMPORTED_MODULE_3__/* .customXmlPartProperty */ .jut[keywordIndex]] = customXmlPart;
            }
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .xmlMappingProperty */ .pwc[keywordIndex]] = xmlMapping;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.characterFormat)) {
            contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[keywordIndex]] = this.writeCharacterFormat(contentControlPropertie.characterFormat, keywordIndex);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentControlPropertie.contentControlListItems)) {
            for (var i = 0; i < contentControlPropertie.contentControlListItems.length; i++) {
                var listItems = {};
                listItems[_index__WEBPACK_IMPORTED_MODULE_3__/* .displayTextProperty */ .bO8[keywordIndex]] = contentControlPropertie.contentControlListItems[i].displayText;
                listItems[_index__WEBPACK_IMPORTED_MODULE_3__/* .valueProperty */ .tV8[keywordIndex]] = contentControlPropertie.contentControlListItems[i].value;
                contentControlListItems.push(listItems);
            }
        }
        contentControlProperties[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlListItemsProperty */ .Axm[keywordIndex]] = contentControlListItems;
        return contentControlProperties;
    };
    SfdtExport.prototype.tounCheckedState = function (state) {
        var unCheckedState = {};
        unCheckedState[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontProperty */ .Xxk[this.keywordIndex]] = state.font;
        unCheckedState[_index__WEBPACK_IMPORTED_MODULE_3__/* .valueProperty */ .tV8[this.keywordIndex]] = state.value;
        return unCheckedState;
    };
    SfdtExport.prototype.toCheckedState = function (state) {
        var checkedState = {};
        checkedState[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontProperty */ .Xxk[this.keywordIndex]] = state.font;
        checkedState[_index__WEBPACK_IMPORTED_MODULE_3__/* .valueProperty */ .tV8[this.keywordIndex]] = state.value;
        return checkedState;
    };
    SfdtExport.prototype.blockContentControl = function (widget) {
        var block = {};
        if (widget.childWidgets.length === 0) {
            this.nextBlock = widget.nextWidget;
            return undefined;
        }
        var contentControlBlocks = [];
        var currentWidget = widget;
        var mainContentControlProps = widget.contentControlProperties;
        // Process all consecutive paragraphs with the same main content control
        while (currentWidget && this.hasSameContentControlProperties(mainContentControlProps, currentWidget.contentControlProperties)) {
            // Check if this paragraph has a nested block content control
            var nestedContentControlProps = this.getNestedContentControlProperties(currentWidget);
            if (nestedContentControlProps &&
                !this.hasSameContentControlProperties(mainContentControlProps, nestedContentControlProps)) {
                // Start collecting nested blocks
                var nestedContentControlBlocks = [];
                var nestedWidget = currentWidget;
                while (nestedWidget &&
                    this.hasSameContentControlProperties(nestedContentControlProps, this.getNestedContentControlProperties(nestedWidget))) {
                    if (nestedWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D) {
                        var para = this.createParagraph(nestedWidget);
                        nestedContentControlBlocks.push(para);
                        this.nextBlock = this.writeParagraph(nestedWidget, para, []);
                    }
                    else {
                        var table = this.createTable(nestedWidget);
                        nestedContentControlBlocks.push(table);
                        this.nextBlock = this.writeTable(nestedWidget, table, 0, nestedContentControlBlocks);
                    }
                    nestedWidget = this.nextBlock;
                }
                // Wrap nested blocks into nested content control object
                var nestedBlock = {};
                nestedBlock[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = nestedContentControlBlocks;
                nestedBlock[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(nestedContentControlProps);
                contentControlBlocks.push(nestedBlock);
                // Move currentWidget forward to continue processing remaining blocks
                currentWidget = nestedWidget;
                continue; // continue outer loop
            }
            else {
                if (currentWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D) {
                    // Regular paragraph within the main content control
                    var paragraph = this.createParagraph(currentWidget);
                    contentControlBlocks.push(paragraph);
                    this.nextBlock = this.writeParagraph(currentWidget, paragraph, []);
                }
                else {
                    var table = this.createTable(currentWidget);
                    contentControlBlocks.push(table);
                    this.nextBlock = this.writeTable(currentWidget, table, 0, contentControlBlocks);
                }
            }
            currentWidget = this.nextBlock;
        }
        // Create the main content control block
        block[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = contentControlBlocks;
        block[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(widget.contentControlProperties);
        this.isBlockClosed = true;
        this.nestedBlockContent = false;
        this.nestedBlockEnabled = false;
        return block;
    };
    // Enhanced method to detect nested content controls
    SfdtExport.prototype.getNestedContentControlProperties = function (widget) {
        if (!widget.childWidgets || widget.childWidgets.length === 0) {
            return null;
        }
        if (widget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D) {
            var child = widget.childWidgets[0];
            if (!child.children || child.children.length === 0) {
                return null;
            }
            // Look for ContentControl elements that are block-level
            for (var i = 0; i < child.children.length; i++) {
                var element = child.children[i];
                if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM &&
                    element.contentControlWidgetType === 'Block' &&
                    element.type === 0) { // Start of content control
                    return element.contentControlProperties;
                }
            }
        }
        // Also check if the paragraph itself has different content control properties
        // that indicate it's a nested content control
        if (widget.contentControlProperties) {
            // Check if this is a different content control from the main one
            var parentWidget = this.findParentContentControlWidget(widget);
            if (parentWidget && parentWidget.contentControlProperties &&
                !this.hasSameContentControlProperties(widget.contentControlProperties, parentWidget.contentControlProperties)) {
                return widget.contentControlProperties;
            }
        }
        return null;
    };
    // Helper method to find parent content control widget
    SfdtExport.prototype.findParentContentControlWidget = function (widget) {
        var currentWidget = widget.previousWidget;
        while (currentWidget) {
            if (currentWidget.contentControlProperties) {
                return currentWidget;
            }
            currentWidget = currentWidget.previousRenderedWidget;
        }
        return null;
    };
    // Modified writeParagraphs to work with the enhanced logic
    SfdtExport.prototype.writeParagraphs = function (widget) {
        var blocks = this.blocks;
        var child = widget.childWidgets[0];
        var firstElement = child.children[0];
        var secondElement = child.children[1];
        if (firstElement instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ListTextElementBox */ .dJ || secondElement instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ListTextElementBox */ .dJ) {
            firstElement = child.children[2];
            secondElement = child.children[3];
        }
        if (this.nestedBlockEnabled) {
            blocks = [];
        }
        // Check for block content controls
        if ((firstElement instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM && firstElement.contentControlWidgetType === 'Block') ||
            (secondElement instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM && secondElement.contentControlWidgetType === 'Block')) {
            this.nestedBlockContent = true;
            this.nestedBlockEnabled = true;
            var block = this.blockContentControl(widget);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(block)) {
                this.blocks.push(block);
            }
            // } else if (widget.contentControlProperties && !this.isAlreadyProcessingContentControl(widget)) {
            //     // This is the start of a new content control group
            //     this.nestedBlockContent = true;
            //     this.nestedBlockEnabled = true;
            //     let block: any = this.blockContentControl(widget);
            //     if (!isNullOrUndefined(block)) {
            //         this.blocks.push(block);
            //     }
        }
        else {
            // Regular paragraph processing
            var paragraph = this.createParagraph(widget);
            blocks.push(paragraph);
            this.nextBlock = this.writeParagraph(widget, paragraph, blocks);
        }
        if (!this.nestedBlockContent && this.nestedBlockEnabled) {
            this.nestedBlockEnabled = false;
        }
        return blocks;
    };
    // private isAlreadyProcessingContentControl(widget: ParagraphWidget): boolean {
    //     let prevWidget = widget.previousWidget as ParagraphWidget;
    //     if (prevWidget && prevWidget.contentControlProperties && widget.contentControlProperties) {
    //         return this.hasSameContentControlProperties(widget.contentControlProperties, prevWidget.contentControlProperties);
    //     }
    //     return false;
    // }
    SfdtExport.prototype.hasSameContentControlProperties = function (props1, props2) {
        if (!props1 || !props2) {
            return false;
        }
        return props1 === props2;
    };
    SfdtExport.prototype.tableContentControl = function (tableWidget) {
        var block = {};
        block[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = this.tableContentControls(tableWidget);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.nextBlock)) {
            if (tableWidget.contentControlProperties === this.nextBlock.contentControlProperties) {
                this.isBlockClosed = false;
                return this.blocks = block[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]];
            }
            else {
                this.isBlockClosed = true;
            }
        }
        block[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(tableWidget.contentControlProperties);
        return block;
    };
    SfdtExport.prototype.tableContentControls = function (tableWidget) {
        var blocks = [];
        if (!this.isBlockClosed) {
            blocks = this.blocks;
        }
        var table = this.createTable(tableWidget);
        blocks.push(table);
        this.nextBlock = this.writeTable(tableWidget, table, 0, blocks);
        return blocks;
    };
    SfdtExport.prototype.writeParagraph = function (paragraphWidget, paragraph, blocks, lineIndex, start) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineIndex)) {
            lineIndex = 0;
        }
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(start)) {
            start = 0;
        }
        var next = paragraphWidget;
        while (next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ParagraphWidget */ .$D) {
            if (this.writeLines(next, lineIndex, start, paragraph[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]])) {
                if (this.endLine === next.lastChild && this.endOffset === this.owner.selection.getLineLength(next.lastChild) + 1 && next.paragraphFormat.listFormat.listId === -1 && !this.isContentControl) {
                    blocks.push(this.createParagraph(next));
                }
                return undefined;
            }
            lineIndex = 0;
            start = 0;
            paragraphWidget = next;
            next = paragraphWidget.nextSplitWidget;
        }
        next = paragraphWidget.nextRenderedWidget;
        if (this.documentHelper.owner.layoutType !== 'Continuous' && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(next) && paragraphWidget.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BodyWidget */ .v$ &&
            !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(paragraphWidget.containerWidget.page) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(paragraphWidget.containerWidget.page.nextPage) &&
            !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(paragraphWidget.containerWidget.page.nextPage.bodyWidgets)) {
            next = paragraphWidget.containerWidget.page.nextPage.bodyWidgets[0].childWidgets[0];
        }
        if (this.isExport) {
            var isSameContainer = next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BlockWidget */ .yJ && paragraphWidget.containerWidget.index === next.containerWidget.index;
            var isTableCell = next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BlockWidget */ .yJ && next.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz;
            return (isSameContainer || isTableCell) ? next : undefined;
        }
        else {
            return next;
        }
    };
    SfdtExport.prototype.writeInlines = function (paragraph, line, inlines) {
        this.contentInline = [];
        var lineWidget = line;
        var isformField = false;
        for (var i = 0; i < lineWidget.children.length; i++) {
            var element = lineWidget.children[i];
            if (this.isExport && this.checkboxOrDropdown) {
                if (isformField && element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg) {
                    continue;
                }
                if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ && element.fieldType === 2) {
                    isformField = true;
                }
            }
            if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ListTextElementBox */ .dJ) {
                continue;
            }
            if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FootnoteElementBox */ .gP) {
                inlines.push(this.writeInlinesFootNote(element));
                continue;
            }
            if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM || this.startContent || this.blockContent) {
                this.writeInlinesContentControl(element, line, inlines, i);
            }
            else {
                if (!this.skipExporting && element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.previousNode) && element.previousNode instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg
                    && !(element.previousNode instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FootnoteEndnoteMarkerElementBox */ .Ng)
                    && !this.isSpecialCharacter(element.text) && !this.isSpecialCharacter(element.previousNode.text)
                    && element.previousNode.characterFormat.isEqualFormat(element.characterFormat)
                    && element.previousNode.scriptType === element.scriptType
                    && element.revisionLength === 0 && element.previousNode.revisionLength === 0
                    && (element.previousNode.text.length > 0 && element.previousNode.text[element.previousNode.text.length - 1] !== '-'
                        && element.previousNode.text[element.previousNode.text.length - 1] !== '/') && inlines.length > 0) {
                    var elementText = element.text;
                    if (!this.isWriteEndFootNote && ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.owner.editorModule) || !this.owner.editorModule.isPaste)) {
                        elementText = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.removeInvalidXmlChars(elementText);
                    }
                    if (this.isWriteInlinesFootNote && element.indexInOwner === 0 && element.line.indexInOwner === 0
                        && element.paragraph.indexInOwner == 0 && _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.checkTextFormat(elementText)) {
                        elementText = "\u0002";
                    }
                    // replacing the no break hyphen character by '-'
                    if (elementText.indexOf(String.fromCharCode(30)) !== -1) {
                        elementText.replace(/\u001e/g, '-');
                    }
                    else if (elementText.indexOf(String.fromCharCode(31)) !== -1) {
                        elementText.replace(/\u001f/g, '');
                    }
                    inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] += elementText;
                }
                else {
                    var inline = this.writeInline(element);
                    if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline)) {
                        inlines.push(inline);
                    }
                }
            }
            if (this.isExport && element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ && element.fieldType === 1) {
                isformField = false;
                this.checkboxOrDropdown = false;
            }
        }
    };
    SfdtExport.prototype.isSpecialCharacter = function (text) {
        var specialChars = ['\t', '\v', '\f', '\r', String.fromCharCode(14), String.fromCharCode(31), String.fromCharCode(8194)];
        return specialChars.indexOf(text) !== -1;
    };
    SfdtExport.prototype.inlineContentControl = function (element, nextElement, inlines) {
        var inline = {};
        var nestedContentInline = [];
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inlines)) {
            if (this.nestedContent) {
                inlines = inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]];
                if (inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] == undefined) {
                    inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = [];
                }
                // if (isNullOrUndefined(inlines[inlines.length - 1][inlinesProperty[this.keywordIndex]])) {
                //     let nestInlines:any =[];
                //     // nestInlines.inlines=[];
                //     let inlineObject:{}={[inlinesProperty[this.keywordIndex]]:nestInlines}
                //     inlines.push(inlineObject);
                // }
                inline = this.inlineContentControls(element, inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]]);
                var nestedContentinline = this.nestedContentProperty(nextElement, inlines[inlines.length - 1]);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nestedContentinline)) {
                    this.contentInline.push(inline);
                    nestedContentInline = [];
                }
            }
            else {
                this.inlineContentControls(element, inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]]);
            }
        }
        else {
            if (this.nestedContent) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = this.inlineContentControls(element, undefined, nestedContentInline);
                var nestedContentinline = this.nestedContentProperty(nextElement, inline);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nestedContentinline) || this.multipleLineContent) {
                    this.contentInline.push(inline);
                    nestedContentInline = [];
                }
            }
            else {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = this.inlineContentControls(element, this.contentInline);
            }
        }
        if (nextElement instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM && nextElement.type === 1 && !this.nestedContent) {
            if (this.multipleLineContent && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inlines)) {
                inlines[inlines.length - 1][_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(nextElement.contentControlProperties);
                this.multipleLineContent = false;
                return;
            }
            else {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(nextElement.contentControlProperties);
            }
            return inline;
        }
        else if (this.startContent) {
            this.multipleLineContent = true;
            return inline;
        }
    };
    SfdtExport.prototype.nestedContentProperty = function (nextElement, inline, inlines) {
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nextElement)) {
            if (nextElement.type === 1) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(nextElement.contentControlProperties);
                return inline;
            }
            else if (this.startContent) {
                this.multipleLineContent = true;
                return inline;
            }
        }
        else if (this.startContent) {
            this.multipleLineContent = true;
            return inline;
        }
    };
    SfdtExport.prototype.inlineContentControls = function (element, contentInline, nestedContentInline) {
        var inline = this.writeInline(element);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nestedContentInline)) {
            nestedContentInline.push(inline);
            return nestedContentInline;
        }
        contentInline.push(inline);
        return contentInline;
    };
    /* eslint-disable  */
    SfdtExport.prototype.writeInline = function (element) {
        var inline = {};
        if (element.removedIds.length > 0) {
            for (var i = 0; i < element.removedIds.length; i++) {
                element.setRevision(i, this.documentHelper.revisionsInternal.get(element.removedIds[i]));
            }
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(element.characterFormat, this.keywordIndex);
        if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FieldElementBox */ .gQ) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .fieldTypeProperty */ .a3m[this.keywordIndex]] = element.fieldType;
            if (element.fieldType === 0) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasFieldEndProperty */ .Rxg[this.keywordIndex]] = element.hasFieldEnd;
                if (element.formFieldData) {
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]] = {};
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[this.keywordIndex]] = element.formFieldData.name;
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .enabledProperty */ .TEs[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.formFieldData.enabled, this.keywordIndex);
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .helpTextProperty */ .YtX[this.keywordIndex]] = element.formFieldData.helpText;
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .statusTextProperty */ .V_I[this.keywordIndex]] = element.formFieldData.statusText;
                    if (element.formFieldData instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TextFormField */ .uS) {
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .textInputProperty */ .HMj[this.keywordIndex]] = {};
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .textInputProperty */ .HMj[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTextFormFieldTypeEnumValue(element.formFieldData.type) : element.formFieldData.type;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .textInputProperty */ .HMj[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .maxLengthProperty */ .meh[this.keywordIndex]] = element.formFieldData.maxLength;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .textInputProperty */ .HMj[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .defaultValueProperty */ ._zf[this.keywordIndex]] = element.formFieldData.defaultValue;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .textInputProperty */ .HMj[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .formatProperty */ .Lyi[this.keywordIndex]] = this.keywordIndex == 1 && element.formFieldData.type === 'Text' ? this.getTextFormFieldFormatEnumValue(element.formFieldData.format) : element.formFieldData.format;
                    }
                    else if (element.formFieldData instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .CheckBoxFormField */ .av) {
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .checkBoxProperty */ .Z4M[this.keywordIndex]] = {};
                        this.checkboxOrDropdown = true;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .checkBoxProperty */ .Z4M[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .sizeTypeProperty */ .l2j[this.keywordIndex]] = this.keywordIndex == 1 ? this.getCheckBoxSizeTypeEnumValue(element.formFieldData.sizeType) : element.formFieldData.sizeType;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .checkBoxProperty */ .Z4M[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .sizeProperty */ .x4o[this.keywordIndex]] = element.formFieldData.size;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .checkBoxProperty */ .Z4M[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .defaultValueProperty */ ._zf[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.formFieldData.defaultValue, this.keywordIndex);
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .checkBoxProperty */ .Z4M[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .checkedProperty */ .N7s[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.formFieldData.checked, this.keywordIndex);
                    }
                    else {
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .dropDownListProperty */ .xg8[this.keywordIndex]] = {};
                        this.checkboxOrDropdown = true;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .dropDownListProperty */ .xg8[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .dropDownItemsProperty */ .PDu[this.keywordIndex]] = element.formFieldData.dropdownItems;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .formFieldDataProperty */ .K0Q[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .dropDownListProperty */ .xg8[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .selectedIndexProperty */ .bFh[this.keywordIndex]] = element.formFieldData.selectedIndex;
                    }
                }
            }
            if (element.fieldCodeType && element.fieldCodeType !== '') {
                inline.fieldCodeType = element.fieldCodeType;
            }
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ChartElementBox */ .Ct) {
            this.writeChart(element, inline);
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ImageElementBox */ .Rt) {
            inline = this.writeImage(element);
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkElementBox */ .yk) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .bookmarkTypeProperty */ .k$Q[this.keywordIndex]] = element.bookmarkType;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[this.keywordIndex]] = element.name;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties)) {
                var properties = {};
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties['isAfterParagraphMark'])) {
                    properties[_index__WEBPACK_IMPORTED_MODULE_3__/* .isAfterParagraphMarkProperty */ .LvU[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.properties['isAfterParagraphMark'], this.keywordIndex);
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties['isAfterTableMark'])) {
                    properties[_index__WEBPACK_IMPORTED_MODULE_3__/* .isAfterTableMarkProperty */ .Heq[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.properties['isAfterTableMark'], this.keywordIndex);
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties['isAfterRowMark'])) {
                    properties[_index__WEBPACK_IMPORTED_MODULE_3__/* .isAfterRowMarkProperty */ .x1y[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.properties['isAfterRowMark'], this.keywordIndex);
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties['isAfterCellMark'])) {
                    properties[_index__WEBPACK_IMPORTED_MODULE_3__/* .isAfterCellMarkProperty */ .b9g[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.properties['isAfterCellMark'], this.keywordIndex);
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties['columnFirst'])) {
                    properties[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnFirstProperty */ .u3$[this.keywordIndex]] = element.properties['columnFirst'];
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.properties['columnLast'])) {
                    properties[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnLastProperty */ ._f6[this.keywordIndex]] = element.properties['columnLast'];
                }
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .propertiesProperty */ .Vuk[this.keywordIndex]] = properties;
            }
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BreakElementBox */ .ZS) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .breakClearTypeProperty */ .Ouo[this.keywordIndex]] = this.keywordIndex == 1 ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBreakClearType(element.breakClearType) : element.breakClearType;
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FootnoteElementBox */ .gP) {
            inline = this.writeInlinesFootNote(element);
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TextElementBox */ .fg) {
            var elementText = element.text;
            if (!this.isWriteEndFootNote && ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.owner.editorModule) || !this.owner.editorModule.isPaste)) {
                elementText = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.removeInvalidXmlChars(elementText);
            }
            if (this.isWriteInlinesFootNote
                && element.indexInOwner === 0
                && element.line.indexInOwner === 0
                && element.paragraph.indexInOwner == 0
                && _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.checkTextFormat(elementText)) {
                elementText = "\u0002";
            }
            // replacing the no break hyphen character by '-'
            if (elementText.indexOf(String.fromCharCode(30)) !== -1) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = elementText.replace(/\u001e/g, '-');
            }
            else if (elementText.indexOf(String.fromCharCode(31)) !== -1) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = elementText.replace(/\u001f/g, '');
            }
            else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FootnoteEndnoteMarkerElementBox */ .Ng) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = '\u0002';
            }
            else if (element.revisionLength !== 0) {
                if (!this.isExport && this.owner.enableTrackChanges && !this.isPartialExport) {
                    this.copyWithTrackChange = true;
                    for (var x = 0; x < element.revisionLength; x++) {
                        var revision = element.getRevision(x);
                        if (this.selectedRevisionId.indexOf(revision.revisionID) === -1) {
                            this.selectedRevisionId.push(revision.revisionID);
                        }
                        if (element.getRevision(x).revisionType !== 'Deletion') {
                            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = elementText;
                        }
                    }
                }
                else {
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = elementText;
                }
            }
            else {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = elementText;
            }
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .EditRangeStartElementBox */ .NR) {
            if (element.user !== '') {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .userProperty */ .J7t[this.keywordIndex]] = element.user;
            }
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .groupProperty */ .nFd[this.keywordIndex]] = element.group;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnFirstProperty */ .u3$[this.keywordIndex]] = element.columnFirst;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnLastProperty */ ._f6[this.keywordIndex]] = element.columnLast;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editRangeIdProperty */ .AUk[this.keywordIndex]] = element.editRangeId.toString();
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .EditRangeEndElementBox */ .C7) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editableRangeStartProperty */ .LIW[this.keywordIndex]] = {};
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editableRangeStartProperty */ .LIW[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .userProperty */ .J7t[this.keywordIndex]] = element.editRangeStart.user;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editableRangeStartProperty */ .LIW[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .groupProperty */ .nFd[this.keywordIndex]] = element.editRangeStart.group;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editableRangeStartProperty */ .LIW[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .columnFirstProperty */ .u3$[this.keywordIndex]] = element.editRangeStart.columnFirst;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editableRangeStartProperty */ .LIW[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .columnLastProperty */ ._f6[this.keywordIndex]] = element.editRangeStart.columnLast;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .editRangeIdProperty */ .AUk[this.keywordIndex]] = element.editRangeId.toString();
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .CommentCharacterElementBox */ .Qh) {
            if (this.iscontentInsert) {
                if (!this.isExport && element.commentType === 0) {
                    this.selectedCommentsId.push(element.commentId);
                }
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .commentCharacterTypeProperty */ .ikb[this.keywordIndex]] = element.commentType;
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .commentIdProperty */ .Cl$[this.keywordIndex]] = element.commentId;
            }
            else {
                return undefined;
            }
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ShapeElementBox */ .DE || element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF) {
            inline = this.writeShape(element);
        }
        else if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF) {
            //this.writeGroupShape(element, inline);
        }
        else {
            inline = undefined;
        }
        this.writeInlineRevisions(inline, element);
        /*if(element.removedIds.length > 0){
            inline.revisionIds = [];
            for(let x:number = 0;x < element.removedIds.length; x++){
            inline.revisionIds.push(element.removedIds);
            }
        }*/
        return inline;
    };
    SfdtExport.prototype.writeInlineRevisions = function (inline, element) {
        if ((element.revisionLength > 0) && (this.isExport || !this.isExport && !this.owner.enableTrackChanges)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionIdsProperty */ .PQt[this.keywordIndex]] = [];
            for (var x = 0; x < element.revisionLength; x++) {
                //revisionIdes[x] = element.revisions[x];
                if (this.selectedRevisionId.indexOf(element.getRevision(x).revisionID) === -1) {
                    this.selectedRevisionId.push(element.getRevision(x).revisionID);
                }
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionIdsProperty */ .PQt[this.keywordIndex]].push(element.getRevision(x).revisionID);
                //this.document.revisionIdes.push(inline.revisionIds)
            }
        }
    };
    SfdtExport.prototype.writeImage = function (element) {
        var inline = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(element.characterFormat, this.keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.shapeX)) {
            inline['x'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeX);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.shapeY)) {
            inline['y'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeY);
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .imageStringProperty */ .koM[this.keywordIndex]] = element.imageString;
        this.images.push(element);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .metaFileImageStringProperty */ .HKM[this.keywordIndex]] = element.metaFileImageString;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .isMetaFileProperty */ .z86[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.isMetaFile, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .isCompressedProperty */ .z5x[this.keywordIndex]] = element.isCompressed;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.containerShape)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeWidth);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeHeight);
        }
        else {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.width);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.height);
        }
        //inline.iscrop = element.isCrop;
        if (element.isCrop) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomProperty */ .HAU[this.keywordIndex]] = element.bottom;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .rightProperty */ .E$6[this.keywordIndex]] = element.right;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftProperty */ .pkW[this.keywordIndex]] = element.left;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .topProperty */ .xOy[this.keywordIndex]] = element.top;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .getImageWidthProperty */ .fnf[this.keywordIndex]] = element.cropWidthScale;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .getImageHeightProperty */ .mT8[this.keywordIndex]] = element.cropHeightScale;
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[this.keywordIndex]] = element.name;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .alternativeTextProperty */ .gMY[this.keywordIndex]] = element.alternateText;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .titleProperty */ .akK[this.keywordIndex]] = element.title;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .visibleProperty */ .gTz[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.visible, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthScaleProperty */ .eH7[this.keywordIndex]] = element.widthScale;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightScaleProperty */ .$v[this.keywordIndex]] = element.heightScale;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalPositionProperty */ .Zib[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.verticalPosition);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalOriginProperty */ .kTt[this.keywordIndex]] = this.keywordIndex == 1 ? this.getVerticalOriginEnumValue(element.verticalOrigin) : element.verticalOrigin;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]] = this.keywordIndex == 1 ? this.getShapeVerticalAlignmentEnumValue(element.verticalAlignment) : element.verticalAlignment;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalPositionProperty */ .xVu[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.horizontalPosition);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]] = this.keywordIndex == 1 ? this.getHorizontalOriginEnumValue(element.horizontalOrigin) : element.horizontalOrigin;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]] = this.keywordIndex == 1 ? this.getShapeHorizontalAlignmentEnumValue(element.horizontalAlignment) : element.horizontalAlignment;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .allowOverlapProperty */ .IL1[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.allowOverlap, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textWrappingStyleProperty */ .Ewx[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTextWrappingStyleEnumValue(element.textWrappingStyle) : element.textWrappingStyle;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textWrappingTypeProperty */ .ro2[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTextWrappingTypeEnumValue(element.textWrappingType) : element.textWrappingType;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .belowTextProperty */ .cpS[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.isBelowText, this.keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.hasImageReference)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasImageReferenceProperty */ .K_M[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.hasImageReference, this.keywordIndex);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceBottom)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceBottomProperty */ .kpo[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceBottom);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceLeft)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceLeftProperty */ .ggm[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceLeft);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceRight)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceRightProperty */ .H35[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceRight);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceTop)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceTopProperty */ .u_3[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceTop);
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .layoutInCellProperty */ .D5Z[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.layoutInCell, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .zOrderPositionProperty */ .Ver[this.keywordIndex]] = element.zOrderPosition;
        return inline;
    };
    SfdtExport.prototype.writeShape = function (element) {
        var inline = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(element.characterFormat, this.keywordIndex);
        if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF) {
            if (element.childWidgets.length === 0) {
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]] = [];
            }
            for (var index = 0; index < element.childWidgets.length; index++) {
                if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]])) {
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]] = [];
                }
                if (element.childWidgets[index] instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ShapeElementBox */ .DE) {
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]].push(this.writeShape(element.childWidgets[index]));
                }
                else if (element.childWidgets[index] instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ChartElementBox */ .Ct) {
                    var chart = {};
                    chart[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(element.characterFormat, this.keywordIndex);
                    this.writeChart(element.childWidgets[index], chart);
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]].push(chart);
                }
                else if (element.childWidgets[index] instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ImageElementBox */ .Rt) {
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]].push(this.writeImage(element.childWidgets[index]));
                }
                else if (element.childWidgets[index] instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .GroupShapeElementBox */ .YF) {
                    inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .childShapeProperty */ .hN2[this.keywordIndex]].push(this.writeShape(element.childWidgets[index]));
                }
            }
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .offsetXValue */ .NDH[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.offsetXValue);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .offsetYValue */ .ev3[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.offsetYValue);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .extentXValue */ .EtO[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.extentXValue);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .extentYValue */ .FUt[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.extentYValue);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.shapeX)) {
            inline['x'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeX);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.shapeY)) {
            inline['y'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeY);
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .shapeIdProperty */ .was[this.keywordIndex]] = element.shapeId;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[this.keywordIndex]] = element.name;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .alternativeTextProperty */ .gMY[this.keywordIndex]] = element.alternateText;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .titleProperty */ .akK[this.keywordIndex]] = element.title;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .visibleProperty */ .gTz[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.visible, this.keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.containerShape)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeWidth);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeHeight);
        }
        else {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.width);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.height);
        }
        if (element.isZeroHeight) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = 0;
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthScaleProperty */ .eH7[this.keywordIndex]] = element.widthScale;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightScaleProperty */ .$v[this.keywordIndex]] = element.heightScale;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalPositionProperty */ .Zib[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.verticalPosition);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalOriginProperty */ .kTt[this.keywordIndex]] = this.keywordIndex == 1 ? this.getVerticalOriginEnumValue(element.verticalOrigin) : element.verticalOrigin;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]] = this.keywordIndex == 1 ? this.getShapeVerticalAlignmentEnumValue(element.verticalAlignment) : element.verticalAlignment;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalRelativePercentProperty */ .RWV[this.keywordIndex]] = element.verticalRelativePercent;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalPositionProperty */ .xVu[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.horizontalPosition);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]] = this.keywordIndex == 1 ? this.getHorizontalOriginEnumValue(element.horizontalOrigin) : element.horizontalOrigin;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]] = this.keywordIndex == 1 ? this.getShapeHorizontalAlignmentEnumValue(element.horizontalAlignment) : element.horizontalAlignment;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalRelativePercentProperty */ .xR3[this.keywordIndex]] = element.horizontalRelativePercent;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightRelativePercentProperty */ .kw3[this.keywordIndex]] = element.heightRelativePercent;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthRelativePercentProperty */ .bD$[this.keywordIndex]] = element.widthRelativePercent;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .zOrderPositionProperty */ .Ver[this.keywordIndex]] = element.zOrderPosition;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .allowOverlapProperty */ .IL1[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.allowOverlap, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textWrappingStyleProperty */ .Ewx[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTextWrappingStyleEnumValue(element.textWrappingStyle) : element.textWrappingStyle;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textWrappingTypeProperty */ .ro2[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTextWrappingTypeEnumValue(element.textWrappingType) : element.textWrappingType;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .belowTextProperty */ .cpS[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.isBelowText, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalRuleProperty */ .SD5[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.isHorizontalRule, this.keywordIndex);
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceBottom)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceBottomProperty */ .kpo[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceBottom);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceLeft)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceLeftProperty */ .ggm[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceLeft);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceRight)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceRightProperty */ .H35[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceRight);
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.distanceTop)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceTopProperty */ .u_3[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.distanceTop);
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .layoutInCellProperty */ .D5Z[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.layoutInCell, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lockAnchorProperty */ .uNp[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.lockAnchor, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .autoShapeTypeProperty */ .w4j[this.keywordIndex]] = this.keywordIndex == 1 ? this.getAutoShapeTypeEnumValue(element.autoShapeType) : element.autoShapeType;
        // inline[autoShapeTypeProperty[this.keywordIndex]] = this.getAutoShapeTypeEnumValue(element.autoShapeType);
        if (element.fillFormat) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillFormatProperty */ .eZy[this.keywordIndex]] = {};
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillFormatProperty */ .eZy[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .colorProperty */ .N64[this.keywordIndex]] = element.fillFormat.color;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillFormatProperty */ .eZy[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .fillProperty */ .XJR[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.fillFormat.fill, this.keywordIndex);
        }
        if (element.lineFormat) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatProperty */ .$Hn[this.keywordIndex]] = {};
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatTypeProperty */ .FgB[this.keywordIndex]] = this.keywordIndex == 1 ? this.getLineFormatTypeEnumValue(element.lineFormat.lineFormatType) : element.lineFormat.lineFormatType;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .colorProperty */ .N64[this.keywordIndex]] = element.lineFormat.color;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .weightProperty */ .OwH[this.keywordIndex]] = element.lineFormat.weight;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .lineStyleProperty */ .Fg0[this.keywordIndex]] = this.keywordIndex == 1 ? this.getLineDashStyleEnumValue(element.lineFormat.dashStyle) : element.lineFormat.dashStyle;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineFormatProperty */ .$Hn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .lineProperty */ .O$n[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(element.lineFormat.line, this.keywordIndex);
        }
        if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ShapeElementBox */ .DE && element.textFrame) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]] = {};
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .textVerticalAlignmentProperty */ .Evz[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTextVerticalAlignmentEnumValue(element.textFrame.textVerticalAlignment) : element.textFrame.textVerticalAlignment;
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .leftMarginProperty */ .FJj[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.textFrame.marginLeft);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .rightMarginProperty */ .wW3[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.textFrame.marginRight);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .topMarginProperty */ .PkB[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.textFrame.marginTop);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomMarginProperty */ .fRV[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.textFrame.marginBottom);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = [];
            for (var j = 0; j < element.textFrame.childWidgets.length; j++) {
                var textFrameBlock = element.textFrame.childWidgets[j];
                if (textFrameBlock.hasOwnProperty('contentControlProperties') && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.paragraph) && (element.paragraph.hasOwnProperty('contentControlProperties'))) {
                    this.blocks = [];
                }
                this.writeBlock(textFrameBlock, 0, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textFrameProperty */ .ap$[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
            }
        }
        return inline;
    };
    SfdtExport.prototype.writeChart = function (element, inline) {
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartLegendProperty */ .ny2[this.keywordIndex]] = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]] = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartAreaProperty */ .r0i[this.keywordIndex]] = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .plotAreaProperty */ .MYX[this.keywordIndex]] = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartCategoryProperty */ .WhX[this.keywordIndex]] = [];
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartSeriesProperty */ .Jtp[this.keywordIndex]] = [];
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartPrimaryCategoryAxisProperty */ .ltJ[this.keywordIndex]] = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartPrimaryValueAxisProperty */ .ygi[this.keywordIndex]] = {};
        this.writeChartTitleArea(element.chartTitleArea, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]]);
        this.writeChartArea(element.chartArea, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartAreaProperty */ .r0i[this.keywordIndex]]);
        this.writeChartArea(element.chartPlotArea, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .plotAreaProperty */ .MYX[this.keywordIndex]]);
        this.writeChartCategory(element, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartCategoryProperty */ .WhX[this.keywordIndex]]);
        this.createChartSeries(element, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartSeriesProperty */ .Jtp[this.keywordIndex]]);
        this.writeChartLegend(element.chartLegend, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartLegendProperty */ .ny2[this.keywordIndex]]);
        this.writeChartCategoryAxis(element.chartPrimaryCategoryAxis, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartPrimaryCategoryAxisProperty */ .ltJ[this.keywordIndex]]);
        this.writeChartCategoryAxis(element.chartPrimaryValueAxis, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartPrimaryValueAxisProperty */ .ygi[this.keywordIndex]]);
        if (element.chartDataTable.showSeriesKeys !== undefined) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartDataTableProperty */ .CQB[this.keywordIndex]] = {};
            this.writeChartDataTable(element.chartDataTable, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartDataTableProperty */ .CQB[this.keywordIndex]]);
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleProperty */ .c2l[this.keywordIndex]] = element.title;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTypeProperty */ .QoS[this.keywordIndex]] = element.type;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .gapWidthProperty */ .Url[this.keywordIndex]] = element.chartGapWidth;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .overlapProperty */ .Bu8[this.keywordIndex]] = element.chartOverlap;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(element.containerShape)) {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeWidth);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeHeight);
        }
        else {
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .widthProperty */ .u5V[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.width);
            inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.height);
        }
        inline['x'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeX);
        inline['y'] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(element.shapeY);
    };
    SfdtExport.prototype.writeChartTitleArea = function (titleArea, chartTitleArea) {
        chartTitleArea[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontNameProperty */ .Agd[this.keywordIndex]] = titleArea.chartfontName;
        chartTitleArea[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSizeProperty */ .Woy[this.keywordIndex]] = titleArea.chartFontSize;
        chartTitleArea[_index__WEBPACK_IMPORTED_MODULE_3__/* .layoutProperty */ .iBE[this.keywordIndex]] = {};
        chartTitleArea[_index__WEBPACK_IMPORTED_MODULE_3__/* .dataFormatProperty */ .zQ7[this.keywordIndex]] = this.writeChartDataFormat(titleArea.dataFormat);
        this.writeChartLayout(titleArea.layout, chartTitleArea[_index__WEBPACK_IMPORTED_MODULE_3__/* .layoutProperty */ .iBE[this.keywordIndex]]);
    };
    SfdtExport.prototype.writeChartDataFormat = function (format) {
        var chartDataFormat = {};
        chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillProperty */ .XJR[this.keywordIndex]] = {};
        chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineProperty */ .O$n[this.keywordIndex]] = {};
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(format.id)) {
            chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .idProperty */ .nf$[this.keywordIndex]] = format.id;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(format.fill.color)) {
            if (format.fill.color.length > 6) {
                chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillProperty */ .XJR[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .foreColorProperty */ .J98[this.keywordIndex]] = format.fill.color.substring(2);
            }
            else {
                chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillProperty */ .XJR[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .foreColorProperty */ .J98[this.keywordIndex]] = format.fill.color;
            }
        }
        chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .fillProperty */ .XJR[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .rgbProperty */ .VKB[this.keywordIndex]] = format.fill.rgb;
        chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineProperty */ .O$n[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .colorProperty */ .N64[this.keywordIndex]] = format.line.color;
        chartDataFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .lineProperty */ .O$n[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .rgbProperty */ .VKB[this.keywordIndex]] = format.line.rgb;
        return chartDataFormat;
    };
    SfdtExport.prototype.writeChartLayout = function (layout, chartLayout) {
        chartLayout[_index__WEBPACK_IMPORTED_MODULE_3__/* .layoutXProperty */ .KgS[this.keywordIndex]] = layout.chartLayoutLeft;
        chartLayout[_index__WEBPACK_IMPORTED_MODULE_3__/* .layoutYProperty */ .jIK[this.keywordIndex]] = layout.chartLayoutTop;
    };
    SfdtExport.prototype.writeChartArea = function (area, chartArea) {
        chartArea[_index__WEBPACK_IMPORTED_MODULE_3__/* .foreColorProperty */ .J98[this.keywordIndex]] = area.chartForeColor;
    };
    SfdtExport.prototype.writeChartLegend = function (legend, chartLegend) {
        chartLegend[_index__WEBPACK_IMPORTED_MODULE_3__/* .positionProperty */ .FDR[this.keywordIndex]] = legend.chartLegendPostion;
        chartLegend[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]] = {};
        this.writeChartTitleArea(legend.chartTitleArea, chartLegend[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]]);
    };
    SfdtExport.prototype.writeChartCategoryAxis = function (categoryAxis, primaryCategoryAxis) {
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleProperty */ .c2l[this.keywordIndex]] = categoryAxis.categoryAxisTitle;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]] = {};
        this.writeChartTitleArea(categoryAxis.chartTitleArea, primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartTitleAreaProperty */ .T6O[this.keywordIndex]]);
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .categoryTypeProperty */ .OwU[this.keywordIndex]] = categoryAxis.categoryAxisType;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSizeProperty */ .Woy[this.keywordIndex]] = categoryAxis.axisFontSize;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontNameProperty */ .Agd[this.keywordIndex]] = categoryAxis.axisFontName;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .numberFormatProperty */ .kg5[this.keywordIndex]] = categoryAxis.categoryNumberFormat;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .maximumValueProperty */ .PSr[this.keywordIndex]] = categoryAxis.max;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .minimumValueProperty */ .P1n[this.keywordIndex]] = categoryAxis.min;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .isAutoMajorProperty */ .SlD[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(categoryAxis.isAutoInternal, this.keywordIndex);
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .majorUnitProperty */ .fxC[this.keywordIndex]] = categoryAxis.interval;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasMajorGridLinesProperty */ .iHy[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(categoryAxis.majorGridLines, this.keywordIndex);
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasMinorGridLinesProperty */ .qNO[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(categoryAxis.minorGridLines, this.keywordIndex);
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .majorTickMarkProperty */ .bEv[this.keywordIndex]] = categoryAxis.majorTick;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .minorTickMarkProperty */ .zer[this.keywordIndex]] = categoryAxis.minorTick;
        primaryCategoryAxis[_index__WEBPACK_IMPORTED_MODULE_3__/* .tickLabelPositionProperty */ .otn[this.keywordIndex]] = categoryAxis.tickPosition;
    };
    SfdtExport.prototype.writeChartDataTable = function (chartDataTable, dataTable) {
        dataTable[_index__WEBPACK_IMPORTED_MODULE_3__/* .showSeriesKeysProperty */ .eKo[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(chartDataTable.showSeriesKeys, this.keywordIndex);
        dataTable[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasHorizontalBorderProperty */ .SoG[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(chartDataTable.hasHorzBorder, this.keywordIndex);
        dataTable[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasVerticalBorderProperty */ .Uo_[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(chartDataTable.hasVertBorder, this.keywordIndex);
        dataTable[_index__WEBPACK_IMPORTED_MODULE_3__/* .hasBordersProperty */ .Xwy[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(chartDataTable.hasBorders, this.keywordIndex);
    };
    SfdtExport.prototype.writeChartCategory = function (element, chartCategory) {
        var data = element.chartCategory;
        chartCategory[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartDataProperty */ ._Vu[this.keywordIndex]] = [];
        for (var i = 0; i < data.length; i++) {
            var xData = data[i];
            var categories = this.createChartCategory(xData, element.chartType);
            chartCategory.push(categories);
        }
    };
    SfdtExport.prototype.createChartCategory = function (data, type) {
        var chartCategory = {};
        chartCategory[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartDataProperty */ ._Vu[this.keywordIndex]] = [];
        this.writeChartData(data, chartCategory[_index__WEBPACK_IMPORTED_MODULE_3__/* .chartDataProperty */ ._Vu[this.keywordIndex]], type);
        chartCategory[_index__WEBPACK_IMPORTED_MODULE_3__/* .categoryXNameProperty */ .jZw[this.keywordIndex]] = data.categoryXName;
        return chartCategory;
    };
    SfdtExport.prototype.writeChartData = function (element, chartData, type) {
        var data = element.chartData;
        for (var i = 0; i < data.length; i++) {
            var yData = data[i];
            var yCategory = this.createChartData(yData, type);
            chartData.push(yCategory);
        }
    };
    SfdtExport.prototype.createChartData = function (data, type) {
        var chartData = {};
        chartData[_index__WEBPACK_IMPORTED_MODULE_3__/* .yValueProperty */ .EZM[this.keywordIndex]] = data.yValue;
        if (type === 'Bubble') {
            chartData[_index__WEBPACK_IMPORTED_MODULE_3__/* .sizeProperty */ .x4o[this.keywordIndex]] = data.size;
        }
        return chartData;
    };
    SfdtExport.prototype.createChartSeries = function (element, chartSeries) {
        var data = element.chartSeries;
        var type = element.chartType;
        for (var i = 0; i < data.length; i++) {
            var yData = data[i];
            var series = this.writeChartSeries(yData, type);
            chartSeries.push(series);
        }
    };
    SfdtExport.prototype.writeChartSeries = function (series, type) {
        var isPieType = (type === 'Pie' || type === 'Doughnut');
        var chartSeries = {};
        var errorBar = {};
        var errorBarData = series.errorBar;
        chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .dataPointsProperty */ .JbX[this.keywordIndex]] = [];
        chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .seriesNameProperty */ .Eq8[this.keywordIndex]] = series.seriesName;
        if (isPieType) {
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(series.firstSliceAngle)) {
                chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .firstSliceAngleProperty */ .dyS[this.keywordIndex]] = series.firstSliceAngle;
            }
            if (type === 'Doughnut') {
                chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .holeSizeProperty */ .LeI[this.keywordIndex]] = series.doughnutHoleSize;
            }
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(series.dataLabels.labelPosition)) {
            var dataLabel = this.writeChartDataLabels(series.dataLabels);
            chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .dataLabelProperty */ .AHL[this.keywordIndex]] = dataLabel;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(series.seriesFormat.markerStyle)) {
            var seriesFormat = {};
            var format = series.seriesFormat;
            seriesFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .markerStyleProperty */ .Lvu[this.keywordIndex]] = format.markerStyle;
            seriesFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .markerSizeProperty */ .$AM[this.keywordIndex]] = format.numberValue;
            seriesFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .markerColorProperty */ .FNw[this.keywordIndex]] = format.markerColor;
            chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .seriesFormatProperty */ .ckl[this.keywordIndex]] = seriesFormat;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(errorBarData.type)) {
            errorBar[_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[this.keywordIndex]] = errorBarData.type;
            errorBar[_index__WEBPACK_IMPORTED_MODULE_3__/* .directionProperty */ .t$c[this.keywordIndex]] = errorBarData.direction;
            errorBar[_index__WEBPACK_IMPORTED_MODULE_3__/* .endStyleProperty */ .G3k[this.keywordIndex]] = errorBarData.endStyle;
            errorBar[_index__WEBPACK_IMPORTED_MODULE_3__/* .numberValueProperty */ .kVE[this.keywordIndex]] = errorBarData.numberValue;
            chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .errorBarProperty */ .Zfq[this.keywordIndex]] = errorBar;
        }
        if (series.trendLines.length > 0) {
            chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .trendLinesProperty */ .abV[this.keywordIndex]] = [];
            for (var i = 0; i < series.trendLines.length; i++) {
                var trendLine = this.writeChartTrendLines(series.trendLines[i]);
                chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .trendLinesProperty */ .abV[this.keywordIndex]].push(trendLine);
            }
        }
        for (var i = 0; i < series.chartDataFormat.length; i++) {
            var format = this.writeChartDataFormat(series.chartDataFormat[i]);
            chartSeries[_index__WEBPACK_IMPORTED_MODULE_3__/* .dataPointsProperty */ .JbX[this.keywordIndex]].push(format);
        }
        return chartSeries;
    };
    SfdtExport.prototype.writeChartDataLabels = function (dataLabels) {
        var dataLabel = {};
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .positionProperty */ .FDR[this.keywordIndex]] = dataLabels.position;
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontNameProperty */ .Agd[this.keywordIndex]] = dataLabels.fontName;
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontColorProperty */ .w6H[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertArgbToRgb(dataLabels.fontColor);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSizeProperty */ .Woy[this.keywordIndex]] = dataLabels.fontSize;
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isLegendKeyProperty */ .MKA[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isLegendKey, this.keywordIndex);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isBubbleSizeProperty */ .ZrW[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isBubbleSize, this.keywordIndex);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isCategoryNameProperty */ .xb9[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isCategoryName, this.keywordIndex);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isSeriesNameProperty */ .W9F[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isSeriesName, this.keywordIndex);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isValueProperty */ .BBl[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isValue, this.keywordIndex);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isPercentageProperty */ .WeS[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isPercentage, this.keywordIndex);
        dataLabel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isLeaderLinesProperty */ .K5[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(dataLabels.isLeaderLines, this.keywordIndex);
        return dataLabel;
    };
    SfdtExport.prototype.writeChartTrendLines = function (trendLines) {
        var trendLine = {};
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[this.keywordIndex]] = trendLines.trendLineName;
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[this.keywordIndex]] = trendLines.trendLineType;
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .forwardProperty */ .dFG[this.keywordIndex]] = trendLines.forwardValue;
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .backwardProperty */ .xSX[this.keywordIndex]] = trendLines.backwardValue;
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .interceptProperty */ .k1J[this.keywordIndex]] = trendLines.interceptValue;
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .isDisplayEquationProperty */ .a9d[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(trendLines.isDisplayEquation, this.keywordIndex);
        trendLine[_index__WEBPACK_IMPORTED_MODULE_3__/* .isDisplayRSquaredProperty */ .nAX[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(trendLines.isDisplayRSquared, this.keywordIndex);
        return trendLine;
    };
    SfdtExport.prototype.writeLines = function (paragraph, lineIndex, offset, inlines) {
        var startIndex = lineIndex;
        var endParagraph = this.endLine instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .LineWidget */ .V9 && this.endLine.paragraph === paragraph;
        var endIndex = endParagraph ? this.endLine.indexInOwner : paragraph.childWidgets.length - 1;
        for (var i = startIndex; i <= endIndex; i++) {
            var child = paragraph.childWidgets[i];
            if (this.endLine === child || (lineIndex === i && offset !== 0)) {
                if (this.endLine === child && paragraph.paragraphFormat.bidi && this.startLine !== this.endLine) {
                    this.endOffset = child.getEndOffset();
                }
                this.writeLine(child, (this.startLine !== this.endLine && child !== this.startLine && !this.isContentControl) ? 0 : offset, inlines);
            }
            else {
                this.writeInlines(paragraph, child, inlines);
            }
        }
        return endParagraph;
    };
    SfdtExport.prototype.writeLine = function (line, offset, inlines) {
        this.contentInline = [];
        // let isContentStarted: boolean = false;
        // let contentControl: boolean = false;
        var isEnd = line === this.endLine;
        var lineWidget = line;
        var started = false;
        var ended = false;
        var length = 0;
        for (var j = 0; j < lineWidget.children.length; j++) {
            var element = lineWidget.children[j];
            if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ListTextElementBox */ .dJ) {
                continue;
            }
            var inline = undefined;
            length += element.length;
            started = length > offset;
            // if (element instanceof ContentControl) {
            //     if (!started) {
            //         isContentStarted = element.type === 0 ? true : false;
            //     }
            //     contentControl = true;
            // }
            // if (element instanceof TextElementBox && element.hasOwnProperty('contentControlProperties') && started && !contentControl) {
            //     isContentStarted = true;
            // }
            // if (element instanceof ContentControl) {
            //     if (isContentStarted) {
            //         if (element.type === 1) {
            //             isContentStarted = false;
            //         }
            //     }
            //     if (contentControl) {
            //         if (element.type === 1) {
            //             contentControl = false;
            //         }
            //     }
            // }
            ended = isEnd && length >= this.endOffset;
            if (!started) {
                continue;
            }
            if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkElementBox */ .yk && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.bookmarkCollection) && ((element.bookmarkType === 0 && this.bookmarkCollection.indexOf(element) === -1) || (element.bookmarkType === 1 && this.bookmarkCollection.indexOf(element.reference) === -1))) {
                continue;
            }
            if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM || this.startContent || this.blockContent) {
                if (ended) {
                    this.startContent = false;
                    break;
                }
                this.writeInlinesContentControl(element, line, inlines, j);
                continue;
            }
            inline = this.writeInline(element);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline)) {
                inlines[inlines.length] = inline;
                if (length > offset || ended) {
                    if (inline.hasOwnProperty(_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex])) {
                        var startIndex = length - element.length;
                        var indexInInline = offset - startIndex;
                        var endIndex = ended ? this.endOffset - startIndex : element.length;
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]] = inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .textProperty */ .Puk[this.keywordIndex]].substring(indexInInline, endIndex);
                    }
                    offset = -1;
                }
            }
            if (ended) {
                break;
            }
        }
    };
    SfdtExport.prototype.writeInlinesFootNote = function (element) {
        this.isWriteInlinesFootNote = true;
        var inline = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnoteTypeProperty */ .g5o[this.keywordIndex]] = this.keywordIndex == 1 ? this.getFootnoteTypeEnumValue(element.footnoteType) : element.footnoteType;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = {};
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(element.characterFormat, this.keywordIndex);
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = [];
        var bodyWidget = element.bodyWidget;
        while (bodyWidget) {
            for (var i = 0; i < bodyWidget.childWidgets.length; i++) {
                if (!bodyWidget.childWidgets[i].previousSplitWidget) {
                    this.writeBlock(bodyWidget.childWidgets[i], 0, inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
                }
            }
            // Proceed only if the bodyWidget container is an Endnote
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(bodyWidget.containerWidget) && bodyWidget.containerWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .FootNoteWidget */ .tK && bodyWidget.containerWidget.footNoteType === 'Endnote') {
                bodyWidget = bodyWidget.nextSplitWidget;
            }
            else {
                break;
            }
        }
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .symbolCodeProperty */ .vvU[this.keywordIndex]] = element.symbolCode;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .symbolFontNameProperty */ .qBh[this.keywordIndex]] = element.symbolFontName;
        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .customMarkerProperty */ .R2R[this.keywordIndex]] = element.customMarker;
        this.writeInlineRevisions(inline, element);
        this.isWriteInlinesFootNote = false;
        return inline;
    };
    SfdtExport.prototype.writeInlinesContentControl = function (element, lineWidget, inlines, i) {
        if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM) {
            if (element.contentControlWidgetType === 'Block') {
                this.isBlockClosed = false;
                if (this.blockContent && element.type === 0) {
                    this.nestedBlockContent = true;
                    return true;
                }
                else if (this.nestedBlockContent && element.type === 1) {
                    this.nestedBlockContent = false;
                    return true;
                }
                this.blockContent = (element.type === 0) ? true : false;
                if (lineWidget.children[i - 1] instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM) {
                    if (lineWidget.children[i - 1].contentControlWidgetType === 'Block') {
                        this.blockContent = true;
                    }
                }
                if (!this.blockContent) {
                    this.isBlockClosed = true;
                }
                return true;
            }
        }
        if (element instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM) {
            if (this.startContent && element.type === 0) {
                this.nestedContent = true;
                return true;
            }
            else if (this.startContent && this.nestedContent) {
                var inline = {};
                inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = this.contentInline;
                if (this.contentInline.length > 0) {
                    var nestedContent = this.nestedContentProperty(lineWidget.children[i + 1], inline);
                    inlines.push(nestedContent);
                    this.contentInline = [];
                }
                if (this.multipleLineContent) {
                    inline = inlines[inlines.length - 1];
                    this.nestedContentProperty(lineWidget.children[i + 1], inline);
                    this.multipleLineContent = false;
                }
                this.nestedContent = false;
                return true;
            }
            this.contentType = element.contentControlWidgetType;
            this.startContent = (element.type === 0) ? true : false;
            return true;
        }
        if (this.startContent && ((this.contentType === 'Inline'))) {
            if (this.multipleLineContent && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inlines) && inlines.length > 0) {
                this.inlineContentControl(element, element.nextNode, inlines);
                this.contentInline = [];
            }
            else {
                var contentinline = this.inlineContentControl(element, element.nextNode);
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(contentinline)) {
                    if (this.nestedContent && this.multipleLineContent) {
                        var inline = {};
                        inline[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = this.contentInline;
                        inlines.push(inline);
                        this.contentInline = [];
                    }
                    else {
                        inlines.push(contentinline);
                        this.contentInline = [];
                        return false;
                    }
                }
            }
        }
        else {
            var inline = this.writeInline(element);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(inline)) {
                inlines.push(inline);
            }
        }
    };
    SfdtExport.prototype.createParagraph = function (paragraphWidget) {
        var paragraph = {};
        var isParaSelected = false;
        var isListPara = false;
        if (this.documentHelper.selection && !this.documentHelper.selection.isEmpty && !this.isExport) {
            var endPos = this.documentHelper.selection.end;
            if (!this.documentHelper.selection.isForward) {
                endPos = this.documentHelper.selection.start;
            }
            var lastLine = endPos.paragraph.childWidgets[endPos.paragraph.childWidgets.length - 1];
            var isEndBeforeContentControl = lastLine.children.length === 1 && lastLine.children[0] instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .ContentControl */ .HM && endPos.offset === 0;
            isListPara = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(paragraphWidget.paragraphFormat.listFormat.list);
            isParaSelected = this.documentHelper.selection.isParagraphLastLine(lastLine)
                && (endPos.offset === this.documentHelper.selection.getLineLength(lastLine) + 1 || (!(paragraphWidget.indexInOwner == endPos.paragraph.indexInOwner) && isListPara) || isEndBeforeContentControl);
        }
        else {
            isParaSelected = true;
        }
        paragraph[_index__WEBPACK_IMPORTED_MODULE_3__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]] = this.writeParagraphFormat(isParaSelected ? paragraphWidget.paragraphFormat : new _format_paragraph_format__WEBPACK_IMPORTED_MODULE_5__/* .WParagraphFormat */ .F(paragraphWidget), this.keywordIndex);
        paragraph[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(isParaSelected ? paragraphWidget.characterFormat : new _format_index__WEBPACK_IMPORTED_MODULE_6__/* .WCharacterFormat */ .q(paragraphWidget), this.keywordIndex);
        paragraph[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlinesProperty */ .K2P[this.keywordIndex]] = [];
        return paragraph;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeCharacterFormat = function (format, keywordIndex, isInline) {
        var characterFormat = {};
        if (this.skipExporting) {
            return characterFormat;
        }
        _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeCharacterFormat(characterFormat, isInline, format, keywordIndex);
        characterFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .boldBidiProperty */ .jpm[keywordIndex]] = isInline ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(format.boldBidi, keywordIndex) : format.getValue('boldBidi');
        characterFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .italicBidiProperty */ .qfo[keywordIndex]] = isInline ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(format.italicBidi, keywordIndex) : format.getValue('italicBidi');
        if (format.revisionLength > 0) {
            characterFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionIdsProperty */ .PQt[keywordIndex]] = [];
            for (var x = 0; x < format.revisionLength; x++) {
                if (this.selectedRevisionId.indexOf(format.getRevision(x).revisionID) === -1) {
                    this.selectedRevisionId.push(format.getRevision(x).revisionID);
                }
                characterFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionIdsProperty */ .PQt[keywordIndex]].push(format.getRevision(x).revisionID);
            }
        }
        if (this.writeInlineStyles && !isInline) {
            characterFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlineFormatProperty */ .K1K[keywordIndex]] = this.writeCharacterFormat(format, keywordIndex, true);
        }
        return characterFormat;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeParagraphFormat = function (format, keywordIndex, isInline) {
        var paragraphFormat = {};
        if (this.skipExporting) {
            return paragraphFormat;
        }
        this.keywordIndex = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.keywordIndex) ? 0 : this.keywordIndex;
        _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeParagraphFormat(paragraphFormat, isInline, format, keywordIndex);
        paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .listFormatProperty */ .pBP[keywordIndex]] = this.writeListFormat(format.listFormat, isInline);
        paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .tabsProperty */ .e6f[keywordIndex]] = this.writeTabs(format.tabs);
        if (this.writeInlineStyles && !isInline) {
            paragraphFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .inlineFormatProperty */ .K1K[keywordIndex]] = this.writeParagraphFormat(format, keywordIndex, true);
        }
        return paragraphFormat;
    };
    SfdtExport.prototype.writeThemes = function (source) {
        var themes = {};
        themes[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSchemeProperty */ .GtS[this.keywordIndex]] = {};
        themes[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSchemeProperty */ .GtS[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSchemeNameProperty */ .ntg[this.keywordIndex]] = source.fontScheme.fontSchemeName;
        themes[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSchemeProperty */ .GtS[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .majorFontSchemeProperty */ .jhr[this.keywordIndex]] = this.writeMajorMinorFontScheme(source.fontScheme.majorFontScheme);
        themes[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSchemeProperty */ .GtS[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .minorFontSchemeProperty */ .tEd[this.keywordIndex]] = this.writeMajorMinorFontScheme(source.fontScheme.minorFontScheme);
        return themes;
    };
    SfdtExport.prototype.writeMajorMinorFontScheme = function (source) {
        var majorMinorFontScheme = {};
        majorMinorFontScheme[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontSchemeListProperty */ .eHu[this.keywordIndex]] = this.writeFontSchemeList(source.fontSchemeList);
        var keys = source.fontTypeface.keys;
        var fontTypeface = {};
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            fontTypeface[key] = source.fontTypeface.get(key);
        }
        majorMinorFontScheme[_index__WEBPACK_IMPORTED_MODULE_3__/* .fontTypefaceProperty */ .yEQ[this.keywordIndex]] = fontTypeface;
        return majorMinorFontScheme;
    };
    SfdtExport.prototype.writeFontSchemeList = function (source) {
        var _this = this;
        var fontSchemeStructs = [];
        source.forEach(function (val) {
            var schemeStruct = {};
            schemeStruct[_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[_this.keywordIndex]] = val.name;
            schemeStruct[_index__WEBPACK_IMPORTED_MODULE_3__/* .typefaceProperty */ .NK_[_this.keywordIndex]] = val.typeface;
            schemeStruct[_index__WEBPACK_IMPORTED_MODULE_3__/* .panoseProperty */ .orq[_this.keywordIndex]] = val.panose;
            fontSchemeStructs.push(schemeStruct);
        });
        return fontSchemeStructs;
    };
    SfdtExport.prototype.writeTabs = function (tabStops) {
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tabStops) || tabStops.length < 1) {
            return undefined;
        }
        var tabs = [];
        for (var i = 0; i < tabStops.length; i++) {
            var tabStop = tabStops[i];
            var tab = {};
            tab[_index__WEBPACK_IMPORTED_MODULE_3__/* .positionProperty */ .FDR[this.keywordIndex]] = tabStop.position;
            tab[_index__WEBPACK_IMPORTED_MODULE_3__/* .deletePositionProperty */ .U$i[this.keywordIndex]] = tabStop.deletePosition;
            tab[_index__WEBPACK_IMPORTED_MODULE_3__/* .tabJustificationProperty */ .Xyg[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTabJustificationEnumValue(tabStop.tabJustification) : tabStop.tabJustification;
            tab[_index__WEBPACK_IMPORTED_MODULE_3__/* .tabLeaderProperty */ .Qrb[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTabLeaderEnumValue(tabStop.tabLeader) : tabStop.tabLeader;
            tabs.push(tab);
        }
        return tabs;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeListFormat = function (format, isInline) {
        var listFormat = {};
        var listIdValue = format.getValue('listId');
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(listIdValue)) {
            listFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .listIdProperty */ .Bo2[this.keywordIndex]] = listIdValue;
            if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.lists)) {
                this.lists = [];
            }
            if (this.lists.indexOf(format.listId) < 0) {
                this.lists.push(format.listId);
            }
        }
        var listLevelNumber = format.getValue('listLevelNumber');
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(listLevelNumber)) {
            listFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .listLevelNumberProperty */ .TtU[this.keywordIndex]] = listLevelNumber;
        }
        var nsid = format.getValue('nsid');
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(nsid)) {
            listFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .nsidProperty */ .cUk] = nsid;
        }
        return listFormat;
    };
    SfdtExport.prototype.writeTable = function (tableWidget, table, index, blocks) {
        var widget = tableWidget.childWidgets[index];
        if (widget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableRowWidget */ .np) {
            if (this.writeRow(widget, table[_index__WEBPACK_IMPORTED_MODULE_3__/* .rowsProperty */ .fDI[this.keywordIndex]])) {
                return undefined;
            }
        }
        var next = tableWidget;
        do {
            tableWidget = next;
            next = tableWidget.nextSplitWidget;
        } while (next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BlockWidget */ .yJ);
        next = tableWidget.nextRenderedWidget;
        return (next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .BlockWidget */ .yJ && next.containerWidget.index === tableWidget.containerWidget.index) ? next : undefined;
    };
    SfdtExport.prototype.writeRow = function (rowWidget, rows) {
        var next = rowWidget;
        do {
            rowWidget = next;
            next = this.writeRowInternal(next, rows);
            if (rowWidget === next) {
                return true;
            }
        } while (next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableRowWidget */ .np);
        return false;
    };
    SfdtExport.prototype.writeRowInternal = function (rowWidget, rows) {
        if (!(rowWidget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableRowWidget */ .np)) {
            return rowWidget;
        }
        if (!rowWidget.isCellsHaveSameWidthUnit()) {
            rowWidget.updateUniformWidthUnitForCells();
        }
        var row = this.createRow(rowWidget);
        rows.push(row);
        for (var i = 0; i < rowWidget.childWidgets.length; i++) {
            var widget = rowWidget.childWidgets[i];
            if (widget instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz) {
                if (rowWidget.index === widget.rowIndex
                    && ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.startColumnIndex) || widget.columnIndex >= this.startColumnIndex)
                    && ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.endColumnIndex) || widget.columnIndex < this.endColumnIndex)) {
                    if (this.writeCell(widget, row[_index__WEBPACK_IMPORTED_MODULE_3__/* .cellsProperty */ .pzy[this.keywordIndex]])) {
                        return rowWidget;
                    }
                }
            }
        }
        var next = rowWidget;
        do {
            rowWidget = next;
            next = rowWidget.nextRenderedWidget;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(rowWidget.ownerTable.bodyWidget) && next && ((rowWidget.ownerTable.index !== next.ownerTable.index &&
                rowWidget.ownerTable.bodyWidget.sectionIndex === next.ownerTable.bodyWidget.sectionIndex)
                || rowWidget.ownerTable.bodyWidget.sectionIndex !== next.ownerTable.bodyWidget.sectionIndex)) {
                next = undefined;
            }
        } while (next instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableRowWidget */ .np && next.index === rowWidget.index);
        return next;
    };
    SfdtExport.prototype.writeCell = function (cellWidget, cells) {
        var cell = this.createCell(cellWidget);
        cells.push(cell);
        var firstBlock = cellWidget.firstChild;
        do {
            firstBlock = this.writeBlock(firstBlock, 0, cell[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]]);
        } while (firstBlock);
        return this.endCell instanceof _viewer_page__WEBPACK_IMPORTED_MODULE_2__/* .TableCellWidget */ .Jz ? this.endCell.cellFormat === cellWidget.cellFormat : false;
    };
    SfdtExport.prototype.createTable = function (tableWidget) {
        var table = {};
        if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.keywordIndex)) {
            this.keywordIndex = 0;
        }
        table[_index__WEBPACK_IMPORTED_MODULE_3__/* .rowsProperty */ .fDI[this.keywordIndex]] = [];
        table[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridProperty */ .Q$X[this.keywordIndex]] = [];
        for (var i = 0; i < tableWidget.tableHolder.columns.length; i++) {
            table[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridProperty */ .Q$X[this.keywordIndex]][i] = tableWidget.tableHolder.columns[i].preferredWidth;
        }
        table[_index__WEBPACK_IMPORTED_MODULE_3__/* .tableFormatProperty */ .xA2[this.keywordIndex]] = this.writeTableFormat(tableWidget.tableFormat, this.keywordIndex);
        table[_index__WEBPACK_IMPORTED_MODULE_3__/* .descriptionProperty */ .CWr[this.keywordIndex]] = tableWidget.tableFormat.description;
        table[_index__WEBPACK_IMPORTED_MODULE_3__/* .titleProperty */ .akK[this.keywordIndex]] = tableWidget.tableFormat.title;
        table[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnCountProperty */ .bqZ[this.keywordIndex]] = tableWidget.tableHolder.columns.length;
        this.writeTablePositioning(table, tableWidget);
        return table;
    };
    SfdtExport.prototype.writeTablePositioning = function (table, tableWidget) {
        if (tableWidget.wrapTextAround) {
            table[_index__WEBPACK_IMPORTED_MODULE_3__/* .wrapTextAroundProperty */ .OXd[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(tableWidget.wrapTextAround, this.keywordIndex);
            table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]] = {};
            table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .allowOverlapProperty */ .IL1[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(tableWidget.positioning.allowOverlap, this.keywordIndex);
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.distanceBottom)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceBottomProperty */ .kpo[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(tableWidget.positioning.distanceBottom);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.distanceLeft)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceLeftProperty */ .ggm[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(tableWidget.positioning.distanceLeft);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.distanceRight)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceRightProperty */ .H35[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(tableWidget.positioning.distanceRight);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.distanceTop)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .distanceTopProperty */ .u_3[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.convertPixelToPoint(tableWidget.positioning.distanceTop);
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.verticalAlignment)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalAlignmentProperty */ .x07[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTableVerticalPositionEnumValue(tableWidget.positioning.verticalAlignment) : tableWidget.positioning.verticalAlignment;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.verticalOrigin)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalOriginProperty */ .kTt[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTableVerticalRelationEnumValue(tableWidget.positioning.verticalOrigin) : tableWidget.positioning.verticalOrigin;
            }
            table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalPositionProperty */ .Zib[this.keywordIndex]] = tableWidget.positioning.verticalPosition;
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.horizontalAlignment)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalAlignmentProperty */ .rMV[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTableHorizontalPositionEnumValue(tableWidget.positioning.horizontalAlignment) : tableWidget.positioning.horizontalAlignment;
            }
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(tableWidget.positioning.horizontalOrigin)) {
                table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalOriginProperty */ ._JI[this.keywordIndex]] = this.keywordIndex == 1 ? this.getTableHorizontalRelationEnumValue(tableWidget.positioning.horizontalOrigin) : tableWidget.positioning.horizontalOrigin;
            }
            table[_index__WEBPACK_IMPORTED_MODULE_3__/* .positioningProperty */ .vUP[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalPositionProperty */ .xVu[this.keywordIndex]] = tableWidget.positioning.horizontalPosition;
        }
    };
    SfdtExport.prototype.createRow = function (rowWidget) {
        var row = {};
        row[_index__WEBPACK_IMPORTED_MODULE_3__/* .cellsProperty */ .pzy[this.keywordIndex]] = [];
        row[_index__WEBPACK_IMPORTED_MODULE_3__/* .rowFormatProperty */ .rfM[this.keywordIndex]] = this.writeRowFormat(rowWidget.rowFormat, this.keywordIndex);
        if (rowWidget.hasOwnProperty('contentControlProperties')) {
            row[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(rowWidget.contentControlProperties);
        }
        return row;
    };
    SfdtExport.prototype.createCell = function (cellWidget) {
        var cell = {};
        cell[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = [];
        cell[_index__WEBPACK_IMPORTED_MODULE_3__/* .cellFormatProperty */ .Vre[this.keywordIndex]] = this.writeCellFormat(cellWidget.cellFormat, this.keywordIndex);
        cell[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnIndexProperty */ .YvS[this.keywordIndex]] = cellWidget.columnIndex;
        if (cellWidget.hasOwnProperty('contentControlProperties')) {
            cell[_index__WEBPACK_IMPORTED_MODULE_3__/* .contentControlPropertiesProperty */ .F7o[this.keywordIndex]] = this.contentControlProperty(cellWidget.contentControlProperties);
        }
        return cell;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeShading = function (wShading, keyIndex) {
        var shading = {};
        shading[_index__WEBPACK_IMPORTED_MODULE_3__/* .backgroundColorProperty */ .FIL[keyIndex]] = wShading.hasValue('backgroundColor') ? wShading.backgroundColor : undefined;
        shading[_index__WEBPACK_IMPORTED_MODULE_3__/* .foregroundColorProperty */ .wIP[keyIndex]] = wShading.hasValue('foregroundColor') ? wShading.foregroundColor : undefined;
        shading[_index__WEBPACK_IMPORTED_MODULE_3__/* .textureProperty */ .rTL[keyIndex]] = wShading.hasValue('textureStyle') ?
            keyIndex == 1 ? this.getTextureStyleEnumValue(wShading.textureStyle) : wShading.textureStyle : undefined;
        return shading;
    };
    SfdtExport.prototype.writeBorders = function (wBorders, keyIndex) {
        var borders = {};
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .topProperty */ .xOy[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.top, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftProperty */ .pkW[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.left, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .rightProperty */ .E$6[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.right, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomProperty */ .HAU[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.bottom, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .diagonalDownProperty */ .ZtF[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.diagonalDown, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .diagonalUpProperty */ .oor[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.diagonalUp, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .horizontalProperty */ .QRf[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.horizontal, keyIndex);
        borders[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalProperty */ .aHk[keyIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.writeBorder(wBorders.vertical, keyIndex);
        return borders;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeCellFormat = function (wCellFormat, keyIndex) {
        var cellFormat = {};
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bordersProperty */ .TVR[keyIndex]] = this.writeBorders(wCellFormat.borders, keyIndex);
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .shadingProperty */ ._Y1[keyIndex]] = this.writeShading(wCellFormat.shading, keyIndex);
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .topMarginProperty */ .PkB[keyIndex]] = wCellFormat.hasValue('topMargin') ? wCellFormat.topMargin : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .rightMarginProperty */ .wW3[keyIndex]] = wCellFormat.hasValue('rightMargin') ? wCellFormat.rightMargin : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftMarginProperty */ .FJj[keyIndex]] = wCellFormat.hasValue('leftMargin') ? wCellFormat.leftMargin : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomMarginProperty */ .fRV[keyIndex]] = wCellFormat.hasValue('bottomMargin') ? wCellFormat.bottomMargin : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .preferredWidthProperty */ .P22[keyIndex]] = wCellFormat.hasValue('preferredWidth') ? wCellFormat.preferredWidth : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .preferredWidthTypeProperty */ .$0U[keyIndex]] = wCellFormat.hasValue('preferredWidthType') ? keyIndex == 1 ? this.getWidthTypeEnumValue(wCellFormat.preferredWidthType) : wCellFormat.preferredWidthType : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .cellWidthProperty */ .M2S[keyIndex]] = wCellFormat.hasValue('cellWidth') ? wCellFormat.cellWidth : undefined;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .columnSpanProperty */ .IYo[keyIndex]] = wCellFormat.columnSpan;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .rowSpanProperty */ .uHM[keyIndex]] = wCellFormat.rowSpan;
        cellFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .verticalAlignmentProperty */ .x07[keyIndex]] = wCellFormat.hasValue('verticalAlignment') ? keyIndex == 1 ? this.getCellVerticalAlignmentEnumValue(wCellFormat.verticalAlignment) : wCellFormat.verticalAlignment : undefined;
        return cellFormat;
    };
    SfdtExport.prototype.writeRowFormat = function (wRowFormat, keyIndex) {
        var rowFormat = {};
        var revisionIds = [];
        this.assignRowFormat(rowFormat, wRowFormat, keyIndex);
        for (var j = 0; j < wRowFormat.revisionLength; j++) {
            rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionIdsProperty */ .PQt[keyIndex]] = this.writeRowRevisions(wRowFormat.getRevision(j), revisionIds);
        }
        return rowFormat;
    };
    /**
     * @private
     */
    SfdtExport.prototype.assignRowFormat = function (rowFormat, wRowFormat, keyIndex) {
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightProperty */ .xf2[keyIndex]] = wRowFormat.hasValue('height') ? wRowFormat.height : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .allowBreakAcrossPagesProperty */ .z$_[keyIndex]] = wRowFormat.hasValue('allowBreakAcrossPages') ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(wRowFormat.allowBreakAcrossPages, this.keywordIndex) : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .heightTypeProperty */ .Zdb[keyIndex]] = wRowFormat.hasValue('heightType') ? this.keywordIndex == 1 ? this.getHeighTypeEnumValue(wRowFormat.heightType) : wRowFormat.heightType : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .isHeaderProperty */ .pk2[keyIndex]] = wRowFormat.hasValue('isHeader') ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(wRowFormat.isHeader, this.keywordIndex) : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bordersProperty */ .TVR[keyIndex]] = this.writeBorders(wRowFormat.borders, keyIndex);
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridBeforeProperty */ .Rd3[keyIndex]] = wRowFormat.gridBefore;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridBeforeWidthProperty */ .pFY[keyIndex]] = wRowFormat.hasValue('gridBeforeWidth') ? wRowFormat.gridBeforeWidth : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridBeforeWidthTypeProperty */ .F$P[keyIndex]] = wRowFormat.hasValue('gridBeforeWidthType') ? this.keywordIndex == 1 ? this.getWidthTypeEnumValue(wRowFormat.gridBeforeWidthType) : wRowFormat.gridBeforeWidthType : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridAfterProperty */ .wZ6[keyIndex]] = wRowFormat.gridAfter;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridAfterWidthProperty */ .oke[keyIndex]] = wRowFormat.hasValue('gridAfterWidth') ? wRowFormat.gridAfterWidth : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .gridAfterWidthTypeProperty */ .q76[keyIndex]] = wRowFormat.hasValue('gridAfterWidthType') ? this.keywordIndex == 1 ? this.getWidthTypeEnumValue(wRowFormat.gridAfterWidthType) : wRowFormat.gridAfterWidthType : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftMarginProperty */ .FJj[keyIndex]] = wRowFormat.hasValue('leftMargin') ? wRowFormat.leftMargin : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .topMarginProperty */ .PkB[keyIndex]] = wRowFormat.hasValue('topMargin') ? wRowFormat.topMargin : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .rightMarginProperty */ .wW3[keyIndex]] = wRowFormat.hasValue('rightMargin') ? wRowFormat.rightMargin : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomMarginProperty */ .fRV[keyIndex]] = wRowFormat.hasValue('bottomMargin') ? wRowFormat.bottomMargin : undefined;
        rowFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftIndentProperty */ .xtd[keyIndex]] = wRowFormat.hasValue('leftIndent') ? wRowFormat.leftIndent : undefined;
    };
    SfdtExport.prototype.writeRowRevisions = function (wrevisions, revisionIds) {
        if (this.selectedRevisionId.indexOf(wrevisions.revisionID) === -1) {
            this.selectedRevisionId.push(wrevisions.revisionID);
        }
        revisionIds.push(wrevisions.revisionID);
        return revisionIds;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeTableFormat = function (wTableFormat, keyIndex) {
        var tableFormat = {};
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bordersProperty */ .TVR[keyIndex]] = this.writeBorders(wTableFormat.borders, keyIndex);
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .shadingProperty */ ._Y1[keyIndex]] = this.writeShading(wTableFormat.shading, keyIndex);
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .cellSpacingProperty */ .dL2[keyIndex]] = wTableFormat.hasValue('cellSpacing') ? wTableFormat.cellSpacing : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftIndentProperty */ .xtd[keyIndex]] = wTableFormat.hasValue('leftIndent') ? wTableFormat.leftIndent : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .tableAlignmentProperty */ .jpM[keyIndex]] = wTableFormat.hasValue('tableAlignment') ? this.keywordIndex == 1 ? this.getTableAlignmentEnumValue(wTableFormat.tableAlignment) : wTableFormat.tableAlignment : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .topMarginProperty */ .PkB[keyIndex]] = wTableFormat.hasValue('topMargin') ? wTableFormat.topMargin : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .rightMarginProperty */ .wW3[keyIndex]] = wTableFormat.hasValue('rightMargin') ? wTableFormat.rightMargin : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .leftMarginProperty */ .FJj[keyIndex]] = wTableFormat.hasValue('leftMargin') ? wTableFormat.leftMargin : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bottomMarginProperty */ .fRV[keyIndex]] = wTableFormat.hasValue('bottomMargin') ? wTableFormat.bottomMargin : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .preferredWidthProperty */ .P22[keyIndex]] = wTableFormat.hasValue('preferredWidth') ? wTableFormat.preferredWidth : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .preferredWidthTypeProperty */ .$0U[keyIndex]] = wTableFormat.hasValue('preferredWidthType') ? this.keywordIndex == 1 ? this.getWidthTypeEnumValue(wTableFormat.preferredWidthType) : wTableFormat.preferredWidthType : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .bidiProperty */ .y1q[keyIndex]] = wTableFormat.hasValue('bidi') ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(wTableFormat.bidi, this.keywordIndex) : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .allowAutoFitProperty */ .N0D[keyIndex]] = wTableFormat.hasValue('allowAutoFit') ? _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(wTableFormat.allowAutoFit, this.keywordIndex) : undefined;
        tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .styleNameProperty */ .eEo[keyIndex]] = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wTableFormat.styleName) ? wTableFormat.styleName : undefined;
        if (this.owner.documentHelper.isCopying && this.documentHelper.selection && this.documentHelper.selection.isWholeColumnSelected()) {
            tableFormat[_index__WEBPACK_IMPORTED_MODULE_3__/* .lastParagraphMarkCopiedProperty */ .BY3[this.keywordIndex]] = true;
        }
        return tableFormat;
    };
    SfdtExport.prototype.footnotes = function (documentHelper) {
        this.isWriteEndFootNote = true;
        for (var i = 0; i < documentHelper.footnotes.separator.length; i++) {
            this.seprators(documentHelper);
        }
        this.isWriteEndFootNote = false;
    };
    SfdtExport.prototype.seprators = function (documentHelper) {
        if (documentHelper.footnotes.separator.length > 0) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]] = {};
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .separatorProperty */ .jTJ[this.keywordIndex]] = [];
            for (var i = 0; i < documentHelper.footnotes.separator.length; i++) {
                this.writeBlock(documentHelper.footnotes.separator[i], 0, this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .separatorProperty */ .jTJ[this.keywordIndex]]);
            }
        }
        if (documentHelper.footnotes.continuationSeparator.length > 0) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]] = [];
            for (var i = 0; i < documentHelper.footnotes.continuationSeparator.length; i++) {
                this.writeBlock(documentHelper.footnotes.continuationSeparator[i], 0, this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]]);
            }
        }
        if (documentHelper.footnotes.continuationNotice.length > 0) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]] = [];
            for (var i = 0; i < documentHelper.footnotes.continuationNotice.length; i++) {
                this.writeBlock(documentHelper.footnotes.continuationNotice[i], 0, this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .footnotesProperty */ .Tsn[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]]);
            }
        }
    };
    SfdtExport.prototype.endnotes = function (documentHelper) {
        this.isWriteEndFootNote = true;
        for (var i = 0; i < this.documentHelper.endnotes.separator.length; i++) {
            this.endnoteSeparator(documentHelper);
        }
        this.isWriteEndFootNote = false;
    };
    SfdtExport.prototype.endnoteSeparator = function (documentHelper) {
        if (documentHelper.endnotes.separator.length > 0) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]] = {};
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .separatorProperty */ .jTJ[this.keywordIndex]] = [];
            for (var i = 0; i < documentHelper.endnotes.separator.length; i++) {
                this.writeBlock(documentHelper.endnotes.separator[i], 0, this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .separatorProperty */ .jTJ[this.keywordIndex]]);
            }
        }
        if (documentHelper.endnotes.continuationSeparator.length > 0) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]] = [];
            for (var i = 0; i < documentHelper.endnotes.continuationSeparator.length; i++) {
                this.writeBlock(documentHelper.endnotes.continuationSeparator[i], 0, this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationSeparatorProperty */ .WSS[this.keywordIndex]]);
            }
        }
        if (documentHelper.endnotes.continuationNotice.length > 0) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]] = [];
            for (var i = 0; i < documentHelper.endnotes.continuationNotice.length; i++) {
                this.writeBlock(documentHelper.endnotes.continuationNotice[i], 0, this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .endnotesProperty */ .Mo6[this.keywordIndex]][_index__WEBPACK_IMPORTED_MODULE_3__/* .continuationNoticeProperty */ .T8h[this.keywordIndex]]);
            }
        }
    };
    SfdtExport.prototype.writeStyles = function (documentHelper) {
        var styles = [];
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .stylesProperty */ .C9Q[this.keywordIndex]] = [];
        for (var i = 0; i < documentHelper.styles.length; i++) {
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .stylesProperty */ .C9Q[this.keywordIndex]].push(this.writeStyle(documentHelper.styles.getItem(i)));
        }
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeStyle = function (style) {
        var wStyle = {};
        wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .nameProperty */ .RL$[this.keywordIndex]] = style.name;
        if (style.type === 'Paragraph') {
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[this.keywordIndex]] = this.keywordIndex == 1 ? this.getStyleTypeEnumValue(style.type) : style.type;
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]] = this.writeParagraphFormat(style.paragraphFormat, this.keywordIndex);
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(style.characterFormat, this.keywordIndex);
        }
        if (style.type === 'Character') {
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[this.keywordIndex]] = this.keywordIndex == 1 ? this.getStyleTypeEnumValue(style.type) : style.type;
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(style.characterFormat, this.keywordIndex);
        }
        if (style.type === 'Table') {
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .typeProperty */ .sf$[this.keywordIndex]] = this.keywordIndex == 1 ? this.getStyleTypeEnumValue(style.type) : style.type;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style.basedOn)) {
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .basedOnProperty */ .i8H[this.keywordIndex]] = style.basedOn.name;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style.link)) {
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .linkProperty */ .YFC[this.keywordIndex]] = style.link.name;
        }
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(style.next)) {
            wStyle[_index__WEBPACK_IMPORTED_MODULE_3__/* .nextProperty */ .rJj[this.keywordIndex]] = style.next.name;
        }
        return wStyle;
    };
    SfdtExport.prototype.writeRevisions = function (documentHelper) {
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionsProperty */ .QVc[this.keywordIndex]] = [];
        for (var i = 0; i < documentHelper.owner.revisions.changes.length; i++) {
            if (this.isExport ||
                (!this.isExport && !this.owner.enableTrackChanges && this.selectedRevisionId.indexOf(documentHelper.owner.revisions.changes[i].revisionID) !== -1)) {
                this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionsProperty */ .QVc[this.keywordIndex]].push(this.writeRevision(documentHelper.owner.revisions.changes[i]));
            }
        }
    };
    SfdtExport.prototype.writeRevision = function (revisions) {
        var revision = {};
        revision[_index__WEBPACK_IMPORTED_MODULE_3__/* .authorProperty */ .BLc[this.keywordIndex]] = revisions.author;
        revision[_index__WEBPACK_IMPORTED_MODULE_3__/* .dateProperty */ .wrk[this.keywordIndex]] = revisions.date;
        revision[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionTypeProperty */ .RaC[this.keywordIndex]] = this.keywordIndex == 1 ? this.getRevisionTypeEnumValue(revisions.revisionType) : revisions.revisionType;
        revision[_index__WEBPACK_IMPORTED_MODULE_3__/* .revisionIdProperty */ .yy5[this.keywordIndex]] = revisions.revisionID;
        revision[_index__WEBPACK_IMPORTED_MODULE_3__/* .customDataProperty */ .PmE[this.keywordIndex]] = revisions.customData;
        return revision;
    };
    SfdtExport.prototype.writeComments = function (documentHelper) {
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .commentsProperty */ .GZZ[this.keywordIndex]] = [];
        for (var i = 0; i < documentHelper.comments.length; i++) {
            // if (this.documentHelper.comments[i].isPosted && (this.isExport ||
            //     (!this.isExport && this.selectedCommentsId.indexOf(this.documentHelper.comments[i].commentId) !== -1))) {
            if (this.isExport ||
                (!this.isExport && this.selectedCommentsId.indexOf(this.documentHelper.comments[i].commentId) !== -1)) {
                this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .commentsProperty */ .GZZ[this.keywordIndex]].push(this.writeComment(this.documentHelper.comments[i]));
            }
        }
    };
    SfdtExport.prototype.writeCustomXml = function (documentHelper) {
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .customXmlProperty */ .k2s[this.keywordIndex]] = [];
        for (var i = 0; i < documentHelper.customXmlData.length; i++) {
            var customXml = {};
            var key = documentHelper.customXmlData.keys[i];
            customXml[_index__WEBPACK_IMPORTED_MODULE_3__/* .itemIDProperty */ .KlU[this.keywordIndex]] = key;
            var xmlValue = this.documentHelper.customXmlData.get(key);
            customXml[_index__WEBPACK_IMPORTED_MODULE_3__/* .xmlProperty */ .XeO[this.keywordIndex]] = xmlValue;
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .customXmlProperty */ .k2s[this.keywordIndex]].push(customXml);
        }
    };
    SfdtExport.prototype.writeImages = function (documentHelper) {
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .imagesProperty */ .oeq[this.keywordIndex]] = {};
        for (var i = 0; i < this.images.length; i++) {
            var image = this.images[i];
            var key = parseInt(image.imageString, 10);
            var base64ImageString = documentHelper.images.get(key).slice();
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(image.hasImageReference) && !image.hasImageReference) {
                var urlImage = [];
                for (var j = 0; j < base64ImageString.length; j++) {
                    if (this.startsWith(base64ImageString[j], "https://") || this.startsWith(base64ImageString[j], "http://") || this.startsWith(base64ImageString[j], "file://")) {
                        urlImage.push(base64ImageString[j]);
                    }
                }
                base64ImageString = urlImage.length > 0 ? urlImage : base64ImageString;
            }
            this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .imagesProperty */ .oeq[this.keywordIndex]][key] = base64ImageString;
        }
    };
    SfdtExport.prototype.startsWith = function (sourceString, startString) {
        return startString.length > 0 && sourceString.substring(0, startString.length) === startString;
    };
    SfdtExport.prototype.writeComment = function (comments) {
        var comment = {};
        comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .commentIdProperty */ .Cl$[this.keywordIndex]] = comments.commentId;
        comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .authorProperty */ .BLc[this.keywordIndex]] = comments.author;
        comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .dateProperty */ .wrk[this.keywordIndex]] = comments.date;
        comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .blocksProperty */ .u3O[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.commentInlines(comments.text, comments.mentions, this.keywordIndex);
        comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .doneProperty */ .gfu[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(comments.isResolved, this.keywordIndex);
        comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .replyCommentsProperty */ .kln[this.keywordIndex]] = [];
        for (var i = 0; i < comments.replyComments.length; i++) {
            comment[_index__WEBPACK_IMPORTED_MODULE_3__/* .replyCommentsProperty */ .kln[this.keywordIndex]].push(this.writeComment(comments.replyComments[i]));
        }
        return comment;
    };
    SfdtExport.prototype.writeLists = function (documentHelper) {
        var abstractLists = [];
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .listsProperty */ .lne[this.keywordIndex]] = [];
        for (var i = 0; i < documentHelper.lists.length; i++) {
            var list = documentHelper.lists[i];
            if (this.lists.indexOf(list.listId) > -1) {
                this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .listsProperty */ .lne[this.keywordIndex]].push(this.writeList(list));
                if (abstractLists.indexOf(list.abstractListId) < 0) {
                    abstractLists.push(list.abstractListId);
                }
            }
        }
        this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .abstractListsProperty */ .Nky[this.keywordIndex]] = [];
        for (var i = 0; i < documentHelper.abstractLists.length; i++) {
            var abstractList = documentHelper.abstractLists[i];
            if (abstractLists.indexOf(abstractList.abstractListId) > -1) {
                this.document[_index__WEBPACK_IMPORTED_MODULE_3__/* .abstractListsProperty */ .Nky[this.keywordIndex]].push(this.writeAbstractList(abstractList));
            }
        }
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeAbstractList = function (wAbstractList) {
        var abstractList = {};
        abstractList[_index__WEBPACK_IMPORTED_MODULE_3__/* .abstractListIdProperty */ .zOm[this.keywordIndex]] = wAbstractList.abstractListId;
        abstractList[_index__WEBPACK_IMPORTED_MODULE_3__/* .nsidProperty */ .cUk] = wAbstractList.nsid;
        abstractList[_index__WEBPACK_IMPORTED_MODULE_3__/* .levelsProperty */ .dxC[this.keywordIndex]] = [];
        for (var i = 0; i < wAbstractList.levels.length; i++) {
            abstractList[_index__WEBPACK_IMPORTED_MODULE_3__/* .levelsProperty */ .dxC[this.keywordIndex]][i] = this.writeListLevel(wAbstractList.levels[i]);
        }
        return abstractList;
    };
    /**
     * @private
     */
    SfdtExport.prototype.writeList = function (wList) {
        var list = {};
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(wList)) {
            list[_index__WEBPACK_IMPORTED_MODULE_3__/* .abstractListIdProperty */ .zOm[this.keywordIndex]] = wList.abstractListId;
            list[_index__WEBPACK_IMPORTED_MODULE_3__/* .levelOverridesProperty */ .z66[this.keywordIndex]] = [];
            for (var i = 0; i < wList.levelOverrides.length; i++) {
                list[_index__WEBPACK_IMPORTED_MODULE_3__/* .levelOverridesProperty */ .z66[this.keywordIndex]].push(this.writeLevelOverrides(wList.levelOverrides[i]));
            }
            list[_index__WEBPACK_IMPORTED_MODULE_3__/* .listIdProperty */ .Bo2[this.keywordIndex]] = wList.listId;
            list[_index__WEBPACK_IMPORTED_MODULE_3__/* .nsidProperty */ .cUk] = wList.nsid;
        }
        return list;
    };
    SfdtExport.prototype.writeLevelOverrides = function (wlevel) {
        var levelOverrides = {};
        levelOverrides[_index__WEBPACK_IMPORTED_MODULE_3__/* .levelNumberProperty */ .$LD[this.keywordIndex]] = wlevel.levelNumber;
        if (wlevel.overrideListLevel) {
            levelOverrides[_index__WEBPACK_IMPORTED_MODULE_3__/* .overrideListLevelProperty */ .UjB[this.keywordIndex]] = this.writeListLevel(wlevel.overrideListLevel);
        }
        levelOverrides[_index__WEBPACK_IMPORTED_MODULE_3__/* .startAtProperty */ .PEc[this.keywordIndex]] = wlevel.startAt;
        return levelOverrides;
    };
    SfdtExport.prototype.writeListLevel = function (wListLevel) {
        var listLevel = {};
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .characterFormatProperty */ .yjl[this.keywordIndex]] = this.writeCharacterFormat(wListLevel.characterFormat, this.keywordIndex);
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .paragraphFormatProperty */ .bm$[this.keywordIndex]] = this.writeParagraphFormat(wListLevel.paragraphFormat, this.keywordIndex);
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .isLegalStyleNumberingProperty */ .Vb9[this.keywordIndex]] = _editor_editor_helper__WEBPACK_IMPORTED_MODULE_4__/* .HelperMethods */ .LD.getBoolInfo(wListLevel.isLegalStyleNumbering, this.keywordIndex);
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .followCharacterProperty */ .Yuw[this.keywordIndex]] = this.keywordIndex == 1 ? this.getFollowCharacterType(wListLevel.followCharacter) : wListLevel.followCharacter;
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .listLevelPatternProperty */ .K_H[this.keywordIndex]] = this.keywordIndex == 1 ? this.getListLevelPatternEnumValue(wListLevel.listLevelPattern) : wListLevel.listLevelPattern;
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .numberFormatProperty */ .kg5[this.keywordIndex]] = wListLevel.numberFormat;
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .paraStyleNameProperty */ .sWc[this.keywordIndex]] = wListLevel.paraStyleName;
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .restartLevelProperty */ .dli[this.keywordIndex]] = wListLevel.restartLevel;
        listLevel[_index__WEBPACK_IMPORTED_MODULE_3__/* .startAtProperty */ .PEc[this.keywordIndex]] = wListLevel.startAt;
        return listLevel;
    };
    SfdtExport.prototype.getParentBlock = function (widget) {
        if (widget.isInsideTable) {
            widget = this.owner.documentHelper.layout.getParentTable(widget);
        }
        return widget;
    };
    SfdtExport.prototype.getParentCell = function (cell) {
        while (cell.ownerTable.isInsideTable) {
            cell = cell.ownerTable.associatedCell;
        }
        return cell;
    };
    SfdtExport.prototype.getWidthTypeEnumValue = function (widthType) {
        switch (widthType) {
            case 'Auto':
                return 0;
            case 'Percent':
                return 1;
            case 'Point':
                return 2;
        }
    };
    SfdtExport.prototype.getTableAlignmentEnumValue = function (tableAlignment) {
        switch (tableAlignment) {
            case 'Left':
                return 0;
            case 'Center':
                return 1;
            case 'Right':
                return 2;
        }
    };
    SfdtExport.prototype.getTextureStyleEnumValue = function (textureStyle) {
        switch (textureStyle) {
            case 'TextureNone':
                return 0;
            case 'Texture2Pt5Percent':
                return 1;
            case 'Texture5Percent':
                return 2;
            case 'Texture7Pt5Percent':
                return 3;
            case 'Texture10Percent':
                return 4;
            case 'Texture12Pt5Percent':
                return 5;
            case 'Texture15Percent':
                return 6;
            case 'Texture17Pt5Percent':
                return 7;
            case 'Texture20Percent':
                return 8;
            case 'Texture22Pt5Percent':
                return 9;
            case 'Texture25Percent':
                return 10;
            case 'Texture27Pt5Percent':
                return 11;
            case 'Texture30Percent':
                return 12;
            case 'Texture32Pt5Percent':
                return 13;
            case 'Texture35Percent':
                return 14;
            case 'Texture37Pt5Percent':
                return 15;
            case 'Texture40Percent':
                return 16;
            case 'Texture42Pt5Percent':
                return 17;
            case 'Texture45Percent':
                return 18;
            case 'Texture47Pt5Percent':
                return 19;
            case 'Texture50Percent':
                return 20;
            case 'Texture52Pt5Percent':
                return 21;
            case 'Texture55Percent':
                return 22;
            case 'Texture57Pt5Percent':
                return 23;
            case 'Texture60Percent':
                return 24;
            case 'Texture62Pt5Percent':
                return 25;
            case 'Texture65Percent':
                return 26;
            case 'Texture67Pt5Percent':
                return 27;
            case 'Texture70Percent':
                return 28;
            case 'Texture72Pt5Percent':
                return 29;
            case 'Texture75Percent':
                return 30;
            case 'Texture77Pt5Percent':
                return 31;
            case 'Texture80Percent':
                return 32;
            case 'Texture82Pt5Percent':
                return 33;
            case 'Texture85Percent':
                return 34;
            case 'Texture87Pt5Percent':
                return 35;
            case 'Texture90Percent':
                return 36;
            case 'Texture92Pt5Percent':
                return 37;
            case 'Texture95Percent':
                return 38;
            case 'Texture97Pt5Percent':
                return 39;
            case 'TextureSolid':
                return 40;
            case 'TextureDarkHorizontal':
                return 41;
            case 'TextureDarkVertical':
                return 42;
            case 'TextureDarkDiagonalDown':
                return 43;
            case 'TextureDarkDiagonalUp':
                return 44;
            case 'TextureDarkCross':
                return 45;
            case 'TextureDarkDiagonalCross':
                return 46;
            case 'TextureHorizontal':
                return 47;
            case 'TextureVertical':
                return 48;
            case 'TextureDiagonalDown':
                return 49;
            case 'TextureDiagonalUp':
                return 50;
            case 'TextureCross':
                return 51;
            case 'TextureDiagonalCross':
                return 52;
        }
    };
    SfdtExport.prototype.getHeighTypeEnumValue = function (heightType) {
        switch (heightType) {
            case 'AtLeast':
                return 0;
            case 'Exactly':
                return 1;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getCellVerticalAlignmentEnumValue = function (cellVerticalAlignment) {
        switch (cellVerticalAlignment) {
            case 'Top':
                return 0;
            case 'Center':
                return 1;
            case 'Bottom':
                return 2;
        }
    };
    SfdtExport.prototype.getListLevelPatternEnumValue = function (listLevelPattern) {
        switch (listLevelPattern) {
            case 'None':
                return 0;
            case 'KanjiDigit':
            case 'Arabic':
                return 1;
            case 'UpRoman':
                return 2;
            case 'LowRoman':
                return 3;
            case 'UpLetter':
                return 4;
            case 'LowLetter':
                return 5;
            case 'Ordinal':
                return 6;
            case 'Number':
                return 7;
            case 'OrdinalText':
                return 8;
            case 'LeadingZero':
                return 9;
            case 'Bullet':
                return 10;
            case 'FarEast':
                return 11;
            case 'Special':
                return 12;
        }
    };
    SfdtExport.prototype.getStyleTypeEnumValue = function (styleType) {
        switch (styleType) {
            case 'Paragraph':
                return 0;
            case 'Character':
                return 1;
            case 'Table':
                return 2;
        }
    };
    SfdtExport.prototype.getProtectionTypeEnumValue = function (protectionType) {
        switch (protectionType) {
            case 'NoProtection':
                return 0;
            case 'ReadOnly':
                return 1;
            case 'FormFieldsOnly':
                return 2;
            case 'CommentsOnly':
                return 3;
            case 'RevisionsOnly':
                return 4;
        }
    };
    SfdtExport.prototype.getRevisionTypeEnumValue = function (revisionType) {
        switch (revisionType) {
            case 'Insertion':
                return 1;
            case 'Deletion':
                return 2;
            case 'MoveTo':
                return 3;
            case 'MoveFrom':
                return 4;
        }
    };
    SfdtExport.prototype.getFootnoteTypeEnumValue = function (footnoteType) {
        switch (footnoteType) {
            case 'Footnote':
                return 0;
            case 'Endnote':
                return 1;
        }
    };
    SfdtExport.prototype.getFootnoteRestartIndexEnumValue = function (footnoteRestartIndex) {
        switch (footnoteRestartIndex) {
            case 'DoNotRestart':
                return 0;
            case 'RestartForEachSection':
                return 1;
            case 'RestartForEachPage':
                return 2;
        }
    };
    SfdtExport.prototype.getFootEndNoteNumberFormatEnumValue = function (footEndNoteNumberFormat) {
        switch (footEndNoteNumberFormat) {
            case 'Arabic':
                return 0;
            case 'UpperCaseRoman':
                return 1;
            case 'LowerCaseRoman':
                return 2;
            case 'UpperCaseLetter':
                return 3;
            case 'LowerCaseLetter':
                return 4;
        }
    };
    SfdtExport.prototype.getTextVerticalAlignmentEnumValue = function (textVerticalAlignment) {
        switch (textVerticalAlignment) {
            case 'Top':
                return 0;
            case 'Middle':
            case 'Center':
                return 1;
            case 'Bottom':
                return 2;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getShapeVerticalAlignmentEnumValue = function (shapeVerticalAlignment) {
        switch (shapeVerticalAlignment) {
            case 'None':
                return 0;
            case 'Top':
                return 1;
            case 'Center':
                return 2;
            case 'Bottom':
                return 3;
            case 'Inline':
                return 4;
            case 'Inside':
                return 5;
            case 'Outside':
                return 6;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getShapeHorizontalAlignmentEnumValue = function (shapeHorizontalAlignment) {
        switch (shapeHorizontalAlignment) {
            case 'None':
                return 0;
            case 'Center':
                return 1;
            case 'Inside':
                return 2;
            case 'Left':
                return 3;
            case 'Outside':
                return 4;
            case 'Right':
                return 5;
        }
    };
    SfdtExport.prototype.getVerticalOriginEnumValue = function (verticalOrigin) {
        switch (verticalOrigin) {
            case 'Paragraph':
                return 0;
            case 'BottomMargin':
                return 1;
            case 'InsideMargin':
                return 2;
            case 'Line':
                return 3;
            case 'Margin':
                return 4;
            case 'OutsideMargin':
                return 5;
            case 'Page':
                return 6;
            case 'TopMargin':
                return 7;
        }
    };
    SfdtExport.prototype.getHorizontalOriginEnumValue = function (horizontalOrigin) {
        switch (horizontalOrigin) {
            case 'Column':
                return 0;
            case 'Character':
                return 1;
            case 'InsideMargin':
                return 2;
            case 'LeftMargin':
                return 3;
            case 'Margin':
                return 4;
            case 'OutsideMargin':
                return 5;
            case 'Page':
                return 6;
            case 'RightMargin':
                return 7;
        }
    };
    SfdtExport.prototype.getTableVerticalRelationEnumValue = function (tableRelation) {
        switch (tableRelation) {
            case 'Paragraph':
                return 0;
            case 'Margin':
                return 1;
            case 'Page':
                return 2;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getTableHorizontalRelationEnumValue = function (tableRelation) {
        switch (tableRelation) {
            case 'Column':
                return 0;
            case 'Margin':
                return 1;
            case 'Page':
                return 2;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getTableVerticalPositionEnumValue = function (tableVerticalPosition) {
        switch (tableVerticalPosition) {
            case 'None':
                return 0;
            case 'Top':
                return 1;
            case 'Center':
                return 2;
            case 'Bottom':
                return 3;
            case 'Inside':
                return 4;
            case 'Outside':
                return 5;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getTableHorizontalPositionEnumValue = function (tableHorizontalPosition) {
        switch (tableHorizontalPosition) {
            case 'Left':
                return 0;
            case 'Center':
                return 1;
            case 'Inside':
                return 2;
            case 'Outside':
                return 3;
            case 'Right':
                return 4;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getLineDashStyleEnumValue = function (lineDashStyle) {
        switch (lineDashStyle) {
            case 'Solid':
                return 0;
            case 'Dash':
                return 1;
            case 'DashDot':
                return 2;
            case 'DashDotDot':
                return 3;
            case 'DashDotGEL':
                return 4;
            case 'DashGEL':
                return 5;
            case 'Dot':
                return 6;
            case 'DotGEL':
                return 7;
            case 'LongDashDotDotGEL':
                return 8;
            case 'LongDashDotGEL':
                return 9;
            case 'LongDashGEL':
                return 10;
        }
    };
    SfdtExport.prototype.getHorizontalPositionAbsEnumValue = function (horizontalPositionAbs) {
        switch (horizontalPositionAbs) {
            case 'Left':
                return 0;
            case 'Center':
                return 1;
            case 'Right':
                return 2;
            case 'Inside':
                return 3;
            case 'Outside':
                return 4;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getTabJustificationEnumValue = function (tabJustification) {
        switch (tabJustification) {
            case 'Left':
                return 0;
            case 'Bar':
                return 1;
            case 'Center':
                return 2;
            case 'Decimal':
                return 3;
            case 'List':
                return 4;
            case 'Right':
                return 5;
        }
    };
    SfdtExport.prototype.getTabLeaderEnumValue = function (tabLeader) {
        switch (tabLeader) {
            case 'None':
                return 0;
            case 'Single':
                return 1;
            case 'Dot':
                return 2;
            case 'Hyphen':
                return 3;
            case 'Underscore':
                return 4;
        }
    };
    SfdtExport.prototype.getTextFormFieldTypeEnumValue = function (textFormFieldType) {
        switch (textFormFieldType) {
            case 'Text':
                return 0;
            case 'Number':
                return 1;
            case 'Date':
                return 2;
            case 'Calculation':
                return 3;
        }
    };
    SfdtExport.prototype.getTextFormFieldFormatEnumValue = function (textFormFieldFormat) {
        switch (textFormFieldFormat) {
            case 'None':
                return 0;
            case 'FirstCapital':
                return 1;
            case 'Lowercase':
                return 2;
            case 'Uppercase':
                return 3;
            case 'Titlecase':
                return 4;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getCheckBoxSizeTypeEnumValue = function (checkBoxSizeType) {
        switch (checkBoxSizeType) {
            case 'Auto':
                return 0;
            case 'Exactly':
                return 1;
        }
    };
    SfdtExport.prototype.getContentControlAppearanceEnumValue = function (contentControlAppearance) {
        switch (contentControlAppearance) {
            case 'BoundingBox':
                return 1;
            case 'Hidden':
                return 2;
            case 'Tags':
                return 3;
            default:
                return 1;
        }
    };
    SfdtExport.prototype.getContentControlTypeEnumValue = function (contentControlType) {
        switch (contentControlType) {
            case 'RichText':
                return 0;
            case 'BuildingBlockGallery':
                return 1;
            case 'CheckBox':
                return 2;
            case 'ComboBox':
                return 3;
            case 'Date':
                return 4;
            case 'DropDownList':
                return 5;
            case 'Group':
                return 6;
            case 'Picture':
                return 7;
            case 'RepeatingSection':
                return 8;
            case 'Text':
                return 9;
        }
    };
    SfdtExport.prototype.getDateCalendarTypeEnumValue = function (dateCalendarType) {
        switch (dateCalendarType) {
            case 'Gregorian':
                return 0;
            case 'GregorianArabic':
                return 1;
            case 'GregorianEnglish':
                return 2;
            case 'GregorianMiddleEastFrench':
                return 3;
            case 'GregorianTransliteratedEnglish':
                return 4;
            case 'GregorianTransliteratedFrench':
                return 5;
            case 'Hebrew':
                return 6;
            case 'Hijri':
                return 7;
            case 'Japan':
                return 8;
            case 'Korean':
                return 9;
            case 'Saka':
                return 10;
            case 'Taiwan':
                return 11;
            case 'Thai':
                return 12;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getDateStorageFormatEnumValue = function (dateStorageFormat) {
        switch (dateStorageFormat) {
            case 'DateStorageDate':
                return 1;
            case 'DateStorageDateTime':
                return 2;
            case 'DateStorageText':
                return 3;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getTextWrappingStyleEnumValue = function (textWrappingStyle) {
        switch (textWrappingStyle) {
            case 'Inline':
                return 0;
            case 'InFrontOfText':
                return 1;
            case 'Square':
                return 2;
            case 'TopAndBottom':
                return 3;
            case 'Behind':
                return 4;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getTextWrappingTypeEnumValue = function (textWrappingType) {
        switch (textWrappingType) {
            case 'Both':
                return 0;
            case 'Left':
                return 1;
            case 'Right':
                return 2;
            case 'Largest':
                return 3;
        }
    };
    SfdtExport.prototype.getCompatibilityModeEnumValue = function (compatibilityMode) {
        switch (compatibilityMode) {
            case 'Word2013':
                return 0;
            case 'Word2003':
                return 1;
            case 'Word2007':
                return 2;
            case 'Word2010':
                return 3;
        }
    };
    SfdtExport.prototype.getLineFormatTypeEnumValue = function (lineFormatType) {
        switch (lineFormatType) {
            case 'Solid':
                return 0;
            case 'Patterned':
                return 1;
            case 'Gradient':
                return 2;
            case 'None':
                return 3;
        }
    };
    SfdtExport.prototype.getAutoShapeTypeEnumValue = function (autoShapeType) {
        switch (autoShapeType) {
            case 'Rectangle':
                return 1;
            case 'RoundedRectangle':
                return 2;
            case 'StraightConnector':
                return 3;
            case 'Oval':
                return 4;
            case 'IsoscelesTriangle':
                return 5;
            case 'RightTriangle':
                return 6;
            case 'Parallelogram':
                return 7;
            case 'Trapezoid':
                return 8;
            case 'Diamond':
                return 9;
            case 'RegularPentagon':
                return 10;
            case 'Hexagon':
                return 11;
            case 'Heptagon':
                return 12;
            case 'Octagon':
                return 13;
            case 'Decagon':
                return 14;
            case 'Dodecagon':
                return 15;
            case 'Chord':
                return 16;
            case 'Teardrop':
                return 17;
            case 'Frame':
                return 18;
            case 'HalfFrame':
                return 19;
            case 'L_Shape':
                return 20;
            case 'Pie':
                return 21;
            case 'DiagonalStripe':
                return 22;
            case 'Cross':
                return 23;
            case 'Plaque':
                return 24;
            case 'Can':
                return 25;
            case 'Cube':
                return 26;
            case 'Bevel':
                return 27;
            case 'Donut':
                return 28;
            case 'NoSymbol':
                return 29;
            case 'BlockArc':
                return 30;
            case 'FoldedCorner':
                return 31;
            case 'SmileyFace':
                return 32;
            case 'Heart':
                return 33;
            case 'LightningBolt':
                return 34;
            case 'Sun':
                return 35;
            case 'Moon':
                return 36;
            case 'Cloud':
                return 37;
            case 'Arc':
                return 38;
            case 'DoubleBracket':
                return 39;
            case 'DoubleBrace':
                return 40;
            case 'LeftBracket':
                return 41;
            case 'RightBracket':
                return 42;
            case 'LeftBrace':
                return 43;
            case 'RightBrace':
                return 44;
            //flowchartShapes 
            case 'FlowChartProcess':
                return 45;
            case 'FlowChartAlternateProcess':
                return 46;
            case 'FlowChartDecision':
                return 47;
            case 'FlowChartData':
                return 48;
            case 'FlowChartPredefinedProcess':
                return 49;
            case 'FlowChartInternalStorage':
                return 50;
            case 'FlowChartDocument':
                return 51;
            case 'FlowChartMultiDocument':
                return 52;
            case 'FlowChartTerminator':
                return 53;
            case 'FlowChartPreparation':
                return 54;
            case 'FlowChartManualInput':
                return 55;
            case 'FlowChartManualOperation':
                return 56;
            case 'FlowChartConnector':
                return 57;
            case 'FlowChartOffPageConnector':
                return 58;
            case 'FlowChartCard':
                return 59;
            case 'FlowChartPunchedTape':
                return 60;
            case 'FlowChartSummingJunction':
                return 61;
            case 'FlowChartOr':
                return 62;
            case 'FlowChartCollate':
                return 63;
            case 'FlowChartSort':
                return 64;
            case 'FlowChartExtract':
                return 65;
            case 'FlowChartMerge':
                return 66;
            case 'FlowChartStoredData':
                return 67;
            case 'FlowChartDelay':
                return 68;
            case 'FlowChartSequentialAccessStorage':
                return 69;
            case 'FlowChartMagneticDisk':
                return 70;
            case 'FlowChartDirectAccessStorage':
                return 71;
            case 'FlowChartDisplay':
                return 72;
            // block arrows
            case 'RightArrow':
                return 73;
            case 'LeftArrow':
                return 74;
            case 'UpArrow':
                return 75;
            case 'DownArrow':
                return 76;
            case 'LeftRightArrow':
                return 77;
            case 'UpDownArrow':
                return 78;
            case 'QuadArrow':
                return 79;
            case 'LeftRightUpArrow':
                return 80;
            case 'BentArrow':
                return 81;
            case 'UTurnArrow':
                return 82;
            case 'LeftUpArrow':
                return 83;
            case 'BentUpArrow':
                return 84;
            case 'CurvedRightArrow':
                return 85;
            case 'CurvedLeftArrow':
                return 86;
            case 'CurvedUpArrow':
                return 87;
            case 'CurvedDownArrow':
                return 88;
            case 'StripedRightArrow':
                return 89;
            case 'NotchedRightArrow':
                return 90;
            case 'Pentagon':
                return 91;
            case 'Chevron':
                return 92;
            case 'RightArrowCallout':
                return 93;
            case 'DownArrowCallout':
                return 94;
            case 'LeftArrowCallout':
                return 95;
            case 'UpArrowCallout':
                return 96;
            case 'LeftRightArrowCallout':
                return 97;
            case 'QuadArrowCallout':
                return 98;
            case 'CircularArrow':
                return 99;
            // Equation shapes
            case 'MathPlus':
                return 100;
            case 'MathMinus':
                return 101;
            case 'MathMultiply':
                return 102;
            case 'MathDivision':
                return 103;
            case 'MathEqual':
                return 104;
            case 'MathNotEqual':
                return 105;
            // Stars and Banners
            case 'Explosion1':
                return 106;
            case 'Explosion2':
                return 107;
            case 'Star4Point':
                return 108;
            case 'Star5Point':
                return 109;
            case 'Star6Point':
                return 110;
            case 'Star7Point':
                return 111;
            case 'Star8Point':
                return 112;
            case 'Star10Point':
                return 113;
            case 'Star12Point':
                return 114;
            case 'Star16Point':
                return 115;
            case 'Star24Point':
                return 116;
            case 'Star32Point':
                return 117;
            case 'UpRibbon':
                return 118;
            case 'DownRibbon':
                return 119;
            case 'CurvedUpRibbon':
                return 120;
            case 'CurvedDownRibbon':
                return 121;
            case 'VerticalScroll':
                return 122;
            case 'HorizontalScroll':
                return 123;
            case 'Wave':
                return 124;
            case 'DoubleWave':
                return 125;
            // Rectangles
            case 'SnipSingleCornerRectangle':
                return 126;
            case 'SnipSameSideCornerRectangle':
                return 127;
            case 'SnipDiagonalCornerRectangle':
                return 128;
            case 'SnipAndRoundSingleCornerRectangle':
                return 129;
            case 'RoundSingleCornerRectangle':
                return 130;
            case 'RoundSameSideCornerRectangle':
                return 131;
            case 'RoundDiagonalCornerRectangle':
                return 132;
            case 'Unknown':
                return 133;
            case 'ElbowConnector':
                return 134;
            case 'CurvedConnector':
                return 135;
            default:
                return 0;
        }
    };
    SfdtExport.prototype.getFollowCharacterType = function (followCharacterType) {
        switch (followCharacterType) {
            case 'Tab':
                return 0;
            case 'Space':
                return 1;
            case 'None':
                return 2;
        }
    };
    /**
     * @private
     * @returns {void}
     */
    SfdtExport.prototype.destroy = function () {
        this.lists = undefined;
        this.images = undefined;
        this.endLine = undefined;
        this.startLine = undefined;
        this.endOffset = undefined;
        this.documentHelper = undefined;
        if (this.bookmarkCollection) {
            this.bookmarkCollection = undefined;
        }
    };
    return SfdtExport;
}());



/***/ })

}]);
//# sourceMappingURL=d8eba9bb-6709a84248e5031c.js.map