function solve() {
  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let count = 0;
  let sectionCounter = 0;

  Array.from(document.getElementsByClassName("answer-text")).map(x => x.addEventListener("click", function (e) {
    e.preventDefault();

    if (correctAnswers.includes(e.target.innerHTML)) {
      count++;
    }

    let currentSection = document.querySelectorAll("section")[sectionCounter];
    currentSection.style.display = "none";

    if (document.querySelectorAll("section")[sectionCounter + 1] !== undefined) {
      let section = document.querySelectorAll("section")[sectionCounter + 1];
      section.style.display = "block";
      sectionCounter++;
    }
    else {
      document.getElementById("results").style.display = "block";
    }

    if (count == 3) {
      document.getElementsByClassName("results-inner")[0].children[0].innerHTML = `You are recognized as top JavaScript fan!`;
    }
    else {
      document.getElementsByClassName("results-inner")[0].children[0].innerHTML = `You have ${count} right answers`;
    }
  }));
}
