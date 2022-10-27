import {sum} from "./modules/math.js"
import {sub} from "./modules/math.js"
import {reverse} from "./modules/math.js"


function numbersum() {
    let a = parseInt(document.getElementsByClassName('fristNumber')[0].value);
    let b = parseInt(document.getElementsByClassName('fristNumber')[1].value);
    let text = document.getElementsByClassName('lesson1')[0];
    text.innerText = 'Tổng của hai số ' + a + ' và ' + b + ' là: ' + a + ' + ' + b + ' = ' + sum(a, b);
}

function numbersub() {
    let a = parseInt(document.getElementsByClassName('fristNumber')[0].value);
    let b = parseInt(document.getElementsByClassName('fristNumber')[1].value);
    let text = document.getElementsByClassName('lesson1')[1];
    if (sub(a,b) >= 0) {
        text.innerText = 'Hiệu của hai số ' + a + ' và ' + b + ' là: ' + a + ' - ' + b + ' = ' + sub(a, b);
    } else {
        text.style.color = "red";
        text.innerText = a + ' nhỏ hơn ' + b + ' nên không trừ được.'
    }
}

function reverseText() {
    let string = parseInt(document.getElementsByClassName('fristtext')[0].value);
    let text = document.getElementsByClassName('lesson1')[2];
    text.innerText = 'Kết quả đảo ngược của chuỗi ' + string + ' là : ' + reverse(string);

}