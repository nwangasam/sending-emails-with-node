const express = require('express');

const appRoute = require('./routes/appRoute');

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/api/', appRoute)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))