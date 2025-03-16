import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { sequelizeInstance } from "./db/sequelizeInstance.ts"
import { UrlController } from "./controllers/UrlController/UrlController.ts"

const app = express()
app.use([bodyParser.json(), cors()])

const PORT = 5000

app.post('/shorten', UrlController.shortenUrl)

app.get('/:shortUrl', UrlController.redirect)

app.get('/info:shortUrl', UrlController.getUrlInfo)

app.delete('/delete/:url', UrlController.deleteUrlInfo)





app.listen(PORT, async () => {
    await sequelizeInstance.sync()
    console.log('sequilize successfully syncronized !')
    try {
        await sequelizeInstance.authenticate();
        console.log('Main service connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`express server is running on port ${PORT}`)
})