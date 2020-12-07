const btn = document.querySelector(".btn");
const joke = document.querySelector("p");
const url = 'http://api.icndb.com/jokes/random';

const loadJoke = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        joke.innerHTML = data.value.joke;
    })
}

window.onload = loadJoke();
btn.addEventListener('click', loadJoke);
