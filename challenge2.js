const encryption = (sentence) => {
    let wordsArray = sentence.split(" ");
    let encrypt = wordsArray.map(
        (word) => {
            let wordLength = word.length;
            if (wordLength % 3 == 0) {
                return 0;
            } else {
                return 1;
            }
        }      
    );
    return encrypt.join("");
}


console.log(encryption("How are you?"));
console.log(encryption("The quick brown fox jumps over the lazy dog"));