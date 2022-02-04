<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$text= $_POST['text'];

$name = htmlspecialchars($name);
$surname = htmlspecialchars($surname);
$email = htmlspecialchars($email);
$subject = htmlspecialchars($subject);
$text = htmlspecialchars($text);

$name = urldecode($name);
$surname = urldecode($surname);
$email = urldecode($email);
$subject = urldecode($subject);
$text = urldecode($text);

$name = trim($name);
$surname = trim($surname);
$email = trim($email);
$subject = trim($subject);
$text = trim($text);


echo $name;
echo "<br>";
echo $email;
if (mail("6alfabravo9@gmail.com", "Email from HR", "Name:".$name.". Surname: ".$surname.". E-mail: ".$email.". Subject: "$subject." Text: "$text." ,"From: cv@gmail.com \r\n"))
 {     echo "Letter is send";
} else {
    echo "Error";
}?>