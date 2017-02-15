'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    cfg: {
      iconsPath: 'source/icons',
      imagesPath: 'source/images'
    },

    // SVG Sprite generator
    svgstore: {
      dev: {
        options: {
          prefix : 'icon-',
          cleanup: false,
          svg: {
            viewBox : '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            style: 'display:none'
          }
        },
        src: ['<%= cfg.iconsPath %>/*.svg'],
        //src: ['<%= cfg.iconsPath %>/*.svg', '<%= cfg.shapesPath %>/*/*.svg'],
        dest: '<%= cfg.imagesPath%>/icons.svg'
      },
    },
  });

  grunt.registerTask('svg', ['svgstore']);
}
