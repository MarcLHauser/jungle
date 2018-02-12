/*

Author: Sammy Hauser
Project: BSI Humanities The Jungle Final Project

Thanks to Marc Hauser (my dad) for teaching me, and John R. Larsen (author of Get Programming With JavaScript) for giving me feedback.

*/

var data = {

america: {
    question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. She wants to go to America with you and her family, which includes Teta Elzbieta, Marija, Jonas, Antanas and six children. Do you a) stay in Lithuania, or b) go to America?",
},
    
hotel: {
    question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you a) sleep in the streets, or b) follow the man to the hotel?"
},
    
freeze: {
    death: "You freeze to death because of Lithuania's cold climate."
},

chicago: {
  question: "The man makes you pay an enormous sum of money to get out. But then, you remember that someone you know had gotten rich in Chicago. Do you a) to go to Chicago, or b) stay in New York?"  
},
    
alleyway: {
    death: "You decide to sleep in a seemingly abandoned alleyway. You wake up to find your money gone. Because of this, you cannot find anywhere to stay, and you die of disease after eating something off the street."
},
    
stockyards: {
    question: "You finally arrive in Chicago and you learn a new word: 'stockyards'. Do you want a) stay where you are, or b) got to the stockyards?"
},
    
tenement: {
    question: "You stay in New York. Do you want to a) stay in a tenement, or b) find somewhere else?"
},
    
newYorkHomeless:{
    death: "You take shelter in any place you can. One night, you decide to sleep in the police station, but you get killed in a fight, over the limited amount of space."
},
    
tuberculosis: {
    death: "Sickness travels quickly in the cramped tenement. You get pneumonia and die."
},
    
boardinghouse: {
    question: "You arrive in the stockyards. Coincidencetally, you run into your friend, Jokubas Szedvilas, who owns a delicatessen. He gives a recommendation for a boardinghouse. Do you a) ignore his recommendation, or b) stay in the boardinghouse?"
},
    
wanderChicago: {
    death: "You starve wandering Chicago."
},
    
job: {
    question: "You find out that Jokubas knows an 'special policeman' whose job it is to find other people jobs. Do you a) meet with him to find a job, or b) remain unemployed?"
},
    
houseNoJob: {
    question: "You realize that you have to find a place to stay, and you saw an advertisement for a house while walking with Ona. Do you a) ignore the ad, or b) to buy the house?"
},

moneyOut: {
    death: "You start renting a small house, but you cannot keep up with the payments. You are evicted, and soon, you starve to death."
},
    
noHouse: {
    death: "You die of dehydration while walking around the stockyards with Ona."
},
    
lazybones: {
    death: "Because no one is working, the family has no income, and you run out of money and die."
},
    
house: {
    question: "You now work at Brown's, sweeping up entrails into a hole in the floor, making 17 and a half cents an hour. Marija and Jonas also work. Do you want to a) buy a house, or b) stay in the boardinghouse?"
}
    
};

data.america.b = data.hotel;
data.america.a = data.freeze;
data.hotel.b = data.chicago;
data.hotel.a = data.alleyway;
data.chicago.a = data.stockyards;
data.chicago.b = data.tenement;
data.tenement.a = data.tuberculosis;
data.tenement.b = data.newYorkHomeless;
data.stockyards.b = data.boardinghouse;
data.stockyards.a = data.wanderChicago;
data.boardinghouse.b = data.job;
data.boardinghouse.a = data.houseNoJob;
data.houseNoJob.b = data.moneyOut;
data.houseNoJob.a = data.noHouse;
data.job.a = data.house;
data.job.b = data.lazybones;

var place = data.america;

var ask = function(){

if(place.death === undefined){
    return place.question;
} else {
    console.error (place.death);
    return "Game Over";
}
    
};

console.log( ask() );

var a = function(){
  place = place.a;
  return ask();  
};

var b = function(){
    place = place.b;
    return ask();
};