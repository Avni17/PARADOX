<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$UserEmail = $decodedData['email'];
$UserPW = ($decodedData['password']);
$SQL = "SELECT password FROM employee WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($con, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $UserPW) {
        $Message = "WRONG PASSWORD";
        
    } else {
        $Message = "Success";
      
    }
} else {
    $Message = "No account yet";
    
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>