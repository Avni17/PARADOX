<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$UserEmail = $decodedData['email'];
$hdays=$decodedData['history'];
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
    $SQL = "SELECT pid,count(*) AS total FROM task WHERE eid ='$id' group by pid";
    $exeSQL = mysqli_query($con, $SQL);
    // while($row = mysqli_fetch_array($exeSQL))
    // {
        
    //     $sum=$sum+$row['time'];
    // }
    
    while($row = mysqli_fetch_array($exeSQL))
    {
        $pi=$row['pid'];
        $SQL = "SELECT count(*) as complete FROM task WHERE eid ='$id' and status='yes' and pid='$pi'";
        $exeSQL1 = mysqli_query($con, $SQL);
        $row1=mysqli_fetch_array($exeSQL1);
        $SQL = "SELECT name FROM project WHERE pid='$pi'";
        $exeSQL2 = mysqli_query($con, $SQL);
        $row2=mysqli_fetch_array($exeSQL2);
        $p=(($row1['complete']*100)/$row['total']);
        $response[]=array("complete"=>$p,"task"=>($row2['name']));
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