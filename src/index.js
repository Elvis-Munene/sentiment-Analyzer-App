const resultsArea = document.querySelector(".results");
const getButton = document.querySelector(".get");
const postButton = document.querySelector(".post");

const init = () => {
  const inputForm = document.querySelector("form");
  
  const input = document.querySelector("textarea#comment");
  function tokenize(text) {
    return deleteUselessChars(text).toLowerCase().split(" ");
  }
  function deleteUselessChars(word) {
    return word.replace(/[^a-zA-Z\s]+/g, "");
  }
  function rateWord(word) {
    return word in data ? data[word] : 0;
  }

  function rater() {
    let newArray = [];
    let words = tokenize(input.value);
    for (let word of words) {
      newArray.push(rateWord(word));
    }
    return newArray;
  }

  function analyze(text) {
    return displayResults(rater().reduce((sum, y) => (sum += y)));
  }
  function displayResults(grade) {
    console.log(grade);
    switch (grade) {
      case 0:
        resultsArea.textContent = "😡";

        return {
          analysis: {
            emoji: "😡",
            rate: grade,
          },
        };
      case 1:
        console.log("");

      default:
        return {
            analysis: {

            },
          };
        break;
    }
  }


//Fetch Data

const baseURl = "http://localhost:3000/sentiments";
function getSentiments() {
  fetch(baseURl)
    .then((response) => response.json())
    .then((sentiments) => console.log(sentiments));
}
function postSentiment(data) {
  fetch(baseURl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((sentiments) => console.log(sentiments));
}

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(analyze());
    let form = new FormData(e.target);
    let data = {
      name: form.get("name"),
      email: form.get("email"),
      comment: form.get("comment"),
      analysis: analyze().analysis,
    };
    postSentiment(data);
  });
// postButton.addEventListener("click", postSentiment);
getButton.addEventListener("click", getSentiments);
};
document.addEventListener("DOMContentLoaded", init);




//Load the JSON data
import data from "../index.json" assert { type: "json" };
console.log(data);