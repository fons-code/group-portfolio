$(document).ready(function(){
  const config = {
    mode: 'horizontal',
    infiniteLoop: false,
    hideControlOnEnd: true,
    touchEnabled: false,
    speed: 1500
  }
  $('.slider').bxSlider(config);
});