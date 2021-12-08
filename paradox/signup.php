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
$UserFullName = ($decodedData['fullName']);
$UserGender = ($decodedData['gender']);
$Username = ($decodedData['username']);
//$radioVal = $_POST["gender];

$SQL = "SELECT username FROM employee WHERE email = '$UserEmail'";

$exeSQL = mysqli_query($con, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);


if ($checkEmail == 0) {
  
        
              //  $result = mysqli_query($con,"select count(*) FROM employee")  or die( mysqli_error($con));
               // $row = mysqli_num_rows($result);
               // $c = $row+2;
               // echo "$c";
                $SQL = "INSERT INTO employee (name, username, password, email, gender) VALUES('$UserFullName','$Username','$UserPW','$UserEmail','$UserGender')";
                // $exeSQL = mysqli_query($con, $SQL);
                if(mysqli_query($con, $SQL)){
                    $Message = "ACCOUNT CREATED.";
                } else{
                    $Message = "could not create account. " . mysqli_error($con);
                }

      
    }
 else {
    $Message = "THERE IS AN EXISTING ACCOUNT WITH THIS EMAIL";
    
}

$response[] = array("Message" => $Message);

echo json_encode($response);
mysqli_close($con);
?>