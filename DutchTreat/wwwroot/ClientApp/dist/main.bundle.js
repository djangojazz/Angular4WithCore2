webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'the-shop',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var productList_component_1 = __webpack_require__("./ClientApp/app/shop/productList.component.ts");
var cart_component_1 = __webpack_require__("./ClientApp/app/shop/cart.component.ts");
var shop_component_1 = __webpack_require__("./ClientApp/app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__("./ClientApp/app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__("./ClientApp/app/login/login.component.ts");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [
    { path: "", component: shop_component_1.Shop },
    { path: "checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                productList_component_1.ProductList,
                cart_component_1.Cart,
                shop_component_1.Shop,
                checkout_component_1.Checkout,
                login_component_1.Login
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: true // for Debugging of the Routes
                })
            ],
            providers: [dataService_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n"

/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3>Confirm Order</h3>\n  <table class=\"table table-bordered table-hover\">\n    <tr *ngFor=\"let o of data.order.items\">\n      <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\n      <td>{{ o.quantity }}</td>\n      <td>{{ o.unitPrice|currency:'USD':true }}</td>\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\n    </tr>\n  </table>\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\n    <table class=\"table table-condensed\">\n      <tr>\n        <td class=\"text-right\">Subtotal</td>\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Shipping</td>\n        <td class=\"text-right\">$ 0.00</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Total:</td>\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\n      </tr>\n    </table>\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var Checkout = /** @class */ (function () {
    function Checkout(data) {
        this.data = data;
    }
    Checkout.prototype.onCheckout = function () {
        // TODO
        alert("Doing checkout");
    };
    Checkout = __decorate([
        core_1.Component({
            selector: "checkout",
            template: __webpack_require__("./ClientApp/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("./ClientApp/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;


/***/ }),

/***/ "./ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" />\r\n                <a href=\"#\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Login = /** @class */ (function () {
    function Login() {
    }
    Login = __decorate([
        core_1.Component({
            selector: "login",
            template: __webpack_require__("./ClientApp/app/login/login.component.html")
        })
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var order_1 = __webpack_require__("./ClientApp/app/shared/order.ts");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.order = new order_1.Order();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.AddToOrder = function (product) {
        if (!this.order) {
            this.order = new order_1.Order();
        }
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./ClientApp/app/shared/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;


/***/ }),

/***/ "./ClientApp/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{data.order.items.length }}</div>\r\n<div>Subtotal: {{data.order.subtotal | currency:\"USD\":true }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{o.productCategory }} - {{o.productTitle}} </td>\r\n            <td>{{o.quantity }}</td>\r\n            <td>{{o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>"

/***/ }),

/***/ "./ClientApp/app/shop/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Cart = /** @class */ (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            //Force login
            this.router.navigate(["login"]);
        }
        else {
            //Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    Cart = __decorate([
        core_1.Component({
            selector: "the-cart",
            template: __webpack_require__("./ClientApp/app/shop/cart.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;


/***/ }),

/***/ "./ClientApp/app/shop/productList.component.css":
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info .product-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./ClientApp/app/shop/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\" >\r\n        <img src=\"/img/{{p.artId}}.jpg\" class=\"img-responsive\" [alt]=\"p.title\" />\r\n        <div class=\"product-name\">{{p.category}} - {{p.size}}</div>\r\n            <div><strong>Price</strong> {{p.price | currency:\"USD\":true}}</div>\r\n            <div><strong>Artist</strong> {{p.artist}}</div>\r\n            <div><strong>Title</strong> {{p.title}}</div>\r\n            <div>Description: {{p.artDescription}}</div>\r\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/productList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var ProductList = /** @class */ (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
        this.products = data.products;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function () { return _this.products = _this.data.products; });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            template: __webpack_require__("./ClientApp/app/shop/productList.component.html"),
            styles: [__webpack_require__("./ClientApp/app/shop/productList.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./ClientApp/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{title}}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = __decorate([
        core_1.Component({
            selector: "the-shop",
            template: __webpack_require__("./ClientApp/app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());
exports.Shop = Shop;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map