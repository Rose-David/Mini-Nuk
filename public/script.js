// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("*notices your world there* OwO hello there");

// define variables that reference elements on our page
const featuresList = document.getElementById("features");
const featuresForm = document.querySelector("form");

// a helper function that creates a list item for a given feature
function appendNewfeature(feature) {
  const newListItem = document.createElement("li");
  newListItem.innerText = feature;
  featuresList.appendChild(newListItem);
}

// fetch the initial list of features
fetch("/features")
  .then(response => response.json()) // parse the JSON from the server
  .then(features => {
    // remove the loading text
    featuresList.firstElementChild.remove();
  
    // iterate through every feature and add it to our page
    features.forEach(appendNewfeature);
  
    // listen for the form to be submitted and add a new feature when it is
    featuresForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get feature value and add it to the list
      let newfeature = featuresForm.elements.feature.value;
      features.push(newfeature);
      appendNewfeature(newfeature);

      // reset form
      featuresForm.reset();
      featuresForm.elements.feature.focus();
    });
  });
