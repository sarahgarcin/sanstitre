$(document).ready(function(){

	//construit le tableau des articles
	$(".wrap").wrapInner("<table cellspacing='30'><tr>");
	$(".entretien").wrap("<td></td>");

	//gère le scroll de la souris horizontal
	// $("body").mousewheel(function(event, delta) {
	// 	this.scrollLeft -= (delta * 30);
	// 	event.preventDefault();
	// });

	//Calcul la hauteur des div des articles
	var winHeight = $(window).height();
	var hearderHeight = $('header').outerHeight();
	var articleHeight = winHeight - hearderHeight;
	$(".entretien").css("height", articleHeight);

	//Calcule la largeur des articles (pour qu'il y ait 4 articles dans la fenêtres)
	var winWidth = $(window).width() - 30;
	var articleWidth = winWidth / 4;
	console.log(articleWidth);
	$(".entretien").css("width", articleWidth);

	$(window).resize(function(){
		var winWidth = $(window).width() - 30;
		var articleWidth = winWidth / 4;
		$(".entretien").css("width", articleWidth);

		var winHeight = $(window).height();
		var hearderHeight = $('header').outerHeight();
		var articleHeight = winHeight - hearderHeight;
		$(".entretien").css("height", articleHeight);
	});

});