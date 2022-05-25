$(document).ready(function(){
	//sidebar our-reviews
	$('#sidebar-our-reviews').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:1,
		responsiveClass:true,
	});
	//sidebar our-works
	$('#sidebar-our-works').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:1,
		responsiveClass:true,
	});	
	//index our-reviews
	$('#index-our-reviews').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:4,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			450:{
				items:2,
			},
			767:{
				items:3,
			},
			1200:{
				items:4,
			}
		}
	});
	//index our-works
	$('#index-our-works').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:4,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			450:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	
    //Лидеры продаж на главной	
	$('.liders-items').owlCarousel({
		loop:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		responsiveClass:true,
		nav:true,
		margin:0,
		dots:true,
		center:true,
		responsive:{
			0:{
				items:1,
				nav:false,
			},
			760:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	
    //Проверка позиции
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    //Клик
    $('.to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
	
	// Fixed navbar
	$(window).scroll(function(){
		if( $(window).width() > 1200){
			if ($(window).scrollTop() >= 150) {
				$('.fixed_nav').addClass('fixed');
				$('header').css('marginTop', 50);
			}
			else {
				$('.fixed_nav').removeClass('fixed');
				$('header').css('marginTop', 0);
			}
		}
	});
	
	//index Main sldier
	$('.main-slider').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:1,
	});
	
	//index Top seller slider
	$('#top-sellers').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:2,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			1200:{
				items:2,
			}
		}
	});
	//catalog-cat brus-doma slider
	$('#brus-doma').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:3,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			450:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	//catalog-cat karkasnie-doma slider
	$('#karkasnie-doma').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:3,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			450:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	//catalog-cat schitovie-doma slider
	$('#schitovie-doma').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:3,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			450:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	//catalog-cat bani-brus slider
	$('#bani-brus').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		dots:true,
		items:3,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			450:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	//init fancybox gallery
	$(document).ready(function() {
		$(".fancybox").fancybox();
	});
});
$(document).ready(function() {
    $('.bxslider2').bxSlider({
		responsive: true,
        pager: false,
		preloadImages: 'visible',
		touchEnabled: false,
		preventDefaultSwipeY: false,
		preventDefaultSwipeX: true
    });
    $('.bxslider').bxSlider({
		responsive: true,
		pager: true,
        controls: false,
        auto: true,
		preloadImages: 'visible',
        pause: 7000,
		touchEnabled: false,
		preventDefaultSwipeY: false,
		preventDefaultSwipeX: true
    });
    $('.bxslider1').bxSlider({
		responsive: true,
        pager: true,
		preloadImages: 'visible',
		touchEnabled: true,
		preventDefaultSwipeY: true,
		preventDefaultSwipeX: true
    });
    $('.bxslider3').bxSlider({
		responsive: true,
        controls: true,
		pager: true,
        pagerCustom: '.bx-pager',
		preloadImages: 'visible',
		touchEnabled: false,
		preventDefaultSwipeY: false,
		preventDefaultSwipeX: true
    });
});
$(document).ready(function() {
    jQuery(function($) {
        var $active = $('#acordeon .panel-collapse.in').prev().addClass('active');
        $active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
        $('#acordeon .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
        $('#acordeon').on('show.bs.collapse', function(e) {
            $('#acordeon .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
            $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        })
    });
});
$(document).ready(function() {
    $('#toggle').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('move');
        } else {
            $(this).addClass('active');
            $('body').addClass('move');
            $('html,body').animate({
                scrollTop: 0
            }, 300)
            // ulHeight = $('#menu ul').height();
            // $('#menu').css('paddingTop', $(window).height() / 2 - ulHeight / 2.2);
        }
    });
    $('#menu .close').click(function() {
        $('#toggle').click();
    });
    $('.open_modal').click(function(e) {
        e.preventDefault();
        $('.overlay').fadeIn('fast', function() {
            $('.nonebox').animate({
                'top': '40%'
            }, 500);
        });
    });
    $('.box-close.one').click(function(e) {
        e.preventDefault();
        $('.nonebox').animate({
            'top': '-1100px'
        }, 500, function() {
            $('.overlay').fadeOut('fast');
        });
    });
    $('.fancybox').fancybox();
    $('.ontop1').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('.tabs_first').offset().top - 50
        }, 1000);
        e.preventDefault();
        $('.tt_tab1').toggleClass("resp-tab-active");
        $('.tt_tab1_content').toggleClass("resp-tab-content-active");
        $('.tt_tab2').removeClass("resp-tab-active");
        $('.tt_tab3').removeClass("resp-tab-active");
        $('.tt_tab2_content').removeClass("resp-tab-content-active");
        $('.tt_tab3_content').removeClass("resp-tab-content-active");
        $('.tt_tab2_content').hide();
        $('.tt_tab3_content').hide();
        $('.tt_tab1_content').show();
    });
    $('.ontop2').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('.tabs_first').offset().top - 50
        }, 1000);
        $('.tt_tab2').toggleClass("resp-tab-active");
        $('.tt_tab2_content').toggleClass("resp-tab-content-active");
        $('.tt_tab1').removeClass("resp-tab-active");
        $('.tt_tab3').removeClass("resp-tab-active");
        $('.tt_tab1_content').removeClass("resp-tab-content-active");
        $('.tt_tab3_content').removeClass("resp-tab-content-active");
        $('.tt_tab1_content').hide();
        $('.tt_tab3_content').hide();
        $('.tt_tab2_content').show();
        e.preventDefault();
    });
    $('.ontop3').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('.tabs_first').offset().top - 50
        }, 1000);
        $('.tt_tab3').toggleClass("resp-tab-active");
        $('.tt_tab3_content').toggleClass("resp-tab-content-active");
        $('.tt_tab1').removeClass("resp-tab-active");
        $('.tt_tab2').removeClass("resp-tab-active");
        $('.tt_tab1_content').removeClass("resp-tab-content-active");
        $('.tt_tab2_content').removeClass("resp-tab-content-active");
        $('.tt_tab1_content').hide();
        $('.tt_tab2_content').hide();
        $('.tt_tab3_content').show();
        e.preventDefault();
    });
    $('.ontop1_1').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('.tabs_first1').offset().top - 50
        }, 1000);
        e.preventDefault();
        $('.tt_tab1_1').toggleClass("resp-tab-active");
        $('.tt_tab1_content_1').toggleClass("resp-tab-content-active");
        $('.tt_tab2_1').removeClass("resp-tab-active");
        $('.tt_tab3_1').removeClass("resp-tab-active");
        $('.tt_tab2_content_1').removeClass("resp-tab-content-active");
        $('.tt_tab3_content_1').removeClass("resp-tab-content-active");
        $('.tt_tab2_content_1').hide();
        $('.tt_tab3_content_1').hide();
        $('.tt_tab1_content_1').show();
    });
    $('.ontop2_1').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('.tabs_first1').offset().top - 50
        }, 1000);
        $('.tt_tab2_1').toggleClass("resp-tab-active");
        $('.tt_tab2_content_1').toggleClass("resp-tab-content-active");
        $('.tt_tab1_1').removeClass("resp-tab-active");
        $('.tt_tab3_1').removeClass("resp-tab-active");
        $('.tt_tab1_content_1').removeClass("resp-tab-content-active");
        $('.tt_tab3_content_1').removeClass("resp-tab-content-active");
        $('.tt_tab1_content_1').hide();
        $('.tt_tab3_content_1').hide();
        $('.tt_tab2_content_1').show();
        e.preventDefault();
    });
    $('.ontop3_1').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('.tabs_first1').offset().top - 50
        }, 1000);
        $('.tt_tab3_1').toggleClass("resp-tab-active");
        $('.tt_tab3_content_1').toggleClass("resp-tab-content-active");
        $('.tt_tab1_1').removeClass("resp-tab-active");
        $('.tt_tab2_1').removeClass("resp-tab-active");
        $('.tt_tab1_content_1').removeClass("resp-tab-content-active");
        $('.tt_tab2_content_1').removeClass("resp-tab-content-active");
        $('.tt_tab1_content_1').hide();
        $('.tt_tab2_content_1').hide();
        $('.tt_tab3_content_1').show();
        e.preventDefault();
    });
    $('[data-fancybox="gallery"]').fancybox({
	// Options will go here
    });
});

