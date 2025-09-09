let op1 = 0,
  op2 = 0,
  op3 = 0,
  op4 = 0,
  op5 = 0,
  op6 = 0;
let valor1 = 0,
  valor2 = 0,
  valor3 = 0,
  valor4 = 0,
  valor5 = 0,
  valor6 = 0;
function darkmode() {
  document.body.classList.toggle("darkmode");
}
function cart(op) {
  if (op == 1) {
    op1++;
    valor1 = 50.0 * op1;
    let item =
      '<div class="card col-12"><p class="lead fw-bold text-center">Banho</p><div class="card-body"><p class="lead text-center">Deixe seu pet limpo, cheiroso e com pelos macios com nosso banho especial.</p></div></div><div class="sessao col-12"><p class="lead">Quantidade: ' +
      op1 +
      " Preço total: R$" +
      valor1 +
      "</div";

    document.getElementById("item1").innerHTML = item;
  } else if (op == 2) {
    op2++;
    valor2 = 60.0 * op2;
    let item =
      '<div class="card col-12"><p class="lead fw-bold text-center">Tosa</p><div class="card-body"><p class="lead text-center">Corte de pelos feito com carinho para manter seu pet lindo e confortável.</p></div></div><div class="sessao col-12"><p class="lead">Quantidade: ' +
      op2 +
      " Preço total: R$" +
      valor2 +
      "</div";

    document.getElementById("item2").innerHTML = item;
  } else if (op == 3) {
    op3++;
    valor3 = 100.0 * op3;
    let item =
      '<div class="card col-12"><p class="lead fw-bold text-center">Banho e Tosa</p><div class="card-body"><p class="lead text-center">Serviço completo para o bem-estar e beleza do seu pet em um só pacote.</p></div></div><div class="sessao col-12"><p class="lead">Quantidade: ' +
      op3 +
      " Preço total: R$" +
      valor3 +
      "</div";
    document.getElementById("item3").innerHTML = item;
  } else if (op == 4) {
    op4++;
    valor4 = 110.0 * op4;
    let item =
      '<div class="card col-12"><p class="lead fw-bold text-center">Banho e Tosa Higiênica</p><div class="card-body"><p class="lead text-center">Limpeza e cuidados essenciais para a saúde e higiene do seu animalzinho.</p></div></div><div class="sessao col-12"><p class="lead">Quantidade: ' +
      op4 +
      " Preço total: R$" +
      valor4 +
      "</div";
    document.getElementById("item4").innerHTML = item;
  } else if (op == 5) {
    op5++;
    valor5 = 85.0 * op5;
    let item =
      '<div class="card col-12"><p class="lead fw-bold text-center">Banho e Tosa Bebê</p><div class="card-body"><p class="lead text-center">Atendimento delicado para filhotes, com todo cuidado que eles merecem.</p></div></div><div class="sessao col-12"><p class="lead">Quantidade: ' +
      op5 +
      " Preço total: R$" +
      valor5 +
      "</div";
    document.getElementById("item5").innerHTML = item;
  } else if (op == 6) {
    op6++;
    valor6 = 150.0 * op6;
    let item =
      '<div class="card col-12"><p class="lead fw-bold text-center">Pacote Premium</p><div class="card-body"><p class="lead text-center">Cuidado completo com banho, tosa e tratamentos especiais para deixar seu pet impecável.</p></div></div><div class="sessao col-12"><p class="lead">Quantidade: ' +
      op6 +
      " Preço total: R$" +
      valor6 +
      "</div";
    document.getElementById("item6").innerHTML = item;
  }
  let total = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;
  let escreverTotal =
    '<div class="sessao col-12"><p class="lead text-center">Valor total: R$' +
    total +
    "</p></div>";
  document.getElementById("total").innerHTML = escreverTotal;
}
