const rollButton = document.querySelector('.roll-dice');

function getDiceNum() {
    return Math.floor(Math.random() * 6) + 1;
}

function getDiceImg() {
    let diceNum = getDiceNum();
    console.log(diceNum);
    let diceImg = document.createElement('img');
    diceImg.id = 'die';
    switch (diceNum) {
        case 1:
            diceImg.src = './images/dice1.png';
            diceImg.alt = 'dice 1';
            break;
        case 2:
            diceImg.src = './images/dice2.png';
            diceImg.alt = 'dice 2';
            break;
        case 3:
            diceImg.src = './images/dice3.png';
            diceImg.alt = 'dice 3';
            break;
        case 4:
            diceImg.src = './images/dice4.png';
            diceImg.alt = 'dice 4';
            break;
        case 5:
            diceImg.src = './images/dice5.png';
            diceImg.alt = 'dice 5';
            break;
        case 6:
            diceImg.src = './images/dice6.png';
            diceImg.alt = 'dice 6';
            break;
    };
    return diceImg;
}

rollButton.addEventListener('click', function() {
    let allDice = document.querySelectorAll('#die');
    allDice.forEach(function(dice) {
        dice.replaceWith(getDiceImg());
    });
});