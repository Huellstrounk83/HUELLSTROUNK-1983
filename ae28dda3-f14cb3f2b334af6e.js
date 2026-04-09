"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4467],{

/***/ 81421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aj: () => (/* binding */ PdfUriAnnotation),
/* harmony export */   Bi: () => (/* binding */ PdfFreeTextAnnotation),
/* harmony export */   Bw: () => (/* binding */ _PaintParameter),
/* harmony export */   Cs: () => (/* binding */ PdfPolyLineAnnotation),
/* harmony export */   JN: () => (/* binding */ PdfRectangleAnnotation),
/* harmony export */   Jg: () => (/* binding */ PdfTextWebLinkAnnotation),
/* harmony export */   Mh: () => (/* binding */ PdfPopupAnnotation),
/* harmony export */   Nb: () => (/* binding */ PdfRedactionAnnotation),
/* harmony export */   OM: () => (/* binding */ PdfCircleAnnotation),
/* harmony export */   Qf: () => (/* binding */ PdfWidgetAnnotation),
/* harmony export */   Qy: () => (/* binding */ PdfComment),
/* harmony export */   RI: () => (/* binding */ PdfInteractiveBorder),
/* harmony export */   RM: () => (/* binding */ PdfStateItem),
/* harmony export */   SG: () => (/* binding */ PdfPolygonAnnotation),
/* harmony export */   Uv: () => (/* binding */ PdfRichMediaAnnotation),
/* harmony export */   Ve: () => (/* binding */ PdfAttachmentAnnotation),
/* harmony export */   WB: () => (/* binding */ PdfInkAnnotation),
/* harmony export */   _r: () => (/* binding */ PdfLineAnnotation),
/* harmony export */   cr: () => (/* binding */ PdfAnnotation),
/* harmony export */   eq: () => (/* binding */ PdfListFieldItem),
/* harmony export */   fn: () => (/* binding */ PdfSoundAnnotation),
/* harmony export */   iQ: () => (/* binding */ PdfEllipseAnnotation),
/* harmony export */   k0: () => (/* binding */ PdfAnnotationBorder),
/* harmony export */   lh: () => (/* binding */ PdfRadioButtonListItem),
/* harmony export */   oA: () => (/* binding */ PdfFileLinkAnnotation),
/* harmony export */   p$: () => (/* binding */ PdfTextMarkupAnnotation),
/* harmony export */   pY: () => (/* binding */ PdfAngleMeasurementAnnotation),
/* harmony export */   qE: () => (/* binding */ PdfWatermarkAnnotation),
/* harmony export */   rJ: () => (/* binding */ PdfDocumentLinkAnnotation),
/* harmony export */   s2: () => (/* binding */ PdfBorderEffect),
/* harmony export */   t1: () => (/* binding */ Pdf3DAnnotation),
/* harmony export */   tL: () => (/* binding */ PdfRubberStampAnnotation),
/* harmony export */   zI: () => (/* binding */ PdfSquareAnnotation)
/* harmony export */ });
/* unused harmony exports PdfAnnotationCaption, PdfAnnotationLineEndingStyle */
/* harmony import */ var _pdf_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44109);
/* harmony import */ var _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81628);
/* harmony import */ var _enumerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8398);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14291);
/* harmony import */ var _form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62614);
/* harmony import */ var _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91008);
/* harmony import */ var _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74221);
/* harmony import */ var _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79457);
/* harmony import */ var _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78174);
/* harmony import */ var _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7680);
/* harmony import */ var _base_stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96969);
/* harmony import */ var _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58067);
/* harmony import */ var _annotation_collection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21480);
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













/**
 * Represents the base class for annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Access first page
 * let page: PdfPage = document.getPage(0);
 * // Access the annotation at index 0
 * let annotation: PdfAnnotation = page.annotations.at(0);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfAnnotation = /** @class */ (function () {
    function PdfAnnotation() {
        this._isImported = false;
        this._isLoaded = false;
        this._setAppearance = false;
        this._isExport = false;
        this._opacity = 1;
        this._isAllRotation = true;
        this._flatten = false;
        this._popUpFont = new _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p(_fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontFamily */ .Qr.helvetica, 10.5);
        this._authorBoldFont = new _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p(_fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontFamily */ .Qr.helvetica, 10.5, _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold);
        this._lineCaptionFont = new _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p(_fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontFamily */ .Qr.helvetica, 10, _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular);
        this._circleCaptionFont = new _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p(_fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontFamily */ .Qr.helvetica, 8, _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular);
        this._isTransparentColor = false;
        this._isRotated = false;
        this._isChanged = false;
    }
    Object.defineProperty(PdfAnnotation.prototype, "author", {
        /**
         * Gets the author of the annotation.
         *
         * @returns {string} Author.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the author of the annotation.
         * let author: string = annotation.author;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._author === 'undefined' && this._dictionary.has('Author')) {
                var author = this._dictionary.get('Author');
                if (author) {
                    this._author = author;
                }
            }
            if (typeof this._author === 'undefined' && this._dictionary.has('T')) {
                var author = this._dictionary.get('T');
                if (author) {
                    this._author = author;
                }
            }
            return this._author;
        },
        /**
         * Sets the author of the annotation.
         *
         * @param {string} value Author.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the author of the annotation.
         * annotation.author = ‘Syncfusion’;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._isLoaded && typeof value === 'string' && value !== this.author) {
                var hasKey = false;
                if (this._dictionary && this._dictionary.has('T')) {
                    this._dictionary.update('T', value);
                    this._author = value;
                    hasKey = true;
                }
                if (this._dictionary && this._dictionary.has('Author')) {
                    this._dictionary.update('Author', value);
                    this._author = value;
                    hasKey = true;
                }
                if (!hasKey) {
                    this._dictionary.update('T', value);
                    this._author = value;
                }
            }
            if (!this._isLoaded && typeof value === 'string') {
                this._dictionary.update('T', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "border", {
        /**
         * Gets the border of the annotation.
         *
         * @returns {PdfAnnotationBorder} Annotation border.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the border of the annotation.
         * let border: PdfAnnotationBorder = annotation.border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._border === 'undefined') {
                var value = new PdfAnnotationBorder();
                value._dictionary = this._dictionary;
                if (this._dictionary && this._dictionary.has('Border')) {
                    var border = this._dictionary.getArray('Border');
                    if (border && border.length >= 3) {
                        value._hRadius = border[0];
                        value._vRadius = border[1];
                        value._width = border[2];
                    }
                }
                if (this._dictionary && this._dictionary.has('BS')) {
                    var border = this._dictionary.get('BS');
                    if (border) {
                        if (border.has('W')) {
                            var width = border.get('W');
                            if (typeof width !== 'undefined' && !Number.isNaN(width)) {
                                value._width = width;
                            }
                        }
                        if (border.has('S')) {
                            var style = border.get('S');
                            if (style) {
                                switch (style.name) {
                                    case 'D':
                                        value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed;
                                        break;
                                    case 'B':
                                        value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.beveled;
                                        break;
                                    case 'I':
                                        value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.inset;
                                        break;
                                    case 'U':
                                        value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.underline;
                                        break;
                                    default:
                                        value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.solid;
                                        break;
                                }
                            }
                        }
                        if (border.has('D')) {
                            var dash = border.getArray('D');
                            if (dash) {
                                value._dash = dash;
                            }
                        }
                    }
                }
                this._border = value;
            }
            return this._border;
        },
        /**
         * Sets the border of the annotation.
         *
         * @param {PdfAnnotationBorder} value Border.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Initializes a new instance of the ` PdfAnnotationBorder ` class.
         * let border: PdfAnnotationBorder = new PdfAnnotationBorder ();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF annotation
         * annotation.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            var current = this.border;
            var width;
            if (!this._isLoaded || (typeof value.width !== 'undefined' && current.width !== value.width)) {
                width = value.width;
            }
            var hRadius;
            if (!this._isLoaded || (typeof value.hRadius !== 'undefined' && current.hRadius !== value.hRadius)) {
                hRadius = value.hRadius;
            }
            var vRadius;
            if (!this._isLoaded || (typeof value.vRadius !== 'undefined' && current.vRadius !== value.vRadius)) {
                vRadius = value.vRadius;
            }
            var style;
            if (!this._isLoaded || (typeof value.style !== 'undefined' && current.style !== value.style)) {
                style = value.style;
            }
            var dash;
            if (typeof value.dash !== 'undefined' && current.dash !== value.dash) {
                dash = value.dash;
            }
            if (!this._isWidget && this._dictionary && this._dictionary.has('Border') || (width || vRadius || hRadius)) {
                this._border._hRadius = typeof hRadius !== 'undefined' ? hRadius : current.hRadius;
                this._border._vRadius = typeof vRadius !== 'undefined' ? vRadius : current.vRadius;
                this._border._width = typeof width !== 'undefined' ? width : current.width;
                this._dictionary.update('Border', [this._border.hRadius, this._border.vRadius, this._border.width]);
            }
            if (this._dictionary !== null && this._dictionary && this._dictionary.has('BS') || (width || style || dash)) {
                this._border._width = typeof width !== 'undefined' ? width : current.width;
                this._border._style = typeof style !== 'undefined' ? style : current.style;
                this._border._dash = typeof dash !== 'undefined' ? dash : current.dash;
                var bs = this._dictionary.has('BS') ? this._dictionary.get('BS') : new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                bs.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
                bs.update('W', this._border.width);
                bs.update('S', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderStyle */ .rW)(this._border.style));
                if (typeof this._border.dash !== 'undefined') {
                    bs.update('D', this._border.dash);
                }
                this._dictionary.update('BS', bs);
                this._dictionary._updated = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "flags", {
        /**
         * Gets the flags of the annotation.
         *
         * @returns {PdfAnnotationFlag} Annotation flag.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the flags of the annotation.
         * let flag: PdfAnnotationFlag = annotation.flags;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._annotFlags === 'undefined') {
                this._annotFlags = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.default;
                if (this._dictionary && this._dictionary.has('F')) {
                    this._annotFlags = this._dictionary.get('F');
                }
            }
            return this._annotFlags;
        },
        /**
         * Sets the flags of the annotation.
         *
         * @param {PdfAnnotationFlag} value flag value.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the flags of the annotation.
         * annotation.flags = PdfAnnotationFlag.print;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value !== this._annotFlags) {
                this._annotFlags = value;
                this._dictionary.update('F', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "color", {
        /**
         * Gets the fore color of the annotation.
         *
         * @returns {number[]} R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the color of the annotation.
         * let color: number[] = annotation.color;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._color === 'undefined' && this._dictionary.has('C')) {
                this._color = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(this._dictionary.getArray('C'));
            }
            return this._color;
        },
        /**
         * Sets the fore color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the color of the annotation.
         * annotation.color = [255, 0, 0];
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                var extColor = this.color;
                if (!this._isLoaded || typeof extColor === 'undefined' || (extColor[0] !== value[0] || extColor[1] !== value[1] || extColor[2] !== value[2])) {
                    this._color = value;
                    this._dictionary.update('C', [Number.parseFloat((value[0] / 255).toFixed(7)),
                        Number.parseFloat((value[1] / 255).toFixed(7)),
                        Number.parseFloat((value[2] / 255).toFixed(7))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "innerColor", {
        /**
         * Gets the inner color of the annotation.
         *
         * @returns {number[]} R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the inner color of the annotation.
         * let innerColor: number[] = annotation.innerColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._innerColor === 'undefined' && this._dictionary.has('IC')) {
                this._innerColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(this._dictionary.getArray('IC'));
            }
            return this._innerColor;
        },
        /**
         * Sets the inner color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the inner color of the annotation.
         * annotation.innerColor = [255, 0, 0];
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                var extColor = this.innerColor;
                if (!this._isLoaded ||
                    typeof extColor === 'undefined' ||
                    (extColor[0] !== value[0] || extColor[1] !== value[1] || extColor[2] !== value[2])) {
                    this._innerColor = value;
                    this._dictionary.update('IC', [Number.parseFloat((value[0] / 255).toFixed(7)),
                        Number.parseFloat((value[1] / 255).toFixed(7)),
                        Number.parseFloat((value[2] / 255).toFixed(7))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "creationDate", {
        /**
         * Gets the creation date of the annotation.
         *
         * @returns {Date} Creation date.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the creation date of the annotation.
         * let creationDate: Date = annotation.creationDate;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if ((typeof this._creationDate === 'undefined' || this._creationDate === null) && this._dictionary.has('CreationDate')) {
                var value = this._dictionary.get('CreationDate'); // eslint-disable-line
                if (value !== null && typeof value === 'string') {
                    this._creationDate = this._stringToDate(value);
                }
            }
            return this._creationDate;
        },
        /**
         * Sets the creation date of the annotation.
         *
         * @param {Date} value Creation date.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Set the creation date of the annotation.
         * annotation.creationDate = new Date();
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._creationDate = value;
            this._dictionary.update('CreationDate', this._dateToString(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "modifiedDate", {
        /**
         * Gets the modification date of the annotation.
         *
         * @returns {Date} Modified date.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the modified date of the annotation.
         * let modifiedDate: Date = annotation.modifiedDate;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if ((typeof this._modifiedDate === 'undefined' || this._modifiedDate === null)) {
                var value = void 0; // eslint-disable-line
                if (this._dictionary && this._dictionary.has('ModDate')) {
                    value = this._dictionary.get('ModDate');
                }
                else if (this._dictionary.has('M')) {
                    value = this._dictionary.get('M');
                }
                if (value !== null && typeof value === 'string') {
                    this._modifiedDate = this._stringToDate(value);
                }
            }
            return this._modifiedDate;
        },
        /**
         * Sets the modification date of the annotation.
         *
         * @param {Date} value Modified date.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Set the modified date of the annotation.
         * annotation.modifiedDate = new Date();
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._modifiedDate = value;
            this._dictionary.update('M', this._dateToString(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "bounds", {
        /**
         * Gets the bounds of the annotation.
         *
         * @returns {{x: number, y: number, width: number, height: number}} Bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the bounds of the annotation.
         * let bounds: {x: number, y: number, width: number, height: number} = annotation.bounds;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded) {
                this._bounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._calculateBounds */ .lN)(this._dictionary, this._page);
            }
            return this._bounds;
        },
        /**
         * Sets the bounds of the annotation.
         *
         * @param {{x: number, y: number, width: number, height: number}} value bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the bounds of the annotation.
         * annotation.bounds = {x: 10, y: 10, width: 150, height: 5};
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value) {
                this._isBounds = true;
                if (this._isLoaded) {
                    if ((value.x !== this.bounds.x) || (value.y !== this.bounds.y) ||
                        (value.width !== this.bounds.width) || (value.height !== this.bounds.height)) {
                        var size = this._page.size;
                        if (size) {
                            var y = size[1] - (value.y + value.height);
                            var height = y + value.height;
                            this._dictionary.update('Rect', [value.x, y, value.x + value.width, height]);
                            this._bounds = value;
                            this._isChanged = true;
                        }
                    }
                }
                else {
                    this._bounds = value;
                    this._isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "caption", {
        /**
         * Gets the caption of the annotation.
         *
         * @returns {PdfAnnotationCaption} Annotation caption.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the caption of the annotation.
         * let caption: PdfAnnotationCaption = annotation.caption;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._caption === 'undefined') {
                var value = new PdfAnnotationCaption();
                value._dictionary = this._dictionary;
                if (this._dictionary && this._dictionary.has('Cap')) {
                    value._cap = this._dictionary.get('Cap');
                }
                if (this._dictionary && this._dictionary.has('CP')) {
                    var capType = this._dictionary.get('CP');
                    if (capType) {
                        value._type = capType.name === 'Top' ? _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.inline;
                    }
                }
                if (this._dictionary && this._dictionary.has('CO')) {
                    value._offset = this._dictionary.getArray('CO');
                }
                this._caption = value;
            }
            return this._caption;
        },
        /**
         * Sets the caption of the annotation.
         *
         * @param {PdfAnnotationCaption} value Annottion caption.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Create and set annotation caption values
         * annotation.caption = new PdfAnnotationCaption(true, PdfLineCaptionType.inline, [10, 10]);
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            var current = this.caption;
            if (value) {
                if (!this._isLoaded || value.cap !== current.cap) {
                    this._caption.cap = value.cap;
                }
                if (!this._isLoaded || value.type !== current.type) {
                    this._caption.type = value.type;
                }
                if (!this._isLoaded || value.offset !== current.offset) {
                    this._caption.offset = value.offset;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "opacity", {
        /**
         * Gets the opacity of the annotation.
         *
         * @returns {number} Opacity in between 0 t0 1.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the opacity of the annotation.
         * let opacity: number = annotation.opacity;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary && this._dictionary.has('CA')) {
                var opacity = this._dictionary.get('CA');
                if (typeof opacity !== 'undefined') {
                    this._opacity = opacity;
                }
            }
            return this._opacity;
        },
        /**
         * Sets the opacity of the annotation.
         *
         * @param {number} value opacity in between 0 t0 1.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the opacity of the annotation.
         * annotation.opacity = 0.5;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && !Number.isNaN(value)) {
                if (value >= 0 && value <= 1) {
                    this._dictionary.update('CA', value);
                    this._opacity = value;
                }
                else if (value < 0) {
                    this._dictionary.update('CA', 0);
                }
                else {
                    this._dictionary.update('CA', 1);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "subject", {
        /**
         * Gets the subject of the annotation.
         *
         * @returns {string} Subject.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the subject of the annotation.
         * let subject: string = annotation.subject;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._subject === 'undefined') {
                this._subject = this._dictionary.get('Subject', 'Subj');
            }
            return this._subject;
        },
        /**
         * Sets the subject of the annotation.
         *
         * @param {string} value Subject.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the subject of the annotation.
         * annotation.subject = 'Line Annotation';
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string' && this.subject !== value) {
                this._dictionary.update('Subj', value);
                this._subject = value;
                if (this._dictionary.has('Subject')) {
                    this._dictionary.update('Subject', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "name", {
        /**
         * Gets the name of the annotation.
         *
         * @returns {string} Name.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the name of the annotation.
         * let name: string = annotation.name;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._name === 'undefined' && this._dictionary.has('NM')) {
                this._name = this._dictionary.get('NM');
            }
            return this._name;
        },
        /**
         * Sets the name of the annotation.
         *
         * @param {string} value Name.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the name of the annotation.
         * annotation.name = 'LineAnnotation';
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string') {
                this._dictionary.update('NM', value);
                this._name = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "text", {
        /**
         * Gets the text of the annotation.
         *
         * @returns {string} Text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the text of the annotation.
         * let text: string = annotation.text;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._text === 'undefined' && this._dictionary.has('Contents')) {
                this._text = this._dictionary.get('Contents');
            }
            return this._text;
        },
        /**
         * Sets the text of the annotation.
         *
         * @param {string} value Text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the text of the annotation.
         * annotation.text = ‘LineAnnotation’;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string') {
                this._text = this._dictionary.get('Contents');
                if (value !== this._text) {
                    this._dictionary.update('Contents', value);
                    this._text = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "rotationAngle", {
        /**
         * Gets the rotation of the annotation.
         *
         * @returns {PdfRotationAngle} Rotation angle.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the rotation angle of the annotation.
         * let rotationAngle: PdfRotationAngle = annotation.rotationAngle;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._rotate === 'undefined' && this._dictionary && this._dictionary.has('Rotate')) {
                this._rotate = (this._dictionary.get('Rotate') / 90);
            }
            if (this._rotate === null || typeof this._rotate === 'undefined') {
                this._rotate = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0;
            }
            return this._rotate;
        },
        /**
         * Sets the rotation of the annotation.
         *
         * @param {PdfRotationAngle} value rotation angle.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the rotation angle of the annotation.
         * annotation.rotationAngle = PdfRotationAngle.angle180;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            var prevRotate = this.rotationAngle;
            if (typeof value !== 'undefined' && typeof prevRotate !== 'undefined') {
                value = ((value + prevRotate) % 4);
            }
            this._dictionary.update('Rotate', value * 90);
            this._isRotated = true;
            this._rotate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "rotate", {
        /**
         * Gets the rotation angle of the annotation (Read only).
         *
         * @returns {number} Rotation angle.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * //Get the rotation angle of the annotation.
         * let rotate: number = annotation.rotate;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            var angle = this._getRotationAngle();
            if (angle < 0) {
                angle = 360 + angle;
            }
            if (angle >= 360) {
                angle = 360 - angle;
            }
            return angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "flattenPopups", {
        /**
         * Gets the boolean flag indicating whether annotation's popup have been flattened or not.
         *
         * @returns {boolean} Flatten Popup.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the boolean flag indicating whether annotation's popup have been flattened or not.
         * let flattenPopups: boolean = annotation.flattenPopups;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._isFlattenPopups;
        },
        /**
         * Sets the boolean flag indicating whether the annotation’s popup have been flattened or not.
         *
         * @param {boolean} value Flatten Popup.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the boolean flag indicating whether the annotation’s popup have been flattened or not.
         * annotation.flattenPopups = false;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._isFlattenPopups = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "flatten", {
        /**
         * Gets the boolean flag indicating whether the annotation have been flattened or not.
         *
         * @returns {boolean} Flatten.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the boolean flag indicating whether the annotation have been flattened or not.
         * let flatten: boolean = annotation.flatten;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._flatten;
        },
        /**
         * Sets the boolean flag indicating whether the annotation have been flattened or not.
         *
         * @param {boolean} value Flatten.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the boolean flag indicating whether the annotation have been flattened or not.
         * annotation.flatten = true;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._flatten = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "_hasFlags", {
        get: function () {
            return this._dictionary.has('F');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "_degreeToRadian", {
        get: function () {
            if (typeof this._ratio === 'undefined') {
                this._ratio = Math.PI / 180;
            }
            return this._ratio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotation.prototype, "layer", {
        /**
         * Gets the `PdfLayer` of the annotation.
         *
         * @returns {PdfLayer} PDF layer to the annotation.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Get the first page of the document
         * let page: PdfPage = document.getPage(0);
         * // Access the first annotation on the page
         * let annotation: PdfAnnotation = page.annotations.at(0);
         * // Get the layer of the annotation
         * let layer: PdfLayer = annotation.layer;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (!this._layer) {
                this._layer = this._getDocumentLayer();
            }
            return this._layer;
        },
        /**
         * Set the `PdfLayer` to the annotation.
         *
         * @param {PdfLayer} value PDF layer to the annotation.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Get the first page of the document
         * let page: PdfPage = document.getPage(0);
         * // Access the collection of layers in the document
         * let layers: PdfLayerCollection = document.layers;
         * // Add a new layer to the document with the name 'Layer1'
         * let layer: PdfLayer = layers.add('Layer1');
         * // Access the first annotation on the page
         * let annotation: PdfAnnotation = page.annotations.at(0);
         * // Assign the layer to the annotation
         * annotation.layer = layer;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!this._layer) {
                this._layer = value;
                if (this._layer) {
                    this._dictionary.update('OC', this._layer._referenceHolder);
                }
                else {
                    delete this._dictionary._map['OC'];
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the boolean flag to create a new appearance stream for annotations.
     *
     * @param {boolean} value Set appearance.
     * @returns {void} Nothing.
     *
     * ```typescript
     * // Load an existing PDF document
     * let document: PdfDocument = new PdfDocument(data, password);
     * // Set the boolean flag to create a new appearance stream for annotations.
     * document.getPage(0).annotations.at(0).setAppearance(true);
     * // Save the document
     * document.save('output.pdf');
     * // Destroy the document
     * document.destroy();
     * ```
     */
    PdfAnnotation.prototype.setAppearance = function (value) {
        this._setAppearance = value;
        if (value) {
            this._dictionary._updated = true;
        }
    };
    /**
     * Gets the values associated with the specified key.
     *
     * @param {string} name Key.
     * @returns {string[]} Values associated with the key.
     *
     * ```typescript
     * // Load an existing PDF document
     * let document: PdfDocument = new PdfDocument(data, password);
     * // Gets the values associated with the key 'Author'.
     * let values: string[] = document.getPage(0).annotations.at(0).getValues('Author');
     * // Save the document
     * document.save('output.pdf');
     * // Destroy the document
     * document.destroy();
     * ```
     */
    PdfAnnotation.prototype.getValues = function (name) {
        var values = [];
        if (this._dictionary && this._dictionary.has(name)) {
            var value = this._dictionary.get(name); // eslint-disable-line
            if (Array.isArray(value)) {
                value = this._dictionary.getArray(name);
                value.forEach(function (element) {
                    if (element instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG) {
                        values.push(element.name);
                    }
                    else if (typeof element === 'string') {
                        values.push(element);
                    }
                    else if (typeof element === 'number') {
                        values.push(element.toString());
                    }
                });
            }
            else if (value instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG) {
                values.push(value.name);
            }
            else if (typeof value === 'string') {
                values.push(value);
            }
            else {
                throw new Error('PdfException: ' + name + ' is not found');
            }
        }
        else {
            throw new Error('PdfException: ' + name + ' is not found');
        }
        return values;
    };
    /**
     * Sets the values associated with the specified key.
     *
     * @param {string} name Key.
     * @param {string} value Value associated with the key..
     * @returns {void} Nothing.
     *
     * ```typescript
     * // Load an existing PDF document
     * let document: PdfDocument = new PdfDocument(data, password);
     * // Access the annotation at index 0
     * let annotation: PdfAnnotation = document.getPage(0).annotations.at(0);
     * // Set Unknown state and model
     * annotation.setValues('State', 'StateModel');
     * annotation.setValues('StateModel', 'CustomState');
     * // Save the document
     * document.save('output.pdf');
     * // Destroy the document
     * document.destroy();
     * ```
     */
    PdfAnnotation.prototype.setValues = function (name, value) {
        if (name && name !== '' && value && value !== '') {
            this._dictionary.update(name, value);
        }
    };
    //Implementation
    PdfAnnotation.prototype._initialize = function (page, dictionary) {
        this._page = page;
        this._crossReference = page._crossReference;
        if (dictionary) {
            this._dictionary = dictionary;
        }
        if (!this._isLoaded) {
            this._dictionary.set('P', this._page._ref);
            this._dictionary.assignXref(this._crossReference);
        }
    };
    PdfAnnotation.prototype._getRotationAngle = function () {
        var angle = 0;
        if (this._dictionary && !(this instanceof PdfRectangleAnnotation) &&
            !(this instanceof PdfPolygonAnnotation)) {
            if (this._dictionary.has('Rotate')) {
                angle = this._dictionary.get('Rotate');
            }
            else if (this._dictionary.has('Rotation')) {
                angle = this._dictionary.get('Rotation');
            }
        }
        return angle;
    };
    PdfAnnotation.prototype._getMediaOrCropBox = function (page) {
        var cropOrMediaBox;
        if (page && page._pageDictionary && page._pageDictionary.has('MediaBox')) {
            cropOrMediaBox = page._pageDictionary.get('MediaBox');
        }
        else if (page && page._pageDictionary && page._pageDictionary.has('CropBox')) {
            cropOrMediaBox = page._pageDictionary.get('CropBox');
        }
        return cropOrMediaBox;
    };
    PdfAnnotation.prototype._getBoundsValue = function (linePoints, borderWidth) {
        var count = 0;
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(linePoints)) {
            count = linePoints.length;
        }
        var x = [];
        var y = [];
        if (count > 0) {
            linePoints.forEach(function (value, i) {
                if (i % 2 === 0) {
                    x.push(value);
                }
                else {
                    y.push(value);
                }
            });
        }
        x.sort(function (a, b) { return a > b ? 1 : -1; });
        y.sort(function (a, b) { return a > b ? 1 : -1; });
        if (borderWidth) {
            var extraPadding = this.border.width * 2;
            return { x: x[0] - extraPadding, y: y[0] - extraPadding, width: x[x.length - 1] - x[0] + (2 * extraPadding),
                height: y[y.length - 1] - y[0] + (2 * extraPadding) };
        }
        else {
            return { x: x[0], y: y[0], width: x[x.length - 1] - x[0], height: y[y.length - 1] - y[0] };
        }
    };
    PdfAnnotation.prototype._validateTemplateMatrix = function (dictionary, template) {
        var isRotatedMatrix = false;
        var isValidMatrix = true;
        if (template === null || typeof template === 'undefined') {
            if (dictionary && dictionary.has('Matrix')) {
                var matrix = dictionary.getArray('Matrix');
                if (matrix && matrix.length > 3) {
                    if (typeof matrix[0] !== 'undefined' &&
                        typeof matrix[1] !== 'undefined' &&
                        typeof matrix[2] !== 'undefined' &&
                        typeof matrix[3] !== 'undefined') {
                        if (matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 1) {
                            isRotatedMatrix = true;
                            var locationX = 0;
                            var locationY = 0;
                            var templateX = 0;
                            var templateY = 0;
                            if (matrix.length > 4) {
                                templateX = -matrix[4];
                                if (matrix.length > 5) {
                                    templateY = -matrix[5];
                                }
                            }
                            var annotationBounds = void 0;
                            if (this._dictionary && this._dictionary.has('Rect')) {
                                annotationBounds = this._dictionary.getArray('Rect');
                                if (annotationBounds && annotationBounds.length > 1) {
                                    locationX = annotationBounds[0];
                                    locationY = annotationBounds[1];
                                }
                            }
                            if (!(locationX === templateX && locationY === templateY) && templateX === 0 && templateY === 0) {
                                this._locationDisplaced = true;
                            }
                        }
                    }
                }
            }
            else {
                isRotatedMatrix = true;
            }
            return isRotatedMatrix;
        }
        else {
            var point = this.bounds;
            if (dictionary && dictionary.has('Matrix')) {
                var box = dictionary.getArray('BBox');
                var matrix = dictionary.getArray('Matrix');
                if (matrix && box && matrix.length > 3 && box.length > 2) {
                    if (typeof matrix[0] !== 'undefined' &&
                        typeof matrix[1] !== 'undefined' &&
                        typeof matrix[2] !== 'undefined' &&
                        typeof matrix[3] !== 'undefined') {
                        if (matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 1) {
                            if (typeof box[0] !== 'undefined' &&
                                typeof box[1] !== 'undefined' &&
                                typeof box[2] !== 'undefined' &&
                                typeof box[3] !== 'undefined') {
                                if (this._page && box[0] !== -(matrix[4]) && box[1] !== -(matrix[5]) ||
                                    (box[0] === 0 && -matrix[4] === 0)) {
                                    var graphics = this._page.graphics;
                                    var state = graphics.save();
                                    if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                                        graphics.setTransparency(this._opacity);
                                    }
                                    point.x -= box[0];
                                    point.y += box[1];
                                    graphics.drawTemplate(template, point);
                                    graphics.restore(state);
                                    this._page.annotations.remove(this);
                                    isValidMatrix = false;
                                }
                            }
                        }
                    }
                }
            }
            return isValidMatrix;
        }
    };
    PdfAnnotation.prototype._flattenAnnotationTemplate = function (template, isNormalMatrix, isLineAnnotation) {
        if (isLineAnnotation === void 0) { isLineAnnotation = false; }
        this._page._isLineAnnotation = isLineAnnotation;
        var graphics = this._page.graphics;
        var currentBounds = this.bounds;
        if (this instanceof PdfLineAnnotation && this._dictionary && !this._dictionary.has('AP')) {
            if (this._isLoaded) {
                currentBounds = this._bounds;
            }
            else {
                if (this instanceof PdfLineAnnotation && !this.measure) {
                    currentBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._toRectangle */ .U$)([this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height]);
                }
                else {
                    if (this._setAppearance && this.flatten && !this.measure) {
                        currentBounds = this._bounds;
                    }
                    else {
                        currentBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._toRectangle */ .U$)([this.bounds.x, this.bounds.y,
                            this.bounds.width, this.bounds.height]);
                    }
                }
            }
            if (this._page) {
                var size = this._page.size;
                var mBox = this._page.mediaBox;
                var cropBox = this._page.cropBox;
                if (cropBox && Array.isArray(cropBox) && cropBox.length === 4 && this._page._pageDictionary.has('CropBox') &&
                    !this._isLoaded && !this._flatten) {
                    if ((cropBox[0] !== 0 || cropBox[1] !== 0 || size[0] === cropBox[2] ||
                        size[1] === cropBox[3]) && (currentBounds.x !== cropBox[0])) {
                        currentBounds.x -= cropBox[0];
                        currentBounds.y = cropBox[3] - (currentBounds.y + currentBounds.height);
                    }
                    else {
                        currentBounds.y = size[1] - (currentBounds.y + currentBounds.height);
                    }
                }
                else if (mBox && Array.isArray(mBox) && mBox.length === 4 && this._page._pageDictionary.has('MediaBox') &&
                    !this._isLoaded && !this._flatten) {
                    if (mBox[0] > 0 || mBox[1] > 0 || size[0] === mBox[2] || size[1] === mBox[3]) {
                        currentBounds.x -= mBox[0];
                        currentBounds.y = mBox[3] - (currentBounds.y + currentBounds.height);
                    }
                    else {
                        currentBounds.y = size[1] - (currentBounds.y + currentBounds.height);
                    }
                }
                else {
                    if (this instanceof PdfLineAnnotation && !this.measure && !this._isLoaded) {
                        currentBounds.y = size[1] - (currentBounds.y + currentBounds.height);
                    }
                    else {
                        if (this._setAppearance && this.flatten && !this.measure) {
                            currentBounds = this.bounds;
                        }
                        else if (!this._isLoaded) {
                            currentBounds.y = size[1] - (currentBounds.y + currentBounds.height);
                        }
                    }
                }
            }
            else {
                currentBounds.y = currentBounds.y + currentBounds.height;
            }
        }
        if (typeof currentBounds !== 'undefined' && currentBounds !== null) {
            var state = graphics.save();
            this._page._needInitializeGraphics = true;
            if (this._type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.rubberStampAnnotation) {
                var needScale = true;
                if (this._dictionary && this._dictionary.has('AP')) {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        if (this.rotate === 270 && this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270
                            && appearanceStream && appearanceStream.dictionary
                            && appearanceStream.dictionary.has('Matrix')) {
                            var matrix = appearanceStream.dictionary.getArray('Matrix');
                            if (matrix && matrix.length === 6 && matrix[4] === 0 && matrix[5] !== 0) {
                                needScale = false;
                            }
                        }
                    }
                    if (!isNormalMatrix && this.rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180 && needScale) {
                        template._isAnnotationTemplate = true;
                        template._needScale = true;
                    }
                }
            }
            if (!isNormalMatrix && this._type !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.rubberStampAnnotation) {
                template._isAnnotationTemplate = true;
                template._needScale = true;
            }
            if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                graphics.setTransparency(this._opacity);
            }
            var bounds = this._calculateTemplateBounds(currentBounds, this._page, template, isNormalMatrix, graphics);
            if (this._type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.rubberStampAnnotation) {
                var size = void 0;
                var location_1;
                if (this.rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0) {
                    size = [bounds.width, bounds.height];
                    location_1 = [bounds.x, bounds.y];
                }
                else {
                    size = template._size;
                    location_1 = [bounds.x, bounds.y];
                }
                var isRotatedMatrix = false;
                if (this.rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 && template._content) {
                    if (template._content.dictionary.has('Matrix')) {
                        var matrix = template._content.dictionary.getArray('Matrix');
                        if (matrix && matrix.length === 6 && matrix[4] === 0 && matrix[5] !== 0) {
                            isRotatedMatrix = true;
                        }
                    }
                }
                var scaleX = (template._size[0] > 0) ? bounds.width / template._size[0] : 1;
                var scaleY = (template._size[1] > 0) ? bounds.height / template._size[1] : 1;
                var needScale = !(Math.trunc(scaleX * 1000) / 1000 === 1 && Math.trunc(scaleY * 1000) / 1000 === 1);
                if (this.rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 && isRotatedMatrix) {
                    if (this.rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90) {
                        if (this._page && this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270) {
                            if (needScale && !(bounds.x === 0 && bounds.y === 0)) {
                                location_1[0] += (size[0] - size[1]);
                                location_1[1] += size[0];
                            }
                            else {
                                location_1[0] += size[1];
                                location_1[1] += (size[0] - size[1]) + (size[0] - size[1]);
                            }
                        }
                        else if (!needScale) {
                            location_1[0] += size[1];
                        }
                    }
                    else if (this.rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270) {
                        if (this._page && this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270) {
                            if (needScale && template._isAnnotationTemplate) {
                                location_1[1] = bounds.y - bounds.width;
                            }
                            else if (needScale) {
                                location_1[1] += (size[0] - size[1]);
                            }
                        }
                        else {
                            if (!needScale && !(bounds.x === 0 && bounds.y === 0)) {
                                location_1[1] += -(size[0]);
                            }
                            else {
                                location_1[1] += -(size[0] - size[1]);
                            }
                        }
                    }
                    else if (this.rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180) {
                        location_1[0] += size[0];
                        location_1[1] += -(size[1]);
                    }
                }
            }
            if (!template._content.dictionary.has('Matrix') && template._content.dictionary.has('BBox')) {
                var box = template._content.dictionary.getArray('BBox');
                bounds.x -= box[0];
                bounds.y += box[1];
            }
            if (this instanceof PdfAngleMeasurementAnnotation && !this._isLoaded) {
                bounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._calculateBounds */ .lN)(this._dictionary, this._page);
            }
            graphics.drawTemplate(template, bounds);
            graphics.restore(state);
        }
        this._page.annotations.remove(this);
    };
    PdfAnnotation.prototype._calculateTemplateBounds = function (bounds, page, template, isNormalMatrix, graphics) {
        var annotationBounds = bounds;
        var x = bounds.x;
        var y = bounds.y;
        var width = bounds.width;
        var height = bounds.height;
        if (!isNormalMatrix) {
            var rect = this._dictionary.getArray('Rect');
            if (rect) {
                annotationBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._toRectangle */ .U$)(rect);
            }
        }
        if (typeof page !== 'undefined') {
            var graphicsRotation = this._obtainGraphicsRotation(graphics._matrix);
            if (graphicsRotation === 90) {
                graphics.translateTransform(template._size[1], 0);
                graphics.rotateTransform(90);
                if (isNormalMatrix || (typeof this._rotate !== 'undefined' && this._rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180)) {
                    x = bounds.x;
                    if (!this._locationDisplaced) {
                        y = -(page.size[1] - bounds.y - bounds.height);
                    }
                    else if (page._origin && page._o[1] !== 0) {
                        y = bounds.y + bounds.height;
                    }
                    else {
                        y = -(page.size[1] - (bounds.height + bounds.y) + (bounds.height - template._size[1]));
                    }
                }
                else {
                    x = bounds.x;
                    y = -(page.size[1] - (bounds.height + bounds.y) + (bounds.width - template._size[1]));
                    width = bounds.height;
                    height = bounds.width;
                }
            }
            else if (graphicsRotation === 180) {
                graphics.translateTransform(template._size[0], template._size[1]);
                graphics.rotateTransform(180);
                if (isNormalMatrix) {
                    x = -(page.size[0] - (bounds.x + bounds.width));
                    y = -(page.size[1] - bounds.y - bounds.height);
                }
                else {
                    x = -(page.size[0] - (bounds.x + template._size[0]));
                    y = -(page.size[1] - bounds.y - template._size[1]);
                    if (typeof this.rotationAngle !== 'undefined' &&
                        (this._rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90 ||
                            this._rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270)) {
                        y = (-(page.size[1] - bounds.y - template._size[1]) - (bounds.width - bounds.height));
                        width = bounds.height;
                        height = bounds.width;
                    }
                }
            }
            else if (graphicsRotation === 270) {
                graphics.translateTransform(0, template._size[0]);
                graphics.rotateTransform(270);
                if (isNormalMatrix || (typeof this.rotationAngle !== 'undefined' && this._rotate === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180)) {
                    x = -(page.size[0] - bounds.x - bounds.width);
                    y = bounds.y;
                }
                else {
                    x = -(page.size[0] - annotationBounds.x - template._size[0]);
                    var matrix = template._content.dictionary.getArray('Matrix');
                    var box = template._content.dictionary.getArray('BBox');
                    if (matrix && box && matrix[5] !== box[2]) {
                        y = bounds.y - (bounds.height - bounds.width);
                    }
                    else {
                        y = (bounds.y + bounds.height) - bounds.width;
                    }
                    width = bounds.height;
                    height = bounds.width;
                }
            }
            else if (graphicsRotation === 0) {
                if (!isNormalMatrix &&
                    (typeof this.rotationAngle !== 'undefined' &&
                        (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90 ||
                            this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270))) {
                    x = bounds.x;
                    y = (bounds.y + bounds.height - bounds.width);
                    width = bounds.height;
                    height = bounds.width;
                }
            }
        }
        return { x: x, y: y, width: width, height: height };
    };
    PdfAnnotation.prototype._obtainGraphicsRotation = function (matrix) {
        var radians = Math.atan2(matrix._matrix._elements[2], matrix._matrix._elements[0]);
        var angle = Math.round(radians * 180 / Math.PI);
        switch (angle) {
            case -90:
                angle = 90;
                break;
            case -180:
                angle = 180;
                break;
            case 90:
                angle = 270;
                break;
        }
        return angle;
    };
    PdfAnnotation.prototype._removeAnnotation = function (page, annotation) {
        if (page && annotation) {
            page.annotations.remove(annotation);
            page._pageDictionary._updated = true;
        }
    };
    PdfAnnotation.prototype._drawCloudStyle = function (graphics, brush, pen, radius, overlap, points, isAppearance) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(points) && this._isClockWise(points)) {
            points.reverse();
        }
        var circles = [];
        var circleOverlap = 2 * radius * overlap;
        var previousPoint;
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(points)) {
            previousPoint = points[points.length - 1];
        }
        else {
            points = [];
        }
        for (var i = 0; i < points.length; i++) {
            var currentPoint = points[i];
            var dx = currentPoint[0] - previousPoint[0];
            var dy = currentPoint[1] - previousPoint[1];
            var length_1 = Math.sqrt(dx * dx + dy * dy);
            dx = dx / length_1;
            dy = dy / length_1;
            for (var a = 0; a + 0.1 * circleOverlap < length_1; a += circleOverlap) {
                var cur = new _CloudStyleArc();
                cur.point = [previousPoint[0] + a * dx, previousPoint[1] + a * dy];
                circles.push(cur);
            }
            previousPoint = currentPoint;
        }
        var previousCurvedStyleArc = circles[circles.length - 1];
        for (var i = 0; i < circles.length; i++) {
            var currentCurvedStyleArc = circles[i];
            var angle = this._getIntersectionDegrees(previousCurvedStyleArc.point, currentCurvedStyleArc.point, radius);
            previousCurvedStyleArc.endAngle = angle[0];
            currentCurvedStyleArc.startAngle = angle[1];
            previousCurvedStyleArc = currentCurvedStyleArc;
        }
        var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        for (var i = 0; i < circles.length; i++) {
            var current = circles[i];
            var startAngle = current.startAngle % 360;
            var endAngle = current.endAngle % 360;
            var sweepAngel = 0;
            if (startAngle > 0 && endAngle < 0) {
                sweepAngel = (180 - startAngle) + (180 - (endAngle < 0 ? -endAngle : endAngle));
            }
            else if (startAngle < 0 && endAngle > 0) {
                sweepAngel = -startAngle + endAngle;
            }
            else if (startAngle > 0 && endAngle > 0) {
                var difference = 0;
                if (startAngle > endAngle) {
                    difference = startAngle - endAngle;
                    sweepAngel = 360 - difference;
                }
                else {
                    sweepAngel = endAngle - startAngle;
                }
            }
            else if (startAngle < 0 && endAngle < 0) {
                var difference = 0;
                if (startAngle > endAngle) {
                    difference = startAngle - endAngle;
                    sweepAngel = 360 - difference;
                }
                else {
                    sweepAngel = -(startAngle + (-endAngle));
                }
            }
            if (sweepAngel < 0) {
                sweepAngel = -sweepAngel;
            }
            current.endAngle = sweepAngel;
            path.addArc(current.point[0] - radius, current.point[1] - radius, 2 * radius, 2 * radius, startAngle, sweepAngel);
        }
        path.closeFigure();
        var tempPoints = [];
        if (isAppearance) {
            tempPoints = path._points.map(function (point) { return [point[0], -point[1]]; });
        }
        var pdfpath;
        if (isAppearance) {
            pdfpath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            pdfpath._points = tempPoints;
            pdfpath._pathTypes = path._pathTypes;
        }
        else {
            pdfpath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            pdfpath._points = path._points;
            pdfpath._pathTypes = path._pathTypes;
        }
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(brush)) {
            graphics.drawPath(pdfpath, brush);
        }
        var incise = 180 / (Math.PI * 3);
        path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        for (var i = 0; i < circles.length; i++) {
            var current = circles[i];
            path.addArc(current.point[0] - radius, current.point[1] - radius, 2 * radius, 2 * radius, current.startAngle, current.endAngle + incise);
        }
        path.closeFigure();
        tempPoints = [];
        if (isAppearance) {
            tempPoints = path._points.map(function (point) { return [point[0], -point[1]]; });
        }
        if (isAppearance) {
            pdfpath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            pdfpath._points = tempPoints;
            pdfpath._pathTypes = path._pathTypes;
        }
        else {
            pdfpath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            pdfpath._points = path._points;
            pdfpath._pathTypes = path._pathTypes;
        }
        graphics.drawPath(pdfpath, pen);
    };
    PdfAnnotation.prototype._isClockWise = function (points) {
        var sum = 0;
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(points)) {
            for (var i = 0; i < points.length; i++) {
                var first = points[i];
                var second = points[(i + 1) % points.length];
                sum += (second[0] - first[0]) * (second[1] + first[1]);
            }
        }
        return sum > 0;
    };
    PdfAnnotation.prototype._getIntersectionDegrees = function (first, second, radius) {
        var dx = second[0] - first[0];
        var dy = second[1] - first[1];
        var length = Math.sqrt(dx * dx + dy * dy);
        var a = 0.5 * length / radius;
        if (a < -1) {
            a = -1;
        }
        else if (a > 1) {
            a = 1;
        }
        var radian = Math.atan2(dy, dx);
        var cosvalue = Math.acos(a);
        return [(radian - cosvalue) * (180 / Math.PI), (Math.PI + radian + cosvalue) * (180 / Math.PI)];
    };
    PdfAnnotation.prototype._obtainStyle = function (borderPen, rectangle, borderWidth, parameter) {
        var dash = this.border.dash;
        if (dash && dash.length > 0) {
            var isDash = false;
            var dashPattern = dash.slice();
            isDash = dash.some(function (value) { return value > 0; });
            if (isDash && this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
                borderPen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dash;
                borderPen._dashPattern = dashPattern;
            }
        }
        if (parameter) {
            if (parameter instanceof _PaintParameter) {
                if (!this._isBounds && this._dictionary.has('RD')) {
                    var array = this._dictionary.getArray('RD');
                    if (array) {
                        rectangle[0] = rectangle[0] + array[0];
                        rectangle[1] = rectangle[1] + borderWidth + array[1];
                        rectangle[2] = rectangle[2] - (array[0] + array[2]);
                        rectangle[3] = rectangle[3] - (array[1] + array[3]);
                    }
                }
                else {
                    rectangle[0] = rectangle[0] + borderWidth;
                    rectangle[1] = rectangle[1] + borderWidth;
                    rectangle[2] = rectangle[2] - this.border.width;
                    rectangle[3] = rectangle[3] - this.border.width;
                }
                parameter.bounds = rectangle;
            }
            else {
                if (parameter.intensity !== 0 && parameter.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                    var radius = parameter.intensity * 5;
                    rectangle[0] = rectangle[0] + radius + borderWidth;
                    rectangle[1] = rectangle[1] + radius + borderWidth;
                    rectangle[2] = rectangle[2] - (2 * radius) - 2 * borderWidth;
                    rectangle[3] = rectangle[3] - (2 * radius) - 2 * borderWidth;
                }
                else {
                    rectangle[0] = rectangle[0] + borderWidth;
                    rectangle[1] = rectangle[1] + borderWidth;
                    rectangle[2] = rectangle[2] - this.border.width;
                    rectangle[3] = this.bounds.height - this.border.width;
                }
            }
        }
        else {
            if (!this._isBounds && this._dictionary && this._dictionary.has('RD')) {
                var array = this._dictionary.getArray('RD');
                if (array) {
                    rectangle[0] = rectangle[0] + array[0];
                    rectangle[1] = rectangle[1] + borderWidth + array[1];
                    rectangle[2] = rectangle[2] - (2 * array[2]);
                    rectangle[3] = rectangle[3] - this.border.width;
                    rectangle[3] = rectangle[3] - (2 * array[3]);
                }
            }
            else {
                rectangle[1] = rectangle[1] + borderWidth;
                rectangle[3] = this.bounds.height - this.border.width;
            }
        }
        return rectangle;
    };
    PdfAnnotation.prototype._createRectangleAppearance = function (borderEffect) {
        var width = this.border.width;
        var rdArray = this._dictionary.getArray('RD');
        if (!rdArray && borderEffect !== null && typeof borderEffect !== 'undefined' && borderEffect.intensity !== 0 && borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
            var cloudRectangle = { x: this.bounds.x - borderEffect.intensity * 5 - width / 2,
                y: this.bounds.y - borderEffect.intensity * 5 - width / 2,
                width: this.bounds.width + borderEffect.intensity * 10 + width,
                height: this.bounds.height + borderEffect.intensity * 10 + width };
            var radius = borderEffect.intensity * 5;
            rdArray = [radius + width / 2, radius + width / 2, radius + width / 2, radius + width / 2];
            this._dictionary.set('RD', rdArray);
            this.bounds = cloudRectangle;
        }
        if (!this._isBounds && rdArray) {
            var cloudRectangle = { x: this.bounds.x + rdArray[0],
                y: this.bounds.y + rdArray[1],
                width: this.bounds.width - rdArray[2] * 2,
                height: this.bounds.height - rdArray[3] * 2 };
            if (borderEffect.intensity !== 0 && borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                cloudRectangle.x = cloudRectangle.x - borderEffect.intensity * 5 - width / 2;
                cloudRectangle.y = cloudRectangle.y - borderEffect.intensity * 5 - width / 2;
                cloudRectangle.width = cloudRectangle.width + borderEffect.intensity * 10 + width;
                cloudRectangle.height = cloudRectangle.height + borderEffect.intensity * 10 + width;
                var radius = borderEffect.intensity * 5;
                this._dictionary.set('RD', [radius + width / 2, radius + width / 2, radius + width / 2, radius + width / 2]);
            }
            else {
                delete this._dictionary._map.RD;
            }
            this.bounds = cloudRectangle;
        }
        var borderWidth = width / 2;
        var nativeRectangle = [0, 0, this.bounds.width, this.bounds.height];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
        if (borderEffect.intensity !== 0 && borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
            template._writeTransformation = false;
        }
        var graphics = template.graphics;
        var parameter = new _PaintParameter();
        if (this.innerColor) {
            parameter.backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        if (width > 0 && this.color) {
            parameter.borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this._color, width);
        }
        if (this.color) {
            parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._color);
        }
        var rectangle = this._obtainStyle(parameter.borderPen, nativeRectangle, borderWidth, borderEffect);
        if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
            graphics.save();
            graphics.setTransparency(this._opacity);
        }
        if (borderEffect.intensity !== 0 && borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
            this._drawRectangleAppearance(rectangle, graphics, parameter, borderEffect.intensity);
        }
        else {
            graphics.drawRectangle(rectangle[0], rectangle[1], rectangle[2], rectangle[3], parameter.borderPen, parameter.backBrush);
        }
        if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
            graphics.restore();
        }
        return template;
    };
    PdfAnnotation.prototype._drawRectangleAppearance = function (rectangle, graphics, parameter, intensity) {
        var graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(rectangle) && rectangle.length === 4) {
            graphicsPath.addRectangle(rectangle[0], rectangle[1], rectangle[2], rectangle[3]);
        }
        var radius = 0;
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(intensity)) {
            radius = intensity * 4.25;
        }
        if (radius > 0) {
            var points = graphicsPath._points.map(function (point) { return [point[0], -point[1]]; });
            graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            graphicsPath.addPolygon(points);
            this._drawCloudStyle(graphics, parameter.backBrush, parameter.borderPen, radius, 0.833, graphicsPath._points, false);
        }
        else {
            graphics.drawRectangle(rectangle[0], rectangle[1], rectangle[2], rectangle[3], parameter.borderPen, parameter.backBrush);
        }
    };
    PdfAnnotation.prototype._createCircleAppearance = function () {
        var nativeBounds = [0, 0, this.bounds.width, this.bounds.height];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeBounds, this._crossReference);
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
        if (this._dictionary.has('BE')) {
            template._writeTransformation = false;
        }
        if (typeof this.color === 'undefined') {
            this._isTransparentColor = true;
        }
        var graphics = template.graphics;
        var width = this.border.width;
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.color, width);
        if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
            borderPen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dash;
            borderPen._dashPattern = [3, 1];
        }
        else if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dot) {
            borderPen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dot;
            borderPen._dashPattern = [1, 1];
        }
        var parameter = new _PaintParameter();
        if (this.innerColor) {
            parameter.backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        if (width > 0) {
            parameter.borderPen = borderPen;
        }
        if (this.color) {
            parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._color);
        }
        parameter.borderWidth = width;
        var borderWidth = width / 2;
        var rectangle = this._obtainStyle(borderPen, nativeBounds, borderWidth);
        if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
            graphics.save();
            graphics.setTransparency(this._opacity);
        }
        if (this._dictionary.has('BE')) {
            this._drawCircleAppearance(rectangle, borderWidth, graphics, parameter);
        }
        else {
            graphics.drawEllipse(rectangle[0] + borderWidth, rectangle[1], rectangle[2] - width, rectangle[3], parameter.borderPen, parameter.backBrush);
        }
        if (typeof this._opacity !== 'undefined' && this._opacity < 1) {
            graphics.restore();
        }
        return template;
    };
    PdfAnnotation.prototype._drawCircleAppearance = function (rectangle, borderWidth, graphics, parameter) {
        var radius = 0;
        if (this._dictionary.has('RD')) {
            var array = this._dictionary.getArray('RD');
            if (array && array.length > 0) {
                radius = array[0];
            }
        }
        if (radius > 0) {
            var rect = [rectangle[0] + borderWidth,
                -rectangle[1] - rectangle[3],
                rectangle[2] - this.border.width,
                rectangle[3]];
            var left = rect[0];
            var top_1 = rect[1];
            var right = rect[0] + rect[2];
            var bottom = rect[1] + rect[3];
            var controlPointList = [];
            controlPointList.push([right, bottom]);
            controlPointList.push([left, bottom]);
            controlPointList.push([left, top_1]);
            controlPointList.push([right, top_1]);
            var startPointList = [];
            startPointList.push([right, top_1 + (rect[3] / 2)]);
            startPointList.push([left + rect[2] / 2, bottom]);
            startPointList.push([left, top_1 + (rect[3] / 2)]);
            startPointList.push([left + (rect[2] / 2), top_1]);
            var endPointList = [];
            endPointList.push([left + rect[2] / 2, bottom]);
            endPointList.push([left, top_1 + (rect[3] / 2)]);
            endPointList.push([left + (rect[2] / 2), top_1]);
            endPointList.push([right, top_1 + (rect[3] / 2)]);
            var points = [];
            for (var i = 0; i < controlPointList.length; i++) {
                this._createBezier(startPointList[i], controlPointList[i], endPointList[i], points);
            }
            this._drawCloudStyle(graphics, parameter.backBrush, parameter.borderPen, radius, 0.833, points, false);
        }
        else {
            graphics.drawEllipse(rectangle[0] + borderWidth, -rectangle[1], rectangle[2] - this.border.width, -rectangle[3], parameter.borderPen, parameter.backBrush);
        }
    };
    PdfAnnotation.prototype._createBezier = function (first, second, third, bezierPoints) {
        bezierPoints.push(first);
        this._populateBezierPoints(first, second, third, 0, bezierPoints);
        bezierPoints.push(third);
    };
    PdfAnnotation.prototype._populateBezierPoints = function (first, second, third, currentIteration, bezierPoints) {
        if (currentIteration < 2) {
            var midPoint1 = this._midPoint(first, second);
            var midPoint2 = this._midPoint(second, third);
            var midPoint3 = this._midPoint(midPoint1, midPoint2);
            currentIteration++;
            this._populateBezierPoints(first, midPoint1, midPoint3, currentIteration, bezierPoints);
            bezierPoints.push(midPoint3);
            this._populateBezierPoints(midPoint3, midPoint2, third, currentIteration, bezierPoints);
        }
    };
    PdfAnnotation.prototype._midPoint = function (first, second) {
        return [(first[0] + second[0]) / 2, (first[1] + second[1]) / 2];
    };
    PdfAnnotation.prototype._getAngle = function (linePoints) {
        var x1 = linePoints[0];
        var y1 = linePoints[1];
        var x2 = linePoints[2];
        var y2 = linePoints[3];
        var angle = 0;
        if (x2 - x1 === 0) {
            angle = (y2 > y1) ? 90 : 270;
        }
        else {
            var angleRatio = (y2 - y1) / (x2 - x1);
            var radians = Math.atan(angleRatio);
            angle = radians * (180 / Math.PI);
            if ((x2 - x1) < 0 || (y2 - y1) < 0) {
                angle += 180;
            }
            if ((x2 - x1) > 0 && (y2 - y1) < 0) {
                angle -= 180;
            }
            if (angle < 0) {
                angle += 360;
            }
        }
        return angle;
    };
    PdfAnnotation.prototype._getAxisValue = function (value, angle, length) {
        if (length === null || typeof length === 'undefined') {
            length = 0;
        }
        return [value[0] + Math.cos(angle * this._degreeToRadian) * length,
            value[1] + Math.sin(angle * this._degreeToRadian) * length];
    };
    PdfAnnotation.prototype._prepareOpenArrow = function (isBegin, axisPoint, angle, length) {
        var arraowAngle = isBegin ? 30 : 150;
        var count = 9 * length;
        var startPoint = this._getAxisValue(axisPoint, angle, (isBegin ? length : (-length)));
        var first = this._getAxisValue(startPoint, (angle + arraowAngle), count);
        var second = this._getAxisValue(startPoint, (angle - arraowAngle), count);
        return { startPoint: startPoint, first: first, second: second };
    };
    PdfAnnotation.prototype._prepareReverseOpenArrow = function (isBegin, axisPoint, angle, length) {
        var arraowAngle = isBegin ? 150 : 30;
        var count = 9 * length;
        var startPoint = this._getAxisValue(axisPoint, angle, (isBegin ? (-length) : length));
        var first = this._getAxisValue(startPoint, (angle + arraowAngle), count);
        var second = this._getAxisValue(startPoint, (angle - arraowAngle), count);
        return { startPoint: startPoint, first: first, second: second };
    };
    PdfAnnotation.prototype._prepareClosedArrow = function (isBegin, axisPoint, angle, length) {
        var arraowAngle = isBegin ? 30 : 150;
        var count = 9 * length;
        var startPoint = this._getAxisValue(axisPoint, angle, (isBegin ? length : (-length)));
        var first = this._getAxisValue(startPoint, (angle + arraowAngle), count);
        var second = this._getAxisValue(startPoint, (angle - arraowAngle), count);
        return { startPoint: startPoint, first: first, second: second };
    };
    PdfAnnotation.prototype._prepareReverseCloseArrow = function (isBegin, axisPoint, angle, length) {
        var arraowAngle = isBegin ? 150 : 30;
        var count = 9 * length;
        var startPoint = this._getAxisValue(axisPoint, angle, (isBegin ? (-length) : length));
        var first = this._getAxisValue(startPoint, (angle + arraowAngle), count);
        var second = this._getAxisValue(startPoint, (angle - arraowAngle), count);
        return { startPoint: startPoint, first: first, second: second };
    };
    PdfAnnotation.prototype._prepareSlash = function (axisPoint, angle, length) {
        var count = 9 * length;
        var first = this._getAxisValue(axisPoint, (angle + 60), count);
        var second = this._getAxisValue(axisPoint, (angle - 120), count);
        return { first: first, second: second };
    };
    PdfAnnotation.prototype._prepareDiamond = function (axisPoint, length) {
        var count = 3 * length;
        var first = this._getAxisValue(axisPoint, 180, count);
        var second = this._getAxisValue(axisPoint, 90, count);
        var third = this._getAxisValue(axisPoint, 0, count);
        var fourth = this._getAxisValue(axisPoint, -90, count);
        return { first: first, second: second, third: third, fourth: fourth };
    };
    PdfAnnotation.prototype._prepareButt = function (axisPoint, angle, length) {
        var count = 3 * length;
        var first = this._getAxisValue(axisPoint, (angle + 90), count);
        var second = this._getAxisValue(axisPoint, (angle - 90), count);
        return { first: first, second: second };
    };
    PdfAnnotation.prototype._getBoundsFromLineEndStyle = function (axisPoint, angle, pen, style, length, isBegin) {
        var result;
        var path;
        var bounds;
        var values; // eslint-disable-line
        switch (style) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.square:
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.circle:
                result = { x: axisPoint[0] - (3 * length),
                    y: axisPoint[1] + (3 * length),
                    width: (6 * length),
                    height: (6 * length) };
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow:
                values = this._prepareOpenArrow(isBegin, axisPoint, angle, length);
                path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                path._pen = pen;
                path.addLine(values.startPoint[0], values.startPoint[1], values.first[0], values.first[1]);
                path.addLine(values.startPoint[0], values.startPoint[1], values.second[0], values.second[1]);
                bounds = path._getBounds();
                result = { x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] };
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow:
                values = this._prepareClosedArrow(isBegin, axisPoint, angle, length);
                result = this._getBoundsValue([values.startPoint[0], values.startPoint[1],
                    values.first[0], values.first[1],
                    values.second[0], values.second[1]]);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.rOpenArrow:
                values = this._prepareReverseOpenArrow(isBegin, axisPoint, angle, length);
                path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                path._pen = pen;
                path.addLine(values.startPoint[0], values.startPoint[1], values.first[0], values.first[1]);
                path.addLine(values.startPoint[0], values.startPoint[1], values.second[0], values.second[1]);
                bounds = path._getBounds();
                result = { x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] };
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.rClosedArrow:
                values = this._prepareReverseCloseArrow(isBegin, axisPoint, angle, length);
                result = this._getBoundsValue([values.startPoint[0], values.startPoint[1],
                    values.first[0], values.first[1],
                    values.second[0], values.second[1]]);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.slash:
                values = this._prepareSlash(axisPoint, angle, length);
                result = this._getBoundsValue([axisPoint[0], axisPoint[1], values.first[0],
                    values.first[1], values.second[0], values.second[1]]);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.diamond:
                values = this._prepareDiamond(axisPoint, length);
                result = this._getBoundsValue([values.first[0], values.first[1], values.second[0],
                    values.second[1], values.third[0], values.third[1],
                    values.fourth[0], values.fourth[1]]);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.butt:
                values = this._prepareButt(axisPoint, angle, length);
                result = this._getBoundsValue([values.first[0], values.first[1], values.second[0], values.second[1]]);
                break;
        }
        return result;
    };
    PdfAnnotation.prototype._drawLineEndStyle = function (axisPoint, graphics, angle, pen, brush, style, length, isBegin) {
        var path;
        var values; // eslint-disable-line
        switch (style) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.square:
                graphics.drawRectangle(axisPoint[0] - (3 * length), -(axisPoint[1] + (3 * length)), (6 * length), (6 * length), pen, brush);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.circle:
                graphics.drawEllipse(axisPoint[0] - (3 * length), -(axisPoint[1] + (3 * length)), (6 * length), (6 * length), pen, brush);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow:
                values = this._prepareOpenArrow(isBegin, axisPoint, angle, length);
                path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                path._pen = pen;
                path.addLine(values.startPoint[0], -values.startPoint[1], values.first[0], -values.first[1]);
                path.addLine(values.startPoint[0], -values.startPoint[1], values.second[0], -values.second[1]);
                graphics._stateControl(pen, null, null);
                graphics._buildUpPath(path._points, path._pathTypes);
                graphics._drawGraphicsPath(pen, null, path._fillMode, false);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow:
                values = this._prepareClosedArrow(isBegin, axisPoint, angle, length);
                graphics.drawPolygon([[values.startPoint[0], -values.startPoint[1]],
                    [values.first[0], -values.first[1]], [values.second[0],
                        -values.second[1]]], pen, brush);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.rOpenArrow:
                values = this._prepareReverseOpenArrow(isBegin, axisPoint, angle, length);
                path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                path._pen = pen;
                path.addLine(values.startPoint[0], -values.startPoint[1], values.first[0], -values.first[1]);
                path.addLine(values.startPoint[0], -values.startPoint[1], values.second[0], -values.second[1]);
                graphics._stateControl(pen, null, null);
                graphics._buildUpPath(path._points, path._pathTypes);
                graphics._drawGraphicsPath(pen, null, path._fillMode, false);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.rClosedArrow:
                values = this._prepareReverseCloseArrow(isBegin, axisPoint, angle, length);
                graphics.drawPolygon([[values.startPoint[0], -values.startPoint[1]],
                    [values.first[0], -values.first[1]], [values.second[0],
                        -values.second[1]]], pen, brush);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.slash:
                values = this._prepareSlash(axisPoint, angle, length);
                graphics.drawLine(pen, axisPoint[0], -axisPoint[1], values.first[0], -values.first[1]);
                graphics.drawLine(pen, axisPoint[0], -axisPoint[1], values.second[0], -values.second[1]);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.diamond:
                values = this._prepareDiamond(axisPoint, length);
                graphics.drawPolygon([[values.first[0], -values.first[1]],
                    [values.second[0], -values.second[1]], [values.third[0], -values.third[1]],
                    [values.fourth[0], -values.fourth[1]]], pen, brush);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.butt:
                values = this._prepareButt(axisPoint, angle, length);
                graphics.drawLine(pen, values.first[0], -values.first[1], values.second[0], -values.second[1]);
                break;
        }
    };
    PdfAnnotation.prototype._getCombinedRectangleBounds = function (rect1, rect2) {
        var left = Math.min(rect1.x, rect2.x);
        var top = Math.min(rect1.y, rect2.y);
        var right = Math.max(rect1.x + rect1.width, rect2.x + rect2.width);
        var bottom = Math.max(rect1.y + rect1.height, rect2.y + rect2.height);
        return {
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        };
    };
    PdfAnnotation.prototype._drawLineStyle = function (start, end, graphics, angle, pen, brush, lineStyle, length) {
        if (length === 0) {
            length = 1;
            pen = null;
        }
        this._drawLineEndStyle(start, graphics, angle, pen, brush, lineStyle.begin, length, true);
        this._drawLineEndStyle(end, graphics, angle, pen, brush, lineStyle.end, length, false);
    };
    PdfAnnotation.prototype._obtainFontDetails = function () {
        var fontFamily = '';
        var fontSize;
        var style = _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
        if (this._dictionary.has('DS') || this._dictionary.has('DA')) {
            var fontStyle_1;
            if (this._dictionary.has('DS')) {
                var collection = this._dictionary.get('DS').split(';');
                collection.forEach(function (item) {
                    var entry = item.split(':');
                    if (item.indexOf('font-family') !== -1) {
                        fontFamily = entry[1];
                    }
                    else if (item.indexOf('font-size') !== -1) {
                        if (entry[1].endsWith('pt')) {
                            fontSize = Number.parseFloat(entry[1].replace('pt', ''));
                        }
                    }
                    else if (item.indexOf('font-style') !== -1 || item.indexOf('style') !== -1) {
                        fontStyle_1 = entry[1];
                    }
                    else if (item.indexOf('font') !== -1) {
                        var name_1 = entry[1];
                        var split = name_1.split(' ');
                        split.forEach(function (part) {
                            if (part !== '' && !part.endsWith('pt')) {
                                fontFamily += part + ' ';
                            }
                            if (part.endsWith('pt')) {
                                fontSize = Number.parseFloat(part.replace('pt', ''));
                            }
                        });
                        while (fontFamily !== ' ' && fontFamily.endsWith(' ')) {
                            fontFamily = fontFamily.substring(0, fontFamily.length - 1);
                        }
                        if (fontFamily.indexOf(',') !== -1) {
                            fontFamily = fontFamily.split(',')[0];
                        }
                    }
                });
            }
            else {
                var value = this._dictionary.get('DA');
                if (value && value !== '' && value.indexOf('Tf') !== -1) {
                    var textCollection_1 = value.split(' ');
                    textCollection_1.forEach(function (text, i) {
                        if (text.indexOf('Tf') !== -1) {
                            fontFamily = textCollection_1[i - 2];
                            while (fontFamily !== '' && fontFamily.length > 1 && fontFamily[0] === '/') {
                                fontFamily = fontFamily.substring(1);
                            }
                            fontSize = Number.parseFloat(textCollection_1[i - 1]);
                        }
                    });
                }
            }
            if (fontStyle_1 && fontStyle_1 !== '') {
                var styleArray = [fontStyle_1];
                if (fontStyle_1.includes(':')) {
                    styleArray = fontStyle_1.split(':');
                }
                else if (fontStyle_1.includes(',')) {
                    styleArray = fontStyle_1.split(',');
                }
                if (styleArray) {
                    styleArray.forEach(function (entry) {
                        entry = entry.trim();
                        switch (entry.toLowerCase()) {
                            case 'bold':
                                style |= _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold;
                                break;
                            case 'italic':
                                style |= _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.italic;
                                break;
                            case 'strikeout':
                                style |= _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.strikeout;
                                break;
                            case 'underline':
                                style |= _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.underline;
                                break;
                        }
                    });
                }
            }
            if (fontFamily) {
                fontFamily = fontFamily.trim();
            }
        }
        return { name: fontFamily, size: fontSize, style: style };
    };
    PdfAnnotation.prototype._obtainFont = function () {
        var fontData = this._obtainFontDetails();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapFont */ .BM)(fontData.name, fontData.size, fontData.style, this);
    };
    PdfAnnotation.prototype._getEqualPdfGraphicsUnit = function (measurementUnit, unitString) {
        var graphicsUnit;
        switch (measurementUnit) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.inch:
                graphicsUnit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.inch;
                unitString = 'in';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter:
                graphicsUnit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.centimeter;
                unitString = 'cm';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.millimeter:
                graphicsUnit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.millimeter;
                unitString = 'mm';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.pica:
                graphicsUnit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.pica;
                unitString = 'p';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.point:
                graphicsUnit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point;
                unitString = 'pt';
                break;
            default:
                graphicsUnit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.inch;
                unitString = 'in';
                break;
        }
        return { graphicsUnit: graphicsUnit, unitString: unitString };
    };
    PdfAnnotation.prototype._createMeasureDictionary = function (unitString) {
        var d = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        d.set('C', 1);
        d.set('D', 100);
        d.set('F', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('D'));
        d.set('RD', '.');
        d.set('RT', '');
        d.set('SS', '');
        d.set('U', unitString);
        var a = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        a.set('C', 1);
        a.set('D', 100);
        a.set('F', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('D'));
        a.set('RD', '.');
        a.set('RT', '');
        a.set('SS', '');
        a.set('U', 'sq ' + unitString);
        var x = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        if (unitString === 'in') {
            x.set('C', 0.0138889);
        }
        else if (unitString === 'cm') {
            x.set('C', 0.0352778);
        }
        else if (unitString === 'mm') {
            x.set('C', 0.352778);
        }
        else if (unitString === 'pt') {
            x.set('C', 1);
        }
        else if (unitString === 'p') {
            x.set('C', 0.0833333);
        }
        x.set('D', 100);
        x.set('F', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('D'));
        x.set('RD', '.');
        x.set('RT', '');
        x.set('SS', '');
        x.set('U', unitString);
        var measureDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        measureDictionary.set('A', [a]);
        measureDictionary.set('D', [d]);
        measureDictionary.set('R', '1 ' + unitString + ' = 1 ' + unitString);
        measureDictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Measure'));
        measureDictionary.set('X', [x]);
        return measureDictionary;
    };
    PdfAnnotation.prototype._colorToHex = function (col) {
        if (col) {
            return '#' + this._componentToHex(col[0]) + this._componentToHex(col[1]) + this._componentToHex(col[2]);
        }
        else {
            return '#' + this._componentToHex(0) + this._componentToHex(0) + this._componentToHex(0);
        }
    };
    PdfAnnotation.prototype._componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    PdfAnnotation.prototype._getRotatedBounds = function (bounds, rotateAngle) {
        if (bounds.width > 0 && bounds.height > 0) {
            var matrix_1 = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* ._PdfTransformationMatrix */ .YV();
            matrix_1._rotate(rotateAngle);
            var corners = [];
            corners.push([bounds.x, bounds.y]);
            corners.push([bounds.x + bounds.width, bounds.y]);
            corners.push([bounds.x + bounds.width, bounds.y + bounds.height]);
            corners.push([bounds.x, bounds.y + bounds.height]);
            corners = corners.map(function (point) { return matrix_1._matrix._transform(point); });
            var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            path.addRectangle(bounds.x, bounds.y, bounds.width, bounds.height);
            path._points = corners.slice(0, 4);
            var minX = corners[0][0];
            var maxX = corners[3][0];
            var minY = corners[0][1];
            var maxY = corners[3][1];
            for (var i = 0; i < 4; i++) {
                if (corners[i][0] < minX) {
                    minX = corners[i][0];
                }
                if (corners[i][0] > maxX) {
                    maxX = corners[i][0];
                }
                if (corners[i][1] < minY) {
                    minY = corners[i][1];
                }
                if (corners[i][1] > maxY) {
                    maxY = corners[i][1];
                }
            }
            return { x: bounds.x, y: bounds.y, width: Math.round(maxX - minX), height: Math.round(maxY - minY) };
        }
        return bounds;
    };
    PdfAnnotation.prototype._flattenPopUp = function () {
        this._flattenPop(this._page, this.color, this.bounds, this.border, this.author, this.subject, this.text);
    };
    PdfAnnotation.prototype._flattenPop = function (_page, color, boundsValue, border, author, subject, text) {
        var clientSize = [0, 0];
        if (_page && _page.size) {
            clientSize = _page.size;
        }
        var x = clientSize[0] - 180;
        var annotBounds = boundsValue;
        var y = (annotBounds.y + 142) < clientSize[1] ? annotBounds.y : clientSize[1] - 142;
        var bounds = [x, y, 180, 142];
        if (this._dictionary.has('Popup')) {
            var dictionary = this._dictionary.get('Popup');
            if (dictionary) {
                var rectValue = this._dictionary.getArray('Rect');
                if (rectValue && rectValue.length === 4) {
                    var left = rectValue[0];
                    var top_2 = rectValue[1];
                    var width = rectValue[2];
                    var height = rectValue[3];
                    bounds = [left, top_2, width - left, height - top_2];
                }
            }
        }
        if (typeof color === 'undefined') {
            color = [0, 0, 0];
        }
        var backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(color);
        var borderWidth = border.width / 2;
        var pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj([0, 0, 0], 1);
        var track = 0;
        var aBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._getForeColor(color));
        if (typeof author !== 'undefined' && author !== null && author !== '') {
            track = this._drawAuthor(author, subject, bounds, backBrush, aBrush, _page, track, border);
        }
        else if (typeof subject !== 'undefined' && subject !== null && subject !== '') {
            var titleRect = [bounds[0] + borderWidth, bounds[1] + borderWidth, bounds[2] - border.width, 40];
            this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
            if (this._isTransparentColor) {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen);
            }
            else {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen, backBrush);
            }
            _page.graphics.restore();
            var contentRect = [titleRect[0] + 11, titleRect[1], titleRect[2], titleRect[3] / 2];
            contentRect = [contentRect[0], (contentRect[1] + contentRect[3] - 2), contentRect[2], titleRect[3] / 2];
            this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.normal);
            this._drawSubject(subject, contentRect, _page);
            _page.graphics.restore();
            track = 40;
        }
        else {
            this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
            var titleRect = [bounds[0] + borderWidth, bounds[1] + borderWidth, bounds[2] - border.width, 20];
            if (this._isTransparentColor) {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen);
            }
            else {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen, backBrush);
            }
            track = 20;
            _page.graphics.restore();
        }
        var rect = [bounds[0] + borderWidth, bounds[1] + borderWidth + track,
            bounds[2] - border.width, bounds[3] - (track + border.width)];
        this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
        _page.graphics.drawRectangle(rect[0], rect[1], rect[2], rect[3], new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj([0, 0, 0], 1), new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc([255, 255, 255]));
        rect[0] += 11;
        rect[1] += 5;
        rect[2] -= 22;
        _page.graphics.restore();
        this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.normal);
        if (typeof text !== 'undefined' && text !== null && text !== '') {
            _page.graphics.drawString(text, this._popUpFont, rect, null, new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc([0, 0, 0]), null);
        }
        _page.graphics.restore();
    };
    PdfAnnotation.prototype._flattenLoadedPopUp = function () {
        var content = '';
        if (this._dictionary.has('Contents')) {
            content = this._dictionary.get('Contents');
        }
        var author = this.author;
        var subject = this.subject;
        var pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj([0, 0, 0], 1);
        if (!this._dictionary.has('Popup')) {
            this._flattenPop(this._page, this.color, this.bounds, this.border, author, subject, content);
            this._page.annotations.remove(this);
        }
        else {
            var bounds = this._getRectangleBoundsValue();
            if (typeof this.color === 'undefined') {
                this.color = [0, 0, 0];
            }
            var backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.color);
            var borderWidth = this.border.width / 2;
            var track = 0;
            var aBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._getForeColor(this.color));
            if (typeof this.author !== 'undefined' && this.author !== null && this.author !== '') {
                track = this._drawAuthor(this.author, this.subject, bounds, backBrush, aBrush, this._page, track, this.border);
            }
            else if (typeof this.subject !== 'undefined' && this.subject !== null && this.subject !== '') {
                var titleRect = [bounds[0] + borderWidth, bounds[1] + borderWidth, bounds[2] - this.border.width, 40];
                this._saveGraphics(this._page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
                this._page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen, backBrush);
                this._page.graphics.restore();
                var contentRect = [titleRect[0] + 11, titleRect[1], titleRect[2], titleRect[3] / 2];
                contentRect = [contentRect[0], (contentRect[1] + contentRect[3] - 2), contentRect[2], titleRect[3] / 2];
                this._saveGraphics(this._page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.normal);
                this._drawSubject(this.subject, contentRect, this._page);
                track = 40;
                this._page.graphics.restore();
            }
            else {
                this._saveGraphics(this._page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
                var titleRect = [bounds[0] + borderWidth, bounds[1] + borderWidth, bounds[2] - this.border.width, 20];
                this._page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen, backBrush);
                track = 20;
                this._page.graphics.restore();
            }
            this._saveGraphics(this._page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
            var rect = [bounds[0] + borderWidth, bounds[1] + borderWidth + track,
                bounds[2] - this.border.width, bounds[3] - (track + this.border.width)];
            this._page.graphics.drawRectangle(rect[0], rect[1], rect[2], rect[3], pen, new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc([255, 255, 255]));
            rect[0] += 11;
            rect[1] += 5;
            rect[2] -= 22;
            this._page.graphics.restore();
            this._saveGraphics(this._page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.normal);
            this._page.graphics.restore();
            //let xmlData: Array<any> = Array<any>();
            // if (this._dictionary.has('RC')) {
            //     //xmlData = this.parseXMLData();
            // }
            // if (xmlData !== null) {
            //     // Need to add xml data code
            // } else {
            if (typeof content !== 'undefined' && content !== null && content !== '') {
                this._page.graphics.drawString(content, this._popUpFont, rect, null, new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc([0, 0, 0]), null);
            }
            // }
            this._page.graphics.restore();
            this._page.annotations.remove(this);
        }
    };
    PdfAnnotation.prototype._getRectangleBoundsValue = function () {
        if (this._dictionary.has('Popup')) {
            var dic = this._dictionary.get('Popup');
            var rect = dic.getArray('Rect');
            if (rect !== null) {
                if (this._page !== null) {
                    if (rect[1] === 0 && rect[3] === 0) {
                        rect[1] = rect[1] + rect[3];
                    }
                    else {
                        rect[1] = this._page._size[1] - (rect[1] + rect[3]);
                    }
                }
                else {
                    rect[1] = (rect[1] - rect[3]);
                }
                return rect;
            }
            else {
                return [0, 0, 0, 0];
            }
        }
        else {
            return [0, 0, 0, 0];
        }
    };
    PdfAnnotation.prototype._getForeColor = function (color) {
        var fore = (((color[0] + color[1] + color[2]) / 3) > 128) ? [0, 0, 0] : [255, 255, 255];
        return fore;
    };
    PdfAnnotation.prototype._drawAuthor = function (author, subject, bounds, backBrush, aBrush, _page, trackingHeight, border) {
        var borderWidth = this.border.width / 2;
        var pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj([0, 0, 0], 1);
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        var titleRect = [bounds[0] + borderWidth, bounds[1] + borderWidth, bounds[2] - border.width, 20];
        if (typeof subject !== 'undefined' && subject !== null && subject !== '') {
            titleRect[3] += 20;
            trackingHeight = titleRect[3];
            this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
            if (this._isTransparentColor) {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen);
            }
            else {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen, backBrush);
            }
            _page.graphics.restore();
            var contentRect = [titleRect[0] + 11, titleRect[1], titleRect[2], titleRect[3] / 2];
            this._saveGraphics(this._page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.normal);
            _page.graphics.drawString(author, this._authorBoldFont, contentRect, null, aBrush, format);
            contentRect = [contentRect[0], (contentRect[1] + contentRect[3] - 2), contentRect[2], titleRect[3] / 2];
            this._drawSubject(subject, contentRect, _page);
            _page.graphics.restore();
        }
        else {
            this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.hardLight);
            if (this._isTransparentColor) {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen);
            }
            else {
                _page.graphics.drawRectangle(titleRect[0], titleRect[1], titleRect[2], titleRect[3], pen, backBrush);
            }
            _page.graphics.restore();
            var contentRect = [titleRect[0] + 11, titleRect[1], titleRect[2], titleRect[3]];
            this._saveGraphics(_page, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.normal);
            _page.graphics.drawString(author, this._popUpFont, contentRect, null, aBrush, format);
            trackingHeight = titleRect[3];
            _page.graphics.restore();
        }
        return trackingHeight;
    };
    PdfAnnotation.prototype._drawSubject = function (subject, contentRect, _page) {
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        _page.graphics.drawString(subject, this._authorBoldFont, contentRect, null, new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc([0, 0, 0]), format);
    };
    PdfAnnotation.prototype._saveGraphics = function (_page, blendMode) {
        _page.graphics.save();
        _page.graphics.setTransparency(0.8, 0.8, blendMode);
    };
    PdfAnnotation.prototype._getBorderColorString = function (color) {
        return (color[0] / 255).toFixed(3) + ' ' + (color[1] / 255).toFixed(3) + ' ' + (color[2] / 255).toFixed(3) + ' rg ';
    };
    PdfAnnotation.prototype._stringToDate = function (date) {
        var dateFormat = new Date();
        if (date[0] === 'D' && date[1] === ':') {
            var year = date.substring(2, 6);
            var month = date.substring(6, 8);
            var day = date.substring(8, 10);
            var hour = date.substring(10, 12);
            var minute = date.substring(12, 14);
            var second = date.substring(14, 16);
            var difference = 0;
            if (date.length === 23) {
                var timeZone = date.substring(16, 22);
                if (timeZone !== '+05\'30\'') {
                    var signature = timeZone[0];
                    var timeZoneHour = timeZone.substring(1, 3);
                    var timeZonMinute = timeZone.substring(4, 6);
                    difference = 5.5 - (signature === '-' ? -1 : 1) * (parseInt(timeZoneHour, 10) + (parseInt(timeZonMinute, 10) / 60));
                }
            }
            dateFormat = new Date(year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second);
            if (difference !== 0) {
                dateFormat.setTime(dateFormat.getTime() + (difference * 60 * 60 * 1000));
            }
        }
        else if (date.indexOf('/') !== -1) {
            var list = date.split('/');
            var year = list[2].split(' ')[0];
            var month = list[0];
            if (month !== '10' && month !== '11' && month !== '12') {
                month = '0' + month;
            }
            var day = list[1];
            var hour = list[2].split(' ')[1].split(':')[0];
            var minute = list[2].split(' ')[1].split(':')[1];
            var second = list[2].split(' ')[1].split(':')[2];
            dateFormat = new Date(year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second);
        }
        else {
            dateFormat = new Date(date);
        }
        return dateFormat;
    };
    PdfAnnotation.prototype._dateToString = function (dateTime) {
        var month = (dateTime.getMonth() + 1).toString();
        if (month !== '10' && month !== '11' && month !== '12') {
            month = '0' + month;
        }
        var date = (dateTime.getDate()).toString();
        if (Number(date) < 10) {
            date = '0' + date;
        }
        var hours = (dateTime.getHours()).toString();
        if (Number(hours) < 10) {
            hours = '0' + hours;
        }
        var minutes = (dateTime.getMinutes()).toString();
        if (Number(minutes) < 10) {
            minutes = '0' + minutes;
        }
        var seconds = (dateTime.getSeconds()).toString();
        if (Number(seconds) < 10) {
            seconds = '0' + seconds;
        }
        return 'D:' + dateTime.getFullYear().toString() + month + date + hours + minutes + seconds + '+05\'30\'';
    };
    PdfAnnotation.prototype._obtainNativeRectangle = function () {
        var rect = [this._bounds.x, this._bounds.y, this.bounds.x + this._bounds.width, this.bounds.y + this._bounds.height];
        var cropBoxOrMediaBox = this._getCropOrMediaBox();
        if (this._page) {
            var size = this._page.size;
            rect[1] = size[1] - rect[3];
            if (cropBoxOrMediaBox && cropBoxOrMediaBox.length > 2 && (cropBoxOrMediaBox[0] !== 0 || cropBoxOrMediaBox[1] !== 0)) {
                rect[0] += cropBoxOrMediaBox[0];
                rect[1] += cropBoxOrMediaBox[1];
            }
        }
        return rect;
    };
    PdfAnnotation.prototype._getPoints = function (polygonPoints) {
        var cropOrMediaBox = this._getCropOrMediaBox();
        var points = polygonPoints;
        if (cropOrMediaBox && cropOrMediaBox.length > 3 && typeof cropOrMediaBox[0] === 'number' && typeof cropOrMediaBox[1] === 'number' && (cropOrMediaBox[0] !== 0 || cropOrMediaBox[1] !== 0)) {
            var modifiedPoints = points.map(function (point) { return point; });
            for (var j = 0; j < modifiedPoints.length; j = j + 2) {
                var x = modifiedPoints[j];
                var y = modifiedPoints[j + 1];
                if (cropOrMediaBox) {
                    points[j] = x + cropOrMediaBox[0];
                    if (this._page._pageDictionary.has('MediaBox') && !this._page._pageDictionary.has('CropBox') && cropOrMediaBox[3] === 0 && cropOrMediaBox[1] > 0) {
                        points[j + 1] = y + cropOrMediaBox[3];
                    }
                    else {
                        points[j + 1] = y + cropOrMediaBox[1];
                    }
                }
            }
        }
        return points;
    };
    PdfAnnotation.prototype._getCropOrMediaBox = function () {
        var cropOrMediaBox;
        if (this._page) {
            cropOrMediaBox = this._page.cropBox;
            if (!cropOrMediaBox || cropOrMediaBox.length === 0) {
                cropOrMediaBox = this._page.mediaBox;
            }
        }
        if (cropOrMediaBox && cropOrMediaBox[3] < 0) {
            var y = cropOrMediaBox[1];
            var height = cropOrMediaBox[3];
            cropOrMediaBox[3] = y;
            cropOrMediaBox[1] = height;
        }
        return cropOrMediaBox;
    };
    PdfAnnotation.prototype._getDocumentLayer = function () {
        if (this._dictionary.has('OC')) {
            var reference = this._dictionary.getRaw('OC');
            var page = this._page;
            if (reference && page && this._crossReference._document) {
                var layerCollection = this._crossReference._document.layers;
                if (layerCollection) {
                    this._isMatched(layerCollection, reference, page);
                }
            }
        }
        return this.layer;
    };
    PdfAnnotation.prototype._isMatched = function (layerCollection, expectedReference, page) {
        for (var i = 0; i < layerCollection.count; i++) {
            var reference = layerCollection.at(i)._referenceHolder;
            if (reference && reference === expectedReference) {
                if (layerCollection.at(i).name) {
                    this._layer = layerCollection.at(i);
                    break;
                }
            }
            else if (layerCollection.at(i).layers && layerCollection.at(i).layers.count > 0) {
                this._isMatched(layerCollection.at(i).layers, expectedReference, page);
            }
        }
    };
    return PdfAnnotation;
}());

/**
 * Represents the annotations which have comments and review history.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0);
 * // Access the annotation at index 0
 * let annotation: PdfComment = page.annotations.at(0) as PdfComment;
 * // Gets the comments of annotation
 * let comment : PdfPopupAnnotationCollection = annotation.comments;
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfComment = /** @class */ (function (_super) {
    __extends(PdfComment, _super);
    function PdfComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PdfComment.prototype, "comments", {
        /**
         * Gets the comments of the PDF annotation (Read only).
         *
         * @returns {PdfPopupAnnotationCollection} Annotation comments
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Access first page
         * let page: PdfPage = document.getPage(0);
         * // Access the annotation at index 0
         * let annotation: PdfRectangleAnnotation = page.annotations.at(0) as PdfRectangleAnnotation;
         * // Gets the comments of the PDF annotation
         * let comments: PdfPopupAnnotationCollection = annotation.comments;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._comments) {
                return this._comments;
            }
            else {
                return this._comments = new _annotation_collection__WEBPACK_IMPORTED_MODULE_8__/* .PdfPopupAnnotationCollection */ ._(this, false);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfComment.prototype, "reviewHistory", {
        /**
         * Gets the review history of the PDF annotation (Read only).
         *
         * @returns {PdfPopupAnnotationCollection} Annotation review history.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Access first page
         * let page: PdfPage = document.getPage(0);
         * // Access the annotation at index 0
         * let annotation: PdfRectangleAnnotation = page.annotations.at(0) as PdfRectangleAnnotation;
         * // Gets the comments of the PDF annotation
         * let comments: PdfPopupAnnotationCollection = annotation.reviewHistory;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._reviewHistory) {
                return this._reviewHistory;
            }
            else {
                return this._reviewHistory = new _annotation_collection__WEBPACK_IMPORTED_MODULE_8__/* .PdfPopupAnnotationCollection */ ._(this, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    return PdfComment;
}(PdfAnnotation));

/**
 * `PdfLineAnnotation` class represents the line annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new line annotation with line points
 * const annotation: PdfLineAnnotation = new PdfLineAnnotation([10, 50, 250, 50]);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfLineAnnotation = /** @class */ (function (_super) {
    __extends(PdfLineAnnotation, _super);
    function PdfLineAnnotation(linePoints) {
        var _this = _super.call(this) || this;
        _this._unit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter;
        _this._unitString = '';
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Line'));
        if (linePoints !== null && typeof linePoints !== 'undefined') {
            _this.linePoints = linePoints;
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.lineAnnotation;
        return _this;
    }
    Object.defineProperty(PdfLineAnnotation.prototype, "linePoints", {
        /**
         * Gets the line points of the line annotation.
         *
         * @returns {number[]} Line points.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the line points of the line annotation.
         * let linePoints : number[] = annotation.linePoints;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._linePoints === 'undefined' && this._dictionary.has('L')) {
                var points = this._dictionary.getArray('L');
                if (points) {
                    this._linePoints = points;
                }
            }
            return this._linePoints;
        },
        /**
         * Sets the line points of the line annotation.
         *
         * @param {number[]} value Line points.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the line points of the line annotation.
         * annotation.linePoints = [10, 50, 250, 50];
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (Array.isArray(value) && (typeof this._linePoints === 'undefined' || (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._areNotEqual */ .v_)(value, this._linePoints))) {
                if (value.length === 4) {
                    this._dictionary.update('L', value);
                    this._linePoints = value;
                }
                else {
                    throw new Error('Line points length should be 4.');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "leaderExt", {
        /**
         * Gets the line extension of the line annotation.
         *
         * @returns {number} Leader line extension.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the line extension of the line annotation.
         * let leaderExt: number = annotation.leaderExt;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._leaderExt === 'undefined' && this._dictionary.has('LLE')) {
                var leaderExt = this._dictionary.get('LLE');
                if (typeof leaderExt !== 'undefined') {
                    this._leaderExt = leaderExt;
                }
            }
            return this._leaderExt;
        },
        /**
         * Sets the line extension of the line annotation.
         *
         * @param {number} value Line extension.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the line extension of the line annotation.
         * annotation.leaderExt = 4;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!Number.isNaN(value)) {
                this._dictionary.update('LLE', value);
                this._leaderExt = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "leaderLine", {
        /**
         * Gets the leader line of the line annotation.
         *
         * @returns {number} Leader line.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the leader line of the line annotation.
         * let leaderLine: number = annotation.leaderLine;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._leaderLine === 'undefined' && this._dictionary.has('LL')) {
                var leaderLine = this._dictionary.get('LL');
                if (typeof leaderLine !== 'undefined') {
                    this._leaderLine = leaderLine;
                }
            }
            return this._leaderLine;
        },
        /**
         * Sets the leader line of the line annotation.
         *
         * @param {number} value Leader line.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the leader line of the line annotation.
         * annotation.leaderLine = 5;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!Number.isNaN(value) && this.leaderExt !== 0) {
                this._dictionary.update('LL', value);
                this._leaderLine = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "lineEndingStyle", {
        /**
         * Gets the line ending style of the line annotation.
         *
         * @returns {PdfAnnotationLineEndingStyle} Line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the line ending style of the line annotation.
         * let lineEndingStyle: PdfAnnotationLineEndingStyle = annotation.lineEndingStyle;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._lineEndingStyle === 'undefined') {
                var value = new PdfAnnotationLineEndingStyle();
                value._dictionary = this._dictionary;
                if (this._dictionary.has('LE')) {
                    var lineStyles = this._dictionary.getArray('LE');
                    if (lineStyles && Array.isArray(lineStyles)) {
                        value._begin = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapLineEndingStyle */ .E4)(lineStyles[0].name);
                        value._end = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapLineEndingStyle */ .E4)(lineStyles[1].name);
                    }
                }
                this._lineEndingStyle = value;
            }
            return this._lineEndingStyle;
        },
        /**
         * Sets the line ending style of the line annotation.
         *
         * @param {PdfAnnotationLineEndingStyle} value Line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the line ending style of the line annotation.
         * annotation.lineEndingStyle = new PdfAnnotationLineEndingStyle(PdfLineEndingStyle.openArrow, PdfLineEndingStyle.closeArrow);
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            var style = this.lineEndingStyle;
            if (style.begin !== value.begin || style.end !== value.end) {
                style.begin = value.begin;
                style.end = value.end;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "leaderOffset", {
        /**
         * Gets the leader offset of the line annotation.
         *
         * @returns {number} Leader offset.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the leader offset value of the line annotation
         * let leaderOffset: number = annotation.leaderOffset;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._leaderOffset === 'undefined' && this._dictionary.has('LLO')) {
                var leaderOffset = this._dictionary.get('LLO');
                if (typeof leaderOffset !== 'undefined' && leaderOffset >= 0) {
                    this._leaderOffset = leaderOffset;
                }
            }
            return this._leaderOffset;
        },
        /**
         * Sets the leader offset of the line annotation.
         *
         * @param {number} value Leader line offset.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the leader offset of the line annotation.
         * annotation.leaderOffset = 1;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!Number.isNaN(value)) {
                this._dictionary.update('LLO', value);
                this._leaderOffset = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "lineIntent", {
        /**
         * Gets the line intent of the line annotation.
         *
         * @returns {PdfLineIntent} Line intent.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the line intent value of the line annotation
         * let lineIntent: PdfLineIntent = annotation.lineIntent;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._lineIntent === 'undefined' && this._dictionary.has('IT')) {
                var lineIntent = this._dictionary.get('IT');
                if (lineIntent) {
                    this._lineIntent = lineIntent.name === 'LineDimension' ? _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineIntent */ .tU.lineDimension : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineIntent */ .tU.lineArrow;
                }
            }
            return this._lineIntent;
        },
        /**
         * Sets the line intent of the line annotation.
         *
         * @param {PdfLineIntent} value Line intent.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the line intent of the line annotation.
         * annotation.lineIntent = PdfLineIntent.lineDimension;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value !== this.lineIntent) {
                this._lineIntent = value;
                this._dictionary.update('IT', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(value === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineIntent */ .tU.lineDimension ? 'LineDimension' : 'LineArrow'));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "measure", {
        /**
         * Gets the flag to have measurement dictionary of the line annotation.
         *
         * @returns {boolean} measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the flag to have measurement dictionary of the line annotation.
         * let measure: boolean = annotation.measure;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._measure === 'undefined') {
                this._measure = this._dictionary.has('Measure');
            }
            return this._measure;
        },
        /**
         * Sets the flag to add measurement dictionary to the line annotation.
         *
         * @param {boolean} value Measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the flag to have measurement dictionary of the line annotation.
         * annotation.measure = true;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value) {
                if (!this._isLoaded) {
                    this._measure = value;
                    this.caption.cap = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfLineAnnotation.prototype, "unit", {
        /**
         * Gets the measurement unit of the annotation.
         *
         * @returns {PdfMeasurementUnit} Measurement unit.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the measurement unit of the annotation.
         * let unit: PdfMeasurementUnit = annotation.unit;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._unit === 'undefined' || this._isLoaded) {
                this._unit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter;
                if (this._dictionary.has('Contents')) {
                    var text = this._dictionary.get('Contents');
                    this._unitString = text.substring(text.length - 2);
                    this._unit = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapMeasurementUnit */ .SN)(this._unitString);
                }
            }
            return this._unit;
        },
        /**
         * Sets the measurement unit of the line annotation.
         *
         * @param {PdfMeasurementUnit} value Measurement unit.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the measurement unit of the annotation.
         * annotation.unit = PdfMeasurementUnit.centimeter;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._measure) {
                if (!this._isLoaded && typeof value !== 'undefined') {
                    this._unit = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfLineAnnotation._load = function (page, dictionary) {
        var annot = new PdfLineAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfLineAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfLineAnnotation.prototype._postProcess = function (flatten) {
        if (typeof this.linePoints === 'undefined' || this.linePoints === null) {
            throw new Error('Line points cannot be null or undefined');
        }
        else {
            var cropOrMediaBox = this._getCropOrMediaBox();
            if (cropOrMediaBox && cropOrMediaBox.length > 3 && this.linePoints.length > 3 && typeof cropOrMediaBox[0] === 'number' && typeof cropOrMediaBox[1] === 'number' && (cropOrMediaBox[0] !== 0 || cropOrMediaBox[1] !== 0)) {
                this._linePoints[0] += cropOrMediaBox[0];
                this._linePoints[1] += cropOrMediaBox[1];
                this._linePoints[2] += cropOrMediaBox[0];
                this._linePoints[3] += cropOrMediaBox[1];
                this._dictionary.update('L', this._linePoints);
            }
        }
        if (!this._dictionary.has('Cap')) {
            this._dictionary.set('Cap', false);
        }
        if (!this._dictionary.has('CP')) {
            this._dictionary.set('CP', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Inline'));
        }
        if (!this._dictionary.has('LE')) {
            this.lineEndingStyle = new PdfAnnotationLineEndingStyle();
        }
        if (!this._dictionary.has('LL')) {
            this.leaderLine = 0;
        }
        if (!this._dictionary.has('LLE')) {
            this.leaderExt = 0;
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (this.border.dash === null || typeof this.border.dash === 'undefined') {
            this.border.dash = [];
            if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
                this.border.dash = [3, 1];
            }
            else if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dot) {
                this.border.dash = [1, 1];
            }
        }
        if (this._measure) {
            this._appearanceTemplate = this._createLineMeasureAppearance(flatten);
        }
        else {
            var isUpdated = false;
            if (this._setAppearance) {
                this._appearanceTemplate = this._createAppearance();
                if (this._page._isNew && !(this._flatten || flatten)) {
                    var boundsArray = this._obtainLineBounds();
                    var bounds = {
                        x: boundsArray[0],
                        y: boundsArray[1], width: boundsArray[2], height: boundsArray[3]
                    };
                    this._bounds = bounds;
                    var updatedBounds = [this._bounds.x,
                        this._bounds.y,
                        this._bounds.x + this._bounds.width,
                        this._bounds.y + this._bounds.height];
                    this._dictionary.update('Rect', updatedBounds);
                    isUpdated = true;
                }
            }
            else {
                var bounds = this._obtainLineBounds();
                var rectangleBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._fromRectangle */ .xh)({ x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] });
                if (this._page._isNew && this._page._pageSettings && this._setAppearance && !this.flatten) {
                    rectangleBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this, bounds);
                }
                this.bounds = { x: rectangleBounds[0], y: rectangleBounds[1], width: rectangleBounds[2], height: rectangleBounds[3] };
                this._dictionary.update('Rect', rectangleBounds);
                isUpdated = true;
            }
            if (this._dictionary.has('Measure') && !isUpdated) {
                var boundsArray = this._obtainLineBounds();
                var bounds = { x: boundsArray[0],
                    y: boundsArray[1], width: boundsArray[2], height: boundsArray[3] };
                this._bounds = bounds;
                var updatedBounds = void 0;
                if (this._page && this._page._isNew && this._page._pageSettings && !this._setAppearance && !this.flatten) {
                    updatedBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this);
                }
                else {
                    updatedBounds = [this._bounds.x,
                        this._bounds.y,
                        this._bounds.x + this._bounds.width,
                        this._bounds.y + this._bounds.height];
                }
                this._dictionary.update('Rect', updatedBounds);
                if (this.flatten && !this.measure && this._page && this._page.size && Array.isArray(this._page.size) &&
                    this._page.size.length >= 2) {
                    this._bounds = { x: boundsArray[0], y: this._page.size[1] - (boundsArray[1] + boundsArray[3]),
                        width: boundsArray[2], height: boundsArray[3] };
                }
            }
        }
    };
    PdfLineAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                if (this._dictionary.has('Measure')) {
                    this._appearanceTemplate = this._createLineMeasureAppearance(isFlatten);
                }
                else {
                    this._appearanceTemplate = this._createAppearance();
                }
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    if (appearanceStream instanceof _base_stream__WEBPACK_IMPORTED_MODULE_9__/* ._PdfBaseStream */ .dS) {
                        var reference = dictionary.getRaw('N');
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate) {
                if (isFlatten) {
                    if (!this._dictionary.has('AP')) {
                        this._appearanceTemplate = this._createAppearance();
                    }
                    else {
                        var dictionary = this._dictionary.get('AP');
                        if (dictionary !== null && typeof dictionary !== 'undefined' && dictionary.has('N')) {
                            var appearanceStream = dictionary.get('N');
                            if (appearanceStream) {
                                var reference = dictionary.getRaw('N');
                                if (reference) {
                                    appearanceStream.reference = reference;
                                }
                                this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                            }
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups && isFlatten) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix, true);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        var appearance;
        if (!isFlatten && this._setAppearance && !this.measure) {
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference, appearance);
                this._dictionary.update('AP', reference);
            }
        }
        else if (this.measure && this._setAppearance && !this._dictionary.has('AP')) {
            var reference = this._crossReference._getNextReference();
            appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            this._crossReference._cacheMap.set(reference, appearance);
            this._dictionary.update('AP', reference);
        }
        if (appearance && this._appearanceTemplate && this._appearanceTemplate._content) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfLineAnnotation.prototype._createLineMeasureAppearance = function (_isFlatten) {
        var nativeRectangle = [0, 0, 0, 0];
        var area = this._convertToUnit();
        var linePoints1 = this._obtainLinePoints();
        var points = [];
        for (var j = 0; j < linePoints1.length; j = j + 2) {
            points.push([linePoints1[j], (linePoints1[j + 1])]);
        }
        var graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        graphicsPath._points = points;
        graphicsPath._pathTypes = [0, 1];
        var rectPath = graphicsPath._getBounds();
        this._bounds = { x: rectPath[0], y: rectPath[1], width: rectPath[2], height: rectPath[3] };
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(typeof this.color !== 'undefined' ? this._color : [0, 0, 0], this.border.width);
        var backBrush;
        if (this.innerColor) {
            backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        nativeRectangle = this._obtainLineBounds();
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, 0);
        var parameter = new _PaintParameter();
        template._writeTransformation = false;
        var graphics = template.graphics;
        parameter.borderPen = borderPen;
        if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
            parameter.borderPen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dash;
            parameter.borderPen._dashPattern = [3, 1];
        }
        else if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dot) {
            parameter.borderPen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dot;
            parameter.borderPen._dashPattern = [1, 1];
        }
        parameter.backBrush = backBrush;
        parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.color);
        var linePoints = this._obtainLinePoints();
        var font = this._obtainFont();
        if ((typeof font === 'undefined' || font === null) || (!this._isLoaded && font.size === 1)) {
            font = this._lineCaptionFont;
            this._pdfFont = font;
        }
        if (typeof linePoints !== 'undefined' && linePoints.length === 4) {
            var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
            var fontSize = font.measureString(area.toFixed(2) + ' ' + this._unitString, [0, 0], format, 0, 0);
            var angle = this._getAngle(this._linePoints);
            var leaderLine = 0;
            var lineAngle = 0;
            if (this.leaderLine < 0) {
                leaderLine = -(this.leaderLine);
                lineAngle = angle + 180;
            }
            else {
                leaderLine = this.leaderLine;
                lineAngle = angle;
            }
            var offset = (typeof this.leaderOffset !== 'undefined') ? (leaderLine + this.leaderOffset) : leaderLine;
            var startPoint = this._getAxisValue([this._linePoints[0], this._linePoints[1]], (lineAngle + 90), offset);
            var endPoint = this._getAxisValue([this._linePoints[2], this._linePoints[3]], (lineAngle + 90), offset);
            var lineDistance = (Math.sqrt(Math.pow((endPoint[0] - startPoint[0]), 2) +
                Math.pow((endPoint[1] - startPoint[1]), 2)));
            var centerWidth = lineDistance / 2 - ((fontSize[0] / 2) + this.border.width);
            var first = this._getAxisValue(startPoint, angle, centerWidth);
            var second = this._getAxisValue(endPoint, (angle + 180), centerWidth);
            var start = (this.lineEndingStyle.begin === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow ||
                this.lineEndingStyle.begin === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow) ?
                this._getAxisValue(startPoint, angle, this.border.width) :
                startPoint;
            var end = (this.lineEndingStyle.end === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow ||
                this.lineEndingStyle.end === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow) ?
                this._getAxisValue(endPoint, angle, -this.border.width) :
                endPoint;
            var state = void 0;
            if (this.opacity && this._opacity < 1) {
                state = graphics.save();
                graphics.setTransparency(this._opacity);
            }
            if (this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top || (!this.caption.cap && this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.inline)) {
                graphics.drawLine(borderPen, start[0], -start[1], end[0], -end[1]);
            }
            else {
                graphics.drawLine(borderPen, start[0], -start[1], first[0], -first[1]);
                graphics.drawLine(borderPen, end[0], -end[1], second[0], -second[1]);
            }
            if (this.opacity && this._opacity < 1) {
                graphics.restore(state);
            }
            this._drawLineStyle(startPoint, endPoint, graphics, angle, borderPen, backBrush, this.lineEndingStyle, this.border.width);
            var leaderExt = (typeof this.leaderExt !== 'undefined' ? this._leaderExt : 0);
            var beginLineExt = this._getAxisValue(startPoint, (lineAngle + 90), leaderExt);
            graphics.drawLine(borderPen, startPoint[0], -startPoint[1], beginLineExt[0], -beginLineExt[1]);
            var endLineExt = this._getAxisValue(endPoint, (lineAngle + 90), leaderExt);
            graphics.drawLine(borderPen, endPoint[0], -endPoint[1], endLineExt[0], -endLineExt[1]);
            var beginLeaderLine = this._getAxisValue(startPoint, (lineAngle - 90), leaderLine);
            graphics.drawLine(borderPen, startPoint[0], -startPoint[1], beginLeaderLine[0], -beginLeaderLine[1]);
            var endLeaderLine = this._getAxisValue(endPoint, (lineAngle - 90), leaderLine);
            graphics.drawLine(borderPen, endPoint[0], -endPoint[1], endLeaderLine[0], -endLeaderLine[1]);
            var midpoint = lineDistance / 2;
            var centerPoint = this._getAxisValue(startPoint, angle, midpoint);
            var captionPosition = void 0;
            var height = font._metrics._getHeight();
            if (this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top) {
                captionPosition = this._getAxisValue(centerPoint, (angle + 90), height);
            }
            else {
                captionPosition = this._getAxisValue(centerPoint, (angle + 90), (height / 2));
            }
            graphics.translateTransform(captionPosition[0], -captionPosition[1]);
            graphics.rotateTransform(-angle);
            graphics.drawString(area.toFixed(2) + ' ' + this._unitString, font, [(-fontSize[0] / 2), 0, 0, 0], null, parameter.foreBrush);
            graphics.restore();
        }
        if ((typeof _isFlatten !== 'undefined' && !_isFlatten) || !this._isLoaded) {
            template._content.dictionary._updated = true;
            var ref = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(ref, template._content);
            template._content.reference = ref;
            var nativeRectangle1 = [this.bounds.x,
                this.bounds.y + this.bounds.height,
                this.bounds.width,
                this.bounds.height];
            var size = this._page.size;
            nativeRectangle1[1] = size[1] - (this.bounds.y + this.bounds.height);
            if (this._isBounds && !this.measure) {
                nativeRectangle = nativeRectangle1;
                this._dictionary.update('Rect', [nativeRectangle1[0], nativeRectangle1[1], nativeRectangle1[2], nativeRectangle1[3]]);
            }
            else {
                this._dictionary.update('Rect', [nativeRectangle[0], nativeRectangle[1], nativeRectangle[2], nativeRectangle[3]]);
            }
            var ds = 'font:' +
                font._metrics._postScriptName +
                ' ' +
                font._size +
                'pt; color:' +
                this._colorToHex(this.color);
            this._dictionary.update('DS', ds);
            if (typeof _isFlatten !== 'undefined' && !_isFlatten) {
                if (this._dictionary.has('AP')) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
                }
                var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
                dic.set('N', ref);
                dic._updated = true;
                this._dictionary.set('AP', dic);
                var measureDictionary = this._createMeasureDictionary(this._unitString);
                var reference = this._crossReference._getNextReference();
                this._crossReference._cacheMap.set(reference, measureDictionary);
                measureDictionary._updated = true;
                if (this._dictionary.has('Measure')) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary, this._crossReference, 'Measure');
                }
                this._dictionary.update('Measure', reference);
            }
            var lineStyles = [];
            lineStyles.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.lineEndingStyle.begin)));
            lineStyles.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.lineEndingStyle.end)));
            this._dictionary.update('LE', lineStyles);
            if (this._linePoints !== null) {
                this._dictionary.update('L', this._linePoints);
            }
            else {
                throw new Error('LinePoints cannot be null');
            }
            this._dictionary.update('C', [Number.parseFloat((this.color[0] / 255).toFixed(3)),
                Number.parseFloat((this.color[1] / 255).toFixed(3)),
                Number.parseFloat((this.color[2] / 255).toFixed(3))]);
            var offset = this._dictionary.has('LLO') ? this.leaderOffset : 0;
            this._dictionary.update('Subtype', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('Line'));
            if (this._text && this._text !== '') {
                this._dictionary.update('Contents', this._text + ' ' + area.toFixed(2) + ' ' + this._unitString);
            }
            else {
                this._dictionary.update('Contents', area.toFixed(2) + ' ' + this._unitString);
            }
            this._dictionary.update('IT', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('LineDimension'));
            this._dictionary.update('LLE', this.leaderExt);
            this._dictionary.update('LLO', offset);
            this._dictionary.update('LL', this.leaderLine);
            this._dictionary.update('CP', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top ? 'Top' : 'Inline'));
            this._dictionary.update('Cap', this.caption.cap);
            var bounds = [nativeRectangle[0],
                nativeRectangle[1],
                nativeRectangle[0] + nativeRectangle[2],
                nativeRectangle[1] + nativeRectangle[3]];
            this._dictionary.update('Rect', bounds);
            this._bounds = { x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] };
        }
        return template;
    };
    PdfLineAnnotation.prototype._calculateAngle = function (startPointX, startPointY, endPointX, endPointY) {
        return -(Math.atan2((endPointY - startPointY), (endPointX - startPointX)) * (180 / Math.PI));
    };
    PdfLineAnnotation.prototype._calculateLineBounds = function (linePoints, leaderLineExt, leaderLine, leaderOffset, lineStyle, borderWidth) {
        var bounds = { x: 0, y: 0, width: 0, height: 0 };
        if (linePoints && linePoints.length === 4) {
            var angle = this._getAngle(linePoints);
            var leaderLines = 0;
            var lineAngle = 0;
            if (leaderLine < 0) {
                leaderLines = -(leaderLine);
                lineAngle = angle + 180;
            }
            else {
                leaderLines = leaderLine;
                lineAngle = angle;
            }
            var x1y1 = [linePoints[0], linePoints[1]];
            var x2y2 = [linePoints[2], linePoints[3]];
            if (leaderOffset !== 0) {
                var offsetPoint1 = this._getAxisValue(x1y1, (lineAngle + 90), leaderOffset);
                var offsetPoint2 = this._getAxisValue(x2y2, (lineAngle + 90), leaderOffset);
                linePoints[0] = offsetPoint1[0];
                linePoints[1] = offsetPoint1[1];
                linePoints[2] = offsetPoint2[0];
                linePoints[3] = offsetPoint2[1];
            }
            var startingPoint = this._getAxisValue(x1y1, (lineAngle + 90), leaderLines + leaderOffset);
            var endingPoint = this._getAxisValue(x2y2, (lineAngle + 90), leaderLines + leaderOffset);
            var beginLineLeader = this._getAxisValue(x1y1, (lineAngle + 90), leaderLineExt + leaderLines + leaderOffset);
            var endLineLeader = this._getAxisValue(x2y2, (lineAngle + 90), leaderLineExt + leaderLines + leaderOffset);
            var beginLinePoint = this._getLinePoint(lineStyle.begin, borderWidth);
            var endLinePoint = this._getLinePoint(lineStyle.end, borderWidth);
            var widthX = [];
            var heightY = [];
            if ((lineAngle >= 45 && lineAngle <= 135) || (lineAngle >= 225 && lineAngle <= 315)) {
                widthX[0] = beginLinePoint.y;
                heightY[0] = beginLinePoint.x;
                widthX[1] = endLinePoint.y;
                heightY[1] = endLinePoint.x;
            }
            else {
                widthX[0] = beginLinePoint.x;
                heightY[0] = beginLinePoint.y;
                widthX[1] = endLinePoint.x;
                heightY[1] = endLinePoint.y;
            }
            var width = Math.max(widthX[0], widthX[1]);
            var height = Math.max(heightY[0], heightY[1]);
            if (width === 0) {
                width = 1;
            }
            if (height === 0) {
                height = 1;
            }
            if (startingPoint[0] === Math.min(startingPoint[0], endingPoint[0])) {
                startingPoint[0] -= width * borderWidth;
                endingPoint[0] += width * borderWidth;
                startingPoint[0] = Math.min(startingPoint[0], linePoints[0]);
                startingPoint[0] = Math.min(startingPoint[0], beginLineLeader[0]);
                endingPoint[0] = Math.max(endingPoint[0], linePoints[2]);
                endingPoint[0] = Math.max(endingPoint[0], endLineLeader[0]);
            }
            else {
                startingPoint[0] += width * borderWidth;
                endingPoint[0] -= width * borderWidth;
                startingPoint[0] = Math.max(startingPoint[0], linePoints[0]);
                startingPoint[0] = Math.max(startingPoint[0], beginLineLeader[0]);
                endingPoint[0] = Math.min(endingPoint[0], linePoints[2]);
                endingPoint[0] = Math.min(endingPoint[0], endLineLeader[0]);
            }
            if (startingPoint[1] === Math.min(startingPoint[1], endingPoint[1])) {
                startingPoint[1] -= height * borderWidth;
                endingPoint[1] += height * borderWidth;
                startingPoint[1] = Math.min(startingPoint[1], linePoints[1]);
                startingPoint[1] = Math.min(startingPoint[1], beginLineLeader[1]);
                endingPoint[1] = Math.max(endingPoint[1], linePoints[3]);
                endingPoint[1] = Math.max(endingPoint[1], endLineLeader[1]);
            }
            else {
                startingPoint[1] += height * borderWidth;
                endingPoint[1] -= height * borderWidth;
                startingPoint[1] = Math.max(startingPoint[1], linePoints[1]);
                startingPoint[1] = Math.max(startingPoint[1], beginLineLeader[1]);
                endingPoint[1] = Math.min(endingPoint[1], linePoints[3]);
                endingPoint[1] = Math.min(endingPoint[1], endLineLeader[1]);
            }
            bounds = this._getBounds([{ x: startingPoint[0], y: startingPoint[1] }, { x: endingPoint[0], y: endingPoint[1] }]);
        }
        return bounds;
    };
    PdfLineAnnotation.prototype._getLinePoint = function (style, borderWidth) {
        var point = { x: 0, y: 0 };
        if (style) {
            switch (style) {
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.square:
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.circle:
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.diamond:
                    point.x = 3;
                    point.y = 3;
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow:
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow:
                    point.x = 1;
                    point.y = 5;
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.rOpenArrow:
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.rClosedArrow:
                    point.x = 9 + (borderWidth / 2);
                    point.y = 5 + (borderWidth / 2);
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.slash:
                    point.x = 5;
                    point.y = 9;
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.butt:
                    point.x = 1;
                    point.y = 3;
                    break;
                default:
                    point.x = 0;
                    point.y = 0;
                    break;
            }
        }
        return point;
    };
    PdfLineAnnotation.prototype._getBounds = function (points) {
        var bounds = { x: 0, y: 0, width: 0, height: 0 };
        if (points.length > 0) {
            var xmin = points[0].x;
            var xmax = points[0].x;
            var ymin = points[0].y;
            var ymax = points[0].y;
            for (var i = 1; i < points.length; ++i) {
                var point = points[i];
                xmin = Math.min(point.x, xmin);
                xmax = Math.max(point.x, xmax);
                ymin = Math.min(point.y, ymin);
                ymax = Math.max(point.y, ymax);
            }
            bounds.x = xmin;
            bounds.y = ymin;
            bounds.width = xmax - xmin;
            bounds.height = ymax - ymin;
        }
        return bounds;
    };
    PdfLineAnnotation.prototype._obtainLineBounds = function () {
        var bounds = this.bounds;
        if (typeof this.linePoints !== 'undefined' && this._linePoints.length === 4) {
            var leaderOffset = this._dictionary.has('LLO') ? this.leaderOffset : 0;
            var leaderExt = this._dictionary.has('LLE') ? this.leaderExt : 0;
            var leaderLine = this._dictionary.has('LL') ? this.leaderLine : 0;
            bounds = this._calculateLineBounds(this._linePoints, leaderExt, leaderLine, leaderOffset, this.lineEndingStyle, this.border.width);
            bounds = { x: bounds.x - 8, y: bounds.y - 8, width: (bounds.width + 2 * 8), height: (bounds.height + 2 * 8) };
        }
        return [bounds.x, bounds.y, bounds.width, bounds.height];
    };
    PdfLineAnnotation.prototype._createAppearance = function () {
        var bounds = this._obtainLineBounds();
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(bounds, this._crossReference);
        var parameter = new _PaintParameter();
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, 0);
        template._writeTransformation = false;
        var graphics = template.graphics;
        var pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(typeof this.color !== 'undefined' ? this._color : [0, 0, 0], this.border.width);
        if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
            pen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dash;
            pen._dashPattern = [3, 1];
        }
        else if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dot) {
            pen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dot;
            pen._dashPattern = [1, 1];
        }
        if (this.border.style !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.solid && this.border.dash) {
            pen._dashPattern = this.border.dash;
        }
        parameter.borderPen = pen;
        parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.color);
        var brush;
        if (this.innerColor) {
            brush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        var font = this._obtainFont();
        if ((typeof font === 'undefined' || font === null) || (!this._isLoaded && font.size === 1)) {
            font = this._lineCaptionFont;
            this._pdfFont = font;
        }
        if (!this.text && !this._dictionary.has('Contents')) {
            this.text = this.subject;
        }
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        var lineWidth = 0;
        if (this.caption.cap) {
            lineWidth = font.measureString(this.text ? this.text : '', [0, 0], format, 0, 0)[0]; //66.71001;
        }
        if (typeof this.linePoints !== 'undefined' && this._linePoints.length === 4) {
            var angle = this._getAngle(this._linePoints);
            var leaderLine = 0;
            var lineAngle = 0;
            var leaderLineValue = this.leaderLine;
            if (leaderLineValue === null || typeof leaderLineValue === 'undefined') {
                this._leaderLine = 0;
                leaderLineValue = 0;
            }
            if (leaderLineValue < 0) {
                leaderLine = -(leaderLineValue);
                lineAngle = angle + 180;
            }
            else {
                leaderLine = leaderLineValue;
                lineAngle = angle;
            }
            var offset = (typeof this.leaderOffset !== 'undefined') ? (leaderLine + this.leaderOffset) : leaderLine;
            var startPoint = this._getAxisValue([this._linePoints[0], this._linePoints[1]], (lineAngle + 90), offset);
            var endPoint = this._getAxisValue([this._linePoints[2], this._linePoints[3]], (lineAngle + 90), offset);
            var lineDistance = (Math.sqrt(Math.pow((endPoint[0] - startPoint[0]), 2) +
                Math.pow((endPoint[1] - startPoint[1]), 2)));
            var centerWidth = lineDistance / 2 - ((lineWidth / 2) + this.border.width);
            var first = this._getAxisValue(startPoint, angle, centerWidth);
            var second = this._getAxisValue(endPoint, (angle + 180), centerWidth);
            var start = (this.lineEndingStyle.begin === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow ||
                this.lineEndingStyle.begin === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow) ?
                this._getAxisValue(startPoint, angle, this.border.width) :
                startPoint;
            var end = (this.lineEndingStyle.end === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow ||
                this.lineEndingStyle.end === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow) ?
                this._getAxisValue(endPoint, angle, -this.border.width) :
                endPoint;
            if (this.opacity && this._opacity < 1) {
                var state = graphics.save();
                graphics.setTransparency(this._opacity);
                this._drawLine(graphics, pen, start, end, first, second);
                graphics.restore(state);
            }
            else {
                this._drawLine(graphics, pen, start, end, first, second);
            }
            this._drawLineStyle(startPoint, endPoint, graphics, angle, pen, brush, this.lineEndingStyle, this.border.width);
            var leaderExt = (typeof this.leaderExt !== 'undefined' ? this._leaderExt : 0);
            var beginLineExt = this._getAxisValue(startPoint, (lineAngle + 90), leaderExt);
            graphics.drawLine(pen, startPoint[0], -startPoint[1], beginLineExt[0], -beginLineExt[1]);
            var endLineExt = this._getAxisValue(endPoint, (lineAngle + 90), leaderExt);
            graphics.drawLine(pen, endPoint[0], -endPoint[1], endLineExt[0], -endLineExt[1]);
            var beginLeaderLine = this._getAxisValue(startPoint, (lineAngle - 90), leaderLine);
            graphics.drawLine(pen, startPoint[0], -startPoint[1], beginLeaderLine[0], -beginLeaderLine[1]);
            var endLeaderLine = this._getAxisValue(endPoint, (lineAngle - 90), leaderLine);
            graphics.drawLine(pen, endPoint[0], -endPoint[1], endLeaderLine[0], -endLeaderLine[1]);
            var midpoint = lineDistance / 2;
            var centerPoint = this._getAxisValue(startPoint, angle, midpoint);
            var captionPosition = void 0;
            var height = font._metrics._getHeight();
            if (this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top) {
                if (this._measure) {
                    captionPosition = this._getAxisValue(centerPoint, (angle + 90), 2 * height);
                }
                else {
                    captionPosition = this._getAxisValue(centerPoint, (angle + 90), height);
                }
            }
            else {
                if (this._measure) {
                    captionPosition = this._getAxisValue(centerPoint, (angle + 90), 3 * (height / 2));
                }
                else {
                    captionPosition = this._getAxisValue(centerPoint, (angle + 90), (height / 2));
                }
            }
            graphics.translateTransform(captionPosition[0], -captionPosition[1]);
            graphics.rotateTransform(-angle);
            if (this.caption.cap) {
                graphics.drawString(this.text, font, [(-lineWidth / 2), 0, 0, 0], null, parameter.foreBrush);
            }
            graphics.restore();
            var rectangleBounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._fromRectangle */ .xh)({ x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] });
            this.bounds = { x: rectangleBounds[0], y: rectangleBounds[1], width: rectangleBounds[2], height: rectangleBounds[3] };
            if ((!this.measure) && (!this._dictionary.has('Measure'))) {
                this._dictionary.update('Rect', [rectangleBounds[0], rectangleBounds[1], rectangleBounds[2], rectangleBounds[3]]);
            }
        }
        return template;
    };
    PdfLineAnnotation.prototype._drawLine = function (graphics, pen, start, end, first, second) {
        if (typeof this.text === 'undefined' ||
            this._text === '' ||
            this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top ||
            (!this.caption.cap && this.caption.type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.inline)) {
            graphics.drawLine(pen, start[0], -start[1], end[0], -end[1]);
        }
        else {
            graphics.drawLine(pen, start[0], -start[1], first[0], -first[1]);
            graphics.drawLine(pen, end[0], -end[1], second[0], -second[1]);
        }
    };
    PdfLineAnnotation.prototype._convertToUnit = function () {
        var points = this._obtainLinePoints();
        var data = new Array(points.length / 2);
        var count = 0;
        for (var j = 0; j < points.length; j = j + 2) {
            data[count] = [points[j], (points[j + 1])];
            count++;
        }
        var distance = Math.sqrt(Math.pow((data[1][0] - data[0][0]), 2) + Math.pow((data[1][1] - data[0][1]), 2));
        var value = this._getEqualPdfGraphicsUnit(this.unit, this._unitString);
        this._unitString = value.unitString;
        return (new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* ._PdfUnitConvertor */ .Gq())._convertUnits(distance, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point, value.graphicsUnit);
    };
    PdfLineAnnotation.prototype._obtainLinePoints = function () {
        var points = this.linePoints ? this._linePoints.slice() : [];
        return points;
    };
    return PdfLineAnnotation;
}(PdfComment));

/**
 * `PdfCircleAnnotation` class represents the circle annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new circle annotation with circle bounds
 * const annotation: PdfCircleAnnotation = new PdfCircleAnnotation(10, 10, 100, 100);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfCircleAnnotation = /** @class */ (function (_super) {
    __extends(PdfCircleAnnotation, _super);
    function PdfCircleAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._unit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter;
        _this._measureType = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCircleMeasurementType */ .Lq.diameter;
        _this._unitString = '';
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Circle'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.circleAnnotation;
        return _this;
    }
    Object.defineProperty(PdfCircleAnnotation.prototype, "measure", {
        /**
         * Gets the flag to have measurement dictionary of the circle annotation.
         *
         * @returns {boolean} measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfCircleAnnotation = page.annotations.at(0) as PdfCircleAnnotation;
         * // Gets the flag to have measurement dictionary of the circle annotation.
         * let measure: boolean = annotation.measure;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (!this._measure) {
                this._measure = this._dictionary.has('Measure');
            }
            return this._measure;
        },
        /**
         * Sets the flag to add measurement dictionary to the annotation.
         *
         * @param {boolean} value Measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfCircleAnnotation = page.annotations.at(0) as PdfCircleAnnotation;
         * // Sets the flag to have measurement dictionary of the circle annotation.
         * annotation.measure = true;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value) {
                if (!this._isLoaded) {
                    this._measure = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfCircleAnnotation.prototype, "unit", {
        /**
         * Gets the measurement unit of the annotation.
         *
         * @returns {PdfMeasurementUnit} Measurement unit.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfCircleAnnotation = page.annotations.at(0) as PdfCircleAnnotation;
         * // Gets the measurement unit of the annotation.
         * let unit: PdfMeasurementUnit = annotation.unit;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._unit === 'undefined' || this._isLoaded) {
                this._unit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter;
                if (this._dictionary.has('Contents')) {
                    var text = this._dictionary.get('Contents');
                    this._unitString = text.substring(text.length - 2);
                    this._unit = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapMeasurementUnit */ .SN)(this._unitString);
                }
            }
            return this._unit;
        },
        /**
         * Sets the measurement unit of the annotation.
         *
         * @param {PdfMeasurementUnit} value Measurement unit.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfCircleAnnotation = page.annotations.at(0) as PdfCircleAnnotation;
         * // Sets the measurement unit of the annotation.
         * annotation.unit = PdfMeasurementUnit.centimeter;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._measure) {
                if (!this._isLoaded && typeof value !== 'undefined') {
                    this._unit = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfCircleAnnotation.prototype, "measureType", {
        /**
         * Gets the measurement type of the annotation.
         *
         * @returns {PdfCircleMeasurementType} Measurement type.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfCircleAnnotation = page.annotations.at(0) as PdfCircleAnnotation;
         * // Gets the measurement type of the annotation.
         * let type: PdfCircleMeasurementType = annotation.type;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Contents')) {
                var text = this._dictionary.get('Contents');
                this._unitString = text.substring(text.length - 2);
                this._unit = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapMeasurementUnit */ .SN)(this._unitString);
                var value = text.substring(0, text.length - 2);
                var converter = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* ._PdfUnitConvertor */ .Gq();
                var radius = converter._convertUnits(this.bounds.width / 2, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point, (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapGraphicsUnit */ .FX)(this._unitString));
                if (radius.toString() === value) {
                    this._measureType = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCircleMeasurementType */ .Lq.radius;
                }
                else {
                    this._measureType = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCircleMeasurementType */ .Lq.diameter;
                }
            }
            return this._measureType;
        },
        /**
         * Sets the measurement type of the annotation.
         *
         * @param {PdfCircleMeasurementType} value Measurement type.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfCircleAnnotation = page.annotations.at(0) as PdfCircleAnnotation;
         * // Sets the measurement type of the annotation.
         * annotation.type = PdfCircleMeasurementType.diameter;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._measure) {
                if (!this._isLoaded && typeof value !== 'undefined') {
                    this._measureType = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfCircleAnnotation._load = function (page, dictionary) {
        var annot = new PdfCircleAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfCircleAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfCircleAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (this._measure) {
            this._appearanceTemplate = this._createCircleMeasureAppearance(isFlatten);
        }
        else {
            this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createCircleAppearance();
            }
        }
    };
    PdfCircleAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                if (this._dictionary.has('Measure')) {
                    this._appearanceTemplate = this._createCircleMeasureAppearance(isFlatten);
                }
                else {
                    this._appearanceTemplate = this._createCircleAppearance();
                }
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createCircleAppearance();
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary !== null && typeof dictionary !== 'undefined' && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        var reference = dictionary.getRaw('N');
                        if (appearanceStream) {
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups && isFlatten) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        if (!isFlatten && this._setAppearance && !this.measure) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_1 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_1, appearance);
                this._dictionary.update('AP', reference_1);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfCircleAnnotation.prototype._createCircleMeasureAppearance = function (_isFlatten) {
        var borderWidth = this.border.width;
        var font = this._obtainFont();
        if ((typeof font === 'undefined' || font === null) || (!this._isLoaded && font.size === 1)) {
            font = this._circleCaptionFont;
            this._pdfFont = font;
        }
        var area = this._convertToUnit();
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        var str = area.toFixed(2) + ' ' + this._unitString;
        var fontsize = font.measureString(str, [0, 0], format, 0, 0);
        var color = this.color ? this.color : [0, 0, 0];
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(color, borderWidth);
        var nativeRectangle = [this.bounds.x,
            (this.bounds.y + this.bounds.height),
            this.bounds.width,
            this.bounds.height];
        nativeRectangle[1] = nativeRectangle[1] - nativeRectangle[3];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        var parameter = new _PaintParameter();
        template._writeTransformation = false;
        var graphics = template.graphics;
        var width = borderWidth / 2;
        parameter.borderPen = borderPen;
        if (this.innerColor) {
            parameter.backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(color);
        var rect = [nativeRectangle[0],
            -nativeRectangle[1] - nativeRectangle[3],
            nativeRectangle[2],
            nativeRectangle[3]];
        graphics.save();
        graphics.drawEllipse(rect[0] + width, rect[1] + width, rect[2] - borderWidth, rect[3] - borderWidth, new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(color, this.border.width));
        if (this._measureType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCircleMeasurementType */ .Lq.diameter) {
            graphics.save();
            graphics.translateTransform(nativeRectangle[0], -nativeRectangle[1]);
            var x = (nativeRectangle[3] / 2) - (fontsize[0] / 2);
            graphics.drawLine(parameter.borderPen, 0, -nativeRectangle[3] / 2, nativeRectangle[0] + nativeRectangle[2], -nativeRectangle[3] / 2);
            graphics.translateTransform(x, -(nativeRectangle[3] / 2) - font._metrics._getHeight());
            graphics.drawString(area.toFixed(2) + ' ' + this._unitString, font, [0, 0, 0, 0], null, parameter.foreBrush);
            graphics.restore();
        }
        else {
            graphics.save();
            graphics.translateTransform(nativeRectangle[0], -nativeRectangle[1]);
            var x = (nativeRectangle[2] / 2) + ((nativeRectangle[2] / 4) - (fontsize[0] / 2));
            graphics.drawLine(parameter.borderPen, nativeRectangle[2] / 2, -nativeRectangle[3] / 2, nativeRectangle[0] + nativeRectangle[2], -nativeRectangle[3] / 2);
            graphics.translateTransform(x, -(nativeRectangle[3] / 2) - font._metrics._getHeight());
            graphics.drawString(area.toFixed(2) + ' ' + this._unitString, font, [0, 0, 0, 0], null, parameter.foreBrush);
            graphics.restore();
        }
        graphics.restore();
        if ((typeof _isFlatten !== 'undefined' && !_isFlatten) || !this._isLoaded) {
            if (this._dictionary.has('AP')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
            }
            var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
            graphics._template._content.dictionary._updated = true;
            var ref = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(ref, graphics._template._content);
            graphics._template._content.reference = ref;
            dic.set('N', ref);
            dic._updated = true;
            this._dictionary.set('AP', dic);
            this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
            if (this._dictionary.has('Measure')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary, this._crossReference, 'Measure');
            }
            var measureDictionary = this._createMeasureDictionary(this._unitString);
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, measureDictionary);
            measureDictionary._updated = true;
            this._dictionary.update('Measure', reference);
            this._dictionary.update('Subtype', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('Circle'));
            if (this._text && this._text !== '') {
                this._dictionary.update('Contents', this._text + ' ' + area.toFixed(2) + ' ' + this._unitString);
            }
            else {
                this._dictionary.update('Contents', area.toFixed(2) + ' ' + this._unitString);
            }
            var ds = 'font:' +
                font._metrics._postScriptName +
                ' ' +
                font._size +
                'pt; color:' +
                this._colorToHex(this.color);
            this._dictionary.update('DS', ds);
        }
        return template;
    };
    PdfCircleAnnotation.prototype._convertToUnit = function () {
        var converter = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* ._PdfUnitConvertor */ .Gq();
        var value = this._getEqualPdfGraphicsUnit(this.unit, this._unitString);
        this._unitString = value.unitString;
        var radius = converter._convertUnits(this.bounds.width / 2, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point, value.graphicsUnit);
        if (this._measureType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCircleMeasurementType */ .Lq.diameter) {
            radius = 2 * radius;
        }
        return radius;
    };
    return PdfCircleAnnotation;
}(PdfComment));

/**
 * `PdfEllipseAnnotation` class represents the ellipse annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new ellipse annotation with bounds
 * const annotation: PdfEllipseAnnotation = new PdfEllipseAnnotation(10, 10, 100, 100);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfEllipseAnnotation = /** @class */ (function (_super) {
    __extends(PdfEllipseAnnotation, _super);
    function PdfEllipseAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Circle'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.ellipseAnnotation;
        return _this;
    }
    PdfEllipseAnnotation._load = function (page, dictionary) {
        var annot = new PdfEllipseAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfEllipseAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfEllipseAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
            this._appearanceTemplate = this._createCircleAppearance();
        }
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfEllipseAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createCircleAppearance();
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createCircleAppearance();
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        var reference = dictionary.getRaw('N');
                        if (appearanceStream) {
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        if (!isFlatten && this._setAppearance) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_2 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_2, appearance);
                this._dictionary.update('AP', reference_2);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    return PdfEllipseAnnotation;
}(PdfComment));

/**
 * `PdfSquareAnnotation` class represents the square annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new square annotation with bounds
 * const annotation: PdfSquareAnnotation = new PdfSquareAnnotation(10, 10, 100, 100);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfSquareAnnotation = /** @class */ (function (_super) {
    __extends(PdfSquareAnnotation, _super);
    function PdfSquareAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._unit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Square'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.squareAnnotation;
        return _this;
    }
    Object.defineProperty(PdfSquareAnnotation.prototype, "borderEffect", {
        /**
         * Gets the border effect of the square annotation.
         *
         * @returns {PdfBorderEffect} Border effect.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Gets the border effect of the square annotation.
         * let borderEffect : PdfBorderEffect = annotation.borderEffect;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._borderEffect === 'undefined') {
                var value = new PdfBorderEffect();
                value._dictionary = this._dictionary;
                if (this._dictionary.has('BE')) {
                    var dictionary = this._dictionary.get('BE');
                    value._intensity = dictionary.get('I');
                    value._style = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderEffectStyle */ .Yd)(dictionary.get('S').name);
                }
                else {
                    value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.solid;
                }
                this._borderEffect = value;
            }
            return this._borderEffect;
        },
        /**
         * Sets the border effect of the square annotation.
         *
         * @param {PdfBorderEffect} value Border effect.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Sets the border effect of the square annotation.
         * annotation.borderEffect.intensity = 1;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._borderEffect = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfSquareAnnotation.prototype, "measure", {
        /**
         * Gets the flag to have measurement dictionary of the Square annotation.
         *
         * @returns {boolean} measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Gets the flag to have measurement dictionary of the square annotation.
         * let measure: boolean = annotation.measure;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._measure === 'undefined' && this._dictionary.has('Measure')) {
                this._measure = this._dictionary.get('Measure');
            }
            return this._measure;
        },
        /**
         * Sets the flag to add measurement dictionary to the annotation.
         *
         * @param {boolean} value Measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Sets the flag to have measurement dictionary of the square annotation.
         * annotation.measure = true;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                if (!this._isLoaded) {
                    this._measure = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfSquareAnnotation.prototype, "unit", {
        /**
         * Gets the measurement unit of the annotation.
         *
         * @returns {PdfMeasurementUnit} Measurement unit.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Gets the measurement unit of the annotation.
         * let unit: PdfMeasurementUnit = annotation.unit;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._unit === 'undefined') {
                this._unit = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfMeasurementUnit */ .li.centimeter;
                if (this._dictionary.has('Contents')) {
                    var text = this._dictionary.get('Contents');
                    this._unitString = text.substring(text.length - 2);
                    this._unit = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapMeasurementUnit */ .SN)(this._unitString);
                }
            }
            return this._unit;
        },
        /**
         * Sets the measurement unit of the annotation.
         *
         * @param {PdfMeasurementUnit} value Measurement unit.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Sets the measurement unit of the annotation.
         * annotation.unit = PdfMeasurementUnit.centimeter;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._measure) {
                if (!this._isLoaded && typeof value !== 'undefined') {
                    this._unit = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfSquareAnnotation._load = function (page, dictionary) {
        var annot = new PdfSquareAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfSquareAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfSquareAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (this._measure) {
            this._appearanceTemplate = this._createSquareMeasureAppearance(isFlatten);
        }
        else {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createRectangleAppearance(this.borderEffect);
            }
            this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
            if (typeof this._intensity === 'undefined' &&
                typeof this._borderEffect !== 'undefined' &&
                this._borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                dictionary.set('I', this.borderEffect._intensity);
                if (this.borderEffect._style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                    dictionary.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('C'));
                }
                this._dictionary.update('BE', dictionary);
            }
        }
    };
    PdfSquareAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                if (this._dictionary.has('Measure')) {
                    this._appearanceTemplate = this._createSquareMeasureAppearance(isFlatten);
                }
                else {
                    this._appearanceTemplate = this._createRectangleAppearance(this.borderEffect);
                }
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createRectangleAppearance(this.borderEffect);
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        var reference = dictionary.getRaw('N');
                        if (appearanceStream) {
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups && !this.measure) {
            if (this._isLoaded && !this._dictionary.has('Measure')) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        if (!isFlatten && this._setAppearance && !this.measure) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_3 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_3, appearance);
                this._dictionary.update('AP', reference_3);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfSquareAnnotation.prototype._createSquareMeasureAppearance = function (_isFlatten) {
        var borderWidth = this.border.width;
        var font = this._obtainFont();
        if ((typeof font === 'undefined' || font === null) || (!this._isLoaded && font.size === 1)) {
            font = this._circleCaptionFont;
            this._pdfFont = font;
        }
        var area = this._calculateAreaOfSquare();
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        var str = area.toFixed(2) + ' sq ' + this._unitString;
        var fontsize = font.measureString(str, [0, 0], format, 0, 0);
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.color, borderWidth);
        var backBrush;
        if (this.innerColor) {
            backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        var nativeRectangle = [this.bounds.x,
            (this.bounds.y + this.bounds.height),
            this.bounds.width,
            this.bounds.height];
        var appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v({ x: this.bounds.x, y: this.bounds.y, width: this.bounds.width,
            height: this.bounds.height }, this);
        nativeRectangle[1] = nativeRectangle[1] - nativeRectangle[3];
        appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        var template = appearance.normal;
        var parameter = new _PaintParameter();
        template._writeTransformation = false;
        var graphics = appearance.normal.graphics;
        var width = borderWidth / 2;
        parameter.borderPen = borderPen;
        parameter.backBrush = backBrush;
        parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.color);
        var rect = [nativeRectangle[0],
            -nativeRectangle[1] - nativeRectangle[3],
            nativeRectangle[2],
            nativeRectangle[3]];
        graphics.drawRectangle(rect[0] + width, rect[1] + width, rect[2] - borderWidth, rect[3] - borderWidth, new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.color, this.border.width));
        graphics.save();
        graphics.translateTransform(nativeRectangle[0], -nativeRectangle[1]);
        var x = (nativeRectangle[2] / 2) - (fontsize[0] / 2);
        var y = (nativeRectangle[3] / 2) - (fontsize[1] / 2);
        graphics.translateTransform(x, -y - font._metrics._getHeight());
        graphics.drawString((area.toFixed(2) + ' sq ' + this._unitString), font, [0, 0, 0, 0], null, parameter.foreBrush);
        graphics.restore();
        if ((typeof _isFlatten !== 'undefined' && !_isFlatten) || !this._isLoaded) {
            if (this._dictionary.has('AP')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
            }
            var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
            var tem = graphics._template._content;
            tem.dictionary._updated = true;
            var ref = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(ref, tem);
            graphics._template._content.reference = ref;
            dic.set('N', ref);
            dic._updated = true;
            this._dictionary.set('AP', dic);
            var nativeRectangle1 = [this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height];
            var size = this._page.size;
            nativeRectangle1[1] = size[1] - (this.bounds.y + this.bounds.height);
            nativeRectangle1[2] = (this.bounds.x + this.bounds.width);
            nativeRectangle1[3] = size[1] - this.bounds.y;
            if (this._isBounds) {
                nativeRectangle = nativeRectangle1;
            }
            if (this._page._isNew && this._page._pageSettings) {
                nativeRectangle1 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this);
            }
            this._dictionary.update('Rect', [nativeRectangle1[0], nativeRectangle1[1], nativeRectangle1[2], nativeRectangle1[3]]);
            if (this._dictionary.has('Measure')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary, this._crossReference, 'Measure');
            }
            var reference = this._crossReference._getNextReference();
            var measureDictionary = this._createMeasureDictionary(this._unitString);
            this._crossReference._cacheMap.set(reference, measureDictionary);
            measureDictionary._updated = true;
            this._dictionary.update('Measure', reference);
            var ds = 'font:' +
                font._metrics._postScriptName +
                ' ' +
                font._size +
                'pt; color:' +
                this._colorToHex(this.color);
            this._dictionary.update('DS', ds);
            if (this._text && this._text !== '') {
                this._dictionary.update('Contents', this._text + ' ' + area.toFixed(2) + ' sq ' + this._unitString);
            }
            else {
                this._dictionary.update('Contents', area.toFixed(2) + ' sq ' + this._unitString);
            }
            this._dictionary.update('Subject', ('Area Measurement'));
            if (typeof this.subject === 'undefined') {
                this._dictionary.update('Subject', ('Area Measurement'));
            }
            this._dictionary.update('MeasurementTypes', 129);
            this._dictionary.update('Subtype', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('Square'));
            this._dictionary.update('IT', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('SquareDimension'));
            var elements = this._dictionary.getArray('Rect');
            var vertices = new Array(elements.length * 2);
            vertices[0] = elements[0];
            vertices[1] = elements[3];
            vertices[2] = elements[0];
            vertices[3] = elements[1];
            vertices[4] = elements[2];
            vertices[5] = elements[1];
            vertices[6] = elements[2];
            vertices[7] = elements[3];
            this._dictionary.update('Vertices', vertices);
        }
        return template;
    };
    PdfSquareAnnotation.prototype._calculateAreaOfSquare = function () {
        var area;
        var converter = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* ._PdfUnitConvertor */ .Gq();
        var value;
        if (this.bounds.width === this.bounds.height) {
            value = this._getEqualPdfGraphicsUnit(this.unit, this._unitString);
            this._unitString = value.unitString;
            var width = converter._convertUnits(this.bounds.width, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point, value.graphicsUnit);
            area = width * width;
        }
        else {
            value = this._getEqualPdfGraphicsUnit(this.unit, this._unitString);
            this._unitString = value.unitString;
            var width = converter._convertUnits(this.bounds.width, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point, value.graphicsUnit);
            value = this._getEqualPdfGraphicsUnit(this.unit, this._unitString);
            this._unitString = value.unitString;
            var height = converter._convertUnits(this.bounds.height, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfGraphicsUnit */ .XC.point, value.graphicsUnit);
            area = width * height;
        }
        return area;
    };
    return PdfSquareAnnotation;
}(PdfComment));

/**
 * `PdfRectangleAnnotation` class represents the rectangle annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new square annotation with bounds
 * const annotation: PdfRectangleAnnotation = new PdfRectangleAnnotation(10, 10, 200, 100);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfRectangleAnnotation = /** @class */ (function (_super) {
    __extends(PdfRectangleAnnotation, _super);
    function PdfRectangleAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Square'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.rectangleAnnotation;
        return _this;
    }
    Object.defineProperty(PdfRectangleAnnotation.prototype, "borderEffect", {
        /**
         * Gets the border effect of the rectangle annotation.
         *
         * @returns {PdfBorderEffect} Border effect.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRectangleAnnotation = page.annotations.at(0) as PdfRectangleAnnotation;
         * // Gets the border effect of the rectangle annotation.
         * let borderEffect: PdfBorderEffect = annotation.borderEffect;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._borderEffect === 'undefined') {
                var value = new PdfBorderEffect();
                value._dictionary = this._dictionary;
                if (this._dictionary.has('BE')) {
                    var dictionary = this._dictionary.get('BE');
                    value._intensity = dictionary.get('I');
                    value._style = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderEffectStyle */ .Yd)(dictionary.get('S').name);
                }
                else {
                    value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.solid;
                }
                this._borderEffect = value;
            }
            return this._borderEffect;
        },
        /**
         * Sets the border effect of the rectangle annotation.
         *
         * @param {PdfBorderEffect} value Border effect.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRectangleAnnotation = page.annotations.at(0) as PdfRectangleAnnotation;
         * // Sets the border effect of rectangle annotation.
         * annotation. borderEffect.style = PdfBorderEffectStyle.cloudy;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._borderEffect = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfRectangleAnnotation._load = function (page, dictionary) {
        var annot = new PdfRectangleAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfRectangleAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfRectangleAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dic.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dic);
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
        if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
            this._appearanceTemplate = this._createRectangleAppearance(this.borderEffect);
        }
        if (typeof this._intensity === 'undefined' &&
            typeof this._borderEffect !== 'undefined' &&
            this._borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
            var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dic.set('I', this.borderEffect._intensity);
            if (this.borderEffect._style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                dic.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('C'));
            }
            this._dictionary.update('BE', dic);
        }
    };
    PdfRectangleAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createRectangleAppearance(this.borderEffect);
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createRectangleAppearance(this.borderEffect);
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        var reference = dictionary.getRaw('N');
                        if (appearanceStream) {
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (isNormalMatrix && this._page && this._page.rotation !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 ||
                this._isValidTemplateMatrix(this._appearanceTemplate._content.dictionary, this.bounds, this._appearanceTemplate)) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        if (!isFlatten && this._setAppearance) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_4 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_4, appearance);
                this._dictionary.update('AP', reference_4);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfRectangleAnnotation.prototype._isValidTemplateMatrix = function (dictionary, bounds, appearanceTemplate) {
        var isValidMatrix = true;
        var pointF = bounds;
        if (dictionary && dictionary.has('Matrix')) {
            var box = dictionary.getArray('BBox');
            var matrix = dictionary.getArray('Matrix');
            if (matrix && box && matrix.length > 3 && box.length > 2) {
                if (typeof matrix[0] !== 'undefined' &&
                    typeof matrix[1] !== 'undefined' &&
                    typeof matrix[2] !== 'undefined' &&
                    typeof matrix[3] !== 'undefined') {
                    if (matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 1) {
                        if (typeof box[0] !== 'undefined' &&
                            typeof box[1] !== 'undefined' &&
                            typeof box[2] !== 'undefined' &&
                            typeof box[3] !== 'undefined') {
                            if (Math.round(box[0]) !== Math.round(-(matrix[4])) && Math.round(box[1]) !== Math.round(-(matrix[5])) ||
                                box[0] === 0 && Math.round(-(matrix[4])) === 0) {
                                var graphics = this._page.graphics;
                                var state = graphics.save();
                                if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                                    graphics.setTransparency(this._opacity);
                                }
                                pointF.x -= box[0];
                                pointF.y += box[1];
                                graphics.drawTemplate(appearanceTemplate, pointF);
                                graphics.restore(state);
                                this._page.annotations.remove(this);
                                isValidMatrix = false;
                            }
                        }
                    }
                }
            }
        }
        return isValidMatrix;
    };
    return PdfRectangleAnnotation;
}(PdfComment));

/**
 * `PdfPolygonAnnotation` class represents the polygon annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new polygon annotation with bounds
 * const annotation: PdfPolygonAnnotation = new PdfPolygonAnnotation([100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400]);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfPolygonAnnotation = /** @class */ (function (_super) {
    __extends(PdfPolygonAnnotation, _super);
    function PdfPolygonAnnotation(points) {
        var _this = _super.call(this) || this;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Polygon'));
        if (typeof points !== 'undefined') {
            _this._points = points;
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.polygonAnnotation;
        return _this;
    }
    Object.defineProperty(PdfPolygonAnnotation.prototype, "borderEffect", {
        /**
         * Gets the border effect of the polygon annotation.
         *
         * @returns {PdfBorderEffect} Border effect.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolygonAnnotation = page.annotations.at(0) as PdfPolygonAnnotation;
         * // Gets the border effect of the polygon annotation.
         * let borderEffect: PdfBorderEffect = annotation.borderEffect;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._borderEffect === 'undefined') {
                var value = new PdfBorderEffect();
                value._dictionary = this._dictionary;
                if (this._dictionary.has('BE')) {
                    var dictionary = this._dictionary.get('BE');
                    value._intensity = dictionary.get('I');
                    value._style = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderEffectStyle */ .Yd)(dictionary.get('S').name);
                }
                else {
                    value._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.solid;
                }
                this._borderEffect = value;
            }
            return this._borderEffect;
        },
        /**
         * Sets the border effect of the polygon annotation.
         *
         * @param {PdfBorderEffect} value Border effect.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolygonAnnotation = page.annotations.at(0) as PdfPolygonAnnotation;
         * // Sets the border effect of the polygon annotation
         * annotation.borderEffect.style = PdfBorderEffectStyle.cloudy ;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._borderEffect = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfPolygonAnnotation.prototype, "lineExtension", {
        /**
         * Gets the line extension of the polygon annotation.
         *
         * @returns {number} Line extension.
         *  ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolygonAnnotation = page.annotations.at(0) as PdfPolygonAnnotation;
         * // Gets the line extension of the polygon annotation
         * let lineExtension: number = annotation.lineExtension;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._lineExtension === 'undefined' && this._dictionary.has('LLE')) {
                var lineExt = this._dictionary.get('LLE');
                if (typeof lineExt !== 'undefined' && lineExt >= 0) {
                    this._lineExtension = lineExt;
                }
            }
            return this._lineExtension;
        },
        /**
         * Sets the line extension of the polygon annotation.
         *
         * @param {number} value Line extension.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolygonAnnotation = page.annotations.at(0) as PdfPolygonAnnotation;
         * // Sets the line extension of the polygon annotation
         * annotation.lineExtension = 5;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!Number.isNaN(value)) {
                if (value >= 0) {
                    this._dictionary.update('LLE', value);
                    this._lineExtension = value;
                }
                else {
                    throw new Error('LineExtension should be non negative number');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    //Implementation
    PdfPolygonAnnotation._load = function (page, dictionary) {
        var annot = new PdfPolygonAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfPolygonAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfPolygonAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this._points === 'undefined' || this._points === null) {
            throw new Error('Points cannot be null or undefined');
        }
        if (!this._dictionary.has('LLE')) {
            this.lineExtension = 0;
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dic.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dic);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        var array = [];
        array.push.apply(array, this._points);
        this._points = this._getPoints(this._points);
        if (array[0] !== array[array.length - 2] || array[1] !== array[array.length - 1]) {
            this._points.push(this._points[0]);
            this._points.push(this._points[1]);
        }
        var polygonBounds = this._getBoundsValue(this._points);
        var bounds = [polygonBounds.x,
            polygonBounds.y,
            polygonBounds.x + polygonBounds.width,
            polygonBounds.y + polygonBounds.height];
        this._dictionary.update('Rect', bounds);
        this._dictionary.update('LLE', this._lineExtension);
        if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
            this._appearanceTemplate = this._createPolygonAppearance(isFlatten);
        }
        this._dictionary.update('Vertices', this._points);
        if (typeof this._intensity === 'undefined' &&
            typeof this._borderEffect !== 'undefined' &&
            this._borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
            var dic = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dic.set('I', this.borderEffect._intensity);
            if (this.borderEffect._style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                dic.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('C'));
            }
            this._dictionary.update('BE', dic);
        }
    };
    PdfPolygonAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        this._flatten = isFlatten;
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createPolygonAppearance(isFlatten);
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (this._dictionary.has('AP')) {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        var reference = dictionary.getRaw('N');
                        if (appearanceStream) {
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
        }
        if (isFlatten) {
            if (this._appearanceTemplate) {
                var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
                if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                    var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                    if (box && box.length >= 2) {
                        this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                    }
                }
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else {
                this._page.annotations.remove(this);
            }
        }
        if (!isFlatten && this._setAppearance) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_5 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_5, appearance);
                this._dictionary.update('AP', reference_5);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfPolygonAnnotation.prototype._createPolygonAppearance = function (flatten) {
        if (typeof flatten !== 'undefined' && flatten) {
            var borderPen = void 0;
            if (this.color && this.border.width > 0) {
                borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.color, this.border.width);
            }
            var backgroundBrush = void 0;
            if (this.innerColor) {
                backgroundBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.innerColor);
            }
            var graphics = this._page.graphics;
            if (borderPen || backgroundBrush) {
                var state = void 0;
                if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                    state = graphics.save();
                    graphics.setTransparency(this._opacity);
                }
                if (this.borderEffect.intensity !== 0 && this.borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                    var radius = this.borderEffect.intensity * 4 + 0.5 * this.border.width;
                    var graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                    graphicsPath.addPolygon(this._getLinePoints());
                    this._drawCloudStyle(graphics, backgroundBrush, borderPen, radius, 0.833, graphicsPath._points, false);
                }
                else {
                    graphics.drawPolygon(this._getLinePoints(), borderPen, backgroundBrush);
                }
                if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                    graphics.restore(state);
                }
            }
            return graphics._template;
        }
        else {
            var boundsValue = void 0;
            var rect = { x: 0, y: 0, width: 0, height: 0 };
            if (typeof this._points === 'undefined' && this._dictionary.has('Vertices')) {
                this._points = this._dictionary.get('Vertices');
                boundsValue = this._getBoundsValue(this._points);
            }
            else {
                boundsValue = this._getBoundsValue(this._points);
            }
            if (typeof this._borderEffect !== 'undefined' &&
                typeof this.borderEffect.intensity !== 'undefined' && this.borderEffect.intensity !== 0 &&
                this._borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                rect.x = boundsValue.x - (this.borderEffect.intensity * 5) - this.border.width;
                rect.y = boundsValue.y - (this.borderEffect.intensity * 5) - this.border.width;
                rect.width = boundsValue.width + (this.borderEffect.intensity * 10) + (2 * this.border.width);
                rect.height = boundsValue.height + (this.borderEffect.intensity * 10) + (2 * this.border.width);
            }
            else {
                rect.x = boundsValue.x - this.border.width;
                rect.y = boundsValue.y - this.border.width;
                rect.width = boundsValue.width + (2 * this.border.width);
                rect.height = boundsValue.height + (2 * this.border.width);
            }
            var appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v({ x: rect.x, y: rect.y, width: rect.width, height: rect.height }, this);
            appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T([rect.x, rect.y, rect.width, rect.height], this._crossReference);
            var template = appearance.normal;
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
            template._writeTransformation = false;
            var graphics = appearance.normal.graphics;
            var parameter = new _PaintParameter();
            if (this.innerColor) {
                parameter.backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
            }
            if (this.border.width > 0 && this.color) {
                parameter.borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this._color, this.border.width);
            }
            if (this.color) {
                parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._color);
            }
            if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                graphics.save();
                graphics.setTransparency(this._opacity);
            }
            else {
                graphics.save();
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(this.borderEffect) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(this.borderEffect.intensity) &&
                this.borderEffect.intensity !== 0 && this.borderEffect.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
                var radius = this.borderEffect.intensity * 4 + 0.5 * this.border.width;
                var graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                graphicsPath.addPolygon(this._getLinePoints());
                this._drawCloudStyle(graphics, parameter.backBrush, parameter.borderPen, radius, 0.833, graphicsPath._points, false);
            }
            else {
                graphics.drawPolygon(this._getLinePoints(), parameter.borderPen, parameter.backBrush);
            }
            if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                graphics.restore();
            }
            graphics.restore();
            if (this._isBounds) {
                template._content.dictionary._updated = true;
                this._dictionary.update('LLE', this.lineExtension);
                this._dictionary.update('Vertices', this._points);
            }
            this._dictionary.update('Rect', [rect.x, rect.y, rect.x + rect.width, rect.y + rect.height]);
            return template;
        }
    };
    PdfPolygonAnnotation.prototype._getLinePoints = function () {
        var _this = this;
        var polygonPoints;
        var pageSize = this._page.size;
        var pageHeight = pageSize[1];
        var pageWidth = pageSize[0];
        if (this._dictionary.has('Vertices') && !this._isBounds) {
            var rotation = void 0;
            if (this._page._pageDictionary.has('Rotate')) {
                rotation = this._page._pageDictionary.get('Rotate');
            }
            if (this._page && this._page.rotation) {
                if (this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90) {
                    rotation = 90;
                }
                else if (this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180) {
                    rotation = 180;
                }
                else if (this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270) {
                    rotation = 270;
                }
            }
            var linePoints = this._dictionary.getArray('Vertices');
            if (linePoints) {
                var points = linePoints.slice();
                polygonPoints = [];
                for (var j = 0; j < points.length; j = j + 2) {
                    var yValue = this.flatten ? (pageHeight - points[j + 1]) : -points[j + 1];
                    polygonPoints.push([points[j], yValue]);
                }
                if (rotation) {
                    if (rotation === 270) {
                        polygonPoints.forEach(function (point) {
                            var x = point[0];
                            point[0] = point[1];
                            point[1] = pageWidth - x;
                        });
                    }
                    else if (rotation === 90) {
                        polygonPoints.forEach(function (point) {
                            var x = point[0];
                            if (_this._page._origin[1] !== 0) {
                                point[0] = pageHeight - (point[1] - pageHeight);
                            }
                            else {
                                point[0] = pageHeight - point[1];
                            }
                            point[1] = x;
                        });
                    }
                    else if (rotation === 180) {
                        polygonPoints.forEach(function (point) {
                            var x = point[0];
                            point[0] = pageWidth - x;
                            point[1] = pageHeight - point[1];
                        });
                    }
                }
            }
        }
        else if (this._points) {
            var points = this._points.slice();
            polygonPoints = [];
            for (var j = 0; j < this._points.length; j = j + 2) {
                var yValue = this.flatten ? (pageHeight - points[j + 1]) : -points[j + 1];
                polygonPoints.push([points[j], yValue]);
            }
        }
        return polygonPoints;
    };
    return PdfPolygonAnnotation;
}(PdfComment));

/**
 * `PdfPolyLineAnnotation` class represents the polyline annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new poly line annotation with bounds
 * const annotation: PdfPolyLineAnnotation = new PdfPolyLineAnnotation ([100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400]);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfPolyLineAnnotation = /** @class */ (function (_super) {
    __extends(PdfPolyLineAnnotation, _super);
    function PdfPolyLineAnnotation(points) {
        var _this = _super.call(this) || this;
        _this._beginLine = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none;
        _this._endLine = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('PolyLine'));
        if (typeof points !== 'undefined') {
            _this._points = points;
        }
        else {
            _this._points = [];
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.polyLineAnnotation;
        return _this;
    }
    Object.defineProperty(PdfPolyLineAnnotation.prototype, "beginLineStyle", {
        /**
         * Gets the begin line ending style of the annotation.
         *
         * @returns {PdfLineEndingStyle} Begin line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolyLineAnnotation = page.annotations.at(0) as PdfPolyLineAnnotation;
         * // Gets the begin line ending style of the annotation.
         * let beginLineStyle: PdfLineEndingStyle = annotation.beginLineStyle;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('LE')) {
                var lineStyles = this._dictionary.getArray('LE');
                if (lineStyles && Array.isArray(lineStyles)) {
                    this._beginLine = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapLineEndingStyle */ .E4)(lineStyles[0].name);
                }
            }
            return this._beginLine;
        },
        /**
         * Sets the begin line ending style of the annotation.
         *
         * @param {PdfLineEndingStyle} value Begin line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolyLineAnnotation = page.annotations.at(0) as PdfPolyLineAnnotation;
         * // Sets the begin line ending style of the annotation.
         * annotation.beginLineStyle = PdfLineEndingStyle.slash;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._beginLine) {
                this._beginLine = value;
                if (this._dictionary) {
                    var lineStyle = [];
                    lineStyle.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(value)));
                    lineStyle.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.endLineStyle)));
                    this._dictionary.update('LE', lineStyle);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfPolyLineAnnotation.prototype, "endLineStyle", {
        /**
         * Gets the end line ending style of the annotation.
         *
         * @returns {PdfLineEndingStyle} End line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolyLineAnnotation = page.annotations.at(0) as PdfPolyLineAnnotation;
         * // Gets the end line ending style of the annotation.
         * let endLineStyle: PdfLineEndingStyle = annotation.endLineStyle;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('LE')) {
                var lineStyles = this._dictionary.getArray('LE');
                if (lineStyles && Array.isArray(lineStyles)) {
                    this._endLine = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapLineEndingStyle */ .E4)(lineStyles[1].name);
                }
            }
            return this._endLine;
        },
        /**
         * Sets the end line ending style of the annotation.
         *
         * @param {PdfLineEndingStyle} value End line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolyLineAnnotation = page.annotations.at(0) as PdfPolyLineAnnotation;
         * // Sets the end line ending style of the annotation.
         * annotation.endLineStyle = PdfLineEndingStyle.square;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._endLine) {
                this._endLine = value;
                if (this._dictionary) {
                    var lineStyle = [];
                    lineStyle.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.beginLineStyle)));
                    lineStyle.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(value)));
                    this._dictionary.update('LE', lineStyle);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfPolyLineAnnotation.prototype, "lineExtension", {
        /**
         * Gets the line extension of the square annotation.
         *
         * @returns {number} Line extension.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolyLineAnnotation = page.annotations.at(0) as PdfPolyLineAnnotation;
         * // Gets the line extension of annotation.
         * let lineExtension: number = annotation.lineExtension;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._lineExtension === 'undefined' && this._dictionary.has('LLE')) {
                var lineExt = this._dictionary.get('LLE');
                if (typeof lineExt !== 'undefined' && lineExt >= 0) {
                    this._lineExtension = lineExt;
                }
            }
            return this._lineExtension;
        },
        /**
         * Sets the line extension of the square annotation.
         *
         * @param {number} value Line extension.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPolyLineAnnotation = page.annotations.at(0) as PdfPolyLineAnnotation;
         * // Sets the line extension of the annotation.
         * annotation.lineExtension = 3;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!Number.isNaN(value)) {
                if (value >= 0) {
                    this._dictionary.update('LLE', value);
                    this._lineExtension = value;
                }
                else {
                    throw new Error('LineExtension should be non negative number');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfPolyLineAnnotation._load = function (page, dictionary) {
        var annot = new PdfPolyLineAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfPolyLineAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfPolyLineAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this._points === 'undefined' || this._points === null) {
            throw new Error('Points cannot be null or undefined');
        }
        if (!this._dictionary.has('LLE')) {
            this.lineExtension = 0;
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        var points = this._getLinePoints();
        var pathTypes = [];
        pathTypes.push(0);
        for (var i = 1; i < points.length; i++) {
            pathTypes.push(1);
        }
        this._polylinePoints = points;
        this._pathTypes = pathTypes;
        var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        path._points = points;
        path._pathTypes = pathTypes;
        this._dictionary.update('Vertices', this._points);
        var lineStyle = [];
        lineStyle.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.beginLineStyle)));
        lineStyle.push(_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.endLineStyle)));
        this._dictionary.update('LE', lineStyle);
        this._dictionary.update('LLE', this._lineExtension);
        var polyLineBounds = this._getBoundsValue(this._points);
        var rectangle = [polyLineBounds.x,
            polyLineBounds.y,
            polyLineBounds.x + polyLineBounds.width,
            polyLineBounds.y + polyLineBounds.height];
        this._dictionary.update('Rect', rectangle);
        if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
            this._appearanceTemplate = this._createPolyLineAppearance(isFlatten);
        }
    };
    PdfPolyLineAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        this._flatten = isFlatten;
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createPolyLineAppearance(isFlatten);
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createPolyLineAppearance(isFlatten);
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        var reference = dictionary.getRaw('N');
                        if (appearanceStream) {
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
        }
        if (isFlatten) {
            if (this._appearanceTemplate) {
                var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
                if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                    var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                    if (box) {
                        this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                    }
                }
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else {
                this._page.annotations.remove(this);
            }
        }
        if (!isFlatten && this._setAppearance) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_6 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_6, appearance);
                this._dictionary.update('AP', reference_6);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfPolyLineAnnotation.prototype._transformToPdfCoordinates = function (points) {
        var transformedPoints = [];
        for (var i = 0; i < points.length; i += 2) {
            transformedPoints.push(points[i]);
            transformedPoints.push(-points[i + 1]);
        }
        return transformedPoints;
    };
    PdfPolyLineAnnotation.prototype._updateBorder = function (boundsValue, borderWidth) {
        return { x: boundsValue.x - borderWidth,
            y: boundsValue.y - borderWidth, width: boundsValue.width + (2 * borderWidth),
            height: boundsValue.height + (2 * borderWidth) };
    };
    PdfPolyLineAnnotation.prototype._prepareStartEndAngle = function (path) {
        var transformedStart = this._transformToPdfCoordinates(path._points[0]);
        var transformedNext = this._transformToPdfCoordinates(path._points[1]);
        var transformedEnd = this._transformToPdfCoordinates(path._points[path._points.length - 1]);
        var transformedPrev = this._transformToPdfCoordinates(path._points[path._points.length - 2]);
        var startAngle = this._getAngle([transformedStart[0], transformedStart[1], transformedNext[0], transformedNext[1]]);
        var endAngle = this._getAngle([transformedPrev[0], transformedPrev[1], transformedEnd[0], transformedEnd[1]]);
        return { startAngle: startAngle, endAngle: endAngle, transformedStart: transformedStart, transformedEnd: transformedEnd };
    };
    PdfPolyLineAnnotation.prototype._createPolyLineAppearance = function (flatten) {
        var color = this.color ? this.color : [0, 0, 0];
        if (typeof flatten !== 'undefined' && flatten) {
            var borderPen = void 0;
            if (this.border.width > 0) {
                borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(color, this.border.width);
            }
            var backBrush = void 0;
            if (this.innerColor) {
                backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
            }
            var graphics = this._page.graphics;
            if (borderPen) {
                var state = void 0;
                if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                    state = graphics.save();
                    graphics.setTransparency(this._opacity);
                }
                var points = this._getLinePoints();
                var pathTypes = [];
                pathTypes.push(0);
                if (points && points.length > 0) {
                    for (var i = 1; i < points.length; i++) {
                        pathTypes.push(1);
                    }
                    var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                    path._points = points;
                    path._pathTypes = pathTypes;
                    var angles = this._prepareStartEndAngle(path);
                    var startPoint = this._getAxisValue(angles.transformedStart, angles.startAngle + 90);
                    var endPoint = this._getAxisValue(angles.transformedEnd, angles.endAngle + 90);
                    var startPoint1 = startPoint;
                    var endPoint1 = endPoint;
                    if (this.beginLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow || this.beginLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow) {
                        startPoint1 = this._getAxisValue(startPoint, angles.startAngle, this.border.width);
                        path._points[0][0] = startPoint1[0];
                        path._points[0][1] = -startPoint1[1];
                    }
                    if (this.endLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow || this.endLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow) {
                        endPoint1 = this._getAxisValue(endPoint, angles.endAngle, -this.border.width);
                        path._points[path._points.length - 1][0] = endPoint1[0];
                    }
                    graphics.drawPath(path, borderPen);
                    if (this.beginLineStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                        this._drawLineEndStyle(startPoint, graphics, angles.startAngle, borderPen, backBrush, this.beginLineStyle, this.border.width, true);
                    }
                    if (this.endLineStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                        this._drawLineEndStyle(endPoint, graphics, angles.endAngle, borderPen, backBrush, this.endLineStyle, this.border.width, false);
                    }
                    if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                        graphics.restore(state);
                    }
                }
            }
            return graphics._template;
        }
        else {
            var rect = { x: 0, y: 0, width: 0, height: 0 };
            if ((typeof this._points === 'undefined' || (this._points && this._points.length === 0)) && this._dictionary.has('Vertices')) {
                this._points = this._dictionary.get('Vertices');
            }
            rect = this._updateBorder(this._getBoundsValue(this._points), this.border.width);
            var parameter = new _PaintParameter();
            if (this.innerColor) {
                parameter.backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
            }
            if (this.border.width > 0 && color) {
                parameter.borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(color, this.border.width);
            }
            if (color) {
                parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(color);
            }
            var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            if (typeof this._polylinePoints !== 'undefined' && this._polylinePoints !== null) {
                path._points = this._polylinePoints;
            }
            else {
                path._points = this._getLinePoints();
            }
            if (typeof this._pathTypes !== 'undefined' && this._polylinePoints !== null) {
                path._pathTypes = this._pathTypes;
            }
            else {
                this._pathTypes = [];
                this._pathTypes.push(0);
                for (var i = 1; i < path._points.length; i++) {
                    this._pathTypes.push(1);
                }
                path._pathTypes = this._pathTypes;
            }
            var angles = this._prepareStartEndAngle(path);
            var startPoint = this._getAxisValue(angles.transformedStart, angles.startAngle + 90);
            var endPoint = this._getAxisValue(angles.transformedEnd, angles.endAngle + 90);
            var newStart = startPoint;
            var newEnd = endPoint;
            if (this.beginLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow || this.beginLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow) {
                newStart = this._getAxisValue(startPoint, angles.startAngle, this.border.width);
                path._points[0][0] = newStart[0];
                path._points[0][1] = -newStart[1];
            }
            if (this.endLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.closedArrow || this.endLineStyle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow) {
                newEnd = this._getAxisValue(endPoint, angles.endAngle, -this.border.width);
                path._points[path._points.length - 1][0] = newEnd[0];
            }
            var beginLineStyleBounds = void 0;
            if (this.beginLineStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                beginLineStyleBounds = this._getBoundsFromLineEndStyle(startPoint, angles.startAngle, parameter.borderPen, this.beginLineStyle, this.border.width, true);
                rect = this._getCombinedRectangleBounds(rect, beginLineStyleBounds);
            }
            var endLineStyleBounds = void 0;
            if (this.endLineStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                endLineStyleBounds = this._getBoundsFromLineEndStyle(endPoint, angles.endAngle, parameter.borderPen, this.endLineStyle, this.border.width, false);
                rect = this._getCombinedRectangleBounds(rect, endLineStyleBounds);
            }
            var appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v({ x: rect.x, y: rect.y, width: rect.width, height: rect.height }, this);
            appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T([rect.x, rect.y, rect.width, rect.height], this._crossReference);
            var template = appearance.normal;
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, 0);
            template._writeTransformation = false;
            var graphics = appearance.normal.graphics;
            if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                graphics.save();
                graphics.setTransparency(this._opacity);
            }
            else {
                graphics.save();
            }
            graphics.drawPath(path, parameter.borderPen);
            if (this.beginLineStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                this._drawLineEndStyle(startPoint, graphics, angles.startAngle, parameter.borderPen, parameter.backBrush, this.beginLineStyle, this.border.width, true);
            }
            if (this.endLineStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                this._drawLineEndStyle(endPoint, graphics, angles.endAngle, parameter.borderPen, parameter.backBrush, this.endLineStyle, this.border.width, false);
            }
            if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                graphics.restore();
            }
            graphics.restore();
            if (this._isBounds) {
                template._content.dictionary._updated = true;
                this._dictionary.update('LE', [_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.beginLineStyle)), _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this.endLineStyle))]);
                this._dictionary.update('LLE', this.lineExtension);
                this._dictionary.update('Vertices', this._points);
            }
            this._dictionary.update('Rect', [rect.x, rect.y, rect.x + rect.width, rect.y + rect.height]);
            return template;
        }
    };
    PdfPolyLineAnnotation.prototype._getLinePoints = function () {
        var pageSize = this._page.size;
        var pageHeight = pageSize[1];
        var points;
        if (this._dictionary.has('Vertices') && !this._isBounds && (!this._setAppearance || (this._setAppearance && this.flatten))) {
            var linePoints = this._dictionary.getArray('Vertices');
            if (linePoints) {
                points = [];
                for (var j = 0; j < linePoints.length; j = j + 2) {
                    points.push([linePoints[j], (pageHeight - linePoints[j + 1])]);
                }
            }
        }
        else if (this._points) {
            this._points = this._getPoints(this._points);
            var polyLinepoints = this._points.slice();
            points = [];
            for (var j = 0; j < polyLinepoints.length; j += 2) {
                var yValue = this.flatten ? (pageHeight - polyLinepoints[j + 1]) : -polyLinepoints[j + 1];
                points.push([polyLinepoints[j], yValue]);
            }
        }
        return points;
    };
    return PdfPolyLineAnnotation;
}(PdfComment));

/**
 * `PdfAngleMeasurementAnnotation` class represents the angle measurement annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new angle measurement annotation
 * const annotation: PdfAngleMeasurementAnnotation = new PdfAngleMeasurementAnnotation([[100, 700], [150, 650], [100, 600]]);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfAngleMeasurementAnnotation = /** @class */ (function (_super) {
    __extends(PdfAngleMeasurementAnnotation, _super);
    function PdfAngleMeasurementAnnotation(points) {
        var _this = _super.call(this) || this;
        _this._linePoints = [];
        _this._firstIntersectionPoint = [0, 0];
        _this._secondIntersectionPoint = [0, 0];
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('PolyLine'));
        if (typeof points !== 'undefined' && points.length > 0) {
            if (points.length > 6) {
                throw new Error('Points length should not be greater than 3');
            }
            _this._pointArray = points;
            points.forEach(function (point) {
                _this._linePoints.push(point[0]);
                _this._linePoints.push(point[1]);
            });
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.angleMeasurementAnnotation;
        return _this;
    }
    Object.defineProperty(PdfAngleMeasurementAnnotation.prototype, "measure", {
        /**
         * Gets the flag to have measurement dictionary of the angle measurement annotation.
         *
         * @returns {boolean} measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfAngleMeasurementAnnotation = page.annotations.at(0) as PdfAngleMeasurementAnnotation;
         * // Gets the flag to have measurement dictionary of the angle annotation.
         * let measure: boolean = annotation.measure;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._measure === 'undefined' && this._dictionary.has('Measure')) {
                this._measure = this._dictionary.get('Measure');
            }
            return this._measure;
        },
        /**
         * Sets the flag to add measurement dictionary to the annotation.
         *
         * @param {boolean} value Measure.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfAngleMeasurementAnnotation = page.annotations.at(0) as PdfAngleMeasurementAnnotation;
         * // Sets the flag to add measurement dictionary to the annotation.
         * annotation.measure = true;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value && !this._isLoaded) {
                this._measure = value;
                this.caption.cap = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfAngleMeasurementAnnotation._load = function (page, dictionary) {
        var annot = new PdfAngleMeasurementAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfAngleMeasurementAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfAngleMeasurementAnnotation.prototype._postProcess = function () {
        if (!this._pointArray) {
            throw new Error('Points cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        this._appearanceTemplate = this._createAngleMeasureAppearance();
    };
    PdfAngleMeasurementAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (!isFlatten && this._setAppearance) {
                this._appearanceTemplate = this._createAngleMeasureAppearance();
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess();
            if (!this._appearanceTemplate) {
                if (isFlatten) {
                    if (!this._dictionary.has('AP')) {
                        this._appearanceTemplate = this._createAngleMeasureAppearance();
                    }
                    else {
                        var dictionary = this._dictionary.get('AP');
                        if (dictionary && dictionary.has('N')) {
                            var appearanceStream = dictionary.get('N');
                            var reference = dictionary.getRaw('N');
                            if (appearanceStream) {
                                if (reference) {
                                    appearanceStream.reference = reference;
                                }
                                this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                            }
                        }
                    }
                }
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                if (box) {
                    this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
            }
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
    };
    PdfAngleMeasurementAnnotation.prototype._createAngleMeasureAppearance = function () {
        var borderWidth = this.border.width;
        var font = this._obtainFont();
        if ((typeof font === 'undefined' || font === null) || (!this._isLoaded && font.size === 1)) {
            font = this._circleCaptionFont;
            this._pdfFont = font;
        }
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        var angle = (this._calculateAngle() * (180.0 / Math.PI));
        if (angle < 0) {
            angle = -angle;
        }
        if (angle > 180) {
            angle = 360 - angle;
        }
        this._dictionary.update('Vertices', this._linePoints);
        var ds = 'font:' +
            font._metrics._postScriptName +
            ' ' +
            font._size +
            'pt; color:' +
            this._colorToHex(this.color);
        this._dictionary.update('DS', ds);
        if (this.text === (' ' + angle.toFixed(2) + '°')) {
            this._dictionary.update('Contents', this.text);
        }
        else if (this.text) {
            this._dictionary.update('Contents', this.text);
        }
        if (typeof this.subject === 'undefined') {
            this._dictionary.update('Subject', 'Angle Measurement');
        }
        this._dictionary.update('MeasurementTypes', 1152);
        this._dictionary.update('Subtype', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('PolyLine'));
        this._dictionary.update('IT', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG('PolyLineAngle'));
        var measureDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        var d = [];
        var t = [];
        var a = [];
        var x = [];
        var v = [];
        measureDictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('measureDictionary'));
        measureDictionary.set('R', '1 in = 1 in');
        measureDictionary.set('Subtype', 'RL');
        measureDictionary.set('TargetUnitConversion', 0.1388889);
        var dDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        dDictionary.set('U', 'in');
        dDictionary.set('Type', 'NumberFormat');
        dDictionary.set('C', 1);
        dDictionary.set('D', 1);
        dDictionary.set('SS', '');
        d.push(dDictionary);
        var tDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        tDictionary.set('U', '°');
        tDictionary.set('Type', 'NumberFormat');
        tDictionary.set('C', 1);
        tDictionary.set('D', 1);
        tDictionary.set('FD', true);
        tDictionary.set('SS', '');
        t.push(tDictionary);
        var aDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        aDictionary.set('U', 'sq in');
        aDictionary.set('Type', 'NumberFormat');
        aDictionary.set('C', 1);
        aDictionary.set('D', 1);
        aDictionary.set('FD', true);
        aDictionary.set('SS', '');
        a.push(aDictionary);
        var vDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        vDictionary.set('U', 'cu in');
        vDictionary.set('Type', 'NumberFormat');
        vDictionary.set('C', 1);
        vDictionary.set('D', 1);
        vDictionary.set('FD', true);
        vDictionary.set('SS', '');
        v.push(vDictionary);
        var xDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        xDictionary.set('U', 'in');
        xDictionary.set('Type', 'NumberFormat');
        xDictionary.set('C', 1);
        xDictionary.set('D', 1);
        xDictionary.set('SS', '');
        x.push(xDictionary);
        measureDictionary.set('D', d);
        measureDictionary.set('T', t);
        measureDictionary.set('A', a);
        measureDictionary.set('X', x);
        measureDictionary.set('V', v);
        if (this._dictionary.has('Measure')) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary, this._crossReference, 'Measure');
        }
        var reference = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(reference, measureDictionary);
        measureDictionary._updated = true;
        this._dictionary.update('Measure', reference);
        var rectValue = [0, 0, 0, 0];
        var boundsValue = this._getAngleBoundsValue();
        var points = this._obtainLinePoints();
        var pathTypes = [];
        pathTypes.push(0);
        for (var i = 1; i < points.length; i++) {
            pathTypes.push(1);
        }
        var graphicspath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        graphicspath.addRectangle(points[1][0] - this._radius, -(points[1][1] + this._radius), 2 * this._radius, 2 * this._radius);
        var size = font.measureString(angle.toString() + '°', [0, 0], format, 0, 0);
        var midPoint = [(this._firstIntersectionPoint[0] + this._secondIntersectionPoint[0]) / 2,
            ((this._firstIntersectionPoint[1] + this._secondIntersectionPoint[1]) / 2)];
        var center = [points[1][0], -points[1][1]];
        var x1 = points[1][0] + this._radius * Math.cos((this._startAngle + (this._sweepAngle / 2)) * (Math.PI / 180.0));
        var y = points[1][1] + this._radius * Math.sin((this._startAngle + (this._sweepAngle / 2)) * (Math.PI / 180.0));
        var start = [midPoint[0], midPoint[1]];
        var xDiff = start[0] - center[0];
        var yDiff = start[1] - center[1];
        var midpointAngle = ((Math.atan2(yDiff, xDiff)) * (180.0 / Math.PI));
        var left = false;
        var right = false;
        var up = false;
        var down = false;
        if (midpointAngle > 0) {
            if (midpointAngle < 45) {
                right = true;
            }
            else if (midpointAngle >= 45 && midpointAngle < 135) {
                up = true;
            }
            else {
                left = true;
            }
        }
        else {
            midpointAngle = -midpointAngle;
            if (midpointAngle === 0) {
                (new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q()).addRectangle(boundsValue[0], boundsValue[1], boundsValue[2], boundsValue[3]);
            }
            else if (midpointAngle < 45) {
                right = true;
            }
            else if (midpointAngle >= 45 && midpointAngle < 135) {
                down = true;
            }
            else {
                left = true;
            }
        }
        if (rectValue[0] === 0 && rectValue[1] === 0 && rectValue[2] === 0 && rectValue[3] === 0) {
            rectValue = boundsValue;
            this.bounds = { x: boundsValue[0], y: boundsValue[1], width: boundsValue[2], height: boundsValue[3] };
        }
        var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        path._pathTypes = pathTypes;
        path._points = points;
        this._dictionary.set('Rect', [rectValue[0], rectValue[1], rectValue[0] + rectValue[2], rectValue[1] + rectValue[3]]);
        var appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v({ x: boundsValue[0], y: boundsValue[1], width: boundsValue[2],
            height: boundsValue[3] }, this);
        appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(rectValue, this._crossReference);
        var template = appearance.normal;
        template._writeTransformation = false;
        var graphics = appearance.normal.graphics;
        var width = borderWidth / 2;
        var pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this._color, width);
        if (this.border.style === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
            pen._dashStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfDashStyle */ .Yq.dash;
        }
        var brush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._color);
        graphics.save();
        graphics.drawPath(path, pen);
        path.addArc(points[1][0] - this._radius, points[1][1] - this._radius, 2 * this._radius, 2 * this._radius, this._startAngle, this._sweepAngle);
        if (up) {
            graphics.drawString(angle.toString() + '°', font, [x1 - (size[0] / 2), -(-y + font._metrics._getHeight() + 2), 0, 0], null, brush);
        }
        else if (right) {
            graphics.drawString(angle.toString() + '°', font, [x1 + 2, -(-y + font._metrics._getHeight() / 2), 0, 0], null, brush);
        }
        else if (left) {
            graphics.drawString(angle.toString() + '°', font, [x1 - size[0] - 2, -(-y + font._metrics._getHeight() / 2), 0, 0], null, brush);
        }
        else if (down) {
            graphics.drawString(angle.toString() + '°', font, [x1 - (size[0] / 2), (y + 2), 0, 0], null, brush);
        }
        graphics.restore();
        graphics._template._content.dictionary._updated = true;
        var reference1 = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(reference1, graphics._template._content);
        graphics._template._content.reference = reference1;
        if (this._dictionary.has('AP')) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
        }
        var appearanceDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        appearanceDictionary.set('N', reference1);
        appearanceDictionary._updated = true;
        this._dictionary.set('AP', appearanceDictionary);
        return template;
    };
    PdfAngleMeasurementAnnotation.prototype._getAngleBoundsValue = function () {
        var points = this._obtainLinePoints();
        for (var i = 0; i < points.length; i++) {
            points[i][1] = -points[i][1];
        }
        var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        path._points = points;
        path._pathTypes = [0, 1, 1];
        return path._getBounds();
    };
    PdfAngleMeasurementAnnotation.prototype._obtainLinePoints = function () {
        var points;
        var collection;
        if (this._linePoints) {
            points = this._linePoints.slice();
            collection = new Array(points.length / 2);
            var count = 0;
            for (var j = 0; j < points.length; j = j + 2) {
                collection[count] = [points[j], -points[j + 1]];
                count++;
            }
        }
        return collection;
    };
    PdfAngleMeasurementAnnotation.prototype._calculateAngle = function () {
        var points = [0, 0];
        if (typeof this._linePoints !== 'undefined' && this._linePoints.length === 0 && this._isLoaded) {
            if (this._dictionary.has('Vertices')) {
                this._linePoints = this._dictionary.get('Vertices');
            }
        }
        points = this._linePoints.slice();
        var collection = [];
        for (var j = 0; j < points.length; j = j + 2) {
            collection.push([points[j], points[j + 1]]);
        }
        var point1 = collection[0];
        var point2 = collection[1];
        var point3 = collection[2];
        var firstLineDistance = Math.sqrt(Math.pow((point2[0] - point1[0]), 2) + Math.pow((point2[1] - point1[1]), 2));
        var secondLineDistance = Math.sqrt(Math.pow((point2[0] - point3[0]), 2) + Math.pow((point2[1] - point3[1]), 2));
        this._radius = Math.min(firstLineDistance, secondLineDistance) / 4;
        var graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        graphicsPath._points = collection;
        graphicsPath._pathTypes = [0, 1, 1];
        var intersectionPoint1;
        var intersectionPoint2;
        var value = this._findLineCircleIntersectionPoints(point2[0], point2[1], this._radius, point1, point2, intersectionPoint1, intersectionPoint2);
        intersectionPoint1 = value.first;
        intersectionPoint2 = value.second;
        if (this._firstIntersectionPoint[0] === 0 && this._firstIntersectionPoint[1] === 0) {
            this._firstIntersectionPoint = intersectionPoint2;
        }
        intersectionPoint1 = [0, 0];
        intersectionPoint2 = [0, 0];
        value = this._findLineCircleIntersectionPoints(point2[0], point2[1], this._radius, point3, point2, intersectionPoint1, intersectionPoint2);
        intersectionPoint1 = value.first;
        intersectionPoint2 = value.second;
        if (this._secondIntersectionPoint[0] === 0 && this._secondIntersectionPoint[1] === 0) {
            this._secondIntersectionPoint = intersectionPoint2;
        }
        var xDiff = this._firstIntersectionPoint[0] - point2[0];
        var yDiff = this._firstIntersectionPoint[1] - point2[1];
        var startAngle = (Math.atan2(yDiff, xDiff) * (180.0 / Math.PI));
        xDiff = this._secondIntersectionPoint[0] - point2[0];
        yDiff = this._secondIntersectionPoint[1] - point2[1];
        var sweepAngle = (Math.atan2(yDiff, xDiff) * (180.0 / Math.PI));
        startAngle = startAngle > 0 ? startAngle = 360 - startAngle : -startAngle;
        sweepAngle = sweepAngle > 0 ? sweepAngle = 360 - sweepAngle : -sweepAngle;
        if (startAngle === 180 && sweepAngle === 0) {
            this._startAngle = startAngle;
            this._sweepAngle = 180;
        }
        else if (startAngle === 0 && sweepAngle === 180) {
            this._startAngle = sweepAngle;
            this._sweepAngle = 180;
        }
        else if (startAngle < 180) {
            if (startAngle > sweepAngle) {
                this._startAngle = sweepAngle;
                this._sweepAngle = startAngle - sweepAngle;
            }
            else if (startAngle + 180 < sweepAngle) {
                this._startAngle = sweepAngle;
                this._sweepAngle = (360 - sweepAngle) + startAngle;
            }
            else {
                this._startAngle = startAngle;
                this._sweepAngle = sweepAngle - startAngle;
            }
        }
        else {
            if (startAngle < sweepAngle) {
                this._startAngle = startAngle;
                this._sweepAngle = sweepAngle - startAngle;
            }
            else if (startAngle - 180 > sweepAngle) {
                this._startAngle = startAngle;
                this._sweepAngle = (360 - startAngle) + sweepAngle;
            }
            else {
                this._startAngle = sweepAngle;
                this._sweepAngle = startAngle - sweepAngle;
            }
        }
        return (Math.atan2((point3[0] - point2[0]), (point3[1] - point2[1])) -
            Math.atan2((point1[0] - point2[0]), (point1[1] - point2[1])));
    };
    PdfAngleMeasurementAnnotation.prototype._findLineCircleIntersectionPoints = function (centerX, centerY, radius, point1, point2, intersection1, intersection2) {
        var dx = point2[0] - point1[0];
        var dy = point2[1] - point1[1];
        var a = dx * dx + dy * dy;
        var b = 2 * (dx * (point1[0] - centerX) + dy * (point1[1] - centerY));
        var c = (point1[0] - centerX) * (point1[0] - centerX) + (point1[1] - centerY) * (point1[1] - centerY) - radius * radius;
        var e = b * b - 4 * a * c;
        if ((a <= 0.0000001) || (e < 0)) {
            intersection1 = [Number.NaN, Number.NaN];
            intersection2 = [Number.NaN, Number.NaN];
        }
        else if (e === 0) {
            var t = -b / (2 * a);
            intersection1 = [point1[0] + t * dx, point1[1] + t * dy];
            intersection2 = [Number.NaN, Number.NaN];
        }
        else {
            var t = ((-b + Math.sqrt(e)) / (2 * a));
            intersection1 = [point1[0] + t * dx, point1[1] + t * dy];
            t = ((-b - Math.sqrt(e)) / (2 * a));
            intersection2 = [point1[0] + t * dx, point1[1] + t * dy];
        }
        return { first: intersection1, second: intersection2 };
    };
    return PdfAngleMeasurementAnnotation;
}(PdfComment));

/**
 * `PdfInkAnnotation` class represents the ink annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new ink annotation with the bounds and ink points
 * const annotation: PdfInkAnnotation = new PdfInkAnnotation([0, 0, 300, 400], [40, 300, 60, 100, 40, 50, 40, 300]);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfInkAnnotation = /** @class */ (function (_super) {
    __extends(PdfInkAnnotation, _super);
    function PdfInkAnnotation(points, linePoints) {
        var _this = _super.call(this) || this;
        _this._inkPointsCollection = [];
        _this._previousCollection = [];
        _this._isModified = false;
        _this._isEnableControlPoints = true;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Ink'));
        if (typeof points !== 'undefined') {
            _this._points = points;
            _this.bounds = { x: points[0], y: points[1], width: points[2], height: points[3] };
        }
        if (typeof linePoints !== 'undefined') {
            _this._linePoints = linePoints;
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.inkAnnotation;
        return _this;
    }
    Object.defineProperty(PdfInkAnnotation.prototype, "inkPointsCollection", {
        /**
         * Gets the ink points collection of the annotation.
         *
         * @returns {Array<number[]>} Ink points collection.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfInkAnnotation = page.annotations.at(0) as PdfInkAnnotation;
         * // Get the ink points collection of the annotation
         * let inkPointsCollection: Array<number[]> = annotation.inkPointsCollection;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._inkPointsCollection.length === 0 && this._dictionary.has('InkList')) {
                var inkList = this._dictionary.get('InkList');
                if (Array.isArray(inkList) && inkList.length > 0) {
                    this._inkPointsCollection = inkList;
                }
            }
            return this._inkPointsCollection;
        },
        /**
         * Sets the ink points collection of the annotation.
         *
         * @param {Array<number[]>} value Ink points collection.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * // Create a new ink annotation
         * const annotation: PdfInkAnnotation = new PdfInkAnnotation([0, 0, 300, 400], [40, 300, 60, 100, 40, 50, 40, 300]);
         * // Set the ink points collection of the annotation
         * annotation.inkPointsCollection = [[422, 690, 412, 708, 408, 715, 403, 720, 400, 725], [420, 725, 420, 715, 415, 705, 400, 690, 405, 695]];
         * // Add annotation to the page
         * page.annotations.add(annotation);
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (Array.isArray(value) && value.length > 0 && value !== this._inkPointsCollection) {
                this._inkPointsCollection = value;
                this._isModified = true;
                if (this._isLoaded) {
                    this._dictionary.update('InkList', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfInkAnnotation._load = function (page, dictionary) {
        var annot = new PdfInkAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfInkAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfInkAnnotation.prototype._postProcess = function () {
        if (typeof this._points === 'undefined' || this._points === null) {
            throw new Error('Points cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (!this._dictionary.has('C')) {
            this.color = [0, 0, 0];
            this._isTransparentColor = true;
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        var nativeRectangle = this._addInkPoints();
        var bounds = [nativeRectangle.x,
            nativeRectangle.y,
            nativeRectangle.x + nativeRectangle.width,
            nativeRectangle.y + nativeRectangle.height];
        this._dictionary.update('Rect', bounds);
        if (this._setAppearance) {
            var appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v(nativeRectangle, this);
            appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
            var template = appearance.normal;
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
            template._writeTransformation = false;
            this._appearanceTemplate = this._createInkAppearance(template);
            if (this._dictionary.has('AP')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
            }
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
            this._appearanceTemplate._content.dictionary._updated = true;
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            this._appearanceTemplate._content.reference = reference;
            dictionary.set('N', reference);
            dictionary._updated = true;
            this._dictionary.set('AP', dictionary);
        }
    };
    PdfInkAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        this._isFlatten = isFlatten;
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                if (this._inkPointsCollection.length === 0) {
                    this._inkPointsCollection = this._obtainInkListCollection();
                }
                var rect = this._getInkBoundsValue();
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(rect, this._crossReference);
                var box = template._content.dictionary.getArray('BBox');
                var angle = this._getRotationAngle();
                if (box && angle !== null && typeof angle !== 'undefined') {
                    template._content.dictionary.set('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
                template._writeTransformation = false;
                this._appearanceTemplate = this._createInkAppearance(template);
                this._dictionary.update('Rect', [rect[0], rect[1], rect[0] + rect[2], rect[1] + rect[3]]);
                if (!isFlatten) {
                    if (this._dictionary.has('AP')) {
                        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
                    }
                    var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
                    this._appearanceTemplate._content.dictionary._updated = true;
                    var reference = this._crossReference._getNextReference();
                    this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
                    this._appearanceTemplate._content.reference = reference;
                    dictionary.set('N', reference);
                    dictionary._updated = true;
                    this._dictionary.set('AP', dictionary);
                }
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess();
            if (!this._appearanceTemplate) {
                if (isFlatten) {
                    if (!this._dictionary.has('AP')) {
                        if (this._inkPointsCollection.length === 0) {
                            this._inkPointsCollection = this._obtainInkListCollection();
                        }
                        var rect = this._getInkBoundsValue();
                        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(rect, this._crossReference);
                        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
                        template._writeTransformation = false;
                        this._appearanceTemplate = this._createInkAppearance(template);
                        this._dictionary.update('Rect', [rect[0], rect[1], rect[0] + rect[2], rect[1] + rect[3]]);
                    }
                    else {
                        var dictionary = this._dictionary.get('AP');
                        if (dictionary && dictionary.has('N')) {
                            var appearanceStream = dictionary.get('N');
                            var reference = dictionary.getRaw('N');
                            if (appearanceStream) {
                                if (reference) {
                                    appearanceStream.reference = reference;
                                }
                                this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                            }
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten &&
            this._appearanceTemplate &&
            this._appearanceTemplate._size !== null &&
            typeof this._appearanceTemplate._size !== 'undefined') {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                if (box) {
                    this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
            }
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        if (isFlatten && !this.flattenPopups && this._dictionary.has('Popup')) {
            var reference = this._dictionary.getRaw('Popup');
            if (this._page._pageDictionary.has('Annots')) {
                var annots = this._page._pageDictionary.getRaw('Annots'); // eslint-disable-line
                if (annots && Array.isArray(annots) && annots.length > 0) {
                    var index = annots.indexOf(reference);
                    if (index >= 0) {
                        this._page.annotations.removeAt(index);
                    }
                }
            }
        }
    };
    PdfInkAnnotation.prototype._createInkAppearance = function (template) {
        var graphics = template.graphics;
        if (this._inkPointsCollection !== null &&
            this._inkPointsCollection.length > 0 &&
            this.color !== null &&
            typeof this._color !== 'undefined') {
            for (var l = 0; l < this._inkPointsCollection.length; l++) {
                var isDot = false;
                if (this._inkPointsCollection[l].length % 2 === 0) {
                    var inkPoints = this._inkPointsCollection[l];
                    if (inkPoints.length === 2) {
                        var locx = inkPoints[0] - 0.5;
                        var locy = inkPoints[1] - 0.5;
                        var locw = inkPoints[0] + 0.5;
                        var loch = inkPoints[1] + 0.5;
                        inkPoints = [locx, locy, locw, loch];
                        isDot = true;
                    }
                    var point = new Array(inkPoints.length / 2);
                    var count = 0;
                    for (var j = 0; j < inkPoints.length; j = j + 2) {
                        point[count] = [inkPoints[j], inkPoints[j + 1]];
                        count++;
                    }
                    var pathPointCont = count + (count * 2) - 2;
                    var pathPoints = new Array(pathPointCont);
                    if (this._isEnableControlPoints) {
                        var p1 = [];
                        var p2 = [];
                        var value = this._getControlPoints(point, p1, p2);
                        p1 = value.controlP1;
                        p2 = value.controlP2;
                        var index = 0;
                        for (var i = 0; i < pathPointCont - 1; i = i + 3) {
                            pathPoints[i] = point[index];
                            pathPoints[i + 1] = p1[index];
                            pathPoints[i + 2] = p2[index];
                            index++;
                        }
                    }
                    else {
                        if (count % 3 === 1) {
                            pathPointCont = count;
                            pathPoints = new Array(pathPointCont);
                            pathPoints = point;
                        }
                        else if (count % 3 === 0) {
                            pathPointCont = count + 1;
                            pathPoints = new Array(pathPointCont);
                            for (var i = 0; i < point.length; i++) {
                                pathPoints[i] = point[i];
                            }
                        }
                        else {
                            pathPointCont = count + 2;
                            pathPoints = new Array(pathPointCont);
                            for (var i = 0; i < point.length; i++) {
                                pathPoints[i] = point[i];
                            }
                            pathPoints[pathPointCont - 2] = point[point.length - 2];
                        }
                    }
                    pathPoints[pathPointCont - 1] = point[point.length - 1];
                    if (pathPoints !== null) {
                        var pointsCollection = pathPoints;
                        for (var k = 0; k < pointsCollection.length; k++) {
                            var point_1 = pointsCollection[k];
                            pointsCollection[k] = [point_1[0], (-point_1[1])];
                        }
                        var path1 = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                        var path2 = null;
                        if (isDot) {
                            var width = point[1][0] - point[0][0];
                            var height = point[1][1] - point[0][1];
                            path1.addEllipse(point[0][0] + (0.5), -(point[0][1] + height + (0.5)), width, height);
                            path2 = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                            path2._pathTypes = path1._pathTypes;
                            path2._points = path1._points;
                        }
                        else if (point.length === 2) {
                            path1.addLine(point[0][0], -point[0][1], point[1][0], -point[1][1]);
                            path2 = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                            path2._pathTypes = path1._pathTypes;
                            path2._points = path1._points;
                        }
                        else {
                            path1._addBezierPoints(pointsCollection);
                            path2 = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                            path2._pathTypes = path1._pathTypes;
                            path2._points = pointsCollection;
                        }
                        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.color, this.border.width);
                        if (this._isLoaded) {
                            borderPen._lineCap = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCap */ .FW.round;
                        }
                        if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                            var state = graphics.save();
                            graphics.setTransparency(this._opacity);
                            graphics.drawPath(path2, borderPen);
                            graphics.restore(state);
                        }
                        else {
                            graphics.drawPath(path2, borderPen);
                        }
                    }
                }
            }
            if (this._isFlatten) {
                if (this._page && this._page._isNew && this._page._pageSettings && this._page._pageSettings.margins) {
                    var margins = this._page._pageSettings.margins;
                    this.bounds = {
                        x: this.bounds.x - margins.left,
                        y: this._page.size[1] - (this.bounds.y + this.bounds.height) - margins.top,
                        width: this.bounds.width,
                        height: this.bounds.height
                    };
                }
                else {
                    this.bounds = { x: this.bounds.x,
                        y: (this._page.size[1] - (this.bounds.y + this.bounds.height)), width: this.bounds.width,
                        height: this.bounds.height };
                }
            }
        }
        return template;
    };
    PdfInkAnnotation.prototype._getControlPoints = function (point, p1, p2) {
        if (point === null) {
            throw new Error('pointCollection');
        }
        var pointCount = point.length - 1;
        if (pointCount < 1) {
            throw new Error('At least two knot PointFs required pointCollection');
        }
        if (pointCount === 1) {
            p1 = [[((2 * point[0][0] + point[1][0]) / 3), ((2 * point[0][1] + point[1][1]) / 3)]];
            p2 = [[(2 * p1[0][0] - point[0][0]), (2 * p1[0][1] - point[0][1])]];
        }
        var rightVector = [];
        for (var i = 1; i < pointCount - 1; ++i) {
            rightVector[i] = 4 * point[i][0] + 2 * point[i + 1][0];
        }
        rightVector[0] = point[0][0] + 2 * point[1][0];
        rightVector[pointCount - 1] = (8 * point[pointCount - 1][0] + point[pointCount][0]) / 2.0;
        var xValue = this._getSingleControlPoint(rightVector);
        for (var i = 1; i < pointCount - 1; ++i) {
            rightVector[i] = 4 * point[i][1] + 2 * point[i + 1][1];
        }
        rightVector[0] = point[0][1] + 2 * point[1][1];
        rightVector[pointCount - 1] = (8 * point[pointCount - 1][1] + point[pointCount][1]) / 2.0;
        var yValue = this._getSingleControlPoint(rightVector);
        p1 = new Array(pointCount);
        p2 = new Array(pointCount);
        for (var i = 0; i < pointCount; ++i) {
            p1[i] = [xValue[i], yValue[i]];
            if (i < pointCount - 1) {
                p2[i] = [2 * point[i + 1][0] - xValue[i + 1], 2 * point[i + 1][1] - yValue[i + 1]];
            }
            else {
                var x = (point[pointCount][0] + xValue[pointCount - 1]) / 2;
                var y = (point[pointCount][1] + yValue[pointCount - 1]) / 2;
                p2[i] = [x, y];
            }
        }
        return { controlP1: p1, controlP2: p2 };
    };
    PdfInkAnnotation.prototype._getSingleControlPoint = function (rightVector) {
        var count = rightVector.length;
        var vector = [];
        var tmpVector = [];
        var divisor = 2.0;
        vector[0] = rightVector[0] / divisor;
        for (var i = 1; i < count; i++) {
            tmpVector[i] = 1 / divisor;
            divisor = (i < count - 1 ? 4.0 : 3.5) - tmpVector[i];
            vector[i] = (rightVector[i] - vector[i - 1]) / divisor;
        }
        for (var i = 1; i < count; i++) {
            vector[count - i - 1] -= tmpVector[count - i] * vector[count - i];
        }
        return vector;
    };
    PdfInkAnnotation.prototype._addInkPoints = function () {
        var _this = this;
        var _a;
        var inkCollection = [];
        if (this._linePoints !== null && (this._previousCollection.length === 0 || this._isModified)) {
            this._inkPointsCollection.unshift(this._linePoints);
        }
        var isEqual = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._checkInkPoints */ .Tn)(this._inkPointsCollection, this._previousCollection);
        if (this._inkPointsCollection !== null && !isEqual) {
            this._inkPointsCollection.forEach(function (inkPoint) {
                var inkList = inkPoint.slice();
                inkCollection.push(inkList);
            });
            this._dictionary.update('InkList', inkCollection);
        }
        if (this._inkPointsCollection.length > 0 && (!isEqual || this._isModified)) {
            (_a = this._previousCollection).push.apply(_a, this._inkPointsCollection);
            this._isModified = false;
        }
        var cropOrMediaBox = this._getCropOrMediaBox();
        var containsCropOrMediaBox = false;
        if (cropOrMediaBox && cropOrMediaBox.length > 3 && typeof cropOrMediaBox[0] === 'number' && typeof cropOrMediaBox[1] === 'number' && (cropOrMediaBox[0] !== 0 || cropOrMediaBox[1] !== 0)) {
            containsCropOrMediaBox = true;
            inkCollection.forEach(function (inkList, i) {
                var modifiedInkList = inkList;
                for (var j = 0; j < inkList.length; j += 2) {
                    var x = inkList[j];
                    var y = inkList[j + 1];
                    x = x + cropOrMediaBox[0];
                    if (_this._page._pageDictionary.has('MediaBox') && !_this._page._pageDictionary.has('CropBox') &&
                        cropOrMediaBox[3] === 0 && cropOrMediaBox[1] > 0) {
                        y = y + cropOrMediaBox[3];
                    }
                    else {
                        y = y + cropOrMediaBox[1];
                    }
                    modifiedInkList[j] = x;
                    modifiedInkList[j + 1] = y;
                    inkCollection[i] = modifiedInkList;
                }
            });
            this._dictionary.update('InkList', inkCollection);
        }
        if (this._isEnableControlPoints || containsCropOrMediaBox) {
            var result = this._getInkBoundsValue(inkCollection);
            return { x: result[0], y: result[1], width: result[2], height: result[3] };
        }
        else {
            if (!this._isFlatten) {
                this._updateInkListCollection(inkCollection);
            }
            return this.bounds;
        }
    };
    PdfInkAnnotation.prototype._updateInkListCollection = function (inkCollection) {
        var _this = this;
        inkCollection.forEach(function (currentInkList, i) {
            _this._inkPointsCollection[i] = currentInkList.slice();
        });
    };
    PdfInkAnnotation.prototype._getInkBoundsValue = function (inkCollection) {
        var bounds = [0, 0, 0, 0];
        if (this._points) {
            this.bounds = { x: this._points[0], y: this._points[1], width: this._points[2], height: this._points[3] };
        }
        bounds = [this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height];
        var borderWidth = this.border.width;
        if (this._inkPointsCollection !== null) {
            if (this._inkPointsCollection.length > 0) {
                var termsList_1 = [];
                this._inkPointsCollection.forEach(function (subList) {
                    if (subList !== null) {
                        if (subList.length % 2 === 0) {
                            termsList_1.push.apply(termsList_1, subList);
                        }
                    }
                });
                var isTwoPoints = false;
                if (!this._isLoaded && termsList_1.length === 2) {
                    isTwoPoints = true;
                    termsList_1.push((termsList_1[0] + 1));
                    termsList_1.push((termsList_1[1] + 1));
                }
                var pointCollection = new Array(termsList_1.length / 2);
                var count = 0;
                for (var j = 0; j < termsList_1.length; j = j + 2) {
                    pointCollection[count] = [termsList_1[j],
                        termsList_1[j + 1]];
                    count++;
                }
                if (this._isLoaded) {
                    if (pointCollection.length > 0) {
                        var xMin_1 = 0;
                        var yMin_1 = 0;
                        var xMax_1 = 0;
                        var yMax_1 = 0;
                        var first_1 = true;
                        pointCollection.forEach(function (point) {
                            if (first_1) {
                                xMin_1 = point[0];
                                yMin_1 = point[1];
                                first_1 = false;
                            }
                            else {
                                if (point[0] < xMin_1) {
                                    xMin_1 = point[0];
                                }
                                else if (point[0] > xMax_1) {
                                    xMax_1 = point[0];
                                }
                                if (point[1] < yMin_1) {
                                    yMin_1 = point[1];
                                }
                                else if (point[1] > yMax_1) {
                                    yMax_1 = point[1];
                                }
                            }
                        });
                        bounds = [xMin_1, yMin_1, xMax_1 - xMin_1, yMax_1 - yMin_1];
                        this.bounds = { x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] };
                        if (this._isFlatten || this._setAppearance) {
                            bounds[0] = this.bounds.x - borderWidth;
                            bounds[1] = this.bounds.y - borderWidth;
                            bounds[2] = this.bounds.width + (2 * borderWidth);
                            bounds[3] = this.bounds.height + (2 * borderWidth);
                        }
                    }
                    else {
                        if (this._points) {
                            bounds = this._points;
                        }
                        else if (pointCollection.length > 0) {
                            bounds = this._dictionary.get('Rect');
                        }
                        else {
                            bounds = [this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height];
                        }
                    }
                }
                else if (inkCollection) {
                    bounds = this._calculateInkBounds(pointCollection, bounds, borderWidth, isTwoPoints, inkCollection);
                }
                else {
                    bounds = this._calculateInkBounds(pointCollection, bounds, borderWidth, isTwoPoints);
                }
                this.bounds = { x: bounds[0], y: bounds[1], width: bounds[2], height: bounds[3] };
            }
        }
        return bounds;
    };
    PdfInkAnnotation.prototype._calculateInkBounds = function (pointCollection, bounds, borderWidth, isTwoPoints, inkCollection) {
        if (pointCollection.length > 5) {
            var xMin_2 = 0;
            var yMin_2 = 0;
            var xMax_2 = 0;
            var yMax_2 = 0;
            var first_2 = true;
            pointCollection.forEach(function (point) {
                if (first_2) {
                    xMin_2 = point[0];
                    yMin_2 = point[1];
                    xMax_2 = point[0];
                    yMax_2 = point[1];
                    first_2 = false;
                }
                else {
                    if (point[0] < xMin_2) {
                        xMin_2 = point[0];
                    }
                    else if (point[0] > xMax_2) {
                        xMax_2 = point[0];
                    }
                    if (point[1] < yMin_2) {
                        yMin_2 = point[1];
                    }
                    else if (point[1] > yMax_2) {
                        yMax_2 = point[1];
                    }
                }
            });
            var cropOrMediaBox = this._getCropOrMediaBox();
            if (bounds[2] < xMax_2) {
                xMax_2 = bounds[2];
            }
            else if (cropOrMediaBox) {
                xMax_2 = xMax_2 - xMin_2;
            }
            if (bounds[3] < yMax_2) {
                yMax_2 = bounds[3];
            }
            else if (cropOrMediaBox) {
                yMax_2 = yMax_2 - yMin_2;
            }
            if (cropOrMediaBox) {
                xMin_2 = xMin_2 + cropOrMediaBox[0];
                yMin_2 = yMin_2 + cropOrMediaBox[1];
            }
            bounds = [xMin_2, yMin_2, xMax_2, yMax_2];
            if (this._isFlatten || this._setAppearance) {
                var factor = isTwoPoints ? 2 : 3;
                bounds[0] = bounds[0] - borderWidth;
                bounds[1] = bounds[1] - borderWidth;
                bounds[2] = bounds[2] + (factor * borderWidth);
                bounds[3] = bounds[3] + (factor * borderWidth);
            }
        }
        else {
            if (typeof this._points === 'undefined' && pointCollection.length > 0) {
                bounds = this._dictionary.get('Rect');
            }
            else {
                bounds = this._points;
            }
        }
        if (!this._isFlatten && inkCollection) {
            this._updateInkListCollection(inkCollection);
        }
        return bounds;
    };
    PdfInkAnnotation.prototype._obtainInkListCollection = function () {
        var path = [];
        if (this._dictionary.has('InkList')) {
            var inkList = this._dictionary.getArray('InkList');
            var list = [];
            for (var i = 0; i < inkList.length; i++) {
                var innerList = inkList[i];
                for (var j = 0; j < innerList.length; j++) {
                    list.push(innerList[j]);
                }
                path.push(list);
                if (list.length === innerList.length) {
                    list = [];
                }
            }
        }
        return path;
    };
    return PdfInkAnnotation;
}(PdfComment));

/**
 * `PdfPopupAnnotation` class represents the popup annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new popup annotation
 * const annotation: PdfPopupAnnotation = new PdfPopupAnnotation('Test popup annotation', 10, 40, 30, 30);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfPopupAnnotation = /** @class */ (function (_super) {
    __extends(PdfPopupAnnotation, _super);
    function PdfPopupAnnotation(text, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._icon = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.note;
        _this._iconString = '';
        _this._stateModel = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationStateModel */ .c2.none;
        _this._state = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationState */ .jf.none;
        _this._open = false;
        _this._isReview = false;
        _this._isComment = false;
        _this._comment = 'q 1 1 1 rg 0 i 1 w 4 M 1 j 0 J []0 d 1 0 0 1 9 5.0908 cm 7.74 12.616 m -7.74 12.616 l -8.274 12.616 -8.707 12.184 -8.707 11.649 c h f Q 0 G ';
        _this._commentSecondHalf = '0 i 0.60 w 4 M 1 j 0 J [0 100]1 d  1 0 0 1 9 5.0908 cm 4.1 1.71 m -0.54 -2.29 l  -0.54 1.71 l  -5.5 1.71 l  -5.5 14.42 l  10.5 14.42 l  10.5 1.71 l  4.1 1.71 l -2.33 9.66 m 7.34 9.66 l 7.34 8.83 l -2.33 8.83 l -2.33 9.66 l -2.33 7.28 m 5.88 7.28 l 5.88 6.46 l -2.33 6.46 l -2.33 7.28 l 14.9 23.1235 m -14.9 23.1235 l -14.9 -20.345 l 14.9 -20.345 l 14.9 23.1235 l b ';
        _this._note = '0 G 0 i 0.61 w 4 M 0 j 0 J []0 d  q 1 0 0 1 16.959 1.3672 cm 0 0 m 0 -0.434 -0.352 -0.785 -0.784 -0.785 c -14.911 -0.785 l -15.345 -0.785 -15.696 -0.434 -15.696 0 c -15.696 17.266 l -15.696 17.699 -15.345 18.051 -14.911 18.051 c -0.784 18.051 l -0.352 18.051 0 17.699 0 17.266 c h b Q q 1 0 0 1 4.4023 13.9243 cm 0 0 m 9.418 0 l S Q q 1 0 0 1 4.4019 11.2207 cm 0 0 m 9.418 0 l S Q q 1 0 0 1 4.4023 8.5176 cm 0 0 m 9.418 0 l S Q q 1 0 0 1 4.4023 5.8135 cm 0 0 m 9.418 0 l S Q ';
        _this._help = 'q 1 1 1 rg 0 i 1 w 4 M 1 j 0 J []0 d 1 0 0 1 12.1465 10.5137 cm -2.146 9.403 m -7.589 9.403 -12.001 4.99 -12.001 -0.453 c -12.001 -5.895 -7.589 -10.309 -2.146 -10.309 c 3.296 -10.309 7.709 -5.895 7.709 -0.453 c 7.709 4.99 3.296 9.403 -2.146 9.403 c h f Q ';
        _this._helpSecondHalf = ' 0 G 0 i 0.59 w 4 M 1 j 0 J []0 d  1 0 0 1 12.1465 10.5137 cm 0 0 m -0.682 -0.756 -0.958 -1.472 -0.938 -2.302 c -0.938 -2.632 l -3.385 -2.632 l -3.403 -2.154 l -3.459 -1.216 -3.147 -0.259 -2.316 0.716 c -1.729 1.433 -1.251 2.022 -1.251 2.647 c -1.251 3.291 -1.674 3.715 -2.594 3.751 c -3.202 3.751 -3.937 3.531 -4.417 3.2 c -5.041 5.205 l -4.361 5.591 -3.274 5.959 -1.968 5.959 c 0.46 5.959 1.563 4.616 1.563 3.089 c 1.563 1.691 0.699 0.771 0 0 c -2.227 -6.863 m -2.245 -6.863 l -3.202 -6.863 -3.864 -6.146 -3.864 -5.189 c -3.864 -4.196 -3.182 -3.516 -2.227 -3.516 c -1.233 -3.516 -0.589 -4.196 -0.57 -5.189 c -0.57 -6.146 -1.233 -6.863 -2.227 -6.863 c -2.146 9.403 m -7.589 9.403 -12.001 4.99 -12.001 -0.453 c -12.001 -5.895 -7.589 -10.309 -2.146 -10.309 c 3.296 -10.309 7.709 -5.895 7.709 -0.453 c 7.709 4.99 3.296 9.403 -2.146 9.403 c b ';
        _this._insert = ' 0 i 0.59 w 4 M 0 j 0 J []0 d  1 0 0 1 8.5386 19.8545 cm 0 0 m -8.39 -19.719 l 8.388 -19.719 l h B ';
        _this._key = 'q 1 1 1 rg 0 i 1 w 4 M 1 j 0 J []0 d 1 0 0 1 6.5 12.6729 cm 0.001 5.138 m -2.543 5.138 -4.604 3.077 -4.604 0.534 c -4.604 -1.368 -3.449 -3.001 -1.802 -3.702 c -1.802 -4.712 l -0.795 -5.719 l -1.896 -6.82 l -0.677 -8.039 l -1.595 -8.958 l -0.602 -9.949 l -1.479 -10.829 l -0.085 -12.483 l 1.728 -10.931 l 1.728 -3.732 l 1.737 -3.728 1.75 -3.724 1.76 -3.721 c 3.429 -3.03 4.604 -1.385 4.604 0.534 c 4.604 3.077 2.542 5.138 0.001 5.138 c f Q ';
        _this._keySecondHalf = ' 0 G 0 i 0.59 w 4 M 1 j 0 J []0 d  1 0 0 1 6.5 12.6729 cm 0 0 m -1.076 0 -1.95 0.874 -1.95 1.95 c -1.95 3.028 -1.076 3.306 0 3.306 c 1.077 3.306 1.95 3.028 1.95 1.95 c 1.95 0.874 1.077 0 0 0 c 0.001 5.138 m -2.543 5.138 -4.604 3.077 -4.604 0.534 c -4.604 -1.368 -3.449 -3.001 -1.802 -3.702 c -1.802 -4.712 l -0.795 -5.719 l -1.896 -6.82 l -0.677 -8.039 l -1.595 -8.958 l -0.602 -9.949 l -1.479 -10.829 l -0.085 -12.483 l 1.728 -10.931 l 1.728 -3.732 l 1.737 -3.728 1.75 -3.724 1.76 -3.721 c 3.429 -3.03 4.604 -1.385 4.604 0.534 c 4.604 3.077 2.542 5.138 0.001 5.138 c b ';
        _this._newParagraph = '1 0.819611 0 rg 0 G 0 i 0.58 w 4 M 0 j 0 J []0 d ';
        _this._newParagraphSecondHalf = ' 0 G 0 i 0.59 w 4 M 1 j 0 J []0 d  q 1 0 0 1 6.4995 20 cm 0 0 m -6.205 -12.713 l 6.205 -12.713 l h b Q q 1 0 0 1 1.1909 6.2949 cm 0 0 m 1.278 0 l 1.353 0 1.362 -0.02 1.391 -0.066 c 2.128 -1.363 3.78 -4.275 3.966 -4.713 c 3.985 -4.713 l 3.976 -4.453 3.957 -3.91 3.957 -3.137 c 3.957 -0.076 l 3.957 -0.02 3.976 0 4.041 0 c 4.956 0 l 5.021 0 5.04 -0.029 5.04 -0.084 c 5.04 -6.049 l 5.04 -6.113 5.021 -6.133 4.947 -6.133 c 3.695 -6.133 l 3.621 -6.133 3.611 -6.113 3.574 -6.066 c 3.052 -4.955 1.353 -2.063 0.971 -1.186 c 0.961 -1.186 l 0.999 -1.68 0.999 -2.146 1.008 -3.025 c 1.008 -6.049 l 1.008 -6.104 0.989 -6.133 0.933 -6.133 c 0.009 -6.133 l -0.046 -6.133 -0.075 -6.123 -0.075 -6.049 c -0.075 -0.066 l -0.075 -0.02 -0.056 0 0 0 c f Q q 1 0 0 1 9.1367 3.0273 cm 0 0 m 0.075 0 0.215 -0.008 0.645 -0.008 c 1.4 -0.008 2.119 0.281 2.119 1.213 c 2.119 1.969 1.633 2.381 0.737 2.381 c 0.354 2.381 0.075 2.371 0 2.361 c h -1.146 3.201 m -1.146 3.238 -1.129 3.268 -1.082 3.268 c -0.709 3.275 0.02 3.285 0.729 3.285 c 2.613 3.285 3.248 2.314 3.258 1.232 c 3.258 -0.27 2.007 -0.914 0.607 -0.914 c 0.327 -0.914 0.057 -0.914 0 -0.904 c 0 -2.789 l 0 -2.836 -0.019 -2.865 -0.074 -2.865 c -1.082 -2.865 l -1.119 -2.865 -1.146 -2.846 -1.146 -2.799 c h f Q ';
        _this._paragraph = 'q 1 1 1 rg 0 i 1 w 4 M 1 j 0 J []0 d 1 0 0 1 19.6973 10.0005 cm 0 0 m 0 -5.336 -4.326 -9.662 -9.663 -9.662 c -14.998 -9.662 -19.324 -5.336 -19.324 0 c -19.324 5.335 -14.998 9.662 -9.663 9.662 c -4.326 9.662 0 5.335 0 0 c h f Q ';
        _this._paragraphSecondHalf = '0 G 0 i 0.59 w 4 M 1 j 0 J []0 d  q 1 0 0 1 19.6973 10.0005 cm 0 0 m 0 -5.336 -4.326 -9.662 -9.663 -9.662 c -14.998 -9.662 -19.324 -5.336 -19.324 0 c -19.324 5.335 -14.998 9.662 -9.663 9.662 c -4.326 9.662 0 5.335 0 0 c h S Q q 1 0 0 1 11.6787 2.6582 cm 0 0 m -1.141 0 l -1.227 0 -1.244 0.052 -1.227 0.139 c -0.656 1.157 -0.52 2.505 -0.52 3.317 c -0.52 3.594 l -2.833 3.783 -5.441 4.838 -5.441 8.309 c -5.441 10.778 -3.714 12.626 -0.57 13.024 c -0.535 13.508 -0.381 14.129 -0.242 14.389 c -0.207 14.44 -0.174 14.475 -0.104 14.475 c 1.088 14.475 l 1.156 14.475 1.191 14.458 1.175 14.372 c 1.105 14.095 0.881 13.127 0.881 12.402 c 0.881 9.431 0.932 7.324 0.95 4.06 c 0.95 2.298 0.708 0.813 0.189 0.07 c 0.155 0.034 0.103 0 0 0 c b Q ';
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Text'));
        if (typeof text !== 'undefined') {
            _this.text = text;
        }
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.popupAnnotation;
        return _this;
    }
    Object.defineProperty(PdfPopupAnnotation.prototype, "open", {
        /**
         * Gets the boolean flag indicating whether annotation has open or not.
         *
         * @returns {boolean} Caption.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Gets the boolean flag indicating whether annotation has open or not.
         * let open: boolean =  annotation.open;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Open')) {
                this._open = this._dictionary.get('Open');
            }
            return this._open;
        },
        /**
         * Sets the boolean flag indicating whether annotation has open or not.
         *
         * @param {boolean} value Open.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Sets the boolean flag indicating whether annotation has open or not.
         * annotation.open = true;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._open = value;
                this._dictionary.update('Open', this._open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfPopupAnnotation.prototype, "icon", {
        /**
         * Gets the icon type of the popup annotation.
         *
         * @returns {PdfPopupIcon} Annotation icon.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Gets the icon type of the popup annotation.
         * let icon: PdfPopupIcon = annotation.icon;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Name')) {
                this._icon = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapPopupIcon */ .lh)(this._dictionary.get('Name').name);
            }
            return this._icon;
        },
        /**
         * Sets the icon type of the popup annotation.
         *
         * @param {PdfPopupIcon} value Annotation icon.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Sets the icon type of the popup annotation.
         * annotation.icon = PdfPopupIcon.newParagraph;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._icon = value;
                this._dictionary.update('Name', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(this._obtainIconName(this._icon)));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfPopupAnnotation.prototype, "stateModel", {
        /**
         * Gets the state model of the popup annotation.
         *
         * @returns {PdfAnnotationStateModel} Annotation State Model.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Gets the state model of the popup annotation.
         * let stateModel: PdfAnnotationStateModel = annotation.stateModel;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('StateModel')) {
                this._stateModel = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapAnnotationStateModel */ .Nh)(this._dictionary.get('StateModel'));
            }
            return this._stateModel;
        },
        /**
         * Sets the state model of the popup annotation.
         *
         * @param {PdfAnnotationStateModel} value Annotation State Model.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Sets the state model of the popup annotation.
         * annotation.stateModel = PdfAnnotationStateModel.marked;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._stateModel = value;
                this._dictionary.update('StateModel', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapAnnotationStateModel */ .h0)(this._stateModel));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfPopupAnnotation.prototype, "state", {
        /**
         * Gets the state of the popup annotation.
         *
         * @returns {PdfAnnotationState} Annotation State.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Gets the state of the popup annotation.
         * let state: PdfAnnotationState = annotation.state;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('State')) {
                this._state = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapAnnotationState */ .uX)(this._dictionary.get('State'));
            }
            return this._state;
        },
        /**
         * Sets the state of the popup annotation.
         *
         * @param {PdfAnnotationState} value Annotation State.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
         * // Sets the state of the popup annotation.
         * annotation.state = PdfAnnotationState.completed;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._state = value;
                this._dictionary.update('State', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapAnnotationState */ .sb)(this._state));
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfPopupAnnotation._load = function (page, dictionary) {
        var annot = new PdfPopupAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        if (dictionary.has('IRT')) {
            annot._isReview = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._checkReview */ .EE)(dictionary);
            if (!annot._isReview) {
                annot._isComment = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._checkComment */ .p$)(dictionary);
            }
        }
        return annot;
    };
    PdfPopupAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfPopupAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            this._bounds = { x: 0, y: 0, width: 0, height: 0 };
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        var rectangle = [this.bounds.x, this.bounds.y, (this.bounds.x + this.bounds.width),
            (this.bounds.y + this.bounds.height)];
        this._dictionary.update('Rect', rectangle);
        if (this._setAppearance) {
            this._appearanceTemplate = this._createPopupAppearance();
            if (this._appearanceTemplate) {
                if (this._dictionary.has('AP')) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
                }
                var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
                this._appearanceTemplate._content.dictionary._updated = true;
                var reference = this._crossReference._getNextReference();
                this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
                this._appearanceTemplate._content.reference = reference;
                dictionary.set('N', reference);
                dictionary._updated = true;
                this._dictionary.set('AP', dictionary);
            }
        }
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfPopupAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (!this._appearanceTemplate && this._isFlattenPopups && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (appearanceStream) {
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                    if (this._appearanceTemplate !== null) {
                        var state = this._page.graphics.save();
                        if (this.opacity < 1) {
                            this._page.graphics.setTransparency(this.opacity);
                        }
                        this._page.graphics.drawTemplate(this._appearanceTemplate, this.bounds);
                        this._page.graphics.restore(state);
                    }
                }
            }
        }
        else {
            this._postProcess();
            if (!this._appearanceTemplate) {
                if (isFlatten) {
                    if (!this._dictionary.has('AP')) {
                        this._appearanceTemplate = this._createPopupAppearance();
                    }
                    else {
                        var dictionary = this._dictionary.get('AP');
                        if (dictionary && dictionary.has('N')) {
                            var appearanceStream = dictionary.get('N');
                            var reference = dictionary.getRaw('N');
                            if (appearanceStream) {
                                if (reference) {
                                    appearanceStream.reference = reference;
                                }
                                this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                            }
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups && this.flatten) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        if (isFlatten) {
            this._removeAnnotation(this._page, this);
        }
    };
    PdfPopupAnnotation.prototype._createPopupAppearance = function () {
        var nativeRectangle = [0, 0, this.bounds.width, this.bounds.height];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        var graphics = template.graphics;
        graphics._sw._clear();
        if (this.opacity < 1) {
            graphics.save();
            graphics.setTransparency(this.opacity);
        }
        switch (this.icon) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.comment:
                graphics._sw._write(this._comment);
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._commentSecondHalf);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.paragraph:
                graphics._sw._write(this._paragraph);
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._paragraphSecondHalf);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.help:
                graphics._sw._write(this._help);
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._helpSecondHalf);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.note:
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._note);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.insert:
                graphics._sw._write('0 G ');
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._insert);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.key:
                graphics._sw._write(this._key);
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._keySecondHalf);
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.newParagraph:
                graphics._sw._write(this._newParagraph);
                graphics._sw._setColorSpace(this.color, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfColorSpace */ .l3.rgb, false);
                graphics._sw._write(this._newParagraphSecondHalf);
                break;
        }
        if (this.opacity < 1) {
            graphics.restore();
        }
        return template;
    };
    PdfPopupAnnotation.prototype._obtainIconName = function (icon) {
        switch (icon) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.note:
                this._iconString = 'Note';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.comment:
                this._iconString = 'Comment';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.help:
                this._iconString = 'Help';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.insert:
                this._iconString = 'Insert';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.key:
                this._iconString = 'Key';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.newParagraph:
                this._iconString = 'NewParagraph';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfPopupIcon */ .gZ.paragraph:
                this._iconString = 'Paragraph';
                break;
        }
        return this._iconString;
    };
    return PdfPopupAnnotation;
}(PdfComment));

/**
 * `PdfFileLinkAnnotation` class represents the link annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new file link annotation
 * let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation(10, 40, 30, 30, "image.png");
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfFileLinkAnnotation = /** @class */ (function (_super) {
    __extends(PdfFileLinkAnnotation, _super);
    function PdfFileLinkAnnotation(x, y, width, height, fileName) {
        var _this = _super.call(this) || this;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Link'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        if (typeof fileName !== 'undefined' && fileName !== null) {
            _this._fileName = fileName;
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.fileLinkAnnotation;
        return _this;
    }
    Object.defineProperty(PdfFileLinkAnnotation.prototype, "action", {
        /**
         * Gets the action of the annotation.
         *
         * @returns {string} Action.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFileLinkAnnotation = page.annotations.at(0) as PdfFileLinkAnnotation;
         * // Gets the action of the annotation.
         * let action: string = annotation.action;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            var _this = this;
            if (typeof this._action === 'undefined' && this._dictionary.has('A')) {
                var dictionary = this._dictionary.get('A');
                if (dictionary && dictionary.has('Next')) {
                    var action = dictionary.get('Next');
                    if (Array.isArray(action)) {
                        action.forEach(function (reference) {
                            if (reference && reference instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfReference */ .BG) {
                                var actionDictionary = _this._crossReference._fetch(reference);
                                if (actionDictionary.has('JS')) {
                                    _this._action = actionDictionary.get('JS');
                                }
                            }
                        });
                    }
                }
            }
            return this._action;
        },
        /**
         * Sets the action of the annotation.
         *
         * @param {string} value Action.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFileLinkAnnotation = page.annotations.at(0) as PdfFileLinkAnnotation;
         * // Sets the action of the annotation.
         * annotation.action = ‘syncfusion’;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            var _this = this;
            if (!this._isLoaded && typeof value === 'string') {
                this._action = value;
            }
            if (this._isLoaded && typeof value === 'string') {
                if (this.action !== value && this._dictionary.has('A')) {
                    var dictionary = this._dictionary.get('A');
                    if (dictionary && dictionary.has('Next')) {
                        var action = dictionary.get('Next');
                        if (Array.isArray(action)) {
                            action.forEach(function (reference) {
                                if (reference && reference instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfReference */ .BG) {
                                    var actionDictionary = _this._crossReference._fetch(reference);
                                    if (actionDictionary.has('JS')) {
                                        actionDictionary.update('JS', value);
                                        _this._action = value;
                                        _this._dictionary._updated = true;
                                    }
                                }
                            });
                        }
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfFileLinkAnnotation._load = function (page, dictionary) {
        var annot = new PdfFileLinkAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfFileLinkAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfFileLinkAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        this._addAction();
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfFileLinkAnnotation.prototype._addAction = function () {
        var _this = this;
        if (this._dictionary.has('A')) {
            var action = this._dictionary.get('A');
            if (action) {
                if (typeof this._action !== 'undefined' && this._action !== null && action.has('Next')) {
                    var nextAction = action.get('Next');
                    if (Array.isArray(nextAction) && nextAction.length > 0) {
                        nextAction.forEach(function (reference) {
                            if (reference && reference instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfReference */ .BG && reference._isNew) {
                                _this._crossReference._cacheMap.delete(reference);
                            }
                        });
                    }
                }
                if (action.has('F')) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(action, this._crossReference, 'F');
                }
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary, this._crossReference, 'A');
        }
        var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Action'));
        dictionary.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Launch'));
        var fileDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        fileDictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Filespec'));
        fileDictionary.set('UF', this._fileName);
        if (typeof this._action !== 'undefined' && this._action !== null) {
            var actionDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
            actionDictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Action'));
            actionDictionary.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('JavaScript'));
            actionDictionary.set('JS', this._action);
            var ref = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(ref, actionDictionary);
            actionDictionary._updated = true;
            dictionary.set('Next', [ref]);
        }
        var reference = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(reference, fileDictionary);
        fileDictionary._updated = true;
        dictionary.set('F', reference);
        dictionary._updated = true;
        this._dictionary.set('A', dictionary);
    };
    PdfFileLinkAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (!this._isLoaded) {
            this._postProcess();
        }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return PdfFileLinkAnnotation;
}(PdfAnnotation));

/**
 * `PdfUriAnnotation` class represents the URI annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new URI annotation
 * let annotation: PdfUriAnnotation = new PdfUriAnnotation(100, 150, 200, 100, ‘http://www.google.com’);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfUriAnnotation = /** @class */ (function (_super) {
    __extends(PdfUriAnnotation, _super);
    function PdfUriAnnotation(x, y, width, height, uri) {
        var _this = _super.call(this) || this;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Link'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        if (typeof uri !== 'undefined' && uri !== null) {
            _this._uri = uri;
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.uriAnnotation;
        return _this;
    }
    Object.defineProperty(PdfUriAnnotation.prototype, "uri", {
        /**
         * Gets the uri of the annotation.
         *
         * @returns {string} Uri.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfUriAnnotation = page.annotations.at(0) as PdfUriAnnotation;
         * // Gets the uri of the annotation.
         * let uri: string = annotation.uri;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._uri === 'undefined' && this._dictionary.has('A')) {
                var linkDict = this._dictionary.get('A');
                if (linkDict.has('URI')) {
                    this._uri = linkDict.get('URI');
                }
            }
            return this._uri;
        },
        /**
         * Sets the uri of the annotation.
         *
         * @param {string} value Uri.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Create a new URI annotation
         * let annotation: PdfUriAnnotation = new PdfUriAnnotation(100, 150, 200, 100);
         * // Sets the uri of the annotation
         * annotation.uri = ‘http://www.google.com’;
         * // Add annotation to the page
         * page.annotations.add(annotation);
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string') {
                if (this._isLoaded && this._dictionary.has('A') && value !== this.uri) {
                    var linkDict = this._dictionary.get('A');
                    if (linkDict.has('URI')) {
                        this._uri = value;
                        linkDict.update('URI', value);
                        this._dictionary._updated = true;
                    }
                }
                else {
                    this._uri = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfUriAnnotation._load = function (page, dictionary) {
        var annot = new PdfUriAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfUriAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfUriAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        this._addAction();
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfUriAnnotation.prototype._addAction = function () {
        var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Action'));
        dictionary.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('URI'));
        if (typeof this._uri !== 'undefined') {
            dictionary.set('URI', this._uri);
        }
        dictionary._updated = true;
        this._dictionary.set('A', dictionary);
        this._dictionary.update('Border', [this.border.hRadius, this.border.vRadius, this.border.width]);
    };
    PdfUriAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (!this._isLoaded) {
            this._postProcess();
        }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return PdfUriAnnotation;
}(PdfAnnotation));

/**
 * `PdfDocumentLinkAnnotation` class represents the document link annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new document link annotation
 * let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(100, 150, 40, 60);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfDocumentLinkAnnotation = /** @class */ (function (_super) {
    __extends(PdfDocumentLinkAnnotation, _super);
    function PdfDocumentLinkAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Link'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.documentLinkAnnotation;
        return _this;
    }
    Object.defineProperty(PdfDocumentLinkAnnotation.prototype, "destination", {
        /**
         * Gets the destination of the annotation.
         *
         * @returns {PdfDestination} Destination.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfDocumentLinkAnnotation = page.annotations.at(0) as PdfDocumentLinkAnnotation;
         * // Gets the destination of the annotation.
         * let destination: PdfDestination =annotation.destination;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded && !this._destination) {
                var destinationHelper = void 0;
                if (this._dictionary.has('Dest')) {
                    destinationHelper = new _pdf_page__WEBPACK_IMPORTED_MODULE_11__/* ._PdfDestinationHelper */ .G2(this._dictionary, 'Dest');
                    this.destination = destinationHelper._obtainDestination();
                }
                else if (!this._destination && this._dictionary.has('A')) {
                    var action = this._dictionary.get('A');
                    if (action && action instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP && action.has('D')) {
                        destinationHelper = new _pdf_page__WEBPACK_IMPORTED_MODULE_11__/* ._PdfDestinationHelper */ .G2(action, 'D');
                        this.destination = destinationHelper._obtainDestination();
                    }
                }
            }
            return this._destination;
        },
        /**
         * Sets the destination of the annotation.
         *
         * @param {PdfDestination} value Destination.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access first page
         * let page: PdfPage = document.getPage(0);
         * // Access the annotation at index 0
         * let annotation: PdfDocumentLinkAnnotation = page.annotations.at(0) as PdfDocumentLinkAnnotation;
         * // Initializes a new instance of the `PdfDestination` class.
         * let destination: PdfDestination = new PdfDestination();
         * // Sets the zoom factor.
         * destination.zoom = 20;
         * // Sets the page where the destination is situated.
         * destination.page = page;
         * // Sets the mode of the destination.
         * destination.mode = PdfDestinationMode.fitToPage;
         * // Sets the location of the destination.
         * destination.location = [20, 20];
         * // Sets the bounds of the destination.
         * destination.destinationBounds = [20, 20, 100, 50];
         * // Sets destination to document link annotation.
         * annotation.destination = destination;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value) {
                this._destination = value;
                if (this._isLoaded) {
                    this._destination._initializePrimitive();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfDocumentLinkAnnotation._load = function (page, dictionary) {
        var annot = new PdfDocumentLinkAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfDocumentLinkAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfDocumentLinkAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        this._addDocument();
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfDocumentLinkAnnotation.prototype._addDocument = function () {
        if (this.destination) {
            this._dictionary.set('Dest', this.destination._array);
        }
    };
    PdfDocumentLinkAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (!this._isLoaded) {
            this._postProcess();
        }
        else if (this._destination) {
            this._dictionary.update('Dest', this._destination._array);
        }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return PdfDocumentLinkAnnotation;
}(PdfAnnotation));

/**
 * `PdfTextWebLinkAnnotation` class represents the link annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new PDF string format
 * const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
 * // Create a new standard font
 * const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
 * // Get the text size
 * let size: number[] = font.measureString("Syncfusion Site", format, [0, 0], 0, 0);
 * // Create a new text web link annotation
 * let annot: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation(50, 40, size[0], size[1], [0, 0, 0], [165, 42, 42], 1);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfTextWebLinkAnnotation = /** @class */ (function (_super) {
    __extends(PdfTextWebLinkAnnotation, _super);
    function PdfTextWebLinkAnnotation(x, y, width, height, brushColor, penColor, penWidth, text) {
        var _this = _super.call(this) || this;
        _this._isActionAdded = false;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Link'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._textWebLink = typeof text !== 'undefined' && text !== null ? text : '';
        if (typeof brushColor !== 'undefined' && brushColor !== null) {
            _this._brush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(brushColor);
        }
        if (typeof penColor !== 'undefined' && penColor !== null) {
            _this._pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(penColor, penWidth ? penWidth : 1);
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.textWebLinkAnnotation;
        return _this;
    }
    Object.defineProperty(PdfTextWebLinkAnnotation.prototype, "font", {
        /**
         * Gets the font of the annotation.
         *
         * @returns {PdfFont} font.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
         * // Gets the font of the annotation.
         * let font: PdfFont = annotation.font;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._font;
        },
        /**
         * Sets the font of the annotation.
         *
         * @param {PdfFont} value font.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
         * // Sets the font of the annotation.
         * annotation.font = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._font = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfTextWebLinkAnnotation.prototype, "url", {
        /**
         * Gets the url of the annotation.
         *
         * @returns {string} Url.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
         * // Gets the URL of the annotation.
         * let url: string = annotation.url;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._url === 'undefined' && this._dictionary.has('A')) {
                var linkDict = this._dictionary.get('A');
                if (linkDict.has('URI')) {
                    this._url = linkDict.get('URI');
                }
            }
            return this._url;
        },
        /**
         * Sets the url of the annotation.
         *
         * @param {string} value Url.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
         * // Sets the URL of the annotation.
         * annotation.url = ‘http://www.syncfusion.com’;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string') {
                if (this._isLoaded && this._dictionary.has('A')) {
                    var linkSource = this._dictionary._get('A'); // eslint-disable-line
                    var linkDict = this._dictionary.get('A');
                    if (linkDict && linkDict.has('URI')) {
                        this._url = value;
                        linkDict.update('URI', value);
                        if (!(linkSource instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfReference */ .BG)) {
                            this._dictionary._updated = linkDict._updated;
                        }
                    }
                }
                else {
                    this._url = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfTextWebLinkAnnotation._load = function (page, dictionary) {
        var annot = new PdfTextWebLinkAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfTextWebLinkAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfTextWebLinkAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        if (!this._isActionAdded) {
            this._addAction();
            this._isActionAdded = true;
        }
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfTextWebLinkAnnotation.prototype._addAction = function () {
        var rect = [this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height];
        if (typeof this.font === 'undefined' || this.font === null) {
            this.font = this._lineCaptionFont;
        }
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.top);
        this._page.graphics.drawString(this._textWebLink, this.font, rect, this._pen, this._brush, format);
        var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Action'));
        dictionary.set('S', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('URI'));
        if (typeof this._url !== 'undefined') {
            dictionary.set('URI', this._url);
        }
        dictionary._updated = true;
        this._dictionary.set('A', dictionary);
        this._dictionary.update('Border', [0, 0, 0]);
    };
    PdfTextWebLinkAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (!this._isLoaded) {
            this._postProcess();
        }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return PdfTextWebLinkAnnotation;
}(PdfAnnotation));

/**
 * `PdfAttachmentAnnotation` class represents the attachment annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new attachment annotation
 * const annotation: PdfAttachmentAnnotation = new PdfAttachmentAnnotation(300, 200, 30, 30, "Nature.jpg", imageData);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfAttachmentAnnotation = /** @class */ (function (_super) {
    __extends(PdfAttachmentAnnotation, _super);
    function PdfAttachmentAnnotation(x, y, width, height, fileName, data) {
        var _this = _super.call(this) || this;
        _this._icon = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAttachmentIcon */ .NE.pushPin;
        _this._iconString = '';
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('FileAttachment'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        if (typeof fileName !== 'undefined') {
            _this._fileName = fileName;
        }
        _this._stream = new _base_stream__WEBPACK_IMPORTED_MODULE_9__/* ._PdfStream */ .Ax(typeof data === 'string' ? (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._decode */ .e2)(data) : data);
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.fileAttachmentAnnotation;
        return _this;
    }
    Object.defineProperty(PdfAttachmentAnnotation.prototype, "icon", {
        /**
         * Gets the icon type of the attachment annotation.
         *
         * @returns {PdfAttachmentIcon} Annotation icon.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfAttachmentAnnotation = page.annotations.at(0) as PdfAttachmentAnnotation;
         * // Gets the icon type of the attachment annotation.
         * let icon: PdfAttachmentIcon = annotation.icon;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Name')) {
                this._icon = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapAttachmentIcon */ .El)(this._dictionary.get('Name').name);
            }
            return this._icon;
        },
        /**
         * Sets the icon type of the attachment annotation.
         *
         * @param {PdfAttachmentIcon} value Annotation icon.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as  PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfAttachmentAnnotation = page.annotations.at(0) as PdfAttachmentAnnotation;
         * // Sets the icon type of the attachment annotation.
         * annotation.icon = PdfAttachmentIcon.pushPin;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._icon = value;
                this._dictionary.update('Name', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(this._obtainIconName(this._icon)));
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfAttachmentAnnotation._load = function (page, dictionary) {
        var annot = new PdfAttachmentAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfAttachmentAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfAttachmentAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
        this._addAttachment();
    };
    PdfAttachmentAnnotation.prototype._addAttachment = function () {
        if (this._dictionary.has('FS')) {
            var fileSpecification = this._dictionary.get('FS');
            if (fileSpecification && fileSpecification.has('EF')) {
                var embeddedFile = fileSpecification.get('EF');
                if (embeddedFile && embeddedFile.has('F')) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(embeddedFile, this._crossReference, 'F');
                }
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary, this._crossReference, 'FS');
        }
        var fileSpectDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        fileSpectDictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Filespec'));
        fileSpectDictionary.set('Desc', this._fileName);
        fileSpectDictionary.set('F', this._fileName);
        fileSpectDictionary.set('UF', this._fileName);
        var fileDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        fileDictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('EmbeddedFile'));
        var paramsDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        var dateTime = new Date();
        paramsDictionary.set('CreationDate', dateTime.toTimeString());
        paramsDictionary.set('ModDate', new Date().toTimeString());
        paramsDictionary.set('Size', this._stream.length);
        fileDictionary.set('Params', paramsDictionary);
        this._stream.dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        this._stream.dictionary = fileDictionary;
        fileDictionary._crossReference = this._crossReference;
        var char1 = this._crossReference._newLine.charCodeAt(0);
        var char2 = this._crossReference._newLine.charCodeAt(1);
        var buffer = [char1, char2, 37, 80, 68, 70, 45];
        fileDictionary._crossReference._writeObject(this._stream, buffer);
        var reference = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(reference, this._stream);
        fileDictionary._updated = true;
        var efileDictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        efileDictionary.set('F', reference);
        fileSpectDictionary.set('EF', efileDictionary);
        var fsReference = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(fsReference, fileSpectDictionary);
        fileSpectDictionary._updated = true;
        this._dictionary.update('FS', fsReference);
    };
    PdfAttachmentAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (!this._isLoaded) {
            this._postProcess();
        }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    PdfAttachmentAnnotation.prototype._obtainIconName = function (icon) {
        switch (icon) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAttachmentIcon */ .NE.pushPin:
                this._iconString = 'PushPin';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAttachmentIcon */ .NE.tag:
                this._iconString = 'Tag';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAttachmentIcon */ .NE.graph:
                this._iconString = 'Graph';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAttachmentIcon */ .NE.paperClip:
                this._iconString = 'Paperclip';
                break;
        }
        return this._iconString;
    };
    return PdfAttachmentAnnotation;
}(PdfComment));

/**
 * `Pdf3DAnnotation` class represents the 3D annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Access first page
 * let page: PdfPage = document.getPage(0);
 * // Access the annotation at index 0
 * let annotation: Pdf3DAnnotation = page.annotations.at(0) as Pdf3DAnnotation;
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var Pdf3DAnnotation = /** @class */ (function (_super) {
    __extends(Pdf3DAnnotation, _super);
    /**
     * Initializes a new instance of the `Pdf3DAnnotation` class.
     *
     * @private
     */
    function Pdf3DAnnotation() {
        var _this = _super.call(this) || this;
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.movieAnnotation;
        return _this;
    }
    Pdf3DAnnotation._load = function (page, dictionary) {
        var annot = new Pdf3DAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    Pdf3DAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    Pdf3DAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return Pdf3DAnnotation;
}(PdfAnnotation));

/**
 * `PdfTextMarkupAnnotation` class represents the text markup annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new text markup annotation
 * let annotation: PdfTextMarkupAnnotation = new PdfTextMarkupAnnotation('Text markup', 50, 100, 100, 50);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfTextMarkupAnnotation = /** @class */ (function (_super) {
    __extends(PdfTextMarkupAnnotation, _super);
    function PdfTextMarkupAnnotation(text, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._textMarkupType = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.highlight;
        _this._quadPoints = new Array(8);
        _this._boundsCollection = [];
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        if (typeof text !== 'undefined') {
            _this._text = text;
        }
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.textMarkupAnnotation;
        return _this;
    }
    Object.defineProperty(PdfTextMarkupAnnotation.prototype, "bounds", {
        /**
         * Gets the bounds of the text markup annotation.
         *
         * @returns {{x: number, y: number, width: number, height: number}} Bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Gets the bounds of the annotation.
         * let bounds: {x: number, y: number, width: number, height: number} = annotation.bounds;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded) {
                this._bounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._calculateBounds */ .lN)(this._dictionary, this._page);
            }
            return this._bounds;
        },
        /**
         * Sets the bounds of the text markup annotation.
         *
         * @param {{x: number, y: number, width: number, height: number}} value bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Sets the bounds of the annotation.
         * annotation.bounds = {x: 10, y: 10, width: 150, height: 5};
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value) {
                if (this._isLoaded) {
                    if ((value.x !== this.bounds.x) || (value.y !== this.bounds.y) ||
                        (value.width !== this.bounds.width) || (value.height !== this.bounds.height)) {
                        var size = this._page.size;
                        if (size) {
                            var y = size[1] - (value.y + value.height);
                            var height = y + value.height;
                            this._dictionary.update('Rect', [value.x, y, value.x + value.width, height]);
                            this._bounds = value;
                            this._isChanged = true;
                        }
                    }
                }
                else {
                    this._bounds = value;
                    var nativeRectangle = this._obtainNativeRectangle();
                    this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._fromRectangle */ .xh)({ x: nativeRectangle[0], y: nativeRectangle[1], width: nativeRectangle[2], height: nativeRectangle[3] }));
                    this._isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfTextMarkupAnnotation.prototype, "textMarkUpColor", {
        /**
         * Gets the text markup color of the annotation.
         *
         * @returns {number[]} Text markup color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Gets the textMarkUp Color type of the attachment annotation.
         * let textMarkUpColor: number[] = annotation.textMarkUpColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._textMarkUpColor === 'undefined' && this._dictionary.has('C')) {
                this._textMarkUpColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(this._dictionary.getArray('C'));
            }
            return this._textMarkUpColor;
        },
        /**
         * Sets the text markup color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Sets the textMarkUp Color type of the attachment annotation.
         * annotation.textMarkUpColor = [255, 255, 255];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                var extColor = this.color;
                if (!this._isLoaded ||
                    typeof extColor === 'undefined' ||
                    (extColor[0] !== value[0] || extColor[1] !== value[1] || extColor[2] !== value[2])) {
                    this._color = value;
                    this._textMarkUpColor = value;
                    this._dictionary.update('C', [Number.parseFloat((value[0] / 255).toFixed(3)),
                        Number.parseFloat((value[1] / 255).toFixed(3)),
                        Number.parseFloat((value[2] / 255).toFixed(3))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfTextMarkupAnnotation.prototype, "textMarkupType", {
        /**
         * Gets the markup type of the annotation.
         *
         * @returns {PdfTextMarkupAnnotationType} Markup type.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Gets the markup type of the annotation.
         * let textMarkupType: PdfTextMarkupAnnotationType = annotation.textMarkupType;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Subtype')) {
                var text = this._dictionary.get('Subtype');
                this._textMarkupType = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapMarkupAnnotationType */ .dq)(text.name);
            }
            return this._textMarkupType;
        },
        /**
         * Sets the markup type of the annotation.
         *
         * @param {PdfTextMarkupAnnotationType} value Markup type.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Sets the markup type of the annotation.
         * annotation.textMarkupType = PdfTextMarkupAnnotationType.squiggly;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._textMarkupType = value;
                this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMarkupAnnotationType */ .LP)(value)));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfTextMarkupAnnotation.prototype, "boundsCollection", {
        /**
         * Gets the markup bounds collection of the annotation.
         *
         * @returns {Array<number[]>} Markup bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as  PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation =  page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Gets the markup bounds collection of the annotation.
         * let boundsCollection : Array<number[]> = annotation.boundsCollection;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded) {
                var collection = [];
                if (this._dictionary.has('QuadPoints')) {
                    var points = this._dictionary.getArray('QuadPoints');
                    if (points && points.length > 0) {
                        var count = points.length / 8;
                        for (var i = 0; i < count; i++) {
                            var x = points[4 + (i * 8)] - points[i * 8];
                            var y = points[5 + (i * 8)] - points[1 + (i * 8)];
                            var height = Math.sqrt((x * x) + (y * y));
                            x = points[6 + (i * 8)] - points[4 + (i * 8)];
                            y = points[7 + (i * 8)] - points[5 + (i * 8)];
                            var width = Math.sqrt((x * x) + (y * y));
                            var rect = [points[i * 8], this._page.size[1] - points[1 + (i * 8)], width, height];
                            collection.push(rect);
                        }
                    }
                }
                return collection;
            }
            return this._boundsCollection;
        },
        /**
         * Sets the markup bounds collection of the annotation.
         *
         * @param {Array<number[]>} value Markup bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfTextMarkupAnnotation = page.annotations.at(0) as PdfTextMarkupAnnotation;
         * // Sets the markup bounds collection of the  annotation.
         * annotation.boundsCollection = [[50, 50, 100, 100], [201, 101, 61, 31], [101, 401, 61, 31]];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            var _a;
            if (!this._isLoaded && typeof value !== 'undefined') {
                if (value.length > 0) {
                    this._quadPoints = new Array((value.length * 8));
                    (_a = this._boundsCollection).push.apply(_a, value);
                }
                else {
                    this._quadPoints = new Array(8);
                    this._boundsCollection = value;
                }
                this._isChanged = true;
            }
            if (this._isLoaded && typeof value !== 'undefined') {
                var isChanged = false;
                if (this.boundsCollection.length === value.length) {
                    for (var i = 0; i < value.length; i++) {
                        var values = value[i];
                        for (var j = 0; j < values.length; j++) {
                            if (value[i][j] !==
                                this.boundsCollection[i][j]) {
                                isChanged = true;
                                break;
                            }
                        }
                    }
                }
                else {
                    isChanged = true;
                }
                if (isChanged) {
                    this._quadPoints = new Array((value.length * 8));
                    var pageHeight = this._page.size[1];
                    for (var i = 0; i < value.length; i++) {
                        this._quadPoints[0 + i * 8] = value[i][0];
                        this._quadPoints[1 + (i * 8)] = pageHeight -
                            value[i][1];
                        this._quadPoints[2 + i * 8] = value[i][0] +
                            value[i][2];
                        this._quadPoints[3 + i * 8] = pageHeight -
                            value[i][1];
                        this._quadPoints[4 + i * 8] = value[i][0];
                        this._quadPoints[5 + i * 8] = this._quadPoints[1 + (i * 8)] -
                            value[i][3];
                        this._quadPoints[6 + i * 8] = value[i][0] +
                            value[i][2];
                        this._quadPoints[7 + i * 8] = this._quadPoints[5 +
                            i * 8];
                    }
                    this._dictionary.update('QuadPoints', this._quadPoints);
                    this._isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfTextMarkupAnnotation._load = function (page, dictionary) {
        var annot = new PdfTextMarkupAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfTextMarkupAnnotation.prototype._obtainNativeRectangle = function () {
        var nativeRectangle = [this._bounds.x, this._bounds.y + this._bounds.height, this._bounds.width, this._bounds.height];
        var cropOrMediaBox;
        if (this._page && !this._page._isNew) {
            var size = this._page.size;
            nativeRectangle[1] = size[1] - nativeRectangle[1];
            cropOrMediaBox = this._getCropOrMediaBox();
        }
        else if (this._page && this._page._isNew) {
            var size = this._page._getActualBounds(this._page._pageSettings);
            nativeRectangle[0] += size[0];
            nativeRectangle[1] = this._page._pageSettings.size[1] - (size[1] + nativeRectangle[1]);
            cropOrMediaBox = this._getCropOrMediaBox();
        }
        if (cropOrMediaBox) {
            if (cropOrMediaBox[3] < 0) {
                var yCrop = cropOrMediaBox[1];
                var heightCrop = cropOrMediaBox[3];
                cropOrMediaBox[1] = heightCrop;
                cropOrMediaBox[3] = yCrop;
            }
            if (cropOrMediaBox.length > 2 && (cropOrMediaBox[0] !== 0 || cropOrMediaBox[1] !== 0)) {
                nativeRectangle[0] += cropOrMediaBox[0];
                if (this._page && this._page._pageDictionary.has('MediaBox') && !this._page._pageDictionary.has('CropBox') && cropOrMediaBox[1] > 0 && cropOrMediaBox[3] === 0) {
                    nativeRectangle[1] += cropOrMediaBox[3];
                }
                else {
                    nativeRectangle[1] += cropOrMediaBox[1];
                }
            }
        }
        return nativeRectangle;
    };
    PdfTextMarkupAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfTextMarkupAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            dictionary.set('W', this.border.width);
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (!this._dictionary.has('C')) {
            this._isTransparentColor = true;
        }
        var size = this._page.size;
        this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMarkupAnnotationType */ .LP)(this._textMarkupType)));
        if (this._isChanged) {
            this._setQuadPoints(size);
            this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
        }
        if (this._setAppearance) {
            this._appearanceTemplate = this._createMarkupAppearance();
            if (!this._isLoaded && this._boundsCollection.length > 1 && this._isChanged) {
                var native = this._obtainNativeRectangle();
                this._dictionary.update('Rect', [native[0], native[1], native[0] + native[2], native[1] + native[3]]);
            }
            if (this._dictionary.has('AP')) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
            }
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
            this._appearanceTemplate._content.dictionary._updated = true;
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            this._appearanceTemplate._content.reference = reference;
            dictionary.set('N', reference);
            dictionary._updated = true;
            this._dictionary.set('AP', dictionary);
        }
        if (typeof this._text !== 'undefined' && this._text !== null) {
            this._dictionary.set('Contents', this._text);
        }
        this._isChanged = false;
    };
    PdfTextMarkupAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createMarkupAppearance();
                if (!isFlatten) {
                    if (this._dictionary.has('AP')) {
                        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
                    }
                    var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
                    this._appearanceTemplate._content.dictionary._updated = true;
                    var reference = this._crossReference._getNextReference();
                    this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
                    this._appearanceTemplate._content.reference = reference;
                    dictionary.set('N', reference);
                    dictionary._updated = true;
                    this._dictionary.set('AP', dictionary);
                }
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    if (appearanceStream) {
                        var reference = dictionary.getRaw('N');
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess();
            if (!this._appearanceTemplate) {
                if (isFlatten) {
                    if (!this._dictionary.has('AP')) {
                        this._appearanceTemplate = this._createMarkupAppearance();
                    }
                    else {
                        var dictionary = this._dictionary.get('AP');
                        if (dictionary && dictionary.has('N')) {
                            var appearanceStream = dictionary.get('N');
                            if (appearanceStream) {
                                var reference = dictionary.getRaw('N');
                                if (reference) {
                                    appearanceStream.reference = reference;
                                }
                                this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                            }
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (!this._appearanceTemplate._content.dictionary.has('Matrix') && !this._isLoaded) {
                var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                if (box) {
                    this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
            }
            if (isNormalMatrix && typeof this._page.rotation !== 'undefined' && this._page.rotation !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else if (isNormalMatrix && this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary, this._appearanceTemplate)) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else if (!this._dictionary.has('AP') && this._appearanceTemplate) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
        }
        if (isFlatten) {
            this._page.annotations.remove(this);
        }
    };
    PdfTextMarkupAnnotation.prototype._createMarkupAppearance = function () {
        var width = 0;
        var height = 0;
        var rectangle;
        if (this.boundsCollection.length > 1) {
            var pdfPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            for (var i = 0; i < this.boundsCollection.length; i++) {
                var bounds = [];
                bounds[0] = this.boundsCollection[i][0];
                bounds[1] = this.boundsCollection[i][1];
                bounds[2] = this.boundsCollection[i][2];
                bounds[3] = this.boundsCollection[i][3];
                pdfPath.addRectangle(bounds[0], bounds[1], bounds[2], bounds[3]);
            }
            var rect = pdfPath._getBounds();
            rectangle = { x: rect[0], y: rect[1], width: rect[2], height: rect[3] };
            this.bounds = rectangle;
            width = rectangle.width;
            height = rectangle.height;
        }
        else {
            if (this._dictionary.has('QuadPoints')) {
                var quadPoints = this._dictionary.get('QuadPoints');
                if (this._quadPoints !== null) {
                    for (var i = 0; i < (quadPoints.length / 8); i++) {
                        if (this._isLoaded) {
                            var point = new Array();
                            var j = 0;
                            for (var k = 0; k < quadPoints.length;) {
                                var x1 = quadPoints[k];
                                var y1 = quadPoints[k + 1];
                                point[j] = [x1, y1];
                                k = k + 2;
                                j++;
                            }
                            var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
                            path._addLines(point);
                            var rect = path._getBounds();
                            rectangle = { x: rect[0], y: rect[1], width: rect[2], height: rect[3] };
                            width = rectangle.width;
                            height = rectangle.height;
                        }
                        else {
                            var x = Math.floor(quadPoints[4 + (i * 8)]) - Math.floor(quadPoints[0 + (i * 8)]);
                            var y = Math.floor(quadPoints[5 + (i * 8)]) - Math.floor(quadPoints[1 + (i * 8)]);
                            height = Math.sqrt((x * x) + (y * y));
                            x = Math.floor(quadPoints[6 + (i * 8)]) - Math.floor(quadPoints[4 + (i * 8)]);
                            y = Math.floor(quadPoints[7 + (i * 8)]) - Math.floor(quadPoints[5 + (i * 8)]);
                            width = Math.sqrt((x * x) + (y * y));
                            this.bounds = { x: this.bounds.x, y: this.bounds.y, width: width, height: height };
                        }
                    }
                }
            }
        }
        var nativeRectangle = [0, 0, width, height];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
        var graphics = template.graphics;
        if (typeof this.opacity !== 'undefined') {
            graphics.setTransparency(this.opacity, this.opacity, _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBlendMode */ .jm.multiply);
        }
        if (this.textMarkUpColor) {
            var pdfPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.textMarkUpColor, this.border.width);
            var brush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.textMarkUpColor);
            var x1 = 0;
            var y1 = 0;
            var w1 = 0;
            var h1 = 0;
            if (this.boundsCollection.length > 1) {
                for (var i = 0; i < this.boundsCollection.length; i++) {
                    var bounds = [];
                    bounds[0] = this.boundsCollection[i][0];
                    bounds[1] = this.boundsCollection[i][1];
                    bounds[2] = this.boundsCollection[i][2];
                    bounds[3] = this.boundsCollection[i][3];
                    if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.highlight) {
                        graphics.drawRectangle(bounds[0] - rectangle.x, bounds[1] - rectangle.y, bounds[2], bounds[3], brush);
                    }
                    else if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.underline) {
                        x1 = bounds[0] - rectangle.x;
                        y1 = (bounds[1] - rectangle.y) + (bounds[3] - ((bounds[3] / 2) / 3));
                        w1 = bounds[2] + (bounds[0] - rectangle.x);
                        h1 = (bounds[1] - rectangle.y) + (bounds[3] - ((bounds[3] / 2) / 3));
                        graphics.drawLine(pdfPen, x1, y1, w1, h1);
                    }
                    else if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.strikeOut) {
                        x1 = bounds[0] - rectangle.x;
                        y1 = (bounds[1] - rectangle.y) + (bounds[3] - (bounds[3] / 2));
                        w1 = bounds[2] + (bounds[0] - rectangle.x);
                        h1 = (bounds[1] - rectangle.y) + (bounds[3] - (bounds[3] / 2));
                        graphics.drawLine(pdfPen, x1, y1, w1, h1);
                    }
                    else if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.squiggly) {
                        pdfPen._width = bounds[3] * 0.02;
                        graphics.save();
                        graphics.translateTransform(bounds[0] - rectangle.x, (bounds[1] - rectangle.y));
                        graphics.setClip([0, 0, bounds[2], bounds[3]]);
                        graphics.drawPath(this._drawSquiggly(bounds[2], bounds[3]), pdfPen);
                        graphics.restore();
                    }
                }
            }
            else {
                if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.highlight) {
                    graphics.drawRectangle(0, 0, width, height, brush);
                }
                else if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.underline) {
                    graphics.drawLine(pdfPen, 0, height - ((height / 2) / 3), width, height - ((height / 2) / 3));
                }
                else if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.strikeOut) {
                    graphics.drawLine(pdfPen, 0, height / 2, width, height / 2);
                }
                else if (this.textMarkupType === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextMarkupAnnotationType */ .ry.squiggly) {
                    pdfPen._width = height * 0.02;
                    graphics.drawPath(this._drawSquiggly(Math.round(width), Math.round(height)), pdfPen);
                }
                if (this._isLoaded) {
                    var defaultRect = [rectangle.x, rectangle.y, rectangle.x + rectangle.width, rectangle.y + rectangle.height];
                    var rect = this._setAppearance ? (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this) : defaultRect;
                    this._dictionary.update('Rect', rect);
                }
            }
        }
        return template;
    };
    PdfTextMarkupAnnotation.prototype._drawSquiggly = function (width, height) {
        if (Math.floor(width) % 2 !== 0 || Math.round(width) > width) {
            width = Math.floor(width) + 1;
        }
        var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        var pathPoints = new Array();
        var pathPointsCount = Math.ceil((width / height) * 16);
        var length = width / (pathPointsCount / 2);
        var location = parseFloat(((length + length) * 0.6).toFixed(2));
        var zigZag = location;
        var x = 0;
        for (var i = 0; i < pathPointsCount; i++) {
            var y = ((height - location) + zigZag) - (height * 0.02);
            var temp = [x, parseFloat(y.toFixed(2))];
            pathPoints.push(temp);
            if (zigZag === 0) {
                zigZag = location;
            }
            else {
                zigZag = 0;
            }
            x = x + length;
        }
        path._addLines(pathPoints);
        return path;
    };
    PdfTextMarkupAnnotation.prototype._setQuadPoints = function (pageSize) {
        var textQuadLocation = [];
        var pageHeight = pageSize[1];
        var margins;
        if (this._page && this._page._isNew && this._page._pageSettings && this._page._pageSettings.margins) {
            var margin = this._page._pageSettings.margins;
            margins = { left: margin.left, top: margin.top, right: margin.right, bottom: margin.bottom };
        }
        else {
            margins = { left: 0, top: 0, right: 0, bottom: 0 };
        }
        if (this.bounds.x !== 0 && this.bounds.y !== 0 && this.bounds.width !== 0 && this.bounds.height !== 0) {
            this._boundsCollection[0] = [this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height];
        }
        var noofRect = this._quadPoints.length / 8;
        var cropOrMediaBox = this._getMediaOrCropBox(this._page);
        var isContainscropOrMediaBox = false;
        if (!this._isLoaded && cropOrMediaBox && cropOrMediaBox.length > 3 && !this.flatten) {
            var cropOrMediaBoxX = cropOrMediaBox[0];
            var cropOrMediaBoxY = cropOrMediaBox[1];
            if (cropOrMediaBoxX !== 0 || cropOrMediaBoxY !== 0) {
                for (var i = 0; i < noofRect; i++) {
                    var locationX = this._boundsCollection[i][0] + margins.left + cropOrMediaBoxX;
                    var locationY = cropOrMediaBoxY + margins.top;
                    textQuadLocation[0 + (i * 8)] = locationX + margins.left;
                    textQuadLocation[1 + (i * 8)] = (pageHeight - (-locationY)) - margins.top -
                        this._boundsCollection[i][1];
                    textQuadLocation[2 + (i * 8)] = (locationX + this._boundsCollection[i][2]) +
                        margins.left;
                    textQuadLocation[3 + (i * 8)] = (pageHeight - (-locationY)) - margins.top -
                        this._boundsCollection[i][1];
                    textQuadLocation[4 + (i * 8)] = locationX + margins.left;
                    textQuadLocation[5 + (i * 8)] = (textQuadLocation[1 + (i * 8)] -
                        this._boundsCollection[i][3]);
                    textQuadLocation[6 + (i * 8)] = (locationX + this._boundsCollection[i][2]) +
                        margins.left;
                    textQuadLocation[7 + (i * 8)] = textQuadLocation[5 + (i * 8)];
                }
                isContainscropOrMediaBox = true;
            }
        }
        if (!isContainscropOrMediaBox) {
            for (var i = 0; i < noofRect; i++) {
                var locationX = this._boundsCollection[i][0];
                var locationY = this._boundsCollection[i][1];
                textQuadLocation[0 + (i * 8)] = locationX + margins.left;
                textQuadLocation[1 + (i * 8)] = (pageHeight - locationY) - margins.top;
                textQuadLocation[2 + (i * 8)] = (locationX + this._boundsCollection[i][2]) + margins.left;
                textQuadLocation[3 + (i * 8)] = (pageHeight - locationY) - margins.top;
                textQuadLocation[4 + (i * 8)] = locationX + margins.left;
                textQuadLocation[5 + (i * 8)] = (textQuadLocation[1 + (i * 8)] -
                    this._boundsCollection[i][3]);
                textQuadLocation[6 + (i * 8)] = (locationX + this._boundsCollection[i][2]) + margins.left;
                textQuadLocation[7 + (i * 8)] = textQuadLocation[5 + (i * 8)];
            }
        }
        this._points = textQuadLocation;
        this._dictionary.set('QuadPoints', this._points);
    };
    return PdfTextMarkupAnnotation;
}(PdfComment));

/**
 * `PdfWatermarkAnnotation` class represents the watermark annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new water mark annotation
 * const annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('Water Mark', 50, 100, 100, 50);
 * // Set the color of the annotation
 * annotation.color = [0, 0, 0];
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfWatermarkAnnotation = /** @class */ (function (_super) {
    __extends(PdfWatermarkAnnotation, _super);
    function PdfWatermarkAnnotation(text, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._watermarkText = '';
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Watermark'));
        if (typeof text !== 'undefined') {
            _this._watermarkText = text;
            _this.text = text;
        }
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.watermarkAnnotation;
        return _this;
    }
    PdfWatermarkAnnotation._load = function (page, dictionary) {
        var annot = new PdfWatermarkAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfWatermarkAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfWatermarkAnnotation.prototype._postProcess = function () {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (typeof this.color === 'undefined') {
            this.color = [0, 0, 0];
        }
        this._appearanceTemplate = this._createWatermarkAppearance();
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
        if (typeof this.opacity !== 'undefined' && this._opacity !== 1.0) {
            this._dictionary.set('CA', this._opacity);
        }
    };
    PdfWatermarkAnnotation.prototype._createWatermarkAppearance = function () {
        var font = this._obtainFont();
        if ((typeof font === 'undefined' || font === null) || ((!this._isLoaded || (this._page && this._page._isDuplicate)) && font.size === 1)) {
            font = this._lineCaptionFont;
            this._pdfFont = font;
        }
        this._rotateAngle = this._getRotationAngle();
        if (typeof this.rotationAngle !== 'undefined' && this._rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 || this._rotateAngle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0) {
            if (this._rotateAngle === 0) {
                this._rotateAngle = this.rotationAngle * 90;
            }
            this.bounds = this._getRotatedBounds(this.bounds, this._rotateAngle);
        }
        var nativeRectangle = [0, 0, this.bounds.width, this.bounds.height];
        var appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v({ x: 0, y: 0, width: this.bounds.width, height: this.bounds.height }, this);
        appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        var template = appearance.normal;
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._rotateAngle);
        var graphics = appearance.normal.graphics;
        var width = this.border.width / 2;
        var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.top);
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.color, width);
        var backBrush;
        if (this.innerColor) {
            backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._innerColor);
        }
        if (this._isLoaded) {
            if (this._dictionary.has('Contents')) {
                this._watermarkText = this._dictionary.get('Contents');
            }
            this._dictionary.update('Contents', this._watermarkText);
        }
        else {
            this._dictionary.update('Contents', this._watermarkText);
        }
        if (typeof this._watermarkText !== 'undefined') {
            graphics.drawString(this._watermarkText, font, [0, 0, 0, 0], borderPen, backBrush, format);
        }
        if (this._dictionary.has('AP')) {
            var dictionary_1 = this._dictionary.get('AP'); // eslint-disable-line
            if (dictionary_1 && dictionary_1 instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(dictionary_1, this._crossReference, 'N');
            }
        }
        var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        graphics._template._content.dictionary._updated = true;
        var reference = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(reference, graphics._template._content);
        graphics._template._content.reference = reference;
        dictionary.set('N', reference);
        dictionary._updated = true;
        this._dictionary.set('AP', dictionary);
        return template;
    };
    PdfWatermarkAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (!isFlatten) {
                this._appearanceTemplate = this._createWatermarkAppearance();
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    if (appearanceStream) {
                        var reference = dictionary.getRaw('N');
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess();
            if (!this._appearanceTemplate) {
                if (isFlatten) {
                    if (!this._dictionary.has('AP')) {
                        this._appearanceTemplate = this._createWatermarkAppearance();
                    }
                    else {
                        var dictionary = this._dictionary.get('AP');
                        if (dictionary && dictionary.has('N')) {
                            var appearanceStream = dictionary.get('N');
                            if (appearanceStream) {
                                var reference = dictionary.getRaw('N');
                                if (reference) {
                                    appearanceStream.reference = reference;
                                }
                                this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                            }
                        }
                    }
                }
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                if (box) {
                    this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
            }
            this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
    };
    return PdfWatermarkAnnotation;
}(PdfAnnotation));

/**
 * `PdfRubberStampAnnotation` class represents the rubber stamp annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new rubber stamp annotation
 * const annotation: PdfRubberStampAnnotation = new PdfRubberStampAnnotation (50, 100, 100, 50);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfRubberStampAnnotation = /** @class */ (function (_super) {
    __extends(PdfRubberStampAnnotation, _super);
    function PdfRubberStampAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._icon = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.draft;
        _this._stampWidth = 0;
        _this._iconString = '';
        _this.rotateAngle = 0;
        _this._alterRotateBounds = true;
        _this._stampAppearanceFont = new _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p(_fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontFamily */ .Qr.helvetica, 20, _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.italic | _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold);
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Stamp'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.rubberStampAnnotation;
        return _this;
    }
    Object.defineProperty(PdfRubberStampAnnotation.prototype, "icon", {
        /**
         * Gets the icon type of the rubber stamp annotation.
         *
         * @returns {PdfRubberStampAnnotationIcon} Annotation icon.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRubberStampAnnotation = page.annotations.at(0) as PdfRubberStampAnnotation;
         * // Gets the icon type of the rubber stamp annotation.
         * let icon: PdfRubberStampAnnotationIcon = annotation.icon;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Name')) {
                this._icon = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapRubberStampIcon */ .wT)(this._dictionary.get('Name').name);
            }
            return this._icon;
        },
        /**
         * Sets the icon type of the rubber stamp annotation.
         *
         * @param {PdfRubberStampAnnotationIcon} value Annotation icon.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRubberStampAnnotation = page.annotations.at(0) as PdfRubberStampAnnotation;
         * // Sets the icon type of the rubber stamp annotation.
         * annotation.icon = PdfRubberStampAnnotationIcon.completed;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._icon = value;
                this._dictionary.update('Name', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('#' + this._obtainIconName(this._icon)));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRubberStampAnnotation.prototype, "appearance", {
        /**
         * Get the appearance of the rubber stamp annotation. (Read only)
         *
         * @returns {PdfAppearance} Returns the appearance of the annotation.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Create a new rubber stamp annotation
         * const annotation: PdfRubberStampAnnotation = new PdfRubberStampAnnotation(50, 100, 100, 50);
         * // Get the appearance of the annotation
         * let appearance: PdfAppearance = annotation.appearance;
         * // Access the normal template of the appearance
         * let template: PdfTemplate = appearance.normal;
         * // Create new image object by using JPEG image data as Base64 string format
         * let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
         * // Draw the image as the custom appearance for the annotation
         * template.graphics.drawImage(image, 0, 0, 100, 50);
         * // Add annotation to the page
         * page.annotations.add(annotation);
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded) {
                return null;
            }
            if (typeof this._appearance === 'undefined') {
                var nativeRectangle = { x: 0, y: 0, width: this.bounds.width, height: this.bounds.height };
                this._appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v(nativeRectangle, this);
                this._appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
            }
            return this._appearance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create an appearance template for a rubber stamp annotation.
     *
     * @returns {PdfTemplate} Returns the appearance template of the annotation.
     * ```typescript
     * // Load an existing PDF document
     * let document: PdfDocument = new PdfDocument(data, password);
     * // Get the first page
     * let page: PdfPage = document.getPage(0) as PdfPage;
     * // Get the first annotation of the page
     * let annotation: PdfRubberStampAnnotation = page.annotations.at(0) as PdfRubberStampAnnotation;
     * // Gets the appearance template of the annotation.
     * let template: PdfTemplate = annotation.createTemplate();
     * // Save the document
     * document.save('output.pdf');
     * // Destroy the document
     * document.destroy();
     * ```
     */
    PdfRubberStampAnnotation.prototype.createTemplate = function () {
        var template;
        if (this._isLoaded) {
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    if (appearanceStream) {
                        template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T();
                        template._isExported = true;
                        var templateDictionary = appearanceStream.dictionary;
                        var matrix = templateDictionary.getArray('Matrix');
                        var bounds = templateDictionary.getArray('BBox');
                        if (matrix) {
                            var mMatrix = [];
                            for (var i = 0; i < matrix.length; i++) {
                                var value = matrix[i];
                                mMatrix[i] = value;
                            }
                            if (bounds && bounds.length > 3) {
                                var rect = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._toRectangle */ .U$)(bounds);
                                var rectangle = this._transformBBox(rect, mMatrix);
                                template._size = [rectangle[2], rectangle[3]];
                                template._templateOriginalSize = [rect.width, rect.height];
                            }
                        }
                        else if (bounds) {
                            templateDictionary.update('Matrix', [1, 0, 0, 1, -bounds[0], -bounds[1]]);
                            template._size = [bounds[2], bounds[3]];
                        }
                        template._exportStream(dictionary, this._crossReference);
                    }
                }
            }
            else {
                template = this._createRubberStampAppearance();
            }
        }
        return template;
    };
    Object.defineProperty(PdfRubberStampAnnotation.prototype, "_innerTemplateBounds", {
        get: function () {
            var innerBounds;
            if (this._isLoaded) {
                innerBounds = this._obtainInnerBounds();
                innerBounds.x = this.bounds.x;
                innerBounds.y = this.bounds.y;
            }
            return innerBounds;
        },
        enumerable: true,
        configurable: true
    });
    PdfRubberStampAnnotation._load = function (page, dictionary) {
        var annot = new PdfRubberStampAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfRubberStampAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfRubberStampAnnotation.prototype._postProcess = function () {
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (!this._dictionary.has('C')) {
            this._isTransparentColor = true;
        }
        if (this._dictionary.has('AP') && this._isLoaded && !this._isRotated) {
            this._parseStampAppearance();
        }
        else {
            this._appearanceTemplate = this._createRubberStampAppearance();
        }
    };
    PdfRubberStampAnnotation.prototype._transformBBox = function (bBoxValue, matrix) {
        var xCoordinate = [];
        var yCoordinate = [];
        var point1 = this._transformPoint(bBoxValue.x, bBoxValue.y + bBoxValue.height, matrix);
        xCoordinate[0] = point1[0];
        yCoordinate[0] = point1[1];
        var point2 = this._transformPoint(bBoxValue.x + bBoxValue.width, bBoxValue.y, matrix);
        xCoordinate[1] = point2[0];
        yCoordinate[1] = point2[1];
        var point3 = this._transformPoint(bBoxValue.x, bBoxValue.y, matrix);
        xCoordinate[2] = point3[0];
        yCoordinate[2] = point3[1];
        var point4 = this._transformPoint(bBoxValue.x + bBoxValue.width, bBoxValue.y + bBoxValue.height, matrix);
        xCoordinate[3] = point4[0];
        yCoordinate[3] = point4[1];
        var rect = [this._minValue(xCoordinate), this._minValue(yCoordinate),
            this._maxValue(xCoordinate), this._maxValue(yCoordinate)];
        return rect;
    };
    PdfRubberStampAnnotation.prototype._transformPoint = function (x, y, matrix) {
        var point = [];
        point[0] = x * matrix[0] + y * matrix[2] + matrix[4];
        point[1] = x * matrix[1] + y * matrix[3] + matrix[5];
        return point;
    };
    PdfRubberStampAnnotation.prototype._minValue = function (values) {
        var minimum = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] < minimum) {
                minimum = values[i];
            }
        }
        return minimum;
    };
    PdfRubberStampAnnotation.prototype._maxValue = function (values) {
        var maximum = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] > maximum) {
                maximum = values[i];
            }
        }
        return maximum;
    };
    PdfRubberStampAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        var isTransformBBox = false;
        if (this._isLoaded && (this._setAppearance || isFlatten || this._isExport)) {
            if ((!isFlatten && !this._isExport) || this._setAppearance || this._isRotated) {
                this._appearanceTemplate = this._createRubberStampAppearance();
            }
            if (!this._appearanceTemplate && (this._isExport || isFlatten) && this._dictionary.has('AP')) {
                isTransformBBox = this._parseStampAppearance();
            }
        }
        else {
            if (!(this._isImported && this._dictionary.has('AP'))) {
                this._postProcess();
            }
            if ((!this._appearanceTemplate) && (isFlatten || this._isImported)) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createRubberStampAppearance();
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        if (appearanceStream) {
                            var reference = dictionary.getRaw('N');
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                if (box) {
                    this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
            }
            if (isTransformBBox) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isTransformBBox);
            }
            else {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
    };
    PdfRubberStampAnnotation.prototype._parseStampAppearance = function () {
        var isTransformBBox = false;
        var dictionary = this._dictionary.get('AP');
        if (dictionary && dictionary.has('N')) {
            var appearanceStream = dictionary.get('N');
            if (appearanceStream) {
                var reference = dictionary.getRaw('N');
                if (reference) {
                    appearanceStream.reference = reference;
                }
                var isStamp = false;
                if (this._type === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.rubberStampAnnotation) {
                    var isRotated = false;
                    var size = void 0;
                    var rect = void 0;
                    if (appearanceStream) {
                        isRotated = (this._page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 &&
                            this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0);
                        if (!isRotated) {
                            isRotated = (this._page.rotation !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 &&
                                this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0);
                        }
                    }
                    this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    isStamp = true;
                    isTransformBBox = isRotated ? true : false;
                    if (isTransformBBox && appearanceStream instanceof _base_stream__WEBPACK_IMPORTED_MODULE_9__/* ._PdfBaseStream */ .dS) {
                        var matrix = appearanceStream.dictionary.getArray('Matrix');
                        if (matrix) {
                            var mMatrix = matrix.slice();
                            var bounds = appearanceStream.dictionary.getArray('BBox');
                            if (bounds && bounds.length > 3) {
                                rect = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._toRectangle */ .U$)(bounds);
                                var rectangle = this._transformBBox(rect, mMatrix);
                                size = [rectangle[2], rectangle[3]];
                                this._appearanceTemplate._size = size;
                            }
                            else {
                                size = [rect.width, rect.height];
                            }
                        }
                    }
                    else if (rect) {
                        size = [rect.width, rect.height];
                    }
                }
                if (!isStamp) {
                    this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                }
            }
        }
        return isTransformBBox;
    };
    PdfRubberStampAnnotation.prototype._createRubberStampAppearance = function () {
        var nativeRectangle = { x: 0, y: 0, width: this.bounds.width, height: this.bounds.height };
        var appearance;
        if (this._appearance) {
            appearance = this._appearance;
            if (!this._dictionary.has('Name')) {
                this._dictionary.update('Name', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('#23CustomStamp'));
            }
        }
        else {
            this._iconString = this._obtainIconName(this.icon);
            this._dictionary.update('Name', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('#23' + this._iconString));
            appearance = new _pdf_appearance__WEBPACK_IMPORTED_MODULE_10__/* .PdfAppearance */ .v(nativeRectangle, this);
            appearance.normal = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        }
        var template = appearance.normal;
        if (this._alterRotateBounds && typeof this._rotate !== 'undefined' && (this._rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0 || this._getRotationAngle() !== 0)) {
            this.rotateAngle = this._getRotationAngle();
            if (this.rotateAngle === 0) {
                this.rotateAngle = this.rotationAngle * 90;
            }
            this.bounds = this._getRotatedBounds(this.bounds, this.rotate);
        }
        else {
            this.rotateAngle = this._getRotationAngle();
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this.rotate, this);
        if (!this._appearance) {
            this._drawStampAppearance(template);
        }
        if (this._dictionary.has('AP')) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(this._dictionary.get('AP'), this._crossReference, 'N');
        }
        var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        template._content.dictionary._updated = true;
        var reference = this._crossReference._getNextReference();
        this._crossReference._cacheMap.set(reference, template._content);
        template._content.reference = reference;
        dictionary.set('N', reference);
        dictionary._updated = true;
        this._dictionary.set('AP', dictionary);
        this._dictionary.set('Border', [this.border.hRadius, this.border.vRadius, this.border.width]);
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
        return template;
    };
    PdfRubberStampAnnotation.prototype._drawStampAppearance = function (template) {
        var stringFormat = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p();
        stringFormat.alignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center;
        stringFormat.lineAlignment = _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle;
        var backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._obtainBackGroundColor());
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this._obtainBorderColor(), this.border.width);
        var graphics = template.graphics;
        graphics.save();
        graphics.scaleTransform(template._size[0] / (this._stampWidth + 4), (template._size[1] / 28));
        var rubberFont = this._stampAppearanceFont;
        if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
            graphics.setTransparency(this._opacity);
        }
        this._drawRubberStamp(graphics, borderPen, backBrush, rubberFont, stringFormat);
        graphics.restore();
    };
    PdfRubberStampAnnotation.prototype._obtainIconName = function (icon) {
        switch (icon) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.approved:
                this._iconString = 'Approved';
                this._stampWidth = 126;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.asIs:
                this._iconString = 'AsIs';
                this._stampWidth = 75;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.confidential:
                this._iconString = 'Confidential';
                this._stampWidth = 166;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.departmental:
                this._iconString = 'Departmental';
                this._stampWidth = 186;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.draft:
                this._iconString = 'Draft';
                this._stampWidth = 90;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.experimental:
                this._iconString = 'Experimental';
                this._stampWidth = 176;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.expired:
                this._iconString = 'Expired';
                this._stampWidth = 116;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.final:
                this._iconString = 'Final';
                this._stampWidth = 90;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.forComment:
                this._iconString = 'ForComment';
                this._stampWidth = 166;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.forPublicRelease:
                this._iconString = 'ForPublicRelease';
                this._stampWidth = 240;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.notApproved:
                this._iconString = 'NotApproved';
                this._stampWidth = 186;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.notForPublicRelease:
                this._iconString = 'NotForPublicRelease';
                this._stampWidth = 290;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.sold:
                this._iconString = 'Sold';
                this._stampWidth = 75;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.topSecret:
                this._iconString = 'TopSecret';
                this._stampWidth = 146;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.completed:
                this._iconString = 'Completed';
                this._stampWidth = 136;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.void:
                this._iconString = 'Void';
                this._stampWidth = 75;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.informationOnly:
                this._iconString = 'InformationOnly';
                this._stampWidth = 230;
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.preliminaryResults:
                this._iconString = 'PreliminaryResults';
                this._stampWidth = 260;
                break;
        }
        return this._iconString;
    };
    PdfRubberStampAnnotation.prototype._obtainBackGroundColor = function () {
        var color = [];
        var red;
        var green;
        var blue;
        if (this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.notApproved ||
            this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.void) {
            red = 251;
            green = 222;
            blue = 221;
            color = [red, green, blue];
        }
        else if (this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.approved ||
            this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.final ||
            this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.completed) {
            red = 229;
            green = 238;
            blue = 222;
            color = [red, green, blue];
        }
        else {
            red = 219;
            green = 227;
            blue = 240;
            color = [red, green, blue];
        }
        return color;
    };
    PdfRubberStampAnnotation.prototype._obtainBorderColor = function () {
        var color = [];
        var red;
        var green;
        var blue;
        if (this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.notApproved ||
            this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.void) {
            red = 151;
            green = 23;
            blue = 15;
            color = [red, green, blue];
        }
        else if (this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.approved ||
            this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.final ||
            this._icon === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRubberStampAnnotationIcon */ .kE.completed) {
            red = 73;
            green = 110;
            blue = 38;
            color = [red, green, blue];
        }
        else {
            red = 24;
            green = 37;
            blue = 100;
            color = [red, green, blue];
        }
        return color;
    };
    PdfRubberStampAnnotation.prototype._drawRubberStamp = function (graphics, pen, brush, font, format) {
        graphics.drawRoundedRectangle(2, 1, this._stampWidth, 26, 3, pen, brush);
        var pdfBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._obtainBorderColor());
        graphics.drawString(this._iconString.toUpperCase(), font, [(this._stampWidth / 2) + 1, 15, 0, 0], null, pdfBrush, format);
    };
    PdfRubberStampAnnotation.prototype._obtainInnerBounds = function () {
        var bounds = { x: 0, y: 0, width: 0, height: 0 };
        if (this._dictionary && this._dictionary.has('AP')) {
            var appearanceDictionary = this._dictionary.get('AP');
            if (appearanceDictionary && appearanceDictionary.has('N')) {
                var normalAppearance = appearanceDictionary.get('N');
                if (normalAppearance && typeof normalAppearance.dictionary !== 'undefined') {
                    var normalAppearanceDictionary = normalAppearance.dictionary;
                    if (normalAppearanceDictionary.has('BBox')) {
                        var values = normalAppearanceDictionary.getArray('BBox');
                        if (values && values.length === 4) {
                            bounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._toRectangle */ .U$)(values);
                        }
                    }
                }
            }
        }
        return bounds;
    };
    return PdfRubberStampAnnotation;
}(PdfComment));

/**
 * `PdfSoundAnnotation` class represents the sound annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Access first page
 * let page: PdfPage = document.getPage(0);
 * // Access the annotation at index 0
 * let annotation: PdfSoundAnnotation = page.annotations.at(0) as PdfSoundAnnotation;
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfSoundAnnotation = /** @class */ (function (_super) {
    __extends(PdfSoundAnnotation, _super);
    /**
     * Initializes a new instance of the `PdfSoundAnnotation` class.
     *
     * @private
     */
    function PdfSoundAnnotation() {
        var _this = _super.call(this) || this;
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.soundAnnotation;
        return _this;
    }
    PdfSoundAnnotation._load = function (page, dictionary) {
        var annot = new PdfSoundAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfSoundAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfSoundAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return PdfSoundAnnotation;
}(PdfComment));

/**
 * `PdfFreeTextAnnotation` class represents the free text annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new free text annotation
 * const annotation: PdfFreeTextAnnotation = new PdfFreeTextAnnotation(50, 100, 100, 50);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfFreeTextAnnotation = /** @class */ (function (_super) {
    __extends(PdfFreeTextAnnotation, _super);
    function PdfFreeTextAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._intentString = '';
        _this._markUpFont = new _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p(_fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontFamily */ .Qr.helvetica, 7, _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular);
        _this._textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
        _this._cropBoxValueX = 0;
        _this._cropBoxValueY = 0;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('FreeText'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._isContentUpdated = false;
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.freeTextAnnotation;
        _this._parsedXMLData = [];
        return _this;
    }
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "calloutLines", {
        /**
         * Gets the callout lines of the free text annotation.
         *
         * @returns {Array<number[]>} Callout lines.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation= page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the callout lines of the free text annotation.
         * let calloutLines: Array<number[]> = annotation.calloutLines;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._calloutLines === 'undefined') {
                this._calloutLines = this._getCalloutLinePoints();
            }
            return this._calloutLines;
        },
        /**
         * Sets the callout lines of the free text annotation.
         *
         * @param {Array<number[]>} value Callout lines.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the callout lines of the free text annotation.
         * annotation.calloutLines = [[100, 450], [100, 200], [100, 150]];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (!this._isLoaded) {
                this._calloutLines = value;
            }
            var isChanged = false;
            if (this._isLoaded && value.length >= 2) {
                if (this._calloutLines.length === value.length) {
                    for (var i = 0; i < value.length; i++) {
                        var values = value[i];
                        for (var j = 0; j < values.length; j++) {
                            if (value[i][j] !==
                                this._calloutLines[i][j]) {
                                isChanged = true;
                                break;
                            }
                        }
                    }
                }
                else {
                    isChanged = true;
                }
            }
            if (isChanged) {
                var pageHeight = this._page.size[1];
                var lines = [];
                for (var i = 0; i < value.length; i++) {
                    if (i < value.length) {
                        lines.push(value[i][0] + this._cropBoxValueX);
                        lines.push((pageHeight + this._cropBoxValueY) - value[i][1]);
                    }
                    else {
                        break;
                    }
                }
                this._calloutLines = value;
                this._dictionary.update('CL', lines);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "lineEndingStyle", {
        /**
         * Gets the line ending style of the annotation.
         *
         * @returns {PdfLineEndingStyle} Line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the Line ending style of the annotation.
         * let lineEndingStyle: PdfLineEndingStyle = annotation.lineEndingStyle;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded) {
                this._lineEndingStyle = this._obtainLineEndingStyle();
            }
            else if (typeof this._lineEndingStyle === 'undefined') {
                this._lineEndingStyle = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none;
            }
            return this._lineEndingStyle;
        },
        /**
         * Sets the line ending style of the line annotation.
         *
         * @param {PdfLineEndingStyle} value Line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the line ending style of the line annotation.
         * annotation.lineEndingStyle = PdfLineEndingStyle.closedArrow;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._dictionary.update('LE', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(value)));
            }
            this._lineEndingStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "textMarkUpColor", {
        /**
         * Gets the text markup color of the annotation.
         *
         * @returns {number[]} Text markup color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the text markup color of the annotation.
         * let textMarkUpColor: number[] = annotation.textMarkUpColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._textMarkUpColor === 'undefined') {
                var color = void 0;
                if (this._dictionary.has('TextColor')) {
                    this._textMarkUpColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(this._dictionary.getArray('TextColor'));
                    return this._textMarkUpColor;
                }
                if (this._dictionary.has('DS')) {
                    var collections = this._dictionary.get('DS').split(';');
                    for (var i = 0; i < collections.length; i++) {
                        if (collections[i].indexOf('color') !== -1) {
                            color = collections[i].split(':')[1];
                            if (color.startsWith('#')) {
                                color = color.substring(1);
                            }
                            this._textMarkUpColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._convertToColor */ .JH)(color);
                            return this._textMarkUpColor;
                        }
                    }
                }
                if (!this._textMarkUpColor && this._dictionary.has('RC')) {
                    var rcBrush = void 0;
                    var rcColor = [];
                    if (this._parsedXMLData.length > 0 && this._parsedXMLData[3]) {
                        rcBrush = this._parsedXMLData[3];
                        rcColor = rcBrush._color;
                        this._textMarkUpColor = rcColor;
                    }
                }
            }
            return this._textMarkUpColor;
        },
        /**
         * Sets the text markup color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the text markup color of the annotation.
         * annotation.textMarkUpColor = [200, 200, 200];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                this._textMarkUpColor = value;
                this._updateStyle(this.font, value, this.textAlignment);
            }
            this._isContentUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "textAlignment", {
        /**
         * Gets the text alignment of the annotation.
         *
         * @returns {PdfTextAlignment} Text alignment.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the text alignment of the annotation.
         * let textAlignment: PdfTextAlignment = annotation.textAlignment;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Q')) {
                this._textAlignment = this._dictionary.get('Q');
            }
            else if (this._dictionary.has('RC')) {
                var rcAlignment = void 0;
                if (this._parsedXMLData.length > 0 && this._parsedXMLData[1]) {
                    rcAlignment = this._parsedXMLData[1];
                    this._textAlignment = rcAlignment;
                }
            }
            return this._textAlignment;
        },
        /**
         * Sets the text alignment of the annotation.
         *
         * @param {PdfTextAlignment} value Text alignment.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the text alignment of the annotation.
         * annotation.textAlignment = PdfTextAlignment.justify;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._textAlignment !== value) {
                this._dictionary.update('Q', value);
            }
            this._textAlignment = value;
            this._isContentUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "font", {
        /**
         * Gets the font of the annotation.
         *
         * @returns {PdfFont} font.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the font of the annotation.
         * let font: PdfFont = annotation.font;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (!this._font) {
                this._font = this._obtainFont();
                if ((this._font === null || typeof this._font === 'undefined') || (!this._isLoaded && this._font.size === 1)) {
                    this._font = this._markUpFont;
                }
            }
            return this._font;
        },
        /**
         * Sets the font of the annotation.
         *
         * @param {PdfFont} value font.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the font of the annotation.
         * annotation.font = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._font = value;
            this._isContentUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "borderColor", {
        /**
         * Gets the border color of the annotation.
         *
         * @returns {number[]} R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the border color of the annotation.
         * let borderColor: number[] = annotation.borderColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._borderColor === 'undefined' && this._dictionary.has('DA')) {
                this._borderColor = this._obtainColor();
            }
            return this._borderColor;
        },
        /**
         * Sets the border color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the border color of the annotation.
         * annotation.borderColor = [150, 150, 150];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                this._borderColor = value;
                this._dictionary.update('DA', this._getBorderColorString(this.borderColor));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "annotationIntent", {
        /**
         * Gets the intent of the annotation.
         *
         * @returns {PdfAnnotationIntent} Annotation intent.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Gets the intent of the annotation.
         * let annotationIntent: PdfAnnotationIntent = annotation.annotationIntent;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._annotationIntent === 'undefined' || this._annotationIntent === null) {
                if (this._dictionary.has('IT')) {
                    this._annotationIntent = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapAnnotationIntent */ .rC)(this._dictionary.get('IT').name);
                }
                else {
                    this._annotationIntent = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.none;
                }
            }
            return this._annotationIntent;
        },
        /**
         * Sets the intent of the annotation.
         *
         * @param {PdfAnnotationIntent} value Annotation intent.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfFreeTextAnnotation = page.annotations.at(0) as PdfFreeTextAnnotation;
         * // Sets the intent of the annotation.
         * annotation.annotationIntent = PdfAnnotationIntent.freeTextTypeWriter;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._annotationIntent = value;
                if ((typeof this.subject === 'undefined' || this.subject === 'null')
                    && value === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.none &&
                    (!this._calloutLines || (this._calloutLines && this._calloutLines.length === 0))) {
                    this._dictionary.update('Subj', 'Text Box');
                }
                else {
                    this._dictionary.update('IT', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(this._obtainAnnotationIntent(this._annotationIntent)));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "_mkDictionary", {
        get: function () {
            var value;
            if (this._dictionary.has('MK')) {
                value = this._dictionary.get('MK');
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfFreeTextAnnotation.prototype, "_innerBounds", {
        get: function () {
            var borderWidth = this.border.width / 2;
            var nativeRectangle = this._obtainAppearanceBounds();
            var parameter = new _PaintParameter();
            var borderColor = this._obtainColor();
            var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(borderColor, this.border.width);
            if (this.border.width > 0) {
                parameter.borderPen = borderPen;
            }
            var rectangle = this._obtainStyle(borderPen, nativeRectangle, borderWidth, parameter);
            if (this.calloutLines && this._calloutLines.length > 0) {
                this._innerTextBoxBounds = { x: rectangle[0], y: this._page.size[1] - (rectangle[1] + rectangle[3]),
                    width: rectangle[2], height: rectangle[3] };
            }
            return this._innerTextBoxBounds;
        },
        enumerable: true,
        configurable: true
    });
    PdfFreeTextAnnotation._load = function (page, dictionary) {
        var annot = new PdfFreeTextAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        if (dictionary.has('RC')) {
            annot._parsedXMLData = annot._parseMarkupLanguageData(dictionary.get('RC'));
        }
        return annot;
    };
    PdfFreeTextAnnotation.prototype._setPaddings = function (paddings) {
        this._paddings = paddings;
    };
    PdfFreeTextAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfFreeTextAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (!this._dictionary.has('C')) {
            this._isTransparentColor = true;
        }
        var cropOrMediaBox = this._getCropOrMediaBox();
        if (cropOrMediaBox && cropOrMediaBox.length > 3 && typeof cropOrMediaBox[0] === 'number' && typeof cropOrMediaBox[1] === 'number' && (cropOrMediaBox[0] !== 0 || cropOrMediaBox[1] !== 0)) {
            this._cropBoxValueX = cropOrMediaBox[0];
            this._cropBoxValueY = cropOrMediaBox[1];
        }
        if (isFlatten || this._setAppearance) {
            this._appearanceTemplate = this._createAppearance();
        }
        if (!isFlatten) {
            this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
            this._saveFreeTextDictionary();
        }
    };
    PdfFreeTextAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (this._isLoaded) {
            if (this._setAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                this._appearanceTemplate = this._createAppearance();
            }
            if (!this._appearanceTemplate && isFlatten && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    var appearanceStream = dictionary.get('N');
                    if (appearanceStream) {
                        var reference = dictionary.getRaw('N');
                        if (reference) {
                            appearanceStream.reference = reference;
                        }
                        this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    }
                }
            }
        }
        else {
            this._postProcess(isFlatten);
            if (!this._appearanceTemplate && isFlatten) {
                if (!this._dictionary.has('AP')) {
                    this._appearanceTemplate = this._createAppearance();
                }
                else {
                    var dictionary = this._dictionary.get('AP');
                    if (dictionary && dictionary.has('N')) {
                        var appearanceStream = dictionary.get('N');
                        if (appearanceStream) {
                            var reference = dictionary.getRaw('N');
                            if (reference) {
                                appearanceStream.reference = reference;
                            }
                            this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                        }
                    }
                }
            }
        }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            if (this._isLoaded) {
                this._flattenLoadedPopUp();
            }
            else {
                this._flattenPopUp();
            }
        }
        if (isFlatten && this._appearanceTemplate) {
            var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
            if (!this._appearanceTemplate._content.dictionary.has('Matrix') && !this._isLoaded) {
                var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                if (box) {
                    this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                }
            }
            if (isNormalMatrix && typeof this._page.rotation !== 'undefined' && this._page.rotation !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else if (this._appearanceTemplate && !this._dictionary.has('AP')) {
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else if (this._dictionary.has('AP')) {
                if (this._isValidTemplateMatrix(this._appearanceTemplate._content.dictionary, this.bounds, this._appearanceTemplate)) {
                    this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
                }
            }
        }
        else if (isFlatten) {
            this._page.annotations.remove(this);
        }
        if (this._dictionary.has('RC') && this._isContentUpdated) {
            this._updateStyle(this.font, this._textMarkUpColor, this.textAlignment);
        }
        if (!isFlatten && this._setAppearance) {
            var appearance = void 0;
            if (this._dictionary.has('AP')) {
                appearance = this._dictionary.get('AP');
            }
            else {
                var reference_7 = this._crossReference._getNextReference();
                appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                this._crossReference._cacheMap.set(reference_7, appearance);
                this._dictionary.update('AP', reference_7);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._appearanceTemplate._content);
            appearance.update('N', reference);
        }
    };
    PdfFreeTextAnnotation.prototype._isValidTemplateMatrix = function (dictionary, bounds, appearanceTemplate) {
        var isValidMatrix = true;
        var pointF = bounds;
        if (dictionary && dictionary.has('Matrix')) {
            var box = dictionary.getArray('BBox');
            var matrix = dictionary.getArray('Matrix');
            if (matrix && box && matrix.length > 3 && box.length > 2) {
                if (typeof matrix[0] !== 'undefined' &&
                    typeof matrix[1] !== 'undefined' &&
                    typeof matrix[2] !== 'undefined' &&
                    typeof matrix[3] !== 'undefined') {
                    if (matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 1) {
                        if (typeof box[0] !== 'undefined' &&
                            typeof box[1] !== 'undefined' &&
                            typeof box[2] !== 'undefined' &&
                            typeof box[3] !== 'undefined') {
                            if (Math.round(box[0]) !== Math.round(-(matrix[4])) && Math.round(box[1]) !== Math.round(-(matrix[5])) ||
                                box[0] === 0 && Math.round(-(matrix[4])) === 0) {
                                var graphics = this._page.graphics;
                                var state = graphics.save();
                                if (typeof this.opacity !== 'undefined' && this._opacity < 1) {
                                    graphics.setTransparency(this._opacity);
                                }
                                pointF.x -= box[0];
                                pointF.y += box[1];
                                graphics.drawTemplate(appearanceTemplate, pointF);
                                graphics.restore(state);
                                this._page.annotations.remove(this);
                                isValidMatrix = false;
                            }
                        }
                    }
                }
            }
        }
        return isValidMatrix;
    };
    PdfFreeTextAnnotation.prototype._createAppearance = function () {
        var template;
        var borderWidth = this.border.width / 2;
        var nativeRectangle = this._obtainAppearanceBounds();
        var rotationAngle = this.rotate;
        if (rotationAngle === 0 || rotationAngle === 90 || rotationAngle === 180 || rotationAngle === 270) {
            this._isAllRotation = false;
        }
        if (rotationAngle > 0 && this._isAllRotation) {
            template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T([0, 0, nativeRectangle[2], nativeRectangle[3]], this._crossReference);
        }
        else {
            template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        }
        var box = template._content.dictionary.getArray('BBox');
        var angle = this._getRotationAngle();
        if (box && angle !== null && typeof angle !== 'undefined') {
            template._content.dictionary.set('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
        }
        var parameter = new _PaintParameter();
        var text = this._obtainText();
        template._writeTransformation = false;
        var graphics = template.graphics;
        var alignment = this._obtainTextAlignment();
        var borderColor = this._obtainColor();
        var borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(borderColor, this.border.width);
        if (this.border.width > 0) {
            parameter.borderPen = borderPen;
        }
        var rectangle = this._obtainStyle(borderPen, nativeRectangle, borderWidth, parameter);
        if (this.color) {
            parameter.foreBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._color);
        }
        if (this.textMarkUpColor) {
            parameter.backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this._textMarkUpColor);
        }
        parameter.borderWidth = this.border.width;
        if (this.calloutLines && this._calloutLines.length >= 2) {
            this._drawCallOuts(graphics, borderPen);
            if (this._isLoaded && typeof this._lineEndingStyle === 'undefined') {
                this._lineEndingStyle = this.lineEndingStyle;
            }
            if (this._lineEndingStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                var linePoints = this._obtainLinePoints();
                var angle_1 = this._getAngle(linePoints);
                var endPoint = this._getAxisValue([linePoints[2], linePoints[3]], 90, 0);
                this._drawLineEndStyle(endPoint, graphics, angle_1, borderPen, parameter.foreBrush, this.lineEndingStyle, this.border.width, false);
            }
            if (!this._dictionary.has('RD')) {
                rectangle = [this.bounds.x,
                    -((this._page.size[1] - (this.bounds.y + this.bounds.height))),
                    this.bounds.width,
                    -this.bounds.height];
            }
            else {
                rectangle = [rectangle[0], -rectangle[1], rectangle[2], -rectangle[3]];
            }
            rectangle[0] = rectangle[0] + this._cropBoxValueX;
            rectangle[1] = rectangle[1] - this._cropBoxValueY;
            this._calculateRectangle(rectangle);
            parameter.bounds = rectangle;
        }
        else {
            rectangle = [rectangle[0], -rectangle[1], rectangle[2], -rectangle[3]];
            parameter.bounds = rectangle;
        }
        var outerRectangle = this._obtainAppearanceBounds();
        var value = [rectangle[0] - outerRectangle[0], (-(rectangle[1])) - outerRectangle[1], rectangle[2] - outerRectangle[2],
            (((-rectangle[1]) - outerRectangle[1]) + (-rectangle[3])) - outerRectangle[3]];
        for (var i = 0; i < value.length; i++) {
            if (value[i] < 0) {
                value[i] = -value[i];
            }
        }
        this._dictionary.update('RD', value);
        if (this.opacity && this._opacity < 1) {
            graphics.save();
            graphics.setTransparency(this._opacity);
        }
        if (this.rotationAngle && this._rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0) {
            graphics.save();
        }
        this._drawFreeTextRectangle(graphics, parameter, rectangle, alignment);
        if (text) {
            this._drawFreeMarkUpText(graphics, parameter, rectangle, text, alignment);
        }
        if (this.opacity && this._opacity < 1) {
            graphics.restore();
        }
        if (this.rotationAngle && this._rotate !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle0) {
            graphics.restore();
        }
        var bounds = this._obtainAppearanceBounds();
        if (this.flatten) {
            this._bounds = { x: bounds[0], y: (this._page.size[1] - (bounds[1] + bounds[3])), width: bounds[2], height: bounds[3] };
        }
        this._dictionary.set('Rect', [bounds[0], bounds[1], bounds[0] + bounds[2], bounds[1] + bounds[3]]);
        return template;
    };
    PdfFreeTextAnnotation.prototype._calculateRectangle = function (innerRectangle) {
        var outerRectangle = this._obtainAppearanceBounds();
        var value = [innerRectangle[0] - outerRectangle[0],
            (-(innerRectangle[1])) - outerRectangle[1], innerRectangle[2] - outerRectangle[2],
            (((-innerRectangle[1]) - outerRectangle[1]) + (-innerRectangle[3])) - outerRectangle[3]];
        for (var i = 0; i < 4; i++) {
            if (value[i] < 0) {
                value[i] = -value[i];
            }
        }
        this._dictionary.set('RD', value);
    };
    PdfFreeTextAnnotation.prototype._obtainAnnotationIntent = function (_annotationIntent) {
        switch (_annotationIntent) {
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.freeTextCallout:
                this._intentString = 'FreeTextCallout';
                break;
            case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.freeTextTypeWriter:
                this._intentString = 'FreeTextTypeWriter';
                break;
        }
        return this._intentString;
    };
    PdfFreeTextAnnotation.prototype._obtainFont = function () {
        var fontData = this._obtainFontDetails();
        if (!fontData.size && this._dictionary.has('RC')) {
            var rcFont = void 0;
            if (this._parsedXMLData.length > 0 && this._parsedXMLData[0]) {
                rcFont = this._parsedXMLData[0];
            }
            if (rcFont instanceof _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfStandardFont */ .p) {
                var font = rcFont;
                fontData.size = font.size;
                fontData.style = font.style;
                fontData.name = font._fontFamily.toString();
            }
            else if (rcFont instanceof _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfCjkStandardFont */ .PB) {
                var font = rcFont;
                fontData.size = font.size;
                fontData.style = font.style;
                fontData.name = font._fontFamily.toString();
            }
        }
        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapFont */ .BM)(fontData.name, fontData.size, fontData.style, this);
    };
    PdfFreeTextAnnotation.prototype._updateStyle = function (font, color, alignment) {
        var ds = 'font:' +
            font._metrics._name +
            ' ' +
            font.size +
            'pt;style:' + (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapPdfFontStyle */ .UO)(font.style) +
            ';color:' +
            this._colorToHex(color);
        this._dictionary.update('DS', ds);
        var body = '<?xml version="1.0"?><body xmlns="http://www.w3.org/1999/xhtml" style="font:'
            + font._metrics._name + ' ' + font.size + 'pt;font-weight:'
            + (font.isBold ? 'bold' : 'normal') + ';color:' + this._colorToHex(color) + '"><p dir="ltr">';
        var textAlignment;
        var alignmentText;
        if (alignment !== null && typeof alignment !== 'undefined') {
            switch (alignment) {
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left:
                    alignmentText = 'left';
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center:
                    alignmentText = 'center';
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.right:
                    alignmentText = 'right';
                    break;
                case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.justify:
                    alignmentText = 'justify';
                    break;
            }
            if (alignmentText) {
                textAlignment = 'text-align:' + alignmentText + ';';
            }
        }
        var decorationText = '';
        var textDecoration;
        var italic = 'font-style:italic';
        var bold = 'font-style:bold';
        if (font.isUnderline) {
            decorationText = font.isStrikeout ? 'text-decoration:word line-through' : 'text-decoration:word';
            if (font.isItalic) {
                decorationText += ';' + italic;
            }
            else if (font.isBold) {
                decorationText += ';' + bold;
            }
        }
        else if (font.isStrikeout) {
            decorationText = 'text-decoration:line-through';
            if (font.isItalic) {
                decorationText += ';' + italic;
            }
            else if (font.isBold) {
                decorationText += ';' + bold;
            }
        }
        else {
            if (font.isItalic) {
                decorationText += italic;
            }
            else if (font.isBold) {
                decorationText += bold;
            }
        }
        if (decorationText !== '') {
            textDecoration = '<span style = "' + textAlignment + decorationText + '">' + (this.text ? this._getXmlFormattedString(this.text) : '') + '</span>';
        }
        else {
            textDecoration = '<span style = "' + textAlignment + '">' + (this.text ? this._getXmlFormattedString(this.text) : '') + '</span>';
        }
        this._dictionary.update('RC', body + textDecoration + '</p></body>');
    };
    PdfFreeTextAnnotation.prototype._drawFreeMarkUpText = function (graphics, parameter, rectangle, text, alignment) {
        var isRotation = false;
        var angle = this.rotate;
        if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90 && !this._isAllRotation) {
            rectangle = [-rectangle[1], rectangle[0], -rectangle[3], rectangle[2]];
        }
        else if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180 && !this._isAllRotation) {
            rectangle = [-(rectangle[2] + rectangle[0]), -rectangle[1], rectangle[2], -rectangle[3]];
        }
        else if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270 && !this._isAllRotation) {
            rectangle = [(rectangle[1] + rectangle[3]), -(rectangle[0] + rectangle[2]), -rectangle[3], rectangle[2]];
        }
        else if (angle === 0 && !this._isAllRotation) {
            rectangle = [rectangle[0], (rectangle[1] + rectangle[3]), rectangle[2], rectangle[3]];
        }
        if ((typeof this._font === 'undefined' || this._font === null) || (!this._isLoaded && this._font.size === 1)) {
            this._font = this._markUpFont;
        }
        if (angle > 0 && this._isAllRotation) {
            isRotation = true;
            var bounds_1 = this.bounds;
            var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(_enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
            var textSize = this._font.measureString(text, [0, 0], format, 0, 0);
            if (angle > 0 && angle <= 91) {
                graphics.translateTransform(textSize[1], -bounds_1.height);
            }
            else if (angle > 91 && angle <= 181) {
                graphics.translateTransform(bounds_1.width - textSize[1], -(bounds_1.height - textSize[1]));
            }
            else if (angle > 181 && angle <= 271) {
                graphics.translateTransform(bounds_1.width - textSize[1], -textSize[1]);
            }
            else if (angle > 271 && angle < 360) {
                graphics.translateTransform(textSize[1], -textSize[1]);
            }
            graphics.rotateTransform(angle);
            parameter.bounds = [0, 0, parameter.bounds[2], parameter.bounds[3]];
        }
        var bounds = [rectangle[0], rectangle[1], rectangle[2], rectangle[3]];
        if (this._paddings && !this._isLoaded) {
            var left = this._paddings._left;
            var top_3 = this._paddings._top;
            var right = this._paddings._right + this._paddings._left;
            var bottom = this._paddings._top + this._paddings._bottom;
            if (parameter.borderWidth > 0) {
                var first_3 = rectangle[0] + (parameter.borderWidth + left);
                var second_1 = rectangle[1] + (parameter.borderWidth + top_3);
                var third = rectangle[2] - ((parameter.borderWidth * 2) + right);
                var forth = void 0;
                if (rectangle[3] > 0) {
                    forth = rectangle[3] - ((parameter.borderWidth * 2) + bottom);
                }
                else {
                    forth = -rectangle[3] - ((parameter.borderWidth * 2) + bottom);
                }
                rectangle = [first_3, second_1, third, forth];
            }
            else {
                var first_4 = rectangle[0] + left;
                var second_2 = rectangle[1] + top_3;
                var third = rectangle[2] - right;
                var forth = void 0;
                if (rectangle[3] > 0) {
                    forth = rectangle[3] - bottom;
                }
                else {
                    forth = -rectangle[3] - bottom;
                }
                rectangle = [first_4, second_2, third, forth];
            }
        }
        else if (parameter.borderWidth > 0) {
            rectangle = [rectangle[0] + (parameter.borderWidth * 1.5),
                rectangle[1] + (parameter.borderWidth * 1.5),
                rectangle[2] - (parameter.borderWidth * 3),
                (rectangle[3] > 0) ? (rectangle[3] - (parameter.borderWidth * 3)) : (-rectangle[3] - (parameter.borderWidth * 3))];
        }
        var first = this._font._metrics._getHeight() > ((rectangle[3] > 0) ? rectangle[3] : -rectangle[3]);
        var second = this._font._metrics._getHeight() <= ((bounds[3] > 0) ? bounds[3] : -bounds[3]);
        var checkPaddingWithFontHeight = first && second;
        this._drawFreeTextAnnotation(graphics, parameter, text, this._font, checkPaddingWithFontHeight ? bounds : rectangle, true, alignment, isRotation);
    };
    PdfFreeTextAnnotation.prototype._drawFreeTextRectangle = function (graphics, parameter, rectangle, alignment) {
        var isRotation = false;
        if (this._dictionary.has('BE')) {
            for (var i = 0; i < rectangle.length; i++) {
                if (rectangle[i] < 0) {
                    rectangle[i] = -rectangle[i];
                }
            }
            this._drawAppearance(graphics, parameter, rectangle);
            if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90 && !this._isAllRotation) {
                graphics.rotateTransform(-90);
            }
            else if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180 && !this._isAllRotation) {
                graphics.rotateTransform(-180);
            }
            else if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270 && !this._isAllRotation) {
                graphics.rotateTransform(-270);
            }
        }
        else {
            if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90 && !this._isAllRotation) {
                graphics.rotateTransform(-90);
                parameter.bounds = [-rectangle[1], rectangle[2] + rectangle[0], -rectangle[3], -rectangle[2]];
            }
            else if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180 && !this._isAllRotation) {
                graphics.rotateTransform(-180);
                parameter.bounds = [-(rectangle[2] + rectangle[0]), -(rectangle[3] + rectangle[1]), rectangle[2], rectangle[3]];
            }
            else if (this.rotationAngle === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270 && !this._isAllRotation) {
                graphics.rotateTransform(-270);
                parameter.bounds = [rectangle[1] + rectangle[3], -rectangle[0], -rectangle[3], -rectangle[2]];
            }
            if (parameter.borderWidth > 0 && !this._isAllRotation) {
                rectangle = parameter.bounds;
            }
            this._drawFreeTextAnnotation(graphics, parameter, '', this._font, rectangle, false, alignment, isRotation);
        }
    };
    PdfFreeTextAnnotation.prototype._drawAppearance = function (graphics, parameter, rectangle) {
        var graphicsPath = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        graphicsPath.addRectangle(rectangle[0], rectangle[1], rectangle[2], rectangle[3]);
        if (this._dictionary.has('BE')) {
            var dictionary = this._dictionary.get('BE');
            if (dictionary && dictionary.has('I')) {
                var value = dictionary.get('I');
                var radius = value === 1 ? 4 : 9;
                this._drawCloudStyle(graphics, parameter.foreBrush, parameter.borderPen, radius, 0.833, graphicsPath._points, true);
            }
        }
    };
    PdfFreeTextAnnotation.prototype._drawFreeTextAnnotation = function (g, parameter, text, font, rectangle, isSkipDrawRectangle, alignment, isRotation) {
        if (!isSkipDrawRectangle) {
            g.drawRectangle(rectangle[0], rectangle[1], rectangle[2], rectangle[3], parameter.borderPen, parameter.foreBrush);
        }
        else {
            var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p();
            format.lineAlignment = _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.top;
            format.alignment = alignment;
            format.lineSpacing = 0;
            if (isRotation) {
                g.drawString(text, font, parameter.bounds, null, parameter.backBrush, format);
            }
            else {
                g.drawString(text, font, rectangle, null, parameter.backBrush, format);
            }
        }
    };
    PdfFreeTextAnnotation.prototype._getCalloutLinePoints = function () {
        if (this._dictionary.has('CL')) {
            var calloutLinepoints = this._dictionary.getArray('CL');
            if (calloutLinepoints) {
                this._calloutLines = [];
                for (var i = 0; i < calloutLinepoints.length; i = i + 2) {
                    var points = [calloutLinepoints[Number.parseInt(i.toString(), 10)],
                        this._page.size[1] - calloutLinepoints[i + 1]];
                    this._calloutLines.push(points);
                }
            }
        }
        return this._calloutLines;
    };
    PdfFreeTextAnnotation.prototype._obtainAppearanceBounds = function () {
        var bounds = [0, 0, 0, 0];
        if (this.calloutLines && this._calloutLines.length > 0) {
            var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
            var pointArray = [];
            var length_2 = this._calloutLines.length === 2 ? 2 : 3;
            for (var i = 0; i < length_2; i++) {
                pointArray.push([0, 0]);
            }
            if (this._calloutLines.length >= 2) {
                this._obtainCallOutsNative();
                for (var i = 0; i < this._calloutLines.length; i++) {
                    if (i < 3) {
                        pointArray[i] = [this._calloutsClone[i][0],
                            this._calloutsClone[i][1]];
                    }
                    else {
                        break;
                    }
                }
            }
            if (pointArray.length > 0) {
                if (this.lineEndingStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none) {
                    this._expandAppearance(pointArray);
                }
                path._addLines(pointArray);
            }
            path.addRectangle((this.bounds.x + this._cropBoxValueX) - 2, ((this._page.size[1] + this._cropBoxValueY) - (this.bounds.y + this.bounds.height)) - 2, this.bounds.width + (2 * 2), this.bounds.height + (2 * 2));
            bounds = path._getBounds();
        }
        else {
            if (this._page) {
                if (this._page._isNew) {
                    var margins = this._page._pageSettings.margins;
                    bounds = [this.bounds.x + margins.left,
                        (this._page.size[1] - (this.bounds.y + this.bounds.height + margins.top)),
                        this.bounds.width,
                        this.bounds.height];
                }
                else {
                    bounds = [this.bounds.x + this._cropBoxValueX,
                        ((this._page.size[1] + this._cropBoxValueY) - (this.bounds.y + this.bounds.height)),
                        this.bounds.width,
                        this.bounds.height];
                }
            }
        }
        return bounds;
    };
    PdfFreeTextAnnotation.prototype._obtainCallOutsNative = function () {
        if (this.calloutLines && this._calloutLines.length > 0) {
            var size = this._page.size;
            this._calloutsClone = [];
            for (var i = 0; i < this._calloutLines.length; i++) {
                this._calloutsClone.push([this._calloutLines[i][0] + this._cropBoxValueX,
                    (size[1] + this._cropBoxValueY) - this._calloutLines[i][1]]);
            }
        }
    };
    PdfFreeTextAnnotation.prototype._obtainLinePoints = function () {
        var pageHeight = this._page.size[1];
        return [this.calloutLines[1][0] + this._cropBoxValueX,
            (pageHeight + this._cropBoxValueY) - this.calloutLines[1][1],
            this.calloutLines[0][0] + this._cropBoxValueX,
            (pageHeight + this._cropBoxValueY) - this.calloutLines[0][1]];
    };
    PdfFreeTextAnnotation.prototype._obtainLineEndingStyle = function () {
        var lineEndingStyle;
        if (this._dictionary.has('LE')) {
            var endingStyle = this._dictionary.get('LE'); // eslint-disable-line
            if (endingStyle instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG) {
                endingStyle = endingStyle.name;
            }
            lineEndingStyle = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapLineEndingStyle */ .E4)(endingStyle);
        }
        return lineEndingStyle;
    };
    PdfFreeTextAnnotation.prototype._obtainText = function () {
        var text = '';
        var isContent = this._dictionary.has('Contents');
        if (isContent) {
            var markUpText = this._dictionary.get('Contents');
            if (markUpText) {
                text = markUpText;
            }
            if (text && text !== '') {
                this._text = text;
            }
            return text;
        }
        else if (this._dictionary.has('RC') && !isContent && text === null) {
            text = this._rcText;
            return text;
        }
        return text;
    };
    PdfFreeTextAnnotation.prototype._obtainTextAlignment = function () {
        var textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
        var hasAlignment;
        if (this._dictionary.has('Q')) {
            var value = this._dictionary.get('Q');
            if (typeof value !== 'undefined') {
                textAlignment = value;
                hasAlignment = true;
            }
        }
        else if (this._dictionary.has('RC')) {
            if (this._parsedXMLData.length > 0 && this._parsedXMLData[1]) {
                var rcAlignment = this._parsedXMLData[1];
                textAlignment = rcAlignment;
                hasAlignment = true;
            }
        }
        if (!hasAlignment && this._dictionary.has('DS')) {
            var value = this._dictionary.get('DS');
            var collections = value.split(';');
            collections.forEach(function (collectionItem) {
                if (collectionItem.indexOf('text-align') !== -1) {
                    switch (collectionItem) {
                        case 'left':
                            textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
                            break;
                        case 'right':
                            textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.right;
                            break;
                        case 'center':
                            textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center;
                            break;
                        case 'justify':
                            textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.justify;
                            break;
                    }
                }
            });
        }
        return textAlignment;
    };
    PdfFreeTextAnnotation.prototype._obtainColor = function () {
        var color;
        if (this._isLoaded) {
            if (this._dictionary.has('DA')) {
                var entry = this._dictionary.get('DA');
                if (Array.isArray(entry) && entry.length > 0) {
                    color = [entry[0], entry[1], entry[2]];
                }
                else if (typeof entry === 'string') {
                    this._da = new _form_field__WEBPACK_IMPORTED_MODULE_12__/* ._PdfDefaultAppearance */ .tv(entry);
                    color = this._da.color;
                }
            }
            else if (this._dictionary.has('MK')) {
                var mkDict = this._mkDictionary;
                if (mkDict && mkDict.has('BC')) {
                    color = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(mkDict.getArray('BC'));
                }
            }
            else {
                color = [0, 0, 0];
            }
        }
        else {
            color = this._borderColor ? this._borderColor : [0, 0, 0];
        }
        return color;
    };
    PdfFreeTextAnnotation.prototype._expandAppearance = function (pointArray) {
        var pointY = pointArray[0][1];
        var pointX = pointArray[0][0];
        if (!this._isLoaded) {
            pointY = this._page.size[1] - pointY;
        }
        if (pointY > this.bounds.y) {
            if (this.lineEndingStyle !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.openArrow) {
                pointArray[0][1] -= (this.border.width * 11);
            }
        }
        else {
            pointArray[0][1] += (this.border.width * 11);
        }
        if (pointX <= this.bounds.x) {
            pointArray[0][0] -= (this.border.width * 11);
        }
        else {
            pointArray[0][0] += (this.border.width * 11);
        }
    };
    PdfFreeTextAnnotation.prototype._drawCallOuts = function (graphics, borderPen) {
        var path = new _graphics_pdf_path__WEBPACK_IMPORTED_MODULE_4__/* .PdfPath */ .Q();
        var pointArray = [];
        var length = this._calloutLines.length === 2 ? 2 : 3;
        for (var i = 0; i < length; i++) {
            pointArray.push([0, 0]);
        }
        if (this._calloutLines.length >= 2) {
            this._obtainCallOutsNative();
            for (var i = 0; i < this._calloutLines.length && i < 3; i++) {
                pointArray[i] = [this._calloutsClone[i][0],
                    -this._calloutsClone[i][1]];
            }
        }
        if (pointArray.length > 0) {
            path._addLines(pointArray);
        }
        graphics.drawPath(path, borderPen);
    };
    PdfFreeTextAnnotation.prototype._saveFreeTextDictionary = function () {
        if ((typeof this.font === 'undefined' || this.font === null) || (!this._isLoaded && this.font.size === 1)) {
            this.font = this._markUpFont;
        }
        if (typeof this.text === 'string' && this.text !== null) {
            this._dictionary.update('Contents', this.text);
        }
        if (this._isLoaded) {
            this._textAlignment = this.textAlignment;
        }
        this._dictionary.update('Q', this._textAlignment);
        if ((typeof this.subject === 'undefined' || this.subject === 'null')
            && this.annotationIntent === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.none &&
            (!this._calloutLines || (this._calloutLines && this._calloutLines.length === 0))) {
            this._dictionary.update('Subj', 'Text Box');
        }
        else {
            if ((this._calloutLines && this._calloutLines.length >= 2) &&
                this.annotationIntent === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.none) {
                this._annotationIntent = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationIntent */ .k4.freeTextCallout;
            }
            this._dictionary.update('IT', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(this._obtainAnnotationIntent(this._annotationIntent)));
        }
        this._updateStyle(this.font, this.textMarkUpColor, this._textAlignment);
        this._dictionary.update('DA', this._getBorderColorString(this.borderColor ? this._borderColor : [0, 0, 0]));
        if (this._calloutLines && this._calloutLines.length >= 2) {
            var pageHeight = this._page.size[1];
            var lines = [];
            for (var i = 0; i < this._calloutLines.length && i < 3; i++) {
                lines.push(this._calloutLines[i][0] + this._cropBoxValueX);
                lines.push((pageHeight + this._cropBoxValueY) - this._calloutLines[i][1]);
            }
            this._dictionary.update('CL', lines);
        }
        if (this._setAppearance) {
            var rect = this._obtainAppearanceBounds();
            this._dictionary.update('Rect', [rect[0], rect[1], rect[0] + rect[2], rect[1] + rect[3]]);
        }
    };
    PdfFreeTextAnnotation.prototype._getXmlFormattedString = function (markupText) {
        markupText = markupText.replace('&', '&amp;');
        markupText = markupText.replace('<', '&lt;');
        markupText = markupText.replace('>', '&gt;');
        return markupText;
    };
    PdfFreeTextAnnotation.prototype._parseMarkupLanguageData = function (rcContent) {
        var _this = this;
        var fontStyle = _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
        var fontCollection = []; // eslint-disable-line
        var brush = null;
        var fontName = '';
        var content = rcContent;
        var contentText = this._dictionary.has('Contents') ? this._dictionary.get('Contents') : '';
        var hasSymbol = false;
        var xdocument; // eslint-disable-line
        hasSymbol = contentText.split('').some(function (char) { return _this._isSymbol(char); });
        if (!hasSymbol) {
            if (content !== null && typeof content !== 'undefined') {
                xdocument = (new DOMParser()).parseFromString(content, 'text/xml');
                var root = xdocument.documentElement;
                var nameSpaceURI = (root && root.namespaceURI) || '';
                if (root) {
                    var styleMap = this._collectStyles(root);
                    var input = void 0;
                    if (styleMap.size > 0) {
                        input = this._extractStylesToInput(styleMap);
                        var fontDetails_1 = this._getFontDetails(input, this.font.size, this.textAlignment, fontStyle, brush); // eslint-disable-line
                        var _a = this._updateFontProperties(fontDetails_1, fontName, fontStyle, brush), updatedFontName_1 = _a.fontName, updatedFontStyle_1 = _a.fontStyle, updatedBrush_1 = _a.brush;
                        var obtainFont_1 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapFont */ .BM)(updatedFontName_1, this.font._size, updatedFontStyle_1, this);
                        fontCollection = this._fontCollection(fontCollection, obtainFont_1, nameSpaceURI, this._textAlignment, updatedBrush_1);
                    }
                    else if (styleMap.size === 0 && this._dictionary.has('DS')) {
                        var stringValue = this._dictionary.get('DS');
                        input = stringValue.split(';') || [];
                    }
                    var fontDetails = this._getFontDetails(input, this.font.size, this.textAlignment, fontStyle, brush); // eslint-disable-line
                    var _b = this._updateFontProperties(fontDetails, fontName, fontStyle, brush), updatedFontName = _b.fontName, updatedFontStyle = _b.fontStyle, updatedBrush = _b.brush;
                    var obtainFont = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapFont */ .BM)(updatedFontName, this.font._size, updatedFontStyle, this);
                    fontCollection = this._fontCollection(fontCollection, obtainFont, nameSpaceURI, this._textAlignment, updatedBrush);
                }
            }
        }
        this._parsedXMLData = fontCollection;
        return fontCollection;
    };
    PdfFreeTextAnnotation.prototype._collectStyles = function (root, styleMap) {
        if (styleMap === void 0) { styleMap = new Map(); }
        if (!root) {
            return styleMap;
        }
        var tagName = root.tagName.toLowerCase();
        var styleAttribute = root.getAttribute('style');
        if (styleAttribute) {
            var styleArray = styleAttribute.split(';').map(function (s) { return s.trim(); }).filter(Boolean); // eslint-disable-line
            styleMap.set(tagName, styleArray);
        }
        var childNode = root.firstElementChild;
        while (childNode) {
            this._collectStyles(childNode, styleMap);
            childNode = childNode.nextElementSibling;
        }
        return styleMap;
    };
    PdfFreeTextAnnotation.prototype._extractStylesToInput = function (styleMap) {
        var input = [];
        styleMap.forEach(function (styleArray) {
            input.push.apply(input, styleArray);
        });
        return input;
    };
    PdfFreeTextAnnotation.prototype._isSymbol = function (char) {
        var code = char.charCodeAt(0);
        if (char === '_' || char === '+' || char === '-' || char === '*' || char === '=') {
            return false;
        }
        return ((code >= 0x20A0 && code <= 0x20CF) ||
            (code >= 0x2200 && code <= 0x22FF) ||
            (code >= 0x2A00 && code <= 0x2AFF) ||
            (code >= 0x2100 && code <= 0x214F) ||
            (code >= 0x2300 && code <= 0x23FF) ||
            (code === 0x2B50));
    };
    PdfFreeTextAnnotation.prototype._updateFontProperties = function (fontDetails, fontName, fontStyle, brush) {
        var _this = this;
        fontDetails.forEach(function (value, property) {
            switch (property) {
                case 'font-family':
                    fontName = value;
                    break;
                case 'font-size':
                    _this.font._size = parseFloat(value);
                    break;
                case 'font-style':
                case 'font-weight':
                case 'text-decoration':
                    fontStyle = _this._obtainFontStyle(value, property);
                    break;
                case 'text-align':
                    _this._textAlignment = _this._parseTextAlignment(value);
                    break;
                case 'color':
                    brush = value;
                    break;
                case 'xfa-spacerun':
                    _this._rcText = value;
                    break;
            }
        });
        return { fontName: fontName, fontStyle: fontStyle, brush: brush };
    };
    PdfFreeTextAnnotation.prototype._obtainFontStyle = function (value, property) {
        var styleValue = parseFloat(value);
        switch (property) {
            case 'font-style':
                return styleValue === 0 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular :
                    styleValue === 1 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold :
                        styleValue === 2 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.italic :
                            styleValue === 8 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.strikeout :
                                styleValue === 4 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.underline : _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
            case 'font-weight':
                return styleValue === 1 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold : _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
            case 'text-decoration':
                return styleValue === 8 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.strikeout :
                    styleValue === 4 ? _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.underline : _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
            default:
                return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
        }
    };
    PdfFreeTextAnnotation.prototype._parseTextAlignment = function (value) {
        var alignmentValue = parseFloat(value);
        switch (alignmentValue) {
            case 0: return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
            case 1: return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center;
            case 2: return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.right;
            case 3: return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.justify;
            default: return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
        }
    };
    PdfFreeTextAnnotation.prototype._getFontDetails = function (input, fontSize, textAlignment, fontStyle, brush) {
        var _this = this;
        var fontDetails = new Map(); // eslint-disable-line
        input.forEach(function (element) {
            var _a = element.split(':').map(function (item) { return item.trim(); }), property = _a[0], value = _a[1];
            if (property && value) {
                switch (property.toLowerCase()) {
                    case 'font':
                        _this._parseFont(value, fontDetails);
                        break;
                    case 'font-size':
                        fontSize = _this._parseFontSize(value);
                        fontDetails.set('font-size', fontSize);
                        break;
                    case 'font-weight':
                        fontStyle = _this._parseFontWeight(value, fontStyle);
                        fontDetails.set('font-weight', fontStyle);
                        break;
                    case 'font-family':
                        fontDetails.set('font-family', _this._parseFontFamily(value));
                        break;
                    case 'color':
                        brush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(_this._rgbStringToArray(value));
                        fontDetails.set('color', brush);
                        break;
                    case 'font-style':
                        fontStyle = _this._parseFontStyle(value, fontStyle);
                        fontDetails.set('font-style', fontStyle);
                        break;
                    case 'text-decoration':
                        fontStyle = _this._parseTextDecoration(value, fontStyle);
                        fontDetails.set('text-decoration', fontStyle);
                        break;
                    case 'text-align':
                        textAlignment = _this._parseTextAlign(value);
                        fontDetails.set('text-align', textAlignment);
                        break;
                    case 'xfa-spacerun':
                        _this._rcText = value.length > 1 && value.includes('yes') ? _this._rcText + ' ' : _this._rcText;
                        fontDetails.set('xfa-spacerun', _this._rcText);
                        break;
                }
            }
        });
        return fontDetails;
    };
    PdfFreeTextAnnotation.prototype._parseFont = function (value, fontDetails) {
        var fontParts = value.split(' ').map(function (item) { return item.trim(); });
        var fontName = '';
        fontParts.forEach(function (part) {
            if (part && !part.endsWith('pt')) {
                fontName += part + ' ';
            }
            else if (part.endsWith('pt')) {
                fontDetails.set('font-size', parseFloat(part.replace('pt', '').replace(',', '.').trim()));
            }
        });
        fontDetails.set('font-family', fontName.trim().replace(/['",]/g, ''));
    };
    PdfFreeTextAnnotation.prototype._parseFontSize = function (value) {
        if (value.endsWith('pt')) {
            return parseFloat(value.replace('pt', '').replace(',', '.').trim());
        }
        return 0;
    };
    PdfFreeTextAnnotation.prototype._parseFontWeight = function (value, fontStyle) {
        if (value.includes('bold')) {
            fontStyle |= _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold;
        }
        return fontStyle;
    };
    PdfFreeTextAnnotation.prototype._parseFontFamily = function (value) {
        return value.replace(/^'+|'+$/g, '').trim();
    };
    PdfFreeTextAnnotation.prototype._parseFontStyle = function (value, fontStyle) {
        if (value.includes('normal') || value.includes('regular')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
        }
        if (value.includes('underline')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.underline;
        }
        if (value.includes('strikeout')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.strikeout;
        }
        if (value.includes('italic')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.italic;
        }
        if (value.includes('bold')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.bold;
        }
        return fontStyle;
    };
    PdfFreeTextAnnotation.prototype._parseTextDecoration = function (value, fontStyle) {
        if (value.includes('word')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.underline;
        }
        if (value.includes('line-through')) {
            return _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.strikeout;
        }
        return fontStyle;
    };
    PdfFreeTextAnnotation.prototype._parseTextAlign = function (value) {
        switch (value.trim().toLowerCase()) {
            case 'left': return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
            case 'right': return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.right;
            case 'center': return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center;
            case 'justify': return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.justify;
            default: return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
        }
    };
    PdfFreeTextAnnotation.prototype._rgbStringToArray = function (rgbString) {
        var rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
        var rgbMatch = rgbString.match(rgbRegex);
        if (rgbMatch) {
            var r = parseInt(rgbMatch[1], 10);
            var g = parseInt(rgbMatch[2], 10);
            var b = parseInt(rgbMatch[3], 10);
            return [r, g, b];
        }
        var hexRegex = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/;
        var hexMatch = rgbString.match(hexRegex);
        if (hexMatch) {
            var r = parseInt(hexMatch[1], 16);
            var g = parseInt(hexMatch[2], 16);
            var b = parseInt(hexMatch[3], 16);
            return [r, g, b];
        }
        throw new Error('Invalid RGB string format');
    };
    PdfFreeTextAnnotation.prototype._fontCollection = function (fontCollection, font, nameSpaceUri, alignment, brush) {
        return fontCollection.concat([font, alignment, nameSpaceUri, brush]);
    };
    return PdfFreeTextAnnotation;
}(PdfComment));

/**
 * `PdfRedactionAnnotation` class represents the redaction annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Create a new redaction annotation
 * const annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation (50, 100, 100, 50);
 * // Add annotation to the page
 * page.annotations.add(annotation);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfRedactionAnnotation = /** @class */ (function (_super) {
    __extends(PdfRedactionAnnotation, _super);
    function PdfRedactionAnnotation(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
        _this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
        _this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        _this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Redact'));
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined') {
            _this.bounds = { x: x, y: y, width: width, height: height };
        }
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.redactionAnnotation;
        return _this;
    }
    Object.defineProperty(PdfRedactionAnnotation.prototype, "repeatText", {
        /**
         * Gets the boolean flag indicating whether annotation has repeat text or not.
         *
         * @returns {boolean} repeat text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Gets the boolean flag indicating whether annotation has repeat text or not.
         * let repeatText: boolean = annotation. repeatText;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._repeat === 'undefined' && this._dictionary.has('Repeat')) {
                this._repeat = this._dictionary.get('Repeat');
            }
            return this._repeat;
        },
        /**
         * Sets the boolean flag indicating whether annotation has repeat text or not.
         *
         * @param {boolean} value repeat text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Sets the boolean flag indicating whether annotation has repeat text or not.
         * annotation.repeatText = false;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._repeat) {
                this._repeat = value;
                if (this._dictionary) {
                    this._dictionary.update('Repeat', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRedactionAnnotation.prototype, "textAlignment", {
        /**
         * Gets the text alignment of the annotation.
         *
         * @returns {PdfTextAlignment} Text alignment.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Gets the text alignment of the annotation.
         * let textAlignment: PdfTextAlignment = annotation.textAlignment;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._dictionary.has('Q')) {
                this._textAlignment = this._dictionary.get('Q');
            }
            return this._textAlignment;
        },
        /**
         * Sets the text alignment of the annotation.
         *
         * @param {PdfTextAlignment} value Text alignment.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Sets the text alignment of the annotation.
         * annotation.textAlignment = PdfTextAlignment.justify;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._textAlignment !== value) {
                this._dictionary.update('Q', value);
            }
            this._textAlignment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRedactionAnnotation.prototype, "textColor", {
        /**
         * Gets the text color of the annotation.
         *
         * @returns {number[]} R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Gets the text color of the annotation.
         * let textColor : number[] = annotation.textColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._textColor === 'undefined' && this._dictionary.has('C')) {
                this._textColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(this._dictionary.getArray('C'));
            }
            return this._textColor;
        },
        /**
         * Sets the text color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Sets the text color of the annotation.
         * annotation.textColor = [255, 255, 255];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                var extColor = this.textColor;
                if (!this._isLoaded || typeof extColor === 'undefined' || (extColor[0] !== value[0] || extColor[1] !== value[1] || extColor[2] !== value[2])) {
                    this._textColor = value;
                    this._dictionary.update('C', [Number.parseFloat((value[0] / 255).toFixed(3)),
                        Number.parseFloat((value[1] / 255).toFixed(3)),
                        Number.parseFloat((value[2] / 255).toFixed(3))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRedactionAnnotation.prototype, "borderColor", {
        /**
         * Gets the border color of the annotation.
         *
         * @returns {number[]} R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Gets the border color of the annotation.
         * let borderColor: number[] = annotation.borderColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._borderColor === 'undefined' && this._dictionary.has('OC')) {
                this._borderColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(this._dictionary.getArray('OC'));
            }
            return this._borderColor;
        },
        /**
         * Sets the border color of the annotation.
         *
         * @param {number[]} value R, G, B color values in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Sets the border color of the annotation.
         * annotation.borderColor = [255, 255, 255];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value !== 'undefined' && value.length === 3) {
                var extColor = this.borderColor;
                if (!this._isLoaded || typeof extColor === 'undefined' || (extColor[0] !== value[0] || extColor[1] !== value[1] || extColor[2] !== value[2])) {
                    this._borderColor = value;
                    this._dictionary.update('OC', [Number.parseFloat((value[0] / 255).toFixed(3)),
                        Number.parseFloat((value[1] / 255).toFixed(3)),
                        Number.parseFloat((value[2] / 255).toFixed(3))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRedactionAnnotation.prototype, "overlayText", {
        /**
         * Gets the overlay text of the annotation.
         *
         * @returns {string} overlay text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Gets the overlay text of the annotation.
         * let overlayText: string =annotation.overlayText;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._overlayText === 'undefined' && this._dictionary.has('OverlayText')) {
                this._overlayText = this._dictionary.get('OverlayText');
            }
            return this._overlayText;
        },
        /**
         * Sets the overlay text of the annotation.
         *
         * @param {string} value overlay text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Sets the overlay text of the annotation.
         * annotation.overlayText = ‘syncfusion’;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string') {
                this._dictionary.update('OverlayText', value);
                this._overlayText = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRedactionAnnotation.prototype, "font", {
        /**
         * Gets the font of the annotation.
         *
         * @returns {PdfFont} font.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Gets the font of the annotation.
         * let font: PdfFont = annotation.font;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._font;
        },
        /**
         * Sets the font of the annotation.
         *
         * @param {PdfFont} value font.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfRedactionAnnotation = page.annotations.at(0) as PdfRedactionAnnotation;
         * // Sets the font of the annotation.
         * annotation.font = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._font = value;
        },
        enumerable: true,
        configurable: true
    });
    PdfRedactionAnnotation._load = function (page, dictionary) {
        var annot = new PdfRedactionAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfRedactionAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfRedactionAnnotation.prototype._postProcess = function (isFlatten) {
        if (typeof this.bounds === 'undefined' || this.bounds === null) {
            throw new Error('Bounds cannot be null or undefined');
        }
        var borderWidth;
        if (this._dictionary.has('BS')) {
            borderWidth = this.border.width;
        }
        else {
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            dictionary.set('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
            this._dictionary.set('BS', dictionary);
        }
        if (typeof borderWidth === 'undefined') {
            borderWidth = 1;
        }
        if (this._setAppearance) {
            this._appearanceTemplate = this._createRedactionAppearance(isFlatten);
        }
        this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
    };
    PdfRedactionAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (!this._isImported) {
            if (this._isLoaded) {
                this._appearanceTemplate = this._createRedactionAppearance(isFlatten);
            }
            else {
                this._postProcess(isFlatten);
                if (!this._appearanceTemplate) {
                    if (isFlatten) {
                        if (!this._dictionary.has('AP')) {
                            this._appearanceTemplate = this._createRedactionAppearance(isFlatten);
                        }
                        else {
                            var dictionary = this._dictionary.get('AP');
                            if (dictionary && dictionary.has('N')) {
                                var appearanceStream = dictionary.get('N');
                                if (appearanceStream) {
                                    var reference = dictionary.getRaw('N');
                                    if (reference) {
                                        appearanceStream.reference = reference;
                                    }
                                    this._appearanceTemplate = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                                }
                            }
                        }
                    }
                }
            }
            if (isFlatten && this._appearanceTemplate) {
                var isNormalMatrix = this._validateTemplateMatrix(this._appearanceTemplate._content.dictionary);
                if (!this._appearanceTemplate._content.dictionary.has('Matrix')) {
                    var box = this._appearanceTemplate._content.dictionary.getArray('BBox');
                    if (box) {
                        this._appearanceTemplate._content.dictionary.update('Matrix', [1, 0, 0, 1, -box[0], -box[1]]);
                    }
                }
                this._flattenAnnotationTemplate(this._appearanceTemplate, isNormalMatrix);
            }
            else if (isFlatten) {
                this._page.annotations.remove(this);
            }
        }
    };
    PdfRedactionAnnotation.prototype._createRedactionAppearance = function (isFlatten) {
        var normalTemplate = this._createNormalAppearance();
        if (isFlatten) {
            if (this._isLoaded && this._page !== null) {
                this._page.annotations.remove(this);
            }
        }
        else {
            var borderTemplate = this._createBorderAppearance();
            if (this._dictionary.has('AP')) {
                var appearance = this._dictionary.get('AP');
                if (appearance && appearance instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'R');
                }
            }
            var dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
            borderTemplate._content.dictionary._updated = true;
            var reference1 = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference1, borderTemplate._content);
            borderTemplate._content.reference = reference1;
            dictionary.set('N', reference1);
            normalTemplate._content.dictionary._updated = true;
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, normalTemplate._content);
            normalTemplate._content.reference = reference;
            dictionary.set('R', reference);
            dictionary._updated = true;
            this._dictionary.set('AP', dictionary);
        }
        return normalTemplate;
    };
    PdfRedactionAnnotation.prototype._createBorderAppearance = function () {
        var nativeRectangle = [0, 0, this.bounds.width, this.bounds.height];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        var width = this.border.width / 2;
        var graphics = template.graphics;
        var actualWidth = this.border.width;
        var pen;
        if (this.border.width > 0 && this.borderColor) {
            pen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.borderColor, actualWidth);
        }
        var rect = [nativeRectangle[0], nativeRectangle[1], nativeRectangle[2], nativeRectangle[3]];
        if (this.opacity < 1) {
            var state = graphics.save();
            graphics.setTransparency(this.opacity);
            graphics.drawRectangle(rect[0] + width, rect[1] + width, rect[2] - actualWidth, rect[3] - actualWidth, pen, null);
            graphics.restore(state);
        }
        else {
            graphics.drawRectangle(rect[0] + width, rect[1] + width, rect[2] - actualWidth, rect[3] - actualWidth, pen, null);
        }
        return template;
    };
    PdfRedactionAnnotation.prototype._createNormalAppearance = function () {
        var nativeRectangle = [0, 0, this.bounds.width, this.bounds.height];
        var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(nativeRectangle, this._crossReference);
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._setMatrix */ .nI)(template, this._getRotationAngle());
        var width = this.border.width / 2;
        var graphics = template.graphics;
        var parameter = new _PaintParameter();
        var borderPen;
        if (this.textColor && this.border.width > 0) {
            borderPen = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfPen */ .Qj(this.textColor, this.border.width);
        }
        var backBrush;
        var textcolor;
        if (this.innerColor) {
            backBrush = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.innerColor);
        }
        if (this.textColor) {
            textcolor = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc(this.textColor);
        }
        else {
            textcolor = new _graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* .PdfBrush */ .Dc([128, 128, 128]);
        }
        parameter.backBrush = backBrush;
        parameter.borderWidth = width;
        var widths = this.border.width;
        var rect = [nativeRectangle[0], nativeRectangle[1], nativeRectangle[2], nativeRectangle[3]];
        if (this.opacity < 1) {
            var state = graphics.save();
            graphics.setTransparency(this.opacity);
            graphics.drawRectangle(rect[0] + width, rect[1] + width, rect[2] - widths, rect[3] - widths, borderPen, backBrush);
            graphics.restore(state);
        }
        else {
            graphics.drawRectangle(rect[0] + width, rect[1] + width, rect[2] - widths, rect[3] - widths, borderPen, backBrush);
        }
        graphics.restore();
        if (this.overlayText && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._isNullOrUndefined */ .i$)(this.overlayText) && this._overlayText !== '') {
            var col = 0;
            var row = 0;
            if (typeof this.font === 'undefined' || this.font === null) {
                this.font = this._lineCaptionFont;
            }
            var y = 0;
            var x = 0;
            var diff = 0;
            var rectangle = void 0;
            if (this._isLoaded) {
                this._textAlignment = this.textAlignment;
            }
            var format = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(this._textAlignment, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.top);
            var textsize = this.font.measureString(this.overlayText, [0, 0], format, 0, 0);
            if (this._isLoaded && typeof this._repeat === 'undefined') {
                this._repeat = this.repeatText;
            }
            if (this._repeat) {
                if (textsize[0] <= 0) {
                    textsize[0] = 1;
                }
                col = this.bounds.width / textsize[0];
                row = Math.floor(this.bounds.height / this.font._size);
                diff = Math.abs(this.bounds.width - (Math.floor(col) * textsize[0]));
                if (this._textAlignment === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center) {
                    x = diff / 2;
                }
                if (this._textAlignment === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.right) {
                    x = diff;
                }
                for (var i = 1; i < col; i++) {
                    for (var j = 0; j < row; j++) {
                        rectangle = [x, y, 0, 0];
                        graphics.drawString(this.overlayText, this.font, rectangle, null, textcolor, null);
                        y = y + this.font._size;
                    }
                    x = x + textsize[0];
                    y = 0;
                }
            }
            else {
                diff = Math.abs(this.bounds.width - textsize[0]);
                if (this._textAlignment === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.center) {
                    x = diff / 2;
                }
                if (this._textAlignment === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.right) {
                    x = diff;
                }
                rectangle = [x, 0, this.bounds.width - this.border.width, this.bounds.height - this.border.width];
                graphics.drawString(this.overlayText, this.font, rectangle, null, textcolor, format);
            }
        }
        return template;
    };
    return PdfRedactionAnnotation;
}(PdfAnnotation));

/**
 * `PdfRichMediaAnnotation` class represents the rich media annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Access first page
 * let page: PdfPage = document.getPage(0);
 * // Access the annotation at index 0
 * let annotation: PdfRichMediaAnnotation = page.annotations.at(0) as PdfRichMediaAnnotation;
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfRichMediaAnnotation = /** @class */ (function (_super) {
    __extends(PdfRichMediaAnnotation, _super);
    /**
     * Initializes a new instance of the `PdfRichMediaAnnotation` class.
     *
     * @private
     */
    function PdfRichMediaAnnotation() {
        var _this = _super.call(this) || this;
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.richMediaAnnotation;
        return _this;
    }
    PdfRichMediaAnnotation._load = function (page, dictionary) {
        var annot = new PdfRichMediaAnnotation();
        annot._isLoaded = true;
        annot._initialize(page, dictionary);
        return annot;
    };
    PdfRichMediaAnnotation.prototype._initialize = function (page, dictionary) {
        _super.prototype._initialize.call(this, page, dictionary);
    };
    PdfRichMediaAnnotation.prototype._doPostProcess = function (isFlatten) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (typeof this.flattenPopups !== 'undefined' && this.flattenPopups) {
            this._flattenPopUp();
        }
        if (isFlatten) {
            var appearanceStream = void 0;
            if (this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                var isNormalMatrix = this._validateTemplateMatrix(template._content.dictionary);
                this._flattenAnnotationTemplate(template, isNormalMatrix);
            }
            else {
                this._removeAnnotation(this._page, this);
            }
        }
    };
    return PdfRichMediaAnnotation;
}(PdfAnnotation));

/**
 * `PdfWidgetAnnotation` class represents the widget annotation objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Access first page
 * let page: PdfPage = document.getPage(0);
 * // Access the annotation at index 0
 * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfWidgetAnnotation = /** @class */ (function (_super) {
    __extends(PdfWidgetAnnotation, _super);
    /**
     * Initializes a new instance of the `PdfWidgetAnnotation` class.
     *
     * @private
     */
    function PdfWidgetAnnotation() {
        var _this = _super.call(this) || this;
        _this._isAutoResize = false;
        _this._visibility = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visible;
        _this._isFont = false;
        _this._isTransparentBackColor = false;
        _this._isTransparentBorderColor = false;
        _this._isWidget = true;
        _this._type = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfAnnotationType */ .Ze.widgetAnnotation;
        return _this;
    }
    /**
     * Parse an existing widget annotation.
     *
     * @private
     * @param {_PdfDictionary} dictionary Widget dictionary.
     * @param {_PdfCrossReference} crossReference PDF cross reference.
     * @returns {PdfWidgetAnnotation} Widget.
     */
    PdfWidgetAnnotation._load = function (dictionary, crossReference) {
        var widget = new PdfWidgetAnnotation();
        widget._isLoaded = true;
        widget._dictionary = dictionary;
        widget._crossReference = crossReference;
        return widget;
    };
    Object.defineProperty(PdfWidgetAnnotation.prototype, "page", {
        /**
         * Gets the page object (Read only).
         *
         * @returns {PdfPage} page object.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access check box field
         * let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
         * // Access first item of check box field
         * let item: PdfWidgetAnnotation = field.itemAt(0);
         * // Gets the page object.
         * let page: PdfPage = item.page;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._getPage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "color", {
        /**
         * Gets the fore color of the annotation.
         *
         * @returns {number[]} Color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the fore color of the annotation.
         * let color: number[] = annotation.color;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._color === 'undefined' && this._defaultAppearance) {
                this._color = this._da.color;
            }
            return this._color;
        },
        /**
         * Sets the fore color of the annotation.
         *
         * @param {number[]} value Color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Sets the fore color of the annotation.
         * annotation.color = [255,255,255];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof this.color === 'undefined' || this._color !== value) {
                this._color = value;
            }
            var isNew = false;
            if (!this._defaultAppearance) {
                this._da = new _form_field__WEBPACK_IMPORTED_MODULE_12__/* ._PdfDefaultAppearance */ .tv('');
                isNew = true;
            }
            if (isNew || this._da.color !== value) {
                this._da.color = value;
                this._dictionary.update('DA', this._da.toString());
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "backColor", {
        /**
         * Gets the back color of the annotation.
         *
         * @returns {number[]} Color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access the text box field at index 0
         * let field: PdfField = document.form.fieldAt(0);
         * // Gets the back color of the annotation
         * let backColor: number[] = field.itemAt(0).backColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._parseBackColor();
        },
        /**
         * Sets the back color of the annotation.
         *
         * @param {number[]} value Array with R, G, B, A color values in between 0 to 255. For optional A (0-254), it signifies transparency.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access the text box field at index 0
         * let field: PdfField = document.form.fieldAt(0);
         * // Sets the background color of the field item
         * field.itemAt(0).backColor = [255, 0, 0];
         * // Sets the background color of the field item to transparent
         * field.itemAt(1).backColor = [0, 0, 0, 0];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._updateBackColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "_hasBackColor", {
        get: function () {
            if (this._isLoaded) {
                var mkDictionary = this._mkDictionary;
                return (mkDictionary && mkDictionary.has('BG'));
            }
            else {
                return !this._isTransparentBackColor;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "_hasBorderColor", {
        get: function () {
            if (this._isLoaded) {
                var mkDictionary = this._mkDictionary;
                return (mkDictionary && mkDictionary.has('BC'));
            }
            else {
                return !this._isTransparentBorderColor;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "borderColor", {
        /**
         * Gets the border color of the annotation.
         *
         * @returns {number[]} Color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the border color of the annotation.
         * let borderColor: number[] = annotation.borderColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._parseBorderColor();
        },
        /**
         * Sets the border color of the annotation.
         *
         * @param {number[]} value Array with R, G, B, A color values in between 0 to 255. For optional A (0-254), it signifies transparency.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Sets the border color of the annotation.
         * annotation.borderColor = [255,255,255];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._updateBorderColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "rotate", {
        /**
         * Gets the rotation angle of the annotation.
         *
         * @returns {number} Rotation angle as number.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the rotation angle of the annotation.
         * let rotate: number = annotation.rotate;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._rotationAngle === 'undefined') {
                if (this._mkDictionary && this._mkDictionary.has('R')) {
                    this._rotationAngle = this._mkDictionary.get('R');
                }
                else if (this._dictionary.has('R')) {
                    this._rotationAngle = this._dictionary.get('R');
                }
            }
            return this._rotationAngle;
        },
        /**
         * Sets the rotation angle of the annotation.
         *
         * @param {number} value Rotation angle as number.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Sets the rotation angle of the annotation.
         * annotation.rotate = 90;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof this.rotate === 'undefined' || this._rotationAngle !== value) {
                if (typeof this._mkDictionary === 'undefined') {
                    this._dictionary.update('MK', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference));
                }
                this._mkDictionary.update('R', value);
                this._rotationAngle = value;
                this._dictionary._updated = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "highlightMode", {
        /**
         * Gets the highlight mode of the annotation.
         *
         * @returns {PdfHighlightMode} Highlight mode.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the highlight mode of the annotation.
         * let highlightMode: PdfHighlightMode = annotation.highlightMode;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._highlightMode === 'undefined' && this._dictionary.has('H')) {
                var mode = this._dictionary.get('H');
                this._highlightMode = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapHighlightMode */ .jm)(mode.name);
            }
            return this._highlightMode;
        },
        /**
         * Sets the highlight mode of the annotation.
         *
         * @param {PdfHighlightMode} value Highlight mode.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Sets the highlight mode of the annotation.
         * annotation.highlightMode = PdfHighlightMode.noHighlighting;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._highlightMode !== value) {
                this._dictionary.update('H', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapHighlightMode */ .Fg)(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "bounds", {
        /**
         * Gets the bounds of the annotation.
         *
         * @returns {{x: number, y: number, width: number, height: number}} Bounds.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the bounds of the annotation.
         * let bounds : {x: number, y: number, width: number, height: number} = annotation.bounds;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded && typeof this._bounds === 'undefined') {
                this._bounds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._calculateBounds */ .lN)(this._dictionary, this._getPage());
            }
            if (typeof this._bounds === 'undefined' || this._bounds === null) {
                this._bounds = { x: 0, y: 0, width: 0, height: 0 };
            }
            return this._bounds;
        },
        /**
         * Sets the bounds of the annotation.
         *
         * @param {{x: number, y: number, width: number, height: number}} value Bounds
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Sets the bounds of the annotation.
         * annotation.bounds = {0, 0, 50, 50};
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value.x === 0 && value.y === 0 && value.width === 0 && value.height === 0) {
                throw new Error('Cannot set empty bounds');
            }
            this._bounds = value;
            if (this._page && this._page._isNew && this._page._pageSettings) {
                this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateBounds */ .oK)(this));
            }
            else {
                this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._getUpdatedBounds */ .yG)([value.x, value.y, value.width, value.height], this._getPage()));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "textAlignment", {
        /**
         * Gets the text alignment of the annotation.
         *
         * @returns {PdfTextAlignment} Text alignment.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the text alignment of the annotation.
         * let textAlignment: PdfTextAlignment = annotation.textAlignment;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._textAlignment === 'undefined' && this._dictionary.has('Q')) {
                this._textAlignment = this._dictionary.get('Q');
            }
            return this._textAlignment;
        },
        /**
         * Sets the text alignment of the annotation.
         *
         * @param {PdfTextAlignment} value Text alignment.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Sets the text alignment of the annotation.
         * annotation.textAlignment = PdfTextAlignment.left;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof this._textAlignment === 'undefined' || this._textAlignment !== value) {
                this._dictionary.update('Q', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "visibility", {
        /**
         * Gets the visibility.
         *
         * @returns {PdfFormFieldVisibility} Field visibility option.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access the form field at index 0
         * let field: PdfField = document.form.fieldAt(0);
         * // Gets the visibility.
         * let visibility: PdfFormFieldVisibility = field.itemAt(0).visibility;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            var value;
            if (this._isLoaded) {
                value = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visible;
                var flag = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.default;
                if (this._hasFlags) {
                    flag = this.flags;
                    var flagValue = 3;
                    if ((flag & _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.hidden) === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.hidden) {
                        flagValue = 0;
                    }
                    if ((flag & _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.noView) === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.noView) {
                        flagValue = 1;
                    }
                    if ((flag & _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.print) !== _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.print) {
                        flagValue &= 2;
                    }
                    switch (flagValue) {
                        case 0:
                            value = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.hidden;
                            break;
                        case 1:
                            value = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.hiddenPrintable;
                            break;
                        case 2:
                            value = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visibleNotPrintable;
                            break;
                        case 3:
                            value = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visible;
                            break;
                    }
                }
                else {
                    value = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visibleNotPrintable;
                }
            }
            else {
                return this._visibility;
            }
            return value;
        },
        /**
         * Sets the visibility.
         *
         * @param {PdfFormFieldVisibility} value Visibility option.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access the form field at index 0
         * let field: PdfField = document.form.fieldAt(0);
         * // Sets the visibility.
         * let field.itemAt(0).visibility = PdfFormFieldVisibility.hiddenPrintable;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this._isLoaded) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._updateVisibility */ .Iw)(this._dictionary, value);
                this._dictionary._updated = true;
            }
            else {
                switch (value) {
                    case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.hidden:
                        this.flags = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.hidden;
                        break;
                    case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.hiddenPrintable:
                        this.flags = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.noView | _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.print;
                        break;
                    case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visible:
                        this.flags = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.print;
                        break;
                    case _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfFormFieldVisibility */ .pw.visibleNotPrintable:
                        this.flags = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.default;
                        break;
                }
                this._visibility = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "font", {
        /**
         * Gets the font of the item.
         *
         * @returns {PdfFont} font.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the form field at index 0
         * let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
         * // Get the first item of the field
         * let item: PdfWidgetAnnotation = field.itemAt(0);
         * // Gets the font of the item.
         * let font: PdfFont = item.font;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            var _this = this;
            if (!this._pdfFont) {
                var fontName = void 0;
                if (this._crossReference) {
                    var form_1 = this._crossReference._document.form;
                    var fontData = this._obtainFontDetails();
                    if (form_1 && form_1._dictionary.has('DR')) {
                        var resources = form_1._dictionary.get('DR');
                        if (resources.has('Font')) {
                            var fonts = resources.get('Font');
                            if (fonts.has(fontData.name)) {
                                var fontDictionary = fonts.get(fontData.name);
                                if (fontDictionary && fontData.name && fontDictionary.has('BaseFont')) {
                                    var baseFont = fontDictionary.get('BaseFont');
                                    var textFontStyle = _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFontStyle */ .xK.regular;
                                    if (baseFont) {
                                        fontName = baseFont.name;
                                        textFontStyle = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._getFontStyle */ .Qp)(baseFont.name);
                                        if (fontName.includes('-')) {
                                            fontName = fontName.substring(0, fontName.indexOf('-'));
                                        }
                                        this._pdfFont = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapFont */ .BM)(fontName, fontData.size, textFontStyle, this);
                                    }
                                }
                            }
                        }
                    }
                    if ((form_1 !== null && typeof form_1 !== 'undefined') && (this._pdfFont === null || typeof this._pdfFont === 'undefined') &&
                        form_1._parsedFields && form_1._parsedFields.size > 0) {
                        form_1._parsedFields.forEach(function (field) {
                            if (field instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfTextBoxField */ .PX && field._kidsCount > 0) {
                                _this._pdfFont = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._obtainFontDetails */ .W0)(form_1, _this, field);
                            }
                        });
                    }
                }
            }
            if ((this._pdfFont === null || typeof this._pdfFont === 'undefined') || (!this._isLoaded && this._pdfFont.size === 1)) {
                this._pdfFont = this._circleCaptionFont;
            }
            return this._pdfFont;
        },
        /**
         * Sets the font of the item.
         *
         * @param {PdfFont} value font.
         *
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the form field at index 0
         * let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
         * // Get the first item of the field
         * let item: PdfWidgetAnnotation = field.itemAt(0);
         * // Set the font of the item.
         * item.font = new PdfStandardFont(PdfFontFamily.helvetica, 12, PdfFontStyle.bold);
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value && value instanceof _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfFont */ .u6) {
                this._pdfFont = value;
                this._initializeFont(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "_defaultAppearance", {
        get: function () {
            if (typeof this._da === 'undefined' && this._dictionary.has('DA')) {
                var da = this._dictionary.get('DA');
                if (da && da !== '') {
                    this._da = new _form_field__WEBPACK_IMPORTED_MODULE_12__/* ._PdfDefaultAppearance */ .tv(da);
                }
            }
            return this._da;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfWidgetAnnotation.prototype, "_mkDictionary", {
        get: function () {
            var value;
            if (this._dictionary.has('MK')) {
                value = this._dictionary.get('MK');
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PdfWidgetAnnotation.prototype._create = function (page, bounds, field) {
        this._page = page;
        this._crossReference = page._crossReference;
        this._ref = this._crossReference._getNextReference();
        this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
        this._crossReference._cacheMap.set(this._ref, this._dictionary);
        this._dictionary._currentObj = this;
        this._dictionary.objId = this._ref.toString();
        this._dictionary.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Annot'));
        this._dictionary.update('Subtype', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Widget'));
        this.flags |= _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfAnnotationFlag */ .gK.print;
        this._dictionary.update('P', page._ref);
        page._addWidget(this._ref);
        this.border = new PdfAnnotationBorder();
        this.bounds = bounds;
        if (field) {
            this._field = field;
            this._dictionary.update('Parent', this._field._ref);
        }
        return this._dictionary;
    };
    PdfWidgetAnnotation.prototype._doPostProcess = function (isFlatten, recreateAppearance) {
        if (isFlatten === void 0) { isFlatten = false; }
        if (recreateAppearance === void 0) { recreateAppearance = false; }
        if (isFlatten || recreateAppearance) {
            var appearanceStream = void 0;
            if (recreateAppearance || (isFlatten && !this._dictionary.has('AP'))) {
                //appearanceStream = this._createAppearance();
            }
            if (!appearanceStream && this._dictionary.has('AP')) {
                var dictionary = this._dictionary.get('AP');
                if (dictionary && dictionary.has('N')) {
                    appearanceStream = dictionary.get('N');
                    var reference = dictionary.getRaw('N');
                    if (reference && appearanceStream) {
                        appearanceStream.reference = reference;
                    }
                }
            }
            if (appearanceStream) {
                var bounds = void 0;
                if (isFlatten) {
                    var template = new _graphics_pdf_template__WEBPACK_IMPORTED_MODULE_5__/* .PdfTemplate */ .T(appearanceStream, this._crossReference);
                    var page = this._getPage();
                    if (page) {
                        var graphics = page.graphics;
                        graphics.save();
                        if (page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90) {
                            graphics.translateTransform(graphics._size[0], graphics._size[1]);
                            graphics.rotateTransform(90);
                        }
                        else if (page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180) {
                            graphics.translateTransform(graphics._size[0], graphics._size[1]);
                            graphics.rotateTransform(-180);
                        }
                        else if (page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270) {
                            graphics.translateTransform(graphics._size[0], graphics._size[1]);
                            graphics.rotateTransform(270);
                        }
                        bounds = { x: this.bounds.x, y: this.bounds.y, width: template._size[0], height: template._size[1] };
                        graphics.drawTemplate(template, bounds);
                        graphics.restore();
                    }
                }
                else {
                    var appearance = void 0;
                    if (this._dictionary.has('AP')) {
                        appearance = this._dictionary.get('AP');
                    }
                    else {
                        var reference_8 = this._crossReference._getNextReference();
                        appearance = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                        this._crossReference._cacheMap.set(reference_8, appearance);
                        this._dictionary.update('AP', reference_8);
                    }
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._removeDuplicateReference */ .i0)(appearance, this._crossReference, 'N');
                    var reference = this._crossReference._getNextReference();
                    this._crossReference._cacheMap.set(reference, appearanceStream);
                    appearance.update('N', reference);
                }
            }
            this._dictionary._updated = false;
        }
    };
    PdfWidgetAnnotation.prototype._initializeFont = function (font) {
        this._pdfFont = font;
        var document;
        if (this._crossReference) {
            document = this._crossReference._document;
            var resource = void 0;
            if (document) {
                if (document.form._dictionary.has('DR')) {
                    resource = document.form._dictionary.get('DR');
                }
                else {
                    resource = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                }
            }
            var fontDict = void 0;
            var isReference = false;
            if (resource.has('Font')) {
                var obj = resource.getRaw('Font'); // eslint-disable-line
                if (obj && obj instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfReference */ .BG) {
                    isReference = true;
                    fontDict = this._crossReference._fetch(obj);
                }
                else if (obj instanceof _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP) {
                    fontDict = obj;
                }
            }
            if (!fontDict) {
                fontDict = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                resource.update('Font', fontDict);
            }
            var keyName = _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._getNewGuidString */ .kB)());
            var reference = this._crossReference._getNextReference();
            this._crossReference._cacheMap.set(reference, this._pdfFont._dictionary);
            if (font instanceof _fonts_pdf_standard_font__WEBPACK_IMPORTED_MODULE_0__/* .PdfTrueTypeFont */ .We) {
                if (this._pdfFont._pdfFontInternals) {
                    this._crossReference._cacheMap.set(reference, this._pdfFont._pdfFontInternals);
                }
            }
            else if (this._pdfFont._dictionary) {
                this._crossReference._cacheMap.set(reference, this._pdfFont._dictionary);
            }
            fontDict.update(keyName.name, reference);
            resource._updated = true;
            document.form._dictionary.update('DR', resource);
            document.form._dictionary._updated = true;
            this._fontName = keyName.name;
            var defaultAppearance = new _form_field__WEBPACK_IMPORTED_MODULE_12__/* ._PdfDefaultAppearance */ .tv();
            defaultAppearance.fontName = this._fontName;
            defaultAppearance.fontSize = this._pdfFont._size;
            defaultAppearance.color = this.color ? this.color : [0, 0, 0];
            this._dictionary.update('DA', defaultAppearance.toString());
            if (isReference) {
                resource._updated = true;
            }
            this._isFont = true;
        }
    };
    PdfWidgetAnnotation.prototype._getPage = function () {
        if (!this._page) {
            var document_1;
            if (this._crossReference) {
                document_1 = this._crossReference._document;
            }
            var page = void 0;
            if (this._dictionary.has('P')) {
                var ref = this._dictionary.getRaw('P');
                if (ref && document_1) {
                    for (var i = 0; i < document_1.pageCount; i++) {
                        var entry = document_1.getPage(i);
                        if (entry && entry._ref === ref) {
                            page = entry;
                            break;
                        }
                    }
                }
            }
            if (!page && document_1 && this._ref) {
                page = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._findPage */ .cs)(document_1, this._ref);
            }
            this._page = page;
        }
        return this._page;
    };
    PdfWidgetAnnotation.prototype._beginSave = function () {
        if (!this._isLoaded && !this._page._isNew) {
            var value = this._bounds;
            this._dictionary.update('Rect', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._getUpdatedBounds */ .yG)([value.x, value.y, value.width, value.height], this._page));
        }
    };
    PdfWidgetAnnotation.prototype._parseBackColor = function () {
        var value;
        if ((this._isLoaded && this._hasBackColor) || (!this._isLoaded && !this._isTransparentBackColor)) {
            if (typeof this._backColor === 'undefined') {
                var dictionary = this._mkDictionary;
                if (dictionary && dictionary.has('BG')) {
                    var colorArray = dictionary.getArray('BG');
                    if (colorArray) {
                        this._backColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(colorArray);
                    }
                }
            }
            if (typeof this._backColor === 'undefined' || this._backColor === null) {
                this._backColor = [255, 255, 255];
            }
            value = this._backColor;
        }
        return value;
    };
    PdfWidgetAnnotation.prototype._parseBorderColor = function () {
        var value;
        if ((this._isLoaded && this._hasBorderColor) || (!this._isLoaded && !this._isTransparentBorderColor)) {
            if (typeof this._borderColor === 'undefined') {
                var dictionary = this._mkDictionary;
                if (dictionary && dictionary.has('BC')) {
                    var colorArray = dictionary.getArray('BC');
                    if (colorArray) {
                        this._borderColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._parseColor */ .Y3)(colorArray);
                    }
                }
            }
            if (typeof this._borderColor === 'undefined' || this._borderColor === null) {
                this._borderColor = [0, 0, 0];
            }
            value = this._borderColor;
        }
        return value;
    };
    PdfWidgetAnnotation.prototype._updateBackColor = function (value, setAppearance) {
        if (setAppearance === void 0) { setAppearance = false; }
        var isChanged = false;
        if (value.length === 4 && value[3] !== 255) {
            this._isTransparentBackColor = true;
            if (this._dictionary.has('BG')) {
                delete this._dictionary._map.BG;
                isChanged = true;
            }
            var mkDictionary = this._mkDictionary;
            if (mkDictionary && mkDictionary.has('BG')) {
                delete mkDictionary._map.BG;
                this._dictionary._updated = true;
                isChanged = true;
            }
        }
        else {
            this._isTransparentBackColor = false;
            if (typeof this.backColor === 'undefined' || this._backColor !== value) {
                if (typeof this._mkDictionary === 'undefined') {
                    this._dictionary.update('MK', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference));
                }
                this._mkDictionary.update('BG', [Number.parseFloat((value[0] / 255).toFixed(3)),
                    Number.parseFloat((value[1] / 255).toFixed(3)),
                    Number.parseFloat((value[2] / 255).toFixed(3))]);
                this._backColor = [value[0], value[1], value[2]];
                this._dictionary._updated = true;
                isChanged = true;
            }
        }
        if (setAppearance && isChanged && this._field) {
            this._field._setAppearance = true;
        }
    };
    PdfWidgetAnnotation.prototype._updateBorderColor = function (value) {
        if (value.length === 4 && value[3] !== 255) {
            this._isTransparentBorderColor = true;
            if (this._dictionary.has('BC')) {
                delete this._dictionary._map.BC;
            }
            var mkDictionary = this._mkDictionary;
            if (mkDictionary && mkDictionary.has('BC')) {
                delete mkDictionary._map.BC;
                if (this._dictionary.has('BS')) {
                    var bsDictionary = this._dictionary.get('BS');
                    if (bsDictionary && bsDictionary.has('W')) {
                        delete bsDictionary._map.W;
                    }
                }
                this._dictionary._updated = true;
            }
        }
        else {
            this._isTransparentBorderColor = false;
            if (typeof this.borderColor === 'undefined' || this.borderColor !== value) {
                if (typeof this._mkDictionary === 'undefined') {
                    this._dictionary.update('MK', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference));
                }
                this._mkDictionary.update('BC', [Number.parseFloat((value[0] / 255).toFixed(3)),
                    Number.parseFloat((value[1] / 255).toFixed(3)),
                    Number.parseFloat((value[2] / 255).toFixed(3))]);
                this._borderColor = [value[0], value[1], value[2]];
                this._dictionary._updated = true;
            }
        }
    };
    return PdfWidgetAnnotation;
}(PdfAnnotation));

/**
 * `PdfStateItem` class represents the check box field item objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Access check box field
 * let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
 * // Access first item of check box field
 * let item: PdfStateItem = field.itemAt(0) as PdfStateItem;
 * // Sets the check box style as check
 * item.style = PdfCheckBoxStyle.check;
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfStateItem = /** @class */ (function (_super) {
    __extends(PdfStateItem, _super);
    /**
     * Initializes a new instance of the `PdfStateItem` class.
     *
     * @private
     */
    function PdfStateItem() {
        return _super.call(this) || this;
    }
    /**
     * Parse an existing item of the field.
     *
     * @private
     * @param {_PdfDictionary} dictionary Widget dictionary.
     * @param {_PdfCrossReference} crossReference PDF cross reference.
     * @param {PdfField} field Field object.
     * @returns {PdfStateItem} Widget.
     */
    PdfStateItem._load = function (dictionary, crossReference, field) {
        var widget = new PdfStateItem();
        widget._isLoaded = true;
        widget._dictionary = dictionary;
        widget._crossReference = crossReference;
        widget._field = field;
        return widget;
    };
    Object.defineProperty(PdfStateItem.prototype, "checked", {
        /**
         * Gets the flag to indicate whether the field item is checked or not.
         *
         * @returns {boolean} Checked or not.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access check box field
         * let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
         * // Access first item of check box field
         * let item: PdfStateItem = field.itemAt(0) as PdfStateItem;
         * // Gets the flag to indicate whether the field item is checked or not.
         * let checked: boolean = item.checked;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._checkField */ .Gf)(this._dictionary);
        },
        /**
         * Sets the flag to indicate whether the field item is checked or not.
         *
         * @param {boolean} value Checked or not.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access check box field
         * let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
         * // Access first item of check box field
         * let item: PdfStateItem = field.itemAt(0) as PdfStateItem;
         * // Sets the style of the annotation
         * item.checked = true;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this.checked !== value) {
                if (this._field) {
                    this._setCheckedStatus(value);
                    this._field._setAppearance = true;
                }
                this._dictionary.update('AS', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(value ? 'Yes' : 'Off'));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfStateItem.prototype, "style", {
        /**
         * Gets the style of annotation.
         *
         * @returns {PdfCheckBoxStyle} Style of annotation.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access check box field
         * let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
         * // Access first item of check box field
         * let item: PdfStateItem = field.itemAt(0) as PdfStateItem;
         * // Gets the style of the annotation
         * let style: PdfCheckBoxStyle = item.style;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded) {
                var dictionary = this._mkDictionary;
                if (dictionary && dictionary.has('CA')) {
                    this._style = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._stringToStyle */ .RJ)(dictionary.get('CA'));
                }
                else {
                    this._style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCheckBoxStyle */ .P1.check;
                }
            }
            return this._style;
        },
        /**
         * Sets the style of annotation.
         *
         * @param {PdfCheckBoxStyle} value Style of annotation.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Access check box field
         * let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
         * // Access first item of check box field
         * let item: PdfStateItem = field.itemAt(0) as PdfStateItem;
         * // Sets the style of the annotation
         * item.style = PdfCheckBoxStyle.check;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (this.style !== value) {
                this._style = value;
                var dictionary = this._mkDictionary;
                if (!dictionary) {
                    dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    this._dictionary.update('MK', dictionary);
                }
                dictionary.update('CA', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._styleToString */ .Bd)(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfStateItem.prototype._setCheckedStatus = function (value) {
        var check = value;
        var fieldValue = this._getItemValue(this._dictionary);
        this._unCheckOthers(this, fieldValue, value);
        if (check) {
            if (!fieldValue) {
                fieldValue = 'Yes';
            }
            this._field._dictionary.update('V', fieldValue);
            this._dictionary.update('AS', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(fieldValue));
            this._dictionary.update('V', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(fieldValue));
        }
        else if (this._field._dictionary) {
            if (this._field._dictionary.has('V')) {
                var v = this._field._dictionary.get('V');
                if (v && v.name === fieldValue) {
                    delete this._field._dictionary._map.V;
                }
            }
            this._field._dictionary.update('AS', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Off'));
        }
    };
    PdfStateItem.prototype._unCheckOthers = function (child, value, isChecked) {
        if (!this._field._isUpdating) {
            this._field._isUpdating = true;
            var count = this._field.itemsCount;
            for (var i = 0; i < count; ++i) {
                var item = this._field.itemAt(i);
                if (item) {
                    if (item !== child) {
                        item.checked = ((this._getItemValue(item._dictionary) === value) && isChecked);
                    }
                    else if (!item.checked) {
                        item.checked = true;
                    }
                }
            }
        }
    };
    PdfStateItem.prototype._getItemValue = function (dictionary) {
        var itemValue = '';
        if (dictionary && dictionary.has('AS')) {
            var asValue = dictionary.get('AS');
            if (asValue && asValue.name !== 'Off') {
                itemValue = 'Off';
            }
        }
        if (itemValue === '') {
            if (dictionary && dictionary.has('AP')) {
                var apDictionary = dictionary.get('AP');
                if (apDictionary && apDictionary.has('N')) {
                    var normalAppearance = apDictionary.get('N');
                    var keyList_1 = [];
                    normalAppearance.forEach(function (key, value) {
                        keyList_1.push(key);
                    });
                    if (keyList_1.length > 0) {
                        for (var i = 0; i < keyList_1.length; i++) {
                            var key = keyList_1[i];
                            if (key && key !== 'Off') {
                                itemValue = key;
                                break;
                            }
                        }
                    }
                }
            }
        }
        return itemValue;
    };
    PdfStateItem.prototype._doPostProcess = function () {
        var style = this.checked ? _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfCheckFieldState */ .d6.checked : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* ._PdfCheckFieldState */ .d6.unchecked;
        var template = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._getStateTemplate */ .rb)(style, this);
        if (template) {
            var page = this._getPage();
            if (page) {
                var graphics = page.graphics;
                graphics.save();
                if (page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle90) {
                    graphics.translateTransform(graphics._size[0], graphics._size[1]);
                    graphics.rotateTransform(90);
                }
                else if (page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle180) {
                    graphics.translateTransform(graphics._size[0], graphics._size[1]);
                    graphics.rotateTransform(-180);
                }
                else if (page.rotation === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfRotationAngle */ .Gd.angle270) {
                    graphics.translateTransform(graphics._size[0], graphics._size[1]);
                    graphics.rotateTransform(270);
                }
                graphics._sw._setTextRenderingMode(_graphics_pdf_graphics__WEBPACK_IMPORTED_MODULE_6__/* ._TextRenderingMode */ .ET.fill);
                graphics.drawTemplate(template, this.bounds);
                graphics.restore();
            }
        }
        this._dictionary._updated = false;
    };
    PdfStateItem.prototype._postProcess = function (value) {
        var field = this._field;
        if (!value) {
            value = (field && field.checked) ? 'Yes' : 'Off';
        }
        this._dictionary.update('AS', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(value));
    };
    PdfStateItem.prototype._setField = function (field) {
        this._field = field;
        this._field._stringFormat = new _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfStringFormat */ .p(this.textAlignment, _fonts_pdf_string_format__WEBPACK_IMPORTED_MODULE_7__/* .PdfVerticalAlignment */ .K.middle);
        this._field._addToKid(this);
    };
    return PdfStateItem;
}(PdfWidgetAnnotation));

/**
 * `PdfRadioButtonListItem` class represents the radio button field item objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data);
 * // Gets the first page of the document
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Access the PDF form
 * let form: PdfForm = document.form;
 * // Create a new radio button list field
 * let field: PdfRadioButtonListField = new PdfRadioButtonListField(page, 'Age');
 * // Create and add first item
 * let first: PdfRadioButtonListItem = field.add('1-9', {x: 100, y: 140, width: 20, height: 20});
 * // Create and add second item
 * let second: PdfRadioButtonListItem = new PdfRadioButtonListItem('10-49', {x: 100, y: 170, width: 20, height: 20}, page);
 * field.add(second);
 * // Create and add third item
 * let third: PdfRadioButtonListItem = new PdfRadioButtonListItem('50-59', {x: 100, y: 200, width: 20, height: 20}, field);
 * field.add(third);
 * // Sets selected index of the radio button list field
 * field.selectedIndex = 0;
 * // Add the field into PDF form
 * form.add(field);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfRadioButtonListItem = /** @class */ (function (_super) {
    __extends(PdfRadioButtonListItem, _super);
    function PdfRadioButtonListItem(value, bounds, item) {
        var _this = _super.call(this) || this;
        if (item && value && bounds) {
            if (item instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfField */ .LG) {
                _this._initializeItem(value, bounds, item.page, item);
            }
            else {
                _this._initializeItem(value, bounds, item);
            }
        }
        return _this;
    }
    /**
     * Parse an existing item of the field.
     *
     * @private
     * @param {_PdfDictionary} dictionary Widget dictionary.
     * @param {_PdfCrossReference} crossReference PDF cross reference.
     * @param {PdfField} field Field object.
     * @returns {PdfRadioButtonListItem} Widget.
     */
    PdfRadioButtonListItem._load = function (dictionary, crossReference, field) {
        var widget = new PdfRadioButtonListItem();
        widget._isLoaded = true;
        widget._dictionary = dictionary;
        widget._crossReference = crossReference;
        widget._field = field;
        return widget;
    };
    Object.defineProperty(PdfRadioButtonListItem.prototype, "selected", {
        /**
         * Gets the flag to indicate whether the field item is selected or not.
         *
         * @returns {boolean} Selected or not.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Create a new radio button list field
         * let field: PdfRadioButtonListField = new PdfRadioButtonListField(page, 'Age');
         * // Access first list field item
         * let item: PdfRadioButtonListItem = field.itemAt(0);
         * // Gets the flag to indicate whether the field item is selected or not.
         * let selected: boolean = item.selected;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._index === this._field.selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRadioButtonListItem.prototype, "value", {
        /**
         * Gets the value of the radio button list field item
         *
         * @returns {string} Value of the radio button list field item.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Create a new radio button list field
         * let field: PdfRadioButtonListField = new PdfRadioButtonListField(page, 'Age');
         * // Access first list field item
         * let item: PdfRadioButtonListItem = field.itemAt(0);
         * // Gets the value of the radio button list field item
         * let value: string = item.value;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (this._isLoaded && !this._optionValue) {
                this._optionValue = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._getItemValue */ .wo)(this._dictionary);
            }
            return this._optionValue;
        },
        /**
         * Sets the value of the radio button list field item
         *
         * @param {string} option Value of the radio button list field item.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Create a new radio button list field
         * let field: PdfRadioButtonListField = new PdfRadioButtonListField(page, 'Age');
         * // Access first list field item
         * let item: PdfRadioButtonListItem = field.itemAt(0);
         * // Sets the value of the radio button list field item
         * item.value = '1-9';
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (option) {
            this._optionValue = option;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfRadioButtonListItem.prototype, "backColor", {
        /**
         * Gets the back color of the annotation.
         *
         * @returns {number[]} Color as R, G, B color array in between 0 to 255.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfWidgetAnnotation = page.annotations.at(0) as PdfWidgetAnnotation;
         * // Gets the back color of the annotation
         * let backColor: number[] = annotation.backColor;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._parseBackColor();
        },
        /**
         * Sets the back color of the annotation.
         *
         * @param {number[]} value Array with R, G, B, A color values in between 0 to 255. For optional A (0-254), it signifies transparency.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0);
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Access the radio button list field
         * let field: PdfRadioButtonListField = form.fieldAt(0) as PdfRadioButtonListField;
         * // Sets the back color of the radio button list item
         * field.itemAt(0).backColor = [255, 255, 255];
         * // Sets the background color of the field item to transparent
         * field.itemAt(1).backColor = [0, 0, 0, 0];
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            this._updateBackColor(value, true);
        },
        enumerable: true,
        configurable: true
    });
    PdfRadioButtonListItem.prototype._initializeItem = function (value, bounds, page, field) {
        this._optionValue = value;
        this._page = page;
        this._create(this._page, bounds, this._field);
        this.textAlignment = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfTextAlignment */ .P4.left;
        this._dictionary.update('MK', new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference));
        this._mkDictionary.update('BC', [0, 0, 0]);
        this._mkDictionary.update('BG', [1, 1, 1]);
        this.style = _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfCheckBoxStyle */ .P1.circle;
        this._dictionary.update('DA', '/TiRo 0 Tf 0 0 0 rg');
        if (field) {
            this._setField(field);
            this._dictionary.update('Parent', field._ref);
        }
    };
    PdfRadioButtonListItem.prototype._postProcess = function (value) {
        var field = this._field;
        if (!value && field && field.selectedIndex !== -1) {
            value = field.itemAt(field.selectedIndex).value;
        }
        if (this.value === value) {
            this._dictionary.update('AS', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(this.value));
        }
        else {
            this._dictionary.update('AS', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Off'));
        }
    };
    return PdfRadioButtonListItem;
}(PdfStateItem));

/**
 * `PdfListBoxItem` class represents the list and combo box field item objects.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data);
 * // Gets the first page of the document
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Access the PDF form
 * let form: PdfForm = document.form;
 * // Create a new list box field
 * let field: PdfListBoxField = new PdfListBoxField(page, 'list1', {x: 100, y: 60, width: 100, height: 50});
 * // Add list items to the field.
 * field.addItem(new PdfListFieldItem('English', 'English'));
 * field.addItem(new PdfListFieldItem('French', 'French'));
 * field.addItem(new PdfListFieldItem('German', 'German'));
 * // Sets the selected index
 * field.selectedIndex = 2;
 * // Sets the flag indicates whether the list box allows multiple selections.
 * field.multiSelect = true;
 * // Add the field into PDF form
 * form.add(field);
 * // Save the document
 * document.save('output.pdf');
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfListFieldItem = /** @class */ (function (_super) {
    __extends(PdfListFieldItem, _super);
    function PdfListFieldItem(text, value, field) {
        var _this = _super.call(this) || this;
        if (text && value) {
            _this._initializeItem(text, value, field);
        }
        return _this;
    }
    /**
     * Parse an existing item of the field.
     *
     * @private
     * @param {_PdfDictionary} dictionary Widget dictionary.
     * @param {_PdfCrossReference} crossReference PDF cross reference.
     * @param {PdfField} field Field object.
     * @returns {PdfListFieldItem} Widget.
     */
    PdfListFieldItem._load = function (dictionary, crossReference, field) {
        var widget = new PdfListFieldItem();
        widget._isLoaded = true;
        widget._dictionary = dictionary;
        widget._crossReference = crossReference;
        widget._field = field;
        return widget;
    };
    Object.defineProperty(PdfListFieldItem.prototype, "text", {
        /**
         * Gets the text of the annotation.
         *
         * @returns {string} Text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Create a new radio button list field
         * let field: PdfListBoxField = form.fieldAt(0) as PdfListBoxField;
         * // Access first list field item
         * let item: PdfListFieldItem = field.itemAt(0);
         * // Gets the text of the list field item
         * let text: string = item.text;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            if (typeof this._text === 'undefined' &&
                typeof this._field !== 'undefined' &&
                (this._field instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfListBoxField */ .i5 || this._field instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfComboBoxField */ .WT)) {
                this._text = this._field._options[this._index][1];
            }
            return this._text;
        },
        /**
         * Sets the text of the annotation.
         *
         * @param {string} value Text.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Create a new radio button list field
         * let field: PdfListBoxField = form.fieldAt(0) as PdfListBoxField;
         * // Access first list field item
         * let item: PdfListFieldItem = field.itemAt(0);
         * // Sets the text of the list field item
         * item.text = '1-9';
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof value === 'string' &&
                typeof this._field !== 'undefined' &&
                (this._field instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfListBoxField */ .i5 || this._field instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfComboBoxField */ .WT)) {
                if (value !== this._field._options[this._index][1]) {
                    this._field._options[this._index][1] = value;
                    this._text = value;
                    this._field._dictionary._updated = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfListFieldItem.prototype, "selected", {
        /**
         * Gets the flag to indicate whether the field item is selected or not (Read only).
         *
         * @returns {boolean} Selected or not.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data);
         * // Gets the first page of the document
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Access the PDF form
         * let form: PdfForm = document.form;
         * // Create a new radio button list field
         * let field: PdfListBoxField = form.fieldAt(0) as PdfListBoxField;
         * // Access first list field item
         * let item: PdfListFieldItem = field.itemAt(0);
         * // Gets the flag to indicate whether the field item is selected or not.
         * let selected: boolean = item.selected;
         * // Save the document
         * document.save('output.pdf');
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._index === this._field.selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    PdfListFieldItem.prototype._initializeItem = function (text, value, field) {
        this._text = text;
        this._value = value;
        if (field && field instanceof _form_field__WEBPACK_IMPORTED_MODULE_12__/* .PdfListBoxField */ .i5) {
            field._addToOptions(this, field);
        }
    };
    return PdfListFieldItem;
}(PdfStateItem));

/**
 * `PdfAnnotationCaption` class represents the caption text and properties of annotations.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Get the first annotation of the page
 * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
 * // Create and set annotation caption values
 * annotation.caption = new PdfAnnotationCaption(true, PdfLineCaptionType.inline, [10, 10]);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfAnnotationCaption = /** @class */ (function () {
    function PdfAnnotationCaption(cap, type, offset) {
        this._cap = typeof cap !== 'undefined' ? cap : false;
        this._type = typeof type !== 'undefined' ? type : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.inline;
        this._offset = typeof offset !== 'undefined' ? offset : [0, 0];
    }
    Object.defineProperty(PdfAnnotationCaption.prototype, "cap", {
        /**
         * Gets the boolean flag indicating whether annotation has caption or not.
         *
         * @returns {boolean} Caption.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the boolean flag indicating whether annotation has caption or not.
         * let cap: boolean = annotation.caption.cap;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._cap;
        },
        /**
         * Sets the boolean flag indicating whether annotation has caption or not.
         *
         * @param {boolean} value Caption.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the boolean flag indicating whether annotation has caption or not.
         * annotation.caption.cap = true;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._cap) {
                this._cap = value;
                if (this._dictionary) {
                    this._dictionary.update('Cap', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotationCaption.prototype, "type", {
        /**
         * Gets the caption type of the annotation.
         *
         * @returns {PdfLineCaptionType} Caption type.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the caption type of the annotation.
         * let type: PdfLineCaptionType = annotation.caption.type;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the caption type of the annotation.
         *
         * @param {PdfLineCaptionType} value Caption type.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the caption type of the annotation.
         * annotation.caption.type = PdfLineCaptionType.inline;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._type) {
                this._type = value;
                if (this._dictionary) {
                    this._dictionary.update('CP', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get(value === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineCaptionType */ .Fn.top ? 'Top' : 'Inline'));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotationCaption.prototype, "offset", {
        /**
         * Gets the offset position of the annotation.
         *
         * @returns {Array<number>} Caption offset.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the offset position of the annotation.
         * let offset: Array<number>= annotation.caption.offset;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._offset;
        },
        /**
         * Sets the offset position of the annotation.
         *
         * @param {Array<number>} value Caption offset.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Sets the offset position of the annotation.
         * annotation.caption.offset = [10, 10];
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._areNotEqual */ .v_)(value, this._offset)) {
                this._offset = value;
                if (this._dictionary) {
                    this._dictionary.update('CO', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PdfAnnotationCaption;
}());

/**
 * `PdfAnnotationLineEndingStyle` class represents the line ending styles of annotations.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Get the first annotation of the page
 * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
 * // Initializes a new instance of the `PdfAnnotationLineEndingStyle` class.
 * annotation.lineEndingStyle = new PdfAnnotationLineEndingStyle(PdfLineEndingStyle.openArrow, PdfLineEndingStyle.closeArrow);
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfAnnotationLineEndingStyle = /** @class */ (function () {
    function PdfAnnotationLineEndingStyle(begin, end) {
        this._begin = typeof begin !== 'undefined' ? begin : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none;
        this._end = typeof end !== 'undefined' ? end : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfLineEndingStyle */ .n9.none;
    }
    Object.defineProperty(PdfAnnotationLineEndingStyle.prototype, "begin", {
        /**
         * Gets the begin line ending style of the annotation.
         *
         * @returns {PdfLineEndingStyle} Begin line ending style.
         * `PdfAnnotationLineEndingStyle` class represents the line ending styles of annotations.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the begin line ending style of the annotation.
         * let begin: PdfLineEndingStyle = annotation.lineEndingStyle.begin;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._begin;
        },
        /**
         * Sets the begin line ending style of the annotation.
         *
         * @param {PdfLineEndingStyle} value Begin line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Initializes a new instance of the `PdfAnnotationLineEndingStyle` class.
         * let lineEndingStyle = new PdfAnnotationLineEndingStyle();
         * // Sets the begin line ending style of the annotation.
         * lineEndingStyle.begin = PdfLineEndingStyle.openArrow;
         * // Sets the end line ending style of the annotation.
         * lineEndingStyle.end = PdfLineEndingStyle.closeArrow;
         * // Sets the line ending style to the annotation
         * annotation.lineEndingStyle = lineEndingStyle;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._begin) {
                this._begin = value;
                if (this._dictionary) {
                    this._dictionary.update('LE', [_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(value)), _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this._end))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotationLineEndingStyle.prototype, "end", {
        /**
         * Gets the begin line ending style of the annotation.
         *
         * @returns {PdfLineEndingStyle} End line ending style.
         * `PdfAnnotationLineEndingStyle` class represents the line ending styles of annotations.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the end line ending style of the annotation.
         * let end: PdfLineEndingStyle = annotation.lineEndingStyle.end;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._end;
        },
        /**
         * Sets the begin line ending style of the annotation.
         *
         * @param {PdfLineEndingStyle} value End line ending style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Initializes a new instance of the `PdfAnnotationLineEndingStyle` class.
         * let lineEndingStyle = new PdfAnnotationLineEndingStyle();
         * // Sets the begin line ending style of the annotation.
         * lineEndingStyle.begin = PdfLineEndingStyle.openArrow;
         * // Sets the end line ending style of the annotation.
         * lineEndingStyle.end = PdfLineEndingStyle.closeArrow;
         * // Sets the line ending style to the annotation
         * annotation.lineEndingStyle = lineEndingStyle;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._end) {
                this._end = value;
                if (this._dictionary) {
                    this._dictionary.update('LE', [_pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(this._begin)), _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._reverseMapEndingStyle */ .Gt)(value))]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PdfAnnotationLineEndingStyle;
}());

/**
 * `PdfInteractiveBorder` class represents the border of the field.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the PDF form field
 * let field: PdfField = document.form.fieldAt(0);
 * // Gets the width of the field border.
 * let width: number = field.border.width;
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfInteractiveBorder = /** @class */ (function () {
    function PdfInteractiveBorder(width, style, dash) {
        this._width = typeof width !== 'undefined' ? width : 1;
        this._style = typeof style !== 'undefined' ? style : _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.solid;
        if (typeof dash !== 'undefined' && Array.isArray(dash)) {
            this._dash = dash;
        }
    }
    Object.defineProperty(PdfInteractiveBorder.prototype, "width", {
        /**
         * Gets the width of the field border.
         *
         * @returns {number} border width.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the PDF form field
         * let field: PdfField = document.form.fieldAt(0);
         * // Gets the width of the annotation border.
         * let width: number = field.border.width;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._width;
        },
        /**
         * Sets the width of the field border.
         *
         * @param {number} value width.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the PDF form field
         * let field: PdfField = document.form.fieldAt(0);
         * // Initializes a new instance of the `PdfInteractiveBorder` class.
         * let border: PdfInteractiveBorder = new PdfInteractiveBorder();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF form field
         * field.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._width) {
                this._width = value;
                if (this._dictionary) {
                    var bs = this._dictionary.has('BS') ? this._dictionary.get('BS') : new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    bs.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
                    bs.update('W', this._width);
                    bs.update('S', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderStyle */ .rW)(this._style));
                    if (this._dash) {
                        bs.update('D', this._dash);
                    }
                    this._dictionary.update('BS', bs);
                    this._dictionary._updated = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfInteractiveBorder.prototype, "style", {
        /**
         * Gets the border line style of the field border.
         *
         * @returns {PdfBorderStyle} Border style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the PDF form field
         * let field: PdfField = document.form.fieldAt(0);
         * // Gets the border line style of the annotation border.
         * let style: PdfBorderStyle = field.border.style;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._style;
        },
        /**
         * Sets the border line style of the field border.
         *
         * @param {PdfBorderStyle} value Border style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the PDF form field
         * let field: PdfField = document.form.fieldAt(0);
         * // Initializes a new instance of the `PdfInteractiveBorder` class.
         * let border: PdfInteractiveBorder = new PdfInteractiveBorder();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF form field
         * field.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._style) {
                this._style = value;
                if (!this._dash) {
                    if (value === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dot) {
                        this._dash = [1, 1];
                    }
                    else if (value === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderStyle */ .eE.dashed) {
                        this._dash = [3, 1];
                    }
                }
                if (this._dictionary) {
                    var bs = this._dictionary.has('BS') ? this._dictionary.get('BS') : new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    bs.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
                    bs.update('W', this._width);
                    bs.update('S', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderStyle */ .rW)(this._style));
                    if (this._dash) {
                        bs.update('D', this._dash);
                    }
                    this._dictionary.update('BS', bs);
                    this._dictionary._updated = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfInteractiveBorder.prototype, "dash", {
        /**
         * Gets the dash pattern of the field border.
         *
         * @returns {Array<number>} Dash pattern.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the PDF form field
         * let field: PdfField = document.form.fieldAt(0);
         * // Gets the dash pattern of the field border.
         * let dash: Array<number>= field.border.dash;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._dash;
        },
        /**
         * Sets the dash pattern of the field border.
         *
         * @param {Array<number>} value Dash pattern.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the PDF form field
         * let field: PdfField = document.form.fieldAt(0);
         * // Initializes a new instance of the `PdfInteractiveBorder` class.
         * let border: PdfInteractiveBorder = new PdfInteractiveBorder();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF form field
         * field.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (typeof this._dash === 'undefined' || (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._areNotEqual */ .v_)(value, this._dash)) {
                this._dash = value;
                if (this._dictionary) {
                    var bs = this._dictionary.has('BS') ? this._dictionary.get('BS') : new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    bs.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
                    bs.update('W', this._width);
                    bs.update('S', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderStyle */ .rW)(this._style));
                    bs.update('D', this._dash);
                    this._dictionary.update('BS', bs);
                    this._dictionary._updated = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PdfInteractiveBorder;
}());

/**
 * `PdfAnnotationBorder` class represents the border properties of annotations.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Get the first annotation of the page
 * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
 * // Initializes a new instance of the ` PdfAnnotationBorder ` class.
 * let border: PdfAnnotationBorder = new PdfAnnotationBorder ();
 * //Sets the width of the annotation border.
 * border.width = 10;
 * //Sets the style of the annotation border.
 * border.style = PdfBorderStyle.dashed;
 * //Sets the dash pattern of the annotation border.
 * border.dash = [1, 2, 1];
 * // Sets the border to the PDF form field
 * annotation.border = border;
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfAnnotationBorder = /** @class */ (function (_super) {
    __extends(PdfAnnotationBorder, _super);
    function PdfAnnotationBorder(width, hRadius, vRadius, style, dash) {
        var _this = _super.call(this, width, style, dash) || this;
        _this._hRadius = typeof hRadius !== 'undefined' ? hRadius : 0;
        _this._vRadius = typeof vRadius !== 'undefined' ? vRadius : 0;
        return _this;
    }
    Object.defineProperty(PdfAnnotationBorder.prototype, "width", {
        /**
         * Gets the width of the annotation border.
         *
         * @returns {number} border width.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the width of the annotation border.
         * let width: number = annotation.border.width;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._width;
        },
        /**
         * Sets the width of the annotation border.
         *
         * @param {number} value width.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Initializes a new instance of the ` PdfAnnotationBorder ` class.
         * let border: PdfAnnotationBorder = new PdfAnnotationBorder ();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF form field
         * annotation.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._width) {
                this._width = value;
                if (this._dictionary) {
                    this._dictionary.update('Border', [this._hRadius, this._vRadius, this._width]);
                    var bs = this._dictionary.has('BS') ? this._dictionary.get('BS') : new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    bs.update('Type', _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfName */ .TG.get('Border'));
                    bs.update('W', this._width);
                    bs.update('S', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* ._mapBorderStyle */ .rW)(this._style));
                    if (this._dash) {
                        bs.update('D', this._dash);
                    }
                    this._dictionary.update('BS', bs);
                    this._dictionary._updated = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotationBorder.prototype, "hRadius", {
        /**
         * Gets the horizontal radius of the annotation border.
         *
         * @returns {number} horizontal radius.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the horizontal radius of the annotation border.
         * let hRadius: number = annotation.border.hRadius;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._hRadius;
        },
        /**
         * Sets the horizontal radius of the annotation border.
         *
         * @param {number} value horizontal radius.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Initializes a new instance of the ` PdfAnnotationBorder ` class.
         * let border: PdfAnnotationBorder = new PdfAnnotationBorder ();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * // Sets the horizontal radius of the annotation border.
         * border.hRadius = 2;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF form field
         * annotation.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._hRadius) {
                this._hRadius = value;
                if (this._dictionary) {
                    this._dictionary.update('Border', [this._hRadius, this._vRadius, this._width]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfAnnotationBorder.prototype, "vRadius", {
        /**
         * Gets the vertical radius of the annotation border.
         *
         * @returns {number} vertical radius.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Gets the vertical radius of the annotation border.
         * let vRadius: number = annotation.border.vRadius;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._vRadius;
        },
        /**
         * Sets the vertical radius of the annotation border.
         *
         * @param {number} value vertical radius.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
         * // Initializes a new instance of the ` PdfAnnotationBorder ` class.
         * let border: PdfAnnotationBorder = new PdfAnnotationBorder ();
         * //Sets the width of the annotation border.
         * border.width = 10;
         * // Sets the vertical radius of the annotation border.
         * border.vRadius = 2;
         * //Sets the style of the annotation border.
         * border.style = PdfBorderStyle.dashed;
         * //Sets the dash pattern of the annotation border.
         * border.dash = [1, 2, 1];
         * // Sets the border to the PDF form field
         * annotation.border = border;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._vRadius) {
                this._vRadius = value;
                if (this._dictionary) {
                    this._dictionary.update('Border', [this._hRadius, this._vRadius, this._width]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PdfAnnotationBorder;
}(PdfInteractiveBorder));

/**
 * `PdfBorderEffect` class represents the border effects of annotations.
 * ```typescript
 * // Load an existing PDF document
 * let document: PdfDocument = new PdfDocument(data, password);
 * // Get the first page
 * let page: PdfPage = document.getPage(0) as PdfPage;
 * // Get the first annotation of the page
 * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
 * // Initializes a new instance of the `PdfBorderEffect` class.
 * let borderEffect: PdfBorderEffect = new PdfBorderEffect();
 * // Sets the intensity of the annotation border.
 * borderEffect.intensity = 2;
 * // Sets the effect style of the annotation border.
 * borderEffect.style = PdfBorderEffectStyle.cloudy;
 * // Sets border effect to the annotation.
 * annotation.borderEffect = borderEffect;
 * // Destroy the document
 * document.destroy();
 * ```
 */
var PdfBorderEffect = /** @class */ (function () {
    function PdfBorderEffect(dictionary) {
        this._intensity = 0;
        if (typeof dictionary !== 'undefined' && dictionary !== null) {
            if (dictionary.has('BE')) {
                var borderEffect = this._dictionary.get('BE');
                if (borderEffect) {
                    if (borderEffect.has('I')) {
                        this._intensity = borderEffect.get('I');
                    }
                    if (borderEffect.has('S')) {
                        this._style = this._getBorderEffect(borderEffect.get('S'));
                    }
                }
            }
        }
        else {
            this._dictionary = new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP();
            this._dictionary.set('I', this._intensity);
            this._dictionary.set('S', this._styleToEffect(this._style));
        }
    }
    Object.defineProperty(PdfBorderEffect.prototype, "intensity", {
        /**
         * Gets the intensity of the annotation border.
         *
         * @returns {number} intensity.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Gets the intensity of the annotation border.
         * let intensity: number = annotation.borderEffect.intensity;
         * // Gets the effect style of the annotation border.
         * let style: PdfBorderEffectStyle = annotation.borderEffect.style;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._intensity;
        },
        /**
         * Sets the intensity of the annotation border.
         *
         * @param {number} value intensity.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Initializes a new instance of the `PdfBorderEffect` class.
         * let borderEffect: PdfBorderEffect = new PdfBorderEffect();
         * // Sets the intensity of the annotation border.
         * borderEffect.intensity = 2;
         * // Sets the effect style of the annotation border.
         * borderEffect.style = PdfBorderEffectStyle.cloudy;
         * // Sets border effect to the annotation.
         * annotation.borderEffect = borderEffect;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._intensity) {
                this._intensity = value;
                if (this._dictionary) {
                    var bs = this._dictionary.has('BE') ? this._dictionary.get('BE') : new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    bs.update('I', this._intensity);
                    bs.update('S', this._styleToEffect(this._style));
                    this._dictionary.update('BE', bs);
                    this._dictionary._updated = true;
                }
                this._dictionary._updated = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdfBorderEffect.prototype, "style", {
        /**
         * Gets the effect style of the annotation border.
         *
         * @returns {PdfBorderEffectStyle} effect style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Gets the intensity of the annotation border.
         * let intensity: number = annotation.borderEffect.intensity;
         * // Gets the effect style of the annotation border.
         * let style: PdfBorderEffectStyle = annotation.borderEffect.style;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        get: function () {
            return this._style;
        },
        /**
         * Sets the effect style of the annotation border.
         *
         * @param {PdfBorderEffectStyle} value effect style.
         * ```typescript
         * // Load an existing PDF document
         * let document: PdfDocument = new PdfDocument(data, password);
         * // Get the first page
         * let page: PdfPage = document.getPage(0) as PdfPage;
         * // Get the first annotation of the page
         * let annotation: PdfSquareAnnotation = page.annotations.at(0) as PdfSquareAnnotation;
         * // Initializes a new instance of the `PdfBorderEffect` class.
         * let borderEffect: PdfBorderEffect = new PdfBorderEffect();
         * // Sets the intensity of the annotation border.
         * borderEffect.intensity = 2;
         * // Sets the effect style of the annotation border.
         * borderEffect.style = PdfBorderEffectStyle.cloudy;
         * // Sets border effect to the annotation.
         * annotation.borderEffect = borderEffect;
         * // Destroy the document
         * document.destroy();
         * ```
         */
        set: function (value) {
            if (value !== this._style) {
                this._style = value;
                if (this._dictionary) {
                    var bs = this._dictionary.has('BE') ?
                        this._dictionary.get('BE') :
                        new _pdf_primitives__WEBPACK_IMPORTED_MODULE_2__/* ._PdfDictionary */ .sP(this._crossReference);
                    bs.update('I', this._intensity);
                    bs.update('S', this._styleToEffect(this._style));
                    this._dictionary.update('BE', bs);
                    this._dictionary._updated = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfBorderEffect.prototype._getBorderEffect = function (value) {
        if (value === '/C') {
            return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy;
        }
        else {
            return _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.solid;
        }
    };
    PdfBorderEffect.prototype._styleToEffect = function (value) {
        if (value === _enumerator__WEBPACK_IMPORTED_MODULE_1__/* .PdfBorderEffectStyle */ .fO.cloudy) {
            return 'C';
        }
        else {
            return 'S';
        }
    };
    return PdfBorderEffect;
}());

var _PaintParameter = /** @class */ (function () {
    function _PaintParameter() {
        this.borderWidth = 1;
    }
    return _PaintParameter;
}());

var _CloudStyleArc = /** @class */ (function () {
    function _CloudStyleArc() {
        this.startAngle = 0;
        this.endAngle = 0;
    }
    return _CloudStyleArc;
}());


/***/ })

}]);
//# sourceMappingURL=ae28dda3-f14cb3f2b334af6e.js.map