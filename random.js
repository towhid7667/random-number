const randomValue = () => {

    let previousNumElement = document.getElementById('random-num');
    let randomNum = Math.floor(Math.random() * 1000);

    previousNumElement.innerText = randomNum;


}

document.getElementById('boom-btn').addEventListener('click', function () {
    randomValue();
})