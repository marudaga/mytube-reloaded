import express from "express";
const  PORT =4000;
const app = express();

const gassipMiddleware = (req, res, next) => {
    console.log("middle");
    next();
}

const handleHome= (req, res) => 
{
    return res.end();
};

app.get("/", gassipMiddleware, handleHome);
/* 
브라우저가 request하면 서버가 response한다
app.get은 브라우저가 홈페이지 get하는 것
middleware = middle software middleware은 request와 response사이에 있다
middleware = handler이고  handler를 controller라고 한다
controller은 (req, res, next)로  next가 하나더 있다.
작동순서?  app.get / url를 얻고 그다음 express에서 gassip->next가
 handleHome실행하는데 마지막 controller라서 next가 필요없다
 send("comment"),send("<h1>comment</h1>") 작성양식
*/

const handleListening =() => console.log(`Server listening on port http://locahost:${PORT}`);
app.listen(PORT, handleListening);
/* 
*/