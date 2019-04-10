var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// === : データ型まで一緒の時にtrueを返す
var iceCream = 'チョコレート';
if (iceCream == 'チョコレート') {
  alert('やった、チョコレートアイス大好き！');    
} else {
  alert('あれれ、でもチョコレートは私のお気に入り......');    
}

//function 関数名(読み出し変数){}
function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

//関数名(値);
console.log(multiply(4,7));
console.log(multiply(20,20));
console.log(multiply(0.5,3));

//HTMLタグのクリックイベント発生
document.querySelector('html').onclick = function() {
    alert('痛っ! つつくのはやめて!');
}