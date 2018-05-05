/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
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

    watch: {
        html: { 
            files: 'src/**/*.html',
            tasks: ['copy:html'],
            options: {
                livereload: true
            },
        },
        css: {
            files: 'src/**/*.less',
            tasks: ['less:development'],
            options: {
                livereload: true
            },
        },
        js: {
            files: 'src/**/*.js',
            tasks: ['copy:js'],
            options: {
                livereload: true
            }
        }
    },

    'http-server': {
        build: {
            root: 'build/',
            host: "0.0.0.0",
            port: 9000,
            showDir: true,
            autoIndex: false,
            ext: 'html',
            runInBackground: false,
            https: false,
            cache: 1,
        },
    },


    less: {
        development: {
          options: {
            compress: false,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "build/css/main.css": "src/assets/less/main.less" 
          }
        }
      },

      copy: {
        js: {
            expand: true,
            cwd: 'src/assets/js',
            src: '**/*',
            dest: 'build/js',
        },
        html: {
            expand: true,
            cwd: 'src/',
            src: '**/*.html',
            dest: 'build/',
        },
        css: {
            expand: true,
            cwd: 'src/assets/',
            src: 'css/vendor/*.css',
            dest: 'build/',
        } 
      },

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');


  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);
  grunt.registerTask('build', ['copy', 'less']);

};
