document.addEventListener('DOMContentLoaded', ()=>{
	
	const burger = document.querySelector('.burger');
	const headerMenu = document.querySelector('header .menu');

	burger?.addEventListener('click', ()=>{
		[headerMenu, burger].forEach(el=> el.classList.toggle('open'));
		burger.classList.contains('open') ? remove_body_scroll() : add_body_scroll();
	});
	
	let scrollY;
	function remove_body_scroll() {
		scrollY = window.scrollY;
		const addHeight = () => {
			document.documentElement.classList.add("lock");
			clearTimeout(timeId);
		};
		const timeId = setTimeout(addHeight, 500);
	}
	
	function add_body_scroll() {
		document.documentElement.classList.remove("lock");
		window.scrollTo(0, scrollY);
	}
	
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