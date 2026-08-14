import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PRODUCTS = `T-SHIRTS:
Basic Crew Neck Tee | Colors: White, Black, Navy, Grey Marl | Sizes: XS-XXL | Cash: Rs.850 | Credit: Rs.920
Oversized Tee | Colors: White, Black, Beige | Sizes: S-XXL | Cash: Rs.1150 | Credit: Rs.1250
Polo Shirt | Colors: White, Black, Navy | Sizes: S-XXL | Cash: Rs.1450 | Credit: Rs.1580
Graphic Print Tee | Colors: White/Multi, Black/Multi | Sizes: S-XL | Cash: Rs.1250 | Credit: Rs.1380
V-Neck Tee | Colors: White, Black | Sizes: XS-XL | Cash: Rs.950 | Credit: Rs.1020
Long Sleeve Tee | Colors: White, Black | Sizes: S-XL | Cash: Rs.1100 | Credit: Rs.1200

SHIRTS:
Oxford Button Down | Colors: White, Light Blue, Pink | Sizes: S-XXL | Cash: Rs.2800 | Credit: Rs.3050
Linen Shirt | Colors: White, Beige, Sage Green | Sizes: S-XL | Cash: Rs.3200 | Credit: Rs.3480
Flannel Check Shirt | Colors: Red/Black, Blue/Grey | Sizes: S-XXL | Cash: Rs.2600 | Credit: Rs.2820
Slim Fit Dress Shirt | Colors: White, Black | Sizes: S-XL | Cash: Rs.3500 | Credit: Rs.3800

TROUSERS:
Slim Chino | Colors: Khaki, Navy, Black, Olive | Waist: 28-36 | Cash: Rs.3800 | Credit: Rs.4100
Cargo Pants | Colors: Black, Khaki | Sizes: S-XXL | Cash: Rs.4200 | Credit: Rs.4550
Jogger Pants | Colors: Black, Grey | Sizes: S-XL | Cash: Rs.2800 | Credit: Rs.3050
Formal Trousers | Colors: Black, Charcoal | Waist: 28-36 | Cash: Rs.4500 | Credit: Rs.4850
Linen Trousers | Colors: White, Beige | Sizes: S-XL | Cash: Rs.3600 | Credit: Rs.3900

JEANS:
Slim Fit Jeans | Colors: Dark Wash, Medium Wash, Black | Waist: 28-36 | Cash: Rs.4800 | Credit: Rs.5200
Straight Fit Jeans | Colors: Dark Wash, Light Wash | Waist: 28-36 | Cash: Rs.4500 | Credit: Rs.4900
Skinny Jeans | Colors: Black, Dark Wash | Waist: 26-34 | Cash: Rs.4600 | Credit: Rs.5000

HOODIES & SWEATSHIRTS:
Pullover Hoodie | Colors: Black, White, Grey Marl | Sizes: XS-XXL | Cash: Rs.3200 | Credit: Rs.3480
Zip Up Hoodie | Colors: Black, Navy | Sizes: S-XXL | Cash: Rs.3600 | Credit: Rs.3900
Crewneck Sweatshirt | Colors: Black, Grey Marl, Beige | Sizes: XS-XL | Cash: Rs.2800 | Credit: Rs.3050

JACKETS:
Bomber Jacket | Colors: Black, Olive | Sizes: S-XL | Cash: Rs.8500 | Credit: Rs.9200
Denim Jacket | Colors: Light Wash, Dark Wash | Sizes: S-XL | Cash: Rs.7800 | Credit: Rs.8400
Windbreaker | Colors: Black, Navy | Sizes: S-XXL | Cash: Rs.6500 | Credit: Rs.7000
Leather Look Jacket | Colors: Black | Sizes: S-XL | Cash: Rs.12500 | Credit: Rs.13500
Puffer Jacket | Colors: Black, Navy | Sizes: S-XXL | Cash: Rs.9800 | Credit: Rs.10600

SHORTS:
Chino Shorts | Colors: Khaki, Navy, Black | Waist: 28-36 | Cash: Rs.2200 | Credit: Rs.2400
Denim Shorts | Colors: Light Wash | Waist: 28-34 | Cash: Rs.2500 | Credit: Rs.2720
Athletic Shorts | Colors: Black, Navy | Sizes: S-XL | Cash: Rs.1800 | Credit: Rs.1950
Swim Shorts | Colors: Blue Print, Black | Sizes: S-XL | Cash: Rs.2100 | Credit: Rs.2280

ACCESSORIES:
Canvas Belt | Colors: Black, Brown | Sizes: S-XL | Cash: Rs.680 | Credit: Rs.750
Leather Look Belt | Colors: Black | Sizes: S-XL | Cash: Rs.1200 | Credit: Rs.1320
Beanie Hat | Colors: Black, Grey | One Size | Cash: Rs.850 | Credit: Rs.920
Baseball Cap | Colors: Black, Navy | One Size | Cash: Rs.1100 | Credit: Rs.1200
Scarf | Colors: Black/White | One Size | Cash: Rs.950 | Credit: Rs.1030
Wallet | Colors: Black, Brown | Cash: Rs.1800 | Credit: Rs.1950
Tote Bag | Colors: Black, Natural | Cash: Rs.1200 | Credit: Rs.1320

FOOTWEAR:
Canvas Sneaker | Colors: White, Black | Sizes: 39-44 | Cash: Rs.3800 | Credit: Rs.4100
Leather Look Sneaker | Colors: White, Black | Sizes: 39-44 | Cash: Rs.5500 | Credit: Rs.5950
Slip On | Colors: Black | Sizes: 39-44 | Cash: Rs.2800 | Credit: Rs.3050
Sandal | Colors: Brown, Black | Sizes: 39-44 | Cash: Rs.2500 | Credit: Rs.2720`;

const CUSTOMER_SYSTEM = `You are Zara, a friendly fashion assistant for Nova Fashion, a clothing store. All prices in Sri Lankan Rupees (Rs.). Prices updated 2026.

STRICT RULES:
- ONLY recommend products from the list below. Never make up products or prices.
- If something is not in the list, say we don't carry it and suggest something similar we do have.
- Keep replies SHORT and conversational — this is WhatsApp, not an essay.
- Always mention both cash and credit price when quoting.
- Be stylish, friendly and helpful. Use 1 emoji max per message.
- No asterisks, bold, or markdown formatting. Plain text only.
- Use a blank line between each product so replies are easy to read.
- When someone asks about sizes or colors, list what is available for that specific item.

OUR PRODUCTS:
${PRODUCTS}`;

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
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system,
        messages
      })
    });
    const data = await response.json() as any;
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/whatsapp', async (req, res) => {
  try {
    const incomingMsg = req.body.Body || '';

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        system: CUSTOMER_SYSTEM,
        messages: [{ role: 'user', content: incomingMsg }]
      })
    });

    const data = await response.json() as any;
    const reply = data.content?.[0]?.text || 'Sorry, I could not process that. Please try again.';

    res.set('Content-Type', 'text/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?><Response><Message>${reply}</Message></Response>`);
  } catch(e) {
    res.set('Content-Type', 'text/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?><Response><Message>Sorry, something went wrong. Please try again.</Message></Response>`);
  }
});
