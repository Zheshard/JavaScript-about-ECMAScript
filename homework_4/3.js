"use strict";

// ### 3. Изменение стиля элемента через заданное время

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// ---

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const changeStyleDelayed = (id, delay) => {
    const element = document.getElementById(id);

    setTimeout(() => {
        element.style.cssText = "color: blue; border: 1px solid black";
    }, delay);
};

changeStyleDelayed("myElement", 2000);
