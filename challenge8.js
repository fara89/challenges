// Write a function that accepts user input and search within an array of usernames 
//for auto-complete functionality. 
//You have to order them alphabetically in order with respect to the search input. 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What do you want to search for?', name => {
    console.log(search(name));
    readline.close();
})

const search = (name) => {
    let list = ['Saleem', 'Salim', 'Salih'];
    const result = list.filter(word => word.toLowerCase().indexOf(name.toLowerCase()) !== -1)
    result.sort();

    return result;
}