var data = {
    lithuania : {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
    },
    america : {
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?"
    },
    freeze : {
        death: "You have frozen to death because of Lithuania's cold climate."
    }
};

data.lithuania.yes = data.america;
data.lithuania.no = data.freeze;

var place = data.lithuania;

var ask = function() {
	if (place.question) {
		return place.question;
	} else {
		return place.death;
	}
};

var yes = function(){
    place = place.yes;
    return ask();
};

var no = function(){
    place = place.no;
    return ask();
};

console.log( ask() );