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
      ?>

      <p> the letter is:  <?= $letter ?> </p>

    </body>
</html>
