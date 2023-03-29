<?php session_start();
if(empty($_SESSION['id'])):
header('Location:login.php');
endif;?>

<!DOCTYPE html>
<html>
<head>
    <title>Home page</title>
</head>
<body>

	<a href="logout process.php"><div style="float:right"><button>Logout</button></div></a>

    <h1>Welcome...!</h1>


</body>
</html>