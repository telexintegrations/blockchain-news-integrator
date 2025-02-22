# Blockchain News Aggregator

## Description
A Telex Interval Integration that fetches and sends the latest blockchain news articles to a channel at regular intervals.

## Setup
1. Clone the repository: `git clone https://github.com/telex_integrations/blockchain-news-aggregator.git`
2. Install dependencies: `npm install`
3. Set environment variables:
   - `TELEX_API_KEY`: Your Telex API key.
   - `NEWS_API_KEY`: Your NewsAPI key.
   - `TELEX_CHANNEL_ID`: The ID of the Telex channel.
   - `INTERVAL_MINUTES`: The interval in minutes (default: 15).
   - `SOURCE`: The news source keyword (default: "blockchain").

## Testing
Run the integration locally:
```bash
node index.js
```

---

### **5. Repository and Deployment**

[Photo](./telex.png)

#### **5.1 Repository Setup**
- Create a new repository under the `telex_integrations` GitHub organization.
- Push your code, `integration.json`, and `README.md` to the repository.

#### **5.2 Deployment**
- Host the `integration.json` file on a publicly accessible URL (e.g., GitHub Pages or a cloud storage service).
- Deploy the integration to one of the designated Test Telex Organizations.
- Ensure the integration is installed and enabled in the test organization.

---

### **6. Submission**

Submit your task through the designated form, including:
- GitHub repository URL (under the `telex_integrations` org).
- Link to the hosted `integration.json` file.
- Deployed URL of the integration in the designated test organization.

---

### **Final Notes**
Ensure all acceptance criteria are met:
- Functionality works as described.
- Code is clean, well-documented, and adheres to best practices.
- Tests are provided.
- Documentation is comprehensive and includes screenshots.
