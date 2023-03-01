const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use('/weather', require('./routes/weatherRouters'));


app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})