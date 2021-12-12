
<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
// $response[]=array();
$UserEmail = $decodedData['email'];
$flag = 1;
$SQL = "SELECT id FROM employee WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($con, $SQL);
$arrayu = mysqli_fetch_array($exeSQL);
$id = $arrayu['id'];
$SQL = "DELETE FROM calendar WHERE eid = '$id'";
$exeSQL = mysqli_query($con, $SQL);
$Message = "Error";
if ($exeSQL) {

    foreach ($decodedData['data'] as $var) {
        $t = $var['title'];
        $s = $var['startDate'];
        $e = $var['endDate'];
        $p = $var['Project_Name'];
        if (preg_match('/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/',$s)) {
            $sql2 = "INSERT INTO calendar (eid,task,startDate,endDate,Project_Name) VALUES ('$id','$t','$s','$e','$p')";
            $result2 = mysqli_query($con, $sql2);
            if (!$result2) {
                $flag = 0;
                // $Message =mysqli_error($con);
            }
        } else {
            $str = (explode(" ", $s));
            $m = $str[1];
            if ($m == 'Jan')
                $mm = '01';
            if ($m == 'Feb')
                $mm = '02';
            if ($m == 'Mar')
                $mm = '03';
            if ($m == 'Apr')
                $mm = '04';
            if ($m == 'May')
                $mm = '06';
            if ($m == 'Jun')
                $mm = '06';
            if ($m == 'Jul')
                $mm = '07';
            if ($m == 'Aug')
                $mm = '08';
            if ($m == 'Sep')
                $mm = '09';
            if ($m == 'Oct')
                $mm = '10';
            if ($m == 'Nov')
                $mm = '11';
            if ($m == 'Dec')
                $mm = '12';

            $date = array($str[3], $mm, $str[2]);
            $date = implode("-", $date);
            $s = $date . ' ' . $str[4];

            $str = (explode(" ", $e));
            $m = $str[1];
            if ($m == 'Jan')
                $mm = '01';
            if ($m == 'Feb')
                $mm = '02';
            if ($m == 'Mar')
                $mm = '03';
            if ($m == 'Apr')
                $mm = '04';
            if ($m == 'May')
                $mm = '06';
            if ($m == 'Jun')
                $mm = '06';
            if ($m == 'Jul')
                $mm = '07';
            if ($m == 'Aug')
                $mm = '08';
            if ($m == 'Sep')
                $mm = '09';
            if ($m == 'Oct')
                $mm = '10';
            if ($m == 'Nov')
                $mm = '11';
            if ($m == 'Dec')
                $mm = '12';

            $date = array($str[3], $mm, $str[2]);
            $date = implode("-", $date);
            $e = $date . ' ' . $str[4];
            
            $sql2 = "INSERT INTO calendar (eid,task,startDate,endDate,Project_Name) VALUES ('$id','$t','$s','$e','$p')";
            $result2 = mysqli_query($con, $sql2);
            if (!$result2) {
                $flag = 0;
                // $Message =mysqli_error($con);
            }
        }
    }
}





if ($flag) {
    $Message = "Data inserted";
} else {
    $Message = "Error";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
mysqli_close($con);
?>