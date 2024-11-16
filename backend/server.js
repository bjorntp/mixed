//importing modules
const express = require('express')
const cookieParser = require('cookie-parser')
const db = require('./models')
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')
const cors = require('cors')

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from localhost:3000 (your frontend)
  methods: ['GET', 'POST'], // Allow GET and POST requests
  credentials: true, // Allow cookies to be sent (important for JWT in cookies)
};

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.use(cors(corsOptions));

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', userRoutes)

//routes for the user API
app.use('/api/notes', noteRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
