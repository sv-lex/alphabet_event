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
      $login = !empty($_GET['user']) ? $_GET['user'] : 'логин не передан!';
      ?>

      <p> <?= $login ?> </p>

    </body>
</html>
