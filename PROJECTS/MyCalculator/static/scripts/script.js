document.addEventListener("DOMContentLoaded", function () {
    const inp1 = document.getElementById("inp1");
    const inp2 = document.getElementById("inp2");
    const btn = document.getElementById("btn");

    const sumCell = document.querySelector(".sumVal");
    const productCell = document.querySelector(".productVal");
    const divisionCell = document.querySelector(".divisonValue");

    btn.addEventListener("click", function () {
        const num1 = parseFloat(inp1.value);
        const num2 = parseFloat(inp2.value);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers in both fields.");
            return;
        }

        sumCell.textContent = num1 + num2;
        productCell.textContent = num1 * num2;
        divisionCell.textContent = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by 0";
    });
});
