//Will alert be shown?
//Yes, it will.
//Any string except an empty one (and "0" is not empty)
//becomes true in the logical context.
if ("0") {
  alert( 'Hello' );
}

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';


let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';