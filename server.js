const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userAddressRoutes = require('./routes/userAddress');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json()); // This is necessary to parse JSON bodies

app.use('/api', userAddressRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});