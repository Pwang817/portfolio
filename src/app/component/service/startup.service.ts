import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class StartupService {


    constructor() { }

    fullHeight() {
  			$('.js-fullheight').css('height', $(window).height());
  			$(window).resize(function(){
  				$('.js-fullheight').css('height', $(window).height());
  			});
  	};

  	// Animations

  	contentWayPoint () {
  		var i = 0;
  		$('.animate-box').waypoint( function( direction ) {

  			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

  				i++;

  				$(this.element).addClass('item-animate');
  				setTimeout(function(){

  					$('body .animate-box.item-animate').each(function(k){
  						var el = $(this);
  						setTimeout( function () {
  							var effect = el.data('animate-effect');
  							if ( effect === 'fadeIn') {
  								el.addClass('fadeIn animated');
  							} else if ( effect === 'fadeInLeft') {
  								el.addClass('fadeInLeft animated');
  							} else if ( effect === 'fadeInRight') {
  								el.addClass('fadeInRight animated');
  							} else {
  								el.addClass('fadeInUp animated');
  							}

  							el.removeClass('item-animate');
  						},  k * 200, 'easeInOutExpo' );
  					});

  				}, 100);

  			}

  		} , { offset: '85%' } );
  	};


  	 burgerMenu () {

  		$('.js-colorlib-nav-toggle').on('click', function(event){
  			event.preventDefault();
  			var $this = $(this);

  			if ($('body').hasClass('offcanvas')) {
  				$this.removeClass('active');
  				$('body').removeClass('offcanvas');
  			} else {
  				$this.addClass('active');
  				$('body').addClass('offcanvas');
  			}
  		});



  	};

  	// Click outside of offcanvass
  	 mobileMenuOutsideClick () {

  		$(document).click(function (e) {
  	    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
  	    if (!container.is(e.target) && container.has(e.target).length === 0) {

  	    	if ( $('body').hasClass('offcanvas') ) {

      			$('body').removeClass('offcanvas');
      			$('.js-colorlib-nav-toggle').removeClass('active');

  	    	}

  	    }
  		});

  		$(window).scroll(function(){
  			if ( $('body').hasClass('offcanvas') ) {

      			$('body').removeClass('offcanvas');
      			$('.js-colorlib-nav-toggle').removeClass('active');

  	    	}
  		});

  	};

  	 sliderMain() {

  	  	$('#colorlib-hero .flexslider').flexslider({
  			animation: "fade",
  			slideshowSpeed: 5000,
  			directionNav: true,
  			start: function(){
  				setTimeout(function(){
  					$('.slider-text').removeClass('animated fadeInUp');
  					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
  				}, 500);
  			},
  			before: function(){
  				setTimeout(function(){
  					$('.slider-text').removeClass('animated fadeInUp');
  					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
  				}, 500);
  			}

  	  	});

  	};

  	 stickyFunction() {

  		var h = $('.image-content').outerHeight();

  		if ($(window).width() <= 992 ) {
  			$("#sticky_item").trigger("sticky_kit:detach");
  		} else {
  			$('.sticky-parent').removeClass('stick-detach');
  			$("#sticky_item").trigger("sticky_kit:detach");
  			$("#sticky_item").trigger("sticky_kit:unstick");
  		}

  		$(window).resize(function(){
  			var h = $('.image-content').outerHeight();
  			$('.sticky-parent').css('height', h);


  			if ($(window).width() <= 992 ) {
  				$("#sticky_item").trigger("sticky_kit:detach");
  			} else {
  				$('.sticky-parent').removeClass('stick-detach');
  				$("#sticky_item").trigger("sticky_kit:detach");
  				$("#sticky_item").trigger("sticky_kit:unstick");

  				$("#sticky_item").stick_in_parent();
  			}

  		});

  		$('.sticky-parent').css('height', h);

  		$("#sticky_item").stick_in_parent();

  	};

    _startUp(){
      setTimeout(() => {
        this.fullHeight();
        this.contentWayPoint();
        this.burgerMenu();
        this.mobileMenuOutsideClick();
        this.sliderMain();
        this.stickyFunction();
      }, 200);
    }

}
