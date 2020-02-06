"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      all: {
        files: ["scripts/{,*/}*.js", "styles/{,*/}*.css", "index.html"]
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          open: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", ["connect", "watch"]);
};
