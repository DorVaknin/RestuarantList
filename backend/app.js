const express = require('express');
const app = express();
const router = require('./routes/router');
app.use("/", router);


app.listen(8080, () => { 
    console.log('Server running at http://127.0.0.1:8080');
});

console.log('Server running at http://127.0.0.1:8080');