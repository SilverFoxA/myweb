jQuery(function($) {'use strict';

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contacting us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});
           
});
$(function() {
 var $nav_active = $(' #header ul li');
        $($nav_active).on("click", function() {

		// Remove class from active tab
		$($nav_active).removeClass("active");

		// Add class active to clicked tab
		$(this).addClass("active");
        });
});