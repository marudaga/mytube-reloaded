import express from "express";
const  PORT =4000;
const app = express();
const handleHome= (req, res) => 
{
    return res
};
app.get("/", handleHome);
/* app.get()의 역할은 eventhandler와 유사하다
const handleHome = (req,res) => console.log("Somebody is trying to go home.");
app.get("/", handleHome);
---------------------------------------------
const handleclick =(event) => console.~~
button.addEventListener("click", handleClick);
브라우저가 나의 서버에 무언가를 request한다
addeventhandler과 같은 맥락이다. /라는 url을 app이 받ㄱ아서 handleHome을 실행하는데
파라미터가 request,response다
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
*/

const handleListening =() => console.log(`Server listening on port http://locahost:${PORT}`);
app.listen(PORT, handleListening);
/* 
서버를 만듬
Server listens and responses
--> `app.listen()`
-- listen() has a callback
app.listen(port, function)
---- port: like a door or window into your computer
*/