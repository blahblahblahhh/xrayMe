console.log('loaded');

//function popup() { //creates
//  $('#container').append($('<div>').attr('class', 'lilwindow'));
//  $('#lilwindow').html('<img src="http://i.imgur.com/wfJPP5c.png" height="100px">').addClass('lilwindow');
//}

$(document).ready(function(){

//  setInterval(function() {$('h1');}, 10);
//how do i make it reload only the h1/a div so it refreshes the options wihtout reloading?

            (function () {
            var xRay;
            xRay = document.querySelector('.xRay');
            document.addEventListener('mousemove', function (ev) {
            xRay.style.top = ev.clientY - 65 + 'px';
            return xRay.style.left = ev.clientX - 65 + 'px';
            });
            }.call(this));

            var audio = $("#mySoundClip")[0];
            $(".center-div").mouseenter(function() {
              $('#audio')[0].play();
            });
            $(".center-div").mouseleave(function() {
              $('#audio')[0].pause();
            });

			});
