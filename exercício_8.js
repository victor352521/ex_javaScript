// Obtém a referência ao elemento HTML com o ID 'board' e a classe 'message'.
var board = document.getElementById('board');
var message = document.getElementById('message');

let jogadorAtual = 'X';
let cell = Array(9).fill('');
let gameover = false;

// Cria as células do tabuleiro e adiciona manipuladores de evento de clique a cada... 
for (let i = 0; i < 9; i++){
    let cell = document.createElement('div');
    cell.classList('cell');
    cell.addEventListener('click', () =>handleCellClick(i));
    board.appendChild(cell);
}

// Função que lida com o clique em uma célula.
function handleCellClick (index)