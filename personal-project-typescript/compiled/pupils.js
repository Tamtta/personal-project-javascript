"use strict";
exports.__esModule = true;
exports.Pupils = void 0;
var Pupils = /** @class */ (function () {
    function Pupils() {
        this.pupils = [];
    }
    Pupils.prototype.add = function (data) {
        data.id = "".concat(Math.random().toString(36).substring(3, 11));
        this.pupils.push(data);
        return data;
    };
    Pupils.prototype.read = function (id) {
        return this.pupils.find(function (p) { return p.id == id; });
    };
    Pupils.prototype.update = function (id, updatedProfile) {
        var index = this.pupils.findIndex(function (p) { return p.id == id; });
        updatedProfile.id = id;
        this.pupils.splice(index, 1, updatedProfile);
        // this.pupils.slice(index, index + 1);
        return updatedProfile;
    };
    Pupils.prototype.remove = function (pupilId) {
        this.pupils = this.pupils.filter(function (p) { return p.id != pupilId; });
    };
    return Pupils;
}());
exports.Pupils = Pupils;
