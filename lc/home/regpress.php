<?php
$connect=mysqli_connect("localhost","lcnitd2","password","nitmun");
 
if(mysqli_connect_errno($connect))
{
		echo 'Failed to connect';
}
$name=$_POST['name2'];
$college=$_POST['institute2'];
$city=$_POST['city2'];
$contact=$_POST['contact2'];
$email=$_POST['email2'];
$role1=$_POST['agencyrolepref1'];
$agency1=$_POST['agencypref1'];
$agency2=$_POST['agencypref2'];
$exp=$_POST['munex'];

if ($name=='' || $college=='' || $city=='' || $contact=='' || $email=='' || $agency1=='' || $role1=='' || $agency2=='')
{
	echo "Please fill the empty field.";
}
else
{
	mysqli_query($connect,"INSERT INTO press (name, college, city, contact, email, role1, agency1, agency2, exp)
		        VALUES ('$name','$college','$city','$contact','$email','$role1','$agency1','$agency2','$exp')");
}
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<p>Participant Added</p>";
	echo "<a href='index.html'>Go Back</a>";
} else {
	echo "Participant NOT Added<br />";
	echo mysqli_error ($connect);
}
?>

