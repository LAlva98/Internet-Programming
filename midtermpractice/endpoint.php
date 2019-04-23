<?php

function getDatabaseConnection($dbname = "midterm"){
  $host = "localhost";
  $username = "luisalva98";
  $password = ""; 
  
  $dbConnect = new PDO("mysql:host = $host; dbname = $dbname", $username, $password); 
  
  $dbConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
  
  return $dbConnect; 
  
}
 
?>