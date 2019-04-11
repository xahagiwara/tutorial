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

//イメージタグ
var myImage = document.querySelector('img');

//イメージ画像をクリックされるたびに画像が切り替わる
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png') {
    myImage.setAttribute ('src','https://cdn0.iconfinder.com/data/icons/jfk/512/chrome-512.png');
    console.log("true");
  } else {
    myImage.setAttribute ('src','https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png');
    console.log("false");
  }
}


//必要な各DOM要素の読み出し
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//名前を設定する関数の宣言
function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}

//WebStorage API(LocalStorage)を用いてnameを保存する
//true : nameが保存されている場合
//false : nameが保存されていない場合
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

//ボタンクリックイベント
myButton.onclick = function() {
  setUserName();
}