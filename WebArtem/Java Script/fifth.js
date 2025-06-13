// 1. Объявление переменных с разными типами данных
let numValue = 10;
let textValue = "Hello, JavaScript!";
let boolValue = true;
let numArray = [1, 2, 3];
let petInfo = { name: "Buddy", age: 4, type: "dog" };

// Операции с переменными
console.log(numValue * 2);
console.log(textValue.toUpperCase());
alert(boolValue ? "Верно!" : "Неверно!");
console.log(numArray.join(" - "));
console.log(`Кличка: ${petInfo.name}, Возраст: ${petInfo.age}, Тип: ${petInfo.type}`);

// 2. Создание массива случайных чисел
let randomNums = [];
for (let i = 0; i < 10; i++) {
    randomNums.push(Math.floor(Math.random() * 100));
}

// Различные способы перебора массива
for (let i = 0; i < randomNums.length; i++) {
    console.log(`for: ${randomNums[i]}`);
}

for (let idx in randomNums) {
    console.log(`for...in: ${randomNums[idx]}`);
}

randomNums.forEach(value => console.log(`forEach: ${value}`));

// 3. Функция для проверки и добавления числа в массив
const findOrAddNumber = (arr, num) => {
    if (arr.includes(num)) {
        console.log(`${num} уже присутствует`);
        return true;
    } else {
        arr.push(num);
        console.log(`${num} добавлено в массив`);
        console.log(randomNums.join(" - "));
        return false;
    }
};

findOrAddNumber(randomNums, 10);

// 4. Создание объекта с различными свойствами
let pet = {
    name: "Buddy",
    age: 4,
    type: "dog"
};

// 5. Стрелочная функция для получения значения свойства по ключу
const getValue = (obj, prop) => console.log(obj[prop]);

getValue(pet, "name");
getValue(pet, "age");
getValue(pet, "type");