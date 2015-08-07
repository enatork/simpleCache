var CacheService = (function () {
    function CacheService() {
        this.cache = {};
    }
    CacheService.prototype.set = function (key, data) {
        this.cache[key] = data;
    };
    CacheService.prototype.get = function (key) {
        return this.cache[key];
    };
    CacheService.prototype.getCache = function () {
        return this.cache;
    };
    CacheService.prototype.remove = function (key) {
        delete this.cache[key];
    };
    CacheService.prototype.contains = function (key) {
        return key in this.cache;
    };
    return CacheService;
})();
module.exports = CacheService;
//# sourceMappingURL=CacheService.js.map