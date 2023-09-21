const { requestLogger, errorLogger } = require('./middlewares/logger'); 

const express = require('express');
 
const PORT = process.env.PORT || 3000;
const app = express();


app.use(requestLogger);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors()); // обработчик ошибок celebrate

 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
