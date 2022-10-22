// Trắc nghiệm
// Câu 4 : giá trị sau cùng của obj?
const obj = { foo : 1};
obj.bar = 2 ;
console.log(obj); // {foo: 1, bar: 2}

// câu 5: 

const speed = 'quick';
// console.log('the' ${speed} 'brown fox jumps over the lazy .');

// câu 6
const obj2 = {

}
console.log(obj2[123]); //undefined

// câu 7
const array = [1, 2, 3];
const extension = [4, 5, 6];
// array = [...extension, ...array]; error
console.log(array); // 

// cau 8
function mystery(...params) {
    return params
}
let a = mystery(1, 23, 4);
console.log(a);

// cau 9
console.log([...[..."..."]].length); //3

// cau 10
let c = 12, b = 3;
[c, b] = [b, c];
// console.log([c, b]); [3, 12]

// cau 11
const obj3 = {
    name: "Mindx"
}
const sayHello = (x) => {
    let {name} = x
    name = "Code Intensive"
}
sayHello(obj3);
console.log(sayHello(obj3));

// cau 12
let arr = [1, 2, 3, 4, 5];
arr.map(item => {
    if (item % 2 === 0) {
        return item;
    } else {
        return item * 2;
    }
})
console.log(arr);

// cau 13
const total = arr.filter(item => item % 2 === 0)
                .reduce((value, item) => value + item, 10)
console.log(arr);

// Phần thực hành
//  Bài 1: viết function đâỏ ngược dòng chữ

function reverse(str) {
    let arr = str.split("");                        // chuyển chuỗi sang mảng
    let arr1 = arr.reverse();                       // lật ngược mảng
    let str2 = arr1.toString().replace(/,/g , '');  // chuyển mảng thành chuỗi và loại bỏ các dấu phẩy trong chuỗi
    console.log(str2);
}
reverse('abcdefkl');


// let reverse1 = 'str' => 'str'.split("").reverse().toString().replace(/,/g, '')

// reverse1('abcdefg');
// console.log(reveser1());

function reverse2(str) {
    let str1 = str.split("").reverse().toString().replace(/,/g , ''); // láy chuối 
    console.log(str1); 
}
reverse2('abcdefg');
// console.log(reverse2());

function reverse3(str) {
    let str3 = str.split("").reverse().join("");                                 // láy chuối
    console.log(str3);
}
reverse3('abcdefgokr');
// console.log(reverse3());
