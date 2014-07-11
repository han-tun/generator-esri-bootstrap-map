'use strict';

module.exports = function (grunt) {

    //instead of loadNpmTasks, load all dev dependencies from the package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // read package file for properties
        pkg: grunt.file.readJSON('package.json'),

        // copy files from downloaded packages into directories
        copy: {
            bootstrap: {
                files: {
                    'app/js/lib/bootstrap.min.js': 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'app/css/bootstrap.min.css': 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'app/fonts/glyphicons-halflings-regular.eot': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                    'app/fonts/glyphicons-halflings-regular.svg': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                    'app/fonts/glyphicons-halflings-regular.ttf': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                    'app/fonts/glyphicons-halflings-regular.woff': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
                }
            },
            jquery: {
                files: {
                    'app/js/lib/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                event: ['changed'],
                livereload: true
            },
            javascript: {
                files: ['app/js/*.js'],
                tasks: [ function () {
                    grunt.log.writeln('javascript changed, updating');
                }]
            },
            style: {
                files: ['app/css/*.css'],
                tasks: [ function(){
                    grunt.log.writeln('css style changed, updating');
                }]
            },
            html: {
                files: ['*.html'],
                tasks: [ function(){
                    grunt.log.writeln('html file changed, updating');
                }]
            }
        }
    });

    // configurable output paths
//    var yeomanConfig = {
//        app: 'app',
//        dist: 'dist'
//    };

    // grunt configuration
//    grunt.initConfig({
//        yeoman: yeomanConfig,
//        connect: {
//            server: {
//                options: {
//                    port: 9001,
//                    base: 'app'
//                }
//            }
//        },
//        watch: {
//            appFiles: {
//                files: ['app/**/*'],
//                tasks: ['compass'],
//                options: {
//                    livereload: true
//                }
//            }
//        }
//    });

    // tell grunt what plugins to use
//    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
//    grunt.registerTask('serve', ['connect']);
};