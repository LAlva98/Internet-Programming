

<!DOCTYPE html>
<html>
    <head>
        <title> </title>
    </head>
    <body>
        
        <?php
        // $n = 20943;
        // $n = number_format($n,2); 
        // echo "<div>$n </div>";

        // $n = rand(5,15);   
        // echo $n  . "<br><br>";
        
        // $avg = 0; 
        // $sum = 0; 
        // echo "<h1>Odd or Even Numbers</h1>";
        // for($i = 0; $i < 10; $i++){
        //     $n = rand(0,100);
        //     $sum +=$n;
        //     $avg += $n; 
        //     if($n % 2 == 0){
        //         echo "<div>$n      even</div>";
        //     }else{
        //         echo "<div>$n      odd</div>";
        //     }
            
            
        // }
        // $avg = $avg/ 9;
        // $avg = number_format($avg,2);
        // echo "<br>SUM: $sum <br>";
        // echo "<br>AVG: $avg <br>";
        
        $weekdays = array();
        $weekdays[] = "M";
        $weekdays[] = "T"; 
        array_push($weekdays,"W"); 
        echo "Displaying values using var_dump:";
        var_dump($weekdays);
        echo "<br><br>";
        echo "Displaying values using print_r:";
        print_r($weekdays);

        ?>
    
    </body>
</html>