define(['jquery', 'pubSub'], function($){
	$(window).on('scroll', function(){
		var body = document.body,
			html = document.documentElement;

		var height = Math.max(body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight);

		var remainingHeight = height - this.pageYOffset - window.innerHeight;

		if (remainingHeight < 500) {
			$.publish('Scrolling');
		}
	});
});