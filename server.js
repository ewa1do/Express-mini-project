const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Working!!</h1>')

});

app.listen(PORT, () => {
    console.log('app is running on PORT: ' + PORT);
});



/*
/ --> res = this is working
/signin --> POST = success / fail
/register --> POST = user
/profile/:userID --> GET = user
*/