"use strict";
// 3. Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
//    Пример
//    const rootElement = document.getElementById('root');
//    const targetElement = findElementByClass(rootElement, 'my-class');
//    console.log(targetElement);

const rootElement = document.getElementById("root");

function findElementByClass(root, className) {
  if (root.classList && root.classList.contains(className)) {
    return root;
  }

  let children = root.children;
  for (let i = 0; i < children.length; i++) {
    let foundElement = findElementByClass(children[i], className);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}

const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
