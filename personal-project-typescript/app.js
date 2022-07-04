"use strict";
exports.__esModule = true;
var subject_js_1 = require("./subject.js");
var lms_js_1 = require("./lms.js");
var teachers_js_1 = require("./teachers.js");
var pupils_js_1 = require("./pupils.js");
var groups_js_1 = require("./groups.js");
var gradebooks_js_1 = require("./gradebooks.js");
function main() {
    // Subject 🔴
    var history = new subject_js_1.Subject({
        title: "History",
        lessons: 24
    });
    var math = new subject_js_1.Subject({
        title: "Math",
        lessons: 30
    });
    // console.log("history ID", history.id, "math ID", math.id);
    // LMS 🔴
    var lms = new lms_js_1.LMS();
    lms.add(history);
    lms.add(math);
    // lms.remove(history);
    // console.log(lms.verify(math), lms.verify(history));
    // console.log(lms.readAll());
    // Teachers 🔴
    var teachers = new teachers_js_1.Teachers();
    var teacherTamta = {
        name: {
            first: "Tamta",
            last: "Jojua"
        },
        dateOfBirth: "01-01-2000",
        emails: [
            {
                email: "tamta@gmail.com",
                primary: true
            },
        ],
        phones: [
            {
                phone: "+995555111111",
                primary: true
            },
        ],
        sex: "male",
        subjects: [
            {
                subject: "history"
            },
        ]
    };
    var teacherNinka = {
        name: {
            first: "Ninka ",
            last: "Benidze"
        },
        dateOfBirth: "01-01-1999",
        emails: [
            {
                email: "ninka@gmail.com",
                primary: true
            },
        ],
        phones: [
            {
                phone: "+995555888888",
                primary: true
            },
        ],
        sex: "male",
        subjects: [
            {
                subject: "math"
            },
        ]
    };
    var newTeacher = {
        name: {
            first: "123",
            last: "123"
        },
        dateOfBirth: "01-01-2000",
        emails: [
            {
                email: "tamta@mail.ru",
                primary: true
            },
        ],
        phones: [
            {
                phone: "+995555223344",
                primary: true
            },
        ],
        sex: "female",
        subjects: [
            {
                subject: "history"
            },
        ]
    };
    var teacherId = teachers.add(teacherTamta);
    //   const teacherId2 = teachers.add(teacherNinka);
    //   console.log("teacher ID 1", teacherId, "teacher ID 2", teacherId2);
    //   console.log("before ", teachers.read(teacherId));
    //   console.log("update", teachers.update(teacherId, newTeacher));
    //   console.log("after ", teachers.read(teacherId));
    // pupils 🔴
    var pupils = new pupils_js_1.Pupils();
    var pupilAnano = {
        name: {
            first: "Anano",
            last: "Tskhadadze"
        },
        dateOfBirth: "01-01-2000",
        phones: [
            {
                phone: "+995555112233",
                primary: true
            },
        ],
        sex: "female"
    };
    var newPupil = {
        name: {
            first: "Robert",
            last: "Oganezov"
        },
        dateOfBirth: "01-01-2000",
        phones: [
            {
                phone: "+995555555555",
                primary: true
            },
        ],
        sex: "male"
    };
    var pupil123 = {
        name: {
            first: "123",
            last: "123"
        },
        dateOfBirth: "01-01-2000",
        phones: [
            {
                phone: "+995555118865",
                primary: true
            },
        ],
        sex: "male"
    };
    var pupil = pupils.add(pupilAnano);
    // console.log(pupil);
    var pupil2 = pupils.add(pupil123);
    // console.log("pupil id", pupil.id);
    // console.log("before", pupils.read(pupil.id));
    // const updated = pupils.update(pupil.id, newPupil);
    // console.log(updated);
    // console.log("after", pupils.read(pupil.id));
    // console.log(pupils.remove(pupil.id));
    // // // Groups
    var room = 236;
    // const room1 = 240;
    var groups = new groups_js_1.Groups();
    var groupId = groups.add(room);
    // const groupId1 = groups.add(room1);
    console.log("group ID", groupId);
    groups.addPupil(groupId, pupil);
    // groups.addPupil(groupId, updated);
    groups.addPupil(groupId, pupil2);
    console.log("before ", groups.read(groupId));
    // groups.removePupil(groupId, pupil.id);
    console.log(groups);
    groups.update(groupId, {
        room: 237
    });
    console.log("after", groups.read(groupId));
    console.log("readall", groups.readAll());
    // gradebook
    var pupilId = pupil.id;
    var record = {
        pupilId: pupilId,
        teacherId: teacherId,
        subjectId: history.id,
        lesson: 1,
        mark: 9
    };
    // const record2 = {
    //   pupilId: pupilId,
    //   teacherId: teacherId,
    //   subjectId: math.id,
    //   lesson: 2,
    //   mark: 10,
    // };
    var gradebooks = new gradebooks_js_1.Gradebooks(groups, teachers, lms);
    var gradebookId = gradebooks.add(groupId);
    console.log("gradebook id", gradebookId);
    // console.log(gradebooks.clear());
    gradebooks.addRecord(gradebookId, record);
    // gradebooks.addRecord(gradebookId, record2);
    console.log(gradebooks.read(gradebookId, pupilId));
    //   console.log(gradebooks.readAll(gradebookId));
}
main();
