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
    $SQL = "SELECT DISTINCT t.pid as pid  FROM task t,project p WHERE t.pid=p.pid and eid = '$id' group by t.pid order by p.starttime DESC,DATEDIFF(endTime,CURRENT_DATE()) DESC";
    $exeSQL = mysqli_query($con, $SQL);
    while($row = mysqli_fetch_array($exeSQL))
    {
        $ppid=$row['pid'];
        $SQL = "SELECT startTime,endTime FROM project WHERE pid = '$ppid'";
        $result = mysqli_query($con, $SQL);
        $f=mysqli_fetch_array($result);
        $SQL1 = "SELECT DATEDIFF(endTime,CURRENT_DATE()) as days,name FROM project WHERE pid = '$ppid'";
        $result1 = mysqli_query($con, $SQL1);
        $SQL2="select count(*) from task where pid='$ppid' and status='yes'";
        $result2 = mysqli_query($con, $SQL2);
        
        $f1=mysqli_fetch_array($result2);
        $SQL3="select count(*) from task where pid='$ppid' ";
        $result3 = mysqli_query($con, $SQL3);
      
        $f2=mysqli_fetch_array($result3);
        
        $p=floor(($f1['count(*)']* 100)/$f2['count(*)']);
        
        
        $d=mysqli_fetch_array($result1);
        if($d['days']>0)
        $response[]=array("starttime"=>$f['startTime'],"days"=>$d['days'].' Days Left',"progress"=>$p,"pid"=>$ppid,"name"=>$d['name'],"nod"=>$d['days']);
        else
        $response[]=array("starttime"=>$f['startTime'],"days"=>'Deadline Reached',"progress"=>$p,"pid"=>$ppid,"name"=>$d['name'],"nod"=>$d['days']);
    }
    
} 
else {
    $Message = "No account yet";
    
}
array_shift($response);
// $response[] = array("Message" => $Message);
// $p  = array_column($response, 'pid');
// $ds  = array_column($response, 'nod');
// array_multisort($p, SORT_DESC,$response);

echo json_encode($response);
mysqli_close($con);
?>