import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnection } from './database/db.js'
import router from './routes/routes.js'
const app = express()
dotenv.config({path:"./config.env"})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to connect
  credentials: true // Allow cookies from frontend
}));

dbConnection()

app.use('/restaurant',router)

// restaurant app password JFqb1Fxx2DSGk079

// mongodb+srv://muhammadhashir8181:JFqb1Fxx2DSGk079@cluster0.hmwmjhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// mongodb+srv://muhammadhashir8181:JFqb1Fxx2DSGk079@cluster0.hmwmjhz.mongodb.net/?retryWrites=true