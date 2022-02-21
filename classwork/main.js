// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarCreator(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log('We are driving with ' + maxSpeed + 'km per hour');
    }

    this.info = function () {
        console.log(`model - ${this.model}. Manufacturer - ${this.manufacturer}. Year - ${this.year}. Max speed` +
            `- ${this.maxSpeed}. Volume - ${this.volume}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;
    }

    this.changeYear = function (newYear) {
        this.year = newYear;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}


const car = new CarCreator('volga', 'USSR', 1980, 200, 2.0);

car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2101);
car.addDriver({name: 'vasiliy'});
console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log('We are driving with ' + this.maxSpeed + 'km per hour')
    }

    info() {
        console.log(`model - ${this.model}. Manufacturer - ${this.manufacturer}. Year - ${this.year}. Max speed` +
            `- ${this.maxSpeed}. Volume - ${this.volume}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const car2 = new Car('Subaru', 'Japan', 2010, 300, 2.5);


car2.drive();
car2.info();
car2.increaseMaxSpeed(50);
car2.changeYear(2222);
car2.addDriver({name: 'valera'});
console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Prince {
    constructor(name, age, founeddShoe) {
        this.name = name;
        this.age = age;
        this.findedShoe = founeddShoe;
    }
}

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

const prince = new Prince('prince', 'age', 37);
const cinderellas = [];

for (let i = 1; i <= 10; i++) {
    cinderellas.push(new Cinderella('cinderella #' + i, 20 + i, 30 + i));
}

for (const cinderella of cinderellas) {
    if (cinderella.size === prince.findedShoe) {
        console.log('Look!!!!!!THIS IS A FISH FROM MY DREAMS!!! => ' + cinderella.name);
    }
}

const find = cinderellas.find(cinderella => cinderella.size === prince.findedShoe);
console.log(find);