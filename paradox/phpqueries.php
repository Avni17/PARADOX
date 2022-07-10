<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$UserEmail = $decodedData['email'];
$SQL = "SELECT id FROM employee WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($con, $SQL);
$checkid =  mysqli_num_rows($exeSQL);
$response[]=array();
$todaydate = date('Y-m-d');
if ($checkid != 0) 
{
$arrayu = mysqli_fetch_array($exeSQL);
$id=$arrayu['id'];
$total = "SELECT DISTINCT t.pid as pid  FROM task t,project p WHERE t.pid=p.pid and eid = '$id'";
$result3 = $con -> query($total);
$rowcount3=mysqli_num_rows($result3);
$progress = "SELECT DISTINCT t.pid as pid  FROM task t,project p WHERE t.pid=p.pid and eid = '$id' and startTime<='$todaydate' and endTime>='$todaydate'";
$result1 = $con -> query($progress);
$rowcount1=mysqli_num_rows($result1);
$upcoming = "SELECT DISTINCT t.pid as pid  FROM task t,project p WHERE t.pid=p.pid and eid = '$id' and startTime>='$todaydate'";
$result2 = $con -> query($upcoming);
$rowcount2=mysqli_num_rows($result2);
// $total = "select * from project";
// $result3 = $con -> query($total);
// $rowcount3=mysqli_num_rows($result3);

$response[]=array("inprogress"=>$rowcount1);
$response[]=array("upcoming"=>$rowcount2);
$response[]=array("totalprojects"=>$rowcount3);
}
array_shift($response);

echo json_encode($response);
mysqli_close($con);

?>