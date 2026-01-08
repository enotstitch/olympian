import webp from 'gulp-webp';
import imagemin, { svgo } from 'gulp-imagemin';
import imageminGiflossy from 'imagemin-giflossy';
import filter from 'gulp-filter';

export const images = async () => {
	const jpgPngFilter = filter(['**/*.{jpg,jpeg,png}'], { restore: true });
	const svgFilter = filter(['**/*.svg'], { restore: true });
	const gifFilter = filter(['**/*.gif'], { restore: true });

	return await app.gulp
		.src(app.path.src.images, {
			encoding: false,
		})
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Images',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(jpgPngFilter)
		.pipe(app.plugins.if(app.isProd, webp()))
		.pipe(jpgPngFilter.restore)

		.pipe(svgFilter)
		.pipe(
			app.plugins.if(
				app.isProd,
				imagemin([svgo()], {
					verbose: true,
				}),
			),
		)
		.pipe(svgFilter.restore)

		.pipe(gifFilter)
		.pipe(app.plugins.if(app.isProd, imagemin([imageminGiflossy({ lossy: 80 })])))
		.pipe(gifFilter.restore)

		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
