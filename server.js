const { time } = require('console')
const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)

const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
    console.log('Is connected Up at', Date.now()/3600)
    socket.on('msg', data => console.log(data))
})

const PORT = 5000 || process.env.PORT



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})