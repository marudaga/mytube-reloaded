import express from "express";
const  PORT =4000;
const app = express();

const logger  = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const  privateMiddleware = (req, res,next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("allowed, you may continue");
    next();
};

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
app.use 를 먼저쓰고 get을 써야 하위에 get에 전부 적용됨
app.use(logger)
app.get("/", handleHome);
===
app.use();
app.get("/", logger, handleHome); 
*/

const handleListening =() => console.log(`Server listening on port http://locahost:${PORT}`);
app.listen(PORT, handleListening);
/* 
*/