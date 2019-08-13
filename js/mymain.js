jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		alert("Sorry! This is temporarily unavailable. Please try again later.")
		//Instamojo.open('https://instamojo.com/@alilusevafoundation');
	});
	
	// //close popup
	// $('.cd-popup').on('click', function(event){
	// 	if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
	// 		event.preventDefault();
	// 		$(this).removeClass('is-visible');
	// 	}
	// });
	// //close popup when clicking the esc keyboard button
	// $(document).keyup(function(event){
    // 	if(event.which=='27'){
    // 		$('.cd-popup').removeClass('is-visible');
	//     }
    // });
});
