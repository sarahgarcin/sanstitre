$(document).ready(function(){

	var countArticles = 0;

	//init fonction
	HauteurLargeur();

	$(window).resize(function(){
		HauteurLargeur();
	});

	//construit le tableau des articles
	$(".wrap").wrapInner("<table cellspacing='30'><tr>");
	$(".entretien").wrap("<td></td>");

	var divChemin = $(".entretien").children('.chemin');
	var unique_chemins = {};
	var chemins = [];
	var cheminsAll = [];

	divChemin.each(function(){
		var nbChemin = $(this).attr('data-chemin');
		var nameChemin = $(this).attr('data-name');
		cheminsAll.push(nbChemin);
		//Check if value are duplicate
		if ( ! unique_chemins[nbChemin] ) {
      unique_chemins[nbChemin] = true;
      chemins.push(nbChemin); 
    } 
    else {
        // We have duplicate values!
    }	
		
	});

	cheminsAll.sort();
	//console.log(chemins);

	//count the number of entretien and of chemin
	var nbrEntretien = $(".entretien").length;
	var nbChemin = chemins.length; 
	
	// display the different chemin as list menu
	for(i=0; i<nbChemin; i++){
		count = i+1;
		$("header ul").append("<li class='chemin-list' id='chem" + count + "'>" + chemins[i] + "</li>")
	}

	// Add specific class to each "entretien"
	$(".entretien").each(function(){
		countArticles ++;
		$(this).addClass("entretien" + countArticles);
	});

	// When click on one of the chemin menu 
	$("header ul li.chemin-list").each(function(){
		$(this).click(function(){
			$(".chemin").removeClass("stabilo");
			// Add class active to style it 
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				for(i = 1; i<=nbrEntretien; i++){
					$(".chemin").removeClass("stabilo");
					$("header ul li.chemin-list").removeClass('active');
					$('.entretien' + i).scrollTo(0, 800);
				}
			}
			else{
				$(this).addClass('active');
				// Go to the right Chemin
				var ID = $(this).attr('id');
				var nbID = ID.substring(4, 5);

				for(i = 1; i<=nbrEntretien; i++){
					if($('.entretien' + i).children('.chemin[data-chemin="chemin ' + nbID + '"]')){
						$('.entretien' + i).scrollTo('.chemin[data-chemin="chemin' + nbID + '"]', 800);
						$('.chemin[data-chemin="chemin' + nbID + '"]').addClass("stabilo");
					}
				}
			}
			

		});
	});

	//reset scroll to original position
	$("header ul li.reset").on('click', function(){
		for(i = 1; i<=nbrEntretien; i++){
			$(".chemin").removeClass("stabilo");
			$("header ul li.chemin-list").removeClass('active');
			$('.entretien' + i).scrollTo(0, 800);
		}
	});

	// Position the #about div out of the window
	var aboutWidth = $("#about").outerWidth();
	var aTitleHeight = $("#about .about-title").outerHeight();
	var aboutLeft = -aboutWidth + aTitleHeight + 20;
	$("#about").css("left", aboutLeft);

	//Click on a propos - Animate 
	$("#about").on('click', function(){	
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).animate( { left: "+=" + aboutLeft});
		}
		else{
			$(this).addClass('active');
			$(this).animate( { left: "-=" + aboutLeft});
		}
	});

	
	//Custom scrollbar for entretien div
	// $('.entretien').jScrollPane();

	//  ___            __  ___    __        __  
	// |__  |  | |\ | /  `  |  | /  \ |\ | /__` 
	// |    \__/ | \| \__,  |  | \__/ | \| .__/ 
	                                         
	//Calcul la hauteur des div des articles
	function HauteurLargeur(){
		var winHeight = $(window).height();
		var hearderHeight = $('header').outerHeight();
		var articleHeight = winHeight - hearderHeight;
		$(".entretien").css("height", articleHeight);

		//Calcule la largeur des articles (pour qu'il y ait 4 articles dans la fenêtres)
		var winWidth = $(window).width() - 60;
		var articleWidth = winWidth / 4;
		$(".entretien").css("width", articleWidth);
	}


	//PEUT SERVIR
		//gère le scroll de la souris horizontal
	// $("body").mousewheel(function(event, delta) {
	// 	this.scrollLeft -= (delta * 30);
	// 	event.preventDefault();
	// });

});