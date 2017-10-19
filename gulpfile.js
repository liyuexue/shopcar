/**
 * Created by Administrator on 2017/10/18.
 */


var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');

gulp.task("server",function () {
    gulp.src('')
        .pipe(webserver({
            livereload:true,
            directoryListing:true,
            middleware:function (req,res,next) {
                var requestUrl = url.parse(req.url).pathname;
                console.log(requestUrl);
                if(requestUrl == '/api'){
                    var data = [{
                        id: 1,
                        name: "后街标配",
                        image: "http://localhost:8080/Content/images/icon/img_01.png",
                        addr: "北京",
                        state: true,
                        num: 1,
                        price: 1500,
                        size: "M",
                        color: "red"
                    },
                        {
                            id: 2,
                            name: "后街舒适",
                            image: "http://localhost:8080/Content/images/icon/img_02.png",
                            addr: "北京",
                            state: true,
                            num: 1,
                            price: 2300,
                            size: "L",
                            color: "green"
                        },
                        {
                            id: 3,
                            name: "后街豪华",
                            image: "http://localhost:8080/Content/images/icon/img_03.png",
                            addr: "北京",
                            state: false,
                            num: 1,
                            price: 3600,
                            size: "s",
                            color: "blue"
                        },
                        {
                            id: 4,
                            name: "后街豪华",
                            image: "http://localhost:8080/Content/images/icon/img_02.png",
                            addr: "北京",
                            state: false,
                            num: 1,
                            price: 3600,
                            size: "s",
                            color: "blue"
                        }

                    ];
                    res.writeHead(200,{
                        "Content-Type":"application/json;charset=utf-8;",
                        "Access-Control-Allow-Origin":"*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open:"/index.html",
            port:8080
        }))
});