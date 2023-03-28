const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(
  cors({
    origin: 'https://accounts.spotify.com/'
  })
)
app.use(express.json())

require('./config/mongoose.config')

const userRoutes = require('./routes/user.routes.js')
userRoutes(app)

app.listen(port, () => console.log(`Server running on port ${port}`))
