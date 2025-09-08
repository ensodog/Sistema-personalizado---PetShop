let op1 = 0,
  op2 = 0,
  op3 = 0,
  op4 = 0,
  op5 = 0,
  op6 = 0;
function darkmode() {
  document.body.classList.toggle("darkmode");
}
function cart(op) {
  if (op == 1) {
    op1++;
    let itemHTML =
      '<div class="card"><p class="lead fw-bold text-center">Banho</p><div class="card-body"><p class="lead text-center">Deixe seu pet limpo, cheiroso e com pelos macios com nosso banho especial.</p></div></div>' +
      op1;
    document.getElementById("lista").innerHTML = itemHTML;
  }
}
