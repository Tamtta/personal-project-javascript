import { typePupil } from "./types";

export class Groups {
  groups = [];

  add(roomID: number) {
    const room = {
      id: `${Math.random().toString(36).substring(2, 10)}`,
      room: roomID,
      pupils: [],
    };
    this.groups.push(room);
    return room.id;
  }

  addPupil(groupId: string, pupil: typePupil) {
    if (typeof groupId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    const room = this.groups.find((g) => g.id == groupId);
    room.pupils.push(pupil);
    return room;
  }

  removePupil(groupId: string, pupilId: string) {
    const room = this.groups.find((g) => g.id == groupId);
    room.pupils = room.pupils.filter((p) => p.id !== pupilId);
  }

  update(
    groupId: string,
    updateGroup: {
      room: number;
    }
  ) {
    const room = this.groups.find((g) => g.id == groupId);
    room.room = updateGroup.room;
  }

  read(groupId: string) {
    return this.groups.find((g) => g.id == groupId);
  }

  readAll() {
    return this.groups;
  }
}
