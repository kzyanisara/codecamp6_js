alert( null || 2 || undefined ); // true
alert( alert(1) || 2 || alert(3) ); // true
alert( 1 && null && 2 ); // false
alert( alert(1) && alert(2) ); // false
alert( null || 2 && 3 || 4 ); // true