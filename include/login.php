<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION["username"] = $_POST["username"];

    if (isset($_SESSION["redirect_to"])) {
        $redirect_to = $_SESSION['redirect_to'];
        unset($_SESSION['redirect_to']);
        header("Location: $redirect_to");
    }
    else
    {
        header("Location: ./../home.php");
    }

    exit();
}
?>
