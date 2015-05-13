module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-build-control');

  grunt.initConfig({

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:johnurbanik/johnurbanik.github.io.git',
          branch: 'master'
        }
      }
    }
  });

grunt.registerTask('default', [
    'buildcontrol:pages'
  ]);

};