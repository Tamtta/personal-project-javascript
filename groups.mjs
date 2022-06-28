export class Groups {
  groups = [];

  add(roomID) {
    if (!Number.isInteger(roomID)) {
      throw new Error("Parameter should be an integer! ");
    }
    const room = {
      id: `${Math.random().toString(36).substring(2, 7)}`,
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
    if (typeof groupId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    if (typeof pupilId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    const room = this.groups.find((g) => g.id == groupId);
    room.pupils = room.pupils.filter((p) => p.id !== pupilId);
  }

  update(groupId, updateGroup) {
    if (typeof groupId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    const room = this.groups.find((g) => g.id == groupId);
    room.room = updateGroup.room;
  }

  read(groupId) {
    if (typeof groupId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    return this.groups.find((g) => g.id == groupId);
  }

  readAll() {
    return this.groups;
  }
}
