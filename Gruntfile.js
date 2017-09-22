var LIVERELOAD_PORT = 35829, lrSnippet = require('connect-livereload')({
	port : LIVERELOAD_PORT
}), serveStatic = require('serve-static'),
mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};

/*global module:false*/
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch : {
      livereload : {
        files : [
            'WebContent/**/*.*', '!WebContent/resources/**/*', '!WebContent/res/css/**/*.scss',  '!WebContent/res/css/**/*.map' 
        ],
        options : {
          livereload : LIVERELOAD_PORT
        }
      },
      test : {
        files : [ 'tests/*.js', 'tests/*.html',
        // 'WebContent/*.{html,css,js,png,jpg,gif,svg,json}', 'WebContent/css/**/*.*', 'WebContent/i18n/**/*.*',
        // 'WebContent/img/**/*.*', 'WebContent/model/**/*.*', 'WebContent/other/**/*.*', 'WebContent/view/**/*.*', 'WebContent/view/**/*.*',
        // 'WebContent/res/**/*.*', 'WebContent/easystart/**/*.*', 'WebContent/easyform/**/*.*', 'WebContent/easyremote/**/*.*'

        'WebContent/**/*.*', '!WebContent/resources/**/*', '!WebContent/res/css/**/*.scss',  '!WebContent/res/css/**/*.map'],
        tasks : [ 'concurrent:verify' ]
      },
      doc : {
        files : [ 'WebContent/**/*.js', '!WebContent/resources/**/*', '!WebContent/**/unused/**/*', 'readme.md' ],
        tasks : [ 'jsdoc' ]
      },
      sass : {
        files : [ 'WebContent/res/css/**/*.scss'],
        tasks : [ 'sass' ]
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    connect : {
      options : {
//						port : 80,
        port : 9000,
        hostname : '0.0.0.0'
      },
      livereload : {
        options : {
          middleware : function(connect) {
            return [ lrSnippet, function(req, res, next) { // Allow CORS for
              // development
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', '*');
              return next();
            }, serveStatic('WebContent') ];
          }
        }
      },
      test : {
        options : {
          port : 9090,
          keepalive : false,
          base : 'WebContent'
        /*
         * middleware : function(connect) { return [ lrSnippet, mountFolder(connect, 'dest') ]; }
         */
        }
      }
    },
    open : {
      server : {
        url : 'http://localhost:<%= connect.options.port %>'
      },
      build : {
        url : 'http://localhost:<%= connect.build.options.port %>'
      },
      doc : {
        path : 'doc/index.html'
      }
    },
    concurrent: {
      options: {
          logConcurrentOutput: true
      },
      server: {
          tasks: ["watch:livereload"]
      },
      verify: {
          tasks: ["jshint", "qunit"]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);

  grunt.registerTask('server', function() {
		grunt.task.run([ 'connect:livereload', 'open:server', 'concurrent:server' ]);
	});

};
