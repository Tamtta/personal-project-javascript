export class Teachers {
    constructor() {
        this.teachers = [];
    }
    add(data) {
        data.id = `${Math.random().toString(36).substring(4, 12)}`;
        this.teachers.push(data);
        return data.id;
    }
    read(id) {
        return this.teachers.find((t) => t.id == id);
    }
    update(id, updatedProfile) {
        const index = this.teachers.findIndex((t) => t.id == id);
        updatedProfile.id = id;
        this.teachers.splice(index, 1, updatedProfile);
        return updatedProfile;
    }
    remove(teacherId) {
        this.teachers = this.teachers.filter((t) => t.id != teacherId);
    }
}
