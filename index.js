// STRING METODLARIGA OID MASALALAR

// 1-masala

// let str = 'Assalomu alekum mening ismim Oltinbek!';

// function countA(str) {
//     let counter = 0;
//     for (const element of str) {
//         if (element == 'a' || element == 'A') {
//             counter ++;
//         }
//     }
//     return counter;
// }

// console.log(countA(str));

// 2-masala

// let str = 'Oltinbek';

// function sliceOfWord(str) {
//     return str.slice(-3);
// }

// console.log(sliceOfWord(str));

// 3-masala

// let str = 'assalomu alekum mening ismim oltinbek!';

// function toCapitalize(str) {
//     let strToArray = str.split(' ');
//     let res = strToArray.map(value => {
//         return value[0].toUpperCase() + value.slice(1);
//     })
//     return res.join(' ');
// }

// console.log(toCapitalize(str));

// 4-masala

// let str = 'Assalomu alekum mening ismim Oltinbek!';

// function trimAll(str) {
//     return str.replaceAll(' ', '');
// }

// console.log(trimAll(str));

// 5-masala

// let str = 'Assalomu alekum mening ismim Oltinbek!';

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString(str)); 

// 6-masala

// let str = 'Assalomu alekum mening ismim Oltinbek!';

// function strLength(str) {
//     return str.length;
// }

// console.log(strLength(str));

// 7-masala

// let str = 'Oltinbek! ';

// function repeatStr(str) {
//     return str.repeat(3);
// }

// console.log(repeatStr(str));

// 8-masala

// let str = '1salom2mening3ismim4Oltinbek5'

// function extractNumbers(str) {
//         return str.match(/\d+/g).join('');
// }
// console.log(extractNumbers(str));

// 9-masala

// let str = 'Assalomu alekum mening ismim Oltinbek!';

// function returnFirstWord(str) {
//     let arr = str.split(' ');
//     return arr[0].toString();
// }

// console.log(returnFirstWord(str));

// 10-masala

// let str = 'Salom men js ni bilaman!';

// function incledesJs(str) {
//     return str.includes('js');
// }

// console.log(incledesJs(str));

// MASSIV

// 1)

// function findMax(arr) {
//     return Math.max(...arr);
// }


// console.log(findMax([1, 2, 3, 4, 5])); 

// 2)

// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// // Funksiyani sinash
// console.log(getEvenNumbers([1, 2, 3, 4, 5])); // chiqishi kerak: [2, 4]

// 3)

// function sumArray(arr) {
//     return arr.reduce((acc, num) => acc + num, 0);
// }

// // Funksiyani sinash
// console.log(sumArray([1, 2, 3, 4, 5])); // chiqishi kerak: 15

// 4)

// function doubleArray(arr) {
//     return arr.map(num => num * 2);
// }

// // Funksiyani sinash
// console.log(doubleArray([1, 2, 3, 4, 5])); // chiqishi kerak: [2, 4, 6, 8, 10]

// 5)

// function removeNegativeNumbers(arr) {
//     return arr.filter(num => num >= 0);
// }

// // Funksiyani sinash
// console.log(removeNegativeNumbers([1, -2, 3, -4, 5])); // chiqishi kerak: [1, 3, 5]

// 6)

// function getUniqueElements(arr) {
//     return [...new Set(arr)];
// }

// // Funksiyani sinash
// console.log(getUniqueElements([1, 2, 2, 3, 4, 4, 5])); // chiqishi kerak: [1, 2, 3, 4, 5]

// 7)

// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// // Funksiyani sinash
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // chiqishi kerak: [1, 2, 3, 4, 5, 6]

// 8)

// function reverseArray(arr) {
//     return arr.slice().reverse();
// }

// // Funksiyani sinash
// console.log(reverseArray([1, 2, 3, 4, 5])); // chiqishi kerak: [5, 4, 3, 2, 1]

// 9)


// function getOddIndexedElements(arr) {
//     return arr.filter((_, index) => index % 2 !== 0);
// }

// // Funksiyani sinash
// console.log(getOddIndexedElements([1, 2, 3, 4, 5])); // chiqishi kerak: [2, 4]

// 10)

// function averageArray(arr) {
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length;
// }

// // Funksiyani sinash
// console.log(averageArray([1, 2, 3, 4, 5])); // chiqishi kerak: 3

// OBJECT AND ARRAYS

// 1)

// function getOldestPersonName(people) {
//     let oldestPerson = people[0];
//     for (let person of people) {
//         if (person.age > oldestPerson.age) {
//             oldestPerson = person;
//         }
//     }
//     return oldestPerson.name;
// }

// // Funksiyani sinash
// const people1 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getOldestPersonName(people1)); // chiqishi kerak: "Vali"

// 2)

// function getPeopleAboveAge(people, age) {
//     return people.filter(person => person.age > age);
// }

// // Funksiyani sinash
// const people2 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getPeopleAboveAge(people2, 26)); // chiqishi kerak: [{ name: "Vali", age: 30 }, { name: "Hasan", age: 28 }]

// 3)

// function getNames(people) {
//     return people.map(person => person.name);
// }

// // Funksiyani sinash
// const people3 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getNames(people3)); // chiqishi kerak: ["Ali", "Vali", "Hasan"]

// 4)

// function getTotalAge(people) {
//     return people.reduce((total, person) => total + person.age, 0);
// }

// // Funksiyani sinash
// const people4 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getTotalAge(people4)); // chiqishi kerak: 83

// 5)

// function getPersonByName(people, name) {
//     return people.find(person => person.name === name);
// }

// // Funksiyani sinash
// const people5 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getPersonByName(people5, "Vali")); // chiqishi kerak: { name: "Vali", age: 30 }

// 6)

// function getAverageAge(people) {
//     const totalAge = people.reduce((total, person) => total + person.age, 0);
//     return totalAge / people.length;
// }

// // Funksiyani sinash
// const people6 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getAverageAge(people6)); // chiqishi kerak: 27.67

// 7)

// function getFemales(people) {
//     return people.filter(person => person.gender === "female");
// }

// // Funksiyani sinash
// const people7 = [
//     { name: "Ali", age: 25, gender: "male" },
//     { name: "Vali", age: 30, gender: "male" },
//     { name: "Hasan", age: 28, gender: "male" },
//     { name: "Salima", age: 22, gender: "female" }
// ];
// console.log(getFemales(people7)); // chiqishi kerak: [{ name: "Salima", age: 22, gender: "female" }]

// 8)

// function incrementAges(people) {
//     return people.map(person => ({ ...person, age: person.age + 1 }));
// }

// // Funksiyani sinash
// const people8 = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(incrementAges(people8)); // chiqishi kerak: [{ name: "Ali", age: 26 }, { name: "Vali", age: 31 }, { name: "Hasan", age: 29 }]