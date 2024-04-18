let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

buttonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value); // push input to array
});
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; // appends a new list item to the HTML content inside the ul element, using the value from the myLeads array at index i.
}
