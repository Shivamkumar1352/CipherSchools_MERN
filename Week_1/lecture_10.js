// let person = {
//     firstName: "Aditya",
//     lastname: "Soni",
//     getFullName: function () {
//         return `The name of the person is ${person.firstName} ${person.lastname}`;
//     },

//     phoneNumber: {
//         mobile: "12345",
//         landline: "6789",
//     },
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);

// function person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1 = new person("Aditya", "Soni");
// let person2 = new person("Rahul", "Soni");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

// const coder = {
//     isStudying: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     },
// };

// const me = Object.create(coder);
// me.name = "Aditya Soni";

// me.isStudying = true;

// me.printIntroduction();

// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails() {
//         return `The name of the vehicle is ${this.name}`;
//     }
// }

// let v1 = new Vehicle("Creta", "Hyundai", "2500CC");
// let v2 = new Vehicle("QS", "Audi", "3000CC");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());

// function Vehicle(name, maker, engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }

// Vehicle.prototype.getDetails = function () {
//     return `The name of the vehicle is ${this.name}`;
// };

// let v1 = new Vehicle("Creta", "Hyundai", "2500CC");
// let v2 = new Vehicle("QS", "Audi", "3000CC");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());

// class Person {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }

//     addAddress(newAddress) {
//         this.address = newAddress;
//     }

//     getDetails() {
//         console.log(`Name is: ${this.name}, and address is: ${this.address}`);
//     }
// }

// let person1 = new Person("Aditya", 21);
// person1.addAddress("Allahabad");
// person1.getDetails();

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;

//         let getDetails_NoAccess = function () {
//             return `First name is: ${this.firstname} and last name is: ${this.lastname}`;
//         };

//         this.getDetails_Access = function () {
//             return `First name is: ${this.firstname} and last name is: ${this.lastname}`;
//         }
//     }
// }

// let person1 = new Person("Aditya", "Soni");

// console.log(person1.firstname);
// console.log(person1.getDetails_NoAccess());
// console.log(person1.getDetails_Access());

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }


    getDetails = function () {
        return `First name is: ${this.firstname} and last name is: ${this.lastname}`;
    };
}

class Student extends Person {
    constructor(firstname, lastname, rollno) {
        super(firstname, lastname);
        this.rollno = rollno;
    }

    getDetails = function () {
        return `First name is: ${this.firstname} and last name is: ${this.lastname} and the roll number is: ${this.rollno}`;
    };
}

let person1 = new Person("Aditya", "Soni");

console.log(person1.firstname);
console.log(person1.getDetails());

let student1 = new Student("Anurag", "Mishra", 23);
console.log(student1.getDetails());