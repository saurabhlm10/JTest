const customSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
var numbers = [5, 33, 100, 1, 20];
var sortedNumbers = customSort(numbers);
console.log(sortedNumbers); 