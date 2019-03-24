(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"data\">\r\n  <app-chart *ngFor=\"let item of data\" [data]=\"item\"></app-chart>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        // load test data
        this.getData();
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('assets/data/chart_data_test.json').toPromise()];
                    case 1:
                        data = _a.sent();
                        this.data = AppComponent_1.prepareData(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prepareData = function (data) {
        // modifying server data
        // to protect data from further API changes
        // here you can simply adapt new API structure if needed
        var sortedData = [];
        var dataLen = data.length;
        for (var dataIdx = 0; dataIdx < dataLen; dataIdx++) {
            var curChartObj = data[dataIdx];
            var sortedX = {};
            var sortedY = [];
            // sort object keys
            for (var key in curChartObj.types) {
                if (curChartObj.types[key] === 'x') {
                    sortedX.columnKey = curChartObj.types[key];
                    sortedX.type = curChartObj.types[key];
                }
                else {
                    sortedY.push({
                        columnKey: key,
                        type: curChartObj.types[key],
                        color: curChartObj.colors[key],
                        name: curChartObj.names[key],
                    });
                }
            }
            // sort array data
            var columnsLen = curChartObj.columns.length;
            for (var columnsIdx = 0; columnsIdx < columnsLen; columnsIdx++) {
                var curColumn = curChartObj.columns[columnsIdx];
                // save x data
                if (curColumn[0] === sortedX.columnKey) {
                    curColumn.shift(); // remove first string element
                    sortedX.data = curColumn;
                    sortedX.maxValLength = Math.max.apply(Math, (curColumn.map(function (num) { return num.toString().length; }))) - 1;
                }
                // save y data
                var sortedYLen = sortedY.length;
                for (var sortedYIdx = 0; sortedYIdx < sortedYLen; sortedYIdx++) {
                    var curSortedY = sortedY[sortedYIdx];
                    if (curColumn[0] === curSortedY.columnKey) {
                        curColumn.shift(); // remove first string element
                        curSortedY.data = curColumn;
                    }
                }
            }
            sortedData.push({
                x: sortedX,
                y: sortedY,
            });
        }
        return sortedData;
    };
    var AppComponent_1;
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chart_chart_main_chart_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/chart-main/chart-main.component */ "./src/app/chart/chart-main/chart-main.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _chart_chart_thumb_chart_thumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/chart-thumb/chart-thumb.component */ "./src/app/chart/chart-thumb/chart-thumb.component.ts");
/* harmony import */ var _chart_chart_buttons_chart_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/chart-buttons/chart-buttons.component */ "./src/app/chart/chart-buttons/chart-buttons.component.ts");
/* harmony import */ var _chart_chart_grid_chart_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/chart-grid/chart-grid.component */ "./src/app/chart/chart-grid/chart-grid.component.ts");
/* harmony import */ var _chart_chart_grid_chart_grid_ylabels_chart_grid_yLabels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component */ "./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.ts");
/* harmony import */ var _chart_chart_polyline_chart_polyline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart/chart-polyline/chart-polyline.component */ "./src/app/chart/chart-polyline/chart-polyline.component.ts");
/* harmony import */ var _chart_chart_thumb_frame_chart_thumb_frame_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/chart-thumb-frame/chart-thumb-frame.component */ "./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.ts");
/* harmony import */ var _chart_chart_grid_chart_grid_xLines_chart_grid_xLines_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component */ "./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.ts");
/* harmony import */ var _chart_chart_grid_chart_grid_xlabels_chart_grid_xLabels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component */ "./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chart_chart_main_chart_main_component__WEBPACK_IMPORTED_MODULE_5__["ChartMainComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"],
                _chart_chart_thumb_chart_thumb_component__WEBPACK_IMPORTED_MODULE_7__["ChartThumbComponent"],
                _chart_chart_buttons_chart_buttons_component__WEBPACK_IMPORTED_MODULE_8__["ChartButtonsComponent"],
                _chart_chart_grid_chart_grid_component__WEBPACK_IMPORTED_MODULE_9__["ChartGridComponent"],
                _chart_chart_grid_chart_grid_xlabels_chart_grid_xLabels_component__WEBPACK_IMPORTED_MODULE_14__["ChartGridXLabelsComponent"],
                _chart_chart_grid_chart_grid_ylabels_chart_grid_yLabels_component__WEBPACK_IMPORTED_MODULE_10__["ChartGridYLabelsComponent"],
                _chart_chart_polyline_chart_polyline_component__WEBPACK_IMPORTED_MODULE_11__["ChartPolylineComponent"],
                _chart_chart_thumb_frame_chart_thumb_frame_component__WEBPACK_IMPORTED_MODULE_12__["ChartThumbFrameComponent"],
                _chart_chart_grid_chart_grid_xLines_chart_grid_xLines_component__WEBPACK_IMPORTED_MODULE_13__["ChartGridXLinesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart-buttons/chart-buttons.component.html":
/*!******************************************************************!*\
  !*** ./src/app/chart/chart-buttons/chart-buttons.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\r\n  *ngFor=\"let button of buttonsArr; let index = index\"\r\n  [ngClass]=\"{'active': button.isVisible}\"\r\n  (click)=\"togglePath(button, index)\"\r\n  class=\"button\"\r\n><span\r\n  [style.background]=\"button.isVisible ? button.color : null\"\r\n  [style.borderColor]=\"button.color\"\r\n></span>{{button.name}}</button>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-buttons/chart-buttons.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/chart/chart-buttons/chart-buttons.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 6px 16px 6px 8px;\n  margin-right: 10px;\n  background: none;\n  border-radius: 40px;\n  outline: none;\n  cursor: pointer; }\n  .button span {\n    position: relative;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    cursor: pointer; }\n  .button span:after {\n      content: \"\";\n      border: 2px solid #fff;\n      border-top: none;\n      border-right: none;\n      height: 6px;\n      width: 10px;\n      opacity: 0;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: rotate(-45deg) translate(0%, -100%);\n              transform: rotate(-45deg) translate(0%, -100%); }\n  .button.active span:after {\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvY2hhcnQtYnV0dG9ucy9EOlxcUFJPSkVDVFNcXE1ZXFxUR0Mvc3JjXFxhcHBcXGNoYXJ0XFxjaGFydC1idXR0b25zXFxjaGFydC1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZSxFQUFBO0VBVmpCO0lBYUksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQXBCbkI7TUF1Qk0sV0FBVztNQUNYLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULHNEQUE4QztjQUE5Qyw4Q0FBOEMsRUFBQTtFQWpDcEQ7SUF3Q1EsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhcnQvY2hhcnQtYnV0dG9ucy9jaGFydC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDZweCAxNnB4IDZweCA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwJSwgLTEwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chart/chart-buttons/chart-buttons.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chart/chart-buttons/chart-buttons.component.ts ***!
  \****************************************************************/
/*! exports provided: ChartButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartButtonsComponent", function() { return ChartButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-events.service */ "./src/app/chart/chart-events.service.ts");



