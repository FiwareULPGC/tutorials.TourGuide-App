'use strict';
/*
 * utils.js
 * Copyright(c) 2016 Universidad de Las Palmas de Gran Canaria
 * Authors:
 *   Jaisiel Santana <jaisiel@gmail.com>
 *   Alejandro Sánchez <alemagox@gmail.com>
 *   Pablo Fernández <pablo.fernandez@ulpgc.es>
 * MIT Licensed

*/
/*exported utils*/
var utils = (function() {

  /* alerType could be alert-warning(default) or alert-danger*/
  function showMessage(message, alertType) {
    alertType = typeof alertType !== 'undefined' ? alertType : 'alert-warning';

    var alert = document.createElement('DIV');
    alert.classList.add('alert', 'fade', 'in', alertType);
    alert.textContent = message;

    var closeButton = document.createElement('BUTTON');
    closeButton.className = 'close';
    closeButton.setAttribute('data-dismiss', 'alert');
    closeButton.textContent = 'X';
    alert.appendChild(closeButton);

    var navBar = document.getElementById('topMenu');

    var mainContainer = document.getElementsByClassName('container-fluid')[0];

    mainContainer.insertBefore(alert, navBar.nextSibling);
  }

  function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    }
    else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      };
    }
  }

  function capitalize(str) {
    return str.split('').map(function(char) {
      return char.toUpperCase();
    }).join('');
  }


  return {
    addLoadEvent: addLoadEvent,
    showMessage: showMessage,
    capitalize: capitalize
  };
})();



if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
  }
}
