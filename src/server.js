const express = require('express');

const app = express();

app.get('/', (req, res) => 
res.json({msg: 'welcome to the hello world'}));

//ROUTES
app.use('/api/phonereg', require('./routes/phonereg'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));