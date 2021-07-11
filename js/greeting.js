const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const question = document.querySelector("#question");
const intro = document.querySelector("#intro");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    intro.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings (username) {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours < 12) {
        greeting.innerText = `Good Morning, ${username}!`;
    } else if (hours >= 12 && hours < 18) {
        greeting.innerText = `Good Afternoon, ${username}!`;
    } else {
        greeting.innerText = `Good Evening, ${username}!`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    question.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    intro.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}