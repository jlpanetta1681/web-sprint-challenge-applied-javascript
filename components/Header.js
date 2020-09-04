// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerDiv = document.createElement("div");
  const divDate = document.createElement("span");
  const headingOne = document.createElement("h1");
  const divTemp = document.createElement("span");

  headerDiv.setAttribute("class", "header");
  divDate.setAttribute("class", "date");
  divTemp.setAttribute("class", "temp");

  divDate.textContent = "Friday Sept. 4, 2020";
  headingOne.textContent = "Lambda Times";
  divTemp.textContent = "76°F";

  headerDiv.appendChild(divDate);
  headerDiv.appendChild(headingOne);
  headerDiv.appendChild(divTemp);

  const headerContainer = document.querySelector(".header-container")

  return headerContainer.append(headerDiv);
}
Header()