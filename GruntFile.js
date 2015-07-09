module.exports = function (grunt)
{
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		bowercopy: {
	  		options: {
	    		srcPrefix: 'bower_components'
	  		},
	  		scripts: {
	    		options: {
	      			destPrefix: 'scripts/vendor'
	    		},
	    		files: {
		      		'jquery':'jquery/dist/*.js' ,
		      		'bootstrap':'bootstrap-sass/assets/javascripts/*.*',
		      		'modernizr':'modernizr/modernizr.js' 
	    		}
	  		},
	  		sass: {
	  			options: {
	  				destPrefix: 'sass/vendor'
	  			},
	  			files: {
	  				'bootstrap-sass':'bootstrap-sass/assets/stylesheets/*.*',
	  				'bootstrap-sass/bootstrap':'bootstrap-sass/assets/stylesheets/bootstrap/*.*',
	  				'bootstrap-sass/bootstrap/mixins':'bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.*'
	  			}
	  		},
	  		styles: {
	  			options: {
	  				destPrefix: 'css'
	  			},
	  			files: {
	  				'':'font-awesome/css/*.css'
	  			}
	  		},
	  		fontawesome: {
	  			options: {
	  				destPrefix: 'fonts'
	  			},
	  			files: {
	  				'':'font-awesome/fonts/*.*'
	  			}
	  		},
	  		Glyphicons: {
	  			options: {
	  				destPrefix: 'fonts'
	  			},
	  			files: {
	  				'bootstrap':'bootstrap-sass/assets/fonts/bootstrap/*.*'
	  			}
	  		}
		}

	})
	
	grunt.loadNpmTasks('grunt-bowercopy');

	//tasks
	grunt.registerTask('bower', ['bowercopy']);
}