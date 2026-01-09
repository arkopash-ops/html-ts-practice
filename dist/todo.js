const form = document.getElementById("formToDo");
const input = document.getElementById("inputToDo");
const tableBody = document.getElementById("toDoTableBody");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value.trim();
    if (!task)
        return;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${task}</td>
      <td>${new Date().toLocaleDateString()}</td>
      <td><button>Delete</button></td>
    `;
    const deleteBtn = row.querySelector("button");
    deleteBtn.addEventListener("click", () => row.remove());
    tableBody.appendChild(row);
    input.value = "";
});
export {};
