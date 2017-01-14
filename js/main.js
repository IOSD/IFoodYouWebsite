(function ($) {
 "use strict";

/*----------------------------
	jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	
	
/*----------------------------
	sticky
------------------------------ */
	var s = $("#header");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("sticky");
		} else {
			s.removeClass("sticky");	
		}
	});
	
/*----------------------------
	wow js active
------------------------------ */
	new WOW().init();
 
/*----------------------------
	masonry active
------------------------------ */
	
	var $galleryMasonry = $('.gallery-content').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $galleryMasonry.masonry({
		itemSelector: '.gallery-item',
		columnWidth: 1,
		percentPosition: true
	  });
	});
 
/*----------------------------
	owl active
------------------------------ */  
	$("#testimonial-carousel").owlCarousel({
	  autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
	  items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
	});
	
/*--------------------------
	datepicker
---------------------------- */
	$("#datepicker").Zebra_DatePicker({
		format: 'm-d-Y',
		default_position: 'below',
		show_icon: false,
	});
	
/*----------------------------
	onePageNav
------------------------------ */  
	$('#header-nav, .mobile-menu-area ul').onePageNav();
	  	  
/*----------------------------
	magnificPopup
------------------------------ */
	$('.magnify').magnificPopup({
		type: 'image'
	});

/*--------------------------
	gmaps script
---------------------------- */ 
	var map;
	
	  map = new GMaps({
		el: '#map',
		lat: 28.6985,
		lng: 77.1341,
		scrollwheel: false,
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	  });
	  //locations request
	  map.getElevations({
		locations : [[28.6985,77.1341]],
		  callback : function (result, status){
		  if (status == google.maps.ElevationStatus.OK) {
			for (var i in result){
			 map.addMarker({
			  lat: result[i].location.lat(),
			  lng: result[i].location.lng(),
			  title: 'Marker with InfoWindow',
			  icon:'img/map-marker.png',
			  animation:google.maps.Animation.BOUNCE,
			  infoWindow: {
				content: '<p>The elevation is '+result[i].elevation+' in meters</p>'
			  }
			});
		   }
		  }
		}
	  });    
	
	
/*--------------------------
	scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 