var ChartButtonsComponent = /** @class */ (function () {
    function ChartButtonsComponent(chartEventsService) {
        this.chartEventsService = chartEventsService;
    }
    ChartButtonsComponent.prototype.ngOnInit = function () {
        this.buttonsArr = this.buildButtons();
    };
    ChartButtonsComponent.prototype.togglePath = function (button, index) {
        button.isVisible = !button.isVisible;
        this.chartEventsService.togglePolyline.emit({
            index: index,
            isVisible: button.isVisible
        });
    };
    ChartButtonsComponent.prototype.buildButtons = function () {
        var buttonsArr = [];
        // build buttons based on polyline
        var yDataLength = this.data.y.length;
        for (var pathIndex = 0; pathIndex < yDataLength; pathIndex++) {
            var curPolyline = this.data.y[pathIndex];
            buttonsArr.push({
                name: curPolyline.name,
                color: curPolyline.color,
                isVisible: true
            });
        }
        return buttonsArr;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartButtonsComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartButtonsComponent.prototype, "settings", void 0);
    ChartButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-buttons',
            template: __webpack_require__(/*! ./chart-buttons.component.html */ "./src/app/chart/chart-buttons/chart-buttons.component.html"),
            styles: [__webpack_require__(/*! ./chart-buttons.component.scss */ "./src/app/chart/chart-buttons/chart-buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"]])
    ], ChartButtonsComponent);
    return ChartButtonsComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-events.service.ts":
/*!***********************************************!*\
  !*** ./src/app/chart/chart-events.service.ts ***!
  \***********************************************/
/*! exports provided: ChartEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartEventsService", function() { return ChartEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartEventsService = /** @class */ (function () {
    function ChartEventsService() {
        this.togglePolyline = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maxValHeight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChartEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartEventsService);
    return ChartEventsService;
}());



