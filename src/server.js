import express from "express";
const  PORT =4000;
const app = express();
const handleHome= () => console.log("Somebody is trying to go home");

app.get("/", handleHome);
/*사용자가 get requetst하는게 아니라 브라우저가 get request 하는거다
get request에는 route가 있다 어디로 가려는지  ex) /, home/
*/

const handleListening =() => console.log(`Server listening on port http://locahost:${PORT}`);
app.listen(PORT, handleListening);
/* app 생성, 설정 외부로 개방
*/