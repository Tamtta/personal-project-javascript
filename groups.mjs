export class Groups {
  groups = [];
  #validatePupil(pupil) {
    // name
    if (!pupil.name) {
      throw new Error("Parameter is missing!");
    } else if (typeof pupil.name === "undefined") {
      throw new TypeError("undefined");
    }
    if (!pupil.name.first) {
      throw new Error("Parameter is missing!");
    } else if (typeof pupil.name.first !== "string") {
      throw new Error("First name is not a string!");
    } else if (typeof pupil.name.first === "undefined") {
      throw new TypeError("undefined");
    }
    if (!pupil.name.last) {
      throw new Error("Parameter is missing!");
    } else if (typeof pupil.name.last !== "string") {
      throw new Error("Last name is not a string!");
    } else if (typeof pupil.name.last === "undefined") {
      throw new TypeError("undefined");
    }
    // dateOfBirth
    if (!pupil.dateOfBirth) {
      throw new Error("Parameter is missing!");
    } else if (typeof pupil.dateOfBirth !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (typeof pupil.dateOfBirth === "undefined") {
      throw new TypeError("undefined");
    } else if (pupil.dateOfBirth && typeof pupil.dateOfBirth === "string") {
      if (!Date.parse(pupil.dateOfBirth)) {
        throw new Error("Date format is incorrect");
      }
    }
    // phones
    if (!pupil.phones) {
      throw new Error("Parameter is missing!");
    } else if (Array.isArray(pupil.phones)) {
      for (let i = 0; i < pupil.phones.length; i++) {
        if (!pupil.phones[i].phone) {
          throw new Error("Parameter is missing!");
        } else if (typeof pupil.phones[i].phone !== "string") {
          throw new Error("Parameter is not a string!");
        } else if (typeof pupil.phones[i].phone === "undefined") {
          throw new TypeError("undefined");
        } else {
          let regExp =
            /^\+?([995]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
          if (!regExp.test(pupil.phones[i].phone)) {
            throw new Error("Phone format is incorrect!");
          }
        }
      }

      for (let i = 0; i < pupil.phones.length; i++) {
        if (!pupil.phones[i].primary) {
          throw new Error("Parameter is missing!");
        } else if (typeof pupil.phones[i].primary !== "boolean") {
          throw new Error("Parameter should be a boolean!");
        } else if (typeof pupil.phones[i].primary === "undefined") {
          throw new TypeError("undefined");
        }
      }
    }
    // sex
    if (!pupil.sex) {
      throw new Error("Parameter is missing!");
    } else if (typeof pupil.sex !== "string") {
      throw new Error("Parameter is not a string! ");
    } else if (typeof pupil.sex === "undefined") {
      throw new TypeError("undefined");
    } else {
      if (pupil.sex !== "male" && pupil.sex !== "female") {
        throw new Error("Given parameter is not valid!");
      }
    }
    // description
    if (pupil.description && typeof pupil.description !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (pupil.description && typeof pupil.description === "undefined") {
      throw new TypeError("undefined");
    }
  }

  add(roomID) {
    if (!Number.isInteger(roomID)) {
      throw new Error("Parameter should be an integer! ");
    }
    const room = {
      id: `${Math.random().toString(36).substring(2, 10)}`,
      room: roomID,
      pupils: [],
    };
    this.groups.push(room);
    return room.id;
  }

  addPupil(groupId, pupil) {
    this.#validatePupil(pupil, true);
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
