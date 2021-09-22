<?php

/* ЭТОТ ФАЙЛ НУЖЕН ДЛЯ ЗАПОЛНЕНИЯ БАЗЫ ИГР */

$user = "dizzert";
$password = "megaPasswd1";
$database = "alphabet";
$table = "games";

try {

  $lettersArray = array("a","b","c","d","e","f","g","h","i","j","k","l",
  "m","n","o","p","q","r","s","t","u","v","w","x","y","z");

  $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);

  for ($l=0; $l < count($lettersArray); $l++) {
    // echo "<p>" . $lettersArray[$i] . "</p>";

    for ($i=0; $i <10 ; $i++) {
      $letter = $lettersArray[$l];
      $gameName = $letter . "_game_" . $i;
      // echo "<p>" . $gameName . "</p>";
      $db->query("INSERT INTO `games` (`game_id`, `game_letter`, `game_name`, `steam_appid`, `hltb_id`, `metacritic_url`) VALUES (NULL, '$letter' , '$gameName' , '0', '0', NULL) ");
    }

  }

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>
