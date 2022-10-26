import {sum} from "./modules/math.js"
import {sub} from "./modules/math.js"


function numberSum() {
    let a = document.getElementsByClassName('fristNumber');
    let b = document.getElementsByClassName('lastnumber');
    let text = document.getElementsByClassName('lesson1')
    // return 
    text.interHTML = 'Tổng của hai số ' + a + ' và ' + b + 'là:'
    // text.interHTML = a + ' + ' + b + ' = ' + sum(a, b);
    console.log(a);
    console.log(b);
    console.log(sum(a, b));
}