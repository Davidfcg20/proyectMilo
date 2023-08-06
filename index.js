const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { /*logErrors, errorHandler*/ boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 8080;
const whitelist = [`http://localhost:${port}`] //Change for db info
const corsOptions = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('acces not allowed'))
    }
  }
}

app.use(express.json());
routerApi(app);
app.use(cors(corsOptions));

//app.use(logErrors);
app.use(boomErrorHandler);
//app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
