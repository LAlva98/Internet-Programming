<?php
    
    include "dbConnection.php";
    
    $conn = getDatabaseConnection("poll_database");
    $sql = "DECLARE @IncrementValue int
            SET @IncrementValue = 1
            UPDATE poll_responce SET option1 = option1 + @IncrementValue";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($records);



?>