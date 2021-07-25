@ import express from "express";
const  PORT =4000;
const app = express();

const gassipMiddleware = (req, res, next) => {
    console.log("middle");
const logger  = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
};

const handleHome= (req, res) => 
{
    return res.end();
const  privateMiddleware = (req, res,next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("allowed, you may continue");
    next();
};

app.get("/", gassipMiddleware, handleHome);
const handleHome = (req, res) => 
{
    return res.send("i love middleware");
};
const handleProtected = (req, res) => 
{
    return res.send("welcome to the private lounge");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
/* 
브라우저가 request하면 서버가 response한다
app.get은 브라우저가 홈페이지 get하는 것,eventhandler와 유사하다
return res.end(); 는 response를 종료
ruturn res.send("message sended")는 ""안에 내용을 띄우게된다
callback 함수란 다른 함수에 파라미터로 전달되는 함수 port 큰숫자는 대부분 비어있다 
익스플로러에 치면 나옴 localhost:PORT 서버가 열렸음을 뜻함 ctrl +c 작업종료
/*http 서버랑 interactive 하는 방법
서버 만들면 서버가 유저 request에 respond하도록해야함
2. 사용자 request는 HTTP protocol를 사용한다.. This request is called GET request.
3. 주소창에서 url을 치고 페이지가 로드되는 것은
서버에 GET  request를 보내는 것이고 response를 받고 브라우저에 response를 보여주는 것이다 
'/'는  root나 서버의 home를 뜻한다

middleware = middle software middleware은 request와 response사이에 있다
middleware = handler이고  handler를 controller라고 한다
controller은 (req, res, next)로  next가 하나더 있다.
작동순서?  app.get / url를 얻고 그다음 express에서 gassip->next가
 handleHome실행하는데 마지막 controller라서 next가 필요없다
 send("comment"),send("<h1>comment</h1>") 작성양식
app.use 를 먼저쓰고 get을 써야 하위에 get에 전부 적용됨
app.use(logger)
app.get("/", handleHome);
===
app.use();
app.get("/", logger, handleHome); 
*/


const handleListening =() => console.log(`Server listening on port http://locahost:${PORT}`);
app.listen(PORT, handleListening);
/* 서버를 만듬(app 생성, 설정 외부로 개방)
Server listens and responses
--> `app.listen()`
-- listen() has a callback
app.listen(port, function)
---- port: like a door or window into your computer
*/