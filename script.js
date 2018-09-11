// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '459px',
          videoId: 'an_EOYu4PG4',
          events: {
            //'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
	    function stopVideo() {
	    	player.stopVideo();
	        return false;
	    }
    	function card(n) {
	        if(document.getElementById('content'+n).style.display=="none")
	        {
	            document.getElementById('content'+n).style.display="block";
	        }
	        else{
	            document.getElementById('content'+n).style.display="none";
	        }
	        if (n+1>4) {
	            n=1;
	        }
	        else{
	            n=n+1;
	        }
	        document.getElementById('content'+n).style.display="none";
	        if (n+1>4) {
	            n=1;
	        }
	        else{
	            n=n+1;
	        }
	        document.getElementById('content'+n).style.display="none";
	        if (n+1>4) {
	            n=1;
	        }
	        else{
	            n=n+1;
	        }
	        document.getElementById('content'+n).style.display="none";
	        stopVideo();
	        return false;
	    }

		$(document).ready(function(){
			  $(".navbar a").on('click', function(event) {
			    if (this.hash !== "") {

			      event.preventDefault();

			      var hash = this.hash;

			      $('html, body').animate({
			        scrollTop: $(hash).offset().top
			      }, 900, function(){   
			        window.location.hash = hash;
			      });
			    }
			  });
			  $("#show1").on('click', function(event){
			  	event.preventDefault();
			  	$('html, body').animate({
			        scrollTop: $('#content1,#show1').offset().top
			      }, 400);
			  })
				$("#show2").on('click', function(event){
			  	event.preventDefault();
			  	$('html, body').animate({
			        scrollTop: $('#content2,#show2').offset().top
			      }, 400);
			  })
			  $("#show3").on('click', function(event){
			  	event.preventDefault();
			  	$('html, body').animate({
			        scrollTop: $('#content3,#show3').offset().top
			      }, 400);
			  })
			  $("#show4").on('click', function(event){
			  	event.preventDefault();
			  	$('html, body').animate({
			        scrollTop: $('#content4,#show4').offset().top
			      }, 400);
			  })	  
		});