let part1 = prompt('ola q ase');
let part2 = document.getElementById('acompañante');
let finalText = document.getElementById('finalText');

part2.textContent = 'Estás haciendo ' + part1 + '?';

function isCorrect(){
    finalText.textContent = 'Que bien :)';
}

function isNotCorrect(){
    finalText.textContent = 'Que mal :(';
}