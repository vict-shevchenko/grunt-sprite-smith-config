module.exports = function (grunt) {

	/** @namespace grunt.option */
	/** @namespace grunt.task */
	/** @namespace grunt.task.run */
	/** @namespace grunt.initConfig */
	/** @namespace grunt.loadNpmTasks */
	/** @namespace grunt.registerTask */


		// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		buildFolder: '<%= grunt.option("buildFolder") %>',
		
		sprite: {
			icons: {
				src: 'styles/img/sprites/icons/*.png',
				destImg: '<%= buildFolder %>/styles/img/icons.png',
				destCSS: '<%= buildFolder %>/styles/css/icons.css',
				cssTemplate: 'styles/img/sprites/sprite.mustache',
				algorithm: 'binary-tree',
				padding: 1
			}//,
			//'configuration-images': {
			//	src: 'styles/img/sprites/configuration*//*.png',
			//	destImg: '<%= buildFolder %>/styles/img/configuration-images.png',
			//	destCSS: '<%= buildFolder %>/styles/css/configuration-images.css',
			//	cssTemplate: 'styles/img/sprites/sprite.mustache',
			//	cssVarMap: function (sprite) {
			//		sprite.category = '-configuration';
			//	},
			//	algorithm: 'binary-tree',
			//	padding: 1
			//}
		}
	});

	// Load the plugins that provide tasks
	
	grunt.loadNpmTasks('grunt-spritesmith');

	// Registering tasks
	grunt.registerTask('development', ['grunt-spritesmith']);


};
