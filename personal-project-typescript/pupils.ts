import { typePupil } from "./types";
import { interfacePupils } from "./interfaces";

export class Pupils implements interfacePupils {
  pupils: typePupil[] = [];

  add(data: typePupil) {
    data.id = `${Math.random().toString(36).substring(3, 11)}`;
    this.pupils.push(data);
    return data;
  }

  read(id: string) {
    return this.pupils.find((p) => p.id == id);
  }

  update(id: string, updatedProfile: typePupil) {
    const index = this.pupils.findIndex((p) => p.id == id);
    updatedProfile.id = id;
    this.pupils.splice(index, 1, updatedProfile);
    return updatedProfile;
  }

  remove(pupilId: string) {
    this.pupils = this.pupils.filter((p) => p.id != pupilId);
  }
}
