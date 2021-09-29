import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
const entry=localStorage.getItem('entry');
let result ='';
if(entry){
    result=entry;
}

const textArea = document.querySelector(".textarea--js");
const save = document.querySelector(".button-right--js");
save.addEventListener('click',() => {
    localStorage.setItem('entry', textarea.value);
})
const load = document.querySelector(".button-left--js");
load.addEventListener('click', ()=> {
    localStorage.getItem('entry');
})

    

     



