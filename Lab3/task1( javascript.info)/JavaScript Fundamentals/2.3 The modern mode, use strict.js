"use strict";

// this code works the modern way


alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated


//Browser console
// You can try to press Shift+Enter to input multiple lines, 
// and put use strict on top, like this:
// 'use strict'; <Shift+Enter for a newline>
// //  ...your code
// <Enter to run>
// It works in most browsers, namely Firefox and Chrome.

// If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict.
// Put it inside this kind of wrapper:
(function() {
  'use strict';

  // ...your code here...
})()