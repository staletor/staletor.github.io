
var myScripts = {
	
	headerColor: function () {
		$('#home').waypoint(function() {

				$("#header").css({
					backgroundColor: '#555555'
				});
				$("#topHome").css({
					backgroundColor: '#555555'
				});
			});
			
		$('#home').waypoint(function() {

				$("#header").css({
					backgroundColor: '#555555'
				});
				$("#topHome").css({
					backgroundColor: '#555555'
				});
			}, {offset: '-100px'});
		
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
			
		$('#portfolio').waypoint(function() {

				$("#header").css({
					backgroundColor: '#666666'
				});
				$("#topHome").css({
					backgroundColor: '#666666'
				});

			}, { offset: '100px' });
			
		$('#portfolio').waypoint(function() {

				$("#header").css({
					backgroundColor: '#666666'
				});
				$("#topHome").css({
					backgroundColor: '#666666'
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
			
		
			
		$('#contactUs').waypoint(function() {

				$("#header").css({
					backgroundColor: '#BCB382'
				});
				$("#topHome").css({
					backgroundColor: '#BCB382'
				});

			}, { offset: 'bottom-in-view' });
	},

}
$('document').ready(function () {
    myScripts.headerColor();
	
	$('.isotopeWrapper').isotope({ filter: '*' });
					
	$("a[href='#top']").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});
