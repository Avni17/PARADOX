<?php
include ("database.php");

//date_default_timezone_set('Asia/Kolkata'); 
//echo date("Y-m-d H:i:s"); 
$todaydate = date('Y-m-d');
$progress = "select * from project where startTime<='$todaydate' and endTime>='$todaydate'";

$result = $con -> query($progress);
//$row = $result -> fetch_array(MYSQLI_NUM);
$rowcount=mysqli_num_rows($result);
printf("Result set has %d rows.\n",$rowcount);

$upcoming = "select * from project where startTime>='$todaydate'";

$result = $con -> query($upcoming);
//$row = $result -> fetch_array(MYSQLI_NUM);
$rowcount=mysqli_num_rows($result);
printf("Result set has %d rows.\n",$rowcount);

$total = "select * from project";

$result = $con -> query($total);
//$row = $result -> fetch_array(MYSQLI_NUM);
$rowcount=mysqli_num_rows($result);
printf("Result set has %d rows.\n",$rowcount);


?>