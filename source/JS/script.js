'use strict';

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

/* window.addEventListener(`load`, function () {

    const body = document.querySelector(`body`);
    const allFullscreen = document.querySelectorAll(`.fullscreen`);

    let fullscreenSpanTrue = [];

    allFullscreen.forEach(item => {

        if (item.querySelector(`span`)) {
            fullscreenSpanTrue.push(item.querySelector(`span`));



        }

    });



    for (let i = 0; i < fullscreenSpanTrue.length; i++) {
        const span = fullscreenSpanTrue[i];
        let num = i + 1;
        span.textContent = `${num}`;

        if (i % 2) {
            span.classList.add(`_black`);
        }

    }



}, { once: true, capture: false, passive: true });



let numbers = Array.from(Array(1000 + 1).keys());
numbers.shift()
let sumNumbers = 0;



for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num % 3 == 0 || num % 3 == 0) {
        sumNumbers += num;
    }

}
console.log(sumNumbers); */




/* let number = 0;

number = prompt(`Введите число`,"");

if(Number(number)){
   console.log(checkNumberEvenOrOdd(number)); 
}

function checkNumberEvenOrOdd(num){

if(num%2===0){
    return "Even";
}
else if(!(num%2===0)){
return "Odd";
}

} */




let string = "HELLO popka";

word180deg(string);

function word180deg(word){
    let arrayStr = [];
    
    for (let i = 0; i < word.length; i++) {
    
    
        let elem = word[i];
    
        arrayStr.unshift(elem);

    }
    word =  arrayStr.join("");

    string=word;

}



console.log(string);


word180deg(string);
console.log(string);
