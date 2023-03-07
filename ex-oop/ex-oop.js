//  Objects
const person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function () {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
}

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;


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