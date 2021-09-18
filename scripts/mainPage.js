( function( $ ) {

  var playersData =
  '[{"name": "dizzert","position":6},'+
  '{"name": "gothicok","position":7},'+
  '{"name": "roadhouse","position":15},'+
  '{"name": "billy","position":6},'+
  '{"name": "van","position":25}]';
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

//добавляем аватары на нужные позиции
  for (let i = 0; i < players.length; i++) {
    let $currentDiv = $( '.char' + players[i].position);
    $( '<div>', {class: 'avatarDiv'} )
    .html( `<img src="./image/avatars/` + players[i].name + `.png" width="40%">` ).appendTo( $currentDiv )
    .click(function() {
      console.log(i);
      alert(players[i].name);
    });
  }

} )( jQuery );
