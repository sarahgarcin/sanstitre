$(document).ready(function(){

	//  _ _   __  ___  _   __  ___  _   ___ 
	//  ))`) /_`) ))_) )) /_`) ))_) ))  )L  
	// ((,' (( ( ((`\ (( (( ( ((__)((__((_  
	                                     
	var countArticles = 0;
	var winHeight = $(window).height();
	var winWidth = $(window).width() - 60;
	var headerHeight = $('header').outerHeight();
	var headerWidth = $('.header').width();

	//init fonction
	HauteurLargeur();

	$(window).resize(function(){
		HauteurLargeur();
	});

	String.prototype.sansAccent = function(){
  var accent = [
      /[\300-\306]/g, /[\340-\346]/g, // A, a
      /[\310-\313]/g, /[\350-\353]/g, // E, e
      /[\314-\317]/g, /[\354-\357]/g, // I, i
      /[\322-\330]/g, /[\362-\370]/g, // O, o
      /[\331-\334]/g, /[\371-\374]/g, // U, u
      /[\321]/g, /[\361]/g, // N, n
      /[\307]/g, /[\347]/g, // C, c
  ];
  var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
   
  var str = this;
  for(var i = 0; i < accent.length; i++){
      str = str.replace(accent[i], noaccent[i]);
  }
   
  return str;
}

	//Construit les filtres de gauche
	var article = $(".entretien");
	var year = [];
	var unique_year = {};
	var actor = [];
	var unique_actor = {};
	var discipline = [];
	var unique_discipline = {};

	article.each(function(){
		var dataYear = $(this).attr('data-year');
		var dataActor = $(this).attr('data-actor');
		var dataDiscipline = $(this).attr('data-discipline');

		if(dataYear!== ""){
			if ( ! unique_year[dataYear] ) {
	      unique_year[dataYear] = true;
	      year.push(dataYear); 
	    } 
	    else {
	       // We have duplicate values!
	    }
	  }

    if(dataActor!== ""){
	    if ( ! unique_actor[dataActor] ) {
	      unique_actor[dataActor] = true;
	      actor.push(dataActor); 
	    } 
	    else {
	       // We have duplicate values!
	    }
    }
    if(dataDiscipline!== ""){
	    if ( ! unique_discipline[dataDiscipline] ) {
	      unique_discipline[dataDiscipline] = true;
	      discipline.push(dataDiscipline); 
	    } 
	    else {
	       // We have duplicate values!
	    }
    }
	});

	//Classe les tableaux dans le bon ordre
	year.sort();
	actor.sort();
	discipline.sort();

	//Create Year Menu
	for(i=0; i<year.length; i++){
		$("header .year-menu").append("<li class='year-list'><div class='checkboxes-menu'></div><h4 class='bouton' data-filter='."+year[i]+"'>"+year[i]+"</h4></li>")
	}

	//Create Actor Menu
	for(i=0; i<actor.length; i++){
		var actorFormat =  actor[i].toLowerCase().replace(" ", "");
		var actorFormat = actorFormat.sansAccent();
		$("header .actor-menu").append("<li class='actor-list'><div class='checkboxes-menu'></div><h4 class='bouton' data-filter='."+actorFormat+"'>"+actor[i]+"</h4></li>")
	}

	//Create Discipline Menu
	for(i=0; i<discipline.length; i++){
		var disciplineFormat =  discipline[i].toLowerCase().replace(" ", "");
		var disciplineFormat = disciplineFormat.sansAccent();
		$("header .discipline-menu").append("<li class='discipline-list'><div class='checkboxes-menu'></div><h4 class='bouton' data-filter='."+disciplineFormat+"'>"+discipline[i]+"</h4></li>")
	}

	//Checked button
	$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'h4', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
      $(this).prev('.checkboxes-menu').addClass('is-checked');
    });
  });


	//construit le tableau des articles
	$(".wrap").wrapInner("<table cellspacing='30'><tr>");
	$(".entretien").wrap("<td></td>");

	var divChemin = $(".entretien .article-content").children('.chemin');
	var unique_chemins = {};
	var chemins = [];

	divChemin.each(function(){
		var nbChemin = $(this).attr('data-chemin');
		var nameChemin = $(this).attr('data-name');

		//Check if value are duplicate
		if ( ! unique_chemins[nbChemin] ) {
      unique_chemins[nbChemin] = true;
      chemins.push(nbChemin); 
    } 
    else {
       // We have duplicate values!
    }	
		
	});

	chemins.sort();

	//count the number of entretien and of chemin
	var nbrEntretien = $(".entretien").length;
	var nbChemin = chemins.length; 
	
	// display the different chemin as list menu
	for(i=0; i<nbChemin; i++){
		count = i+1;
		$("header .chemin-menu").append("<li class='chemin-list' id='chem" + count + "' data-filter='."+ chemins[i]+"'><div class='radio-chemin'></div><h4>" + chemins[i] + "</h4></li>")
	}

	// Add specific class to each "entretien"
	$(".entretien").each(function(){
		countArticles ++;
		$(this).addClass("entretien" + countArticles);
	});

