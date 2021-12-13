<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$UserEmail = $decodedData['email'];
// $UserEmail = 'john32@gmail.com';

$SQL = "SELECT id FROM employee WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($con, $SQL);
$checkid =  mysqli_num_rows($exeSQL);
$response[]=array();
$sum=0;
if ($checkid != 0) 
{
    $arrayu = mysqli_fetch_array($exeSQL);
    $id=$arrayu['id'];
    $SQL = "SELECT SUM(TIMESTAMPDIFF(SECOND, startDate, endDate)) AS time FROM calendar WHERE eid =1 group by project_name,task";
    $exeSQL = mysqli_query($con, $SQL);
    while($row = mysqli_fetch_array($exeSQL))
    {
        
        $sum=$sum+$row['time'];
    }
    $SQL = "SELECT SUM(TIMESTAMPDIFF(SECOND, startDate, endDate)) AS time,task,project_name FROM calendar WHERE eid =1 group by project_name,task";
    $exeSQL = mysqli_query($con, $SQL);
    while($row = mysqli_fetch_array($exeSQL))
    {
        $p=(($row['time']*100)/$sum);
        $response[]=array("time"=>$p,"task"=>($row['task'].' in '.$row['project_name']));
    }
    
} 
else {
    $Message = "No account yet";
    
}
array_shift($response);
// $response[] = array("Message" => $Message);

echo json_encode($response);
mysqli_close($con);
?>