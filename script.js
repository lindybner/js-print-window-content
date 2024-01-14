// var
const btnPrint = document.querySelector(".btn-print");

// fn
function printWindow() {
  window.print();
}

// listener
btnPrint.addEventListener("click", printWindow);
