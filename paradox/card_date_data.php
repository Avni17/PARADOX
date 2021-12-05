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
if ($checkid != 0) 
{
    $arrayu = mysqli_fetch_array($exeSQL);
    $id=$arrayu['id'];
    $SQL = "SELECT pid,type FROM task WHERE eid = '$id'";
    $exeSQL = mysqli_query($con, $SQL);
    while($row = mysqli_fetch_array($exeSQL))
    {
        $ppid=$row['pid'];
        $SQL = "SELECT startTime,endTime FROM project WHERE pid = '$ppid'";
        $result = mysqli_query($con, $SQL);
        $f=mysqli_fetch_array($result);
        $SQL1 = "SELECT DATEDIFF(endTime,CURRENT_DATE()) as days FROM project WHERE pid = '$ppid'";
        $result1 = mysqli_query($con, $SQL1);
        $d=mysqli_fetch_array($result1);
        $response[]=array("starttime"=>$f['startTime'],"days"=>$d['days'],"task"=>$row['type']);
    }
    
} 
else {
    $Message = "No account yet";
    
}
array_shift($response);
// $response[] = array("Message" => $Message);

echo json_encode($response);
?>