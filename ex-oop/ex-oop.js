"use strict";
//  Objects
const message = document.querySelector('.message');

const person1 = {
  name: {
    first: 'Bob',
    last: 'Smith',
    fullName: function () {
      return (this.first + (' ') + this.last)
    }
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    return (this.name.fullName() + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function () {
    alert('Hi! I\'m ' + this.name.fullName() + '.');
  }
}

function Car(name, color, year) {
  this.modelName = name;
  this.color = color;
  this.year = year;

}

function buttonClick() {
  let user = {
    name: "Sam",
    age: 23,
    getName: function () {
      return this.name;
    }
  }
  console.log(user.getName());
  return (user.name);
}

function clearClick() {
  message.style.display = 'none';
  message.innerHTML = null;
}

function buttonClick3() {
  message.style.display = 'block';
  let messageHeader = `<h3> Object person1 has following properties</h3>`;
  message.innerHTML = messageHeader;
  for (let key in person1) {
    let messageText = `${key}: ${person1[key]}`;
    let messageString = document.createElement('p');
    messageString.innerText = messageText;
    message.append(messageString);
  }
  message.append(`${person1.bio()}`);
}


let myDataName = 'height';
let myDataValue = '1.75m';
person1[myDataName] = myDataValue;


// Classes
class Comment {
  constructor(text) {
    this.text = text
    this.votesQty = 0
  }

  upvote() {
    this.votesQty += 1
  }

  static mergeComments(first, second) {
    return `${first} ${second}`
  }
}

const firstComment = new Comment('First comment')
const secondComment = new Comment('second comment')
const thirdComment = new Comment('third comment')

class Person {
  constructor(name, age) {
    this.name = name,
      this.age = age,
      console.log(`Constructor made ${name}, ${age}`)
  }
  toString() {
    return `Person with name ${this.name} and the age of ${this.age}`
  }
}

class User1 extends Person {

  // constructor() {
  // User.name = Person.name + "_user";
  // }

  setRole(role) {
    this.role = role;
  }
  getRole() {
    return this.role;
  }

  toString() {
    return `Person with name ${this.name}, age of ${this.age} and the role of ${this.role}`
  }
}

function buttonClick2() {
  let sam = new Person('Sam', 30);
  let donny = new User('Donny', 60);
  // console.log(sam, donny);
  donny.setRole('admin');
  console.log(sam.toString());
  console.log(donny.toString());
  console.log(donny.getRole());

}

// Пример, как используем объект как шаблон, создаем из него клоны с наследованием
// Создали объект _User, затем, используя его, создаем из него клон vasya  = { ..._User}
//  vasya наследует свойства и методы
const _User = {
  firstName: '',
  lastName: '',
  dob: '',
  mob: '',
  yob: '',

  setName: function (newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  },

  getName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getAge: function () {}

}


const copyUser = _User;
const vasya = { ..._User};

console.dir('objec vasya = ');
console.dir(vasya);
console.log('vasya.getName =', vasya.getName());

_User.setName('UserName UserLastname');
vasya.setName('Vasya Sadomtsev');


console.dir('objec copyUser = ');
console.dir(copyUser);
console.dir('objec _User = ');
console.dir(_User);

/////////////////////////////////////////

// Создаем класс и наследуемся из него
class User {
  constructor(props) {
    this.name = props.name;
    this.dateOfBirth = props.dob;
  }

  firstName = '';
  lastName = '';
  dob = '';
  mob = '';
  yob = '';

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  set dateOfBirth(date) {
    const dateRow = date.split("-");
    this.dob = Number(dateRow[0]);
    this.mob = Number(dateRow[1]);
    this.yob = Number(dateRow[2]);
  }

  get dateOfBirth() {
    return `${this.dob}-${this.mob}-${this.yob}`
  }

  get age() {
    return new Date().getFullYear() - this.yob
  }
}

const masha = new User({
  name: "Masha Doomsky",
    dob: "10-08-2001"
})

const robert = new User({
  name: "Robert Logunov",
  dob: "10-04-2012"
})



console.dir(masha);
console.dir( masha.age);
console.dir(robert);
console.log(robert.name);
console.log(robert.firstName, robert.age);

//////////////