define([], function () {
  "use strict";

  // @ifdef development
  superExpensiveFunction();
  // @endif

  // @ifdef production
  superQuickFunction();
  // @endif

  // @include fixtures/included.js
});
