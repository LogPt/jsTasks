//  Пример простой замыкания
function user(name) {
  return function printName() {
    console.log('user', name)
  };
};

let userPeter = user("Peter");
let userNelly = user("Nelly");
userPeter();
userNelly();

//  Пример замыкания для формирования адреса

function makeDomain(domain) {
  return function (sitename) {
    return `https://${sitename}.${domain}`
  }
}

const domainRu = makeDomain('ru');
const domainCom = makeDomain('com');
const domainInfo = makeDomain('info');

console.log(domainRu('yandex'));
console.log(domainCom('nyt'));
console.log(domainInfo('wiki'));


// Пример замыкания с объектами и их приватынми свойствами
function User(defaultName = "") {
  let _name = defaultName;
  return {
    getName() {
      return _name;
    },
    setName(n) {
      _name = n;
    }
  };
};

const user1 = User('Peter Logunov');
console.log('объект user1', user1);
console.log('имя объекта user1', user1.getName());
user1.setName('Robert Logunov');
console.log('имя объекта user1 изменили', user1.getName());

// Пример замыкания с классами и их приватынми свойствами
function Car(defaultName = "") {
  let _name = defaultName;
  return class CarClass {
    get name() {
      return _name;
    };
    set name(n) {
      _name = n;
    }
  };
};

const car = new(Car('Nissan'))();
console.log('класс car', car);
console.log('имя класса car', car.name);
car.name = 'Ford';
console.log('имя класса car изменили', car.name);

// Задачка с собеса

function createCounter() {
  let count = 0;

  function increment() {
    count++
  };

  function decrement() {
    counter--
  };

  return {
    count,
    increment,
    decrement,
    getCount() {
      return count;
    }
  };
};

const result = createCounter();
console.log(result.count);
console.log(result.getCount());
result.increment();
result.increment();
result.increment();
result.increment();
console.log(result.count);
console.log(result.getCount());