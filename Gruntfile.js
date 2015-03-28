/*!
 * Instant Bootstrap's Gruntfile 
 * Created by: Brian Orr 
 * @digitalreligion
 */

module.exports = function(grunt) {
  'use strict';
  
  // DEFINE YOUR INSTANT BOOTSTRAP DIRECTORIES 
  // You can leave this folder name the same and start working right away, or rename to fit your own desiered file structure.
     var globalConfig = {
   		src: 'source',  // This folder is where you keep all your LESS, SASS, and unminified JS, and CSS 
   		dest: 'base_theme'  // This is the destination folder where your minified CSS, and JS will be compiled.
		};                  
		
  // GRUNT INIT CONFIGURATION 	  
  grunt.initConfig({
  	globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' + //This Banner will be at the top of all your compiled files. Feel free to change how you see fit.
            ' * Instant Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',
    
	// Use JSHINT to validate javascript files    
    'jshint': {
      files: [
        'Gruntfile.js', 
		// Setup your javascripts file path to test your javascript files. 		  
        '<%= globalConfig.src %>/JS/bootstrap.js'
      ],
      options: {
        // options here to override JSHintd defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    
    // Use Uglify to minify and build out your Javascript. 
    'uglify': {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
        beautify : {
	        beautify: false,
	        ascii_only: true,
	        quote_keys: true
	    }  
      },
	  build: {
	  	
        // Grunt will search for "**/*.js" under "src/js/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
            expand: true,
            src: ['**/*.js', '!**/*.min.js', '!**/*.backup.js'],
            dest: '<%= globalConfig.dest %>/js/',
            cwd: '<%= globalConfig.src %>/JS/',
            extDot: 'last',
            ext: '.min.js'
            
        }]
      }
    },

	// SASS FILE COMPILATION
	'sass': {
	  development: {
	    options: {
	      banner: '<%= banner %>'
	    },
	    files: {
	      "<%= globalConfig.src %>/CSS/font-awesome.css": "<%= globalConfig.src %>/SASS/fontawesome/font-awesome.scss"
	    }
	  }
	},	
    
    // LESS FILE COMPILATION
	'less': {
	  development: {
	    options: {
	      banner: '<%= banner %>'
	    },
	    files: {
        "<%= globalConfig.src %>/CSS/bootstrap.css": "<%= globalConfig.src %>/LESS/bootstrap/bootstrap.less",
	    "<%= globalConfig.src %>/CSS/font-awesome.css": "<%= globalConfig.src %>/LESS/fontawesome/font-awesome.less"
	    }
	  }
	},
	
	// MINIFY CSS
	'cssmin': {
	  minify: {
	    expand: true,
	    src: ['*.css', '!*.min.css'],
	    dest: '<%= globalConfig.dest %>/css/',
	    cwd: '<%= globalConfig.src %>/CSS/',
	    extDot: 'last',
	    ext: '.min.css'
	  }
	},
	
    // WATCH FILES FOR CHANGES
    watch: {
	  // To uses SASS Just change the LESS directory to your SASS directory and change your less task to sass.
	  files: ['<%= globalConfig.src %>/LESS/*/*.less','<%= globalConfig.src %>/JS/*.js'],
      tasks: ['less','cssmin']
    }
  });
  
  
	
  // LOAD GRUNT PLUGINS 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');    

  // REGISTER GRUNT TASKS 
  grunt.registerTask('dist-test', ['jshint']);
  grunt.registerTask('default', ['uglify', 'less','cssmin']);
  grunt.registerTask('dist-less', ['less','cssmin']);
  grunt.registerTask('dist-sass', ['sass','cssmin']);
  grunt.registerTask('dist-js', ['uglify']);
  grunt.registerTask('dist-watch', ['watch']);


};