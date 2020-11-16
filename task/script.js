var quotes = [
    "It is never too late to be what you might have been.-George Elliot",
    "We may encounter many defeats, but we must not be defeated-Maya Angelou",
    "Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind.-Emily P.Bissell",
    "Whether you think you can or think you can\'t, you\'re right.-Henry Ford",
    "Remember that happiness is a way of travel, not a destination.-Roy M. Goodman",
    "The two most important days in your life are the day you were born and the day you find out why.-Mark Twain",
    "Creativity is intelligence having fun.-Albert Einstein",
    "What you lack in talent can be made up with desire, hustle, and giving 110% all the time.-Don Zimmer",
    "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.-Tony Robbins",
    "The only thing worse than being blind is having sigth but no vision.-Hellen Keller",
    "In between goals is a thing called life, that is to be lived amd enjoyed.-Sid Caeser",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.-Steve Jobs",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.-Winston Churchill",
    "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try, and those who are afraid you will succeed.- Ray Goforth",
    "If you want to test your memory, try to recall what you were worrying about one year ago today.-E. Joseph Cossman"
];

function genQuote() {
    'use strict';
    var randomNumber = Math.round(Math.random() * (quotes.length));
    document.getElementById("quote").innerHTML = quotes[randomNumber];
}