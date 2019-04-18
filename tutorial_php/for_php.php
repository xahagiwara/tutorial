<?php
//for 引数の中に　データ宣言　判定式　ループ前処理　の引数を書く
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x";
    echo "\n";
}

//forech 配列の要素の全てループする
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
    echo "$value";
    echo "\n";
}

//foreach ($arr as $key => $value)
//で連想配列のキーを取得しながらループができる
?>