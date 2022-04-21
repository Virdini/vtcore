(function () {

  'use strict';

  document.querySelectorAll('.tabs .trigger').forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.currentTarget.classList.toggle('expanded');
      event.currentTarget.closest('.tabs').classList.toggle('expanded');
    });
  });

})();
