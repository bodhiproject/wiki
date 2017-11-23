var clipboard = new Clipboard('.buttonClass');

// when text is copied into clipboard use it
clipboard.on('success', function(e) {
  $('#log').text('Text copied into clipboard is: <' + e.text + '>');
});
