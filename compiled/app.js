"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subject_js_1 = require("./subject.js");
var lms_js_1 = require("./lms.js");
var teachers_js_1 = require("./teachers.js");
function main() {
    // Subject 🔴
    var history = new subject_js_1.Subject({
        title: "History",
        lessons: 24,
    });
    var math = new subject_js_1.Subject({
        title: "Math",
        lessons: 30,
    });
    // console.log("history ID", history.id, "math ID", math.id);
    // LMS 🔴
    var lms = new lms_js_1.LMS();
    lms.add(history);
    lms.add(math);
    lms.remove(history);
    // console.log(lms.verify(math), lms.verify(history));
    // console.log(lms.readAll());
    // Teachers 🔴
    var teachers = new teachers_js_1.Teachers();
    var teacherTamta = {
        name: {
            first: "Tamta",
            last: "Jojua",
        },
        dateOfBirth: "01-01-2000",
        emails: [
            {
                email: "tamta@gmail.com",
                primary: true,
            },
        ],
        phones: [
            {
                phone: "+995555111111",
                primary: true,
            },
        ],
        sex: "male",
        subjects: [
            {
                subject: "history",
            },
        ],
        // description: 123,
    };
    var teacherNinka = {
        name: {
            first: "Ninka ",
            last: "Benidze",
        },
        dateOfBirth: "01-01-1999",
        emails: [
            {
                email: "ninka@gmail.com",
                primary: true,
            },
        ],
        phones: [
            {
                phone: "+995555888888",
                primary: true,
            },
        ],
        sex: "male",
        subjects: [
            {
                subject: "math",
            },
        ],
        // description: 123,
    };
    var newTeacher = {
        name: {
            first: "123",
            last: "123",
        },
        dateOfBirth: "01-01-2000",
        emails: [
            {
                email: "tamta@mail.ru",
                primary: true,
            },
        ],
        phones: [
            {
                phone: "+995555223344",
                primary: true,
            },
        ],
        sex: "female",
        subjects: [
            {
                subject: "history",
            },
        ],
        // description: 123,
    };
    //   const teacherId = teachers.add(teacherTamta);
    //   const teacherId2 = teachers.add(teacherNinka);
    //   console.log("teacher ID 1", teacherId, "teacher ID 2", teacherId2);
    //   console.log("before ", teachers.read(teacherId));
    //   console.log("update", teachers.update(teacherId, newTeacher));
    //   console.log("after ", teachers.read(teacherId));
}
main();