/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg:line\r\n  *ngFor=\"let line of linesArr\"\r\n  [attr.x1]=\"line.x1\"\r\n  [attr.x2]=\"line.x2\"\r\n  [attr.y1]=\"line.y1\"\r\n  [attr.y2]=\"line.y2\"\r\n  [attr.stroke]=\"line.stroke\"\r\n  [attr.stroke-width]=\"line.strokeWidth\"\r\n/>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LWdyaWQvY2hhcnQtZ3JpZC14TGluZXMvY2hhcnQtZ3JpZC14TGluZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChartGridXLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartGridXLinesComponent", function() { return ChartGridXLinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartGridXLinesComponent = /** @class */ (function () {
    function ChartGridXLinesComponent() {
    }
    ChartGridXLinesComponent.prototype.ngOnInit = function () {
        this.linesArr = this.buildLines();
    };
    ChartGridXLinesComponent.prototype.buildLines = function () {
        var linesArr = [];
        for (var lineIndex = 1; lineIndex <= this.settings.grid.yLabelsCount; lineIndex++) {
            // evenly distribute lines from the ground
            var lineGap = this.svg.height / this.settings.grid.yLabelsCount * lineIndex;
            lineGap -= this.settings.main.paddingBot;
            lineGap += this.settings.grid.xLinesThickness;
            linesArr.push({
                x1: 0,
                x2: this.svg.width,
                y1: lineGap,
                y2: lineGap,
                stroke: '#e8e8e8',
                strokeWidth: this.settings.grid.xLinesThickness
            });
        }
        return linesArr;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridXLinesComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridXLinesComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridXLinesComponent.prototype, "svg", void 0);
    ChartGridXLinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-chart-grid-xLines]',
            template: __webpack_require__(/*! ./chart-grid-xLines.component.html */ "./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.html"),
            styles: [__webpack_require__(/*! ./chart-grid-xLines.component.scss */ "./src/app/chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartGridXLinesComponent);
    return ChartGridXLinesComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg:text\r\n  *ngFor=\"let text of xLabelsArr\"\r\n  [attr.x]=\"text.x\"\r\n  [attr.y]=\"text.y\"\r\n  [attr.opacity]=\"text.opacity\"\r\n  [attr.font-size]=\"text.fontSize\"\r\n  [attr.fill]=\"text.fill\"\r\n>{{text.value}}</svg:text>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LWdyaWQvY2hhcnQtZ3JpZC14bGFiZWxzL2NoYXJ0LWdyaWQteExhYmVscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChartGridXLabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartGridXLabelsComponent", function() { return ChartGridXLabelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chart-events.service */ "./src/app/chart/chart-events.service.ts");



var ChartGridXLabelsComponent = /** @class */ (function () {
    function ChartGridXLabelsComponent(chartEventsService) {
        var _this = this;
        this.chartEventsService = chartEventsService;
        this.sub1 = this.chartEventsService
            .visibleFrame
            .subscribe(function (visibleFrame) {
            if (_this.xLabelsArr && _this.xLabelsArr.length > 0) {
                _this.updateLabels(visibleFrame);
            }
        });
    }
    ChartGridXLabelsComponent.prototype.ngOnInit = function () {
        this.xLabelsArr = this.buildLabels({
            from: 0,
            to: this.settings._xLen * this.settings._initRatioPercent
        });
    };
    ChartGridXLabelsComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    ChartGridXLabelsComponent.prototype.buildLabels = function (visibleFrame) {
        var beforeLoopCalcObj = this.beforeLoopCalc(visibleFrame);
        var xLabelsArr = [];
        for (var xDataIndex = 0; xDataIndex < beforeLoopCalcObj.xLabelsCount; xDataIndex++) {
            var loopCalcObj = this.loopCalc(beforeLoopCalcObj, xDataIndex);
            xLabelsArr.push({
                value: loopCalcObj.value,
                x: loopCalcObj.xPoint,
                y: loopCalcObj.yPoint,
                opacity: '1',
                fontSize: this.settings.grid.fontSize,
                fill: 'black',
            });
        }
        return xLabelsArr;
    };
    ChartGridXLabelsComponent.prototype.updateLabels = function (visibleFrame) {
        var beforeLoopCalcObj = this.beforeLoopCalc(visibleFrame);
        var xLabelsArrLen = this.xLabelsArr.length;
        for (var xLabelsArrIdx = 0; xLabelsArrIdx < xLabelsArrLen; xLabelsArrIdx++) {
            var curXLabel = this.xLabelsArr[xLabelsArrIdx];
            var loopCalcObj = this.loopCalc(beforeLoopCalcObj, xLabelsArrIdx);
            if (curXLabel.value !== loopCalcObj.value) {
                curXLabel.value = loopCalcObj.value;
                curXLabel.x = loopCalcObj.xPoint;
            }
        }
    };
    ChartGridXLabelsComponent.prototype.beforeLoopCalc = function (visibleFrame) {
        // one char width
        var chartWidth = this.settings.grid.fontSize / 2;
        // calculate y point position
        var yPoint = this.settings.main.height - (this.settings.main.paddingBot / 2);
        // left right padding (in chars)
        var xLabelsPadding = chartWidth * 6;
        // calculate visible values count
        // according to value width + padding
        var xLabelsCount = window.innerWidth / (this.xData.maxValLength * chartWidth + xLabelsPadding);
        xLabelsCount = Math.floor(xLabelsCount);
        // get values according to visibleFrame
        var visiblePointsArr = this.xData.data.slice(visibleFrame.from, visibleFrame.to);
        // distribute values according to visiblePointsArr
        var visibleValuesPiece = Math.floor(visiblePointsArr.length / xLabelsCount);
        // middle of one value piece
        var visibleValuesMiddlePiece = Math.floor(visiblePointsArr.length / xLabelsCount / 2);
        // distribute x points according to window.innerWidth
        var visiblePointsPiece = Math.floor(window.innerWidth / xLabelsCount);
        // middle of one x points
        var visiblePointsMiddlePiece = Math.floor(window.innerWidth / xLabelsCount / 2);
        return {
            chartWidth: chartWidth,
            yPoint: yPoint,
            xLabelsCount: xLabelsCount,
            visiblePointsArr: visiblePointsArr,
            visibleValuesPiece: visibleValuesPiece,
            visibleValuesMiddlePiece: visibleValuesMiddlePiece,
            visiblePointsPiece: visiblePointsPiece,
            visiblePointsMiddlePiece: visiblePointsMiddlePiece
        };
    };
    ChartGridXLabelsComponent.prototype.loopCalc = function (beforeLoopCalcObj, index) {
        var chartWidth = beforeLoopCalcObj.chartWidth, yPoint = beforeLoopCalcObj.yPoint, visiblePointsArr = beforeLoopCalcObj.visiblePointsArr, visibleValuesPiece = beforeLoopCalcObj.visibleValuesPiece, visibleValuesMiddlePiece = beforeLoopCalcObj.visibleValuesMiddlePiece, visiblePointsPiece = beforeLoopCalcObj.visiblePointsPiece, visiblePointsMiddlePiece = beforeLoopCalcObj.visiblePointsMiddlePiece;
        // get middle index of each piece
        var pointValueIdx = visibleValuesPiece * (index + 1) - visibleValuesMiddlePiece;
        // get value
        var value = visiblePointsArr[pointValueIdx] ? visiblePointsArr[pointValueIdx].toString() : '0';
        // get value width
        var valueWidth = Math.round(value.length * chartWidth);
        // get middle point of each piece
        var xPoint = visiblePointsPiece * (index + 1) - visiblePointsMiddlePiece;
        // and set it in the middle of the value
        xPoint -= valueWidth / 2;
        return {
            value: Number(value),
            xPoint: xPoint,
            yPoint: yPoint,
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridXLabelsComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridXLabelsComponent.prototype, "xData", void 0);
    ChartGridXLabelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-chart-grid-xLabels]',
            template: __webpack_require__(/*! ./chart-grid-xLabels.component.html */ "./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.html"),
            styles: [__webpack_require__(/*! ./chart-grid-xLabels.component.scss */ "./src/app/chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"]])
    ], ChartGridXLabelsComponent);
    return ChartGridXLabelsComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg:text\r\n  *ngFor=\"let label of yLabelsArr\"\r\n  [attr.x]=\"label.x\"\r\n  [attr.y]=\"label.y\"\r\n  [attr.font-size]=\"label.fontSize\"\r\n  [attr.fill]=\"label.fill\"\r\n>{{label.value}}</svg:text>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LWdyaWQvY2hhcnQtZ3JpZC15bGFiZWxzL2NoYXJ0LWdyaWQteUxhYmVscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChartGridYLabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartGridYLabelsComponent", function() { return ChartGridYLabelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chart-events.service */ "./src/app/chart/chart-events.service.ts");




var ChartGridYLabelsComponent = /** @class */ (function () {
    function ChartGridYLabelsComponent(chartEventsService) {
        var _this = this;
        this.chartEventsService = chartEventsService;
        this.horNumMarginBottom = 5;
        this.sub1 = this.chartEventsService
            .visibleFrame
            .subscribe(function (visibleFrame) {
            if (_this.yLabelsArr && _this.yLabelsArr.length > 0) {
                _this.updateLabels(visibleFrame);
            }
        });
    }
    ChartGridYLabelsComponent.prototype.ngOnInit = function () {
        this.yLabelsArr = this.buildLabels();
    };
    ChartGridYLabelsComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    ChartGridYLabelsComponent.prototype.buildLabels = function () {
        var yLabelsArr = [];
        var horStep = _chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"].roundUpVal(this.settings._maxValHeight / this.settings.grid.yLabelsCount);
        // build horizontal lines on the data
        for (var lineIndex = 1; lineIndex <= this.settings.grid.yLabelsCount; lineIndex++) {
            // evenly distribute lines from the ground
            var y = this.settings.main.height / this.settings.grid.yLabelsCount * lineIndex;
            y -= this.settings.main.paddingBot;
            y -= this.horNumMarginBottom;
            // multiply line on proportional value
            var value = this.settings.grid.yLabelsCount * horStep;
            // and show it from biggest to lowest
            value -= lineIndex * horStep;
            yLabelsArr.push({
                value: value,
                x: 0,
                y: y,
                fontSize: this.settings.grid.fontSize,
                fill: 'black',
            });
        }
        return yLabelsArr;
    };
    ChartGridYLabelsComponent.prototype.updateLabels = function (visibleFrame) {
        var maxValHeight = 0;
        var yDataLen = this.yData.length;
        for (var yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
            var curData = this.yData[yDataIdx];
            var curDataArr = curData.data.slice(visibleFrame.from, visibleFrame.to);
            maxValHeight = maxValHeight < Math.max.apply(Math, curDataArr) ? Math.max.apply(Math, curDataArr) : maxValHeight;
        }
        var horStep = _chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"].roundUpVal(maxValHeight / this.settings.grid.yLabelsCount);
        this.chartEventsService.maxValHeight.emit(maxValHeight);
        var yLabelsArrLen = this.yLabelsArr.length;
        for (var yLabelsArrIdx = 0; yLabelsArrIdx < yLabelsArrLen; yLabelsArrIdx++) {
            var curItem = this.yLabelsArr[yLabelsArrIdx];
            // evenly distribute lines from the ground
            var y = this.settings.main.height / this.settings.grid.yLabelsCount * yLabelsArrIdx;
            y -= this.settings.main.paddingBot;
            y -= this.horNumMarginBottom;
            // multiply line on proportional value
            var value = this.settings.grid.yLabelsCount * horStep;
            // and show it from biggest to lowest
            value -= yLabelsArrIdx * horStep;
            curItem.y = y;
            curItem.value = value;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridYLabelsComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChartGridYLabelsComponent.prototype, "yData", void 0);
    ChartGridYLabelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-chart-grid-yLabels]',
            template: __webpack_require__(/*! ./chart-grid-yLabels.component.html */ "./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.html"),
            styles: [__webpack_require__(/*! ./chart-grid-yLabels.component.scss */ "./src/app/chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_3__["ChartEventsService"]])
    ], ChartGridYLabelsComponent);
    return ChartGridYLabelsComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid.component.html":
/*!************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg:g\r\n  app-chart-grid-xLines\r\n  [settings]=\"settings\"\r\n  [data]=\"data\"\r\n  [svg]=\"svg\"/>\r\n<svg:g\r\n  app-chart-grid-xLabels\r\n  [settings]=\"settings\"\r\n  [xData]=\"data.x\"/>\r\n<svg:g\r\n  app-chart-grid-yLabels\r\n  [yData]=\"data.y\"\r\n  [settings]=\"settings\"/>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid.component.scss":
/*!************************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LWdyaWQvY2hhcnQtZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chart/chart-grid/chart-grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chart/chart-grid/chart-grid.component.ts ***!
  \**********************************************************/
/*! exports provided: ChartGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartGridComponent", function() { return ChartGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartGridComponent = /** @class */ (function () {
    function ChartGridComponent() {
    }
    ChartGridComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartGridComponent.prototype, "svg", void 0);
    ChartGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-chart-grid]',
            template: __webpack_require__(/*! ./chart-grid.component.html */ "./src/app/chart/chart-grid/chart-grid.component.html"),
            styles: [__webpack_require__(/*! ./chart-grid.component.scss */ "./src/app/chart/chart-grid/chart-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartGridComponent);
    return ChartGridComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-main/chart-main.component.html":
/*!************************************************************!*\
  !*** ./src/app/chart/chart-main/chart-main.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\r\n  [attr.viewBox]=\"viewBox\"\r\n  [attr.width]=\"svg.width\"\r\n  [attr.height]=\"svg.height\"\r\n  [attr.x]=\"0\"\r\n  [attr.y]=\"0\">\r\n  <g\r\n    app-chart-grid\r\n    [data]=\"data\"\r\n    [settings]=\"settings\"\r\n    [svg]=\"svg\"/>\r\n  <g\r\n    app-chart-polyline\r\n    [settings]=\"settings\"\r\n    [yData]=\"data.y\"\r\n    [svg]=\"svg\"\r\n    [visibleFrame]=\"visibleFrame\"/>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-main/chart-main.component.scss":
/*!************************************************************!*\
  !*** ./src/app/chart/chart-main/chart-main.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvY2hhcnQtbWFpbi9EOlxcUFJPSkVDVFNcXE1ZXFxUR0Mvc3JjXFxhcHBcXGNoYXJ0XFxjaGFydC1tYWluXFxjaGFydC1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhcnQvY2hhcnQtbWFpbi9jaGFydC1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chart/chart-main/chart-main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chart/chart-main/chart-main.component.ts ***!
  \**********************************************************/
/*! exports provided: ChartMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMainComponent", function() { return ChartMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-events.service */ "./src/app/chart/chart-events.service.ts");



var ChartMainComponent = /** @class */ (function () {
    function ChartMainComponent(chartEventsService) {
        var _this = this;
        this.chartEventsService = chartEventsService;
        this.sub1 = this.chartEventsService
            .visibleFrame
            .subscribe(function (visibleFrame) {
            // need to update whole object to fire ngOnChanges in child component
            _this.visibleFrame = {
                from: visibleFrame.from,
                to: visibleFrame.to
            };
        });
    }
    ChartMainComponent.prototype.ngOnInit = function () {
        this.svg = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.settings.main, { width: this.settings._width });
        this.viewBox = "0 0 " + this.svg.width + " " + this.svg.height;
    };
    ChartMainComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartMainComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartMainComponent.prototype, "settings", void 0);
    ChartMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-main',
            template: __webpack_require__(/*! ./chart-main.component.html */ "./src/app/chart/chart-main/chart-main.component.html"),
            styles: [__webpack_require__(/*! ./chart-main.component.scss */ "./src/app/chart/chart-main/chart-main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"]])
    ], ChartMainComponent);
    return ChartMainComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-polyline/chart-polyline.component.html":
/*!********************************************************************!*\
  !*** ./src/app/chart/chart-polyline/chart-polyline.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg:polyline\r\n  *ngFor=\"let polyline of polylineArr\"\r\n  [attr.points]=\"polyline.points\"\r\n  [attr.stroke]=\"polyline.stroke\"\r\n  [attr.data-name]=\"polyline.dataName\"\r\n  [attr.data-type]=\"polyline.dataType\"\r\n  [attr.stroke-width]=\"polyline.strokeWidth\"\r\n  [attr.visibility]=\"polyline.visibility\"\r\n  [attr.fill]=\"polyline.fill\"\r\n/>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-polyline/chart-polyline.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/chart/chart-polyline/chart-polyline.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LXBvbHlsaW5lL2NoYXJ0LXBvbHlsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chart/chart-polyline/chart-polyline.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chart/chart-polyline/chart-polyline.component.ts ***!
  \******************************************************************/
/*! exports provided: ChartPolylineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPolylineComponent", function() { return ChartPolylineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-events.service */ "./src/app/chart/chart-events.service.ts");



var ChartPolylineComponent = /** @class */ (function () {
    function ChartPolylineComponent(chartEventsService) {
        var _this = this;
        this.chartEventsService = chartEventsService;
        this.sub1 = this.chartEventsService
            .togglePolyline
            .subscribe(function (polyline) {
            _this.polylineArr[polyline.index].visibility = polyline.isVisible ? 'visible' : 'hidden';
        });
        this.sub2 = this.chartEventsService
            .maxValHeight
            .subscribe(function (maxValHeight) {
            if (_this.settings && _this.settings._maxValHeight) {
                _this.settings._maxValHeight = maxValHeight;
            }
        });
    }
    ChartPolylineComponent.prototype.ngOnInit = function () {
        this.polylineArr = this.buildPolyline();
    };
    ChartPolylineComponent.prototype.ngOnChanges = function (changes) {
        if (this.polylineArr && this.polylineArr.length > 0) {
            this.visibleFrame = changes.visibleFrame.currentValue;
            this.updatePolyline();
        }
    };
    ChartPolylineComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    ChartPolylineComponent.prototype.buildPolyline = function () {
        var polylineArr = [];
        var yDataLen = this.yData.length;
        for (var yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
            var curData = this.yData[yDataIdx];
            var curDataArr = curData.data.slice(this.visibleFrame.from, this.visibleFrame.to);
            var pointsArr = this.calcXY(curDataArr);
            polylineArr.push({
                points: pointsArr,
                stroke: curData.color,
                dataName: curData.name,
                dataType: curData.type,
                strokeWidth: this.svg.polylineStrokeWidth,
                visibility: 'visible',
                fill: 'none'
            });
        }
        return polylineArr;
    };
    ChartPolylineComponent.prototype.updatePolyline = function () {
        var yDataLen = this.yData.length;
        for (var yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
            var curData = this.yData[yDataIdx];
            var curPolyline = this.polylineArr[yDataIdx];
            var curDataArr = curData.data.slice(this.visibleFrame.from, this.visibleFrame.to);
            curPolyline.points = this.calcXY(curDataArr);
        }
    };
    ChartPolylineComponent.prototype.calcXY = function (data) {
        var pointsArr = [];
        var dataLength = data.length;
        var paddingBot = this.svg.paddingBot ? this.svg.paddingBot : 0;
        for (var dataIndex = 0; dataIndex < dataLength; dataIndex++) {
            var curItem = Number(data[dataIndex]);
            var pointStepGap = this.settings._width / (dataLength - 1);
            var xPoint = (pointStepGap * dataIndex).toFixed(4);
            // get proportional val of Y point
            var yPoint = curItem / this.settings._maxValHeight;
            yPoint *= this.settings.main.height - paddingBot;
            // turn over lines and add ver padding
            yPoint = Number((this.settings.main.height - yPoint - paddingBot).toFixed(4));
            // create lines array [x,y]
            pointsArr.push(xPoint + " " + yPoint);
        }
        return pointsArr;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChartPolylineComponent.prototype, "yData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartPolylineComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartPolylineComponent.prototype, "visibleFrame", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartPolylineComponent.prototype, "svg", void 0);
    ChartPolylineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-chart-polyline]',
            template: __webpack_require__(/*! ./chart-polyline.component.html */ "./src/app/chart/chart-polyline/chart-polyline.component.html"),
            styles: [__webpack_require__(/*! ./chart-polyline.component.scss */ "./src/app/chart/chart-polyline/chart-polyline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"]])
    ], ChartPolylineComponent);
    return ChartPolylineComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg:rect\r\n  *ngFor=\"let rect of rectArr\"\r\n  [attr.x]=\"rect.x\"\r\n  [attr.y]=\"rect.y\"\r\n  [attr.width]=\"rect.width\"\r\n  [attr.height]=\"rect.height\"\r\n  [attr.fill]=\"rect.fill\"\r\n  [attr.draggable]=\"rect.isDraggable ? true : null\"\r\n  [attr.data-rect-id]=\"rect.isDraggable ? rect.rectId : null\"\r\n  [style.cursor]=\"rect.isDraggable ? 'move' : 'initial'\"/>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LXRodW1iLWZyYW1lL2NoYXJ0LXRodW1iLWZyYW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.ts ***!
  \************************************************************************/
/*! exports provided: ChartThumbFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartThumbFrameComponent", function() { return ChartThumbFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-events.service */ "./src/app/chart/chart-events.service.ts");



