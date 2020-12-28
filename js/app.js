$('.slider').bootstrapSlider({
	step: 0.01
});
$('.slider').on('slide', function (ev) {
	var str = this.value;
	var str_split = str.split(",");

	$('#value-output-from').html("");
	$('#value-output-from').html(str_split[0]);
	$('#value-output-to').html("");
	$('#value-output-to').html(str_split[1]);
});

var btn = $('#go-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 150) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '100');
});