import { Subject } from "./subject.mjs";

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
}

main();
