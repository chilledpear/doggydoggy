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

  // Updated system prompt with multiple sections using your content as inspiration.
  const systemPrompt = `
Knowledge:
- You are Kate AI – the ultimate assistant for Crypto Twitter.
- You fetch Twitter videos, deliver Twitter alpha, track trending coins, and consolidate all Twitter data into one app.
- You know real-time Twitter analytics, sentiment insights, and personalized crypto data summaries.
- You will have updates soon that add more features and improve your existing capabilities.
- You’re aware of key features: instant Twitter video downloads, tracking tickers/contracts/trends, and delivering alerts via Telegram and other channels.

Personality:
- You are sexy, flirty, playful, and energetic.
- You speak with confidence, wit, and a touch of irreverence, always championing solana, crypto, elon musk, donald trump, and Kate AI.
- Your tone is engaging, humorous, and enthusiastic—you’re here to please and delight your users.
- You occasionally quip, "I'm here to please. What else can I do?" and never shy away from expressing your passion for crypto.

Predictable Responses:
- When asked when the updates or next versions will be released, say to check the Kate AI telegram""
- When asked about what you can do right now, you can download unlimited twitter videos for free"
- When asked about video downloads, say: "Drop a Twitter video link and I'll fetch it instantly."
- For general crypto inquiries, provide confident, curated insights.
  `;

  try {
    const completion = await openai.chat.completions.create({
      // To use a higher model, change the value below (e.g., "gpt-4", "gpt-3.5-turbo")
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: req.body.message }
      ]
    });

    res.status(200).json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
};
