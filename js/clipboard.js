var clip = new Clipboard('.btn');

clip.on('success', function(e) {
    $('.copied').show();
	$('.copied').fadeOut(1000);
});
