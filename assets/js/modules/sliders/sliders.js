import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

function initSlider(selector, config) {
	const slider = document.querySelector(selector);
	if (!slider) return;

	new Swiper(slider, config);
}

export function initSliders() {
	initSlider('.hero-slider', {
		modules: [Pagination],

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}
