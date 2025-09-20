
function rollDice() {
    const getNumber = document.getElementById("getNumber");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for (let i = 1; i <= getNumber.value; i++)
    {
        const value = Math.ceil(Math.random() * 6);
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="dices">`)
    }
    diceResult.textContent = `dice ${values.join(', ')}`;

    diceImages.innerHTML = images.join(' ');

    // console.log(values);
}
