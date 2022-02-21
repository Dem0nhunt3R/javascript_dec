//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const classesArray = [];

function getClassesName(startElement) {
    const children = startElement.children;
    for (const child of children) {
        if (child.children) {
            for (const item of child.children) {
                classesArray.push(item.className.split(' ').join(', '));
                getClassesName(item);
            }
        } else {
            classesArray.push(child.className);
            getClassesName(child);
        }
    }
}

getClassesName(document.body);
console.log(classesArray)