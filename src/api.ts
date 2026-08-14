
import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PRODUCTS = `T-Shirts	Basic Crew Neck Tee	White	XS/S/M/L/XL/XXL	100% Cotton	6	850
T-Shirts	Basic Crew Neck Tee	Black	XS/S/M/L/XL/XXL	100% Cotton	6	850
T-Shirts	Basic Crew Neck Tee	Navy	XS/S/M/L/XL/XXL	100% Cotton	6	850
T-Shirts	Basic Crew Neck Tee	Grey Marl	XS/S/M/L/XL/XXL	100% Cotton	6	850
T-Shirts	Oversized Tee	White	S/M/L/XL/XXL	Cotton Blend	6	1150
T-Shirts	Oversized Tee	Black	S/M/L/XL/XXL	Cotton Blend	6	1150
T-Shirts	Oversized Tee	Beige	S/M/L/XL/XXL	Cotton Blend	6	1150
T-Shirts	Polo Shirt	White	S/M/L/XL/XXL	Pique Cotton	6	1450
T-Shirts	Polo Shirt	Black	S/M/L/XL/XXL	Pique Cotton	6	1450
T-Shirts	Polo Shirt	Navy	S/M/L/XL/XXL	Pique Cotton	6	1450
T-Shirts	Graphic Print Tee	White/Multi	S/M/L/XL	100% Cotton	6	1250
T-Shirts	Graphic Print Tee	Black/Multi	S/M/L/XL	100% Cotton	6	1250
T-Shirts	V-Neck Tee	White	XS/S/M/L/XL	Cotton Blend	6	950
T-Shirts	V-Neck Tee	Black	XS/S/M/L/XL	Cotton Blend	6	950
T-Shirts	Long Sleeve Tee	White	S/M/L/XL	100% Cotton	6	1100
T-Shirts	Long Sleeve Tee	Black	S/M/L/XL	100% Cotton	6	1100
Shirts	Oxford Button Down	White	S/M/L/XL/XXL	Cotton Oxford	4	2800
Shirts	Oxford Button Down	Light Blue	S/M/L/XL/XXL	Cotton Oxford	4	2800
Shirts	Oxford Button Down	Pink	S/M/L/XL/XXL	Cotton Oxford	4	2800
Shirts	Linen Shirt	White	S/M/L/XL	100% Linen	4	3200
Shirts	Linen Shirt	Beige	S/M/L/XL	100% Linen	4	3200
Shirts	Linen Shirt	Sage Green	S/M/L/XL	100% Linen	4	3200
Shirts	Flannel Check Shirt	Red/Black	S/M/L/XL/XXL	Cotton Flannel	4	2600
Shirts	Flannel Check Shirt	Blue/Grey	S/M/L/XL/XXL	Cotton Flannel	4	2600
Shirts	Slim Fit Dress Shirt	White	S/M/L/XL	Cotton Poplin	4	3500
Shirts	Slim Fit Dress Shirt	Black	S/M/L/XL	Cotton Poplin	4	3500
Trousers	Slim Chino	Khaki	28/30/32/34/36	98% Cotton 2% Elastane	4	3800
Trousers	Slim Chino	Navy	28/30/32/34/36	98% Cotton 2% Elastane	4	3800
Trousers	Slim Chino	Black	28/30/32/34/36	98% Cotton 2% Elastane	4	3800
Trousers	Slim Chino	Olive	28/30/32/34/36	98% Cotton 2% Elastane	4	3800
Trousers	Cargo Pants	Black	S/M/L/XL/XXL	100% Cotton	4	4200
Trousers	Cargo Pants	Khaki	S/M/L/XL/XXL	100% Cotton	4	4200
Trousers	Jogger Pants	Black	S/M/L/XL	Cotton Fleece	4	2800
Trousers	Jogger Pants	Grey	S/M/L/XL	Cotton Fleece	4	2800
Trousers	Formal Trousers	Black	28/30/32/34/36	Polyester Blend	4	4500
Trousers	Formal Trousers	Charcoal	28/30/32/34/36	Polyester Blend	4	4500
Trousers	Linen Trousers	White	S/M/L/XL	100% Linen	4	3600
Trousers	Linen Trousers	Beige	S/M/L/XL	100% Linen	4	3600
Jeans	Slim Fit Jeans	Dark Wash	28/30/32/34/36	98% Cotton 2% Elastane	4	4800
Jeans	Slim Fit Jeans	Medium Wash	28/30/32/34/36	98% Cotton 2% Elastane	4	4800
Jeans	Slim Fit Jeans	Black	28/30/32/34/36	98% Cotton 2% Elastane	4	4800
Jeans	Straight Fit Jeans	Dark Wash	28/30/32/34/36	100% Cotton	4	4500
Jeans	Straight Fit Jeans	Light Wash	28/30/32/34/36	100% Cotton	4	4500
Jeans	Skinny Jeans	Black	26/28/30/32/34	95% Cotton 5% Elastane	4	4600
Jeans	Skinny Jeans	Dark Wash	26/28/30/32/34	95% Cotton 5% Elastane	4	4600
Hoodies	Pullover Hoodie	Black	XS/S/M/L/XL/XXL	Cotton Fleece	4	3200
Hoodies	Pullover Hoodie	White	XS/S/M/L/XL/XXL	Cotton Fleece	4	3200
Hoodies	Pullover Hoodie	Grey Marl	XS/S/M/L/XL/XXL	Cotton Fleece	4	3200
Hoodies	Zip Up Hoodie	Black	S/M/L/XL/XXL	Cotton Fleece	4	3600
Hoodies	Zip Up Hoodie	Navy	S/M/L/XL/XXL	Cotton Fleece	4	3600
Hoodies	Crewneck Sweatshirt	Black	XS/S/M/L/XL	Cotton Fleece	4	2800
Hoodies	Crewneck Sweatshirt	Grey Marl	XS/S/M/L/XL	Cotton Fleece	4	2800
Hoodies	Crewneck Sweatshirt	Beige	XS/S/M/L/XL	Cotton Fleece	4	2800
Jackets	Bomber Jacket	Black	S/M/L/XL	Nylon Shell	2	8500
Jackets	Bomber Jacket	Olive	S/M/L/XL	Nylon Shell	2	8500
Jackets	Denim Jacket	Light Wash	S/M/L/XL	100% Cotton Denim	2	7800
Jackets	Denim Jacket	Dark Wash	S/M/L/XL	100% Cotton Denim	2	7800
Jackets	Windbreaker	Black	S/M/L/XL/XXL	Polyester	2	6500
Jackets	Windbreaker	Navy	S/M/L/XL/XXL	Polyester	2	6500
Jackets	Leather Look Jacket	Black	S/M/L/XL	PU Leather	2	12500
Jackets	Puffer Jacket	Black	S/M/L/XL/XXL	Polyester Fill	2	9800
Jackets	Puffer Jacket	Navy	S/M/L/XL/XXL	Polyester Fill	2	9800
Shorts	Chino Shorts	Khaki	28/30/32/34/36	Cotton	4	2200
Shorts	Chino Shorts	Navy	28/30/32/34/36	Cotton	4	2200
Shorts	Chino Shorts	Black	28/30/32/34/36	Cotton	4	2200
Shorts	Denim Shorts	Light Wash	28/30/32/34	100% Cotton	4	2500
Shorts	Athletic Shorts	Black	S/M/L/XL	Polyester	4	1800
Shorts	Athletic Shorts	Navy	S/M/L/XL	Polyester	4	1800
Shorts	Swim Shorts	Blue Print	S/M/L/XL	Polyester	4	2100
Shorts	Swim Shorts	Black	S/M/L/XL	Polyester	4	2100
Accessories	Canvas Belt	Black	S/M/L/XL	Canvas/Metal	6	680
Accessories	Canvas Belt	Brown	S/M/L/XL	Canvas/Metal	6	680
Accessories	Leather Look Belt	Black	S/M/L/XL	PU Leather	6	1200
Accessories	Beanie Hat	Black	One Size	Acrylic Knit	6	850
Accessories	Beanie Hat	Grey	One Size	Acrylic Knit	6	850
Accessories	Baseball Cap	Black	One Size	Cotton Twill	6	1100
Accessories	Baseball Cap	Navy	One Size	Cotton Twill	6	1100
Accessories	Scarf	Black/White	One Size	Acrylic	4	950
Accessories	Wallet	Black	Standard	PU Leather	4	1800
Accessories	Wallet	Brown	Standard	PU Leather	4	1800
Accessories	Tote Bag	Black	Standard	Canvas	4	1200
Accessories	Tote Bag	Natural	Standard	Canvas	4	1200
Footwear	Canvas Sneaker	White	39/40/41/42/43/44	Canvas Upper	4	3800
Footwear	Canvas Sneaker	Black	39/40/41/42/43/44	Canvas Upper	4	3800
Footwear	Leather Look Sneaker	White	39/40/41/42/43/44	PU Leather	4	5500
Footwear	Leather Look Sneaker	Black	39/40/41/42/43/44	PU Leather	4	5500
Footwear	Slip On	Black	39/40/41/42/43/44	Canvas	4	2800
Footwear	Sandal	Brown	39/40/41/42/43/44	PU Leather	4	2500
Footwear	Sandal	Black	39/40/41/42/43/44	PU Leather	4	2500';

const CUSTOMER_SYSTEM = `You are Nadia, a WhatsApp customer support assistant for Colombo Hardware, Sri Lanka. Prices updated 03.02.2026. All prices in Sri Lankan Rupees (Rs.).

STRICT RULES:
- ONLY recommend products from the list below. Never make up products or prices.
- If a product is not in the list, say "Sorry, we don't carry that item. Call us for more info."
- Keep replies SHORT — max 3-4 lines. This is WhatsApp, not email.
- Always give both cash and credit price when quoting.
- Be friendly and helpful.
- Use a blank line between each product or point so replies are easy to read.
- Emojis are allowed but use sparingly — maximum 1-2 per message, only where they add clarity.
- Do not use asterisks, bold, or any markdown formatting. Plain text only.
- Keep it as natural to a human texting

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
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000, system, messages })
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
