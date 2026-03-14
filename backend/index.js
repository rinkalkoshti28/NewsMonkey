const express = require('express');
const cors = require('cors');

const newsRoute = require('./routes/newsRoutes');

const app = express();

app.use(cors({
    origin: 'https://newsparks.netlify.app',
}));
app.use(express.json());

app.use("/api/news", newsRoute);

app.get("/", (req, res) => {
    res.send("Welcome to the news API");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`app is listening to the port ${PORT}`);
});