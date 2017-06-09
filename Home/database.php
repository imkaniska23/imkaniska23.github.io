<?php
$connect=mysqli_connect("localhost","root","1234","nitmun");
 
if(mysqli_connect_errno($connect))
{
		echo 'Failed to connect';
}
 
?>