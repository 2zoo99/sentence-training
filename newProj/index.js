// index.js

// express 는 쉽게 서버를 구성할 수 있도록 만든 프레임워크이다.
// express 는 웹 application을 만들기 위한 각종 라이브러리와 미들웨어가 내장되어있다. 
const http = require('http');           //http 모듈 import
const express = require('express');     //express 모듈 import
const app = express();                      //express application 생성 
const server = http.createServer(app);      // http 서버 생성 
const path = require('path');           //path 모듈 import 
    //path 모듈은 파일과 디렉토리 경로를 다룰때 필요한 유틸리티 함수를 제공한다. 
const routes = require('./routes/index');//현재 프로젝트의 routes 폴더에 있는 index.js를 import 



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/about', routes);

var router = express.Router();

router.get('/about', function(req, res){
    res.render('about', {title: 'Hello world!'});
});

app.get('/', (req,res)=> {      //application이 서버에 request하면 받을 response 출력물 
    res.send('Hello express!');
});

module.exports = router; 
server.listen(3000); //server로 request할 포트 3000번으로 지정 


