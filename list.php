<html>
    <head>
        <title>Alphabet</title>
        <meta charset="utf-8">
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()"></meta>
        <link href="./css/style.css" rel="stylesheet">
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
    </head>
    <body>

      <?php
      $letter = !empty($_GET['letter']) ? $_GET['letter'] : 'логин не передан!';

      // $letter = !empty($_GET['letter']) ? $_GET['letter'];

      $user = "dizzert";
      $password = "megaPasswd1";
      $database = "alphabet";
      $table = "games";

      try {
        $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
        echo "<table>";
        foreach($db->query("SELECT * FROM `games` WHERE `game_letter` = '$letter'") as $row) {
            // echo "<td>" . $row['game_name'] . "</td>";
            echo "
            <tr>
              <td>" . $row['game_name'] . "</td>
              <td> / </td>
              <td> <a href='https://store.steampowered.com/app/" . $row['steam_appid'] . "'>steam</a> </td>
              <td> / </td>
              <td> <a href='https://howlongtobeat.com/game?id=" . $row['hltb_id'] . "'>hltb</a> </td>
              <td> / </td>
              <td> <a href='https://www.metacritic.com/game/pc/" . $row['metacritic_url'] . "'>metacritic</a> </td>
            </tr>";
        }
        echo "</table>";

      } catch (PDOException $e) {
          print "Error!: " . $e->getMessage() . "<br/>";
          die();
      }

      ?>

      <!-- <p> the letter is:  <?= $letter ?> </p> -->

    </body>
</html>