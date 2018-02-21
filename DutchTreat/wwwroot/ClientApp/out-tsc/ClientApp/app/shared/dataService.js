"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
//@Injectable()
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map