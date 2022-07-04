"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
    constructor() {
        this.pupils = [];
    }
    add(data) {
        data.id = `${Math.random().toString(36).substring(3, 11)}`;
        if (!(data.sex = this.sex)) {
            throw new Error("incorrect sex");
        }
        this.pupils.push(data);
        return data;
    }
    read(id) {
        return this.pupils.find((p) => p.id == id);
    }
    update(id, updatedProfile) {
        const index = this.pupils.findIndex((p) => p.id == id);
        updatedProfile.id = id;
        this.pupils.splice(index, 1, updatedProfile);
        return updatedProfile;
    }
    remove(pupilId) {
        this.pupils = this.pupils.filter((p) => p.id != pupilId);
    }
}
exports.Pupils = Pupils;
