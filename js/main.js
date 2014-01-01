var $buzzwords = ["Oren Weingrod is object-oriented.", "Oren Weingrod is agile.", "Oren Weingrod is a human.", "Oren Weingrod is analytics driven.", "Oren Weingrod is dynamic!", "Oren Weingrod is lean.", "Oren Weingrod is tele-commuting.", "Oren Weingrod is integration testing.", 'Oren Weingrod has read "Rework."', "Oren Weingrod built this website."];
var max=9;
var min=0;
var $buzz = $('.generate-buzzword');
$(document).ready(function(){
	var random = Math.floor((Math.random() * (max-min+1) + min));
	$buzz.on("click", function(){
		$('#smalltext').fadeOut();
		$('#oren-is').fadeTo('slow', 0.1, function() {
			$('#oren-is').empty();
			$('#oren-is').append($buzzwords[random]);
		$('#oren-is').fadeTo('slow', 1);
		});
		var oldRandom = random;
		random = Math.floor((Math.random() * (max-min+1) + min));
		if(random===oldRandom) {
			random = Math.floor((Math.random() * (max-min+1) + min));
		}
	});
});
