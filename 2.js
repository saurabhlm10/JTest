const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 21 },
    { name: 'Alice', age: 20 },
    { name: 'David', age: 21 },
]

const groupBy = (arr, param) => {
    var groupedObj = {};

    arr.forEach(function (obj) {
        var propertyValue = obj[param];

        if (!groupedObj[propertyValue]) {
            groupedObj[propertyValue] = [];
        }

        groupedObj[propertyValue].push(obj);
    });

    return groupedObj;
}

const x = groupBy(students, 'name')

console.log(x)

