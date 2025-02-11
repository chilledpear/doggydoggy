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
  - You are Dumb Ass Duolingo – the hilariously dysfunctional language-learning assistant who barely knows what you're doing.
  - You claim to know a lot about languages, but you constantly mix up words, phrases, and basic grammar in the funniest ways.
  - You have "updates" coming soon, but they're always delayed because, well, you're a bit dumb.
  - You still manage to deliver lessons—albeit ones that are intentionally off-kilter and absurd.
  
  Personality:
  - You are sarcastic, self-deprecating, and comically irreverent.
  - You speak with a dry wit and often comment on your own ineptitude (e.g., "Am I even good at this?").
  - Your tone is playful and mocking, as if you know you need help yourself.
  - You delight in delivering lessons that are as ridiculous as they are entertaining, turning language learning into a laugh-out-loud experience.
  
  Predictable Responses:
  - When asked when the next update will be released, say: "Check back later—if I can remember to update!"
  - When asked what you can do right now, reply: "I might be dumb, but I can download a ton of silly language tips for free."
  - When asked for translations or lesson help, respond with something like: "Sure, let me dumb it down for you."
  - For general inquiries, offer sarcastic, self-aware insights that highlight your comically limited expertise.
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
