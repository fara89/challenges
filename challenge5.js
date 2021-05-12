//Write a function that accepts an array of strings.Find the common letters in all of the strings.

const findCommonLettersInWords = (words) => {
    let commonLettersArray = [];
    let characterfrequecyArray = Array(26).fill(Number.MAX_VALUE);

    for (let word of words) {
        let newWord = word.toLowerCase();
        let tempCharFrequencyArray = Array(26).fill(0);
        for (let character of newWord) {
            tempCharFrequencyArray[character.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            characterfrequecyArray[i] = Math.min(characterfrequecyArray[i], tempCharFrequencyArray[i]);
        }
    }

    for (let i = 0; i < 26; i++) {
        while (characterfrequecyArray[i] > 0) {
            commonLettersArray.push(String.fromCharCode(i + 97));
            characterfrequecyArray[i]--;
        }
    }
    return commonLettersArray;


}


console.log(findCommonLettersInWords(["Saleem", "Soda", "Khaled"]));
console.log(findCommonLettersInWords(["Pepsi", "Kitkat", "Oreo"]));

