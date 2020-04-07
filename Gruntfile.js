module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: false,
            yuicompress: false,
            optimization: 2
          },
          files: {
            "css/main.css": "less/main.less", // destination file and source file
            "css/odsek.css": "less/odsek.less", // destination file and source file
            "css/navigacija.css": "less/navigacija.less", // destination file and source file

          }
        }
      },
      watch: {
        styles: {
          files: ['less/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    });
  
    grunt.registerTask('default', ['less', 'watch']);
  };
