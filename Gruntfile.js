'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      all: {
        files: ['scripts/{,*/}*.js', 'styles/{,*/}*.css', 'index.html']
      }
    },
    express: {
      all: {
        options: {
            bases: ['.'],
            port: 9000,
            hostname: "localhost",
            livereload: true
        }
      }
    },
    open: {
      all: {
          path: 'http://localhost:9000/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['express', 'open', 'watch']);
};
