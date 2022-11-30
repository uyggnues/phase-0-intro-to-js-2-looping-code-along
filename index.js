const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, expression) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${expression} gift!`);
    }
    return cards;
}
console.log(writeCards(names, 'surprise'));

function countDown(number) {
    for (let countDown = number; countDown >= 0; countDown--){
        console.log(countDown);
    }
}

