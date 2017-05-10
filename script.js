$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	

	
	
	
if(wScroll > $('').offset().top)	{
		
		$('nav').each(function(){
			
			$('nav').addClass('is-showing');
			
		});
	}
	
	
});