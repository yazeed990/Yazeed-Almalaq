// This is JS

const body = document.querySelector('body' );
const colorInput = document.getElementById('color-picker');
const colorDiv = document.querySelector('.color-div');
const hiddenText = document.querySelector('.color-div p');
const resetBtn = document.querySelector(".color-div button");
const playBtn = document.getElementById('play-game');


function playGame () {

    colorDiv.style.display = 'block';
    playBtn.style.display = 'none';

}

function changeColor () {
    const selectedColor = colorInput.value;
    body.style.background = selectedColor;
    resetBtn.style.display = 'block';
    hiddenText.style.display = 'block';
    colorInput.style.display = 'none';

}

function resetColor () {
    body.style.background = 'white';
    colorInput.style.display = 'block';
    hiddenText.style.display = 'none';
    resetBtn.style.display = 'none';
    colorDiv.style.display = 'none'
    playBtn.style.display = 'block';
}
