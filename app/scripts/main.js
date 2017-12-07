$(document).ready(function(){

  var available = [
    {
      "image": "73-11-155.jpg",
      "title": "Ambulance after crash"
    },
    {
      "image": "64-4-013.jpg",
      "title": "Cleaning operation during the Synchro-Cyclotron (SC) shut-down"
    }
  ];
  var random = Math.floor((Math.random() * available.length) + 1);
  var selected = available[random-1];
  $.backstretch("/images/"+selected.image);
  $('.cds-image-caption').find('.text').first().text(selected.title);
})
