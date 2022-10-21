const sum = (a, b) => a + b;
const sub = (a, b) => a - b ;

// console.log('Tổng 2 số là : ' + sum(2, 4));

// bài 1 : cho 1 mảng n số nguyên, đếm có bao nhiêu số khác nhau, mỗi số xuất hiện bao lần

function post1(array) {
    var arr = array;
    var a = arr.length;
    for ( let i = 1; i < a; i++)  {
        for ( let i = 1; i < arr.length; i++) {
            let x = arr[0];
            let y = [];
            let z = [x];
           
            for (let j = 1; j < arr.length; j++) {            
                y[0] = x;
                if (x === arr[j]) {
                    y = y.concat(arr[j]) ;                             
                } else {
                    z = z.concat(arr[j]);                       
                }
            }
            z.shift();
            arr = z;
            console.log(x + ' có số lần xuất hiện là : ' + y.length);
        }
        
    }

}

post1([1, 5, 6, 8, 5, 9, 4, 6, 7, 1, 5, 9, 7, 5, 6, 4, 8]);




// Bài 2: nhập 1 số nguyên dương n, tìm chữ số lớn nhất.

function maxN(numbers) {
    var x = numbers; // lây số tự nhiên n vào biến
    var y = x.toString(); // chuyển số sang chuỗi
    // console.log(typeof x);
    // console.log(y.length);
    var a = [];     // khai bao 1 mang trống
    for (let i = 0 ; i < y.length; i++) { // vòng lặp đẻ tạo mảng từ các chữ số
        var e = y.charAt(i);        // tách từng chữ để lấy vào mảng
        var f = parseInt(e);        // chuyển chuỗi thành số
        // console.log(typeof f);
        a[i] = f;                   // lấy giá trị cho mảng
    }
    // console.log(a);
    var max = a[0];                 // lấy giá trị đầu tiên của mảng làm giá trị lớn nhất
    for (let i = 1; i < y.length; i++) { // chạy các giá trị còn lại
        if (max < a[i]) {               // so sánh giá trị đó với giá trị lớn nhất nếu thỏa mãn thì chọn giá trị đó làm max
            max = a[i];
        }
    }
    console.log('Chữ số lớn nhất trong số nguyên dương ' + x + ' là : ' + max);  // in ra kết quả
}

maxN(542687525400);

function reverseString(str) {
    debugger;
    let arr = str.split("");
    let arrReverse = arr.reverse();
    let newStr = arrReverse.join("");
    return newStr;
}

reverseString('hello work');

function uniq(arr) {
    let set = new Set(arr);
    console.log('set ', set);
    return [...new Set(arr)];
}
let result = uniq([1, 2, 3, 5, 4, 2, 6, 4]);
console.log(result);