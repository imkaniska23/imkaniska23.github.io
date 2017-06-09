<?php include 'database.php'; ?>

<?php
$name=$_POST['name1'];
$college=$_POST['institute1'];
$city=$_POST['city1'];
$contact=$_POST['contact1'];
$email=$_POST['email1'];
$council1=$_POST['councilpref1'];
$ca1=$_POST['country1'];
$ca2=$_POST['country2'];
$ca3=$_POST['country3'];
$council2=$_POST['councilpref2'];
$cb1=$_POST['c1'];
$cb2=$_POST['c2'];
$cb3=$_POST['c3'];
$exp=$_POST['munex'];

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
	echo "<a href='home.html'>Go Back</a>";
} else {
	echo "Participant NOT Added<br />";
	echo mysqli_error ($connect);
}
?>

