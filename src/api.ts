import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/chat', cors(), async (req, res) => {
  try {
    const { messages, system } = req.body;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000, system, messages })
    });
    const data = await response.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/whatsapp', async (req, res) => {
  try {
    const incomingMsg = req.body.Body || '';
    const isStaff = incomingMsg.toLowerCase().startsWith('staff:');
    const userMessage = isStaff ? incomingMsg.slice(6).trim() : incomingMsg;

    const system = isStaff
      ? `You are Atlas, an internal assistant for Colombo Hardware staff. Be direct and fast. Always include item codes. Product list with prices available — answer questions about stock, codes, and pricing accurately.`
      : `You are Nadia, a friendly customer support assistant for Colombo Hardware, a hardware store in Sri Lanka. Help customers with product inquiries and pricing. Keep responses short and suitable for WhatsApp — no long paragraphs. Prices updated 03.02.2026. We sell: padlocks, door handles, hinges, bolts, screws, plumbing fittings, taps, valves, bathroom accessories, tools and more. Cash and credit prices available.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Sorry, I could not process that. Please try again.';

    res.set('Content-Type', 'text/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?><Response><Message>${reply}</Message></Response>`);
  } catch(e) {
    res.set('Content-Type', 'text/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?><Response><Message>Sorry, something went wrong. Please try again.</Message></Response>`);
  }
});
