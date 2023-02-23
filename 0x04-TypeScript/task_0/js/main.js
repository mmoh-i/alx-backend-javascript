"use strict";
exports.__esModule = true;
var student1 = {
    firstName: "Sir",
    lastName: "el",
    age: 23,
    location: "Kano, Nigeria"
};
var student2 = {
    firstName: "muhammad",
    lastName: "el",
    age: 32,
    location: "Kano, Nigeria"
};
var studentsList = [
    student1,
    student2,
];
function renderTable() {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    studentsList.forEach(function (data) {
        var row = document.createElement("tr");
        var indexCell1 = document.createElement("td");
        indexCell1.textContent = data.firstName;
        row.appendChild(indexCell1);
        var indexCell2 = document.createElement("td");
        indexCell2.textContent = data.location;
        row.appendChild(indexCell2);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}
;
renderTable();