var RectArr;
(function (RectArr) {
    RectArr[RectArr["LR"] = 0] = "LR";
    RectArr[RectArr["RR"] = 1] = "RR";
    RectArr[RectArr["DR"] = 2] = "DR";
    RectArr[RectArr["DLR"] = 3] = "DLR";
    RectArr[RectArr["DRR"] = 4] = "DRR";
})(RectArr || (RectArr = {}));
var ChartThumbFrameComponent = /** @class */ (function () {
    function ChartThumbFrameComponent(chartEventsService, _el) {
        this.chartEventsService = chartEventsService;
        this._el = _el;
        this.rectArr = [
            {
                rectId: RectArr.LR,
                isDraggable: false,
                x: null,
                y: null,
                width: null,
                height: null,
                fill: 'rgba(0, 191, 255, 0.05)'
            },
            {
                rectId: RectArr.RR,
                isDraggable: false,
                x: null,
                y: null,
                width: null,
                height: null,
                fill: 'rgba(0, 191, 255, 0.05)'
            },
            {
                rectId: RectArr.DR,
                isDraggable: true,
                x: null,
                y: null,
                width: null,
                height: null,
                fill: 'rgba(0, 0, 0, 0)'
            },
            {
                rectId: RectArr.DLR,
                isDraggable: true,
                x: null,
                y: null,
                width: null,
                height: null,
                fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
                rectId: RectArr.DRR,
                isDraggable: true,
                x: null,
                y: null,
                width: null,
                height: null,
                fill: 'rgba(0, 0, 0, 0.1)'
            }
        ];
    }
    ChartThumbFrameComponent.prototype.ngOnInit = function () {
        this.buildDraggableFrame();
    };
    ChartThumbFrameComponent.prototype.buildDraggableFrame = function () {
        // draggable border init width
        var DBWidth = 14;
        // draggable rect init width
        var DRWidth = this.settings._width * this.settings._initRatioPercent;
        // create draggable frame overlay
        var rectArrLen = this.rectArr.length;
        for (var rectArrIdx = 0; rectArrIdx < rectArrLen; rectArrIdx++) {
            var currRect = this.rectArr[rectArrIdx];
            var initRectWidth = 0;
            var initRectX = 0;
            switch (rectArrIdx) {
                case RectArr.LR:
                    initRectWidth = 0;
                    initRectX = 0;
                    break;
                case RectArr.RR:
                    // right rect width = svg width - draggable rect width
                    initRectWidth = this.settings._width - DRWidth;
                    // right rect X = draggable rect width
                    initRectX = DRWidth;
                    break;
                case RectArr.DR:
                    initRectWidth = DRWidth;
                    initRectX = 0;
                    break;
                case RectArr.DLR:
                    initRectWidth = DBWidth;
                    initRectX = 0;
                    break;
                case RectArr.DRR:
                    initRectWidth = DBWidth;
                    // draggable right border X = draggable rect width - draggable border width
                    initRectX = DRWidth - DBWidth;
                    break;
            }
            currRect.x = initRectX;
            currRect.y = 0;
            currRect.width = initRectWidth;
            currRect.height = this.settings.main.height;
        }
        this.loadDraggableFrameEvents();
    };
    ChartThumbFrameComponent.prototype.loadDraggableFrameEvents = function () {
        // add mouse/touch events
        var _this = this;
        this._el.nativeElement.addEventListener('mousedown', function (event) {
            _this.startDrag(event);
        });
        this._el.nativeElement.addEventListener('mousemove', function (event) {
            _this.onDrag(event);
        });
        this._el.nativeElement.addEventListener('mouseup', function () {
            _this.endDrag();
        });
        this._el.nativeElement.addEventListener('mouseleave', function () {
            _this.endDrag();
        });
        this._el.nativeElement.addEventListener('touchstart', function (event) {
            _this.startDrag(event);
        });
        this._el.nativeElement.addEventListener('touchmove', function (event) {
            _this.onDrag(event);
        });
        this._el.nativeElement.addEventListener('touchend', function () {
            _this.endDrag();
        });
        this._el.nativeElement.addEventListener('touchleave', function () {
            _this.endDrag();
        });
        this._el.nativeElement.addEventListener('touchcancel', function () {
            _this.endDrag();
        });
    };
    ChartThumbFrameComponent.prototype.startDrag = function (event) {
        if (Boolean(event.target.getAttribute('draggable'))) {
            event.preventDefault();
            // set init values
            this.dragEl = {
                el: event.target,
                x: event.target.x.baseVal.value,
                width: event.target.width.baseVal.value,
                offsetX: this.getMouseXPosition(event)
            };
        }
    };
    ChartThumbFrameComponent.prototype.onDrag = function (event) {
        if (this.dragEl && this.dragEl.el) {
            event.preventDefault();
            var rectId = Number(this.dragEl.el.getAttribute('data-rect-id'));
            // get mouse/touch position
            var clientX = this.getMouseXPosition(event);
            // calculate drag position
            var translateX = Math.floor(clientX - this.dragEl.offsetX);
            this.rectArr[rectId].x = this.checkBorder(this.dragEl.x + translateX);
            switch (rectId) {
                case RectArr.DLR:
                case RectArr.DRR:
                    // border drag
                    // move borders according to drag el
                    if (rectId === RectArr.DLR) {
                        this.rectArr[RectArr.DR].width = this.rectArr[RectArr.RR].x - this.rectArr[RectArr.DLR].x;
                        this.rectArr[RectArr.DR].x = this.rectArr[RectArr.DLR].x;
                        // move sides according to drag el
                        this.rectArr[RectArr.LR].width = this.rectArr[RectArr.DR].x;
                    }
                    else if (rectId === RectArr.DRR) {
                        this.rectArr[RectArr.DR].width = this.rectArr[RectArr.DRR].x - this.rectArr[RectArr.DLR].x + this.rectArr[RectArr.DLR].width;
                        // move sides according to drag el
                        this.rectArr[RectArr.RR].width = this.settings._width - this.rectArr[RectArr.DRR].x;
                        this.rectArr[RectArr.RR].x = this.rectArr[RectArr.DRR].x + this.rectArr[RectArr.DRR].width;
                    }
                    break;
                case RectArr.DR:
                    // rect drag
                    // move sides according to drag el
                    this.rectArr[RectArr.LR].width = this.rectArr[RectArr.DR].x;
                    this.rectArr[RectArr.RR].width = this.checkBorder(this.settings._width - (this.rectArr[RectArr.DR].x + this.rectArr[RectArr.DR].width));
                    this.rectArr[RectArr.RR].x = this.checkBorder(this.rectArr[RectArr.DR].x + this.rectArr[RectArr.DR].width);
                    // move borders according to drag el
                    this.rectArr[RectArr.DLR].x = this.rectArr[RectArr.DR].x;
                    this.rectArr[RectArr.DRR].x = this.rectArr[RectArr.RR].x - this.rectArr[RectArr.DRR].width;
                    break;
            }
            this.calcDragEvent();
        }
    };
    ChartThumbFrameComponent.prototype.endDrag = function () {
        event.preventDefault();
        // unbind from dragging
        this.dragEl = null;
    };
    ChartThumbFrameComponent.prototype.calcDragEvent = function () {
        var from = Math.floor(this.settings._xLen * (this.rectArr[RectArr.DR].x / this.settings._width));
        var to = Math.floor(this.settings._xLen * (this.rectArr[RectArr.DR].width / this.settings._width));
        to += from;
        this.chartEventsService.visibleFrame.emit({ from: from, to: to });
    };
    ChartThumbFrameComponent.prototype.getMouseXPosition = function (event) {
        // get parent SVG matrix
        var CTM = this._el.nativeElement.parentNode.getScreenCTM();
        if (event.touches) {
            // override (e) if this is touch device
            event = event.touches[0];
        }
        // calculate X position
        return (event.clientX - CTM.e) / CTM.a;
    };
    ChartThumbFrameComponent.prototype.checkBorder = function (num) {
        if (num <= 0) {
            return 0;
        }
        else if (num >= this.settings._width) {
            return this.settings._width;
        }
        else {
            return num;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartThumbFrameComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartThumbFrameComponent.prototype, "visibleFrame", void 0);
    ChartThumbFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-chart-thumb-frame]',
            template: __webpack_require__(/*! ./chart-thumb-frame.component.html */ "./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.html"),
            styles: [__webpack_require__(/*! ./chart-thumb-frame.component.scss */ "./src/app/chart/chart-thumb-frame/chart-thumb-frame.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ChartThumbFrameComponent);
    return ChartThumbFrameComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart-thumb/chart-thumb.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chart/chart-thumb/chart-thumb.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\r\n  [attr.viewBox]=\"viewBox\"\r\n  [attr.width]=\"svg.width\"\r\n  [attr.height]=\"svg.height\"\r\n  [attr.x]=\"0\"\r\n  [attr.y]=\"0\"\r\n  [attr.preserveAspectRatio]=\"'none'\">\r\n  <g\r\n    app-chart-polyline\r\n    [settings]=\"settings\"\r\n    [yData]=\"data.y\"\r\n    [svg]=\"svg\"\r\n    [visibleFrame]=\"visibleFrame\"/>\r\n  <g\r\n    app-chart-thumb-frame\r\n    [settings]=\"settings\"\r\n    [visibleFrame]=\"visibleFrame\"/>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/chart/chart-thumb/chart-thumb.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/chart/chart-thumb/chart-thumb.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host svg {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvY2hhcnQtdGh1bWIvRDpcXFBST0pFQ1RTXFxNWVxcVEdDL3NyY1xcYXBwXFxjaGFydFxcY2hhcnQtdGh1bWJcXGNoYXJ0LXRodW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBSUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhcnQvY2hhcnQtdGh1bWIvY2hhcnQtdGh1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chart/chart-thumb/chart-thumb.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chart/chart-thumb/chart-thumb.component.ts ***!
  \************************************************************/
/*! exports provided: ChartThumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartThumbComponent", function() { return ChartThumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartThumbComponent = /** @class */ (function () {
    function ChartThumbComponent() {
    }
    ChartThumbComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.svg = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.settings.thumb, { width: this.settings._width });
                this.viewBox = "0 0 " + this.settings._width + " " + this.settings.main.height;
                this.visibleFrame = {
                    from: 0,
                    to: this.settings._xLen
                };
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartThumbComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartThumbComponent.prototype, "settings", void 0);
    ChartThumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-thumb',
            template: __webpack_require__(/*! ./chart-thumb.component.html */ "./src/app/chart/chart-thumb/chart-thumb.component.html"),
            styles: [__webpack_require__(/*! ./chart-thumb.component.scss */ "./src/app/chart/chart-thumb/chart-thumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartThumbComponent);
    return ChartThumbComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chart-main [data]=\"data\" [settings]=\"settings\"></app-chart-main>\r\n\r\n<app-chart-thumb [data]=\"data\" [settings]=\"settings\"></app-chart-thumb>\r\n\r\n<app-chart-buttons [data]=\"data\" [settings]=\"settings\"></app-chart-buttons>\r\n"

/***/ }),

/***/ "./src/app/chart/chart.component.scss":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-events.service */ "./src/app/chart/chart-events.service.ts");



var ChartComponent = /** @class */ (function () {
    function ChartComponent(chartEventsService) {
        this.chartEventsService = chartEventsService;
        this.settings = {
            // chart width will be 6 times bigger then screen
            _width: window.innerWidth,
            _maxValHeight: null,
            _xLen: null,
            _initRatioPercent: 0.2,
            main: {
                height: 500,
                polylineStrokeWidth: 2,
                paddingBot: 40
            },
            thumb: {
                height: 100,
                polylineStrokeWidth: 1,
            },
            grid: {
                xLinesThickness: 1,
                yLabelsCount: 6,
                fontSize: 14
            }
        };
    }
    ChartComponent_1 = ChartComponent;
    ChartComponent.roundUpVal = function (val) {
        // round up maxVal
        val = Math.ceil(val);
        return (Number(val.toString().slice(0, 1)) + 1) // get first num + 1 of max val
            *
                Number("1e" + (val.toString().length - 1)); // 1e5 = 100000. get max val in tens/hundreds/thousands format
    };
    ChartComponent.calcMaxValues = function (yData) {
        var maxValHeight = 0;
        for (var yDataIndex = 0; yDataIndex < yData.length; yDataIndex++) {
            var curyData = yData[yDataIndex];
            maxValHeight = maxValHeight < Math.max.apply(Math, curyData.data) ? Math.max.apply(Math, curyData.data) : maxValHeight;
        }
        // round up maxVal
        return ChartComponent_1.roundUpVal(maxValHeight);
    };
    ChartComponent.prototype.ngOnInit = function () {
        this.settings._xLen = this.data.x.data.length - 1;
        this.settings._maxValHeight = ChartComponent_1.calcMaxValues(this.data.y);
        this.settings.main.height += this.settings.main.paddingBot;
        this.chartEventsService.visibleFrame.emit({
            from: 0,
            // init visible frame will be 20% of chart length
            to: Math.floor(this.settings._xLen * this.settings._initRatioPercent)
        });
    };
    var ChartComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartComponent.prototype, "data", void 0);
    ChartComponent = ChartComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            providers: [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"]],
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/chart/chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chart_events_service__WEBPACK_IMPORTED_MODULE_2__["ChartEventsService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJECTS\MY\TGC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map