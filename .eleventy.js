module.exports = function(eleventyConfig) {
	/* Watch css files for changes
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	eleventyConfig.setServerOptions({
		watch: ['./public/css/**/*.css'],
		showAllHosts: true
	})
	/* Passthrough JavaScript folder
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	eleventyConfig.addPassthroughCopy({
		"source/_assets/js": "js"
	})
	
	
	/* DEV Environment: Passthrough Static Assets
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	if ( process.env.MY_ENVIRONMENT !== "prod" ) {
		eleventyConfig.addPassthroughCopy({
			"static": "static"
		})
	}
	
	/* Environment Production|Dev */
	module.exports = function() {
		return {
			environment: process.env.MY_ENVIRONMENT || "dev"
		}
	}
	/* SHORTCODE: Static Assets Linking */
	eleventyConfig.addShortcode("asset", function ( path ) {
		const host = 'https://assets.artfellowship.space/'
		if (process.env.MY_ENVIRONMENT !== 'prod') {
			return '/static/' + path
		}
		else {
			return host + path
		}
		return 'Error'
	})	
	
	
	/* Set input/output
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	return {
		dir: {
			input: "source",
			output: "public"
		}
	}
}