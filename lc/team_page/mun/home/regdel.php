<?php
$connect=mysqli_connect("localhost","lcnitd2","password","nitmun");
 
if(mysqli_connect_errno($connect))
{
		echo 'Failed to connect';
}
$name=mysqli_real_escape_string($connect,$_POST['name1']);
$college=mysqli_real_escape_string($connect,$_POST['institute1']);
$city=mysqli_real_escape_string($connect,$_POST['city1']);
$contact=mysqli_real_escape_string($connect,$_POST['contact1']);
$email=mysqli_real_escape_string($connect,$_POST['email1']);
$council1=mysqli_real_escape_string($connect,$_POST['councilpref1']);
$ca1=mysqli_real_escape_string($connect, $_POST['country1']);
$ca2=mysqli_real_escape_string($connect,$_POST['country2']);
$ca3=mysqli_real_escape_string($connect,$_POST['country3']);
$council2=mysqli_real_escape_string($connect,$_POST['councilpref2']);
$cb1=mysqli_real_escape_string($connect,$_POST['c1']);
$cb2=mysqli_real_escape_string($connect,$_POST['c2']);
$cb3=mysqli_real_escape_string($connect,$_POST['c3']);
$exp=mysqli_real_escape_string($connect,$_POST['munex']);

if ($name=='' || $college=='' || $city=='' || $contact=='' || $email=='' || $council1=='' || $ca1=='' || $ca2=='' || $ca3=='' || $council2=='' || $cb1=='' || $cb2=='' || $cb3=='')
{
	echo "Please fill the empty field.";
}
else
{
	mysqli_query($connect,"INSERT INTO delegate (name, college, contact, city, email, council1, council2, ca1, ca2, ca3, cb1, cb2, cb3, exp)
		        VALUES ('$name','$college','$contact','$city','$email','$council1','$council2','$ca1','$ca2','$ca3','$cb1','$cb2','$cb3','$exp')");
}
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<p>Participant Added</p>";
	echo "<a href='index.html'>Go Back</a>";
} else {
	echo "Participant NOT Added<br />";
	echo mysqli_error ($connect);
}
?>

