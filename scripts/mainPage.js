( function( $ ) {

  var playersData =
  '[{"name": "dizzert","avatar": "dizzert.png","position":20},'+
  '{"name": "dick","avatar": "dizzert.png","position":10},'+
  '{"name": "dave","avatar": "dizzert.png","position":16},'+
  '{"name": "mike","avatar": "dizzert.png","position":6},'+
  '{"name": "van","avatar": "dizzert.png","position":25}]';
  ;

  var players = jQuery.parseJSON(playersData);

  const $charString = $( '.blockalphabet' );

  var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (let i = 0; i < abc.length; i++) {

      $( '<div>', {class: 'char' + i + ''})
      .html( `<img src="./image/letters/` + abc[i] + `.png" width="110" height="150">` ).appendTo( $charString )
      .click(function() {
        console.log(i);
        alert(abc[i]);
      });

  }

  for (let i = 0; i < players.length; i++) {

    let $currentDiv = $( '.char' + players[i].position);

    $( '<div>', {class: 'avatarDiv'} )
    .html( `<img src="./image/avatars/` + players[i].avatar + `" width="40%">` ).appendTo( $currentDiv )
    .click(function() {
      console.log(i);
      alert(abc[i]);
    });

  }

} )( jQuery );
