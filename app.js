const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')))

const PORT = 5000 || process.env.PORT



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})