
<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$response[]=array();

$pid=mt_rand();
$sql1="INSERT INTO project VALUES (pid,'$decodedData[start_date]','$decodedData[end_date]','$decodedData[managerid]')";
$sql2="INSERT INTO task VALUES ('$decodedData[eid]',pid,0,'$decodedData[task]')";
$sql3="INSERT INTO team VALUES ('$decodedData[eid]',pid)";
$sql4="INSERT INTO student VALUES ('$decodedData[name]',$decodedData[id],$decodedData[cgpa])";

if (mysqli_query($con,$sql1) and mysqli_query($con,$sql2) and mysqli_query($con,$sql3) and mysqli_query($con,$sql4))
{
    $Message ="Data inserted";
}
else
{
    $Message ="Error inserting values: " ;
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>