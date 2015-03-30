/* $(document).ready(function() {

			$("#aboutUs").waypoint(function(event, direction) {
			   if (direction === 'down') {
				  $("#header").animate({backgroundColor: 'red'},1000)
			   }
			   else {
				  $("#header").animate({backgroundColor: 'blue'},1000)
			   }
			});

			$("#skills").waypoint(function(event, direction) {
			   if (direction === 'down') {
				  $("#header").animate({backgroundColor: 'green'},1000)
			   }
			   else {
				  $("#header").animate({backgroundColor: 'red'},1000)
			   }
			});

			$("#experience").waypoint(function(event, direction) {
			   if (direction === 'down') {
				  $("#header").animate({backgroundColor: 'yellow'},1000)
			   }
			   else {
				  $("#header").animate({backgroundColor: 'green'},1000)
			   }
			});

			$("#portfolio").waypoint(function(event, direction) {
			   if (direction === 'down') {
				  $("#header").animate({backgroundColor: 'orange'},1000)
			   }
			   else {
				  $("#header").animate({backgroundColor: 'yellow'},1000)
			   }
			});

			
		});
		 */
/* 		
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("#header").css('background-color', 'blue');
                } else {
                    $("#header").css('background-color', 'red');
                }
            });
        }); */
		
$(document).ready(function(){
		
		$('#home').waypoint(function() {

				$("#header").css({
					backgroundColor: '#555'
				});

			}, {offset: '50px'});
			
		$('#home').waypoint(function() {

				$("#header").css({
					backgroundColor: '#555'
				});

			}, {offset: '-100px'});
		
		$('#aboutUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#0f6b6b'
				});

			}, { offset: '100px' });
			
		$('#aboutUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#0f6b6b'
				});

			}, { offset: '-100px' });
			
		$('#skills').waypoint(function() {

				$("#header").css({
					backgroundColor: '#C4509F'
				});

			}, { offset: '100px' });
			
		$('#skills').waypoint(function() {

				$("#header").css({
					backgroundColor: '#C4509F'
				});

			}, { offset: '-100px' });
			
		$('#experience').waypoint(function() {

				$("#header").css({
					backgroundColor: '#5b846b'
				});

			}, { offset: '100px' });
			
		$('#experience').waypoint(function() {

				$("#header").css({
					backgroundColor: '#5b846b'
				});

			}, { offset: '-100px' });
			
		$('#portfolio').waypoint(function() {

				$("#header").css({
					backgroundColor: '#4d6159'
				});

			}, { offset: '100px' });
			
		$('#portfolio').waypoint(function() {

				$("#header").css({
					backgroundColor: '#4d6159'
				});

			}, { offset: '-100px' });
			
		$('#contactUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#BCB382'
				});

			}, { offset: 'bottom-in-view' });

			
	});