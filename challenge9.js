let firstRow = "qwertyuiop";
let secondRow = "asdfghjkl";
let thirdRow = "zxcvbnm";

const printOneRowLetters = (arrayOfWords) => {
    let results = [];
    for (word of arrayOfWords) {
        if (Array.from(word).every(letter => secondRow.indexOf(letter.toLowerCase()) > -1)
            || Array.from(word).every(letter => firstRow.indexOf(letter.toLowerCase()) > -1)
            || Array.from(word).every(letter => thirdRow.indexOf(letter.toLowerCase()) > -1)) {
            results.push(word);
        }
    }
    return results;
}


console.log(printOneRowLetters(["Hello", "Alaska", "Dad", "Peace"]));
console.log(printOneRowLetters(["toy", "nbm"]));
console.log(printOneRowLetters(["qa", "za"]));
console.log(printOneRowLetters(["qa", "za", "jkl"]));