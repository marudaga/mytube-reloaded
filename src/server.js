import express from "express";

const app = express();

const urlLogger = (req, res, next) => {
  const url = req.url;
  console.log(`Path: ${url}`);
  next();
};

const timeLogger = (req, res, next) => {
  console.log(`Time: ${new Date()}`);
  next();
};
const securityLogger = (req, res, next) => {
  const check = req.protocol;
  if (check === "http") {
    console.log(`Insecure`);
    next();
  } else {
    console.log(`secure`);
    next();
  }
};
const protectorMiddleware = (req, res, next) => {
  if (req.url === "protected") {
    next();
  }
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorMiddleware);
app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(PORT, () => `Listening!✅`);
