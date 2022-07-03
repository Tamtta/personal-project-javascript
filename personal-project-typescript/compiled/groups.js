"use strict";
exports.__esModule = true;
exports.Groups = void 0;
var Groups = /** @class */ (function () {
    function Groups() {
        this.groups = [];
    }
    Groups.prototype.add = function (roomID) {
        var room = {
            id: "".concat(Math.random().toString(36).substring(2, 10)),
            room: roomID,
            pupils: []
        };
        this.groups.push(room);
        return room.id;
    };
    Groups.prototype.addPupil = function (groupId, pupil) {
        if (typeof groupId !== "string") {
            throw new Error("Type of parameter is not a string!");
        }
        var room = this.groups.find(function (g) { return g.id == groupId; });
        room.pupils.push(pupil);
        return room;
    };
    Groups.prototype.removePupil = function (groupId, pupilId) {
        var room = this.groups.find(function (g) { return g.id == groupId; });
        room.pupils = room.pupils.filter(function (p) { return p.id !== pupilId; });
    };
    Groups.prototype.update = function (groupId, updateGroup) {
        var room = this.groups.find(function (g) { return g.id == groupId; });
        room.room = updateGroup.room;
    };
    Groups.prototype.read = function (groupId) {
        return this.groups.find(function (g) { return g.id == groupId; });
    };
    Groups.prototype.readAll = function () {
        return this.groups;
    };
    return Groups;
}());
exports.Groups = Groups;
