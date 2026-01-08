export const fonts = () => {
	return app.gulp
		.src(`${app.path.src.fonts}*.woff2`, { encoding: false })
		.pipe(app.plugins.newer(app.path.build.fonts))
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Fonts',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.plugins.browserSync.stream());
};
