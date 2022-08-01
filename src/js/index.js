/*
OBJETIVO 1 - quando clicarmos na seta de avançar, temos que mostrar o proximo card da lista;
passo1 - pegar o elemento html da seta avançar;
passo2 - identificar o clique do usuário na seta avançar;
passo3 - fazer aparecer o próximo cartão da lista;
passo4 - buscar o cartão que esta selecionado e esconder;
*/
//passo1 - pegar o elemento html da seta avançar;
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
  //passo3 - fazer aparecer o próximo cartão da lista;
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

//passo2 - identificar o clique do usuário na seta avançar;
btnAvancar.addEventListener("click", function () {
  if(cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
  
  cartaoAtual++;
  mostrarCartao(cartaoAtual);

  //passo4 - buscar o cartão que esta selecionado e esconder;
 
});

/*OBJETIVO 2 - quando clicarmos na seta de voltar, temos que mostrar o card anterior da lista;
passo1 - pegar o elemento html da seta voltar;
passo2 - identificar o clique do usuário na seta voltar;
passo3 - fazer aparecer o cartão anterior da lista;
passo4 - buscar o cartão que esta selecionado e esconder;
*/
btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);

});