const lyrics = document.querySelector(".lyrics");
const images = document.querySelectorAll("img");

const proba = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      lyrics.innerText = this.responseText;
    }
  }
  const file = `txt/${this.alt}.txt`;
  xhttp.open("GET", file, true);
  xhttp.send();
}

images.forEach(element => {element.addEventListener("click", proba)});