// --------- OCCURENCES ---------------
	//Calcul le nombre d'occurences par chemin
	$(".entretien").each(function(){
		var countOcc = 0;
		var $chem = $(this).find('.chemin');
		var nbOccurences = $chem.length;
		$(this).find(".nb-occurence").append("<div class=total-occurences>" + nbOccurences +"</div");
		//add unique id for each occurence in each entretien
		$chem.each(function(){
			countOcc ++;
			$(this).attr('data-occurence', countOcc);
		});
	});
// --------END OCCURENCES ------------

	// When click on one of the chemin menu 
	$("header ul li.chemin-list").each(function(){
		$(this).on('click', function(){
			$(".chemin").removeClass("stabilo");
			// Add class active to style it 
			if($(this).hasClass('active')){
				$('.occurence').css('display', 'none');
				$(this).removeClass('active');
				for(i = 1; i<=nbrEntretien; i++){
					$(".chemin").removeClass("stabilo");
					$("header ul li.chemin-list").removeClass('active');
					$('.entretien'  + i +  ' .article-content').scrollTo(0, 800);
				}
			}
			else{
				$(".chemin-list").removeClass('active');
				$(this).addClass('active');
				$('.occurence').css('display', 'block'); //display occurences
				// Go to the right Chemin
				var ID = $(this).attr('id');
				var nbID = ID.substring(4, 5);

				for(i = 1; i<=nbrEntretien; i++){
					if($('.entretien'  + i +  ' .article-content').children('.chemin[data-chemin="chemin ' + nbID + '"]')){
						$('.entretien'  + i +  ' .article-content').scrollTo('.chemin[data-chemin="chemin' + nbID + '"]', 800);
						$('.chemin[data-chemin="chemin' + nbID + '"]').addClass("stabilo");
					}
				}
				// Occurences - get the active occurence on chemin click
				$('.entretien').each(function(){
					var activeOcc = $(this).find($(".stabilo")).attr('data-occurence');
					$(this).find(".active-occurence").remove();
					if(activeOcc!== undefined){
						$(this).find(".nb-occurence").prepend("<div class='active-occurence'>"+activeOcc+"/</div>");
					}
					else{
						$(this).find(".nb-occurence").prepend("<div class='active-occurence'>0/</div>");
					}
				});
				// end occurence
			}

		});
	});

	//reset scroll to original position
	$("header ul li.reset").on('click', function(){
		for(i = 1; i<=nbrEntretien; i++){
			$(".chemin").removeClass("stabilo");
			$("header ul li.chemin-list").removeClass('active');
			$('.entretien'  + i +  ' .article-content').scrollTo(0, 800);
			$('.occurence').css('display', 'none');
		}
	});

