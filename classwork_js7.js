//ОБЪЕКТЫ

let arr = [123, 'string', [1, 2, 3], {name:'Alex'}]; //массив
console.log(arr);

let user = {}; //пустой объект
console.log(user);
console.log(user, typeof user);

user = {
    name: 'Alex', // name, age, gender - это свойства объекта
    age: 28,      // 'Alex', 28, 'Male' - значения объекта
    gender: 'Male'
}

console.log(user);

console.log(user.name); // обращаемся к свойству объекта

user.email = 'name@gmail.come'; // добавляем новое свойство в существующий объект
console.log(user.email);
console.log(user);

//delete - удаляет свойство из объекта 

delete user.age;
console.log(user);

user.name = 'Bob'; //  обновляем значение у свойств
console.log(user);

//проверяем существует ли свойство в объекте (возвращает true or false). Через in - самый правильный способ проверки свойства в объекте

if ('name' in user) {
    console.log('Св-во существует');
}else {
    console.log('Св-во не существует');
}

if ('blabla' in user) {
    console.log('Св-во blabla существует');
}else {
    console.log('Св-во blabla не существует');
}

//проверка свойства объекта на undefined - oно имеет смысл «значение не присвоено».


if (user.blabla === undefined) {
    console.log('Св-во blabla undefined');
}


//специально назначаем свойству значение undefined

user.phone = undefined;

if (user.phone === undefined) {
    console.log('Св-во phone undefined');
}

if ('phone' in user) {
    console.log('Св-во phone существует'); //но, если проверяем существует ли свойство в объекте, консоль покажет, что у объекта свойство phone существует 
}

console.log(user);

//альтернативный способ обращения к свойству объекта - c ним мы можем к качеству имени свойства применять абсолютно любые названия ключей

console.log(user['phone']);
console.log(user['email']);

user['last-name'] = 'Ivanov'; //только через квадратные скобки возможно создание более сложных имен для свойств, напрмер, имя через дефис
console.log(user);

user['Отчество пользователя'] = 'Ivanovich'; //только через квадратные скобки возможно создание более сложных имен для свойств, напрмер, имя русскими буквами
console.log(user);

//алгоритм, когда не знаем имя ключа - обращаемся к свойству объекта путем создаия новой переменной

let key = 'gender';
console.log(user[key]);

//когда добавляем новое свойство можно этому свойству присваивать свой объект
user.size = {
    top: 90,
    middle: 60,
    bottom: 90
};
console.log(user);

console.log(user.size.middle); // обращаемся к значению свойства size(который содержит значение - новый объект), находящийся в объекте user

console.log(user['size']['middle']); // альтернативное - обращаемся к значению свойства size(который содержит значение - новый объект), находящийся в объекте user

//использование цикла для перебора объекта - обращение к каждому свойству по очереди внутри цикла для дальнейшей работы

for(let keyName in user){
    console.log(keyName); //выводим все свойства объекта
}

for(let keyName in user){
    console.log(keyName + ": " + user[keyName]); //дополниельно выводим значение свойств (один цикл for не может перебрать значение, если там внутри храниться объект, для этого надо делать еще одну проверку - нужно использовать вложеный цикл, чтобы его вывести)
}

//создание ссылки на объект

let userClone = user;

console.log(userClone); // но это не копия, а ссылка на оригинальный объект user

userClone.name = 'Ivan';
console.log(userClone);

console.log(user); // из-за того, что userClone - ссылка, то объект user тоже принял значение свойства name - Ivan

//копирование объекта

userClone = {}; //сбрасываем значения для userClone

for(let keyName in user) {
    userClone[keyName] = user[keyName];
}

console.log(userClone);
userClone.name = 'Dima';
console.log(userClone);
console.log(user);

//-------МЕТОДЫ ОБЪЕКТОВ-----------------------------------

let user1 = {
    name: 'Ivan',
    email: 'name@gmail.com',
    age: 28,
    hello: function(){ //если объект содержит функцию,то это называется методом
        alert('Hello');
    }
};

console.log(user1); //выводим объект
console.log(user1.email); //выводим свойство

//user1.hello(); //выводим функцию, которая в объекте - в этом примере выведет alert('Hello')

user1.bye = function(){ //создаем новую функцию, обращаясь к объекту
    alert('Bye');
};

//user1.bye();

user1.hello = function(){
    alert('Hello! My name is ' + user1.name);
}; //обновляем функцию, давая ей новое значение

//user1.hello();

//метод, чтобы изменить имя метода в нашем объекте

user1.setName = function(name) {
    user1.name = name;
};

console.log(user1);
user1.setName('Alex'); //присваиваем новое значение благодаря функции, которую написали выше
console.log(user1);
//user1.hello();

//this - правильный способ обращения к методу через 

user1.hello = function(){
    alert('Hello! My name is ' + this.name);
};

user1.setName = function(name) {
    this.name = name;
};

//user1.hello();

user1.setName('Dima');

//user1.hello();

//объекты прототипы - создаем с помощью болишх букв в названии переменных, также называеттся функция конструктор

let User = function() {
    this.name = 'NoName';
    this.age = 0;
    this.canWalk = false;
};

let userAlex = new User(), //создаем новую переменную на основе функции конструктора
    userBob = new User(),
    userMike = new User();

console.log(userAlex);
console.log(userBob);
console.log(userMike);

userAlex.name = 'Alex';
userBob.name = 'Bob';
userMike.name = 'Mike';

console.log(userAlex);
console.log(userBob);
console.log(userMike);

let Animal = function() {
    this.name = 'Animal';
    this.canWalk = false;
};

let cat = new Animal(),
    dog = new Animal();

console.log(cat);
console.log(dog);

//дорабатываем функцию конструктор

Animal = function(name, walk) {
this.name = name;
this.canWalk = walk;
};

cat = new Animal('Cat', true);
dog = new Animal('Dog', true);

console.log(cat);
console.log(dog);

cat.canTalk = 'Meow-meow';
dog.canTalk = 'Gav-gav';

console.log(cat);
console.log(dog);

//создание калькулятора

let Calc = function() {
    this.get = function() {
        this.a = +prompt ('Write number a'); //+ перед prompt преобразовывает вводимые значения в числа
        this.b = +prompt ('Write number b');
        this.oper = prompt ('Write operation: +, -, *, /');

        this.operation(); //метод get вызвает метод operation
    };

    this.operation = function(){
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    };

    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result)
    };
};

let calc = new Calc();
calc.get();