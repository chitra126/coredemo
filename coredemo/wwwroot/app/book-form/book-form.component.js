"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var book_1 = require("../models/book");
var book_service_1 = require("../services/book.service");
var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(bookService, route) {
        this.bookService = bookService;
        this.route = route;
        this.updateMode = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        //this.getAll();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", book_1.Book)
    ], BookFormComponent.prototype, "book", void 0);
    BookFormComponent = __decorate([
        core_1.Component({
            selector: 'book-form',
            templateUrl: './book-form.component.html'
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.ActivatedRoute])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book-form.component.js.map