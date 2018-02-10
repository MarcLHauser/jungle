var data = {
    lithuania : {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
    }
};

var place = data.lithuania;

var ask = function() {
    return place.question;
};

var yes = function(){
    return ask();
};

var no = function(){
    return ask();
};

console.log( ask() );