$(document).on('click','#region-dropdown .region', function(){
	var cvalue = $(this).data('region');
	var exdays = 30;
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "REGION_EN=" + cvalue + ";" + expires + ";path=/";
	window.location.reload();
});

$(document).on('click','.mob-phones--wrapper > span', function(){
	$('.mob-phones--wrapper').toggleClass('active');
});


$(document).on('click','.header-city-name', function(){
	$('.header-city-name').toggleClass('active');
});

/* Блок видео с отложенной загрузкой от IKSWEB.ru*/
$(document).ready(function(){
    var youtube = document.querySelectorAll( ".youtube" );  
	console.log('%c Скрипт разработан сайтом IKSWEB.ru !!! ', 'background: #354251; color: #fff;font-size: 30px;');		
    for (var i = 0; i < youtube.length; i++) {
        var source;      
		var preview = youtube[i].dataset.preview;
		if(!preview){
			source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		}else{
			source = preview;
		}		
		var image = new Image();
			image.src = source;
			image.addEventListener( "load", function() {
				youtube[i].appendChild(image);
			}(i));		
		youtube[i].addEventListener( "click", function() {
			var iframe = document.createElement( "iframe" );
			iframe.setAttribute( "frameborder", "0" );
			iframe.setAttribute( "allowfullscreen", "" );
			iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
			this.innerHTML = "";
			this.appendChild( iframe );
		} );    
    };   
});