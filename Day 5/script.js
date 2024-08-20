// var name = "Student Name";
// var name = "Student Name 2";
// console.log(name);

// let department = "CS";
// department = "CS-Section I"
// console.log("Department:", department);

// const year = 2024;
// year = 2025;
// console.log("🚀 ~ year:", year)      --->   Shortcut for displaying a console msg: Ctrl+Shift+L
// console.log("Year: ", year);

// const year = 2024;
// const year = 2025;
// console.log("Year: ", year);

// let yearNumber = 2024;                  ---> Camel Case (Highly Recommended by industries)
// let DepartmentName = "CS";              ---> Pascal Case
// let department_section = "I";           ---> Snake Case (Least used in industries)

// let $name = "car";                      ---> Case Sensitive
// console.log("🚀 ~ $name:", $name)

// const student = {}                      ---> student is a variable whose datatype is object
// const student = {
//     name : "Gungun Varshney",
//     dob : "07-04-2005",
//     college : "GLA University"
// }

// console.log("🚀 ~ student:", student)

// const updateKey = "dob";

// const collegeName = "College Name";
// const dob = "07-04-2005";

// const student = {
//     name : "sampleName1",
//     collegeName,
//     dob,
//     ENG: 12345,
//     MBBS: 6789,
//     currentAyear: 2024,
//     english:{
//         totalMarks: 81,
//         attendance: 91,
//     }
// };

// dobAlise = "dob";
// const collegeAName = "collegeName";
// const currentAcademicYear = student["collegeName"]

// const variable1 = student?.[collegeAName];       //---> student?.["collegeName"]  ---> O/P ---> "College Name"
// console.log("🚀 ~ variable1:", variable1)       //---> O/P ---> 🚀 ~ variable1: College Name
// const variable2 = student?.["currentAyear"];
// console.log("🚀 ~ variable2:", variable2)       //---> O/P ---> 🚀 ~ variable2: 2024
// const variable3 = student?.MBBS;
// console.log("🚀 ~ variable3:", variable3)       //---> O/P ---> 🚀 ~ variable3: 6789
// const variable4 = student.ENG;
// console.log("🚀 ~ variable4:", variable4)       //---> O/P ---> 🚀 ~ variable4: 12345
// const variable5 = student["dob"];
// console.log("🚀 ~ variable5:", variable5)       //---> O/P ---> 🚀 ~ variable5: 07-04-2005
// const variable6 = student?.[dobAlise];
// console.log("🚀 ~ variable6:", variable6)       //---> O/P ---> 🚀 ~ variable6: 07-04-2005

// const dob = "10-10-2000";
// const student = {
//     name: 'Student Name 1',
//     collegeName: 'Sample College Name',
//     dob,
//     ENG: 12345,
//     MBBS: 6789,
//     currentAyear: 2024,
//     english: {
//         totalMarks: 81,
//         attendance: 91
//     },
// };

// const {english} = student       ---> Destructuring, Will read about it in React

// const output = `This is ${student.name}, and i am studying in ${student.collegeName} and my english mark is ${student.english.totalMarks}`;
// console.log("🚀 ~ output:", output);

// const dob = "10-10-2000";
// const students = [
//     {
//         name: 'Student Name 1',
//         collegeName: 'Sample College Name',
//         dob: "10-10-2000",
//         currentAyear: 2024,
//         order: 1
//     },
//     {
//         name: 'Student Name 2',
//         collegeName: 'Sample College Name',
//         dob: "10-10-2000",
//         currentAyear: 2024,
//         order: 2
//     }
// ];

// const student1 = students[0];
// console.log("🚀 ~ student1:", student1);

// const student2 = students[1];
// console.log("🚀 ~ student1:", student2);

// students[0].order = students[0].order + 1;
// students[1].order = students[1].order + 1;
// console.log("🚀 ~ students:", students);

// students[0].order = students[0].order * 5;
// students[1].order = students[1].order * 5;
// console.log("🚀 ~ students:", students);

// let students = [
//     {
//     order:1,
//     },
//     {
//     order:2,
//     },
//     {
//     order:3,
//     },
//     {
//     order:4,
//     },
//     {
//     order:5,
//     }
// ]

// students = students.map((item ,index)=>{
//     const updatedValue =item.order*5;
//     item.order = updatedValue;
//     return item;
// })

// const student1 = students[0]
// console.log(student1)

// map((Value,idx)=>{
//     return Value
// })

// students.map((value, index)=>{
// });
// console.log("students.map=students:" ,students)

// students[0].order=students[0].order*5;
// console.log(students)

// numbers = [5 ,10,15,20,25];
// numbers.forEach((item,index)=>{
//     numbers[index]=item - 5;
// });
// console.log(numbers)