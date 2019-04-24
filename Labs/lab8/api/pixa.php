<?php

//step1
$cSession = curl_init();

//step2
$apiKey = "12231350-57574c29eb391b44b270aae29";
$q = $_GET['usrIn'];

curl_setopt($cSession,CURLOPT_URL,"https://pixabay.com/api/?key=".$apiKey."&q=".$q);
curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cSession,CURLOPT_HEADER, false);

// curl_setopt($cSession, CURLOPT_HTTPHEADER, array(
//     "Accept: application/json",
//     "Content-Type: application/json",
//     "Authorization: Bearer $apiKey"
// ));


//step3
$results = curl_exec($cSession);
$err = curl_error($cSession);

//step4
curl_close($cSession);

//step5
echo $results;

// function refresh

?>