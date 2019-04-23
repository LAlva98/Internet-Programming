

<?php

function getDatabaseConnection($dbname = "poll_database"){
    $host = "localhost";
    $username = "luisalva98";
    $password = "";
    
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    return $dbConn;
}

?>

