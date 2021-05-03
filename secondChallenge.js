function encryptText(text) {
    const words = text.split(' ');
  
    for (let i = 0; i< words.length; i++){
      if (words[i].length % 3 === 0){
        words[i] = 0;
        
      }else {
        words[i] = 1;  
      }
      
      }
      return words.join("");
}

console.log(encryptText("How are you?"));
console.log(encryptText("The quick brown fox jumps over the lazy dog"));