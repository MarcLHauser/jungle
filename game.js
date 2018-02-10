var data = {
    lithuania : {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
    }
};

var getMessage = function() {
    return data.lithuania.question;
};

// start game
console.log( getMessage() );