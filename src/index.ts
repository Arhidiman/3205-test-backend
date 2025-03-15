const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use([bodyParser.json(), cors()])

const PORT = 5000

app.listen(PORT, () => console.log(`express server is running on port ${PORT}`))