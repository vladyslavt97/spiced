// const person = {
//     firstName: 'Vlad',
//     lastName: 'Tsurkanenko',
//     age: 25,
//     hobbies: ['programming', 'biking'],
//     '2Property': 'random value',
//     adress: {
//         street: 'Friedrichstr.',
//         number: 122,
//         city: 'Berlin'
//     }
// };

// console.log('Hi! My address is ' + person.adress.street + " "
// + person.adress.number + ", " + person.adress.city);


// // 08.11.12
// //Functions and functions instances

// // regular
// function sum (a,b){
//     return a+b;
// }

// //anonymous

// const sum = (a,b) => {
//     return a+b;
// }


// //or different syntax

// const sum = function (a,b){
//     return a+b;
// }

// //anonymous function as a callback function
// setTimeout(() => {
//     console.log('delay log');
// },1000);


// const log = () => {
//     console.log('delay log');
// }

// setTimeout(log, 1000);


// //constructor creates an instance/object of a function and its properties

// function CustomLogger(){
//     this.prefix = '2022-11-08'
//     this.log = (message) => {
//         console.log(this.prefix, message);
//     };
// }

// const logger = new CustomLogger();
// logger.log('Hi there'); //'2022-11-08 Hi there';



//
function largest(xs){
    let xsNew = [];
    for (let i = 0; i <= xs.length; i++);//loop over the whole array
    let highestNum = Math.max(xs);
    console.log(highestNum);
    //do some checks and assignements for the current number and the number saved in the variables
}

//return a new array of the highest number 6,7
largest([7,6,5,4,3,2,1]);