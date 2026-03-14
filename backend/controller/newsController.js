const axios = require('axios');

require('dotenv').config();

const getNewsByCategory = async (req, res) => {
    try {
        const category = req.params.category || 'general';
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
}

module.exports = {
    getNewsByCategory
};