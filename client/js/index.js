'use strict';
/*
 * index.js
 * Copyright(c) 2016 Universidad de Las Palmas de Gran Canaria
 * Authors:
 *   Jaisiel Santana <jaisiel@gmail.com>
 *   Alejandro Sánchez <alemagox@gmail.com>
 *   Pablo Fernández <pablo.fernandez@ulpgc.es>
 * MIT Licensed

*/
var map;
var connectionsAPI;
var restaurantsAPI;
var utils;
//initialization
var initIndex = function() {

  $('#popWindow').modal();
  map = L.map('map').setView([42.90816007196054, -2.52960205078125], 8);

  //only gets restaurants if the user is logged
  connectionsAPI.loginNeeded(function() {
    restaurantsAPI.getAllRestaurants();
  });
  //set tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="http://osm.org/copyright">' +
        'OpenStreetMap</a> contributors'
  }).addTo(map);
};

utils.addLoadEvent(initIndex);
