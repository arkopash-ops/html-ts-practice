const filterType = document.getElementById("filterType");
const filterName = document.getElementById("filterName");
const filterPrice = document.getElementById("filterPrice");
const priceValue = document.getElementById("priceValue");
const table = document.querySelector("tbody");
const totalCell = document.querySelector("tfoot td");
if (table && totalCell) {
    const rows = Array.from(table.querySelectorAll("tr"));
    const buyButtons = Array.from(document.querySelectorAll("tbody button"));
    function filterTable() {
        const typeVal = filterType.value.toLowerCase();
        const nameVal = filterName.value.toLowerCase();
        const priceVal = parseInt(filterPrice.value);
        let visibleCount = 0;
        rows.forEach((row) => {
            const name = row.cells[1]?.textContent?.toLowerCase() || "";
            const type = row.cells[2]?.textContent?.toLowerCase() || "";
            const price = parseInt(row.cells[3]?.textContent || "0");
            const matchesType = typeVal === "" || type === typeVal;
            const matchesName = name.includes(nameVal);
            const matchesPrice = price <= priceVal;
            if (matchesType && matchesName && matchesPrice) {
                row.style.display = "";
                visibleCount++;
            }
            else {
                row.style.display = "none";
            }
        });
        totalCell.textContent = `Total Items: ${visibleCount}`;
    }
    filterPrice.addEventListener("input", () => {
        priceValue.textContent = filterPrice.value;
        filterTable();
    });
    filterType.addEventListener("change", filterTable);
    filterName.addEventListener("input", filterTable);
    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.closest("tr")?.cells[1]?.textContent || "Unknown Product";
            alert(`You have bought ${productName}!`);
        });
    });
}
export {};
