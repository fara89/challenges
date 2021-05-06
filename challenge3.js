const findHighestOrderValue = (orders) => {
    let arrayOFTotalOrderCost = orders.map(order => sumOFOrderItems(order))

    let index = indexOfHighestValue(arrayOFTotalOrderCost);

    return index;
}


const sumOFOrderItems = (order) => {
    let sum = order.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)

    return sum;
}

const indexOfHighestValue = (array) => {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return array.indexOf(max);
}

console.log(findHighestOrderValue([[1, 2, 3], [2, 3, 4]]));
console.log(findHighestOrderValue([[1.5], [2, 3], [10, 1]]));
console.log(findHighestOrderValue([[1, 2, 3], [10, 10], [10, 1]]));