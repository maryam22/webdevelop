



// let Users = [
//     {
//         id: 1,
//         fullname: "Albert Doe",
//         email: 'johndoe@johndoe.com',
//         phone: '+32 854684584',
//         username: 'johnny',
//         password: 'xvortfLwCvHV'
//     },
//     {
//         id: 2,
//         fullname: "Maxime Doe",
//         email: 'johndoe@johndoe.com',
//         phone: '+32 854684584',
//         username: 'johnny',
//         password: 'Wsc1uj01WYBi'
//     },
//     {
//         id: 3,
//         fullname: "Carlos Doe",
//         email: 'johndoe@johndoe.com',
//         phone: '+32 854684584',
//         username: 'johnny',
//         password: '6amLWbhZr2Ei'
//     },
//     {
//         id: 4,
//         fullname: "Monique Doe",
//         email: 'johndoe@johndoe.com',
//         phone: '+32 854684584',
//         username: 'johnny',
//         password: '17ZmYMAVzZzI'
//     },
//     {
//         id: 5,
//         fullname: "Donald Doe",
//         email: 'johndoe@johndoe.com',
//         phone: '+32 854684584',
//         username: 'johnny',
//         password: 'PaqmKoob3Hkc'
//     },

//     {
//         id: 6,
//         fullname: "Zebra Doe",
//         email: 'johndoe@johndoe.com',
//         phone: '+32 854684584',
//         username: 'johnny',
//         password: 'UCemNwEeMmIw'
//     }


// ]

// /*
// add 5 Users 
// Use only array methods and no regular loops
// */

// // function addUserOld(fullname, email, phone, username, password) {
// //     // params: id,fullname, email, phone, username,password

// //     const user = {
// //         id: User.length + 1,
// //         fullname: fullname,
// //         email: email,
// //         phone: phone,
// //         username: username,
// //         password: password
// //     };
// //     User.push(user)
// // }

// function addUser(user) {
//     user.id = Users.length+1;
//     Users.push(user);
// }



// let user1 = {
//     fullname: " mary",
//     email: 'mary@be.com',
//     phone: '+32 854684584',
//     username: 'mary',
//     password: 'hhhfdd222'
// };

// console.log(Users)
// addUser(user1);
// console.log(Users)

// // Run code here in the context of Chapter 6

// class Temperature {
//     constructor(celsius) {
//       this.celsius = celsius;
//     }
//     get fahrenheit() {
//       return this.celsius * 1.8 + 32;
//     }
//     set fahrenheit(value) {
//       this.celsius = (value - 32) / 1.8;
//     }
  
//     static fromFahrenheit(value) {
//       return new Temperature((value - 32) / 1.8);
//     }
//   }
  
//   let temp = new Temperature(22);
//   console.log(temp.fahrenheit);
//   temp.fahrenheit = 86;




// var testModule = (function () {
 
//   var counter = 1;
 
//   return {
 
//     incrementCounter: function () {
//       return counter++;
//     },
 
//     resetCounter: function () {
//       console.log( "counter value prior to reset: " + counter );
//       counter = 0;
//     }
//   };
 
// })();




// // create an object with a property and value
// const myObject = {
//   prop1: 'value1'
// }

// // get the default descriptors for the prop1 property in myObject.
// console.log(Object.getOwnPropertyDescriptor(myObject,'prop1'));

// /** the above console logs:

// [object Object] {
//   configurable: true,
//   enumerable: true,
//   value: "value1",
//   writable: true
// }

// Note that get and set are undefined by default **/

// // add a property, 'value2' with descriptors to myObject using Object.defineProperty()
// Object.defineProperty(myObject, 'prop2', {
//   value: 'value2',
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// // get the descriptors for the prop2 property.


// // add multiple properties ('prop3' & 'prop4') with 
// // descriptors to myObject using Object.defineProperties()
// Object.defineProperties(myObject, {
//   prop3: {
//   enumerable: true,
//   configurable: true,
//   value: 'value3'
//   },
//   prop4: {
//   enumerable: true,
//   configurable: true,
//   // Note that value and write properties are not added when using the properties set and get
//   set: (newValue) => {
//     console.log('you set the property prop4 to : ' + newValue);
//     },
//   get: () => {
//     console.log('you accessed the property prop4');
//     return 'prop4'; // the get returns the value for prop4 unlike using, value: 'value4'
//     }
//   }
// });

// // get the descriptors for the prop3 and prop4 properties

// console.log(Object.getOwnPropertyDescriptor(myObject,'prop3'));

// console.log(Object.getOwnPropertyDescriptor(myObject,'prop4'));


// // Note that prop4's value is based on get and set, not value
// console.log(myObject.prop4);
// // get the default descriptors for the prop1 property in myObject.
// console.log(Object.getOwnPropertyDescriptor(myObject,'prop2'));
// // Usage:
 


// // Increment our counter
// testModule.incrementCounter();
 
// // Check the counter value and reset
// // Outputs: counter value prior to reset: 1
// testModule.resetCounter();
 

// /*
// function getUser(arr){
// // get all users

//     let allUsers = arr
//         .map((x) =>
//             `${x.id} |  ${x.fullname} | ${x.email} | ${x.phone} | ${x.username} | ${x.password}`);
//         console.log(allUsers)
//         }




// function getSortedUsersByName(arr){
//     // get AllUser sorted list by names
//     let sortedUsers = arr
//         .sort((a,b) => a.fullname > b.fullname ? 1: -1)
//         .map((x) =>`${x.id} |   ${x.fullname}   |   ${x.email}  |   ${x.phone}  |   ${x.username}   |   ${x.password}`)

//         console.log(sortedUsers)
// }



// function getUserByName(arr,name){
//     // You should get single user object by name
//    return arr.find(arr => arr.fullname == name)

// }


// function deleteUserById(arr,id){
//     let removeIndex = arr.map((item) => item.id).indexOf(id);
//     arr.splice(removeIndex, 1);
// }*/

// // User.splice(index,1);
// // getUser(User);

let liAll = document.querySelectorAll('li')
console.log(liAll)

liAll.forEach(li => {

console.log(li)

})



