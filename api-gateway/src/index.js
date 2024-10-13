const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Set up routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
