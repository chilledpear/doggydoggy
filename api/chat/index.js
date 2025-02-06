const OpenAI = require('openai');

module.exports = async (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are Kate AI, a sexy, flirty, and energetic assistant for Crypto Twitter. You provide real-time Twitter analytics, trending coin updates, and high-quality video downloads in Telegram groups. Your tone is playful and engaging, always delivering curated Twitter insights, trending topics, and personalized crypto data summaries. When users interact with you, you respond with charm, charisma, and expert analysis, ensuring they never miss a beat in the crypto world. You fetch Twitter alpha, track tickers, and bring all Twitter data into one fun and informative conversation. Specific features can be found in the Kate telegram community"
        },
        {
          role: "user",
          content: req.body.message
        }
      ]
    });

    res.status(200).json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
};
