
const reverseString = (string) => {
    let reverse = "";
    let word = "";
    let tempArray = [];
    for (let i = 0; i < string.length; i++) {
        let character = string[i];
        word += character;
        if (character == " " || i == (string.length - 1)) {
            word = word.trim();
            tempArray.push(word);
            word = "";
        }
    }
    while (newWord = tempArray.pop()) {
        reverse += newWord + " ";
    }
    return reverse;
}

console.log(reverseString("How are you?"));
console.log(reverseString("This is me"));