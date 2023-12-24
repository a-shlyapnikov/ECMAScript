/* 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной строки */
const arr = [1, 5, 7, 9];

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin(arr));

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. 
Метод increment должен увеличивать значение счетчика на 1, 
а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

function createCounter() {
    let counter = 0;
    return {
        increment() {
            counter++;
        },
        decrement() {
            counter--;
        },
        getCounter() {
            return counter;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCounter());
console.log(counter.counter);
counter.decrement();
console.log(counter.getCounter());


/* 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве. */

function findElementByClass(element, className) {
    
    if (element.classList.contains(className)) {
        return element;
    }

    for (let i = 0; i < element.children.length; i++) {
        const result = findElementByClass(element.children[i], className);
        if (result) {
            return result;
        }
    }

    return null;
}

const container = document.querySelector('.container');
console.log(findElementByClass(document.documentElement, 'child'));