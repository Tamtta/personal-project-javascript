export class Pupils {
  pupils = [];
  #validateData(data) {
    // name
    if (!data.name) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.name === "undefined") {
      throw new TypeError("undefined");
    }
    if (!data.name.first) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.name.first !== "string") {
      throw new Error("First name is not a string!");
    } else if (typeof data.name.first === "undefined") {
      throw new TypeError("undefined");
    }
    if (!data.name.last) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.name.last !== "string") {
      throw new Error("Last name is not a string!");
    } else if (typeof data.name.last === "undefined") {
      throw new TypeError("undefined");
    }
    // dateOfBirth
    if (!data.dateOfBirth) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.dateOfBirth !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (typeof data.dateOfBirth === "undefined") {
      throw new TypeError("undefined");
    } else if (data.dateOfBirth && typeof data.dateOfBirth === "string") {
      if (!Date.parse(data.dateOfBirth)) {
        throw new Error("Date format is incorrect");
      }
    }
    // phones
    if (!data.phones) {
      throw new Error("Parameter is missing!");
    } else if (Array.isArray(data.phones)) {
      for (let i = 0; i < data.phones.length; i++) {
        if (!data.phones[i].phone) {
          throw new Error("Parameter is missing!");
        } else if (typeof data.phones[i].phone !== "string") {
          throw new Error("Parameter is not a string!");
        } else if (typeof data.phones[i].phone === "undefined") {
          throw new TypeError("undefined");
        } else {
          let regExp =
            /^\+?([995]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
          if (!regExp.test(data.phones[i].phone)) {
            throw new Error("Phone format is incorrect!");
          }
        }
      }

      for (let i = 0; i < data.phones.length; i++) {
        if (!data.phones[i].primary) {
          throw new Error("Parameter is missing!");
        } else if (typeof data.phones[i].primary !== "boolean") {
          throw new Error("Parameter should be a boolean!");
        } else if (typeof data.phones[i].primary === "undefined") {
          throw new TypeError("undefined");
        }
      }
    }
    // sex
    if (!data.sex) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.sex !== "string") {
      throw new Error("Parameter is not a string! ");
    } else if (typeof data.sex === "undefined") {
      throw new TypeError("undefined");
    } else {
      if (data.sex !== "male" && data.sex !== "female") {
        throw new Error("Given parameter is not valid!");
      }
    }
    // description
    if (data.description && typeof data.description !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (data.description && typeof data.description === "undefined") {
      throw new TypeError("undefined");
    }
  }

  add(data) {
    this.#validateData(data, true);
    data.id = `${Math.random().toString(36).substring(3, 11)}`;
    this.pupils.push(data);
    return data;
  }

  read(id) {
    if (typeof id !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    return this.pupils.find((p) => p.id == id);
  }

  update(id, updatedProfile) {
    this.#validateData(updatedProfile, true);
    if (typeof id !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    const index = this.pupils.findIndex((p) => p.id == id);
    updatedProfile.id = id;
    this.pupils.splice(index, 1, updatedProfile);
    // this.pupils.slice(index, index + 1);
    return updatedProfile;
  }

  remove(pupilId) {
    if (typeof pupilId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    this.pupils = this.pupils.filter((p) => p.id != pupilId);
  }
}
