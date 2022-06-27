export class Teachers {
  teachers = [];
  #validateData(data) {
    // name
    if (!data.name.first) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.name.first !== "string") {
      throw new Error("First name is not a string!");
    }
    if (!data.name.last) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.name.last !== "string") {
      throw new Error("Last name is not a string!");
    }
    // dateOfBirth
    if (!data.dateOfBirth) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.dateOfBirth !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (data.dateOfBirth && typeof data.dateOfBirth === "string") {
      if (!Date.parse(data.dateOfBirth)) {
        throw new Error("Date format is incorrect");
      }
    }
    // emails
    if (!data.emails) {
      throw new Error("Parameter is missing!");
    } else if (Array.isArray(data.emails)) {
      for (let i = 0; i < data.emails.length; i++) {
        if (!data.emails[i].email) {
          throw new Error("Parameter is missing!");
        } else if (typeof data.emails[i].email !== "string") {
          throw new Error("Parameter is not a string!");
        } else {
          if (
            !data.emails[i].email
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          ) {
            throw new Error("Email format is incorrect!");
          }
        }
      }

      for (let i = 0; i < data.emails.length; i++) {
        if (!data.emails[i].primary) {
          throw new Error("Parameter is missing!");
        } else if (typeof data.emails[i].primary !== "boolean") {
          throw new Error("Parameter should be a boolean!");
        }
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
        }
      }
    }
    // sex
    if (!data.sex) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.sex !== "string") {
      throw new Error("Parameter is not a string! ");
    } else {
      if (data.sex !== "male" && data.sex !== "female") {
        throw new Error("Given parameter is not valid!");
      }
    }
    // subjects
    if (!data.subjects) {
      throw new Error("Parameter is missing!");
    } else if (Array.isArray(data.subjects)) {
      for (let i = 0; i < data.subjects.length; i++) {
        if (!data.subjects[i].subject) {
          throw new Error("Parameter is missing!");
        } else if (typeof data.subjects[i].subject !== "string") {
          throw new Error("Parameter is not a string!");
        }
      }
    }
    // description
    if (data.description && typeof data.description !== "string") {
      throw new Error("Parameter is not a string!");
    }
  }

  add(data) {
    this.#validateData(data, true);
    data.id = `${Math.ceil(Math.random() * 10000)}`;
    this.teachers.push(data);
    return data.id;
  }

  read(id) {
    return this.teachers.find((t) => t.id == id);
  }

  update(id, updateProfile) {
    const index = this.teachers.findIndex((t) => t.id == id);
    updateProfile.id = id;
    this.teachers.splice(index, 1, updateProfile);
  }

  remove(teacherId) {
    this.teachers = this.teachers.filter((t) => t.id != teacherId);
  }
}
