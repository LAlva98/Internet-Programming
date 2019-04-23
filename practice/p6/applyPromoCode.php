<?php
$discounts = array();


$discounts["getFifty"] = .5; 
$discounts["halfPrice"] = .5; 
$discounts["sand30"] = .3; 
$discounts["spring30"] = .3; 
$discounts["beach"] = .2; 
$discounts["sunny"] = .2; 


echo json_encode($discounts); 


?>