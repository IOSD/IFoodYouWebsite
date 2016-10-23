(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			 $('#ensign-nivoslider').nivoSlider({
				effect: 'random',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: false,
				manualAdvance: true,
				prevText: '<i class="zmdi zmdi-long-arrow-left nivo-prev-icon"></i>',
				nextText: '<i class="zmdi zmdi-long-arrow-right nivo-next-icon"></i>'
			 });
			  
})(jQuery); 