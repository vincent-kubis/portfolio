
$(document).ready(function() {
//var controller = new ScrollMagic.Controller();
	$("#profil").fadeTo(3000, 1);
	  if (window.innerWidth<768) {
	    new Vivus('mobile', {
			start: 'inViewport',
			type: 'oneByOne',
			duration: 150
			});
	    //new ScrollMagic.Scene({
        	//duration: 700,  // the scene should last for a scroll distance of 100px
        	//offset: 0      // start this scene after scrolling for 50px
    //})
	  	    //.setPin("#home") // pins the element for the the scene's duration
    		//.addTo(controller); // assign the scene to the controller
	  }else if (window.innerWidth>970 ) {
	  	new Vivus('computer', {
		    start: 'inViewport',
		    type: 'oneByOne',
		    duration: 150
			});
	  	//new ScrollMagic.Scene({
        	//duration: 750,  // the scene should last for a scroll distance of 100px
        	//offset: 0      // start this scene after scrolling for 50px
    })
	  	    //.setPin("#home") // pins the element for the the scene's duration
    		//.addTo(controller); // assign the scene to the controller

	  }else{
	  	new Vivus('tablet', {
		    start: 'inViewport',
		    type: 'oneByOne',
		    duration: 150
			});
	  	//new ScrollMagic.Scene({
        	//duration: 1100,  // the scene should last for a scroll distance of 100px
        	//offset: 0      // start this scene after scrolling for 50px
    	//})
	  	    //.setPin("#home") // pins the element for the the scene's duration
    		//.addTo(controller); // assign the scene to the controller
	  };

	$("#demo01").animatedModal({
	color: '#1D5D79'
	});

	$('#submit2').click(function(){
		$.post("php/mail.php", $("#mycontactform2").serialize(),  function(response) {
			$('#success2').html(response);
	//$('#success').hide('slow');
		});
		return false; 
	});






});


  

