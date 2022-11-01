const sum = (a, b) => a + b;
const sub = (a, b) => a - b ;
const reverse = (str) => str.split("").reverse().join(""); 
const uniq = (arr) => {return [... new Set(arr)]} // tạo mảng mới là mảng rút gọn bỏ đi các phần tử trùng lặp
const max_X = (arr) => arr.

//  Bài 0
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

// Bài 1
function reverseText() {
    let str = document.getElementsByClassName('fristtext')[0].value;
    let text = document.createElement('p');
    text.innerText = 'Kết quả đảo ngược của chuỗi ' + str + ' là : ' + reverse(str);
    document.getElementsByClassName('homework__item')[1].appendChild(text);
}

// bài 2 + 3
function compact() {
    let arr = document.getElementsByClassName('fristarr')[0].value.split(",");
    let text = document.createElement('p');
    text.innerText = 'Mảng mới rút gọn còn là : ' + uniq(arr);
    document.getElementsByClassName('homework__item')[2].appendChild(text);   
}


function maxN(arr) {
    let obj = {
        obj.key = 
    }
    
}


// bài 1 : cho 1 mảng n số nguyên, đếm có bao nhiêu số khác nhau, mỗi số xuất hiện bao lần

// function post1(array) {
//     var arr = array;
//     var a = arr.length;
//     for ( let i = 1; i < a; i++)  {
//         for ( let i = 1; i < arr.length; i++) {
//             let x = arr[0];
//             let y = [];
//             let z = [x];
           
//             for (let j = 1; j < arr.length; j++) {            
//                 y[0] = x;
//                 if (x === arr[j]) {
//                     y = y.concat(arr[j]) ;                             
//                 } else {
//                     z = z.concat(arr[j]);                       
//                 }
//             }
//             z.shift();
//             arr = z;
//             console.log(x + ' có số lần xuất hiện là : ' + y.length);
//         }
        
//     }

// }

// post1([1, 5, 6, 8, 5, 9, 4, 6, 7, 1, 5, 9, 7, 5, 6, 4, 8]);




// Bài 2: nhập 1 số nguyên dương n, tìm chữ số lớn nhất.

// function maxN(numbers) {
//     var x = numbers; // lây số tự nhiên n vào biến
//     var y = x.toString(); // chuyển số sang chuỗi
//     // console.log(typeof x);
//     // console.log(y.length);
//     var a = [];     // khai bao 1 mang trống
//     for (let i = 0 ; i < y.length; i++) { // vòng lặp đẻ tạo mảng từ các chữ số
//         var e = y.charAt(i);        // tách từng chữ để lấy vào mảng
//         var f = parseInt(e);        // chuyển chuỗi thành số
//         // console.log(typeof f);
//         a[i] = f;                   // lấy giá trị cho mảng
//     }
//     // console.log(a);
//     var max = a[0];                 // lấy giá trị đầu tiên của mảng làm giá trị lớn nhất
//     for (let i = 1; i < y.length; i++) { // chạy các giá trị còn lại
//         if (max < a[i]) {               // so sánh giá trị đó với giá trị lớn nhất nếu thỏa mãn thì chọn giá trị đó làm max
//             max = a[i];
//         }
//     }
//     console.log('Chữ số lớn nhất trong số nguyên dương ' + x + ' là : ' + max);  // in ra kết quả
// }

// maxN(542687525400);





