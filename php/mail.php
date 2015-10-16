<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject  = $_POST['subject'];
 
$to = 'vincentkubis.contact@gmail.com';
$message = 'Name: '.$name.'  Email: '.$email.'  Subject: '.$subject.'   Message: '.$message;
$headers = 'From: '.$email.'' . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Your email was sent!"; // success message
}else{
echo "Invalid Email, please provide an correct email.";
}
	
?>