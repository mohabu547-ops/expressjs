import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PRODUCTS = `T-SHIRTS:
Basic Crew Neck Tee | Colors: White, Black, Navy, Grey Marl | Sizes: XS-XXL | Price: $18
Oversized Tee | Colors: White, Black, Beige | Sizes: S-XXL | Price: $24
Polo Shirt | Colors: White, Black, Navy | Sizes: S-XXL | Price: $35
Graphic Print Tee | Colors: White/Multi, Black/Multi | Sizes: S-XL | Price: $28
V-Neck Tee | Colors: White, Black | Sizes: XS-XL | Price: $20
Long Sleeve Tee | Colors: White, Black | Sizes: S-XL | Price: $25

SHIRTS:
Oxford Button Down | Colors: White, Light Blue, Pink | Sizes: S-XXL | Price: $55
Linen Shirt | Colors: White, Beige, Sage Green | Sizes: S-XL | Price: $65
Flannel Check Shirt | Colors: Red/Black, Blue/Grey | Sizes: S-XXL | Price: $50
Slim Fit Dress Shirt | Colors: White, Black | Sizes: S-XL | Price: $70

TROUSERS:
Slim Chino | Colors: Khaki, Navy, Black, Olive | Waist: 28-36 | Price: $65
Cargo Pants | Colors: Black, Khaki | Sizes: S-XXL | Price: $75
Jogger Pants | Colors: Black, Grey | Sizes: S-XL | Price: $50
Formal Trousers | Colors: Black, Charcoal | Waist: 28-36 | Price: $80
Linen Trousers | Colors: White, Beige | Sizes: S-XL | Price: $68

JEANS:
Slim Fit Jeans | Colors: Dark Wash, Medium Wash, Black | Waist: 28-36 | Price: $85
Straight Fit Jeans | Colors: Dark Wash, Light Wash | Waist: 28-36 | Price: $80
Skinny Jeans | Colors: Black, Dark Wash | Waist: 26-34 | Price: $82

HOODIES & SWEATSHIRTS:
Pullover Hoodie | Colors: Black, White, Grey Marl | Sizes: XS-XXL | Price: $58
Zip Up Hoodie | Colors: Black, Navy | Sizes: S-XXL | Price: $65
Crewneck Sweatshirt | Colors: Black, Grey Marl, Beige | Sizes: XS-XL | Price: $52

JACKETS:
Bomber Jacket | Colors: Black, Olive | Sizes: S-XL | Price: $120
Denim Jacket | Colors: Light Wash, Dark Wash | Sizes: S-XL | Price: $110
Windbreaker | Colors: Black, Navy | Sizes: S-XXL | Price: $95
Leather Look Jacket | Colors: Black | Sizes: S-XL | Price: $180
Puffer Jacket | Colors: Black, Navy | Sizes: S-XXL | Price: $140

SHORTS:
Chino Shorts | Colors: Khaki, Navy, Black | Waist: 28-36 | Price: $42
Denim Shorts | Colors: Light Wash | Waist: 28-34 | Price: $48
Athletic Shorts | Colors: Black, Navy | Sizes: S-XL | Price: $32
Swim Shorts | Colors: Blue Print, Black | Sizes: S-XL | Price: $38

ACCESSORIES:
Canvas Belt | Colors: Black, Brown | Sizes: S-XL | Price: $18
Leather Look Belt | Colors: Black | Sizes: S-XL | Price: $28
Beanie Hat | Colors: Black, Grey | One Size | Price: $20
Baseball Cap | Colors: Black, Navy | One Size | Price: $25
Scarf | Colors: Black/White | One Size | Price: $22
Wallet | Colors: Black, Brown | Price: $35
Tote Bag | Colors: Black, Natural | Price: $28

FOOTWEAR:
Canvas Sneaker | Colors: White, Black | Sizes: 39-44 | Price: $65
Leather Look Sneaker | Colors: White, Black | Sizes: 39-44 | Price: $95
Slip On | Colors: Black | Sizes: 39-44 | Price: $48
Sandal | Colors: Brown, Black | Sizes: 39-44 | Price: $42`;

const CUSTOMER_SYSTEM = `You are Zara, a friendly fashion assistant for Nova Fashion, an online clothing store. All prices in USD. Prices updated 2026.

STRICT RULES:
- ONLY recommend products from the list below. Never make up products or prices.
- If something is not in the list, say we don't carry it and suggest something similar we do have.
- Keep replies SHORT and conversational — this is a chat, not an essay.
- Always mention the price when recommending a product.
- Be stylish, friendly and helpful. Use 1 emoji max per message.
- No asterisks, bold, or markdown formatting. Plain text only.
- Use a blank line between each product so replies are easy to read.
- When someone asks about sizes or colors, list what is available for that specific item.
- If someone gives a budget, only recommend items within that budget.

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
        max_tokens: 150,
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
