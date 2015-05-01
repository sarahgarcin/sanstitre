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
	// console.log(cheminsAll);
	
	// display the different chemin as list menu
	for(i=0; i<chemins.length; i++){
		count = i+1;
		$("header ul").append("<li id='chem" + count + "'>" + chemins[i] + "</li>")
	}

	// Add specific class to each "entretien"
	$(".entretien").each(function(){
		countArticles ++;
		$(this).addClass("entretien" + countArticles);
	});

	// for(i=0; i<cheminsAll.length; i++){
	// 	console.log(cheminsAll[i]);
	// 	if(cheminsAll[i] == cheminsAll[])
	// }

	// $(".entretien .chemin").each(function(){
	// 	var dataChemin = $(this).attr("data-chemin");
	// 	var idChemin = dataChemin.replace("chemin", "");
	// 	console.log(idChemin);
	// });

	var nbrEntretien = $(".entretien").length;
	var nbrChemin = $("header ul li").length;

	$("header ul li").each(function(){
		$(this).click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}
			else{
				$(this).addClass('active');
			}
			// $('.chemin[data-chemin="chemin1"]').each(function(){
			// 	// console.log($(this).parent('.entretien').attr('class'));
			// });
		var ID = $(this).attr('id');
		var nbID = ID.substring(4, 5);
		// console.log(nbID);

			for(i = 0; i<nbrEntretien; i++){
				if($('.entretien' + i).children('.chemin[data-chemin="chemin ' + nbID + '"]')){
					$('.entretien' + i).scrollTo('.chemin[data-chemin="chemin' + nbID + '"]');
				}
			}
		});
	});






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