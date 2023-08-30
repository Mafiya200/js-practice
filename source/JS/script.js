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





