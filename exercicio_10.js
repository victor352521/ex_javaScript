let numeroSecreto = Math.floor(Math.random() * 100) + 1

let qtdTentativas = 0

let verificarBotao = document.getElementById("verificarBotao");
let tentativaEntrada = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click" , function(){

    const tentativa = parseInt(tentativaEntrada.value);

    if(tentativa === numeroSecreto){
        dica.textContent = "Parabéns! Você acertou em ${qtdtentativas}";
        verificarBotao.disabled = true;
        
    } else if(tentativa < numeroSecreto){
        dica.textContent = "Tente um númro maior, animal!";
        qtdTentativas++;

    }else{
        dica.textContent = "Tente um número menor, burro!";
    }
})