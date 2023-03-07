<?php
// 获取计数器文件的路径
$countFile = "counter.txt";

// 如果计数器文件不存在，则创建一个并初始化为0
if (!file_exists($countFile)) {
    file_put_contents($countFile, "0");
}

// 读取计数器文件中的数字
$count = intval(file_get_contents($countFile));

// 将数字加1，并将结果写入计数器文件
$count++;
file_put_contents($countFile, strval($count));

// 返回计数器的值
echo $count;
?>
