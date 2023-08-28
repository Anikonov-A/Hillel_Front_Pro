// const company1 = {
//     name: 'Boss',
//     employees: [
//         {
//             name: 'VP of R&D',
//             employees: [
//                 {
//                     name: 'Team Lead',
//                     employees: [
//                         {name: 'Dev1'},
//                         {name: 'Dev2'},
//                         {name: 'Dev3'},
//                     ]
//                 },
//
//             ]
//         },
//         {
//             name: 'VP of Product',
//             employees: [
//                 {
//                     name: 'Product Owner'
//                 },
//                 {
//                     name: 'UI/UX Designer'
//                 }
//             ]
//         }
//     ]
// }
//
// function deepClone(person) {
//     let result = {};
//     if (person.employees) {
//         result = {
//             name: person.name,
//             employees:[]
//         }
//         for (let i = 0; i< person.employees.length;i++){
//             result.employees.push(deepClone(person.employees))
//         }
//     } else {
//         result = Object.assign({},person)
//     }
//     return result;
// }
//
// const company2 = deepClone(company1)
// console.log(company2)

// const user = {
//     firstName:'Jack',
//     showName: function(){
//         console.log(this.firstName);
//     }
// }
// const user2={
//     firstName: 'Bill',
//     // showName:user.showName
// }
// user.showName()
// // user2.showName()
// user.showName.apply(user2)

// let user = prompt(`Who are you?`)
//
// let operationWithUserValue =user=>{
//     if (user==='Admin'){
//         let password=prompt(`enter your password`)
//         if (password==='owner'){
//             alert(`Greetings my lord`);
//         }else if(password===null||password===''){
//             alert(`canceled`)
//         }else{
//             alert(`wrong pswd`)
//         }
//     }else if(user===null||user===""){
//         alert(`Canceled`)
//     }else{
//         alert(`I don't know you`)
//     }
//
// }
// operationWithUserValue(user);
//
