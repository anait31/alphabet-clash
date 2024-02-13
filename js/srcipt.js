// function play() {
//     const hideItem = document.getElementById('home');
//     // console.log (hideItem);
//     hideItem.classList.add('hidden');

//     const showPlayNowScreen = document.getElementById('play-ground');
//     showPlayNowScreen.classList.remove('hidden');
// }

function continueGame() {
    //  Generate a random alphabet
    const alphabet = getARandomAlphabet()
    console.log (alphabet);
}

function play() {
    hideElement('home');
    showElement('play-ground');
    continueGame();
}