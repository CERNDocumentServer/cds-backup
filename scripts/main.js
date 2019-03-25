$(document).ready(function(){

  var available = [
    {
      "image": "1008264_01.jpg",
      "title": "Computer centre LEDs"
    },
    {
      "image": "1008294_05.jpg",
      "title": "Computer centre exihibition"
    }
  ];
  var random = Math.floor((Math.random() * available.length) + 1);
  var selected = available[random-1];
  $.backstretch("/images/"+selected.image);
  $('.cds-image-caption').find('.text').first().text(selected.title);
})
