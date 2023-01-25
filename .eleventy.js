module.exports = function(eleventyConfig) {
	/* Watch css files for changes
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	eleventyConfig.setServerOptions({
		watch: ['./public/css/**/*.css']
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