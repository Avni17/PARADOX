<?php
include ("database.php");


$total = "SELECT count(pid) FROM task t where pid in (select pid from project) ";// INNER JOIN employee e ON p.eid   = e.eid WHERE u.user_id = @AcertianUserId";

$result = $con -> query($total);
$row = $result -> fetch_array(MYSQLI_NUM);
//$rowcount=mysqli_num_rows($result);
//printf("Result set has %d rows.\n",$rowcount);
print_r($result);

?>