// OCCURENCES
	//Go to next occurences on arrow click
	$('.arrow-occurence').on('click', function(){
		var $currentEnt = $(this).parents('.entretien');
		var $currentArt = $currentEnt.find('.article-content');
		var $nextOcc = $currentEnt.find('.stabilo').nextAll('.chemin').first();
		if($nextOcc.length){
			$currentArt.scrollTo($nextOcc,800);
			$currentArt.children('.chemin').removeClass('stabilo');
			$nextOcc.addClass('stabilo');
			var activeOcc = $nextOcc.attr('data-occurence');
			$(this).next().find(".active-occurence").remove();
			$(this).next().prepend("<div class='active-occurence'>"+activeOcc+"/</div>");
		}
		else{
			var $firstOcc = $currentArt.find($('.chemin[data-occurence="1"]'));
			$currentArt.scrollTo($firstOcc,800);
			$currentArt.children('.chemin').removeClass('stabilo');
			$firstOcc.addClass('stabilo');
			var activeOcc = $firstOcc.attr('data-occurence');
			$(this).next().find(".active-occurence").remove();
			$(this).next().prepend("<div class='active-occurence'>"+activeOcc+"/</div>");
		}
	});
// END OCCURENCES


// -------- COMBINATION FILTERS ---------

	// store filter for each group
	var filters = {};

	$(".menu-filtres .bouton").on( 'click', function() {
	  var $this = $(this);
	  // get group key
	  var $buttonGroup = $this.parents('.button-group');
	  var filterGroup = $buttonGroup.attr('data-filter-group');
	  // set filter for group
	  filters[ filterGroup ] = $this.attr('data-filter');
	  // combine filters
	  var filterValue = '';
	  for ( var prop in filters ) {
	    filterValue += filters[ prop ];
	  };

	    // init Isotope
	  var $container = $('#articles').isotope({
	    itemSelector: '.entretien',
	    transitionDuration: 0,
	    layoutMode: 'horizontal'
	  });
	  // set filter for Isotope
	  $container.isotope({ filter: filterValue });
	});

	//FILTER CHEMINS 
	// $(".menu-filtres .chemin-list").on('click', function(){
	// 	// init Isotope
	//   var $container = $('#articles').isotope({
	//     itemSelector: '.chemin',
	//     transitionDuration: 0,
	//     layoutMode: 'horizontal'
	//   });
	//   var filterValue = $(this).attr('data-filter');
 //  	$container.isotope({ filter: filterValue });
	// });



// ---------- END FILTERING ---------------


// ------------- ABOUT ----------------

	// Position the #about div out of the window
	var aboutWidth = $("#about").outerWidth();
	var aTitleHeight = $("#about .about-title").outerHeight();
	var aboutLeft = -aboutWidth + aTitleHeight + 5;
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

	// When click on arrow header, animate header to left and hide it
	$(".header-arrow").on('click', function(){
		var headerHeight = $('header').outerHeight();
		var headerWidth = $('.header').outerWidth();

		if($(".header").hasClass('active')){
			$(".header").removeClass('active');
			$(".header").animate({left:-headerWidth + 40});
			$("#articles").animate({"margin-left":85});
		}
		else{
			$(".header").addClass('active');
			$(".header").animate({left:0});
			$("#articles").animate({"margin-left":headerWidth + 40});
		}
	});
// --------------- END ABOUT --------------

	
	//Custom scrollbar for entretien div
	// $('.entretien').jScrollPane();

	//  ___            __  ___    __        __  
	// |__  |  | |\ | /  `  |  | /  \ |\ | /__` 
	// |    \__/ | \| \__,  |  | \__/ | \| .__/ 
	                                         
	//Calcul la hauteur des div des articles
	function HauteurLargeur(){
		$(window).load(function(){
			var titleHeight =  $(".entretien .article-title").outerHeight();
			var footerHeight = $(".entretien .article-footer").outerHeight();
			var articleHeight = winHeight - (titleHeight+footerHeight);
			$(".entretien .article-content").css("height", articleHeight - 42);
			$(".header").css("height", winHeight);

			//Calcule la largeur des articles (pour qu'il y ait 4 articles dans la fenêtres)
			var articleWidth = winWidth / 4;
			$(".entretien").css("width", articleWidth);
			$(".article-title").css("width", articleWidth-50);
			var headerWidth = articleWidth/2;
			$(".header").css("width", headerWidth);

			//Calcule la marge de gauche pour les articles
			$("#articles").css("margin-left", headerWidth + 40);
		});
	}


	//PEUT SERVIR
		//gère le scroll de la souris horizontal
	// $("body").mousewheel(function(event, delta) {
	// 	this.scrollLeft -= (delta * 30);
	// 	event.preventDefault();
	// });

});