<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
$UserEmail = $decodedData['email'];
$SQL = "SELECT username FROM employee WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($con, $SQL);
$checkid =  mysqli_num_rows($exeSQL);
$arrayu = mysqli_fetch_array($exeSQL);
$id = $arrayu['username'];
$Message = $id;
$response[] = array("Message" => $Message);
echo json_encode($response);
mysqli_close($con);
