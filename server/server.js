const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());
app.get('/', (req, res)=>{
    res.send("API is running");
})

app.use('/api/user', userRoutes);

// TODO : Error handling middlewares Yet To Be Created

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
