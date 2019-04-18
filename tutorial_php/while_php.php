<?php
//while ループ処理
$x = 1;

while($x <= 5) {
    echo "while The number is: {$x}";
    echo "\n";
    $x++;
}

//while 判定を処理後にする
$x = 6;

do {
    echo "do The number is: $x";
    echo "\n";
    $x++;
} while ($x <= 5);

?>