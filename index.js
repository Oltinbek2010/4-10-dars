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

let str = 'Salom men js ni bilaman!';

function incledesJs(str) {
    return str.includes('js');
}

console.log(incledesJs(str));
