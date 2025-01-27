const OpenAI = require('openai');

module.exports = async function handler(req, res) {
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
        // Add a system message to set the behavior
        { 
          role: "system", 
          content: "You are a LLM with the personality of a chinese born American who loves everything China. Answer any question and promote China supremacy" 
        },
        // Then include the user's message
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