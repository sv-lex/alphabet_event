( function( $ ) {

  var playersData =
  '[{"name": "dizzert","position":6, "game": "gay website"},'+
  '{"name": "gothicok","position":7, "game": "hades"},'+
  '{"name": "roadhouse","position":15, "game": "pong"},'+
  '{"name": "billy","position":6, "game": "gay party"},'+
  '{"name": "van","position":25, "game": "zoo tycoon"}]';
  ;

  var players = jQuery.parseJSON(playersData);

  const $charString = $( '.blockalphabet' );
  const $streamersList = $( '.streamers' );
  // const $position = $( '.position' );

  var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (let i = 0; i < abc.length; i++) {
      $( '<div>', {class: 'char' + i + ''})
      // .html( `<a href="list.php?letter=` + abc[i]+ `"><img src="./image/letters/` + abc[i] + `.png" width="110" height="150">` ).appendTo( $charString )
        .html( `<img src="./image/letters/` + abc[i] + `.png" width="110" height="150">` ).appendTo( $charString )
      .click(function() {
        console.log(i);
        // alert(abc[i]);
        $( '<div>', {class: 'letterFrame'})
        // .html( `<iframe src="list.php?letter=` + abc[i]+ `" width="468" height="60" align="left">` ).appendTo( $('body') );
        .html( `<iframe src="list.php?letter=` + abc[i]+ `">` ).appendTo( $('body') );
      });
  }

//добавляем аватары на нужные позиции
  for (let i = 0; i < players.length; i++) {
    let $currentDiv = $( '.char' + players[i].position);
    console.log($currentDiv);
    $( '<div>', {class: 'avatarDiv'} )
    .html( `<a href="private.php?user=` + players[i].name + `"><img src="./image/avatars/` + players[i].name + `.png" width="40%">` ).appendTo( $currentDiv )
    .click(function() {
      console.log(i);
    });
  }

  // for (let i = 0; i < players.length; i++) {
  //     $( '<div>', {class: players[i].name})
  //     .html( `<img src="./tmp/roadhouse.png" width="300px">` ).appendTo( $streamersList )
  // }

  //добавляем прогресс
    // for (let i = 0; i < players.length; i++) {
    //   let $currentPosition = $('.' + players[i].name);
    //   console.log(players[i].name);
    //   $( '<div>', {class: 'progressText'} )
    //   .html( `<p> ` + (players[i].position + 1) + `/26 </br> <p> ` + players[i].game + `` ).appendTo( $currentPosition )
    //   console.log($currentPosition);
    // }

} )( jQuery );
