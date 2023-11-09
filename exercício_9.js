const mensagensDivertidas =
    [
        "Por que o padre só gosta de comer à noite? Porque a noite é uma criança KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
        "Era uma vez um cachorro de três pernas, ele foi mijar e caiu.",
        "Qual é a parte do Halloween favorita dos pedófilos? Entregas grátis.",
    ]

let botaoDivertido = document.getElementById("botaoDivertido")
let mensagensDivetida = document.getElementById("mensagemDivertida")

botaoDivertido.addEventListener('click', function(){
    //math.floor(x) retorna o menor número inteiro dentre o número "x"
    //math.random() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)]

    mensagemDivertida.textContent = mensagemAleatoria;
} )