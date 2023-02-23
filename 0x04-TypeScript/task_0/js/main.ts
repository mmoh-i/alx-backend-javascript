export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Sir",
  lastName: "el",
  age: 23,
  location: "Kano, Nigeria",
}
const student2: Student = {
  firstName: "muhammad",
  lastName: "el",
  age: 32,
  location: "Kano, Nigeria",
}

const studentsList: Array<Student> = [
  student1,
  student2,
];

function renderTable() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((data) => {
    const row = document.createElement("tr");

    const indexCell1 = document.createElement("td");
    indexCell1.textContent = data.firstName;
    row.appendChild(indexCell1);

    const indexCell2 = document.createElement("td");
    indexCell2.textContent = data.location;
    row.appendChild(indexCell2);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
};

renderTable();

