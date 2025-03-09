<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "your-email@gmail.com"; // Replace with your email
    $subject = "New Portfolio Contact Form Submission";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    $headers = "From: $email";
    
    mail($to, $subject, $email_content, $headers);
    
    // Sets the Content-Type header to 'application/json' to indicate that the response should be interpreted as JSON data.
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}?>
