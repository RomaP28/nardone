document.addEventListener('DOMContentLoaded', ()=>{
	
	new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		spaceBetween: 19,
		
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
});