$(document).ready(function(){

		
		$('#home').waypoint(function() {

				$("#header").css({
					backgroundColor: '#555555'
				});
				$("#topHome").css({
					backgroundColor: '#555555'
				});
			}, {offset: '1px'});
			
		$('#home').waypoint(function() {

				$("#header").css({
					backgroundColor: '#555555'
				});
				$("#topHome").css({
					backgroundColor: '#555555'
				});
			}, {offset: '-200px'});
		
		$('#aboutUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#0f6b6b'
				});
				$("#topHome").css({
					backgroundColor: '#0f6b6b'
				});

			}, { offset: '100px' });
			
		$('#aboutUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#0f6b6b'
				});
				$("#topHome").css({
					backgroundColor: '#0f6b6b'
				});

			}, { offset: '-100px' });
			
		$('#skills').waypoint(function() {

				$("#header").css({
					backgroundColor: '#C4509F'
				});
				$("#topHome").css({
					backgroundColor: '#C4509F'
				});

			}, { offset: '100px' });
			
		$('#skills').waypoint(function() {

				$("#header").css({
					backgroundColor: '#C4509F'
				});
				$("#topHome").css({
					backgroundColor: '#C4509F'
				});

			}, { offset: '-100px' });
			
		$('#experience').waypoint(function() {

				$("#header").css({
					backgroundColor: '#5b846b'
				});
				$("#topHome").css({
					backgroundColor: '#5b846b'
				});

			}, { offset: '100px' });
			
		$('#experience').waypoint(function() {

				$("#header").css({
					backgroundColor: '#5b846b'
				});
				$("#topHome").css({
					backgroundColor: '#5b846b'
				});

			}, { offset: '-100px' });
			
		$('#portfolio').waypoint(function() {

				$("#header").css({
					backgroundColor: '#4d6159'
				});
				$("#topHome").css({
					backgroundColor: '#4d6159'
				});

			}, { offset: '100px' });
			
		$('#portfolio').waypoint(function() {

				$("#header").css({
					backgroundColor: '#4d6159'
				});
				$("#topHome").css({
					backgroundColor: '#4d6159'
				});

			}, { offset: '-100px' });
			
		$('#contactUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#BCB382'
				});
				$("#topHome").css({
					backgroundColor: '#BCB382'
				});

			}, { offset: 'bottom-in-view' });

			
	});
