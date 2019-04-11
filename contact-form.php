<?php

$EmailFrom = $_POST['email'];
$EmailTo = "sales@blackcorerb.com";
$Subject = "Black Core New Message";
$Name = $_POST['name'];

$Subject = "Black Core New Message";
$Phone = $_POST['phone'];
$Email = $_POST['email']; 
$Message = $_POST['message'] . "\n\n" . 'Regards, ' . $_POST['name'] . '.';

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";

$Body .= "Subject: ";
$Body .= "Black Core New Message";
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
if ($success) {
// header("Location: /thanks.html");
 exit;
} else {
 header("Location: /error.html");
 exit;
}