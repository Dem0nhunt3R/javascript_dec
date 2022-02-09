// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(5, 'vasia', 'utkin', 'dotcom', 12345);

console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const users = [];

for (let i = 10; i > 0; i--) {
    users.push(new User(i, 'vasia ' + i, 'pupkin ' + i, i + 'dotcom', i + 100));
}
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filter = users.filter(user => user.id % 2 === 0);

console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);

console.log(users)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [];

for (let i = 10; i > 0; i--) {
    clients.push(new Client(i, i, i, i, i, [i]));
}

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients[4].order = [1, 2, 3, 4];
clients[6].order = [1, 2, 3];
clients[9].order = [1, 2];

clients.sort((a, b) => a.order.length - b.order.length);
console.log(clients);