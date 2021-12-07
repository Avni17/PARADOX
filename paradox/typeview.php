<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$UserEmail = $decodedData['email'];
$p=$decodedData['pid'];

$SQL = "SELECT id FROM employee WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($con, $SQL);
$checkid =  mysqli_num_rows($exeSQL);
$response[]=array();
if ($checkid != 0) 
{
    $arrayu = mysqli_fetch_array($exeSQL);
    $eid=$arrayu['id'];
    $SQL = "SELECT type FROM task WHERE pid='$p' and eid = '$eid' and status='no'";
    $exeSQL = mysqli_query($con, $SQL);
    while($row = mysqli_fetch_array($exeSQL))
    {
        $response[]=array("type"=>$row['type']);
    }
    
} 
else {
    $Message = "No account yet";
    
}
array_shift($response);
// $response[] = array("Message" => $Message);

echo json_encode($response);
?>