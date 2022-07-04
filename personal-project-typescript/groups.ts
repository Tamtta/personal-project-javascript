import { typePupil } from "./types";
import { typeGroup } from "./types";

export class Groups {
  groups: typeGroup[] = [];

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
