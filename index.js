require('dotenv').config();
const axios = require('axios');
const webHookUrl = process.env.TELEX_WEBHOOK_URL;

// Fetch the news from the CoinDesk API
const getBlockchainNews = async () => {
  try {
    console.log("Fetching data from CoinDesk API...");
    const response = await axios.get("https://data-api.coindesk.com/news/v1/article/list?lang=EN&limit=5");

    const articles = response.data.Data;

    const news = articles.map(article => `${article.TITLE}: ${article.URL}`);
    return news;

  } catch (error) {
    console.error(`Error fetching blockchain news: ${error.message}`);
    return ['Error'];
  }
};

// Send news to the Telex channel via webhook
const sendNewsToChannel = async (webHookUrl, articles) => {
  try {
    const message = `📰 *Latest blockchain news* 📰\n\n${articles.join('\n\n')}`;

    console.log('Sending message to Telex channel...');
    const payload = {
      event_name: "message",
      username: "Blockchain News Aggregator",
      status: "success",
      message: message
    };
    await axios.post(webHookUrl, payload, { headers: { "Content-Type": "application/json" } });
    console.log('Message sent successfully!');
  } catch (error) {
    console.error(`Error sending message: ${error.message}`);
  }
};

// Start the news aggregator
const runNewsAggregator = async (webHookUrl) => {
  setInterval(async () => {
    const articles = await getBlockchainNews();

    if (articles.length > 0) {
      console.log(`Preparing to send message...`);
      await sendNewsToChannel(webHookUrl, articles);
    } else {
      console.log('No news to send...');
    }
  }, 60 * 15 * 1000);
};

runNewsAggregator(webHookUrl);

module.exports = { getBlockchainNews, sendNewsToChannel, runNewsAggregator };
