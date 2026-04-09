"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7768],{

/***/ 41996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Drawing)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24149);
/* harmony import */ var _pdf_annotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89110);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26212);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6956);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12909);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75443);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9444);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54345);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63037);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74339);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80206);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74904);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89590);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73468);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62291);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41437);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3547);
/* harmony import */ var _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32485);
/* harmony import */ var _drawing_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38819);
/* harmony import */ var _connector_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60460);
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6841);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52370);















/**
 * Renderer module is used to render basic diagram elements
 *
 * @hidden
 */
var Drawing = /** @class */ (function () {
    function Drawing(viewer) {
        this.isDynamicStamps = false;
        /**
         * @private
         */
        this.copiedElementID = '';
        /**
         * @private
         */
        this.isPasted = false;
        this.pdfViewer = viewer;
        this.renderer = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_1__/* .DrawingRenderer */ .Y('this.pdfViewer.element.id', false);
        this.svgRenderer = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_2__/* .SvgRenderer */ .ul();
    }
    /**
     * @private
     * @param {PdfViewer} viewer - Specified the pdfViewer element.
     * @returns {void}
     */
    Drawing.prototype.renderLabels = function (viewer) {
        var annotations = viewer.annotations;
        if (annotations) {
            for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[parseInt(i.toString(), 10)];
                this.initObject(annotation);
            }
        }
    };
    Drawing.prototype.createNewZindexTable = function (pageId) {
        var zIndexTable = new _pdf_annotation__WEBPACK_IMPORTED_MODULE_3__/* .ZOrderPageTable */ .cX();
        this.pdfViewer.zIndex++;
        zIndexTable.pageId = this.pdfViewer.zIndex;
        this.pdfViewer.zIndexTable.push(zIndexTable);
        return zIndexTable;
    };
    /**
     * @private
     * @param {number} pageId - Specified the page Id.
     * @returns {ZOrderPageTable} - Returns the ZOrder page table.
     */
    Drawing.prototype.getPageTable = function (pageId) {
        var zIndexTable;
        if (this.pdfViewer.zIndexTable.length !== undefined) {
            var notFound = true;
            for (var i = 0; i < this.pdfViewer.zIndexTable.length; i++) {
                if (this.pdfViewer.zIndexTable[parseInt(i.toString(), 10)].pageId === pageId) {
                    notFound = false;
                    zIndexTable = this.pdfViewer.zIndexTable[parseInt(i.toString(), 10)];
                    break;
                }
            }
            if (notFound) {
                zIndexTable = this.createNewZindexTable(pageId);
                zIndexTable.pageId = pageId;
            }
        }
        else {
            zIndexTable = this.createNewZindexTable(pageId);
        }
        return zIndexTable;
    };
    /**
     * @private
     * @param {number} index - Specified the page index value.
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @returns {void}
     */
    Drawing.prototype.setZIndex = function (index, obj) {
        if (obj.pageIndex !== undefined) {
            var pageTable = this.getPageTable(obj.pageIndex);
            var ispageobject = false;
            if (obj.shapeAnnotationType !== 'Polygon') {
                for (var i = 0; i < pageTable.objects.length; i++) {
                    if (obj.id === pageTable.objects[parseInt(i.toString(), 10)].id) {
                        pageTable.objects.splice(parseInt(i.toString(), 10), 1);
                        pageTable.objects.splice(parseInt(i.toString(), 10), 0, obj);
                        ispageobject = true;
                        break;
                    }
                }
            }
            if (!ispageobject) {
                if (obj.zIndex === -1) {
                    pageTable.zIndex++;
                    obj.zIndex = pageTable.zIndex;
                    pageTable.objects.push(obj);
                }
                else {
                    var tabelLength = pageTable.objects.length;
                    obj.zIndex = tabelLength++;
                    pageTable.objects.push(obj);
                }
            }
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel | PdfFormFieldBaseModel} obj - Specified the annotation object.
     * @returns {PdfAnnotationBaseModel | PdfFormFieldBaseModel} - Returns the annotaion or form fields model.
     */
    Drawing.prototype.initObject = function (obj) {
        //Move the common properties like zindex and id to an abstract class
        this.setZIndex(this.pdfViewer.zIndex, obj);
        (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_4__/* .createMeasureElements */ .qh)();
        if (!(0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLineShapes */ .nf)(obj)) {
            this.initNode(obj);
        }
        else {
            this.initLine(obj);
            obj.wrapper.measure(new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__/* .Size */ .o(undefined, undefined));
            obj.wrapper.arrange(obj.wrapper.desiredSize);
        }
        if (obj.wrapper === null) {
            //Init default wrapper
        }
        this.pdfViewer.nameTable[obj.id] = obj;
        //Add some methodologies to add the children of group to name table
        return obj;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @returns {void}
     */
    Drawing.prototype.initNode = function (obj) {
        var canvas = this.initContainer(obj);
        var content;
        if (!canvas.children) {
            canvas.children = [];
        }
        if (!content) {
            content = this.init(obj, canvas);
        }
        //canvas.children.push(content);
        canvas.rotateAngle = obj.rotateAngle;
        canvas.measure(new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__/* .Size */ .o(obj.wrapper.width, obj.wrapper.height));
        canvas.arrange(canvas.desiredSize);
        if (this.isDynamicStamps) {
            this.pdfViewer.annotation.stampAnnotationModule.updateSessionStorage(obj, null, 'dynamicStamp');
            this.isDynamicStamps = false;
        }
    };
    /**
     * Allows to initialize the UI of a node
     */
    /**
     * @private
     * @param {PdfAnnotationBaseModel | PdfFormFieldBaseModel} obj - Specified the annotation object.
     * @param {Container} canvas - Specified the canvas element.
     * @returns {DrawingElement} - Returns the drawing element.
     */
    Drawing.prototype.init = function (obj, canvas) {
        var content;
        content = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
        var pathContent;
        var basicElement;
        var isStamp = false;
        var annotationSettings = this.pdfViewer.annotationModule ? this.pdfViewer.annotationModule.findAnnotationSettings(obj) : {};
        var annotationMaxHeight = 0;
        var annotationMaxWidth = 0;
        var annotationMinHeight = 0;
        var annotationMinWidth = 0;
        if (annotationSettings.minWidth || annotationSettings.maxWidth || annotationSettings.minHeight || annotationSettings.maxHeight) {
            annotationMaxHeight = annotationSettings.maxHeight ? annotationSettings.maxHeight : 2000;
            annotationMaxWidth = annotationSettings.maxWidth ? annotationSettings.maxWidth : 2000;
            annotationMinHeight = annotationSettings.minHeight ? annotationSettings.minHeight : 0;
            annotationMinWidth = annotationSettings.minWidth ? annotationSettings.minWidth : 0;
        }
        var isAnnotationSet = false;
        if (annotationMinHeight || annotationMinWidth || annotationMaxHeight || annotationMaxWidth) {
            isAnnotationSet = true;
        }
        if (obj.formFieldAnnotationType) {
            content = this.initFormFields(obj, content, canvas);
        }
        else {
            content = this.initAnnotationObject(obj, pathContent, content, canvas, isStamp, basicElement, isAnnotationSet, annotationMaxHeight, annotationMaxWidth, annotationMinWidth, annotationMinHeight);
        }
        content.id = obj.id + '_content';
        content.relativeMode = 'Object';
        if (obj.shapeAnnotationType !== 'Stamp') {
            if (obj.bounds.width !== undefined) {
                content.width = obj.bounds.width;
                if (isAnnotationSet) {
                    if ((content.width < annotationMinWidth) || (content.width > annotationMaxWidth)) {
                        if (content.width < annotationMinWidth) {
                            content.width = annotationMinWidth;
                        }
                        if (content.width > annotationMaxWidth) {
                            content.width = annotationMaxWidth;
                        }
                    }
                }
            }
            content.horizontalAlignment = 'Stretch';
            if (obj.bounds.height !== undefined) {
                content.height = obj.bounds.height;
                if (isAnnotationSet) {
                    if ((content.height < annotationMinHeight) || (content.width > annotationMaxHeight)) {
                        if (content.height < annotationMinHeight) {
                            content.height = annotationMinHeight;
                        }
                        if (content.height > annotationMaxHeight) {
                            content.height = annotationMaxHeight;
                        }
                    }
                }
            }
            (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, content);
            if (this.pdfViewer.viewerBase.drawSignatureWithTool && obj.shapeAnnotationType === 'SignatureText') {
                content.style.strokeWidth = 0;
            }
        }
        content.isRectElement = true;
        content.verticalAlignment = 'Stretch';
        return content;
    };
    Drawing.prototype.initFormFields = function (obj, content, canvas) {
        switch (obj.formFieldAnnotationType) {
            case 'Textbox':
            case 'PasswordField':
            case 'Checkbox':
            case 'RadioButton':
            case 'DropdownList':
            case 'ListBox':
            case 'SignatureField':
            case 'InitialField': {
                var htmlContent = new _html_element__WEBPACK_IMPORTED_MODULE_8__/* .DiagramHtmlElement */ .d();
                content = htmlContent;
                content.id = obj.id + '_content';
                canvas.children.push(content);
                break;
            }
        }
        return content;
    };
    Drawing.prototype.initAnnotationObject = function (obj, pathContent, content, canvas, isStamp, basicElement, isAnnotationSet, annotationMaxHeight, annotationMaxWidth, annotationMinWidth, annotationMinHeight) {
        switch (obj.shapeAnnotationType) {
            case 'Ellipse':
                pathContent = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                pathContent.data = 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
                    'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z';
                content = pathContent;
                canvas.children.push(content);
                if (obj.enableShapeLabel) {
                    var textLabel = this.textElement(obj);
                    textLabel.content = obj.labelContent;
                    textLabel.style.color = obj.fontColor;
                    textLabel.style.strokeColor = obj.labelBorderColor;
                    textLabel.style.fill = obj.labelFillColor;
                    textLabel.style.fontSize = obj.fontSize;
                    textLabel.style.fontFamily = obj.fontFamily;
                    textLabel.style.opacity = obj.labelOpacity;
                    canvas.children.push(textLabel);
                }
                break;
            case 'Path':
                pathContent = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                pathContent.data = obj.data;
                content = pathContent;
                canvas.children.push(content);
                break;
            case 'HandWrittenSignature':
            case 'Ink':
                pathContent = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                pathContent.data = obj.data;
                pathContent.style.strokeColor = obj.strokeColor;
                pathContent.style.strokeWidth = obj.thickness;
                pathContent.style.opacity = obj.opacity;
                content = pathContent;
                canvas.children.push(content);
                break;
            case 'Polygon':
                pathContent = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                pathContent.data = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getPolygonPath */ .Ul)(obj.vertexPoints);
                content = pathContent;
                canvas.children.push(content);
                break;
            case 'Stamp':
                isStamp = true;
                this.isDynamicStamps = true;
                if (obj && obj.annotationAddMode && (obj.annotationAddMode === 'Existing Annotation' || obj.annotationAddMode === 'Imported Annotation')) {
                    obj.bounds.width = obj.bounds.width - 20;
                    obj.bounds.height = obj.bounds.height - 20;
                }
                if (obj.isDynamicStamp) {
                    canvas.horizontalAlignment = 'Left';
                    basicElement = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                    content = basicElement;
                    content.cornerRadius = 10;
                    content.style.fill = obj.stampFillColor;
                    content.style.strokeColor = obj.stampStrokeColor;
                    canvas.children.push(content);
                    var textele = this.textElement(obj);
                    textele = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__/* .TextElement */ .S();
                    textele.style.fontFamily = 'Helvetica';
                    textele.style.fontSize = 14;
                    textele.style.italic = true;
                    textele.style.bold = true;
                    textele.style.color = obj.fillColor;
                    textele.rotateValue = undefined;
                    textele.content = obj.dynamicText;
                    textele.relativeMode = 'Point';
                    textele.margin.left = 10;
                    textele.margin.bottom = -7;
                    textele.setOffsetWithRespectToBounds(0, 0.57, null);
                    textele.relativeMode = 'Point';
                    if (obj.annotationAddMode === 'Existing Annotation' || obj.annotationAddMode === 'Imported Annotation') {
                        textele.style.fontSize = this.fontSizeCalculation(obj, textele, obj.bounds.width - 10);
                    }
                    canvas.children.push(textele);
                    var pathContent1 = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                    pathContent1.id = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)() + '_stamp';
                    pathContent1.data = obj.data;
                    pathContent1.width = obj.bounds.width;
                    if (isAnnotationSet && (obj.bounds.width > annotationMaxWidth)) {
                        pathContent1.width = annotationMaxWidth;
                        obj.bounds.width = annotationMaxWidth;
                    }
                    pathContent1.height = obj.bounds.height / 2;
                    if (isAnnotationSet && (obj.bounds.height > annotationMaxHeight)) {
                        pathContent1.height = annotationMaxHeight / 2;
                        obj.bounds.height = annotationMaxHeight / 2;
                    }
                    pathContent1.rotateValue = undefined;
                    pathContent1.margin.left = 10;
                    pathContent1.margin.bottom = -5;
                    pathContent1.relativeMode = 'Point';
                    pathContent1.setOffsetWithRespectToBounds(0, 0.1, null);
                    var content1 = pathContent1;
                    pathContent1.style.fill = obj.fillColor;
                    pathContent1.style.strokeColor = obj.strokeColor;
                    pathContent1.style.opacity = obj.opacity;
                    content.width = obj.bounds.width + 20;
                    content.height = obj.bounds.height + 20;
                    content.style.opacity = obj.opacity;
                    canvas.children.push(content1);
                }
                else {
                    canvas.horizontalAlignment = 'Left';
                    basicElement = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                    content = basicElement;
                    content.cornerRadius = 10;
                    content.style.fill = obj.stampFillColor;
                    content.style.strokeColor = obj.stampStrokeColor;
                    canvas.children.push(content);
                    var pathContent1 = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                    pathContent1.id = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)() + '_stamp';
                    pathContent1.data = obj.data;
                    pathContent1.width = obj.bounds.width;
                    if (isAnnotationSet && (obj.bounds.width > annotationMaxWidth)) {
                        pathContent1.width = annotationMaxWidth;
                        obj.bounds.width = annotationMaxWidth;
                    }
                    pathContent1.height = obj.bounds.height;
                    if (isAnnotationSet && (obj.bounds.height > annotationMaxHeight)) {
                        pathContent1.height = annotationMaxHeight;
                        obj.bounds.height = annotationMaxHeight;
                    }
                    pathContent1.minWidth = pathContent1.width / 2;
                    pathContent1.minHeight = pathContent1.height / 2;
                    var content1 = pathContent1;
                    pathContent1.style.fill = obj.fillColor;
                    pathContent1.style.strokeColor = obj.strokeColor;
                    pathContent1.style.opacity = obj.opacity;
                    content.width = obj.bounds.width + 20;
                    content.height = obj.bounds.height + 20;
                    content.minWidth = pathContent1.width / 2;
                    content.minHeight = pathContent1.height / 2;
                    content.style.opacity = obj.opacity;
                    canvas.children.push(content1);
                    canvas.minHeight = content.minHeight + 20;
                    canvas.minWidth = content.minWidth + 20;
                }
                break;
            case 'Image':
            case 'SignatureImage': {
                var pathContent11 = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_13__/* .ImageElement */ .C();
                pathContent11.source = obj.data;
                content = pathContent11;
                content.style.strokeWidth = 0;
                canvas.children.push(content);
                break;
            }
            case 'Rectangle':
                basicElement = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                content = basicElement;
                canvas.children.push(content);
                if (obj.enableShapeLabel) {
                    var textLabel = this.textElement(obj);
                    textLabel.content = obj.labelContent;
                    textLabel.style.color = obj.fontColor;
                    textLabel.style.strokeColor = obj.labelBorderColor;
                    textLabel.style.fill = obj.labelFillColor;
                    textLabel.style.fontSize = obj.fontSize;
                    textLabel.style.fontFamily = obj.fontFamily;
                    textLabel.style.opacity = obj.labelOpacity;
                    canvas.children.push(textLabel);
                }
                break;
            case 'Perimeter': {
                pathContent = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                pathContent.data = 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
                    'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z';
                content = pathContent;
                (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, pathContent);
                canvas.children.push(content);
                basicElement = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                basicElement.id = 'perimeter_' + (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
                basicElement.height = .2;
                basicElement.width = .2;
                basicElement.transform = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .RotateTransform */ .kA.Self;
                basicElement.horizontalAlignment = 'Stretch';
                this.setNodePosition(basicElement, obj);
                basicElement.rotateAngle = obj.rotateAngle;
                (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, basicElement);
                canvas.children.push(basicElement);
                var textele = this.textElement(obj);
                textele = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__/* .TextElement */ .S();
                textele.content = textele.content = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .findPointsLength */ .bj)([
                    { x: obj.bounds.x, y: obj.bounds.y },
                    { x: obj.bounds.x + obj.bounds.width, y: obj.bounds.y + obj.bounds.height }
                ]).toString();
                textele.rotateValue = { y: -10, angle: obj.rotateAngle };
                canvas.children.push(textele);
                break;
            }
            case 'Radius': {
                pathContent = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
                pathContent.data = 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
                    'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z';
                content = pathContent;
                (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, pathContent);
                canvas.children.push(content);
                basicElement = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                basicElement.id = 'radius_' + (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
                basicElement.height = .2;
                basicElement.width = obj.bounds.width / 2;
                basicElement.transform = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .RotateTransform */ .kA.Self;
                this.setNodePosition(basicElement, obj);
                basicElement.rotateAngle = obj.rotateAngle;
                (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, basicElement);
                canvas.children.push(basicElement);
                var radiusTextEle = this.textElement(obj);
                if (obj.enableShapeLabel) {
                    radiusTextEle.style.color = obj.fontColor;
                    radiusTextEle.style.strokeColor = obj.labelBorderColor;
                    radiusTextEle.style.fill = obj.labelFillColor;
                    radiusTextEle.style.fontSize = obj.fontSize;
                    radiusTextEle.style.fontFamily = obj.fontFamily;
                    radiusTextEle.style.opacity = obj.labelOpacity;
                }
                var length_1 = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .findPointsLength */ .bj)([
                    { x: obj.bounds.x, y: obj.bounds.y },
                    { x: obj.bounds.x + obj.bounds.width, y: obj.bounds.y + obj.bounds.height }
                ]);
                if (!this.pdfViewer.enableImportAnnotationMeasurement && obj.notes && obj.notes !== '') {
                    radiusTextEle.content = obj.notes;
                }
                else {
                    radiusTextEle.content = this.pdfViewer.annotation.measureAnnotationModule.setConversion((obj.bounds.width / 2) *
                        this.pdfViewer.annotation.measureAnnotationModule.pixelToPointFactor, obj);
                }
                radiusTextEle.rotateValue = { y: -10, x: obj.bounds.width / 4, angle: obj.rotateAngle };
                canvas.children.push(radiusTextEle);
                break;
            }
            case 'StickyNotes': {
                var pathContent2 = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_13__/* .ImageElement */ .C();
                pathContent2.source = obj.data;
                pathContent2.width = obj.bounds.width;
                pathContent2.height = obj.bounds.height;
                pathContent2.style.strokeColor = obj.strokeColor;
                pathContent2.style.strokeWidth = 0;
                content = pathContent2;
                canvas.children.push(content);
                break;
            }
            case 'SignatureText': {
                var rectElements = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                rectElements.style.strokeWidth = 0;
                content = rectElements;
                content.style.strokeWidth = 0;
                canvas.style.strokeWidth = 0;
                canvas.children.push(content);
                var signatureText = this.textElement(obj);
                signatureText.style.fontFamily = obj.fontFamily;
                signatureText.style.fontSize = obj.fontSize;
                signatureText.style.textAlign = 'Left';
                signatureText.rotateValue = undefined;
                signatureText.content = obj.data;
                signatureText.style.strokeWidth = 0;
                canvas.children.push(signatureText);
                break;
            }
            case 'FreeText': {
                var rectElement = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_7__/* .DrawingElement */ .z();
                content = rectElement;
                canvas.children.push(content);
                var freeTextEle = this.textElement(obj);
                freeTextEle = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__/* .TextElement */ .S();
                freeTextEle.style.fontFamily = obj.fontFamily;
                freeTextEle.style.fontSize = obj.fontSize;
                freeTextEle.style.textAlign = 'Left';
                if (obj.textAlign.toLowerCase() === 'center') {
                    freeTextEle.style.textAlign = 'Center';
                }
                else if (obj.textAlign.toLowerCase() === 'right') {
                    freeTextEle.style.textAlign = 'Right';
                }
                else if (obj.textAlign.toLowerCase() === 'justify') {
                    freeTextEle.style.textAlign = 'Justify';
                }
                freeTextEle.style.color = obj.fontColor;
                freeTextEle.style.bold = obj.font.isBold;
                freeTextEle.style.italic = obj.font.isItalic;
                if (obj.font.isUnderline === true) {
                    freeTextEle.style.textDecoration = 'Underline';
                }
                else if (obj.font.isStrikeout === true) {
                    freeTextEle.style.textDecoration = 'LineThrough';
                }
                freeTextEle.rotateValue = undefined;
                freeTextEle.content = obj.dynamicText;
                freeTextEle.style.opacity = obj.opacity;
                freeTextEle.margin.left = 4;
                freeTextEle.margin.right = 5;
                freeTextEle.margin.top = 5 * (obj.fontSize / 16);
                if (this.pdfViewer.freeTextSettings.enableAutoFit) {
                    freeTextEle.style.textWrapping = 'Wrap';
                }
                else {
                    freeTextEle.style.textWrapping = 'WrapWithOverflow';
                }
                freeTextEle.relativeMode = 'Point';
                freeTextEle.setOffsetWithRespectToBounds(0, 0, null);
                freeTextEle.relativeMode = 'Point';
                canvas.children.push(freeTextEle);
                break;
            }
        }
        content.id = obj.id + '_content';
        content.relativeMode = 'Object';
        if (!isStamp) {
            if (obj.bounds.width !== undefined) {
                content.width = obj.bounds.width;
                if (isAnnotationSet) {
                    if ((content.width < annotationMinWidth) || (content.width > annotationMaxWidth)) {
                        if (content.width < annotationMinWidth) {
                            content.width = annotationMinWidth;
                        }
                        if (content.width > annotationMaxWidth) {
                            content.width = annotationMaxWidth;
                        }
                    }
                }
            }
            content.horizontalAlignment = 'Stretch';
            if (obj.bounds.height !== undefined) {
                content.height = obj.bounds.height;
                if (isAnnotationSet) {
                    if ((content.height < annotationMinHeight) || (content.width > annotationMaxHeight)) {
                        if (content.height < annotationMinHeight) {
                            content.height = annotationMinHeight;
                        }
                        if (content.height > annotationMaxHeight) {
                            content.height = annotationMaxHeight;
                        }
                    }
                }
            }
            (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, content);
        }
        content.isRectElement = true;
        content.verticalAlignment = 'Stretch';
        return content;
    };
    Drawing.prototype.textElement = function (obj) {
        var textele = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__/* .TextElement */ .S();
        (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, textele);
        textele.horizontalAlignment = 'Center';
        textele.verticalAlignment = obj.shapeAnnotationType === 'SignatureText' ? 'Center' : 'Top';
        textele.relativeMode = 'Object';
        textele.setOffsetWithRespectToBounds(.5, .5, 'Absolute');
        return textele;
    };
    /**
     * @private
     * @param {DrawingElement} obj - Specified the drawing element.
     * @param {PdfAnnotationBaseModel} node - Specified the node element.
     * @returns {void}
     */
    Drawing.prototype.setNodePosition = function (obj, node) {
        if (node.shapeAnnotationType === 'Perimeter') {
            obj.offsetX = node.bounds.x + node.bounds.width / 2;
            obj.offsetY = node.bounds.y + node.bounds.height / 2;
        }
        else if (node.shapeAnnotationType === 'Radius') {
            var trasPoint = { x: node.bounds.x + (node.bounds.width / 2) +
                    (node.bounds.width / 4), y: node.bounds.y + (node.bounds.height / 2) };
            var center = { x: (node.bounds.x + (node.bounds.width / 2)), y: (node.bounds.y + (node.bounds.height / 2)) };
            var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, node.rotateAngle, center.x, center.y);
            var rotatedPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, trasPoint);
            var newPoint1 = { x: rotatedPoint.x, y: rotatedPoint.y };
            obj.offsetX = newPoint1.x;
            obj.offsetY = newPoint1.y;
            obj.width = node.bounds.width / 2;
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @returns {Container} - Returns the container element.
     */
    Drawing.prototype.initContainer = function (obj) {
        if (!obj.id) {
            obj.id = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
        }
        // Creates canvas element
        var canvas = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_16__/* .Canvas */ .H();
        canvas.id = obj.id;
        canvas.offsetX = obj.bounds.x + (obj.bounds.width * 0.5);
        canvas.offsetY = obj.bounds.y + (obj.bounds.height * 0.5);
        canvas.style.fill = 'transparent';
        canvas.style.strokeColor = 'transparent';
        canvas.rotateAngle = obj.rotateAngle;
        obj.wrapper = canvas;
        return canvas;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @returns {Canvas} - Returns the canvas element.
     */
    Drawing.prototype.initLine = function (obj) {
        if (!obj.id) {
            obj.id = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
        }
        var container = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_16__/* .Canvas */ .H();
        var segment = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
        segment.id = obj.id + '_path';
        var srcDecorator = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
        var targetDecorator = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a();
        if (obj.vertexPoints.length) {
            obj.sourcePoint = obj.vertexPoints[0];
            obj.targetPoint = obj.vertexPoints[obj.vertexPoints.length - 1];
            for (var i = 0; i < obj.vertexPoints.length; i++) {
                if (i !== 0 && i !== obj.vertexPoints.length - 1) {
                    obj.segments.push(obj.vertexPoints[parseInt(i.toString(), 10)]);
                }
            }
        }
        segment = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getSegmentElement */ .cT)(obj, segment);
        var points = [];
        points = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getConnectorPoints */ .Pv)(obj);
        //  points = this.clipDecorators(this, points);
        var leaders = [];
        var labels = [];
        if (obj.shapeAnnotationType === 'Distance') {
            leaders = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .initLeaders */ .nu)(obj, points);
            labels = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .initDistanceLabel */ .E)(obj, points, this.pdfViewer.annotation.measureAnnotationModule, this.pdfViewer);
        }
        if ((obj.shapeAnnotationType === 'Line' || obj.shapeAnnotationType === 'LineWidthArrowHead') && obj.measureType === 'Perimeter') {
            labels = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .initPerimeterLabel */ .qo)(obj, points, this.pdfViewer.annotation.measureAnnotationModule, this.pdfViewer);
        }
        if (obj.enableShapeLabel === true && !(obj.shapeAnnotationType === 'Distance') && !(obj.measureType === 'Perimeter')) {
            var angle = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_17__/* .Point */ .b.findAngle(points[0], points[1]);
            var textele = this.textElement(obj);
            textele.id = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
            if (!this.pdfViewer.enableImportAnnotationMeasurement && obj.notes && obj.notes !== '') {
                textele.content = obj.notes;
            }
            else {
                textele.content = obj.labelContent;
            }
            textele.style.strokeColor = obj.labelBorderColor;
            textele.style.fill = obj.labelFillColor;
            textele.style.fontSize = obj.fontSize;
            textele.style.color = obj.fontColor;
            textele.style.fontFamily = obj.fontFamily;
            textele.style.opacity = obj.labelOpacity;
            textele.rotateValue = { y: -10, angle: angle };
            labels.push(textele);
        }
        points = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .clipDecorators */ .ZM)(obj, points);
        var bounds = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_18__/* .Rect */ .r.toBounds(points);
        container.width = bounds.width;
        container.height = bounds.height;
        container.offsetX = bounds.x + container.pivot.x * bounds.width;
        container.offsetY = bounds.y + container.pivot.y * bounds.height;
        var anglePoints = obj.vertexPoints;
        if (obj.shapeAnnotationType === 'Line' || obj.shapeAnnotationType === 'LineWidthArrowHead' || obj.shapeAnnotationType === 'Distance') {
            srcDecorator = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getDecoratorElement */ .Y9)(obj, points[0], anglePoints[1], true);
            targetDecorator = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getDecoratorElement */ .Y9)(obj, points[points.length - 1], anglePoints[anglePoints.length - 2], false);
        }
        srcDecorator.id = obj.id + '_srcDec';
        targetDecorator.id = obj.id + '_tarDec';
        segment.style['fill'] = 'transparent';
        container.style.strokeColor = 'transparent';
        container.style.fill = 'transparent';
        container.style.strokeWidth = 0;
        container.children = [];
        (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(obj, segment);
        container.children.push(segment);
        if (leaders.length > 0) {
            for (var i = 0; i < leaders.length; i++) {
                container.children.push(leaders[parseInt(i.toString(), 10)]);
            }
        }
        if (labels.length > 0) {
            for (var i = 0; i < labels.length; i++) {
                container.children.push(labels[parseInt(i.toString(), 10)]);
            }
        }
        container.children.push(srcDecorator);
        container.children.push(targetDecorator);
        if (obj.shapeAnnotationType === 'LineWidthArrowHead') {
            for (var i = 0; i < container.children.length; i++) {
                var child = container.children[parseInt(i.toString(), 10)];
                if (child.id.includes('srcDec') || child.id.includes('tarDec')) {
                    child.width = 12 * obj.thickness;
                    child.height = 12 * obj.thickness;
                }
            }
        }
        container.id = obj.id;
        container.offsetX = segment.offsetX;
        container.offsetY = segment.offsetY;
        container.width = segment.width;
        container.height = segment.height;
        points = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getConnectorPoints */ .Pv)(obj);
        obj.wrapper = container;
        return container;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @returns {PdfAnnotationBaseModel} - Returns the added annotaion object.
     */
    Drawing.prototype.add = function (obj) {
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        if (obj.formFieldAnnotationType && this.pdfViewer.formDesignerModule) {
            obj = new _pdf_annotation__WEBPACK_IMPORTED_MODULE_3__/* .PdfFormFieldBase */ .Ev(this.pdfViewer, 'formFields', obj, true);
            obj = this.initObject(obj);
            this.pdfViewer.formFields.push(obj);
        }
        else {
            obj = new _pdf_annotation__WEBPACK_IMPORTED_MODULE_3__/* .PdfAnnotationBase */ .fB(this.pdfViewer, 'annotations', obj, true);
            obj = this.initObject(obj);
            this.pdfViewer.annotations.push(obj);
        }
        this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
        return obj;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @returns {void}
     */
    Drawing.prototype.remove = function (obj) {
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        var index = obj.pageIndex;
        for (var i = 0; i < this.pdfViewer.annotations.length; i++) {
            var annotation = this.pdfViewer.annotations[parseInt(i.toString(), 10)];
            if ((annotation.id && (annotation.id === obj.id || annotation.id.split('_')[0] === obj.id)) || (annotation.wrapper && annotation.wrapper.id === obj.id)) {
                this.pdfViewer.annotations.splice(i, 1);
                var objects = this.getPageObjects(obj.pageIndex);
                for (var j = 0; j < objects.length; j++) {
                    if (objects[parseInt(j.toString(), 10)].id === obj.id) {
                        objects.splice(j, 1);
                        if (obj.shapeAnnotationType === 'Path' || obj.shapeAnnotationType === 'SignatureImage' || obj.shapeAnnotationType === 'SignatureText') {
                            this.refreshCanvasDiagramLayer(undefined, index, obj.id);
                        }
                        else {
                            this.pdfViewer.renderDrawing(undefined, index);
                        }
                    }
                }
                // need to add code snippet to remove from z index table
            }
        }
        for (var i = 0; i < this.pdfViewer.formFields.length; i++) {
            var element = this.pdfViewer.formFields[parseInt(i.toString(), 10)];
            if (element.id === obj.id || element.wrapper.id === obj.id) {
                this.pdfViewer.formFields.splice(i, 1);
                if (this.pdfViewer.formDesignerModule && obj.formFieldAnnotationType) {
                    this.pdfViewer.formFieldCollection.splice(i, 1);
                }
                var objects = this.getPageObjects(obj.pageIndex);
                for (var j = 0; j < objects.length; j++) {
                    if (objects[parseInt(j.toString(), 10)].id === obj.id) {
                        objects.splice(j, 1);
                        break;
                    }
                    if (objects[parseInt(j.toString(), 10)] && objects[parseInt(j.toString(), 10)].id &&
                        objects[parseInt(j.toString(), 10)].id.indexOf(obj.id) !== -1) {
                        objects.splice(j, 1);
                    }
                }
            }
        }
        if (obj.formFieldAnnotationType === 'Textbox' || obj.formFieldAnnotationType === 'Checkbox' || obj.formFieldAnnotationType === 'RadioButton'
            || obj.formFieldAnnotationType === 'PasswordField' || obj.formFieldAnnotationType === 'DropdownList' || obj.formFieldAnnotationType === 'ListBox' || obj.formFieldAnnotationType === 'SignatureField' || obj.formFieldAnnotationType === 'InitialField') {
            var inputField = document.getElementById('form_field_' + obj.id + '_content_html_element');
            if (inputField) {
                inputField.remove();
                this.pdfViewer.renderDrawing(undefined, index);
            }
            for (var i = 0; i < this.pdfViewer.formFieldCollections.length; i++) {
                var element = this.pdfViewer.formFieldCollections[parseInt(i.toString(), 10)];
                if (element.id === obj.id) {
                    this.pdfViewer.formFieldCollections.splice(i, 1);
                }
            }
            for (var i = 0; i < this.pdfViewer.viewerBase.formFieldCollection.length; i++) {
                // eslint-disable-next-line
                if (obj.id == this.pdfViewer.viewerBase.formFieldCollection[parseInt(i.toString(), 10)]) {
                    this.pdfViewer.viewerBase.formFieldCollection.splice(i, 1);
                }
            }
            var field = {
                // eslint-disable-next-line
                name: obj.name, id: obj.id, value: obj.value, fontFamily: obj.fontFamily, fontSize: obj.fontSize, fontStyle: obj.fontStyle,
                // eslint-disable-next-line
                color: obj.color, backgroundColor: obj.backgroundColor, alignment: obj.alignment, isReadonly: obj.isReadonly, visibility: obj.visibility,
                // eslint-disable-next-line
                maxLength: obj.maxLength, isRequired: obj.isRequired, isPrint: obj.isPrint, rotation: obj.rotateAngle, tooltip: obj.tooltip,
                // eslint-disable-next-line
                options: obj.options, isChecked: obj.isChecked, isSelected: obj.isSelected,
                // eslint-disable-next-line
                customData: obj.customData, lineBound: obj.bounds,
                // eslint-disable-next-line
                pageNumber: obj.pageIndex, insertSpaces: obj.insertSpaces,
                // eslint-disable-next-line
                formFieldAnnotationType: obj.formFieldAnnotationType,
                // eslint-disable-next-line
                borderColor: obj.borderColor, thickness: obj.thickness, isTransparent: obj.isTransparent
            };
            if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(field) && field.id !== 'diagram_helper') {
                this.pdfViewer.fireFormFieldRemoveEvent('formFieldRemove', field, obj.pageIndex);
                this.pdfViewer.formDesignerModule.removeFieldsFromAnnotationCollections(obj.id, field.name);
            }
        }
        this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
    };
    /**
     * @private
     * @param {number} pageIndex - Specified the page index.
     * @returns {PdfAnnotationBaseModel[]} - Returns the annotation base model collections.
     */
    Drawing.prototype.getPageObjects = function (pageIndex) {
        var pageTable = this.getPageTable(pageIndex);
        return pageTable.objects;
    };
    /**
     * @private
     * @param {HTMLCanvasElement} diagramLayer - Specified the diagram layer element.
     * @param {number} pageIndex - Specified the page index.
     * @param {string} objectId - Specified the object id.
     * @returns {void}
     */
    Drawing.prototype.refreshCanvasDiagramLayer = function (diagramLayer, pageIndex, objectId) {
        var _this = this;
        if (!diagramLayer) {
            diagramLayer = this.pdfViewer.viewerBase.getAnnotationCanvas('_annotationCanvas_', pageIndex);
        }
        if (diagramLayer) {
            var zoom = void 0;
            if (diagramLayer.id === this.pdfViewer.element.id + '_print_annotation_layer_' + pageIndex) {
                zoom = 1;
            }
            else {
                zoom = this.pdfViewer.viewerBase.getZoomFactor();
            }
            var width = diagramLayer.width / zoom;
            var height = diagramLayer.height / zoom;
            var ctx = diagramLayer.getContext('2d');
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            if (zoom < 1) {
                ctx.lineWidth = ctx.lineWidth / zoom;
            }
            var devicePixelRatio_1 = this.pdfViewer.viewerBase.getWindowDevicePixelRatio();
            var zoomRatio = zoom * devicePixelRatio_1;
            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isDevice || (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .Browser */ .Pw.isDevice && zoom <= 0.7)) {
                ctx.setTransform(zoomRatio, 0, 0, zoomRatio, 0, 0);
            }
            else {
                ctx.setTransform(zoom, 0, 0, zoom, 0, 0);
            }
            ctx.clearRect(0, 0, width, height);
            var objects = this.getPageObjects(pageIndex);
            var uniqueObjects = objects.filter(function (obj, index, self) {
                if (obj.id.split('_')[0] === 'free') {
                    return true;
                }
                else if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(_this.pdfViewer.formDesignerModule)) {
                    return index === self.findIndex(function (t) { return t.id.split('_')[0] === obj.id.split('_')[0]; });
                }
                return index === self.findIndex(function (t) { return t.id === obj.id; });
            });
            for (var i = 0; i < uniqueObjects.length; i++) {
                var renderElement = void 0;
                if (diagramLayer.id === this.pdfViewer.element.id + '_print_annotation_layer_' + pageIndex) {
                    if (uniqueObjects[parseInt(i.toString(), 10)].isPrint) {
                        renderElement = this.pdfViewer.nameTable[uniqueObjects[parseInt(i.toString(), 10)].id].wrapper;
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(renderElement)) {
                            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_19__/* .refreshDiagramElements */ .r)(diagramLayer, [renderElement], this.renderer);
                        }
                    }
                }
                else {
                    renderElement = this.pdfViewer.nameTable[uniqueObjects[parseInt(i.toString(), 10)].id].wrapper;
                    var uniqueObjectId = uniqueObjects[parseInt(i.toString(), 10)].id;
                    var uniqueObject = this.pdfViewer.nameTable["" + uniqueObjectId];
                    if ((renderElement && this.shouldRefreshElement(uniqueObject)) ||
                        (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.formDesignerModule)) {
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(uniqueObject.properties.data) && uniqueObject.properties.data.includes('base64')) {
                            var image = new Image();
                            image.src = uniqueObject.properties.data;
                            if (window.customStampCollection == null && window.customStampCollection === undefined) {
                                window.customStampCollection = new Map();
                            }
                            if (window.customStampCollection && !window.customStampCollection.get(renderElement.id)) {
                                window.customStampCollection.set(renderElement.id, image);
                            }
                        }
                        else if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(uniqueObject.properties.value) && uniqueObject.properties.value.includes('base64')) {
                            var image = new Image();
                            image.src = uniqueObject.properties.value;
                            if (window.signatureCollection == null && window.signatureCollection === undefined) {
                                window.signatureCollection = new Map();
                            }
                            if (window.signatureCollection && !window.signatureCollection.get(renderElement.id)) {
                                window.signatureCollection.set(renderElement.id, image);
                            }
                        }
                        (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_19__/* .refreshDiagramElements */ .r)(diagramLayer, [renderElement], this.renderer);
                    }
                }
            }
        }
    };
    Drawing.prototype.shouldRefreshElement = function (uniqueObject) {
        var parentObject = this.pdfViewer.nameTable[uniqueObject.id.split('_')[0]];
        return ((!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(parentObject) && uniqueObject.visibility === 'visible') ||
            (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(uniqueObject.subject) && uniqueObject.annotName !== 'SignatureField' && (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(uniqueObject.visibility)) ||
            (uniqueObject.propName === 'annotations' &&
                uniqueObject.shapeAnnotationType !== 'Path' &&
                uniqueObject.shapeAnnotationType !== 'SignatureText' &&
                uniqueObject.shapeAnnotationType !== 'SignatureImage') ||
            (uniqueObject.shapeAnnotationType === 'SignatureImage' &&
                uniqueObject.propName !== 'formFields') ||
            (uniqueObject.shapeAnnotationType === 'SignatureText' &&
                uniqueObject.propName !== 'formFields') || ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(parentObject) && uniqueObject.id === 'diagram_helper'));
    };
    /**
     * @private
     * @param {number} index - Specified the page index.
     * @returns {void}
     */
    Drawing.prototype.clearHighlighter = function (index) {
        var adornerSvg = this.getAdornerLayerSvg(this.pdfViewer.element.id + index + '_diagramAdornerLayer', index);
        if (adornerSvg) {
            var highlighter = adornerSvg.getElementById(adornerSvg.id + '_highlighter');
            if (highlighter) {
                highlighter.parentNode.removeChild(highlighter);
            }
        }
    };
    /**
     * @private
     * @param {string} diagramId - Specified the diagram id.
     * @param {number} index - Specified the page index.
     * @returns {SVGSVGElement} Return the svg element.
     */
    Drawing.prototype.getSelectorElement = function (diagramId, index) {
        var adornerLayer = null;
        var adornerSvg = this.getAdornerLayerSvg(diagramId, index);
        if (adornerSvg) {
            adornerLayer = adornerSvg.getElementById(diagramId + index + '_SelectorElement');
        }
        return adornerLayer;
    };
    /**
     * @private
     * @param {string} diagramId - Specified the diagram id.
     * @param {number} index - Specified the page index.
     * @returns {SVGSVGElement} Return the svg element.
     */
    Drawing.prototype.getAdornerLayerSvg = function (diagramId, index) {
        var adornerLayerSvg = null;
        var diagramElement = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_4__/* .getDiagramElement */ .AV)(diagramId + index + '_diagramAdornerLayer');
        var elementcoll;
        if (diagramElement) {
            elementcoll = diagramElement.getElementsByClassName('e-adorner-layer' + index);
            adornerLayerSvg = elementcoll[0];
        }
        return adornerLayerSvg;
    };
    /**
     * @private
     * @param {number} index - Specified the page index.
     * @returns {void}
     */
    Drawing.prototype.clearSelectorLayer = function (index) {
        var adornerSvg = this.getAdornerLayerSvg(this.pdfViewer.element.id, index);
        if (adornerSvg) {
            var selectionRect = adornerSvg.getElementById(this.pdfViewer.adornerSvgLayer.id + '_selected_region');
            if (selectionRect) {
                selectionRect.parentNode.removeChild(selectionRect);
            }
            this.clearHighlighter(index);
            var childNodes = this.getSelectorElement(this.pdfViewer.element.id, index).childNodes;
            var child = void 0;
            for (var i = childNodes.length; i > 0; i--) {
                child = childNodes[i - 1];
                child.parentNode.removeChild(child);
            }
        }
    };
    /**
     * @private
     * @param {number} select - Specified the select value.
     * @param {AnnotationSelectorSettingsModel} currentSelector - Specified the annotation selector element.
     * @param {PdfAnnotationBaseModel} helper - Specified the annotation helper element.
     * @param {boolean} isSelect - Specified the is select or not.
     * @returns {void}
     */
    Drawing.prototype.renderSelector = function (select, currentSelector, helper, isSelect) {
        if (!helper || isSelect) {
            var size = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__/* .Size */ .o();
            var selectorModel = this.pdfViewer.selectedItems;
            this.clearSelectorLayer(select);
            if (selectorModel.wrapper) {
                selectorModel.wrapper.measure(size);
                var zoom = this.pdfViewer.viewerBase.getZoomFactor();
                selectorModel.wrapper.arrange(selectorModel.wrapper.desiredSize);
                selectorModel.width = selectorModel.wrapper.actualSize.width;
                selectorModel.height = selectorModel.wrapper.actualSize.height;
                selectorModel.offsetX = selectorModel.wrapper.offsetX;
                selectorModel.offsetY = selectorModel.wrapper.offsetY;
                if (selectorModel.annotations.length === 1) {
                    selectorModel.rotateAngle = selectorModel.annotations[0].rotateAngle;
                    selectorModel.wrapper.rotateAngle = selectorModel.annotations[0].rotateAngle;
                    //selectorModel.pivot = selectorModel.annotations[0].pivot;
                }
                var selectorElement = void 0;
                if (selectorModel.formFields.length) {
                    for (var i = 0; i < selectorModel.formFields.length; i++) {
                        var node = selectorModel.formFields[parseInt(i.toString(), 10)];
                        selectorElement = this.getSelectorElement(this.pdfViewer.element.id, select);
                        if (selectorElement && node.pageIndex === select && this.pdfViewer.designerMode) {
                            this.renderResizeHandle(node.wrapper.children[0], selectorElement, selectorModel.thumbsConstraints, zoom, undefined, undefined, undefined, false, true, null, null, currentSelector);
                        }
                        if (this.pdfViewer.formDesignerModule && node.formFieldAnnotationType) {
                            if (!this.pdfViewer.viewerBase.isFormFieldSelect && !this.pdfViewer.viewerBase.isFormFieldMouseDown &&
                                !this.pdfViewer.viewerBase.isFormFieldMouseMove) {
                                this.pdfViewer.viewerBase.isFormFieldSelect = true;
                                var field = {
                                    name: node.name, id: node.id, value: node.value,
                                    fontFamily: node.fontFamily, fontSize: node.fontSize, fontStyle: node.fontStyle,
                                    color: node.color,
                                    backgroundColor: node.backgroundColor,
                                    alignment: node.alignment, isReadonly: node.isReadonly,
                                    visibility: node.visibility,
                                    maxLength: node.maxLength, isRequired: node.isRequired,
                                    isPrint: node.isPrint, rotation: node.rotateAngle, tooltip: node.tooltip,
                                    options: node.options, isChecked: node.isChecked,
                                    isSelected: node.isSelected, bounds: node.bounds,
                                    pageNumber: node.pageIndex, insertSpaces: node.insertSpaces,
                                    formFieldAnnotationType: node.formFieldAnnotationType,
                                    customData: node.customData, borderColor: node.borderColor,
                                    thickness: node.thickness, isTransparent: node.isTransparent
                                };
                                if (!this.pdfViewer.formDesignerModule.isFormFieldSizeUpdated) {
                                    this.pdfViewer.fireFormFieldSelectEvent('formFieldSelect', field, node.pageIndex, this.pdfViewer.formDesignerModule.isProgrammaticSelection);
                                }
                                this.pdfViewer.formDesignerModule.isFormFieldSizeUpdated = false;
                            }
                        }
                    }
                }
                if (selectorModel.annotations.length) {
                    for (var j = 0; j < selectorModel.annotations.length; j++) {
                        var node = selectorModel.annotations[parseInt(j.toString(), 10)];
                        selectorElement = this.getSelectorElement(this.pdfViewer.element.id, select);
                        if (selectorElement && node.pageIndex === select) {
                            if (node.shapeAnnotationType === 'Distance' || node.shapeAnnotationType === 'Line' ||
                                node.shapeAnnotationType === 'LineWidthArrowHead' || node.shapeAnnotationType === 'Polygon') {
                                this.renderEndPointHandle(node, selectorElement, selectorModel.thumbsConstraints, { scale: zoom, tx: 0, ty: 0 }, undefined, undefined, true, currentSelector);
                            }
                            else {
                                if (node.shapeAnnotationType === 'StickyNotes') {
                                    this.renderResizeHandle(node.wrapper.children[0], selectorElement, selectorModel.thumbsConstraints, zoom, undefined, undefined, undefined, false, true, null, null, currentSelector);
                                }
                                else {
                                    if (this.pdfViewer.tool !== 'Stamp') {
                                        var isSignature = node.shapeAnnotationType === 'Path' || node.formFieldAnnotationType === 'SignatureField' || node.formFieldAnnotationType === 'InitialField';
                                        this.renderResizeHandle(node.wrapper.children[0], selectorElement, selectorModel.thumbsConstraints, zoom, undefined, undefined, undefined, node.shapeAnnotationType === 'Stamp', false, isSignature, (node.shapeAnnotationType === 'FreeText' || node.shapeAnnotationType === 'HandWrittenSignature' || node.shapeAnnotationType === 'SignatureImage' || node.shapeAnnotationType === 'Image' || node.shapeAnnotationType === 'SignatureText'), currentSelector);
                                    }
                                }
                            }
                            if (!this.pdfViewer.viewerBase.isNewSignatureAdded && (node.shapeAnnotationType === 'HandWrittenSignature' || node.shapeAnnotationType === 'SignatureText' || node.shapeAnnotationType === 'SignatureImage')) {
                                this.pdfViewer.annotationModule.selectSignature(node.signatureName, node.pageIndex, node);
                            }
                            if (this.pdfViewer.formDesignerModule && node.formFieldAnnotationType) {
                                if (!this.pdfViewer.viewerBase.isFormFieldSelect && !this.pdfViewer.viewerBase.isFormFieldMouseDown &&
                                    !this.pdfViewer.viewerBase.isFormFieldMouseMove) {
                                    this.pdfViewer.viewerBase.isFormFieldSelect = true;
                                    var field = {
                                        value: node.value, fontFamily: node.fontFamily, fontSize: node.fontSize,
                                        fontStyle: node.fontStyle,
                                        color: node.color,
                                        backgroundColor: node.backgroundColor,
                                        alignment: node.alignment, isReadonly: node.isReadonly,
                                        visibility: node.visibility,
                                        maxLength: node.maxLength, isRequired: node.isRequired,
                                        isPrint: node.isPrint, rotation: node.rotateAngle, tooltip: node.tooltip,
                                        options: node.options, isChecked: node.isChecked,
                                        isSelected: node.isSelected, bounds: node.bounds
                                    };
                                    if (!this.pdfViewer.formDesignerModule.isFormFieldSizeUpdated) {
                                        this.pdfViewer.fireFormFieldSelectEvent('formFieldSelect', field, node.pageIndex, this.pdfViewer.formDesignerModule.isProgrammaticSelection);
                                    }
                                    this.pdfViewer.formDesignerModule.isFormFieldSizeUpdated = false;
                                }
                            }
                            if ((node.annotName !== '' || node.signatureName === 'ink') && node.annotName !== 'SignatureText') {
                                if (helper && (node === helper) && !node.formFieldAnnotationType) {
                                    if (!this.pdfViewer.viewerBase.isAddComment && !this.pdfViewer.viewerBase.isAnnotationSelect &&
                                        !this.pdfViewer.viewerBase.isAnnotationMouseDown &&
                                        !this.pdfViewer.viewerBase.isAnnotationMouseMove && !this.pdfViewer.viewerBase.isInkAdded &&
                                        !this.pdfViewer.viewerBase.isNewStamp) {
                                        this.pdfViewer.viewerBase.isAnnotationSelect = true;
                                        this.pdfViewer.annotationModule.annotationSelect(node.annotName, node.pageIndex, node);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * Rotates the given nodes/connectors by the given angle
     *
     * @private
     * @param {PdfAnnotationBaseModel | SelectorModel} obj - Specified the objects to be rotated.
     * @param {number} angle - Specified the angle by which the objects have to be rotated.
     * @param {PointModel} pivot - Specified the reference point with reference to which the objects have to be rotated.
     * @param {AnnotationSelectorSettingsModel} currentSelector - Specified the current selector value.
     * @returns {void}
     */
    Drawing.prototype.rotate = function (obj, angle, pivot, currentSelector) {
        var checkBoundaryConstraints;
        if (obj) {
            pivot = pivot || { x: obj.wrapper.offsetX, y: obj.wrapper.offsetY };
            if (obj instanceof _selector__WEBPACK_IMPORTED_MODULE_20__/* .Selector */ .M) {
                obj.rotateAngle += angle;
                obj.wrapper.rotateAngle += angle;
                var objects = [];
                objects = objects.concat(obj.annotations);
                this.rotateObjects(obj, objects, angle, pivot, null, currentSelector);
            }
            else {
                this.rotateObjects(obj, [obj], angle, pivot);
            }
        }
        return checkBoundaryConstraints;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel | SelectorModel} parent - Specified the annotation object.
     * @param {PdfAnnotationBaseModel[]} objects - Specified the annotation objects.
     * @param {number} angle - Specified the annotation angle.
     * @param {PointModel} pivot - Specified the pivot value.
     * @param {boolean} includeParent - Specified the include parent value.
     * @param {AnnotationSelectorSettingsModel} currentSelector - Specified the current selector value.
     * @returns {void}
     */
    Drawing.prototype.rotateObjects = function (parent, objects, angle, pivot, includeParent, currentSelector) {
        pivot = pivot || {};
        var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
        (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, angle, pivot.x, pivot.y);
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var obj = objects_1[_i];
            if (obj instanceof _pdf_annotation__WEBPACK_IMPORTED_MODULE_3__/* .PdfAnnotationBase */ .fB) {
                if (includeParent !== false || parent !== obj) {
                    obj.rotateAngle += angle;
                    obj.rotateAngle = (obj.rotateAngle + 360) % 360;
                    var newOffset = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, { x: obj.wrapper.offsetX, y: obj.wrapper.offsetY });
                    obj.wrapper.offsetX = newOffset.x;
                    obj.wrapper.offsetY = newOffset.y;
                    this.nodePropertyChange(obj, { rotateAngle: obj.rotateAngle });
                }
                this.renderSelector(obj.pageIndex, currentSelector);
            }
        }
    };
    Drawing.prototype.getParentSvg = function (element, targetElement, canvas) {
        if (element && element.id) {
            if (targetElement && targetElement === 'selector') {
                return this.pdfViewer.adornerSvgLayer;
            }
        }
        return canvas;
    };
    Drawing.prototype.shownBorder = function () {
        var isSelectInAllowed = false;
        if (this.pdfViewer.annotationModule) {
            var annotation = this.pdfViewer.selectedItems.annotations[0];
            var allowedInteraction = this.pdfViewer.annotationModule.updateAnnotationAllowedInteractions(annotation);
            var isLock = this.pdfViewer.annotationModule.checkIsLockSettings(annotation);
            isSelectInAllowed = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(allowedInteraction) && (allowedInteraction.includes('Select') || !isLock);
        }
        return isSelectInAllowed;
    };
    /**
     * @private
     * @param {DrawingElement} selector - Specified the annotation selector object.
     * @param {HTMLCanvasElement | SVGElement} canvas - Specified the canvas element.
     * @param {any} currentSelector - Specified the current selector value.
     * @param {Transforms} transform - Specfied the transform value.
     * @param {number} enableNode - Specified the node number.
     * @param {boolean} isBorderTickness - Specified is thickness or not.
     * @param {boolean} isSwimlane - Specified is swimlane annotation or not.
     * @param {boolean} isSticky - Specified is sticky annotation or not.
     * @returns {void}
     */
    Drawing.prototype.renderBorder = function (selector, canvas, currentSelector, transform, enableNode, isBorderTickness, isSwimlane, isSticky) {
        var wrapper = selector;
        var options = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .getBaseShapeAttributes */ .iX)(wrapper, transform);
        transform = transform || { scale: 1, tx: 0, ty: 0 };
        if (!isSticky) {
            options.x *= transform.scale;
            options.y *= transform.scale;
            options.width *= transform.scale;
            options.height *= transform.scale;
            options.fill = 'transparent';
            var shapeType = this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType;
            if (currentSelector && (typeof (currentSelector) !== 'object') && currentSelector !== '') {
                var annotationSelector = JSON.parse(currentSelector);
                var borderColor = annotationSelector.selectionBorderColor === '' ? 'black' : annotationSelector.selectionBorderColor;
                options.stroke = borderColor;
                options.strokeWidth = currentSelector.selectionBorderThickness === 1 ? 1 : annotationSelector.selectionBorderThickness;
                var lineDash = annotationSelector.selectorLineDashArray.length === 0 ?
                    [6, 3] : annotationSelector.selectorLineDashArray;
                if (lineDash.length > 2) {
                    lineDash = [lineDash[0], lineDash[1]];
                }
                options.dashArray = lineDash.toString();
            }
            else if (currentSelector && currentSelector !== '') {
                var borderColor = currentSelector.selectionBorderColor === '' ? 'black' : currentSelector.selectionBorderColor;
                options.stroke = borderColor;
                options.strokeWidth = currentSelector.selectionBorderThickness === 1 ? 1 : currentSelector.selectionBorderThickness;
                var lineDash = (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.selectorLineDashArray) &&
                    (currentSelector.selectorLineDashArray.length === 0)) ? [6, 3] : currentSelector.selectorLineDashArray;
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineDash) && lineDash.length > 2) {
                    lineDash = [lineDash[0], lineDash[1]];
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineDash)) {
                    options.dashArray = lineDash.toString();
                }
            }
            else {
                if (!this.pdfViewer.designerMode) {
                    if ((shapeType === 'HandWrittenSignature' || shapeType === 'SignatureText' || shapeType === 'SignatureImage') || shapeType === 'Ink') {
                        var formField = this.pdfViewer.nameTable[selector.id.split('_')[0]];
                        var isFormFieldSign = this.pdfViewer.viewerBase.checkSignatureFormField(selector.id);
                        // if (isFormFieldSign && options.width + 21 !== formField.bounds.width && options.height + 21 !== formField.bounds.height) {
                        //     if (this.pdfViewer.signatureFitMode === 'Default') {
                        //         let selectorBounds: any = this.pdfViewer.formFieldsModule.getDefaultBoundsforSign(formField.bounds);
                        //         options.x = selectorBounds.x; options.y = selectorBounds.y; options.width = selectorBounds.width; options.height = selectorBounds.height;
                        //     } else {
                        //         options.x = formField.bounds.x; options.y = formField.bounds.y; options.width = formField.bounds.width; options.height = formField.bounds.height;
                        //     }
                        // }
                        this.getSignBorder(shapeType, options, isFormFieldSign);
                    }
                    else {
                        this.getBorderSelector(shapeType, options);
                    }
                }
            }
            options.class = 'e-pv-diagram-border';
            if (isSwimlane) {
                options.class += ' e-diagram-lane';
            }
            options.id = 'borderRect';
            options.id = 'borderRect';
            if (!enableNode) {
                options.class += ' e-disabled';
            }
            if (isBorderTickness) {
                options.class += ' e-thick-border';
            }
            options.cornerRadius = 0;
        }
        else {
            options.x *= transform.scale;
            options.y *= transform.scale;
            options.width *= transform.scale;
            options.height *= transform.scale;
            var shapeType = this.pdfViewer.selectedItems.annotations.length > 0 ?
                this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType
                : this.pdfViewer.selectedItems.formFields[0].formFieldAnnotationType;
            if (currentSelector && (typeof (currentSelector) !== 'object') && currentSelector !== '') {
                var annotationSelector = JSON.parse(currentSelector);
                var borderColor = annotationSelector.selectionBorderColor === '' ? 'black' : annotationSelector.selectionBorderColor;
                options.stroke = borderColor;
                options.strokeWidth = currentSelector.selectionBorderThickness === 1 ? 1 : annotationSelector.selectionBorderThickness;
                var lineDash = annotationSelector.selectorLineDashArray.length === 0 ?
                    [6, 3] : annotationSelector.selectorLineDashArray;
                if (lineDash.length > 2) {
                    lineDash = [lineDash[0], lineDash[1]];
                }
                options.dashArray = lineDash.toString();
            }
            else if (currentSelector && currentSelector !== '') {
                var borderColor = currentSelector.selectionBorderColor === '' ? 'black' : currentSelector.selectionBorderColor;
                options.stroke = borderColor;
                options.strokeWidth = currentSelector.selectionBorderThickness === 1 ? 1 : currentSelector.selectionBorderThickness;
                var lineDash = (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.selectorLineDashArray) &&
                    (currentSelector.selectorLineDashArray.length === 0)) ? [6, 3] : currentSelector.selectorLineDashArray;
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineDash) && lineDash.length > 2) {
                    lineDash = [lineDash[0], lineDash[1]];
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(lineDash)) {
                    options.dashArray = lineDash.toString();
                }
            }
            else {
                this.getBorderSelector(shapeType, options);
            }
        }
        var checkBorder = this.shownBorder();
        if (checkBorder) {
            var parentSvg = this.getParentSvg(selector, 'selector');
            this.svgRenderer.drawRectangle(canvas, options, this.pdfViewer.element.id, undefined, true, parentSvg);
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} type - Specified the annotation object.
     * @param {BaseAttributes} options - Specified the options value.
     * @param {boolean} isFormFieldSign - Specified is form field sign or not.
     * @returns {void}
     */
    Drawing.prototype.getSignBorder = function (type, options, isFormFieldSign) {
        if (!isFormFieldSign && (type === 'HandWrittenSignature' || type === 'SignatureText' || type === 'SignatureImage') && this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) {
            var borderColor = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.selectionBorderColor === '' ? '#0000ff' : this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.selectionBorderColor;
            options.stroke = borderColor;
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.
                annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.handWrittenSignatureSettings.
                annotationSelectorSettings.selectionBorderThickness;
            options.strokeWidth = thickness;
            var lineDash = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.
                annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.handWrittenSignatureSettings.
                annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.handWrittenSignatureSettings.
                annotationSelectorSettings.selectorLineDashArray;
            if (lineDash.length > 2) {
                lineDash = [lineDash[0], lineDash[1]];
            }
            options.dashArray = lineDash.toString();
        }
        else if (type === 'Ink' && this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) {
            var borderColor = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.selectionBorderColor === '' ? '#0000ff' : this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.selectionBorderColor;
            options.stroke = borderColor;
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.
                selectionBorderThickness) ? 1 : this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.selectionBorderThickness;
            options.strokeWidth = thickness;
            var lineDash = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.
                selectorLineDashArray) || this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.
                selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.
                selectorLineDashArray;
            if (lineDash.length > 2) {
                lineDash = [lineDash[0], lineDash[1]];
            }
            options.dashArray = lineDash.toString();
        }
        else {
            var annotationSelector = this.pdfViewer.annotationSelectorSettings;
            var borderColor = annotationSelector.selectionBorderColor === '' ? 'black' : annotationSelector.selectionBorderColor;
            options.stroke = borderColor;
            options.strokeWidth = annotationSelector.selectionBorderThickness === 1 ? 1 : annotationSelector.selectionBorderThickness;
            var lineDash = annotationSelector.selectorLineDashArray.length === 0 ?
                [6, 3] : annotationSelector.selectorLineDashArray;
            if (lineDash.length > 2) {
                lineDash = [lineDash[0], lineDash[1]];
            }
            options.dashArray = lineDash.toString();
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} type - Specified the annotation object.
     * @param {BaseAttributes} options - Specified the base attributes.
     * @returns {void}
     */
    Drawing.prototype.getBorderSelector = function (type, options) {
        var annotationSelector = this.pdfViewer.annotationSelectorSettings;
        var borderColor = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.selectionBorderColor) || annotationSelector.selectionBorderColor === '' ? 'black' : annotationSelector.selectionBorderColor;
        options.stroke = borderColor;
        options.strokeWidth = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.selectionBorderThickness) ||
            annotationSelector.selectionBorderThickness === 1 ? 1 : annotationSelector.selectionBorderThickness;
        var lineDash = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.selectorLineDashArray) ||
            annotationSelector.selectorLineDashArray.length === 0 ? [6, 3] : annotationSelector.selectorLineDashArray;
        if (lineDash.length > 2) {
            lineDash = [lineDash[0], lineDash[1]];
        }
        options.dashArray = lineDash.toString();
        if (type === 'Rectangle' && this.pdfViewer.rectangleSettings.annotationSelectorSettings) {
            var borderColor_1 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? 'black' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectionBorderColor;
            options.stroke = borderColor_1;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectionBorderThickness;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_1 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectorLineDashArray;
            if (lineDash_1.length > 2) {
                lineDash_1 = [lineDash_1[0], lineDash_1[1]];
            }
            options.dashArray = lineDash_1.toString();
        }
        else if ((type === 'Textbox' || type === 'Checkbox' || type === 'RadioButton' || type === 'SignatureField' || type === 'InitialField' || type === 'DropdownList' || type === 'ListBox' || type === 'PasswordField') && this.pdfViewer.rectangleSettings.annotationSelectorSettings) {
            var borderColor_2 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? 'black' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectionBorderColor)) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectionBorderColor : 'black';
            options.stroke = borderColor_2;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectionBorderThickness)) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectionBorderThickness : 1;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_2 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectorLineDashArray)) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.selectorLineDashArray : [4];
            if (lineDash_2.length > 2) {
                lineDash_2 = [lineDash_2[0], lineDash_2[1]];
            }
            options.dashArray = lineDash_2.toString();
        }
        else if (type === 'Ellipse' && this.pdfViewer.circleSettings.annotationSelectorSettings) {
            var borderColor_3 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? 'black' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.selectionBorderColor)) ? this.pdfViewer.circleSettings.annotationSelectorSettings.selectionBorderColor : 'black';
            options.stroke = borderColor_3;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.selectionBorderThickness)) ? this.pdfViewer.circleSettings.annotationSelectorSettings.selectionBorderThickness : 1;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_3 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.selectorLineDashArray)) ? this.pdfViewer.circleSettings.annotationSelectorSettings.selectorLineDashArray : [4];
            if (lineDash_3.length > 2) {
                lineDash_3 = [lineDash_3[0], lineDash_3[1]];
            }
            options.dashArray = lineDash_3.toString();
        }
        else if (type === 'Radius' && this.pdfViewer.radiusSettings.annotationSelectorSettings) {
            var borderColor_4 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? 'black' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.selectionBorderColor)) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.selectionBorderColor : 'black';
            options.stroke = borderColor_4;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.selectionBorderThickness)) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.selectionBorderThickness : 1;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_4 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.selectorLineDashArray)) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.selectorLineDashArray : [4];
            if (lineDash_4.length > 2) {
                lineDash_4 = [lineDash_4[0], lineDash_4[1]];
            }
            options.dashArray = lineDash_4.toString();
        }
        else if (type === 'FreeText' && this.pdfViewer.freeTextSettings.annotationSelectorSettings) {
            var borderColor_5 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? 'black' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.selectionBorderColor)) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.selectionBorderColor : 'black';
            options.stroke = borderColor_5;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.selectionBorderThickness)) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.selectionBorderThickness : 1;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_5 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.selectorLineDashArray)) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.selectorLineDashArray : [4];
            if (lineDash_5.length > 2) {
                lineDash_5 = [lineDash_5[0], lineDash_5[1]];
            }
            options.dashArray = lineDash_5.toString();
        }
        else if (type === 'StickyNotes' && this.pdfViewer.stickyNotesSettings.annotationSelectorSettings) {
            var borderColor_6 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? 'black' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stickyNotesSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stickyNotesSettings.annotationSelectorSettings.selectionBorderColor)) ? this.pdfViewer.stickyNotesSettings.annotationSelectorSettings.selectionBorderColor : 'black';
            options.stroke = borderColor_6;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stickyNotesSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stickyNotesSettings.annotationSelectorSettings.selectionBorderThickness)) ? this.pdfViewer.stickyNotesSettings.annotationSelectorSettings.selectionBorderThickness : 1;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_6 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [6, 3] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stickyNotesSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stickyNotesSettings.annotationSelectorSettings.selectorLineDashArray)) ? this.pdfViewer.stickyNotesSettings.annotationSelectorSettings.selectorLineDashArray : [4];
            if (lineDash_6.length > 2) {
                lineDash_6 = [lineDash_6[0], lineDash_6[1]];
            }
            options.dashArray = lineDash_6.toString();
        }
        else if ((type === 'Stamp' || type === 'Image') && this.pdfViewer.stampSettings.annotationSelectorSettings) {
            var borderColor_7 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderColor) || this.pdfViewer.annotationSelectorSettings.selectionBorderColor === '' ? '#0000ff' : this.pdfViewer.annotationSelectorSettings.selectionBorderColor ? this.pdfViewer.annotationSelectorSettings.selectionBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.selectionBorderColor)) ? this.pdfViewer.stampSettings.annotationSelectorSettings.selectionBorderColor : '#0000ff';
            options.stroke = borderColor_7;
            // eslint-disable-next-line max-len
            var thickness = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectionBorderThickness) ? 1 : this.pdfViewer.annotationSelectorSettings.selectionBorderThickness ? this.pdfViewer.annotationSelectorSettings.selectionBorderThickness : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.selectionBorderThickness)) ? this.pdfViewer.stampSettings.annotationSelectorSettings.selectionBorderThickness : 1;
            options.strokeWidth = thickness;
            // eslint-disable-next-line max-len
            var lineDash_7 = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.selectorLineDashArray) || this.pdfViewer.annotationSelectorSettings.selectorLineDashArray.length === 0 ? [4] : this.pdfViewer.annotationSelectorSettings.selectorLineDashArray ? this.pdfViewer.annotationSelectorSettings.selectorLineDashArray : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.selectorLineDashArray)) ? this.pdfViewer.stampSettings.annotationSelectorSettings.selectorLineDashArray : [4];
            if (lineDash_7.length > 2) {
                lineDash_7 = [lineDash_7[0], lineDash_7[1]];
            }
            options.dashArray = lineDash_7.toString();
        }
    };
    /**
     * @private
     * @param {string} id - Specified the annotaion id.
     * @param {DrawingElement} selector - Specified the drawing element.
     * @param {number} cx - Specified the cx number.
     * @param {number} cy - Specified the cy number.
     * @param {HTMLCanvasElement | SVGElement} canvas - Specified the html canvas element.
     * @param {boolean} visible - Specified the annotation visible or not.
     * @param {number} enableSelector - Specified the enable selector value.
     * @param {Transforms} t - Specified the transforms value.
     * @param {boolean} connected - Specified is connected or not.
     * @param {boolean} canMask - Specified is mask or not.
     * @param {object} ariaLabel - Specified the aria label object.
     * @param {number} count - Specified the count value.
     * @param {string} className - Specified the class name.
     * @param {AnnotationSelectorSettingsModel} currentSelector - Specified the annotation selector settings.
     * @returns {void}
     */
    Drawing.prototype.renderCircularHandle = function (id, selector, cx, cy, canvas, visible, enableSelector, t, connected, canMask, ariaLabel, count, className, currentSelector) {
        var wrapper = selector;
        var radius = 7;
        var newPoint = { x: cx, y: cy };
        t = t || { scale: 1, tx: 0, ty: 0 };
        if (wrapper.rotateAngle !== 0 || wrapper.parentTransform !== 0) {
            var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, wrapper.rotateAngle + wrapper.parentTransform, wrapper.offsetX, wrapper.offsetY);
            newPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, newPoint);
        }
        var options = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .getBaseShapeAttributes */ .iX)(wrapper);
        var shapeType;
        if (this.pdfViewer.selectedItems.annotations.length > 0 && this.pdfViewer.selectedItems.annotations[0].measureType) {
            shapeType = this.pdfViewer.selectedItems.annotations[0].measureType;
        }
        else if (this.pdfViewer.selectedItems.formFields.length > 0) {
            shapeType = this.pdfViewer.selectedItems.formFields[0].formFieldAnnotationType;
        }
        else {
            shapeType = this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType;
        }
        this.getResizerColors(shapeType, options, currentSelector, t);
        this.getShapeSize(shapeType, options, currentSelector, t);
        options.strokeWidth = 1;
        if (count !== undefined) {
            radius = 5;
            options.id = 'segmentEnd_' + count;
        }
        options.centerX = (newPoint.x + t.tx) * t.scale;
        options.centerY = (newPoint.y + t.ty) * t.scale;
        options.angle = 0;
        options.id = id;
        options.visible = visible;
        options.class = className;
        options.opacity = 1;
        if (connected) {
            options.class += ' e-connected';
        }
        if (canMask) {
            options.visible = false;
        }
        options.x = (newPoint.x * t.scale) - (options.width / 2);
        options.y = (newPoint.y * t.scale) - (options.height / 2);
        var parentSvg = this.getParentSvg(selector, 'selector');
        if (this.getShape(shapeType, currentSelector) === 'Square') {
            this.svgRenderer.drawRectangle(canvas, options, id, undefined, true, parentSvg);
        }
        else if (this.getShape(shapeType, currentSelector) === 'Circle') {
            this.svgRenderer.drawCircle(canvas, options, 1);
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} type - Specified the annotaion object.
     * @param {CircleAttributes} options - Specified the circle attributes value.
     * @param {any} currentSelector - Specified the current selector value.
     * @param {Transforms} t - Specified the transforms value.
     * @returns {void}
     */
    Drawing.prototype.getShapeSize = function (type, options, currentSelector, t) {
        if (currentSelector && typeof (currentSelector) !== 'object' && currentSelector !== '') {
            var annotationSelector = JSON.parse(currentSelector);
            options.radius = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerSize) || annotationSelector.resizerSize ===
                8 ? 8 : annotationSelector.resizerSize) / 2;
            options.width = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerSize) || annotationSelector.resizerSize ===
                8 ? 8 : annotationSelector.resizerSize) * t.scale;
            options.height = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerSize) || annotationSelector.resizerSize ===
                8 ? 8 : annotationSelector.resizerSize) * t.scale;
        }
        else if (currentSelector && currentSelector !== '') {
            options.radius = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerSize) || currentSelector.resizerSize ===
                8 ? 8 : currentSelector.resizerSize) / 2;
            options.width = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerSize) || currentSelector.resizerSize ===
                8 ? 8 : currentSelector.resizerSize) * t.scale;
            options.height = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerSize) || currentSelector.resizerSize ===
                8 ? 8 : currentSelector.resizerSize) * t.scale;
        }
        else {
            var annotationSelector = this.pdfViewer.annotationSelectorSettings;
            options.radius = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerSize) || annotationSelector.resizerSize ===
                8 ? 8 : annotationSelector.resizerSize) / 2;
            options.width = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerSize) || annotationSelector.resizerSize ===
                8 ? 8 : annotationSelector.resizerSize) * t.scale;
            options.height = ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerSize) || annotationSelector.resizerSize ===
                8 ? 8 : annotationSelector.resizerSize) * t.scale;
            var currentType = typeof (type) === 'string' ? type : type.shapeAnnotationType;
            var settingsMap = {
                'Line': this.pdfViewer.lineSettings,
                'LineWidthArrowHead': this.pdfViewer.arrowSettings,
                'Rectangle': this.pdfViewer.rectangleSettings,
                'Ellipse': this.pdfViewer.circleSettings,
                'Distance': this.pdfViewer.distanceSettings,
                'Polygon': this.pdfViewer.polygonSettings,
                'Radius': this.pdfViewer.radiusSettings,
                'Area': this.pdfViewer.areaSettings,
                'Volume': this.pdfViewer.volumeSettings,
                'Ink': this.pdfViewer.inkAnnotationSettings,
                'Stamp': this.pdfViewer.stampSettings,
                'Image': this.pdfViewer.stampSettings,
                'FreeText': this.pdfViewer.freeTextSettings,
                'HandWrittenSignature': this.pdfViewer.handWrittenSignatureSettings,
                'SignatureText': this.pdfViewer.handWrittenSignatureSettings,
                'SignatureImage': this.pdfViewer.handWrittenSignatureSettings,
                'Perimeter': this.pdfViewer.perimeterSettings
            };
            var settings = settingsMap["" + currentType];
            if (settings && settings.annotationSelectorSettings) {
                var resizerSize = this.pdfViewer.annotationSelectorSettings.resizerSize || 8;
                var annotationResizerSize = settings.annotationSelectorSettings.resizerSize;
                options.radius = (annotationResizerSize && annotationResizerSize !== 8)
                    ? annotationResizerSize / 2 : resizerSize / 2;
                var resizerValue = (annotationResizerSize && annotationResizerSize !== 8)
                    ? annotationResizerSize * t.scale : resizerSize * t.scale;
                options.width = resizerValue;
                options.height = resizerValue;
            }
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} type - Specified the annotation object.
     * @param {any} currentSelector - Specified the current selector value.
     * @returns {AnnotationSelectorSettingsModel} - Specified the annotation selector settings model.
     */
    Drawing.prototype.getShape = function (type, currentSelector) {
        var shapeType;
        {
            if (currentSelector && typeof (currentSelector) !== 'object' && currentSelector !== '') {
                var annotationSelector = JSON.parse(currentSelector);
                shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerShape) || annotationSelector.resizerShape === 'Square' ? 'Square' : annotationSelector.resizerShape;
            }
            else if (currentSelector && currentSelector !== '') {
                shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerShape) || currentSelector.resizerShape === 'Square' ? 'Square' : currentSelector.resizerShape;
            }
            else {
                var annotationSelector = this.pdfViewer.annotationSelectorSettings;
                shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerShape) || annotationSelector.resizerShape === 'Square' ? 'Square' : annotationSelector.resizerShape;
                if (type === 'Line' && this.pdfViewer.lineSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.lineSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'LineWidthArrowHead' && this.pdfViewer.arrowSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Rectangle' && this.pdfViewer.rectangleSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Ellipse' && this.pdfViewer.circleSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.circleSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Polygon' && this.pdfViewer.polygonSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Distance' && this.pdfViewer.distanceSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Radius' && this.pdfViewer.radiusSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if ((type === 'Stamp' || type === 'Image') && this.pdfViewer.stampSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.stampSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'FreeText' && this.pdfViewer.freeTextSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if ((type === 'HandWrittenSignature' || type === 'SignatureText' || type === 'SignatureImage') && this.pdfViewer.handWrittenSignatureSettings && this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Perimeter' && this.pdfViewer.perimeterSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.perimeterSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Area' && this.pdfViewer.areaSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.areaSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.areaSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.areaSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Volume' && this.pdfViewer.volumeSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.volumeSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
                else if (type === 'Ink' && this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) {
                    shapeType = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerShape) || this.pdfViewer.annotationSelectorSettings.resizerShape !== 'Square' ? this.pdfViewer.annotationSelectorSettings.resizerShape : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerShape)) ? this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerShape : 'Square';
                }
            }
            return shapeType;
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} type - Specified the annotaion object.
     * @param {CircleAttributes} options - Specified the circle attributes value.
     * @param {any} currentSelector - Specified the current selector value.
     * @param {Transforms} t - Specified the transforms value.
     * @returns {void}
     */
    Drawing.prototype.getResizerColors = function (type, options, currentSelector, t) {
        if (currentSelector && typeof (currentSelector) !== 'object' && currentSelector !== '') {
            var annotationSelector = JSON.parse(currentSelector);
            options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerBorderColor) || annotationSelector.resizerBorderColor === 'black' ? 'black' : annotationSelector.resizerBorderColor;
            options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerFillColor) || annotationSelector.resizerFillColor === '#FF4081' ? '#FF4081' : annotationSelector.resizerFillColor;
        }
        else if (currentSelector && currentSelector !== '') {
            options.stroke = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerBorderColor) ? currentSelector.resizerBorderColor : 'black';
            options.fill = !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerFillColor) ? currentSelector.resizerFillColor : '#FF4081';
        }
        else {
            var annotationSelector = this.pdfViewer.annotationSelectorSettings;
            options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerBorderColor) || annotationSelector.resizerBorderColor === 'black' ? 'black' : annotationSelector.resizerBorderColor;
            options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerFillColor) || annotationSelector.resizerFillColor === '#FF4081' ? '#FF4081' : annotationSelector.resizerFillColor;
            if (type === 'Line' && this.pdfViewer.lineSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.lineSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.lineSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'LineWidthArrowHead' && this.pdfViewer.arrowSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Rectangle' && this.pdfViewer.rectangleSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Ellipse' && this.pdfViewer.circleSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.circleSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.circleSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Distance' && this.pdfViewer.distanceSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Polygon' && this.pdfViewer.polygonSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Radius' && this.pdfViewer.radiusSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if ((type === 'Stamp' || type === 'Image') && this.pdfViewer.stampSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.stampSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.stampSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'FreeText' && this.pdfViewer.freeTextSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if ((type === 'HandWrittenSignature' || type === 'SignatureText' || type === 'SignatureImage') && this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Perimeter' && this.pdfViewer.perimeterSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.perimeterSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.perimeterSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.perimeterSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Area' && this.pdfViewer.areaSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.areaSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.areaSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.areaSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.areaSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.areaSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.areaSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Volume' && this.pdfViewer.volumeSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.volumeSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.volumeSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.volumeSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
            else if (type === 'Ink' && this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) {
                options.stroke = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerBorderColor) || this.pdfViewer.annotationSelectorSettings.resizerBorderColor !== 'black' ? this.pdfViewer.annotationSelectorSettings.resizerBorderColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerBorderColor)) ? this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerBorderColor : 'black';
                options.fill = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationSelectorSettings.resizerFillColor) || this.pdfViewer.annotationSelectorSettings.resizerFillColor !== '#FF4081' ? this.pdfViewer.annotationSelectorSettings.resizerFillColor : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerFillColor)) ? this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerFillColor : 'FF4081';
            }
        }
    };
    /**
     * @private
     * @param {DrawingElement} wrapper - Specified the drawing element.
     * @param {HTMLCanvasElement | SVGElement} canvas - Specified the canvas element.
     * @param {Transforms} transform - Specified the transform value.
     * @param {SelectorConstraints} selectorConstraints - Specified the selector constraints value.
     * @param {boolean} canMask - Specified the is mask or not.
     * @returns {void}
     */
    Drawing.prototype.renderRotateThumb = function (wrapper, canvas, transform, selectorConstraints, canMask) {
        var newPoint;
        var top = wrapper.offsetY - wrapper.actualSize.height * wrapper.pivot.y;
        var left = wrapper.offsetX - wrapper.actualSize.width * wrapper.pivot.x;
        var pivotX = left + wrapper.pivot.x * wrapper.actualSize.width;
        var pivotY = top;
        pivotX = (pivotX + transform.tx) * transform.scale;
        pivotY = (pivotY + transform.ty) * transform.scale;
        newPoint = { x: pivotX, y: pivotY - 25 };
        if (wrapper.rotateAngle !== 0 || wrapper.parentTransform !== 0) {
            var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, wrapper.rotateAngle + wrapper.parentTransform, (transform.tx + wrapper.offsetX) * transform.scale, (transform.ty + wrapper.offsetY) * transform.scale);
            newPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, newPoint);
        }
        var options = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .getBaseShapeAttributes */ .iX)(wrapper);
        options.stroke = 'black';
        options.strokeWidth = 1;
        options.opacity = 1;
        options.fill = '#FF4081';
        options.centerX = newPoint.x;
        options.centerY = newPoint.y;
        options.radius = 4;
        options.angle = 0;
        options.visible = true;
        options.class = 'e-diagram-rotate-handle';
        options.id = 'rotateThumb';
        var checkBorder = this.shownBorder();
        if (checkBorder) {
            this.svgRenderer.drawCircle(canvas, options, _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.Rotate, { 'aria-label': 'Thumb to rotate the selected object' });
        }
        var circleHandle = canvas.querySelector('#' + options.id);
        if (circleHandle) {
            circleHandle.setAttribute('role', 'separator');
        }
    };
    /**
     * @private
     * @param {DrawingElement} element - Specified the drawing element.
     * @param {HTMLCanvasElement | SVGElement} canvas - Specified the canvas element.
     * @param {ThumbsConstraints} constraints - Specified the thumbs constraints element.
     * @param {number} currentZoom - Specified the current zoom value.
     * @param {boolean} canMask - Specified the is mask or not.
     * @param {number} enableNode - Specified the node number.
     * @param {boolean} nodeConstraints - Specified the node constraints or not.
     * @param {boolean} isStamp - Specified is stamp or not.
     * @param {boolean} isSticky - Specified is sticky or not.
     * @param {boolean} isPath - Specified is path or not.
     * @param {boolean} isFreeText - Specified is free text or not.
     * @param {AnnotationSelectorSettingsModel} currentSelector - Specified the current selector settings value.
     * @returns {void}
     */
    Drawing.prototype.renderResizeHandle = function (element, canvas, constraints, currentZoom, canMask, enableNode, nodeConstraints, isStamp, isSticky, isPath, isFreeText, currentSelector) {
        var left = element.offsetX - element.actualSize.width * element.pivot.x;
        var top = element.offsetY - element.actualSize.height * element.pivot.y;
        var height = element.actualSize.height;
        var width = element.actualSize.width;
        var transform = { scale: currentZoom, tx: 0, ty: 0 };
        if (isStamp) {
            this.renderPivotLine(element, canvas, transform);
            this.renderRotateThumb(element, canvas, transform);
        }
        if (isFreeText) {
            isStamp = true;
        }
        this.renderBorder(element, canvas, currentSelector, transform, enableNode, nodeConstraints, true, isSticky);
        var nodeWidth = element.actualSize.width * currentZoom;
        var nodeHeight = element.actualSize.height * currentZoom;
        var shapeType = this.pdfViewer.selectedItems.annotations.length > 0 ?
            this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType :
            this.pdfViewer.selectedItems.formFields[0].formFieldAnnotationType;
        var allowPermission = false;
        if (!this.pdfViewer.formDesignerModule) {
            var annotation = this.pdfViewer.selectedItems.annotations[0];
            var allowedInteraction = this.pdfViewer.annotationModule.updateAnnotationAllowedInteractions(annotation);
            var isLock = this.pdfViewer.annotationModule.checkIsLockSettings(annotation);
            if ((isLock || annotation.annotationSettings.isLock) && this.getAllowedInteractions(allowedInteraction)) {
                allowPermission = true;
            }
            if (allowedInteraction[0] === 'Select') {
                allowPermission = false;
            }
        }
        var resizerLocation = this.getResizerLocation(shapeType, currentSelector);
        if (resizerLocation < 1 || resizerLocation > 3) {
            resizerLocation = 3;
        }
        var isNodeShape = false;
        if (this.pdfViewer.selectedItems.annotations[0] && (this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Ellipse' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Radius' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Rectangle' || this.pdfViewer.selectedItems.annotations[0].shapeAnnotationType === 'Ink')) {
            isNodeShape = true;
        }
        if (!this.pdfViewer.viewerBase.checkSignatureFormField(element.id) && !nodeConstraints && !isSticky &&
            !isPath && !allowPermission) {
            if (isStamp || (isNodeShape && (nodeWidth >= 40 && nodeHeight >= 40) &&
                (resizerLocation === 1 || resizerLocation === 3))) {
                //Hide corners when the size is less than 40
                this.renderCircularHandle('resizeNorthWest', element, left, top, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeNorthWest, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on top left side direction' }, undefined, 'e-pv-diagram-resize-handle e-northwest', currentSelector);
                this.renderCircularHandle('resizeNorthEast', element, left + width, top, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeNorthEast, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on top right side direction' }, undefined, 'e-pv-diagram-resize-handle e-northeast', currentSelector);
                this.renderCircularHandle('resizeSouthWest', element, left, top + height, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeSouthWest, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on bottom left side direction' }, undefined, 'e-pv-diagram-resize-handle e-southwest', currentSelector);
                this.renderCircularHandle('resizeSouthEast', element, left + width, top + height, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeSouthEast, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on bottom right side direction' }, undefined, 'e-pv-diagram-resize-handle e-southeast', currentSelector);
            }
            if ((!isStamp && !isNodeShape) || (isNodeShape && (resizerLocation === 2 ||
                resizerLocation === 3 ||
                (!(nodeWidth >= 40 && nodeHeight >= 40) && resizerLocation === 1)))) {
                this.renderCircularHandle('resizeNorth', element, left + width / 2, top, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeNorth, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on top side direction' }, undefined, 'e-pv-diagram-resize-handle e-north', currentSelector);
                this.renderCircularHandle('resizeSouth', element, left + width / 2, top + height, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeSouth, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on bottom side direction' }, undefined, 'e-pv-diagram-resize-handle e-south', currentSelector);
                this.renderCircularHandle('resizeWest', element, left, top + height / 2, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeWest, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on left side direction' }, undefined, 'e-pv-diagram-resize-handle e-west', currentSelector);
                this.renderCircularHandle('resizeEast', element, left + width, top + height / 2, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeEast, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on right side direction' }, undefined, 'e-pv-diagram-resize-handle e-east', currentSelector);
            }
        }
        if ((shapeType === 'Textbox' || shapeType === 'Checkbox' || shapeType === 'RadioButton' || shapeType === 'SignatureField' || shapeType === 'InitialField' || shapeType === 'DropdownList' ||
            shapeType === 'ListBox' || shapeType === 'PasswordField')) {
            this.renderCircularHandle('resizeNorth', element, left + width / 2, top, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeNorth, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on top side direction' }, undefined, 'e-pv-diagram-resize-handle e-north', currentSelector);
            this.renderCircularHandle('resizeSouth', element, left + width / 2, top + height, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeSouth, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on bottom side direction' }, undefined, 'e-pv-diagram-resize-handle e-south', currentSelector);
            this.renderCircularHandle('resizeWest', element, left, top + height / 2, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeWest, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on left side direction' }, undefined, 'e-pv-diagram-resize-handle e-west', currentSelector);
            this.renderCircularHandle('resizeEast', element, left + width, top + height / 2, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ResizeEast, transform, undefined, canMask, { 'aria-label': 'Thumb to resize the selected object on right side direction' }, undefined, 'e-pv-diagram-resize-handle e-east', currentSelector);
        }
    };
    Drawing.prototype.getAllowedInteractions = function (allowedInteraction) {
        if (allowedInteraction && allowedInteraction.length > 0) {
            for (var i = 0; i < allowedInteraction.length; i++) {
                if (allowedInteraction[0] !== 'None' && allowedInteraction[parseInt(i.toString(), 10)] === 'Resize') {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} type - Specified the annotation base model.
     * @param {any} currentSelector - Specified the current selector value
     * @returns {AnnotationResizerLocation} - Returns the annotation resizer location value.
     */
    Drawing.prototype.getResizerLocation = function (type, currentSelector) {
        var resizerLocation;
        {
            if (currentSelector && typeof (currentSelector) !== 'object' && currentSelector !== '') {
                var annotationSelector = JSON.parse(currentSelector);
                resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerLocation) ||
                    annotationSelector.resizerLocation === 3 ? 3 : annotationSelector.resizerLocation;
            }
            else if (currentSelector && currentSelector !== '') {
                resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(currentSelector.resizerLocation) ||
                    currentSelector.resizerLocation === 3 ? 3 : currentSelector.resizerLocation;
            }
            else {
                var annotationSelector = this.pdfViewer.annotationSelectorSettings;
                resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSelector.resizerLocation) ||
                    annotationSelector.resizerLocation === 3 ? 3 : annotationSelector.resizerLocation;
                if (type === 'Line' && this.pdfViewer.lineSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.lineSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.lineSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.lineSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'LineWidthArrowHead' && this.pdfViewer.arrowSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.arrowSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Rectangle' && this.pdfViewer.rectangleSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.rectangleSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Ellipse' && this.pdfViewer.circleSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.circleSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.circleSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.circleSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Polygon' && this.pdfViewer.polygonSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.polygonSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Distance') {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.distanceSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Radius' && this.pdfViewer.radiusSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.radiusSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Stamp' && this.pdfViewer.stampSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.stampSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.stampSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.stampSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'FreeText' && this.pdfViewer.freeTextSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerLocation) ||
                        this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.freeTextSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if ((type === 'HandWrittenSignature' || type === 'SignatureText' || type === 'SignatureImage') && this.pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.
                        annotationSelectorSettings.resizerLocation) || this.pdfViewer.handWrittenSignatureSettings.
                        annotationSelectorSettings.resizerLocation === 3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.
                        pdfViewer.handWrittenSignatureSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.handWrittenSignatureSettings.
                            annotationSelectorSettings.resizerLocation)) ? this.pdfViewer.
                        handWrittenSignatureSettings.annotationSelectorSettings.resizerLocation : 3;
                }
                else if (type === 'Ink' && this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings) {
                    resizerLocation = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerLocation)
                        || this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerLocation ===
                            3 ? 3 : (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings)
                        && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerLocation))
                        ? this.pdfViewer.inkAnnotationSettings.annotationSelectorSettings.resizerLocation : 3;
                }
            }
            return resizerLocation;
        }
    };
    /**
     * @private
     * @param {DrawingElement} element - Specified the drawing element.
     * @param {HTMLCanvasElement | SVGAElement} canvas - Specified the canvas element.
     * @param {Transforms} transform - Specified the transform values.
     * @param {SelectorConstraints} selectorConstraints - Specified the selector constraints value.
     * @param {boolean} canMask - Specified is mask value or not.
     * @returns {void}
     */
    Drawing.prototype.renderPivotLine = function (element, canvas, transform, selectorConstraints, canMask) {
        var wrapper = element;
        var dashArray = '2,3';
        var visible = true;
        if (canMask) {
            visible = false;
        }
        var options = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .getBaseShapeAttributes */ .iX)(wrapper, transform);
        options.fill = 'None';
        options.stroke = 'black';
        options.strokeWidth = 1;
        options.dashArray = dashArray;
        options.visible = visible;
        var scale = transform.scale;
        options.x *= scale;
        options.y *= scale;
        options.width *= scale;
        options.height *= scale;
        options.id = 'pivotLine';
        options.class = 'e-diagram-pivot-line';
        var startPoint = { x: wrapper.actualSize.width * wrapper.pivot.x * scale, y: -20 };
        var endPoint = { x: wrapper.actualSize.width * wrapper.pivot.x * scale, y: 0 };
        options.startPoint = startPoint;
        options.endPoint = endPoint;
        var checkBorder = this.shownBorder();
        if (checkBorder) {
            this.svgRenderer.drawLine(canvas, options);
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} selector - Specified the annotation element.
     * @param {HTMLCanvasElement | SVGAElement} canvas - Specified the canvas element.
     * @param {SelectorConstraints} constraints - Specified the selector constraints value.
     * @param {Transforms} transform - Specified the transform values.
     * @param {boolean} connectedSource - Specified is connected source or not.
     * @param {boolean} connectedTarget - Specified is connected target or not.
     * @param {boolean} isSegmentEditing - Specified is segment editing or not.
     * @param {AnnotationSelectorSettingsModel} currentSelector - Specified the current selector value.
     * @returns {void}
     */
    Drawing.prototype.renderEndPointHandle = function (selector, canvas, constraints, transform, connectedSource, connectedTarget, isSegmentEditing, currentSelector) {
        transform = transform || { tx: 0, ty: 0, scale: 1 };
        var sourcePoint = selector.sourcePoint;
        var targetPoint = selector.targetPoint;
        var wrapper = selector.wrapper;
        var i;
        var checkBorder = this.shownBorder();
        if (checkBorder) {
            for (i = 0; i < selector.vertexPoints.length; i++) {
                var segment = selector.vertexPoints[parseInt(i.toString(), 10)];
                this.renderCircularHandle(('segementThumb_' + (i + 1)), wrapper, segment.x, segment.y, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ConnectorSource, transform, connectedSource, null, null, i, 'e-pv-diagram-resize-handle', currentSelector);
            }
        }
        var leaderCount = 0;
        if (selector.shapeAnnotationType === 'Distance') {
            for (i = 0; i < selector.wrapper.children.length; i++) {
                var segment = selector.wrapper.children[parseInt(i.toString(), 10)];
                var newPoint1 = void 0;
                var angle = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_17__/* .Point */ .b.findAngle(selector.sourcePoint, selector.targetPoint);
                if (segment.id.indexOf('leader') > -1) {
                    var center = selector.wrapper.children[0].bounds.center;
                    if (leaderCount === 0) {
                        newPoint1 = { x: selector.sourcePoint.x, y: selector.sourcePoint.y - selector.leaderHeight };
                        center = sourcePoint;
                    }
                    else {
                        newPoint1 = { x: selector.targetPoint.x, y: selector.targetPoint.y - selector.leaderHeight };
                        center = targetPoint;
                    }
                    var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
                    (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, angle, center.x, center.y);
                    if (checkBorder) {
                        var rotatedPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, { x: newPoint1.x, y: newPoint1.y });
                        this.renderCircularHandle(('leaderThumb_' + (i + 1)), wrapper, rotatedPoint.x, rotatedPoint.y, canvas, true, constraints & _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_14__/* .ThumbsConstraints */ .Ur.ConnectorSource, transform, connectedSource, null, null, i, 'e-pv-diagram-resize-handle', currentSelector);
                    }
                    leaderCount++;
                }
            }
        }
    };
    /**
     * @private
     * @returns {void}
     */
    Drawing.prototype.initSelectorWrapper = function () {
        var selectorModel = this.pdfViewer.selectedItems;
        selectorModel.init(this);
    };
    /**
     * @private
     * @param {string[]} objArray - Specified the annotation object array.
     * @param {any} currentSelector - Specified the current selector value.
     * @param {boolean} multipleSelection - Specified the multiple selection or not.
     * @param {boolean} preventUpdate - Specified the prevent update or not.
     * @returns {void}
     */
    Drawing.prototype.select = function (objArray, currentSelector, multipleSelection, preventUpdate) {
        var selectorModel = this.pdfViewer.selectedItems;
        var _loop_1 = function (i) {
            var obj = this_1.pdfViewer.nameTable[objArray[parseInt(i.toString(), 10)]];
            if (obj.formFieldAnnotationType && this_1.pdfViewer.designerMode) {
                selectorModel.formFields.push(obj);
                this_1.initSelectorWrapper();
                selectorModel.wrapper.children.push(obj.wrapper);
                this_1.renderSelector(obj.pageIndex, currentSelector, obj, true);
            }
            else if (obj && !obj.formFieldAnnotationType) {
                if (!(obj instanceof _selector__WEBPACK_IMPORTED_MODULE_20__/* .Selector */ .M) && obj.wrapper.visible && this_1.pdfViewer.annotationModule) {
                    var annotationSettings = void 0;
                    if (obj.annotationSettings) {
                        annotationSettings = obj.annotationSettings;
                        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSettings) && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSettings.isLock)) {
                            annotationSettings.isLock = JSON.parse(annotationSettings.isLock);
                        }
                    }
                    else if (!obj.formFieldAnnotationType) {
                        annotationSettings = this_1.pdfViewer.annotationModule.findAnnotationSettings(obj, true);
                        obj.annotationSettings = annotationSettings;
                    }
                    var isLock = !obj.formFieldAnnotationType ? (annotationSettings ? annotationSettings.isLock : false) : false;
                    if (annotationSettings && annotationSettings.isLock && this_1.pdfViewer.annotationModule.checkAllowedInteractions('Select', obj)) {
                        isLock = false;
                    }
                    var isSign = obj.shapeAnnotationType === 'Path' || obj.shapeAnnotationType === 'SignatureText'
                        || obj.shapeAnnotationType === 'SignatureImage';
                    var isReadOnly_1 = false;
                    this_1.pdfViewer.formFieldCollection.filter(function (field) { return field.id === obj.id.split('_')[0]; })
                        .forEach(function (field) { return isReadOnly_1 = field.isReadonly; });
                    if (!(isReadOnly_1 && isSign)) {
                        selectorModel.annotations.push(obj);
                        var checkBorder = this_1.shownBorder();
                        if (checkBorder) {
                            this_1.initSelectorWrapper();
                            selectorModel.wrapper.rotateAngle = selectorModel.rotateAngle = 0;
                            selectorModel.wrapper.children.push(obj.wrapper);
                            if (!preventUpdate) {
                                this_1.renderSelector(obj.pageIndex, currentSelector, obj, true);
                            }
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < objArray.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * @private
     * @param {number} tx - Specified the tx value.
     * @param {number} ty - Specified the ty value.
     * @param {number} pageIndex - Specified the page index value.
     * @param {any} currentSelector - Specified the current selector value.
     * @param {PdfAnnotationBaseModel} helper - Specified the helper object.
     * @returns {boolean} - boolean value
     */
    Drawing.prototype.dragSelectedObjects = function (tx, ty, pageIndex, currentSelector, helper) {
        var obj = this.pdfViewer.selectedItems;
        this.drag(obj, tx, ty, currentSelector, helper);
        return true;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotaion object.
     * @param {number} tx - Specified the tx value.
     * @param {number} ty - Specified the ty value.
     * @param {any} currentSelector - Specified the current selector value.
     * @param {PdfAnnotationBaseModel} helper - Specified the helper object.
     * @returns {void}
     */
    Drawing.prototype.drag = function (obj, tx, ty, currentSelector, helper) {
        if (obj instanceof _selector__WEBPACK_IMPORTED_MODULE_20__/* .Selector */ .M) {
            if (obj.annotations.length) {
                for (var _i = 0, _a = obj.annotations; _i < _a.length; _i++) {
                    var node = _a[_i];
                    this.drag(node, tx, ty, currentSelector, helper);
                    this.renderSelector(node.pageIndex, currentSelector, helper);
                }
            }
            else if (obj.formFields.length) {
                for (var _b = 0, _c = obj.formFields; _b < _c.length; _b++) {
                    var node = _c[_b];
                    this.drag(node, tx, ty, currentSelector, helper);
                    this.renderSelector(node.pageIndex, currentSelector, helper);
                }
            }
        }
        else {
            this.dragAnnotation(obj, tx, ty);
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotaion object.
     * @param {number} tx - Specified the tx value.
     * @param {number} ty - Specified the ty value.
     * @returns {void}
     */
    Drawing.prototype.dragAnnotation = function (obj, tx, ty) {
        //bug (EJ2-62649) : fixed an issue with difficulty on moving/ resizing free text annotation that added in edge of viewer
        var newDiff = this.moveInsideViewer(obj, tx, ty);
        obj.wrapper.offsetX += newDiff.tx;
        obj.wrapper.offsetY += newDiff.ty;
        if ((0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLineShapes */ .nf)(obj) || obj.shapeAnnotationType === 'Polygon') {
            if (obj.wrapper.children.length) {
                var nodes = obj.wrapper.children;
                for (var i = 0; i < nodes.length; i++) {
                    nodes[parseInt(i.toString(), 10)].offsetX += tx;
                    nodes[parseInt(i.toString(), 10)].offsetY += ty;
                }
            }
            this.dragControlPoint(obj, tx, ty, true);
        }
        this.nodePropertyChange(obj, { bounds: { x: obj.wrapper.offsetX, y: obj.wrapper.offsetY } });
        obj.wrapper.measureChildren = false;
        var canvas = this.pdfViewer.viewerBase.getAnnotationCanvas('_annotationCanvas_', obj.pageIndex);
        this.pdfViewer.renderDrawing(canvas, obj.pageIndex);
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotaion object.
     * @param {number} tx - Specified the tx value.
     * @param {number} ty - Specified the ty value.
     * @param {boolean} preventUpdate - Specified the prevent update or not.
     * @param {number} segmentNumber - Specified the segment value.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.dragControlPoint = function (obj, tx, ty, preventUpdate, segmentNumber) {
        var connector = this.pdfViewer.nameTable[obj.id];
        for (var i = 0; i < connector.vertexPoints.length; i++) {
            (connector.vertexPoints[parseInt(i.toString(), 10)]).x += tx;
            (connector.vertexPoints[parseInt(i.toString(), 10)]).y += ty;
        }
        if (!preventUpdate) {
            this.updateEndPoint(connector);
        }
        return true;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} connector - Specified the connector object.
     * @returns {void}
     */
    Drawing.prototype.updateEndPoint = function (connector) {
        this.nodePropertyChange(connector, { vertexPoints: connector.vertexPoints });
        this.renderSelector(connector.pageIndex);
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} actualObject - Specified the actual annotaion object.
     * @param {PdfAnnotationBaseModel} node - Specified the node annotation object.
     * @param {boolean} isNeedToRender - Specified to render drawing.
     * @returns {void}
     */
    Drawing.prototype.nodePropertyChange = function (actualObject, node, isNeedToRender) {
        var updateConnector = false;
        var i;
        var update;
        if (node.bounds) {
            if (node.bounds.width !== undefined) {
                actualObject.bounds.width = actualObject.wrapper.width = node.bounds.width;
            }
            if (node.bounds.height !== undefined) {
                actualObject.bounds.height = actualObject.wrapper.height = node.bounds.height;
            }
            if (node.bounds.x !== undefined) {
                actualObject.bounds.x = node.bounds.x - (actualObject.bounds.width * 0.5);
                actualObject.wrapper.offsetX = node.bounds.x;
                update = true;
                updateConnector = true;
            }
            if (node.bounds.y !== undefined) {
                actualObject.bounds.y = node.bounds.y - (actualObject.bounds.height * 0.5);
                actualObject.wrapper.offsetY = node.bounds.y;
                update = true;
                updateConnector = true;
            }
            if (node.leaderHeight !== undefined) {
                actualObject.leaderHeight = node.leaderHeight;
                this.updateConnector(actualObject, actualObject.vertexPoints);
            }
            if (actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                for (var i_1 = 0; i_1 < children.length; i_1++) {
                    if (children[parseInt(i_1.toString(), 10)].id) {
                        var names = children[parseInt(i_1.toString(), 10)].id.split('_');
                        if (names.length && (names.indexOf('perimeter') > -1 || names.indexOf('radius') > -1)) {
                            this.setNodePosition(children[parseInt(i_1.toString(), 10)], actualObject);
                        }
                        else if (names.length && (names.indexOf('srcDec') > -1)) {
                            children[parseInt(i_1.toString(), 10)].offsetX = actualObject.vertexPoints[0].x;
                            children[parseInt(i_1.toString(), 10)].offsetY = actualObject.vertexPoints[0].y;
                        }
                        else if (names.length && names.indexOf('tarDec') > -1) {
                            children[parseInt(i_1.toString(), 10)].offsetX =
                                actualObject.vertexPoints[actualObject.vertexPoints.length - 1].x;
                            children[parseInt(i_1.toString(), 10)].offsetY =
                                actualObject.vertexPoints[actualObject.vertexPoints.length - 1].y;
                        }
                        else if (names.length && (names.indexOf('stamp') > -1)) {
                            var ratio = 0;
                            var heightRatio = 2;
                            if (actualObject.wrapper.width !== undefined && actualObject.wrapper.height !== undefined) {
                                ratio = 20;
                                heightRatio = 2.9;
                            }
                            if (actualObject.isDynamicStamp) {
                                children[parseInt(i_1.toString(), 10)].width = actualObject.bounds.width - ratio;
                                children[parseInt(i_1.toString(), 10)].height = (actualObject.bounds.height / 2) - ratio;
                                var element = children[1];
                                var annotationSettings = this.pdfViewer.stampSettings ?
                                    this.pdfViewer.stampSettings : this.pdfViewer.annotationSettings;
                                if (annotationSettings && (annotationSettings.maxHeight ||
                                    annotationSettings.maxWidth) && (actualObject.bounds.height > 60)) {
                                    if (ratio !== 0) {
                                        element.style.fontSize = (actualObject.bounds.width / ratio);
                                    }
                                    else {
                                        element.style.fontSize = (actualObject.wrapper.bounds.width / 20);
                                    }
                                }
                                else {
                                    if (ratio !== 0) {
                                        var targetWidth = actualObject.rotateAngle > 0 ?
                                            actualObject.wrapper.actualSize.width : actualObject.bounds.width;
                                        element.style.fontSize = this.fontSizeCalculation(actualObject, element, (targetWidth - 20));
                                    }
                                    else {
                                        var targetWidth = actualObject.rotateAngle > 0 ?
                                            actualObject.wrapper.actualSize.width : actualObject.wrapper.bounds.width;
                                        element.style.fontSize = this.
                                            fontSizeCalculation(actualObject, element, (targetWidth - 20));
                                    }
                                }
                                if (ratio !== 0) {
                                    element.margin.bottom = -(children[parseInt(i_1.toString(), 10)].height / 2);
                                }
                            }
                            else {
                                children[parseInt(i_1.toString(), 10)].width = actualObject.bounds.width - ratio;
                                children[parseInt(i_1.toString(), 10)].height = actualObject.bounds.height - ratio;
                            }
                            children[parseInt(i_1.toString(), 10)].offsetX = actualObject.wrapper.offsetX;
                            children[parseInt(i_1.toString(), 10)].offsetY = actualObject.wrapper.offsetX;
                            children[parseInt(i_1.toString(), 10)].isDirt = true;
                        }
                    }
                }
            }
        }
        if (node.sourceDecoraterShapes !== undefined) {
            actualObject.sourceDecoraterShapes = node.sourceDecoraterShapes;
            this.updateConnector(actualObject, actualObject.vertexPoints);
        }
        if (node.isReadonly !== undefined && actualObject.shapeAnnotationType === 'FreeText') {
            actualObject.isReadonly = node.isReadonly;
        }
        if (node.annotationSelectorSettings !== undefined) {
            actualObject.annotationSelectorSettings = node.annotationSelectorSettings;
        }
        if (node.taregetDecoraterShapes !== undefined) {
            actualObject.taregetDecoraterShapes = node.taregetDecoraterShapes;
            update = true;
            this.updateConnector(actualObject, actualObject.vertexPoints);
        }
        if (node.fillColor !== undefined) {
            actualObject.fillColor = node.fillColor;
            actualObject.wrapper.children[0].style.fill = node.fillColor;
            if ((actualObject.enableShapeLabel || actualObject.measureType) && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_2 = 0; i_2 < children.length; i_2++) {
                    if (children[parseInt(i_2.toString(), 10)].textNodes) {
                        if (actualObject.enableShapeLabel) {
                            actualObject.labelFillColor = node.fillColor;
                            children[parseInt(i_2.toString(), 10)].style.fill = node.fillColor;
                        }
                        if (actualObject.measureType) {
                            children[parseInt(i_2.toString(), 10)].style.fill = node.fillColor;
                        }
                    }
                }
            }
            update = true;
        }
        if (actualObject.enableShapeLabel && node.labelFillColor !== undefined) {
            if (actualObject.enableShapeLabel && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_3 = 0; i_3 < children.length; i_3++) {
                    if (children[parseInt(i_3.toString(), 10)].textNodes) {
                        actualObject.labelFillColor = node.labelFillColor;
                        children[parseInt(i_3.toString(), 10)].style.fill = node.labelFillColor;
                    }
                }
            }
        }
        if (node.opacity !== undefined) {
            if (actualObject.shapeAnnotationType === 'Stamp' || actualObject.shapeAnnotationType === 'FreeText') {
                actualObject.wrapper.children[1].style.opacity = node.opacity;
                if (actualObject.wrapper.children[2]) {
                    actualObject.wrapper.children[2].style.opacity = node.opacity;
                }
            }
            else {
                if (actualObject.shapeAnnotationType === 'StickyNotes') {
                    this.pdfViewer.nameTable[actualObject.annotName].wrapper.children[0].style.opacity = node.opacity;
                }
            }
            actualObject.opacity = node.opacity;
            actualObject.wrapper.children[0].style.opacity = node.opacity;
            if (actualObject.enableShapeLabel && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_4 = 0; i_4 < children.length; i_4++) {
                    if (children[parseInt(i_4.toString(), 10)].textNodes) {
                        children[parseInt(i_4.toString(), 10)].style.opacity = node.labelOpacity;
                    }
                }
            }
            update = true;
            updateConnector = true;
        }
        if (actualObject.enableShapeLabel && node.labelOpacity !== undefined) {
            if (actualObject.enableShapeLabel && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_5 = 0; i_5 < children.length; i_5++) {
                    if (children[parseInt(i_5.toString(), 10)].textNodes) {
                        children[parseInt(i_5.toString(), 10)].style.opacity = node.labelOpacity;
                    }
                }
            }
        }
        if (node.rotateAngle !== undefined) {
            actualObject.rotateAngle = node.rotateAngle;
            actualObject.wrapper.rotateAngle = node.rotateAngle;
            update = true;
            updateConnector = true;
        }
        if (node.strokeColor !== undefined) {
            actualObject.strokeColor = node.strokeColor;
            actualObject.wrapper.children[0].style.strokeColor = node.strokeColor;
            update = true;
            if (actualObject.shapeAnnotationType === 'Radius' && actualObject.wrapper.children[1]) {
                actualObject.wrapper.children[1].style.strokeColor = node.strokeColor;
            }
            updateConnector = true;
        }
        if (node.fontColor !== undefined) {
            actualObject.fontColor = node.fontColor;
            if (actualObject.shapeAnnotationType === 'FreeText' && actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                children[1].style.color = node.fontColor;
                if (actualObject.textAlign === 'Justify') {
                    children[1].horizontalAlignment = 'Center';
                }
                else {
                    children[1].horizontalAlignment = 'Auto';
                }
            }
            if (actualObject.enableShapeLabel && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_6 = 0; i_6 < children.length; i_6++) {
                    if (children[parseInt(i_6.toString(), 10)].textNodes) {
                        children[parseInt(i_6.toString(), 10)].style.color = node.fontColor;
                    }
                }
            }
            update = true;
            updateConnector = true;
        }
        if (node.fontFamily !== undefined) {
            actualObject.fontFamily = node.fontFamily;
            if (actualObject.shapeAnnotationType === 'FreeText' && actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                children[1].style.fontFamily = node.fontFamily;
            }
            if (actualObject.enableShapeLabel && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_7 = 0; i_7 < children.length; i_7++) {
                    if (children[parseInt(i_7.toString(), 10)].textNodes) {
                        children[parseInt(i_7.toString(), 10)].style.fontFamily = node.fontFamily;
                    }
                }
            }
            update = true;
            updateConnector = true;
        }
        if (node.fontSize !== undefined) {
            if ((actualObject.shapeAnnotationType === 'FreeText' || actualObject.shapeAnnotationType === 'SignatureText') && actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                children[1].style.fontSize = node.fontSize;
                if (actualObject.shapeAnnotationType === 'SignatureText') {
                    actualObject.wrapper.children[1].bounds.width = actualObject.bounds.width;
                    actualObject.wrapper.children[1].desiredSize.width = actualObject.bounds.width;
                    actualObject.wrapper.children[1].actualSize.width = actualObject.bounds.width;
                    children[1].horizontalAlignment = 'Center';
                    children[1].verticalAlignment = 'Center';
                    children[1].setOffsetWithRespectToBounds(0, 0, 'Absolute');
                }
            }
            if (actualObject.enableShapeLabel && actualObject.wrapper && actualObject.wrapper.children) {
                var children = actualObject.wrapper.children;
                for (var i_8 = 0; i_8 < children.length; i_8++) {
                    if (children[parseInt(i_8.toString(), 10)].textNodes) {
                        children[parseInt(i_8.toString(), 10)].style.fontSize = node.fontSize;
                    }
                }
            }
            if (this.pdfViewer.enableToolbar && this.pdfViewer.toolbarModule) {
                this.pdfViewer.toolbarModule.annotationToolbarModule.updateFontSizeInIcon(node.fontSize);
            }
            else if (this.pdfViewer.annotationModule && actualObject.fontSize !== node.fontSize) {
                this.pdfViewer.annotationModule.handleFontSizeUpdate(node.fontSize);
            }
            update = true;
            updateConnector = true;
        }
        if (node.font !== undefined) {
            if (actualObject.shapeAnnotationType === 'FreeText' && actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                if (node.font.isBold !== undefined) {
                    children[1].style.bold = node.font.isBold;
                    actualObject.font.isBold = node.font.isBold;
                }
                if (node.font.isItalic !== undefined) {
                    children[1].style.italic = node.font.isItalic;
                    actualObject.font.isItalic = node.font.isItalic;
                }
                if (node.font.isUnderline !== undefined) {
                    if (node.font.isUnderline) {
                        actualObject.font.isStrikeout = false;
                    }
                    if (node.font.isUnderline === true) {
                        children[1].style.textDecoration = 'Underline';
                    }
                    else {
                        if (!node.font.isStrikeout) {
                            children[1].style.textDecoration = 'None';
                        }
                    }
                    actualObject.font.isUnderline = node.font.isUnderline;
                }
                if (node.font.isStrikeout !== undefined) {
                    if (node.font.isStrikeout) {
                        actualObject.font.isUnderline = false;
                    }
                    if (node.font.isStrikeout === true) {
                        children[1].style.textDecoration = 'LineThrough';
                    }
                    else {
                        if (!node.font.isUnderline) {
                            children[1].style.textDecoration = 'None';
                        }
                    }
                    actualObject.font.isStrikeout = node.font.isStrikeout;
                }
            }
            update = true;
            updateConnector = true;
        }
        if (node.textAlign !== undefined) {
            var currentAnnotation = (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.selectedItems.annotations) && this.pdfViewer.selectedItems.annotations.length > 0) ?
                this.pdfViewer.selectedItems.annotations[0] : actualObject;
            var clonedObject = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .cloneObject */ .h2)(currentAnnotation);
            var redoClonedObject = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .cloneObject */ .h2)(currentAnnotation);
            if (actualObject.textAlign !== node.textAlign) {
                actualObject.textAlign = node.textAlign;
                redoClonedObject.textAlign = node.textAlign;
                if (actualObject.shapeAnnotationType === 'FreeText' && actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                    var children = actualObject.wrapper.children;
                    children[1].style.textAlign = node.textAlign;
                    if (children[1].childNodes.length === 1) {
                        if (actualObject.textAlign === 'Justify') {
                            children[1].horizontalAlignment = 'Left';
                            children[1].setOffsetWithRespectToBounds(0.01, 0, null);
                        }
                        else if (actualObject.textAlign === 'Right') {
                            children[1].horizontalAlignment = 'Right';
                            children[1].setOffsetWithRespectToBounds(1, 0, null);
                        }
                        else if (actualObject.textAlign === 'Left') {
                            children[1].horizontalAlignment = 'Left';
                            children[1].setOffsetWithRespectToBounds(0.01, 0, null);
                        }
                        else if (actualObject.textAlign === 'Center') {
                            children[1].horizontalAlignment = 'Center';
                            children[1].setOffsetWithRespectToBounds(0.51, 0, null);
                        }
                    }
                    else if (children[1].childNodes.length > 1 && actualObject.textAlign === 'Justify') {
                        children[1].horizontalAlignment = 'Center';
                    }
                    else {
                        children[1].horizontalAlignment = 'Auto';
                    }
                    if (!this.pdfViewer.annotation.isUndoRedoAction) {
                        this.pdfViewer.annotation.addAction(this.pdfViewer.viewerBase.getActivePage(false), null, currentAnnotation, 'textAlign', '', clonedObject, redoClonedObject);
                    }
                }
                update = true;
                updateConnector = true;
            }
        }
        if (node.thickness !== undefined) {
            actualObject.thickness = node.thickness;
            actualObject.wrapper.children[0].style.strokeWidth = node.thickness;
            if (actualObject.shapeAnnotationType === 'Line' || actualObject.shapeAnnotationType === 'LineWidthArrowHead') {
                for (var i_9 = 0; i_9 < actualObject.wrapper.children.length; i_9++) {
                    var child = actualObject.wrapper.children[parseInt(i_9.toString(), 10)];
                    if (child.id.includes('srcDec') || child.id.includes('tarDec')) {
                        child.width = 12 * node.thickness;
                        child.height = 12 * node.thickness;
                    }
                }
            }
            if (actualObject.shapeAnnotationType === 'Radius' && actualObject.wrapper.children[1]) {
                actualObject.wrapper.children[1].style.strokeWidth = node.thickness;
            }
            update = true;
            updateConnector = true;
        }
        if (node.borderDashArray !== undefined) {
            actualObject.borderDashArray = node.borderDashArray;
            actualObject.wrapper.children[0].style.strokeDashArray = node.borderDashArray;
        }
        if (node.borderStyle !== undefined) {
            actualObject.borderStyle = node.borderStyle;
        }
        if (node.author !== undefined) {
            actualObject.author = node.author;
        }
        if (node.modifiedDate !== undefined) {
            actualObject.modifiedDate = node.modifiedDate;
        }
        if (node.subject !== undefined) {
            actualObject.subject = node.subject;
        }
        if (node.vertexPoints !== undefined) {
            actualObject.vertexPoints = node.vertexPoints;
            this.pdfViewer.nameTable[actualObject.id].vertexPoints = node.vertexPoints;
            this.updateConnector(actualObject, node.vertexPoints);
        }
        if (node.leaderHeight !== undefined && actualObject.shapeAnnotationType !== 'Polygon') {
            actualObject.leaderHeight = node.leaderHeight;
            this.updateConnector(actualObject, actualObject.vertexPoints);
        }
        if (node.notes !== undefined) {
            actualObject.notes = node.notes;
        }
        if (node.annotName !== undefined) {
            actualObject.annotName = node.annotName;
        }
        if (actualObject.shapeAnnotationType === 'Distance') {
            for (i = 0; i < actualObject.wrapper.children.length; i++) {
                var segment = actualObject.wrapper.children[parseInt(i.toString(), 10)];
                var points = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getConnectorPoints */ .Pv)(actualObject);
                if (segment.id.indexOf('leader1') > -1) {
                    this.setLineDistance(actualObject, points, segment, false);
                }
                if (segment.id.indexOf('leader2') > -1) {
                    this.setLineDistance(actualObject, points, segment, true);
                }
            }
            this.updateConnector(actualObject, actualObject.vertexPoints);
        }
        if (actualObject.shapeAnnotationType === 'Polygon' && node.vertexPoints) {
            actualObject.data = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .getPolygonPath */ .Ul)(actualObject.vertexPoints);
            var path = actualObject.wrapper.children[0];
            path.data = actualObject.data;
            path.canMeasurePath = true;
        }
        if ((0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLineShapes */ .nf)(actualObject)) {
            for (var i_10 = 0; i_10 < actualObject.wrapper.children.length; i_10++) {
                var childElement = actualObject.wrapper.children[parseInt(i_10.toString(), 10)];
                if (!childElement.textNodes) {
                    (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .setElementStype */ .YM)(actualObject, actualObject.wrapper.children[parseInt(i_10.toString(), 10)]);
                }
                if (actualObject.enableShapeLabel === true) {
                    if (actualObject.wrapper.children[parseInt(i_10.toString(), 10)] instanceof _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__/* .TextElement */ .S) {
                        actualObject.wrapper.children[parseInt(i_10.toString(), 10)].style.fill = actualObject.labelFillColor;
                    }
                    if ((actualObject.wrapper.children[parseInt(i_10.toString(), 10)] instanceof _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a && actualObject.measureType === 'Perimeter')) {
                        actualObject.wrapper.children[parseInt(i_10.toString(), 10)].style.fill = 'transparent';
                    }
                }
                else {
                    if ((actualObject.wrapper.children[parseInt(i_10.toString(), 10)] instanceof _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_9__/* .PathElement */ .a && actualObject.measureType === 'Perimeter') || actualObject.wrapper.children[parseInt(i_10.toString(), 10)] instanceof _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_11__/* .TextElement */ .S) {
                        actualObject.wrapper.children[parseInt(i_10.toString(), 10)].style.fill = 'transparent';
                    }
                }
            }
        }
        if (actualObject && (actualObject.shapeAnnotationType === 'FreeText' || actualObject.enableShapeLabel === true)) {
            if (actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                for (var i_11 = 0; i_11 < children.length; i_11++) {
                    if (children[parseInt(i_11.toString(), 10)].textNodes) {
                        if (actualObject.shapeAnnotationType === 'FreeText') {
                            if (node.dynamicText) {
                                children[parseInt(i_11.toString(), 10)].content = node.dynamicText;
                                actualObject.dynamicText = node.dynamicText;
                            }
                            else {
                                children[parseInt(i_11.toString(), 10)].content = actualObject.dynamicText;
                            }
                            children[parseInt(i_11.toString(), 10)].width = actualObject.bounds.width;
                        }
                        else if (actualObject.enableShapeLabel === true && actualObject.measureType) {
                            if (node.labelContent) {
                                children[parseInt(i_11.toString(), 10)].content = node.labelContent;
                                actualObject.labelContent = node.labelContent;
                            }
                            else {
                                children[parseInt(i_11.toString(), 10)].content = actualObject.labelContent;
                            }
                            actualObject.notes = children[parseInt(i_11.toString(), 10)].content;
                        }
                        else if (actualObject.enableShapeLabel === true) {
                            if (node.labelContent) {
                                children[parseInt(i_11.toString(), 10)].content = node.labelContent;
                                actualObject.labelContent = node.labelContent;
                            }
                            else {
                                children[parseInt(i_11.toString(), 10)].content = actualObject.labelContent;
                            }
                            actualObject.notes = children[parseInt(i_11.toString(), 10)].content;
                        }
                        children[parseInt(i_11.toString(), 10)].isDirt = true;
                    }
                    /** set text node width less than the parent */
                }
            }
        }
        if (actualObject && actualObject.shapeAnnotationType === 'SignatureText' && actualObject.wrapper) {
            if (actualObject.wrapper.children && actualObject.wrapper.children.length > 1) {
                actualObject.wrapper.children[1].isDirt = true;
            }
        }
        if (actualObject && actualObject.shapeAnnotationType === 'FreeText' && this.pdfViewer.annotationModule.stickyNotesAnnotationModule.textFromCommentPanel) {
            actualObject.wrapper.width = undefined;
            actualObject.wrapper.height = undefined;
            actualObject.wrapper.measure(new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__/* .Size */ .o(actualObject.bounds.width, actualObject.bounds.height));
            this.pdfViewer.annotationModule.stickyNotesAnnotationModule.textFromCommentPanel = false;
        }
        else {
            actualObject.wrapper.measure(new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__/* .Size */ .o(actualObject.wrapper.bounds.width, actualObject.wrapper.bounds.height));
        }
        actualObject.wrapper.arrange(actualObject.wrapper.desiredSize);
        if (actualObject && actualObject.formFieldAnnotationType) {
            if (actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children[0];
                children.actualSize.width = actualObject.wrapper.desiredSize.width;
                children.actualSize.height = actualObject.wrapper.desiredSize.height;
            }
        }
        if (actualObject && actualObject.shapeAnnotationType === 'FreeText' && !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(actualObject.subject)) {
            if (actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                if (children[1].childNodes.length > 1 && actualObject.textAlign === 'Justify') {
                    children[1].horizontalAlignment = 'Center';
                }
                else if (children[1].childNodes.length === 1) {
                    if (actualObject.textAlign === 'Justify') {
                        children[1].horizontalAlignment = 'Left';
                        children[1].setOffsetWithRespectToBounds(0.01, 0, null);
                    }
                    else if (actualObject.textAlign === 'Right') {
                        children[1].horizontalAlignment = 'Right';
                        children[1].setOffsetWithRespectToBounds(1, 0, null);
                    }
                    else if (actualObject.textAlign === 'Left') {
                        children[1].horizontalAlignment = 'Left';
                        children[1].setOffsetWithRespectToBounds(0.01, 0, null);
                    }
                    else if (actualObject.textAlign === 'Center') {
                        children[1].horizontalAlignment = 'Center';
                        children[1].setOffsetWithRespectToBounds(0.51, 0, null);
                    }
                }
                for (var i_12 = 0; i_12 < children.length; i_12++) {
                    if (children[parseInt(i_12.toString(), 10)].textNodes && children[parseInt(i_12.toString(), 10)].textNodes.length > 0) {
                        children[parseInt(i_12.toString(), 10)].isDirt = true;
                        var childNodeHeight = children[parseInt(i_12.toString(), 10)].textNodes.length *
                            children[parseInt(i_12.toString(), 10)].textNodes[0].dy;
                        var heightDiff = actualObject.bounds.height - childNodeHeight;
                        if (heightDiff > 0 && heightDiff < children[parseInt(i_12.toString(), 10)].textNodes[0].dy) {
                            childNodeHeight = childNodeHeight + children[parseInt(i_12.toString(), 10)].textNodes[0].dy;
                        }
                        if (childNodeHeight > actualObject.bounds.height) {
                            var contString = '';
                            for (var index = 0; index < children[parseInt(i_12.toString(), 10)].textNodes.length; index++) {
                                contString = contString + children[parseInt(i_12.toString(), 10)].
                                    textNodes[parseInt(index.toString(), 10)].text;
                            }
                            children[parseInt(i_12.toString(), 10)].content = contString;
                        }
                    }
                    /** set text node width less than the parent */
                    children[parseInt(i_12.toString(), 10)].width = actualObject.bounds.width;
                }
            }
            actualObject.wrapper.measure(new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_6__/* .Size */ .o(actualObject.bounds.width, actualObject.bounds.height));
            actualObject.wrapper.arrange(actualObject.wrapper.desiredSize);
        }
        if (isNeedToRender || (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(isNeedToRender)) {
            this.pdfViewer.renderDrawing(undefined, actualObject.pageIndex);
        }
        if (actualObject && actualObject.shapeAnnotationType === 'FreeText') {
            if (actualObject.wrapper && actualObject.wrapper.children && actualObject.wrapper.children.length) {
                var children = actualObject.wrapper.children;
                if (children[1].childNodes.length === 1 && actualObject.textAlign === 'Justify') {
                    children[1].horizontalAlignment = 'Left';
                    children[1].setOffsetWithRespectToBounds(0.5, 0, null);
                }
                else if (children[1].childNodes.length > 1 && actualObject.textAlign === 'Justify') {
                    children[1].horizontalAlignment = 'Center';
                    children[1].setOffsetWithRespectToBounds(0, 0, null);
                }
            }
        }
    };
    Drawing.prototype.fontSizeCalculation = function (actualObject, element, boundsWidth) {
        var canvas = this.pdfViewer.viewerBase.getAnnotationCanvas('_annotationCanvas_', actualObject.pageIndex);
        var context = canvas.getContext('2d');
        var textwidth = 0;
        var newsize = 0;
        var fontStyle = '';
        if (element.style.italic && element.style.bold) {
            fontStyle = 'bold italic ';
        }
        else if (element.style.bold) {
            fontStyle = 'bold ';
        }
        else if (element.style.italic) {
            fontStyle = 'italic ';
        }
        while (boundsWidth > textwidth) {
            context.font = fontStyle + newsize + 'px ' + element.style.fontFamily;
            textwidth = context.measureText(actualObject.dynamicText).width;
            newsize += 0.1;
        }
        newsize -= 0.1;
        return newsize;
    };
    Drawing.prototype.setLineDistance = function (actualObject, points, segment, leader) {
        var node1;
        if (leader) {
            node1 = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .initLeader */ .qN)(actualObject, points[1], points[0], leader);
        }
        else {
            node1 = (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .initLeader */ .qN)(actualObject, points[0], points[1], leader);
        }
        segment.data = node1.data;
        segment.offsetX = node1.offsetX;
        segment.offsetY = node1.offsetY;
        segment.rotateAngle = node1.rotateAngle;
        segment.width = node1.width;
        segment.height = node1.height;
        segment.pivot = node1.pivot;
        segment.canMeasurePath = true;
        segment.isDirt = true;
    };
    /**
     * @private
     * @param {number} sx - Specified the sx value.
     * @param {number} sy - Specified the sy value.
     * @param {PointModel} pivot - Specified the pivot value.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.scaleSelectedItems = function (sx, sy, pivot) {
        var obj = this.pdfViewer.selectedItems;
        return this.scale(obj, sx, sy, pivot);
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel | SelectorModel} obj - Specified the annotaion object.
     * @param {number} sx - Specified the sx value.
     * @param {number} sy - Specified the sy value.
     * @param {PointModel} pivot - Specified the pivot value.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.scale = function (obj, sx, sy, pivot) {
        var checkBoundaryConstraints = true;
        if (obj instanceof _selector__WEBPACK_IMPORTED_MODULE_20__/* .Selector */ .M) {
            if (obj.annotations && obj.annotations.length) {
                for (var _i = 0, _a = obj.annotations; _i < _a.length; _i++) {
                    var node = _a[_i];
                    checkBoundaryConstraints = this.scaleAnnotation(node, sx, sy, pivot, obj);
                }
            }
            else if (obj.formFields && obj.formFields.length) {
                for (var _b = 0, _c = obj.formFields; _b < _c.length; _b++) {
                    var node = _c[_b];
                    checkBoundaryConstraints = this.scaleAnnotation(node, sx, sy, pivot, obj);
                }
            }
        }
        else {
            checkBoundaryConstraints = this.scaleAnnotation(obj, sx, sy, pivot, undefined);
        }
        return checkBoundaryConstraints;
    };
    /**
     * @private
     * @param {number} sw - Specified the sw value.
     * @param {number} sh - Specified the sh value.
     * @param {PointModel} pivot - Specified the pivot value.
     * @param {IElement} obj - Specified the annotation object.
     * @param {DrawingElement} element - Specified the annotation element.
     * @param {IElement} refObject - Specified the annotation reference object.
     * @returns {void}
     */
    Drawing.prototype.scaleObject = function (sw, sh, pivot, obj, element, refObject) {
        sw = sw < 0 ? 1 : sw;
        sh = sh < 0 ? 1 : sh;
        if (sw !== 1 || sh !== 1) {
            var width = void 0;
            var height = void 0;
            if (!(0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLineShapes */ .nf)(obj)) {
                var node = obj;
                var isResize = void 0;
                var bound = void 0;
                width = node.wrapper.actualSize.width * sw;
                height = node.wrapper.actualSize.height * sh;
                if (isResize) {
                    width = Math.max(width, (bound.right - node.wrapper.bounds.x));
                    height = Math.max(height, (bound.bottom - node.wrapper.bounds.y));
                }
                sw = width / node.wrapper.actualSize.width;
                sh = height / node.wrapper.actualSize.height;
            }
            var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
            if (!refObject) {
                refObject = obj;
            }
            var refWrapper = refObject.wrapper;
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, -refWrapper.rotateAngle, pivot.x, pivot.y);
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .scaleMatrix */ .U3)(matrix, sw, sh, pivot.x, pivot.y);
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, refWrapper.rotateAngle, pivot.x, pivot.y);
            if (!(0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLineShapes */ .nf)(obj)) {
                var node = obj;
                var newPosition = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, { x: node.wrapper.offsetX, y: node.wrapper.offsetY });
                if (width > 0) {
                    node.wrapper.width = width;
                    node.wrapper.offsetX = newPosition.x;
                }
                if (height > 0) {
                    node.wrapper.height = height;
                    node.wrapper.offsetY = newPosition.y;
                }
                this.nodePropertyChange(obj, {
                    bounds: { width: node.wrapper.width, height: node.wrapper.height, x: node.wrapper.offsetX, y: node.wrapper.offsetY }
                });
            }
        }
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotaion object.
     * @param {number} sw - Specified the sw value.
     * @param {number} sh - Specified the sh value.
     * @param {PointModel} pivot - Specified the pivot value.
     * @param {IElement} refObject - Specified the reference object.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.scaleAnnotation = function (obj, sw, sh, pivot, refObject) {
        var node = this.pdfViewer.nameTable[obj.id];
        var element = node.wrapper;
        if (!refObject) {
            refObject = obj;
        }
        var refWrapper = refObject.wrapper;
        var x = refWrapper.offsetX - refWrapper.actualSize.width * refWrapper.pivot.x;
        var y = refWrapper.offsetY - refWrapper.actualSize.height * refWrapper.pivot.y;
        var refPoint = this.getShapePoint(x, y, refWrapper.actualSize.width, refWrapper.actualSize.height, refWrapper.rotateAngle, refWrapper.offsetX, refWrapper.offsetY, pivot);
        if (element.actualSize.width !== undefined && element.actualSize.height !== undefined) {
            this.scaleObject(sw, sh, refPoint, node, element, refObject);
        }
        var constraints = this.checkBoundaryConstraints(undefined, undefined, obj.pageIndex, obj.wrapper.bounds);
        if (!constraints) {
            this.scaleObject(1 / sw, 1 / sh, refPoint, node, element, refObject);
            //bug (EJ2-62649) : fixed an issue with difficulty on moving/ resizing free text annotation that added in edge of viewer
            if (obj.shapeAnnotationType === 'FreeText' && (obj.id.slice(0, 9) === 'free_text' || obj.id.slice(0, 8) === 'freetext')) {
                var newDiff = this.moveInsideViewer(obj);
                this.nodePropertyChange(obj, {
                    bounds: { width: obj.wrapper.width, height: obj.wrapper.height, x: obj.wrapper.offsetX + newDiff.tx,
                        y: obj.wrapper.offsetY + newDiff.ty }
                });
            }
        }
        return constraints;
    };
    //bug (EJ2-62649) : Implemnted method for calculating optimal bound for free text annotation that outside viewer container
    Drawing.prototype.moveInsideViewer = function (obj, tx, ty) {
        tx = tx ? tx : 0;
        ty = ty ? ty : 0;
        if (obj.shapeAnnotationType === 'FreeText' && (obj.id.slice(0, 9) === 'free_text' || obj.id.slice(0, 8) === 'freetext')) {
            var canvas = this.pdfViewer.viewerBase.getAnnotationCanvas('_annotationCanvas_', obj.pageIndex);
            if (canvas) {
                var bounds = obj.wrapper.bounds;
                var width = canvas.clientWidth / this.pdfViewer.viewerBase.getZoomFactor();
                var height = canvas.clientHeight / this.pdfViewer.viewerBase.getZoomFactor();
                var right = bounds.right;
                var left = bounds.left;
                var top_1 = bounds.top;
                var bottom = bounds.bottom;
                if (!(right + tx <= width - 3 && left + tx >= 1 && bottom + ty <= height - 3 && top_1 + ty >= 1)) {
                    var txNew = 0;
                    var tyNew = 0;
                    if (!(right <= width - 3)) {
                        txNew = width - right - 3;
                    }
                    if (!(left >= 1)) {
                        txNew = txNew - left + 1;
                    }
                    if (!(bottom <= height - 3)) {
                        tyNew = height - bottom - 3;
                    }
                    if (!(top_1 >= 1)) {
                        tyNew = tyNew - top_1 + 1;
                    }
                    if (txNew !== 0) {
                        tx = txNew;
                    }
                    if (tyNew !== 0) {
                        ty = tyNew;
                    }
                }
            }
        }
        return { tx: tx, ty: ty };
    };
    /**
     * @private
     * @param {number} tx - Specified the tx value.
     * @param {number} ty - Specified the ty value.
     * @param {number} pageIndex - Specified the page index value.
     * @param {Rect} nodeBounds - Specified the node bounds value.
     * @param {boolean} isStamp - Specified the annotation is stamp or not.
     * @param {boolean} isSkip - Specified the annotaion is skip or not.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.checkBoundaryConstraints = function (tx, ty, pageIndex, nodeBounds, isStamp, isSkip) {
        var selectorBounds = !nodeBounds ? this.pdfViewer.selectedItems.wrapper.bounds : undefined;
        var bounds = nodeBounds;
        var canvas = this.pdfViewer.viewerBase.getAnnotationCanvas('_annotationCanvas_', pageIndex);
        var heightDifference = 1;
        if (canvas) {
            var width = canvas.clientWidth / this.pdfViewer.viewerBase.getZoomFactor();
            var height = canvas.clientHeight / this.pdfViewer.viewerBase.getZoomFactor();
            var right = (nodeBounds ? bounds.right : selectorBounds.right) + (tx || 0);
            var left = (nodeBounds ? bounds.left : selectorBounds.left) + (tx || 0);
            var top_2 = (nodeBounds ? bounds.top : selectorBounds.top) + (ty || 0);
            var bottom = (nodeBounds ? bounds.bottom : selectorBounds.bottom) + (ty || 0);
            if (isStamp) {
                heightDifference = 50;
                if (this.pdfViewer.viewerBase.eventArgs && this.pdfViewer.viewerBase.eventArgs.source) {
                    if (this.RestrictStamp(this.pdfViewer.viewerBase.eventArgs.source)) {
                        return false;
                    }
                }
            }
            if (right <= width - 3 && left >= 1 && bottom <= height - 3 && top_2 >= heightDifference) {
                return true;
            }
            if (isSkip) {
                heightDifference = 10;
                if (right <= width - 10 && left >= 10 && bottom <= height - 10 && top_2 >= heightDifference) {
                    return true;
                }
            }
        }
        return false;
    };
    Drawing.prototype.RestrictStamp = function (source) {
        if (source && source.pageIndex !== undefined && this.pdfViewer.viewerBase.activeElements &&
            source.pageIndex !== this.pdfViewer.viewerBase.activeElements.activePageID) {
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {DrawingElement} shapeElement - Specified the shape element.
     * @returns {Rect} - Returns the rectangle object.
     */
    Drawing.prototype.getShapeBounds = function (shapeElement) {
        var shapeBounds = new _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_18__/* .Rect */ .r();
        var shapeCorners = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .cornersPointsBeforeRotation */ .Vz)(shapeElement);
        var shapeMiddleLeft = shapeCorners.middleLeft;
        var shapeTopCenter = shapeCorners.topCenter;
        var shapeBottomCenter = shapeCorners.bottomCenter;
        var shapeMiddleRight = shapeCorners.middleRight;
        var shapeTopLeft = shapeCorners.topLeft;
        var shapeTopRight = shapeCorners.topRight;
        var shapeBottomLeft = shapeCorners.bottomLeft;
        var shapeBottomRight = shapeCorners.bottomRight;
        shapeElement.corners = {
            topLeft: shapeTopLeft, topCenter: shapeTopCenter, topRight: shapeTopRight, middleLeft: shapeMiddleLeft,
            middleRight: shapeMiddleRight, bottomLeft: shapeBottomLeft, bottomCenter: shapeBottomCenter, bottomRight: shapeBottomRight
        };
        if (shapeElement.rotateAngle !== 0 || shapeElement.parentTransform !== 0) {
            var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, shapeElement.rotateAngle + shapeElement.parentTransform, shapeElement.offsetX, shapeElement.offsetY);
            shapeElement.corners.topLeft = shapeTopLeft = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeTopLeft);
            shapeElement.corners.topCenter = shapeTopCenter = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeTopCenter);
            shapeElement.corners.topRight = shapeTopRight = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeTopRight);
            shapeElement.corners.middleLeft = shapeMiddleLeft = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeMiddleLeft);
            shapeElement.corners.middleRight = shapeMiddleRight = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeMiddleRight);
            shapeElement.corners.bottomLeft = shapeBottomLeft = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeBottomLeft);
            shapeElement.corners.bottomCenter = shapeBottomCenter = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeBottomCenter);
            shapeElement.corners.bottomRight = shapeBottomRight = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, shapeBottomRight);
            //Set corners based on rotate angle
        }
        shapeBounds = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_18__/* .Rect */ .r.toBounds([shapeTopLeft, shapeTopRight, shapeBottomLeft, shapeBottomRight]);
        shapeElement.corners.left = shapeBounds.left;
        shapeElement.corners.right = shapeBounds.right;
        shapeElement.corners.top = shapeBounds.top;
        shapeElement.corners.bottom = shapeBounds.bottom;
        shapeElement.corners.center = shapeBounds.center;
        shapeElement.corners.width = shapeBounds.width;
        shapeElement.corners.height = shapeBounds.height;
        return shapeBounds;
    };
    /**
     * @private
     * @param {number} x - Specified the x value.
     * @param {number} y - Specified the y value.
     * @param {number} w - Specified the w value.
     * @param {number} h - Specified the h value.
     * @param {number} angle - Specified the angle value.
     * @param {number} offsetX - Specified the offset x value.
     * @param {number} offsetY - Specified the offset y value.
     * @param {PointModel} cornerPoint - Specified the corner point value.
     * @returns {PointModel} - Returns the point model.
     */
    Drawing.prototype.getShapePoint = function (x, y, w, h, angle, offsetX, offsetY, cornerPoint) {
        var pivotPoint = { x: 0, y: 0 };
        var transformMatrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
        (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(transformMatrix, angle, offsetX, offsetY);
        switch (cornerPoint.x) {
            case 1:
                switch (cornerPoint.y) {
                    case 1:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x + w, y: y + h }));
                        break;
                    case 0:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x + w, y: y }));
                        break;
                    case 0.5:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x + w, y: y + h / 2 }));
                        break;
                }
                break;
            case 0:
                switch (cornerPoint.y) {
                    case 0.5:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x, y: y + h / 2 }));
                        break;
                    case 1:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x, y: y + h }));
                        break;
                    case 0:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x, y: y }));
                        break;
                }
                break;
            case 0.5:
                switch (cornerPoint.y) {
                    case 0:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x + w / 2, y: y }));
                        break;
                    case 0.5:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x + w / 2, y: y + h / 2 }));
                        break;
                    case 1:
                        pivotPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(transformMatrix, ({ x: x + w / 2, y: y + h }));
                        break;
                }
                break;
        }
        return { x: pivotPoint.x, y: pivotPoint.y };
    };
    /**
     * @private
     * @param {string} endPoint - Specified the end point value.
     * @param {IElement} obj - Specified the annotaion object.
     * @param {PointModel} point - Specified the annotation points.
     * @param {PointModel} segment - Specified the annotaion segment.
     * @param {IElement} target - Specified the target element.
     * @param {string} targetPortId - Specified the target port id.
     * @param {any} currentSelector - Specified the current selector value.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.dragConnectorEnds = function (endPoint, obj, point, segment, target, targetPortId, currentSelector) {
        var selectorModel;
        var connector;
        var tx;
        var ty;
        if (obj instanceof _selector__WEBPACK_IMPORTED_MODULE_20__/* .Selector */ .M) {
            selectorModel = obj;
            connector = selectorModel.annotations[0];
        }
        else {
            connector = obj;
        }
        point = { x: point.x / this.pdfViewer.viewerBase.getZoomFactor(), y: point.y / this.pdfViewer.viewerBase.getZoomFactor() };
        if (this.checkBoundaryConstraints(undefined, undefined, connector.pageIndex, connector.wrapper.bounds)) {
            if (connector.shapeAnnotationType === 'Distance') {
                var leader = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLeader */ .oT)(connector, endPoint);
                if (endPoint === 'Leader0') {
                    if (this.pdfViewer.viewerBase.tool instanceof _index__WEBPACK_IMPORTED_MODULE_21__/* .LineTool */ .Tz) {
                        connector.vertexPoints[0].x = point.x;
                        connector.vertexPoints[0].y = point.y;
                    }
                    else {
                        tx = point.x - leader.point.x;
                        ty = point.y - leader.point.y;
                        connector.vertexPoints[0].x += tx;
                        connector.vertexPoints[0].y += ty;
                    }
                }
                else if (endPoint === 'Leader1') {
                    var length_2 = connector.vertexPoints.length - 1;
                    if (this.pdfViewer.viewerBase.tool instanceof _index__WEBPACK_IMPORTED_MODULE_21__/* .LineTool */ .Tz) {
                        connector.vertexPoints[parseInt(length_2.toString(), 10)].x = point.x;
                        connector.vertexPoints[parseInt(length_2.toString(), 10)].y = point.y;
                    }
                    else {
                        tx = point.x - leader.point.x;
                        ty = point.y - leader.point.y;
                        connector.vertexPoints[parseInt(length_2.toString(), 10)].x += tx;
                        connector.vertexPoints[parseInt(length_2.toString(), 10)].y += ty;
                    }
                }
                else {
                    var angle = _syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_17__/* .Point */ .b.findAngle(connector.sourcePoint, connector.targetPoint);
                    var center = obj.wrapper.children[0].bounds.center;
                    var matrix = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
                    (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix, -angle, center.x, center.y);
                    var rotatedPoint = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix, { x: point.x, y: point.y });
                    if (endPoint.split('_')[0] === 'ConnectorSegmentPoint') {
                        var matrix_1 = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
                        (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix_1, -angle, center.x, center.y);
                        var rotatedPoint1 = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix_1, connector.vertexPoints[0]);
                        var rotatedPoint2 = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix_1, connector.vertexPoints[connector.vertexPoints.length - 1]);
                        ty = rotatedPoint.y - rotatedPoint1.y;
                        if (connector.leaderHeight === 0 && connector.leaderHeight != null) {
                            connector.leaderHeight = this.pdfViewer.distanceSettings.leaderLength;
                        }
                        else {
                            connector.leaderHeight += ty;
                            rotatedPoint1.y += ty;
                            rotatedPoint2.y += ty;
                            var matrix_2 = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .identityMatrix */ .uz)();
                            (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .rotateMatrix */ .Jl)(matrix_2, angle, center.x, center.y);
                            connector.vertexPoints[0] = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix_2, rotatedPoint1);
                            connector.vertexPoints[connector.vertexPoints.length - 1] = (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_15__/* .transformPointByMatrix */ .bG)(matrix_2, rotatedPoint2);
                        }
                    }
                }
            }
            else if (endPoint.split('_')[0] === 'ConnectorSegmentPoint') {
                var i = Number(endPoint.split('_')[1]);
                tx = point.x - connector.vertexPoints[parseInt(i.toString(), 10)].x;
                ty = point.y - connector.vertexPoints[parseInt(i.toString(), 10)].y;
                connector.vertexPoints[parseInt(i.toString(), 10)].x += tx;
                connector.vertexPoints[parseInt(i.toString(), 10)].y += ty;
                if (connector.vertexPoints.length > 2 && obj.measureType !== 'Perimeter') {
                    if (parseFloat(endPoint.split('_')[1]) === 0) {
                        connector.vertexPoints[connector.vertexPoints.length - 1].x += tx;
                        connector.vertexPoints[connector.vertexPoints.length - 1].y += ty;
                    }
                    else if (parseFloat(endPoint.split('_')[1]) === connector.vertexPoints.length - 1) {
                        connector.vertexPoints[0].x += tx;
                        connector.vertexPoints[0].y += ty;
                    }
                }
            }
            this.nodePropertyChange(connector, { vertexPoints: connector.vertexPoints });
            this.renderSelector(connector.pageIndex, currentSelector);
        }
        this.pdfViewer.renderDrawing();
        return true;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} obj - Specified the annotation object.
     * @param {number} tx - Specified the tx value.
     * @param {number} ty - Specified the y value.
     * @param {number} i - Specified the index value.
     * @returns {boolean} - Returns true or false.
     */
    Drawing.prototype.dragSourceEnd = function (obj, tx, ty, i) {
        var connector = this.pdfViewer.nameTable[obj.id];
        connector.vertexPoints[parseInt(i.toString(), 10)].x += tx;
        connector.vertexPoints[parseInt(i.toString(), 10)].y += ty;
        this.pdfViewer.renderDrawing();
        return true;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel} connector - Specified the connector object.
     * @param {PointModel[]} points - Specified the points value.
     * @returns {void}
     */
    Drawing.prototype.updateConnector = function (connector, points) {
        var targetPoint;
        connector.vertexPoints = points;
        (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .updateSegmentElement */ .rY)(connector, points, connector.wrapper.children[0]);
        var anglePoint = connector.vertexPoints;
        //  points = this.clipDecorators(connector, points);
        var element = connector.wrapper.children[0];
        element.canMeasurePath = true;
        for (var i = 0; i < connector.wrapper.children.length; i++) {
            element = connector.wrapper.children[parseInt(i.toString(), 10)];
            if (connector.shapeAnnotationType !== 'Polygon') {
                if (element.id.indexOf('srcDec') > -1) {
                    (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .updateDecoratorElement */ .Lk)(connector, element, points[0], anglePoint[1], true);
                }
                targetPoint = connector.targetPoint;
                if (element.id.indexOf('tarDec') > -1) {
                    (0,_connector_util__WEBPACK_IMPORTED_MODULE_10__/* .updateDecoratorElement */ .Lk)(connector, element, points[points.length - 1], anglePoint[anglePoint.length - 2], false);
                }
            }
        }
    };
    /**
     * @private
     * @returns {object} - Returns the object.
     */
    Drawing.prototype.copy = function () {
        var annotationSettings;
        if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(this.pdfViewer.annotationModule)) {
            annotationSettings = this.pdfViewer.annotationModule.findAnnotationSettings(this.pdfViewer.selectedItems.annotations[0]);
        }
        if (((this.pdfViewer.formDesignerModule && !this.pdfViewer.formDesigner.isPropertyDialogOpen) ||
            this.pdfViewer.annotationModule) && (this.pdfViewer.designerMode || this.pdfViewer.enableAnnotation) &&
            (this.pdfViewer.selectedItems.formFields.length !== 0 || (this.pdfViewer.selectedItems.annotations.length !== 0 &&
                !(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(annotationSettings) && !annotationSettings.isLock))) {
            this.pdfViewer.clipboardData.pasteIndex = 1;
            this.pdfViewer.clipboardData.clipObject = this.copyObjects();
            this.copiedElementID = this.pdfViewer.clipboardData.clipObject[0].id;
        }
        var isSearchboxDialogOpen;
        var searchBoxId = document.getElementById(this.pdfViewer.element.id + '_search_box');
        if (searchBoxId) {
            isSearchboxDialogOpen = searchBoxId.style.display !== 'none';
        }
        if (this.pdfViewer.formDesigner && this.pdfViewer.formDesigner.isPropertyDialogOpen || isSearchboxDialogOpen) {
            this.pdfViewer.clipboardData.clipObject = {};
        }
        return this.pdfViewer.clipboardData.clipObject;
    };
    /**
     * @private
     * @returns {object[]} - Returns the object array.
     */
    Drawing.prototype.copyObjects = function () {
        var selectedItems = [];
        var obj = [];
        this.pdfViewer.clipboardData.childTable = {};
        if (this.pdfViewer.selectedItems.annotations.length > 0) {
            selectedItems = this.pdfViewer.selectedItems.annotations;
            for (var j = 0; j < selectedItems.length; j++) {
                var element = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .cloneObject */ .h2)((selectedItems[parseInt(j.toString(), 10)]));
                obj.push(element);
            }
        }
        if (this.pdfViewer.selectedItems.formFields.length > 0) {
            selectedItems = this.pdfViewer.selectedItems.formFields;
            for (var j = 0; j < selectedItems.length; j++) {
                var element = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .cloneObject */ .h2)((selectedItems[parseInt(j.toString(), 10)]));
                obj.push(element);
            }
        }
        if (this.pdfViewer.clipboardData.pasteIndex === 0) {
            for (var _i = 0, selectedItems_1 = selectedItems; _i < selectedItems_1.length; _i++) {
                var item = selectedItems_1[_i];
                if (this.pdfViewer.nameTable[item.id]) {
                    if (!item.formFieldAnnotationType) {
                        if (item.annotName) {
                            this.pdfViewer.annotationModule.deleteAnnotationById(item.annotName);
                        }
                        else {
                            this.pdfViewer.annotationModule.deleteAnnotation();
                        }
                    }
                    else {
                        this.pdfViewer.clearSelection(item.pageIndex);
                        this.pdfViewer.formDesignerModule.deleteFormField(item.id);
                    }
                }
            }
            //this.endGroupAction();
        }
        this.sortByZIndex(obj, 'zIndex');
        return obj;
    };
    Drawing.prototype.getNewObject = function (obj) {
        var newObj;
        var newobjs = [];
        this.pdfViewer.clipboardData.pasteIndex = 1;
        for (var i = 0; i < obj.length; i++) {
            newObj = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .cloneObject */ .h2)(obj[parseInt(i.toString(), 10)]);
            newobjs.push(newObj);
        }
        return newobjs;
    };
    Drawing.prototype.isWithinBounds = function (pageCurrentRect, events) {
        var clientX = events.clientX, clientY = events.clientY;
        var left = pageCurrentRect.left, right = pageCurrentRect.right, top = pageCurrentRect.top, bottom = pageCurrentRect.bottom;
        return left < clientX && clientX < right && top < clientY && clientY < bottom;
    };
    /**
     * @private
     * @param {PdfAnnotationBaseModel[]} obj - Specified the annotation object.
     * @param {number} index - Specified the annotation index.
     * @returns {void}
     */
    Drawing.prototype.paste = function (obj, index) {
        var zoomfactor = this.pdfViewer.viewerBase.getZoomFactor();
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        var fieldId;
        this.isPasted = true;
        if (obj || this.pdfViewer.clipboardData.clipObject) {
            var copiedItems = obj ? this.getNewObject(obj) :
                this.pdfViewer.clipboardData.clipObject;
            if (copiedItems) {
                var objectTable = {};
                if (this.pdfViewer.clipboardData.pasteIndex !== 0) {
                    this.pdfViewer.clearSelection(index);
                }
                if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isNullOrUndefined */ .hX)(copiedItems[0])) {
                    if (this.pdfViewer.currentPageNumber === copiedItems[0].pageIndex + 1) {
                        for (var _i = 0, copiedItems_1 = copiedItems; _i < copiedItems_1.length; _i++) {
                            var copy = copiedItems_1[_i];
                            fieldId = copy.id;
                            copy.id += (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
                            var fieldName = this.splitFormFieldName(copy);
                            var maxNumber = 0; // this.pdfViewer.formFieldCollection.length;
                            if (this.pdfViewer.formDesigner) {
                                this.pdfViewer.formDesigner.setFormFieldIndex();
                                maxNumber = this.pdfViewer.formDesigner.formFieldIndex;
                                copy.name = fieldName + maxNumber;
                            }
                            objectTable[copy.id] = copy;
                        }
                        var _loop_2 = function (j) {
                            var copy = copiedItems[parseInt(j.toString(), 10)];
                            var pageDiv = this_2.pdfViewer.viewerBase.getElement('_pageDiv_' + copy.pageIndex);
                            var events = event;
                            var pageCurrentRect = pageDiv.getBoundingClientRect();
                            if (events && !events.clientX && !events.clientY) {
                                events = { clientX: this_2.pdfViewer.viewerBase.mouseLeft, clientY: this_2.pdfViewer.viewerBase.mouseTop };
                            }
                            if ((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__/* .isBlazor */ .Z4)()) {
                                events = this_2.pdfViewer.viewerBase.mouseDownEvent;
                            }
                            if ((0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .isLineShapes */ .nf)(copy)) {
                                this_2.calculateCopyPosition(copy, pageDiv, events);
                            }
                            else {
                                if (pageDiv) {
                                    if ((pageCurrentRect.right - events.clientX) < copy.bounds.width * zoomfactor) {
                                        copy.bounds.x = (pageDiv.clientWidth - copy.bounds.width * zoomfactor) / zoomfactor;
                                    }
                                    else {
                                        copy.bounds.x = (events.clientX - pageCurrentRect.left) / zoomfactor;
                                    }
                                    if ((pageCurrentRect.bottom - events.clientY) > copy.bounds.height * zoomfactor) {
                                        copy.bounds.y = (events.clientY - pageCurrentRect.top) / zoomfactor;
                                    }
                                    else {
                                        copy.bounds.y = (pageDiv.clientHeight - copy.bounds.height * zoomfactor) / zoomfactor;
                                    }
                                }
                            }
                            if (this_2.isWithinBounds(pageCurrentRect, events)) {
                                var newNode_1 = (0,_drawing_util__WEBPACK_IMPORTED_MODULE_5__/* .cloneObject */ .h2)(copy);
                                if (this_2.pdfViewer.viewerBase.contextMenuModule.previousAction !== 'Cut') {
                                    newNode_1.id += (0,_syncfusion_ej2_drawings__WEBPACK_IMPORTED_MODULE_12__/* .randomId */ .zE)();
                                    if (this_2.pdfViewer.annotationModule && newNode_1.shapeAnnotationType !== 'HandWrittenSignature') {
                                        newNode_1.annotName = newNode_1.id;
                                        this_2.pdfViewer.annotationModule.stickyNotesAnnotationModule.
                                            updateAnnotationCollection(newNode_1, copiedItems[0], false);
                                    }
                                    if (newNode_1.shapeAnnotationType === 'SignatureText' || newNode_1.shapeAnnotationType === 'HandWrittenSignature' || newNode_1.shapeAnnotationType === 'SignatureImage') {
                                        newNode_1.signatureName = newNode_1.id;
                                        this_2.pdfViewer.viewerBase.signatureModule.storeSignatureData(newNode_1.pageIndex, newNode_1);
                                    }
                                    if (!newNode_1.formFieldAnnotationType && newNode_1.shapeAnnotationType !== 'SignatureText' && newNode_1.shapeAnnotationType !== 'HandWrittenSignature' && newNode_1.shapeAnnotationType !== 'SignatureImage') {
                                        this_2.pdfViewer.annotation.addAction(this_2.pdfViewer.viewerBase.getActivePage(false), null, newNode_1, 'Addition', '', newNode_1, newNode_1);
                                        if (newNode_1.measureType === 'Distance' || newNode_1.measureType === 'Perimeter' || newNode_1.measureType === 'Area' ||
                                            newNode_1.measureType === 'Radius' || newNode_1.measureType === 'Volume') {
                                            var matchedRatioObject = this_2.pdfViewer.annotationModule.measureAnnotationModule.
                                                scaleRatioCollection.find(function (item) { return newNode_1.id.startsWith(item.id); });
                                            if (matchedRatioObject) {
                                                var clonedItem = JSON.parse(JSON.stringify(matchedRatioObject));
                                                clonedItem.annotName = newNode_1.id;
                                                this_2.pdfViewer.annotationModule.measureAnnotationModule.
                                                    scaleRatioCollection.push(clonedItem);
                                            }
                                        }
                                    }
                                }
                                else {
                                    if (this_2.pdfViewer.annotationModule) {
                                        this_2.pdfViewer.annotationModule.stickyNotesAnnotationModule.
                                            updateAnnotationCollection(newNode_1, copiedItems[0], true);
                                    }
                                    if (newNode_1.shapeAnnotationType === 'SignatureText' || newNode_1.shapeAnnotationType === 'HandWrittenSignature' || newNode_1.shapeAnnotationType === 'SignatureImage') {
                                        this_2.pdfViewer.viewerBase.signatureModule.storeSignatureData(newNode_1.pageIndex, newNode_1);
                                    }
                                    if (!newNode_1.formFieldAnnotationType && newNode_1.shapeAnnotationType !== 'SignatureText' && newNode_1.shapeAnnotationType !== 'HandWrittenSignature' && newNode_1.shapeAnnotationType !== 'SignatureImage') {
                                        this_2.pdfViewer.annotation.addAction(this_2.pdfViewer.viewerBase.getActivePage(false), null, newNode_1, 'Addition', '', newNode_1, newNode_1);
                                    }
                                }
                                var addedAnnot = this_2.add(newNode_1);
                                if (this_2.pdfViewer.formDesigner && addedAnnot.formFieldAnnotationType && this_2.pdfViewer.annotation) {
                                    this_2.pdfViewer.annotation.addAction(this_2.pdfViewer.viewerBase.getActivePage(true), null, addedAnnot, 'Addition', '', addedAnnot, addedAnnot);
                                }
                                if ((newNode_1.shapeAnnotationType === 'FreeText' || newNode_1.enableShapeLabel) && addedAnnot) {
                                    this_2.nodePropertyChange(addedAnnot, {});
                                }
                                if (addedAnnot.formFieldAnnotationType && addedAnnot.pageIndex === index) {
                                    this_2.pdfViewer.formFieldCollection.push(addedAnnot);
                                    // eslint-disable-next-line max-len
                                    var formField = {
                                        id: addedAnnot.id, name: addedAnnot.name,
                                        value: addedAnnot.value,
                                        type: addedAnnot.formFieldAnnotationType,
                                        isReadOnly: addedAnnot.isReadonly, fontFamily: addedAnnot.fontFamily,
                                        fontSize: addedAnnot.fontSize, fontStyle: addedAnnot.fontStyle,
                                        color: addedAnnot.color,
                                        backgroundColor: addedAnnot.backgroundColor,
                                        alignment: addedAnnot.alignment,
                                        visibility: addedAnnot.visibility,
                                        maxLength: addedAnnot.maxLength,
                                        isRequired: addedAnnot.isRequired,
                                        isPrint: addedAnnot.isPrint, isSelected: addedAnnot.isSelected,
                                        isChecked: addedAnnot.isChecked,
                                        tooltip: addedAnnot.tooltip,
                                        bounds: addedAnnot.bounds,
                                        thickness: addedAnnot.thickness, borderColor: addedAnnot.borderColor,
                                        signatureIndicatorSettings: addedAnnot.signatureIndicatorSettings,
                                        insertSpaces: addedAnnot.insertSpaces,
                                        isMultiline: addedAnnot.isMultiline,
                                        isTransparent: addedAnnot.isTransparent,
                                        options: addedAnnot.options, pageIndex: addedAnnot.pageIndex,
                                        pageNumber: addedAnnot.pageNumber,
                                        rotateAngle: addedAnnot.rotateAngle,
                                        signatureType: addedAnnot.signatureType,
                                        zIndex: addedAnnot.zIndex,
                                        selectedIndex: addedAnnot.selectedIndex
                                    };
                                    if (addedAnnot.options &&
                                        addedAnnot.options.length > 0) {
                                        formField.options = addedAnnot.options;
                                    }
                                    this_2.pdfViewer.formFieldCollections.push(formField);
                                    this_2.pdfViewer.formDesigner.drawHTMLContent(addedAnnot.formFieldAnnotationType, addedAnnot.wrapper.children[0], addedAnnot, addedAnnot.pageIndex, this_2.pdfViewer, fieldId);
                                }
                                this_2.pdfViewer.select([newNode_1.id], this_2.pdfViewer.annotationSelectorSettings);
                                if (!addedAnnot.formFieldAnnotationType) {
                                    this_2.pdfViewer.annotationModule.triggerAnnotationAddEvent(newNode_1);
                                }
                            }
                        };
                        var this_2 = this;
                        for (var j = 0; j < copiedItems.length; j++) {
                            _loop_2(j);
                        }
                    }
                }
            }
            this.pdfViewer.renderDrawing(undefined, index);
            this.pdfViewer.clipboardData.pasteIndex++;
        }
        this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
    };
    Drawing.prototype.splitFormFieldName = function (obj) {
        var field = null;
        if (obj) {
            switch (obj.formFieldAnnotationType) {
                case 'Textbox':
                    field = 'Textbox';
                    break;
                case 'PasswordField':
                    field = 'Password';
                    break;
                case 'Checkbox':
                    field = 'Check Box';
                    break;
                case 'RadioButton':
                    field = 'Radio Button';
                    break;
                case 'DropdownList':
                    field = 'Dropdown';
                    break;
                case 'ListBox':
                    field = 'List Box';
                    break;
                case 'SignatureField':
                    field = 'Signature';
                    break;
                case 'InitialField':
                    field = 'Initial';
                    break;
            }
        }
        return field;
    };
    Drawing.prototype.calculateCopyPosition = function (copy, pageDiv, events) {
        var zoomfactor = this.pdfViewer.viewerBase.getZoomFactor();
        var x1;
        var y1;
        var x2;
        var y2;
        for (var i = 0; i < copy.vertexPoints.length; i++) {
            if (pageDiv) {
                if (i === 0) {
                    var pageCurrentRect = pageDiv.getBoundingClientRect();
                    x1 = copy.vertexPoints[parseInt(i.toString(), 10)].x;
                    y1 = copy.vertexPoints[parseInt(i.toString(), 10)].y;
                    copy.vertexPoints[parseInt(i.toString(), 10)].x = (events.clientX - pageCurrentRect.left) / zoomfactor;
                    copy.vertexPoints[parseInt(i.toString(), 10)].y = (events.clientY - pageCurrentRect.top) / zoomfactor;
                    x2 = copy.vertexPoints[parseInt(i.toString(), 10)].x;
                    y2 = copy.vertexPoints[parseInt(i.toString(), 10)].y;
                }
                else {
                    copy.vertexPoints[parseInt(i.toString(), 10)].x += x2 - x1;
                    copy.vertexPoints[parseInt(i.toString(), 10)].y += y2 - y1;
                }
            }
        }
    };
    /**
     * @private
     * @param {number} index - Specified the annotaion index.
     * @returns {void}
     */
    Drawing.prototype.cut = function (index) {
        var allowServerDataBind = this.pdfViewer.allowServerDataBinding;
        this.pdfViewer.enableServerDataBinding(false);
        if (this.pdfViewer.annotationModule) {
            this.pdfViewer.annotationModule.removedAnnotationCollection = [];
        }
        if (((this.pdfViewer.formDesignerModule && !this.pdfViewer.formDesigner.isPropertyDialogOpen) ||
            this.pdfViewer.selectedItems.annotations.length > 0) && (this.pdfViewer.designerMode ||
            this.pdfViewer.selectedItems.annotations.length > 0) && (this.pdfViewer.selectedItems.formFields.length !== 0 ||
            this.pdfViewer.selectedItems.annotations.length !== 0)) {
            this.pdfViewer.clipboardData.pasteIndex = 0;
            this.pdfViewer.clipboardData.clipObject = this.copyObjects();
            this.pdfViewer.renderDrawing(undefined, index);
            this.pdfViewer.enableServerDataBinding(allowServerDataBind, true);
            this.copiedElementID = this.pdfViewer.clipboardData.clipObject[0].id;
        }
        var isSearchboxDialogOpen;
        var searchBoxId = document.getElementById(this.pdfViewer.element.id + '_search_box');
        if (searchBoxId) {
            isSearchboxDialogOpen = searchBoxId.style.display !== 'none';
        }
        if (this.pdfViewer.formDesigner && this.pdfViewer.formDesigner.isPropertyDialogOpen || isSearchboxDialogOpen) {
            this.pdfViewer.clipboardData.clipObject = {};
        }
    };
    /**
     * @private
     * @param {object[]} nodeArray - Specified the node array.
     * @param {string} sortID - Specified the sort id.
     * @returns {object[]} - Returns the node array.
     */
    Drawing.prototype.sortByZIndex = function (nodeArray, sortID) {
        var id = sortID ? sortID : 'zIndex';
        nodeArray = nodeArray.sort(function (a, b) {
            return a["" + id] - b["" + id];
        });
        return nodeArray;
    };
    return Drawing;
}());



/***/ })

}]);
//# sourceMappingURL=44ba0710-683918ca1d60a98b.js.map