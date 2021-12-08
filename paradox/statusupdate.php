
<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
// $response[]=array();
$flag = 1;
foreach ($decodedData['status'] as $key => $value) {
    if (!empty($value)) {
        $s = $value;
        $tid = $key;
        $sql = "update task set status='$value' where tid='$tid'";
        $result = mysqli_query($con, $sql);
        if (!$result) {
            $flag = 0;
        }
    }
}

if ($flag) {
    $Message = "Data updated";
} else {
    $Message = "Error updating values: ";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
mysqli_close($con);
?>