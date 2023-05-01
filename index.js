const connectToMongo = require('./Config/database');
const express = require('express');
const cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
// Available Routes
app.use('/api/v1', require('./Routes/Auth'))
app.use('/api/v1', require('./Routes/Element'))
app.listen(port, () => {
  console.log(`Givers Application's backend server is listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})