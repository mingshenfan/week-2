var gulp = require("gulp");
var webserver = require("gulp-webserver");
var sequence =  require("gulp-sequence").use(gulp);

gulp.task("server", function() {
        gulp.src("./msf-week2")
        .pipe(webserver({
            port: 8080, //端口号
            open: true, //自动发开浏览器
            livereload: true //自动刷新页面

        }))
})