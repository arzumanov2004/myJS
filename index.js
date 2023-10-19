// sual-1


// var a = 7;
// var b = 27;

// if (a > b) {
//   console.log("a b-dən böyükdür");
// } else if (a === b) {
//   console.log("beraber");
// } else {
//   console.log("a b-dən kiçikdir");
// }




// sual-2


// let students=[

//     {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
//     {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
//     {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
//     {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
//     {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
//     {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
//     {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
//     {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
//     {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
//     ];
//     let myArray = [];

// for (let i = 0; i < students.length; i++) {
//   if (i % 2 === 0) {
//     myArray.push(students[i]);
//   }
// }

// console.log(myArray);



// sual-3


// let students=[

//     {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
//     {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
//     {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
//     {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
//     {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
//     {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
//     {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
//     {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
//     {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
//     ];
//     for (let i = 0; i < students.length; i++){
//         if (students[i].id % 2 === 1){
//             console.log(students[i].name);
//         }
//     }



// sual-4


// let students=[

//     {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
//     {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
//     {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
//     {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
//     {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
//     {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
//     {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
//     {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
//     {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
//     ];
//     let myAge = [];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].age > 20) {
//     myAge.push(students[i]);
//   }
// }

// console.log(myAge);



// sual-5




// let students=[

//     {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
//     {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
//     {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
//     {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
//     {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
//     {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
//     {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
//     {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
//     {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
//     ];
//     let myGrade = [] ;
//      for (let i = 0; i < students.length; i++) {
//         if (students[i].id % 2 === 0 && students[i].grade > 90){
//             myGrade.push(students[i]);
//         }
//      }
//      console.log(myGrade);



// sual-6



// let students=[

//     {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
//     {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
//     {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
//     {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
//     {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
//     {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
//     {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
//     {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
//     {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
//     ];
//     let Grade = [];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].grade === 95 || students[i].grade === 100) {
//     Grade.push(students[i]);
//   }
// }

// console.log(Grade);