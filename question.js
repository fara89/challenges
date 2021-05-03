
function printLikes(users) {
    let message = "";
    if(users.length === 0) {
        message = "";
    }
    else if (users.length == 1){
        message = users[0];
    }
    else if (users.length == 2) {
        message = users[0] + " and " + users[1];
    }
    else {
        let length = users.length - 2;
        message = users[0] + " , " + users[1] + " , and " + length + " others like your post.";
    }
    console.log(message);
}

printLikes(['Saleem','Osama']);
printLikes(['Saleem','Ameer','Khaled','Ahmed']);
printLikes(['Fatima']);
printLikes([]);