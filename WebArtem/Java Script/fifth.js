// 1. ���������� ���������� � ������� ������ ������
let numValue = 10;
let textValue = "Hello, JavaScript!";
let boolValue = true;
let numArray = [1, 2, 3];
let petInfo = { name: "Buddy", age: 4, type: "dog" };

// �������� � �����������
console.log(numValue * 2);
console.log(textValue.toUpperCase());
alert(boolValue ? "�����!" : "�������!");
console.log(numArray.join(" - "));
console.log(`������: ${petInfo.name}, �������: ${petInfo.age}, ���: ${petInfo.type}`);

// 2. �������� ������� ��������� �����
let randomNums = [];
for (let i = 0; i < 10; i++) {
    randomNums.push(Math.floor(Math.random() * 100));
}

// ��������� ������� �������� �������
for (let i = 0; i < randomNums.length; i++) {
    console.log(`for: ${randomNums[i]}`);
}

for (let idx in randomNums) {
    console.log(`for...in: ${randomNums[idx]}`);
}

randomNums.forEach(value => console.log(`forEach: ${value}`));

// 3. ������� ��� �������� � ���������� ����� � ������
const findOrAddNumber = (arr, num) => {
    if (arr.includes(num)) {
        console.log(`${num} ��� ������������`);
        return true;
    } else {
        arr.push(num);
        console.log(`${num} ��������� � ������`);
        console.log(randomNums.join(" - "));
        return false;
    }
};

findOrAddNumber(randomNums, 10);

// 4. �������� ������� � ���������� ����������
let pet = {
    name: "Buddy",
    age: 4,
    type: "dog"
};

// 5. ���������� ������� ��� ��������� �������� �������� �� �����
const getValue = (obj, prop) => console.log(obj[prop]);

getValue(pet, "name");
getValue(pet, "age");
getValue(pet, "type");