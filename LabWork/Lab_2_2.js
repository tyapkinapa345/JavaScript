JavaScript
// Вариант №16

// Задание 2. 
// Сравнение массивов объектов по ключу. Сравните два массива объектов по значениям указанного ключа. 

// Создаем 2 массива-словаря
let sravn1 = [
    {id: 1, name: 'Hello'},
    {id: 2, name: 'Lab'},
    {id: 4, name: 'Formula-1'}
];

let sravn2 = [
    {id: 1, name: 'JavaScript'},
    {id: 3, name: 'Sanata'},
    {id: 4, name: 'Formula-1'}
];

// Сравнение массивов по ключу 'id'
let ids1 = sravn1.map(obj => obj.id);
let ids2 = sravn2.map(obj => obj.id);

// Найдем общие id
let commonIds = ids1.filter(id => ids2.includes(id));

if (commonIds.length > 0) {
    console.log('Общие id:', commonIds);
} else {
    console.log('Нет общих id');
}
// map - используется для получения массивов id из обоих массивов объектов.
// filter - используется для фильтрации тех id, которые присутствуют в обоих массивах.

// Для получения объектов по ключам
let commonObjects1 = sravn1.filter(obj => commonIds.includes(obj.id));
let commonObjects2 = sravn2.filter(obj => commonIds.includes(obj.id));

console.log('Общие объекты из первого массива:', commonObjects1);
console.log('Общие объекты из второго массива:', commonObjects2);
