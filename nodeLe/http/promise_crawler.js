var http = require('http');
var cheerio = require('cheerio');
var Promise = require('Promise');
var baseUrl = 'http://www.imooc.com/learn/';

var videoIds = [348, 259, 197, 134, 75];

//源码进行分析  npm install cheerio
function filterChapters(html) {

    var $ = cheerio.load(html);

    var chapters = $('.chapter');

    var title = $('#page_header .path span').text();
    var number = parseInt($($('.info_num i')[0]).text().trim(), 10);

   /* courseData = {
        title: title,
        number: number,
        videos: [{
            chapterTitle:'',
            videos:[
                'title':'',
                'id': ''
            ]
        }]
    }
    */
    var courseData = {
        videos: [],
        number: number,
        title:title
    };

    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };

        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text();
            var id = video.attr('href').split('vidoe')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            })

        });

        courseData.videos.push(chapterData);

    });

    return courseData;
}

function printCourseInfo(coursesData) {

    coursesDate.forEach(function (courseData) {
        console.log(courseData.number + '人学过 ' + courseData.title +'\n');



    });

    coursesData.videos.forEach(function (courseData) {

        console.log('###' + courseData.title + '\n');

        courseData.forEach(function (item) {
            var chapterTitle = item.chapterTitle;

            console.log(chapterTitle + '\n');

            item.videos.forEach(function (video) {
                console.log('---' + video.id + '---' + video.title + '\n');
            })

        });

    })
}

function getPageAsync(url) {
    return new Promise(function(resolve, reject){
        console.log('正在爬取' + url);

        http.get(url, function (res) {
            var html = '';

            res.on('data', function (data) {
                html += data;
            });

            res.on('end', function () {
                // console.log(html)
                resolve(html);

            })
        }).on('error', function (e) {
            reject(e);

            console.log('获取课程数据出错！');
        })
    })


}

var fetchCourseArray = [];

videoIds.forEach(function (id) {
    fetchCourseArray.push(getPageAsync(baseUrl + id));
});

Promise
    .all(fetchCourseArray)
    .then(function (pages) {
        
        var coursesData = [];
        
        pages.forEach(function (html) {
            var courses = filterChapters(html);

            coursesData.push(courses);
        });

        coursesData.sort(function (a, b) {
            return a.number < b.number
        });

        printCourseInfo(coursesData);

    });

