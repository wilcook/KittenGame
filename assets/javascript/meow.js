$(document).ready(function(){
      $('.carousel').carousel();
      
      var player = "";
      var enemy ="";

      var frogTwins = {
      	HP: 100,
      	AP: 25,
      	CAP: 25,
      	SP: 75, 
      	play: function(){
      		$("#player").html("<img id='player' src='assets/images/kittenPlaceHolder.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder2.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder3.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder4.jpg");
      	}
      };

      var secretLeopard = {
      	HP: 50,
      	AP: 75,
      	CAP: 75,
      	SP: 100,
      	play: function(){
      		$("#player").html("<img id='player' src='assets/images/kittenPlaceHolder2.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder3.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder4.jpg");
      	}
      };

      var shawty = {
      	HP: 75,
      	AP: 50,
      	CAP: 50,
      	SP: 50,
      	play: function(){
      		$("#player").html("<img id='player' src='assets/images/kittenPlaceHolder3.jpg")
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder2.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder4.jpg");
      	}
      };

      var alienGlamCat = {
      	HP: 25,
      	AP: 100,
      	CAP: 100,
      	SP: 25,
      	play: function(){
      		$("#player").html("<img id='player' src='assets/images/kittenPlaceHolder4.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder3.jpg");
      		$("#enemy").append("<img id='player' src='assets/images/kittenPlaceHolder2.jpg");
      	}
      };

      $(".carousel-item").on("click")({
            	$("#title").hide;
            	$("#title").html("")
            	switch(
		            case 0:
		      		id = "#frogTwins";
		      		frogTwins.play();
		      		break;
		      		
		      		case 1:
		      		id = "#secretLeopard";
		      		secretLeopard.play();
		      		break;

		      		case 2:
		      		id = "#shawty";
		      		shawty.play();
		      		break;

		      		case 3:
		      		id ="#alienGlamCat";
		      		alienGlamCat.play();
		      		break;
				)
      });
      
    });