
<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
// $response[]=array();
$e=$decodedData['email'];
$p=$decodedData['projectName'];
$sd=$decodedData['startD'];
$ed=$decodedData['endD'];
$sql1="select id from employee where email='$e'";
$result1=mysqli_query($con,$sql1);
$f1=mysqli_fetch_array($result1);
$eid=$f1['id'];
$flag=1;
$sql2="INSERT INTO project (name,dependencies,startTime,endTime,manager) VALUES ('$p',0,'$sd','$ed','$eid')";
$result2=mysqli_query($con,$sql2);
foreach ( $decodedData['values'] as $var ) 
{
    $m=$var['member'];
    $sql1="select id from employee where username='$m'";
$result1=mysqli_query($con,$sql1);
$f1=mysqli_fetch_array($result1);
$aeid=$f1['id'];
$sql="select pid from project where name='$p'";
$result2=mysqli_query($con,$sql);
$f2=mysqli_fetch_array($result2);
$ppid=$f2['pid'];
$t=$var['task'];
    $sql4="INSERT INTO task (eid,pid,status,type) VALUES ('$aeid','$ppid','no','$t')";
    $result4=mysqli_query($con,$sql4);
    $sql3="INSERT INTO team VALUES ('$aeid','$ppid')";
    $result3=mysqli_query($con,$sql3);
    if(!$result3 and !$result4)
    {
        $flag=0;
    }
}




if ($flag )
{
    $Message ="Data inserted";
}
else
{
    $Message ="Error inserting values: " ;
}

$response[] = array("Message" => $Message);

echo json_encode($response);
mysqli_close($con);
?>