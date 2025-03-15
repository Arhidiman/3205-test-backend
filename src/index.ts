const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use([bodyParser.json(), cors()])

const PORT = 5000


app.post('/shorten', (req, res) => {

    const { originalUrl, alias, expiresAt } = req.body

    console.log(req.body)

    console.log(originalUrl, alias, expiresAt)
    res.json('success')


    

}

)
app.get('short-url', (req, res) => console.log(req, res))
app.get('info', (req, res) => console.log(req, res))
app.delete('delete', (req, res) => console.log(req, res))

app.listen(PORT, () => console.log(`express server is running on port ${PORT}`))