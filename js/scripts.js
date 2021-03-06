// Media Element Player

$('audio,video').mediaelementplayer({
	success: function(player, node) {
	  $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
	},
	startLanguage: 'en',
  alwaysShowControls: true,
	translationSelector: true,
      features: ['playpause','progress','current','volume','fullscreen']

});


$('#video-filter').click(function(){

  // hide audio
  $('.mejs-audio').hide();
  // show video
  $('.mejs-video').show().addclass('pulse');
  
});

$('#audio-filter').click(function(){
  
  // hide video
  $('.mejs-video').hide();
  // show video
  $('.mejs-audio').show().addclass('pulse');
  
});