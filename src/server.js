import express from "express";
const  PORT =4000;
const app = express();
//express 앱을 실행  request란  www.google.com는 google.com에 request를 보낸것임 
// server은 listen and response한다
const handleListening =() => console.log("Server listening on port 4000");
app.listen(PORT, handleListening);
/*callback 함수란 다른 함수에 파라미터로 전달되는 함수
port 큰숫자는 대부분 비어있다
localhost:4000
ctrl +c 작업종료
*/