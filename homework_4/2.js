"use strict";

// ### 2. Отправка данных на сервер

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// ---

// _Подсказка _
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

const user = {
    name: "John Smith",
    age: 30,
    email: "john@example.com",
};

saveUserData(user)
    .then(() => {
        console.log("User data saved successfully");
    })
    .catch((error) => {
        console.log(error.message);
    });

function saveUserData(userData) {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    resolve();
                } else {
                    reject(new Error("Error saving user data"));
                }
            })
            .catch((error) => {
                reject(new Error("Error saving user data"));
            });
    });
}
