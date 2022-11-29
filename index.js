// Code your solutions in this file
/*
for (let age = 30; age < 40; age++)  {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);
*/

const newArray = [];

function writeCards(array, strNames) {
    for (let count = 0; count < array.length; count++) {
        newArray.push(`Thank you, ${array[count]}, for the wonderful ${strNames} gift!`);
    }

    return newArray;
}

//console.log(writeCards(["Bob", "Billy", "Steve"], "Christmas"));

/*
const gifts = ["teady bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }

    return gifts;
}

wrapGifts(gifts);
*/

function countDown(someNum) {
    let i = someNum;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
//countDown(20);