import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import webpHtmlNosvgLv from "gulp-webp-html-nosvg-lv";

export const html = () => {
	return app.gulp.src(`${app.path.build.html}*.html`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(
			app.plugins.if(
				app.isWebP,
				webpHtmlNosvgLv()
			)
		)
		.pipe(versionNumber({
			'value': '%DT%',
			'append': {
				'key': '_v',
				'cover': 0,
				'to': ['css', 'js', 'img']
			},
			'output': {
				'file': 'config/version.json'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.html));
}
