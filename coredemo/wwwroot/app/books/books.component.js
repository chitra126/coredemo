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
var book_service_1 = require("../services/book.service");
var BooksComponent = /** @class */ (function () {
    function BooksComponent(route, bookService) {
        this.route = route;
        this.bookService = bookService;
    }
    BooksComponent.prototype.getAll = function () {
        var _this = this;
        this.bookService.getAll()
            .then(function (result) { return _this.books = result; })
            .catch(function (error) { return _this.error = error; });
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books',
            templateUrl: './app/books/books.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, book_service_1.BookService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map