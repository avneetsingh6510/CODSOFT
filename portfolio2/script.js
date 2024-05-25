const dynamicText = document.querySelector("h1 span");
const words = ["DEVELOPER...","CODER...","TECHNOPHILE..."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    
    if(!isDeleting && charIndex < currentWord.length){
        //IF CONDITION IS TRUE, TYPE THE NEXT CHARACTER
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if(isDeleting && charIndex > 0){
        //IF CONDITION IS TRUE, REMOVE THE PREVIOUS CHARACTER
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else{
        //IF WORD IS DELETED THEN SWITCH TO THE NEXT WORD
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;  
        setTimeout(typeEffect, 700);
    }
}

typeEffect();