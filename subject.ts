export class Subject {
  title: string;
  lessons: number;
  id: string;

  constructor(data: { title: string; lessons: number; description?: string }) {
    this.title = data.title;
    this.lessons = data.lessons;
    this.id = `${Math.random().toString(36).substring(3, 11)}`;
  }
}
