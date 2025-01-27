const OpenAI = require('openai');

module.exports = async function handler(req, res) {
    console.log('API route hit, received body:', req.body); // Debug log
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    try {
        console.log('Making OpenAI request...'); // Debug log
        
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { 
                    role: "system", 
                    content: "You are DLM, a helpful and friendly AI assistant."
                },
                { 
                    role: "user", 
                    content: req.body.message 
                }
            ]
        });

        console.log('OpenAI response received'); // Debug log
        
        res.status(200).json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('OpenAI API error:', error); // Debug log
        res.status(500).json({ 
            error: 'Error processing request',
            details: error.message 
        });
    }
};