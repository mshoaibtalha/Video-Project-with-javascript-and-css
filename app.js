const btn = document.querySelector('.switch-btn');
const viedo = document.querySelector('.video-container');


btn.addEventListener('click' , function(){

  if(!btn.classList.contains('slide')){
    btn.classList.add('slide');
    viedo.pause();
 }

 else {
   btn.classList.remove('slide');
   viedo.play();
 }
});

/// preloader///
const preloader = document.querySelector('.preloader');

window.addEventListener('load' , function(){

preloader.classList.add('hide-preloader');
});