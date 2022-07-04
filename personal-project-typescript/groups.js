export class Groups {
    constructor() {
        this.groups = [];
    }
    add(roomID) {
        const room = {
            id: `${Math.random().toString(36).substring(2, 10)}`,
            room: roomID,
            pupils: [],
        };
        this.groups.push(room);
        return room.id;
    }
    addPupil(groupId, pupil) {
        if (typeof groupId !== "string") {
            throw new Error("Type of parameter is not a string!");
        }
        const room = this.groups.find((g) => g.id == groupId);
        room.pupils.push(pupil);
        return room;
    }
    removePupil(groupId, pupilId) {
        const room = this.groups.find((g) => g.id == groupId);
        room.pupils = room.pupils.filter((p) => p.id !== pupilId);
    }
    update(groupId, updateGroup) {
        const room = this.groups.find((g) => g.id == groupId);
        room.room = updateGroup.room;
    }
    read(groupId) {
        return this.groups.find((g) => g.id == groupId);
    }
    readAll() {
        return this.groups;
    }
}
