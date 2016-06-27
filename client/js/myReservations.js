'use strict';
/*
 * myReservations.js
 * Copyright(c) 2016 Universidad de Las Palmas de Gran Canaria
 * Authors:
 *   Jaisiel Santana <jaisiel@gmail.com>
 *   Alejandro Sánchez <alemagox@gmail.com>
 *   Pablo Fernández <pablo.fernandez@ulpgc.es>
 * MIT Licensed

*/
var connectionsAPI;
var utils;
var clientLogic;

//initialization
var initReservations = function() {

  $('#popWindow').modal();

  clientLogic.setUpDrawModule();
  //only gets reservations if the user is logged
  connectionsAPI.loginNeeded(function() {
    //var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    //clientLogic.showReservationsByUser(userInfo.displayName);
    clientLogic.getMyReservations();
  });


  //todo translate to common js
  $('tbody').height($(window).height() - $('thead th').height() -
    $('#loggedDiv').height() - 50);

};

utils.addLoadEvent(initReservations);
