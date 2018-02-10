var data = {
    lithuania : {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'",
        yes: "america"
    },

    america : {
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?"
    },

    freeze : {
        death: "You have frozen to death because of Lithuania's cold climate."
    },

    alleyway : {
        death: "You decide to sleep in an abandoned alleyway and find all your money gone in the morning. You starve to death because no one will give you a job."
    },

    hotel : {
        question: "The man makes you pay enormous fees to get out. Once you get out of the hotel, you remember that your friend got rich in Chicago. Do you want to go to Chicago?"
    },

    newyork : {
        question: "You stay in New York. Do you want to stay in a tenement?"
    },

    tuberculosis : {
        death: "You get tuberculosis after a few days in the tenement. It is fatal."
    },

    homeless : {
        death: "You are homeless and you can't find work. You starve."
    },

    chicago : {
        question: "You finally arrive in Chicago and you learn a new word: 'stockyards'. Do you want to go to the stockyards?"
    },

    wandering : {
        death: "You starve wandering Chicago."
    },

    stockyards : {
        question: "You arrive in the stockyards. Coincidencetally, you run into your friend who owns a bodega. He gives a recommendation for a boardinghouse. Do you stay there?"
    },

    streets : {
        death:  "You quickly realize that the whole family cannot sleep in the streets. You find a tenement building to stay in for very little money, but it is very small and cramped. You get sick, because of the cramped consitions, and the disease is fatal."
    },

    boardinghouse : {
        question: "More questions to come..."
    }
};

data.lithuania.yes   = data.america;
data.lithuania.no    = data.freeze;
data.america.yes     = data.hotel;
data.america.no      = data.alleyway;
data.hotel.yes       = data.chicago;
data.hotel.no        = data.newyork;
data.newyork.yes     = data.tuberculosis;
data.newyork.no      = data.homeless;
data.chicago.yes     = data.stockyards;
data.chicago.no      = data.wandering;
data.stockyards.yes  = data.boardinghouse;
data.stockyards.no   = data.streets;

var getMessage = function() {
    if (place.question) {
        return place.question;
    } else {
        console.error(place.death);
        return 'Game Over';
    }
};

var yes = function(){
	place = place.yes;
    return getMessage();
};

var no = function(){
	place = place.no;
    return getMessage();
};

// start game
var place = data.lithuania;
console.log( getMessage() );