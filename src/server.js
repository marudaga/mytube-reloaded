import express from "express";
const  PORT =4000;
const app = express();
//
const handleListening =() => console.log("Server listening on port 4000");
app.listen(PORT, handleListening);
/*http 서버랑 interactive 하는 방법
http request란 웹사이트에 접속하는 방법 or 서버에 정보를 보내는 방법 
GET은 http methods이고 get that page라는 뜻을 의미함
'/'는  root나 서버의 첫페이지를 뜻한다
*/