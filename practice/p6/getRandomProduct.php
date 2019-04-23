<?php

$item = array();
$item_array = array(); 

$item["product"] = "Microfiber Beach Towel"; 
$item["price"] = 40;
$item["qty"] = 2; 


array_push($item_array, $item);

$item["product"] = "Flip-flop Sandals"; 
$item["price"] = 30;
$item["qty"] = 5; 

array_push($item_array, $item);

$item["product"] = "Sunscreen 80SPF"; 
$item["price"] = 25;
$item["qty"] = 3; 

array_push($item_array, $item);

$item["product"] = "Plastic Flying Disc"; 
$item["price"] = 15;
$item["qty"] = 4; 

array_push($item_array, $item);

$item["product"] = "Beach Umbrella"; 
$item["price"] = 75;
$item["qty"] = 1; 

array_push($item_array, $item);


echo json_encode($item_array[rand(0,4)]);





// {product:"Microfiber Beach Towel", price:40, qty:2}

// {product:"Flip-flop Sandals", price:30, qty:5}

// {product:"Sunscreen 80SPF", price:25, qty:3}

// {product:"Plastic Flying Disc", price:15, qty:4}

// {product:"Beach Umbrella", price:75, qty:1}

?>