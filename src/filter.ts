const filterType = document.getElementById("filterType") as HTMLSelectElement;
const filterName = document.getElementById("filterName") as HTMLInputElement;
const filterPrice = document.getElementById("filterPrice") as HTMLInputElement;
const priceValue = document.getElementById("priceValue") as HTMLElement;
const table = document.querySelector("tbody") as HTMLTableSectionElement;
const totalCell = document.querySelector("tfoot td") as HTMLTableCellElement;

if (table && totalCell) {
  const rows: HTMLTableRowElement[] = Array.from(table.querySelectorAll("tr"));
  const buyButtons: HTMLButtonElement[] = Array.from(
    document.querySelectorAll("tbody button")
  );

  function filterTable(): void {
    const typeVal: string = filterType.value.toLowerCase();
    const nameVal: string = filterName.value.toLowerCase();
    const priceVal: number = parseInt(filterPrice.value);

    let visibleCount = 0;

    rows.forEach((row) => {
      const name: string = row.cells[1]?.textContent?.toLowerCase() || "";
      const type: string = row.cells[2]?.textContent?.toLowerCase() || "";
      const price: number = parseInt(row.cells[3]?.textContent || "0");

      const matchesType: boolean = typeVal === "" || type === typeVal;
      const matchesName: boolean = name.includes(nameVal);
      const matchesPrice: boolean = price <= priceVal;

      if (matchesType && matchesName && matchesPrice) {
        row.style.display = "";
        visibleCount++;
      } else {
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
      const productName: string =
        button.closest("tr")?.cells[1]?.textContent || "Unknown Product";
      alert(`You have bought ${productName}!`);
    });
  });
}
