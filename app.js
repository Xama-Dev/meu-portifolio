const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const { response } = require('express')

app.use(cors())
app.use(express.static('public'))

app.get('/', (request, response)=> {
    response.sendFile('/home/tiagolinux/meuPortifolio/index.html')
})

app.listen(port, ()=> {
    console.log(`Aplicação rodando na porta ${port}.`)
})