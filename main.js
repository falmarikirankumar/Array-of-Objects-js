// console.log("hello");
let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']"
let arr = [];
for (let i = 0; i < studentRecords.length; i++) {
  arr.push(studentRecords[i].name.toUpperCase());
}
console.log(arr);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

above = [];
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks >= 50) {
    above.push(studentRecords[i]);
  }
}
console.log(above);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
aboveId = [];
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks >= 50 && studentRecords[i].id > 120) {
    aboveId.push(studentRecords[i]);
  }
}
console.log(aboveId);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let sum = 0;
for (let i = 0; i < studentRecords.length; i++) {
  sum += studentRecords[i].marks;
}
console.log(sum);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let names = [];
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    names.push(studentRecords[i].name.toUpperCase());
  }
}
console.log(names);

//  Question 6: This time we are required to print the sum of marks of the students with id > 120.
sum2 = 0;
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120) {
    sum2 += studentRecords[i].marks;
  }
}
console.log(sum2);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
const grace = 15;
let total = 0;
for (let i = 0; i < studentRecords.length; i++) {
  let mark = 0;
  if (studentRecords[i].marks < 50) {
    mark = studentRecords[i].marks;
    mark += grace;
    if (mark > 50) {
      total += mark;
    }
  }
}
console.log(total);

// console.log(typeof null);
// console.log(typeof undefined);
// arr = [];
// console.log(typeof arr);
// console.log(null === undefined);
// console.log(null == undefined);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
let StuArray = [];
function Student(name, className, rollNo) {
  (this.StuName = name), (this.stuClass = className), (this.StuRollNo = rollNo);
}
let Student1 = new Student("EA17", "Sept", 1);
let Student2 = new Student("EA16", "Aug", 2);
let Student3 = new Student("EA18", "Oct", 3);
let Student4 = new Student("EA19", "Nov", 4);
let Student5 = new Student("EA20", "Dec", 5);
let Student6 = new Student("EA21", "Jan", 6);
StuArray.push(Student1);
StuArray.push(Student2);
StuArray.push(Student3);
StuArray.push(Student4);
StuArray.push(Student5);
StuArray.push(Student6);
console.log(StuArray);
