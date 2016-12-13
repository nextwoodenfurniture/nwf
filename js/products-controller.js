$(document).ready(function(){
	$('.product-container').click(function(event){
			var target = $(event.target).parent()[0];
			var id = $(target).data("id") - 1;
			var type = $(target).data("type");
			var iframe = data[type][id].iframe;
			var text = data[type][id].text;
			var version = data[type][id].version;
			var current_active = $('.active-3d');
			$(current_active).removeClass('active-3d');
			$(target).addClass('active-3d');
			$('iframe').attr('src', iframe);
			$('#product-desc p').text(text);

			$("html, body").animate({ scrollTop: 0 }, "slow");
  			return false;
		});
});
