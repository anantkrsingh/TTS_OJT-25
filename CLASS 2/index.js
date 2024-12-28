let a = {
  name: "Anant",
  age: 1,
  fname: "assssskkkkk",
  pno: 1234567890,
  address: {
    landmark: "XYZZZ",
    streetAddress: "MNYYYYPPPP",
    pin: 800001,
  },
};

console.log(a);
console.log(a.pno);
console.log(a["pno"]);

console.log(a.address.pin);
console.log(a["address"]["pin"]);

let students = [
  "Anant Kumar",
  "Ayush Sharma",
  "Abhishek Singh",
  "Ridhima Singh",
];

console.log(students);

students.push("Shree");

console.log(students);

console.log(students.length);

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

for (student in students) {
  console.log(students[student]);
}

for (student of students) {
  console.log(student);
}

const newStudents = students.map(function (value, index) {
    console.log(value)

    return value.split(" ")[0]
});
console.log(newStudents)

let manishaTeacher = { name: "Manisha", age: 100 };

let teachers = [
  { name: "Ak😂", age: 28 },
  { name: "VK😂", age: 10 },
  { name: "AA 😂", age: 30 },
  { name: "AB 😂", age: 21 },
];

teachers.push(manishaTeacher);

const filteredTeachers = teachers.find((value,index)=> value.name === "Manisha")

console.log(filteredTeachers.age)



