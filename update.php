<?php

$trail = $_POST['trail'];
$condition = $_POST['condition'];

$trailData = file_get_contents("trail-data.json");
$trailData = json_decode($trailData, true);

$trailData[$trail]['condition'] = $condition;

file_put_contents("trail-data.json", json_encode($trailData));

echo "Trail condition updated.";

?>