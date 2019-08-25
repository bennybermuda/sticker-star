var app = require('express')();
//function handler that you can supply to an HTTP server
var http = require('http').createServer(app);

app.get('/', function(req, res){
  //define a route handler that gets called when we hit our website home
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('Running Server');
});

$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i
    