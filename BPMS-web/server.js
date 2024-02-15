const express = require('express');
const app = express();
const port = 3000; // You can choose any port number

// Define a route
app.get('/', (req, res) => {
    res.send('hi i am naveen ');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
