<?php 

date_default_timezone_set("Asia/Shanghai");

$file = 'http://www.dcloud.io/docs/HBuilder.json?t='. date('Y-m-d-H');

$content = json_decode(file_get_contents($file));

$version = $content->win[1]->version;

$changelog = 'https://update.dcloud.net.cn/hbuilderx/changelog/' . $version .'.html';

header('Location:'.$changelog); 
