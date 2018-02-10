lithuania = {
    question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
};

america = {
    question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?"
};

lithuania.yes = america;

var place = lithuania;

var ask = function() {
    return place.question;
};

var yes = function(){
	place = place.yes;
    return ask();
};

var no = function(){
    return ask();
};

console.log( ask() );