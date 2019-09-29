$(document).ready(function() { 

    var burgerMenu = document.querySelector(".burger");
    var burger = document.querySelector("#burger");
    var overlay = document.querySelector(".overlay");
    burger.onclick = toggle();
    overlay.onclick = toggle(); 

    function toggle() {
        var burgerDisplay = burgerMenu.style.display;
        if (burgerDisplay === 'block') {
            burgerMenu.style.display = "none";
            burger.classList.remove("burger-select");
            overlay.style.display = "none";
            $('.navbar-search').hide();
			$('.logo-career').css('display', 'inline-block');         
        } else {
            burgerMenu.style.display = "block";
            burger.classList.add("burger-select");
            $('.navbar-search').show();  
            $('.logo-career').hide();          
            overlay.style.display = "block";
        }
        return toggle;
    }

	$('select').customSelect();

	$("#city-choose-popup").hide();
	$("#city-choose").click(function() {
		$("#city-choose-popup").slideDown();
		return false;
	});
	$("#city-choose-popup .close").click(function() {
		$("#city-choose-popup").hide();
	});	

	$("#gift-modal").hide();
	$(".js-gift-modal-link").click(function() {
		$("#gift-modal").slideDown();
		$("#gift-modal").parent().find('.section-overlay').show();
		return false;
	});
	$("#gift-modal .close").click(function() {
		$("#gift-modal").hide();
		$(".section-overlay").hide();		
	});	

	var swiper = new Swiper('.main-carousel', {
		loop: true,
		speed: 700,
		navigation: {
			nextEl: '.main-carousel .swiper-button-next',
			prevEl: '.main-carousel .swiper-button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},		
		effect: 'fade',		
	});

	var swiper = new Swiper('.section-carousel', {
		loop: true,
		speed: 700,
		navigation: {
			nextEl: '.section-carousel .swiper-button-next',
			prevEl: '.section-carousel .swiper-button-prev',
		},
		autoplay: { 
			delay: 5000,
			disableOnInteraction: false,
		},		
		effect: 'fade',		
	});

	var swiper = new Swiper('.vacancies-carousel', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.vacancies-carousel-wrapper .swiper-button-next',
			prevEl: '.vacancies-carousel-wrapper .swiper-button-prev',
		},			
		breakpoints: {
			1399.98: {
			  	slidesPerView: 3,
			  	spaceBetween: 20,
			},		
			1199.98: {
				slidesPerView: 2,
				spaceBetween: 20,
			},	
			991.98: {
			  	slidesPerView: 1,
			   	centeredSlides: true,
			   	loop: true,	
			},
		}
	});	

	var swiper = new Swiper('.pluses-carousel', {
		slidesPerView: 5,
		spaceBetween: 20,
		loop: true,
		centeredSlides: true,      
		touchRatio: 0.2,
		slideToClickedSlide: true,

		navigation: {
			nextEl: '.pluses-carousel-wrapper .swiper-button-next',
			prevEl: '.pluses-carousel-wrapper .swiper-button-prev',
		},	
		breakpoints: {	
			1199.98: {
				slidesPerView: 3,
			},	
			767.98: {
			  	slidesPerView: 1,
			   	centeredSlides: true,
			   	loop: true,	
			  // spaceBetween: 30,
			},
		}
	});	

	var swiper = new Swiper('.history-carousel', {
		slidesPerView: 1,
		speed: 400,
		loop: true,	
		effect: 'fade',			
		navigation: {
			nextEl: '.history-carousel .swiper-button-next',
			prevEl: '.history-carousel .swiper-button-prev',
		},		
	});	

	var swiper = new Swiper('.rating-carousel .swiper-container', {
		slidesPerView: 1,
		speed: 400,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},		
		effect: 'fade',				
	});	

    $('.scroll-tabs').on('scroll',function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });

    $('#address-1').on('click', function () {
        $('.list-address-map-item').removeClass('current');
        $('#address-1-map').addClass('current');
    });
    $('#address-2').on('click', function () {
        $('.list-address-map-item').removeClass('current');
        $('#address-2-map').addClass('current');
    });
    $('#address-3').on('click', function () {
        $('.list-address-map-item').removeClass('current');
        $('#address-3-map').addClass('current');
    });

    $('.dropdown-nav .dropdown-nav-item').on('click', function () {
        $(this).next().slideToggle();
        return false;
    });    


    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');
    var startUpload = function(files) {
        console.log(files)
    }
    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })
    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';
        startUpload(e.dataTransfer.files)
    }
    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }
    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }

    $(function () {
    	$('[data-toggle="tooltip"]').tooltip()
    })

});












