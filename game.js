var data = {
    lithuania : {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
    },
    america : {
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?"
    }
};

data.lithuania.yes = data.america;

var getMessage = function() {
    return data.lithuania.question;
};

var yes = function(){
    return getMessage();
};

var no = function(){
    return getMessage();
};

// start game
var place = data.lithuania;
console.log( getMessage() );