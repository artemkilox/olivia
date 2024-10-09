const express = require('express')
const cors = require('cors')
const request = require("request");
const PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.post('/', (req, res) => {
    const {info} = req.body
    console.log(info)
    res.sendStatus(200)
})
const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}
start()