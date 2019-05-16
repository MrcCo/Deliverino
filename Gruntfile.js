

module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Minify Image
        imagemin: {
            dynamic: {
                files:[{
                    expand: true,
                    cwd: 'build/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img'
                }]
            }
        },


        // Watch Task
        watch: {
            files: ['build/sass/style.scss'],
            tasks: ['sass']
        },

        //SASS Task
        sass: {
            dist: { 
                files: {
                    'build/css/style.css':'build/sass/style.scss'
                }
            }
        },

        //Browser Sync Task
        browserSync: {
            bsFiles: {
                src : [
                    'build/css/style.css',
                    'build/js/main.js',
                    'build/home.html',
                    'build/about.html',
                    'build/menu.html',
                    'build/blog.html',
                    'build/contact.html',
                    'build/element.html',
                ]
            },
            options: {
                watchTask: true,
                server: './build'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync','watch']);
}
