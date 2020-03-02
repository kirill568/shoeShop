$('.containerFeatures').slick({
	dots: false,
	prevArrow: '<button class="featurePre featureNav"></button>',
	nextArrow: '<button class="featureNext featureNav"></button>',
	responsive: [
		{
			breakpoint: 1540,
			settings: {
				dots: true,
				prevArrow: '<span></span>',
				nextArrow: '<span></span>',
			}
		}
	]
});

let $slider = $('.posts');

if ($slider.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.querySelector('.counter');
  
  let updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
		appendArrows: '.navBlogArrows',
		prevArrow: '<button class="prePost""></button>',
		nextArrow: '<button class="nextPost"></button>'
   });
}