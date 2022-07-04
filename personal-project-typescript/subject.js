export class Subject {
    constructor(data) {
        this.title = data.title;
        this.lessons = data.lessons;
        this.id = `${Math.random().toString(36).substring(3, 11)}`;
    }
}
