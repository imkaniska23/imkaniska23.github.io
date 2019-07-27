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
$council1=$_POST['prcouncilpref1'];
$rolepref1=$_POST['agencyrolepref1'];
$agencypref1=$_POST['agencypref1'];
$council2=$_POST['prcouncilpref2'];
$rolepref2=$_POST['agencyrolepref2'];
$agencypref2=$_POST['agencypref2'];
$experience=mysqli_real_escape_string($connect,$_POST['munex']);


if ($name=='' || $college=='' || $city=='' || $contact=='' || $email=='' || $council1=='' || $rolepref1=='' || $agencypref1=='' || $council2=='' || $rolepref2=='' || $agencypref2=='' || $experience=='')
{
	echo "Please fill the empty field.";
}
else
{
	mysqli_query($connect,"INSERT INTO press (name, college, city, contact, email, council1, rolepref1,agencypref1, council2, rolepref2, agencypref2, experience)
		        VALUES ('$name','$college','$city','$contact','$email','$council1','$rolepref1','$agencypref1','$council2','$rolepref2','$agencypref2','$experience')");
}
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<p>Participant Added</p>";
	echo "<a href='index.html'>Go Back</a>";
} else {
	echo "Participant NOT Added<br />";
	echo mysqli_error ($connect);
}
?>

