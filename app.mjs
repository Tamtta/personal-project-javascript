import { Subject } from "./subject.mjs";
import { LMS } from "./lms.mjs";

function main() {
  // Subject
  const history = new Subject({
    title: "History",
    lessons: 24,
  });

  const math = new Subject({
    title: "Mathematics",
    lessons: 30,
  });

  console.log(history.id, math.id);

  // LMS
  const lms = new LMS();
  lms.add(history);
  lms.add(math);
  // lms.remove(history);
  console.log(lms.verify(math), lms.verify(history));
  console.log(lms.readAll());
}

main();
