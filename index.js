let myLeads = [];
let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

buttonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value); // push input to array
  inputEl.value = ""; // refreshes page
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
    </li>`;
    ulEl.innerHTML = listItems;
  }
}
