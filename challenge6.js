/*
** Anton has n empty boxes,  numbered from 1 to n. 
**Each box has infinite capacity. He wants to fill these boxes with books through multiple stages.
**Each stage is described by 3 integers, a, b, q. 
**Where a and b are the range of indices of the boxes, 
**and q is the number of books that Anton wants to fill the boxes with. 
**Print out the average number of books after m stages.
*/


const averageBooks = (numberOfBoxes, stages) => {
    let stagesInfo = stages.map(stage => singleStageBookNumbers(numberOfBoxes, stage))
    console.log(stagesInfo);

    let totalBooksArray = stagesInfo.reduce((accumulator, currentValue) =>
        currentValue.map((a, b) =>
            (accumulator[b] || 0) + a), []);
    console.log(totalBooksArray);

    let average = averageBook(totalBooksArray);
    return average;

}



const singleStageBookNumbers = (numberOfBoxes, stage) => {
    let stageBooks = Array(numberOfBoxes).fill(0);
    let startingIndex = stage[0] - 1;
    let endIndex = stage[1] - 1;
    let addedBooks = stage[2];
    stageBooks.fill(addedBooks, startingIndex, endIndex + 1);
    return stageBooks;
}

const averageBook = (array) => {
    let sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
    let average1 = sum / array.length;

    return average1;
}

console.log(averageBooks(3, [[1, 2, 3], [1, 3, 5]]));
console.log(averageBooks(4, [[1, 3, 3], [2, 4, 5],[1,4,2]]));