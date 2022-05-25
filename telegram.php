<?php

/* https://api.telegram.org/bot1234567890123456789/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$checkBot = $_POST['checkBot'];
$checkBotResult = "";
if ($checkBot !== "") {
  $checkBotResult = "Пишет бот"; 
} else { $checkBotResult = " ";}


$name = $_POST['name'];
$phone = $_POST['tel'];
$info = $_POST['message'];

$token = "123123123123123123123";
$chat_id = "-123123123123";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'О проекте: ' => $info,
  '' => $checkBotResult
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks-page.html');
} else {
  echo "Error";
}
?>