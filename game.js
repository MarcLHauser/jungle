var data = {
    lithuania : {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
    }
};

var ask = function() {
    return data.lithuania.question;
};

var yes = function(){
    return ask();
};

var no = function(){
    return ask();
};

console.log( ask() );