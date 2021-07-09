const quotes = [
    {
        quote: "Love looks not with the eyes, but with the mind.",
        author: "William Shakespeare"
    },
    {
        quote: "A long life may not be good enough, but a good life is long enough.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Man as an individual is a genius. But men in the mass form the headless monster, a great, brutish idiot that goes where prodded.",
        author: "Charlie Chaplin"
    },
    {
        quote: "It's choice - not chance - that determines your destiny.",
        author: "Jean Nidetch"
    },
    {
        quote: "Misfortune shows those who are not really friends.",
        author: "Aristotle"
    },
    {
        quote: "Let no one ever come to you without leaving better and happier.",
        author: "Mother Teresa"
    },
    {
        quote: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "It's only when the tide goes out that you discover who's been swimming naked.",
        author: "Warren Buffett"
    },
    {
        quote: "What we dwell on is who we become.",
        author: "Oprah Winfrey"
    },
    {
        quote: "The greatest risk is the risk of riskless living.",
        author: "Stephen Covey"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;