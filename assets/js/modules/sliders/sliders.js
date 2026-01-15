import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

function initSlider(selector, config) {
	const slider = document.querySelector(selector);
	if (!slider) return;

	new Swiper(slider, config);
}

export function initSliders() {
	initSlider('.hero-slider', {
		modules: [Pagination, Autoplay],

		// loop: true,
		// autoplay: {
		// 	delay: 4000,
		// 	disableOnInteraction: false,
		// },

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}
