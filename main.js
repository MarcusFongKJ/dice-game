const rollButton = document.querySelector('#roll-dice');
const oneDice = document.querySelector('#one');
const twoDice = document.querySelector('#two');
const threeDice = document.querySelector('#three');
const fourDice = document.querySelector('#four');
const fiveDice = document.querySelector('#five');
const sixDice = document.querySelector('#six');
const diceContainer = document.querySelector('.dice-container');

function getDiceNum() {
    return Math.floor(Math.random() * 6) + 1;
}

function getDiceImg() {
    let diceNum = getDiceNum();
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

function removeDice() {
    while (diceContainer.firstChild) {
    diceContainer.removeChild(diceContainer.firstChild);
    }
}

function createLeftDie() {
    let dice = document.createElement('div');
    dice.className = 'col-6 d-flex justify-content-end';
    let dice_img = document.createElement('img');
    dice_img.src = './images/dice1.png';
    dice_img.alt = 'dice 1';
    dice_img.id = 'die';
    dice.appendChild(dice_img);
    return dice;
}

function createRightDie() {
    let dice = document.createElement('div');
    dice.className = 'col-6 d-flex justify-content-start';
    let dice_img = document.createElement('img');
    dice_img.src = './images/dice1.png';
    dice_img.alt = 'dice 1';
    dice_img.id = 'die';
    dice.appendChild(dice_img);
    return dice;
}


rollButton.addEventListener('click', function() {
    let allDice = document.querySelectorAll('#die');
    allDice.forEach(function(dice) {
        dice.replaceWith(getDiceImg());
    });
})

oneDice.addEventListener('click', function() {
    removeDice();

    let dice = document.createElement('div');
    dice.className = 'col';
    let dice_img = document.createElement('img');
    dice_img.src = './images/dice1.png';
    dice_img.alt = 'dice 1';
    dice_img.id = 'die';
    dice.appendChild(dice_img);
    diceContainer.appendChild(dice);
});

twoDice.addEventListener('click', function() {
    removeDice();

    let dice1 = document.createElement('div');
    dice1.className = 'col-6 d-flex justify-content-end';
    let dice_img1 = document.createElement('img');
    dice_img1.src = './images/dice1.png';
    dice_img1.alt = 'dice 1';
    dice_img1.id = 'die';
    dice1.appendChild(dice_img1);
    diceContainer.appendChild(dice1);

    let dice2 = document.createElement('div');
    dice2.className = 'col-6 d-flex justify-content-start';
    let dice_img2 = document.createElement('img');
    dice_img2.src = './images/dice1.png';
    dice_img2.alt = 'dice 1';
    dice_img2.id = 'die';
    dice2.appendChild(dice_img2);
    diceContainer.appendChild(dice2);
    
});

threeDice.addEventListener('click', function() {
    removeDice();

    let dice1 = document.createElement('div');
    dice1.className = 'col-6 d-flex justify-content-end';
    let dice_img1 = document.createElement('img');
    dice_img1.src = './images/dice1.png';
    dice_img1.alt = 'dice 1';
    dice_img1.id = 'die';
    dice1.appendChild(dice_img1);
    diceContainer.appendChild(dice1);

    let dice2 = document.createElement('div');
    dice2.className = 'col-6 d-flex justify-content-start';
    let dice_img2 = document.createElement('img');
    dice_img2.src = './images/dice1.png';
    dice_img2.alt = 'dice 1';
    dice_img2.id = 'die';
    dice2.appendChild(dice_img2);
    diceContainer.appendChild(dice2);

    let dice3 = document.createElement('div');
    dice3.className = 'col-12 d-flex justify-content-center';
    let dice_img3 = document.createElement('img');
    dice_img3.src = './images/dice1.png';
    dice_img3.alt = 'dice 1';
    dice_img3.id = 'die';
    dice3.appendChild(dice_img3);
    diceContainer.appendChild(dice3);
});

fourDice.addEventListener('click', function() {
    removeDice();

    let dice1 = document.createElement('div');
    dice1.className = 'col-6 d-flex justify-content-end';
    let dice_img1 = document.createElement('img');
    dice_img1.src = './images/dice1.png';
    dice_img1.alt = 'dice 1';
    dice_img1.id = 'die';
    dice1.appendChild(dice_img1);
    diceContainer.appendChild(dice1);

    let dice2 = document.createElement('div');
    dice2.className = 'col-6 d-flex justify-content-start';
    let dice_img2 = document.createElement('img');
    dice_img2.src = './images/dice1.png';
    dice_img2.alt = 'dice 1';
    dice_img2.id = 'die';
    dice2.appendChild(dice_img2);
    diceContainer.appendChild(dice2);

    let dice3 = document.createElement('div');
    dice3.className = 'col-6 d-flex justify-content-end';
    let dice_img3 = document.createElement('img');
    dice_img3.src = './images/dice1.png';
    dice_img3.alt = 'dice 1';
    dice_img3.id = 'die';
    dice3.appendChild(dice_img3);
    diceContainer.appendChild(dice3);

    let dice4 = document.createElement('div');
    dice4.className = 'col-6 d-flex justify-content-start';
    let dice_img4 = document.createElement('img');
    dice_img4.src = './images/dice1.png';
    dice_img4.alt = 'dice 1';
    dice_img4.id = 'die';
    dice4.appendChild(dice_img4);
    diceContainer.appendChild(dice4);
});

fiveDice.addEventListener('click', function() {
    removeDice();

    let dice1 = document.createElement('div');
    dice1.className = 'col-4 d-flex justify-content-end';
    let dice_img1 = document.createElement('img');
    dice_img1.src = './images/dice1.png';
    dice_img1.alt = 'dice 1';
    dice_img1.id = 'die';
    dice1.appendChild(dice_img1);
    diceContainer.appendChild(dice1);

    let dice2 = document.createElement('div');
    dice2.className = 'col-4 d-flex justify-content-center';
    let dice_img2 = document.createElement('img');
    dice_img2.src = './images/dice1.png';
    dice_img2.alt = 'dice 1';
    dice_img2.id = 'die';
    dice2.appendChild(dice_img2);
    diceContainer.appendChild(dice2);

    let dice3 = document.createElement('div');
    dice3.className = 'col-4 d-flex justify-content-start';
    let dice_img3 = document.createElement('img');
    dice_img3.src = './images/dice1.png';
    dice_img3.alt = 'dice 1';
    dice_img3.id = 'die';
    dice3.appendChild(dice_img3);
    diceContainer.appendChild(dice3);

    let dice4 = document.createElement('div');
    dice4.className = 'col-6 d-flex justify-content-end';
    let dice_img4 = document.createElement('img');
    dice_img4.src = './images/dice1.png';
    dice_img4.alt = 'dice 1';
    dice_img4.id = 'die';
    dice4.appendChild(dice_img4);
    diceContainer.appendChild(dice4);

    let dice5 = document.createElement('div');
    dice5.className = 'col-6 d-flex justify-content-start';
    let dice_img5 = document.createElement('img');
    dice_img5.src = './images/dice1.png';
    dice_img5.alt = 'dice 1';
    dice_img5.id = 'die';
    dice5.appendChild(dice_img5);
    diceContainer.appendChild(dice5);
});

sixDice.addEventListener('click', function() {
    removeDice();

    let dice1 = document.createElement('div');
    dice1.className = 'col-4 d-flex justify-content-end';
    let dice_img1 = document.createElement('img');
    dice_img1.src = './images/dice1.png';
    dice_img1.alt = 'dice 1';
    dice_img1.id = 'die';
    dice1.appendChild(dice_img1);
    diceContainer.appendChild(dice1);

    let dice2 = document.createElement('div');
    dice2.className = 'col-4 d-flex justify-content-center';
    let dice_img2 = document.createElement('img');
    dice_img2.src = './images/dice1.png';
    dice_img2.alt = 'dice 1';
    dice_img2.id = 'die';
    dice2.appendChild(dice_img2);
    diceContainer.appendChild(dice2);

    let dice3 = document.createElement('div');
    dice3.className = 'col-4 d-flex justify-content-start';
    let dice_img3 = document.createElement('img');
    dice_img3.src = './images/dice1.png';
    dice_img3.alt = 'dice 1';
    dice_img3.id = 'die';
    dice3.appendChild(dice_img3);
    diceContainer.appendChild(dice3);

    let dice4 = document.createElement('div');
    dice4.className = 'col-4 d-flex justify-content-end';
    let dice_img4 = document.createElement('img');
    dice_img4.src = './images/dice1.png';
    dice_img4.alt = 'dice 1';
    dice_img4.id = 'die';
    dice4.appendChild(dice_img4);
    diceContainer.appendChild(dice4);

    let dice5 = document.createElement('div');
    dice5.className = 'col-4 d-flex justify-content-center';
    let dice_img5 = document.createElement('img');
    dice_img5.src = './images/dice1.png';
    dice_img5.alt = 'dice 1';
    dice_img5.id = 'die';
    dice5.appendChild(dice_img5);
    diceContainer.appendChild(dice5);

    let dice6 = document.createElement('div');
    dice6.className = 'col-4 d-flex justify-content-start';
    let dice_img6 = document.createElement('img');
    dice_img6.src = './images/dice1.png';
    dice_img6.alt = 'dice 1';
    dice_img6.id = 'die';
    dice6.appendChild(dice_img6);
    diceContainer.appendChild(dice6);
});