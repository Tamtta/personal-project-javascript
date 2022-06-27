export class Teachers {
  teachers = [];

  add(data) {
    if (data.name.first && typeof data.name.first !== "string") {
      throw new Error("First name is not a string!");
    }

    if (data.name.last && typeof data.name.last !== "string") {
      throw new Error("Last name is not a string!");
    }

    if (data.dateOfBirth && typeof data.dateOfBirth !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (data.dateOfBirth && typeof data.dateOfBirth === "string") {
      if (!Date.parse(data.dateOfBirth)) {
        throw new Error("Date format is incorrect");
      }
    }

    if (data.emails && Array.isArray(data.emails)) {
      for (let i = 0; i < data.emails.length; i++) {
        if (data.emails[i].email && typeof data.emails[i].email !== "string") {
          throw new Error("Parameter is not a string!");
        } else if (
          data.emails[i].email &&
          typeof data.emails[i].email === "string"
        ) {
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
        if (
          data.emails[i].primary &&
          typeof data.emails[i].primary !== "boolean"
        ) {
          throw new Error("Parameter should be a boolean!");
        }
      }
    }

    if (data.phones && Array.isArray(data.phones)) {
      for (let i = 0; i < data.phones.length; i++) {
        if (data.phones[i].phone && typeof data.phones[i].phone !== "string") {
          throw new Error("Parameter is not a string!");
        } else if (
          data.phones[i].phone &&
          typeof data.phones[i].phone === "string"
        ) {
          let regExp =
            /^\+?([995]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
          if (!regExp.test(data.phones[i].phone)) {
            throw new Error("Phone format is incorrect!");
          }
        }
      }

      for (let i = 0; i < data.phones.length; i++) {
        if (
          data.phones[i].primary &&
          typeof data.phones[i].primary !== "boolean"
        ) {
          throw new Error("Parameter should be a boolean!");
        }
      }
    }

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
