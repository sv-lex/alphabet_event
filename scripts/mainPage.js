( function( $ ) {

  const $charString = $( '.blockalphabet' );

  var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (let i = 0; i < abc.length; i++) {

    $( '<div>', {class: 'char'} )
    .html( `<span> <img src="./image/letters/` + abc[i] + `.png" width="110" height="150"> </span>` ).appendTo( $charString )
    .click(function() {
      console.log(i);
      alert(abc[i]);
    });

  }

} )( jQuery );
