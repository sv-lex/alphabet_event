<html>
    <head>
        <title>Alphabet</title>
        <meta charset="utf-8">
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()"></meta>
        <link href="./css/style.css" rel="stylesheet">
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
    </head>
    <body>

      <div class="gameslist">
        <img id="listBackFrame" src="../tmp/tablo.png">

        <?php
        $letter = !empty($_GET['letter']) ? $_GET['letter'] : 'логин не передан!';

        $user = "dizzert";
        $password = "megaPasswd1";
        $database = "alphabet";
        $table = "games";

        try {
          $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
          echo "<div class='listPosition'><table>";
          foreach($db->query("SELECT * FROM `games` WHERE `game_letter` = '$letter'") as $row) {
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
          echo "</table></div>";

        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }

        ?>

       </div>

    </body>
</html>
