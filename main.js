// target input fields

const placeHere = document.querySelector("#placeHere");

function addToDOM() {
  const inputThing = document.querySelector("#input-thing").value;
  const inputStore = document.querySelector("#input-store").value;
  if (inputThing === "" || inputStore === "") {
    alert("You did not enter all the info");
  } else {
    placeHere.innerHTML += `
        <p align=center>I can purchase ${inputThing} at ${inputStore} and I find that dangerously convenient.
        </p>
    `;
  }
}

function submitThing() {
  document.querySelector("button").addEventListener("click", e => {
    addToDOM();
    document.querySelector("#input-thing").value = "";
    document.querySelector("#input-store").value = "";
  });
}

submitThing();

// When you click the button check if both input fields have a value that is not empty string (""). If it is that, then you did not type anything into that input field.

// If either input field is blank, do not add anything to the DOM and alert the user that they need to enter in all information.
