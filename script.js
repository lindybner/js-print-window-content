// var
const btnPrint = document.querySelector(".btn-print"); //gets print button from DOM

// fn
function printWindow() {
  window.print(); //calls built-in JS print window function
}

// listener
btnPrint.addEventListener("click", printWindow); //listening for print button click to trigger printWindow()
