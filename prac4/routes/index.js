var express = require('express');
var router = express.Router();
var sd = 0;
var colorChange = 0;
var timeRecord = [];
var t = null;
var visited = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/last.txt', function(req, res, next){//3.1
    let date = new Date();
    let d = date;

    if(sd!=0){
        res.send(String(sd));
        sd = d;
    }else{
        res.send("");
        sd = d;
    }

});
router.get('/color.html', function(req, res, next) {//3.2

    if(colorChange === 0){
        res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>color</title></head><body><h1 style='color: red'>red</h1></body></html>");
        colorChange++;
    }else if(colorChange === 1){
        res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>color</title></head><body><h1 style='color: yellow'>yellow</h1></body></html>");
        colorChange++;
    }else if(colorChange === 2){
        res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>color</title></head><body><h1 style='color: green'>green</h1></body></html>");
        colorChange++;
    }else if(colorChange === 3){
        res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>color</title></head><body><h1 style='color: blue'>blue</h1></body></html>");
        colorChange=0;
    }

});

router.get('/log.html', function(req, res, next) {//3.3
    t = new Date();
    timeRecord.push(t);
    var content;
    var tag;
    content = timeRecord[0];
    for(var i=1; i<timeRecord.length; i++){
        tag = "<li>"+timeRecord[i]+"</li>";
        content+=tag;


    }
    res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>log</title></head><body><ul><li>"+String(content)+"</li></ul></body></html>");



});


//3.4
router.get('/first.html', function(req, res, next){
    if(visited === false){
        res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>first</title></head><body><h1><a href='/main.html'>Welcome</a></h1></body></html>");
        visited = true;
    }else{
        res.redirect('/main.html');
    }
});

router.get('/main.html', function(req, res, next){
    if(visited === false){
        res.redirect('/first.html');
    }else{
        res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>first</title></head><body><h1>My main site</h1><p>Hello</p></body></html>");
    }

});
//3.4

module.exports = router;
