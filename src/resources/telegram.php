<?php

$phoneChange = $_POST['phoneChange'];
$phoneRequest = $_POST['phoneRequest'];
$token = "5095821469:AAHD74irHKcaih5M_dlIS0RqefMKoZsGOqU"; 
$chat_id = "-765094552";
$arr = array(
  'Телефон: ' => $phoneChange,
  'Телефон 2: ' => $phoneRequest,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>