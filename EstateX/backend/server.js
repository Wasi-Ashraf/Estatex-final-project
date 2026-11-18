require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const connectDB = require('./src/config/db')

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'EstateX API is running' })
})

const PORT = process.env.PORT || 5000

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`EstateX server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Server startup failed:', error.message)
    process.exit(1)
  }
}

startServer()
