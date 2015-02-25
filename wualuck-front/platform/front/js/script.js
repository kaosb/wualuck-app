;(function($){

	
/* ---------------------------------------------------------------------
 * Heights
 * ---------------------------------------------------------------------
 **/
	$.fn.heights = function(args){
		var defaults = {
			itemClass : 'equal-height-item'
		};
		return $(this).each( function(){
			var obj = this;
			// Extend
			if( $.isEmptyObject(args) === false )
				$.extend( defaults, args );

			obj.init = function(defaults, obj){
				tallest = 0;
				$(obj).find('.'+defaults.itemClass).each(function(){
					$(this).css({ 'height': 'auto' });
					if ( $(this).outerHeight() > tallest )
						tallest = $(this).outerHeight();
				});
				$(obj).find('.'+defaults.itemClass).css({'height': tallest});
			};

			// Default Initialization
			obj.init(defaults, obj);

			// initilice with $(window) resize (resizeEnd)
			$(window).load( function(){
				obj.init(defaults, obj);
			});

			// initilice with $(window) resize (resizeEnd)
			$(window).on( 'heightsResizeEnd', function(){
				obj.init(defaults, obj);
			});

			// ResizeEnd event
			$(window).resize(function(){
				if( this.heightsResizeTo ) clearTimeout(this.heightsResizeTo);
				this.heightsResizeTo = setTimeout(function(){
					$(this).trigger('heightsResizeEnd');
				}, 50);
			});
		});
	};
	$.wualack = {
		heights : {
			init : function( context ){
				this.master( context );
				this.widgets( context );
			},
			master : function( context ){
				$('.equal-heights', context).heights();
			},
			widgets : function( context ){
				$('.push-up, .widget-careers', context).heights({ 'itemClass' : 'widget-banner' });
				$('.push-up, .widget-careers', context).heights({ 'itemClass' : 'widget-image-text' });
				$('.push-up, .widget-careers', context).heights({ 'itemClass' : 'widget-weights' });
			}
		},
	};

	//

})(jQuery);

/**
 * General Scripts
 */
jQuery(document).ready( function($){
/*-------------------------------------- Fit vids */
 	$(".container").fitVids();
 	$(".container-fluid").fitVids();
/*-------------------------------------- Heights */
 	$.wualack.heights.init();
 /*-------------------------------------- Click Responsive Top Menu */
	/* TOP MENU */
	$('#nav-responsive').click( function(){
		$('#menu-responsive').slideToggle();
		$('#nav-responsive').toggleClass('active');
	});	
/*-------------------------------------- Stretch image */
	$('img.wide-image').height( function(){
		
	});

/*-------------------------------------- Tooltip */
	$('.tooltip-categories').tooltip();

/*-------------------------------------- Dropdown */
	$('.dropdown-toggle').dropdown();

/*-------------------------------------- Fixed Sidebar */
	/*
	if( $(document).width() <= 719 ){ 
			//GET BROWSER WINDOW HEIGHT
			var currHeight = $(window).height();
			//SET HEIGHT OF SIDEBAR AND CONTENT ELEMENTS
			$('#sidebar-fixed, #content-fixed').css('height', currHeight);

			//ON RESIZE OF WINDOW
			$(window).resize(function() {

				//GET NEW HEIGHT
				var currHeight = $(window).height();	
				//RESIZE BOTH ELEMENTS TO NEW HEIGHT
				$('#sidebar-fixed, #content-fixed').css('height', currHeight);

			});
		}
	});
	*/
});