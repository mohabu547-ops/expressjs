import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PRODUCTS = `DRYWALL SCREW BLACK 1x8" | Code: MTC-CMB-8-1 | Cash: Rs.630 | Credit: Rs.665
DRYWALL SCREW BLACK 1-1/4x8" | Code: MTC-CMB-8-3 | Cash: Rs.825 | Credit: Rs.875
DRYWALL SCREW BLACK 1-1/2x8 | Cash: Rs.840 | Credit: Rs.880
DRYWALL SCREW BLACK 3x8" | Code: MTC-CMB-8-5 | Cash: Rs.910 | Credit: Rs.975
commode nail king 16pcs | Code: MTC-CBM-13-20 | Cash: Rs.170 | Credit: Rs.185
basin nail king 8pcs | Code: MTC-CBM-13-21 | Cash: Rs.215 | Credit: Rs.230
BOLT & Nuts | Code: MTC-CMB-8 | Cash: Rs.290 | Credit: Rs.300
304 SUS padlock 11/40WF short | Code: MTC-CMB-9-48 | Cash: Rs.2825 | Credit: Rs.3160
304 SUS padlock 11/50WF short | Code: MTC-CMB-9-49 | Cash: Rs.3440 | Credit: Rs.3650
304 SUS padlock 12/40WF long | Code: MTC-CMB-9-50 | Cash: Rs.2900 | Credit: Rs.3200
304 SUS padlock 12/50WF long | Code: MTC-CMB-9-51 | Cash: Rs.3540 | Credit: Rs.3750
GLOBE PAD LOCK 401 3/4" | Cash: Rs.2640 | Credit: Rs.2750
GLOBE PAD LOCK 403 1-1/4" | Cash: Rs.5050 | Credit: Rs.5675
GLOBE PAD LOCK 404L 1-1/2" | Cash: Rs.6950 | Credit: Rs.7060
GLOBE PAD LOCK 405 2" | Cash: Rs.11800 | Credit: Rs.12375
GLOBE PAD LOCK 406 2-1/2" | Cash: Rs.17950 | Credit: Rs.19975
KEYHOLE MAB | Code: MTC-CBM-11-98 | Cash: Rs.590 | Credit: Rs.610
DOOR GUARD MX-AB | Code: MTC-CMB-8-69 | Cash: Rs.540 | Credit: Rs.580
DOOR GUARD MX-SS | Code: MTC-CMB-8-70 | Cash: Rs.540 | Credit: Rs.580
drawer lock bird 501 | Code: MTC-CBM-13-13 | Cash: Rs.597 | Credit: Rs.640
bird lock box | Code: MTC-CBM-13-10 | Cash: Rs.945 | Credit: Rs.1010
DOOR LOCK BODY DOUBLE DOOR | Cash: Rs.3050 | Credit: Rs.3200
HINGE 3INCH PAIR | Cash: Rs.380 | Credit: Rs.390
bolt SS 3" | Code: MTC-CBM-11-90 | Cash: Rs.70 | Credit: Rs.75
bolt SS 4" | Code: MTC-CBM-11-91 | Cash: Rs.80 | Credit: Rs.85
bolt LR 3" | Code: MTC-CBM-11-92 | Cash: Rs.125 | Credit: Rs.135
bolt LR 4" | Code: MTC-CBM-11-93 | Cash: Rs.140 | Credit: Rs.150
BOLT ZXD 4" | Code: MTC-CMB-8-75 | Cash: Rs.155 | Credit: Rs.165
BOLT ZXD 6" | Cash: Rs.185 | Credit: Rs.195
BOLT ZXD 8" | Code: MTC-CMB-8-76 | Cash: Rs.215 | Credit: Rs.225
ARABIC HANDLE SMALL | Cash: Rs.144 | Credit: Rs.180
ARABIC HANDLE MEDIUM | Cash: Rs.240 | Credit: Rs.280
ARABIC HANDLE LARGE | Cash: Rs.360 | Credit: Rs.450
HANDLE 300MM SS/MAB | Cash: Rs.4650 | Credit: Rs.4750
HANDLE 450MM SS/MAB | Cash: Rs.5525 | Credit: Rs.5625
HANDLE 600MM SS/MAB | Cash: Rs.6450 | Credit: Rs.6550
HANDLE 750MM SS/MAB | Cash: Rs.7350 | Credit: Rs.7450
HANDLE 900MM SS/MAB | Cash: Rs.8750 | Credit: Rs.8850
ROUND HANDLE T12-96 SS 4" | Code: MTC-CMB-11-80 | Cash: Rs.60 | Credit: Rs.70
ROUND HANDLE T12-96 SS 6" | Code: MTC-CMB-11-81 | Cash: Rs.75 | Credit: Rs.80
ROUND HANDLE 8" | Cash: Rs.90 | Credit: Rs.100
ROUND HANDLE 10" | Cash: Rs.102 | Credit: Rs.112
ROUND HANDLE 12" | Cash: Rs.160 | Credit: Rs.165
ROUND HANDLE 14" | Cash: Rs.170 | Credit: Rs.180
SQ HANDLE 4" | Cash: Rs.260 | Credit: Rs.285
SQ HANDLE 6" | Code: MTC-CMB-8-72 | Cash: Rs.280 | Credit: Rs.310
SQ HANDLE 8" | Code: MTC-CMB-8-73 | Cash: Rs.290 | Credit: Rs.320
SQ HANDLE 12" | Cash: Rs.475 | Credit: Rs.490
SQ HANDLE 14" | Cash: Rs.500 | Credit: Rs.520
DRAWER RAILING 16" BLACK | Cash: Rs.615 | Credit: Rs.640
DRAWER RAILING 20" BLACK | Cash: Rs.770 | Credit: Rs.800
Glass shelf bracket 8MM | Code: MTC-CMB-8-93 | Cash: Rs.105 | Credit: Rs.117
Glass shelf bracket 10MM | Code: MTC-CMB-8-94 | Cash: Rs.120 | Credit: Rs.135
Velcro pad 4" SLIM RED | Cash: Rs.125 | Credit: Rs.145
Velcro pad 4.5" SLIM RED | Cash: Rs.135 | Credit: Rs.185
Velcro paper P40 4" | Cash: Rs.11 | Credit: Rs.13
Velcro paper P60 4" | Cash: Rs.11 | Credit: Rs.13
Velcro paper P80 4" | Cash: Rs.11 | Credit: Rs.13
Velcro paper P100 4" | Cash: Rs.11 | Credit: Rs.13
Flap disc 4" P120 | Cash: Rs.85 | Credit: Rs.93
Flap disc 4.5" | Cash: Rs.108 | Credit: Rs.115
dual flush button | Code: MTC-CMB-9-81 | Cash: Rs.145 | Credit: Rs.160
floating ball valve 1/2" | Cash: Rs.1040 | Credit: Rs.1075
union valve PVC | Cash: Rs.180 | Credit: Rs.200
WESDA SHELF SQ 001-500 | Cash: Rs.1750 | Credit: Rs.2150
WESDA SHELF SQ 001-400 | Cash: Rs.585 | Credit: Rs.610
WESDA TOWEL BAR 6001 RD | Cash: Rs.550 | Credit: Rs.575
WESDA TOWEL BAR SQ A067 | Cash: Rs.1190 | Credit: Rs.1375
WESDA SOAP DISH W-602 | Cash: Rs.530 | Credit: Rs.605
SOAP DISH W-401 | Cash: Rs.300 | Credit: Rs.345
soap basket 1207-14 | Cash: Rs.1500 | Credit: Rs.1675
Soap dish 1207-15 | Cash: Rs.1500 | Credit: Rs.1675
Tooth Brush Holder 1207-16 | Cash: Rs.1500 | Credit: Rs.1675
Corner Basket 1207-50 | Cash: Rs.1550 | Credit: Rs.1725
Seat Cover white | Cash: Rs.1350 | Credit: Rs.1475
plastic bidet set | Cash: Rs.900 | Credit: Rs.960
Barrel nipple 1/2" | Cash: Rs.56 | Credit: Rs.63
Barrel nipple 1" | Cash: Rs.152 | Credit: Rs.170
STOP TAP 0.5 | Cash: Rs.2500 | Credit: Rs.2750
STOP TAP 0.75 | Cash: Rs.2850 | Credit: Rs.2975
BIB TAP PLUMBER | Cash: Rs.2800 | Credit: Rs.2975
BASIN TAP PLUMBER | Cash: Rs.2750 | Credit: Rs.2850
GALAXY BASIN TAP | Cash: Rs.1300 | Credit: Rs.1500
GALAXY ANGLE VALVE | Cash: Rs.780 | Credit: Rs.1000
faucet long | Code: MTC-CMB-9-47 | Cash: Rs.4650 | Credit: Rs.5100
ball valve Venus 1/2" | Cash: Rs.640 | Credit: Rs.675
ball valve Venus 3/4" | Cash: Rs.1120 | Credit: Rs.1175
ball valve Venus 1" | Cash: Rs.1600 | Credit: Rs.1625
Bottle Trap CP | Cash: Rs.1150 | Credit: Rs.1200
silver waste | Cash: Rs.520 | Credit: Rs.550
rubber waste | Cash: Rs.465 | Credit: Rs.490
shower 6x6 | Cash: Rs.1050 | Credit: Rs.1150
telephone shower 1207-32 | Cash: Rs.625 | Credit: Rs.675
telephone shower BRASS | Cash: Rs.1750 | Credit: Rs.1955
Floating Switch 1.5M | Cash: Rs.525 | Credit: Rs.560
Floating Switch 2M | Cash: Rs.560 | Credit: Rs.600
sensor switch CMX-2 | Cash: Rs.300 | Credit: Rs.320
MASION TOWEL F-TECH 6" | Cash: Rs.190 | Credit: Rs.215
MASION TOWEL F-TECH 7" | Cash: Rs.205 | Credit: Rs.230
MASION TOWEL F-TECH 8" | Cash: Rs.210 | Credit: Rs.245
MASION TOWEL F-TECH 9" | Cash: Rs.226 | Credit: Rs.265
MASION TOWEL F-TECH 10" | Cash: Rs.240 | Credit: Rs.280
HACK SAW FRAME | Code: MTC-CMB-11-75 | Cash: Rs.325 | Credit: Rs.345
FOLDABLE KNIFE | Cash: Rs.360 | Credit: Rs.380
BICYCLE LOCK small | Cash: Rs.1250 | Credit: Rs.1350
BICYCLE LOCK medium | Cash: Rs.1350 | Credit: Rs.1450
BICYCLE LOCK large | Cash: Rs.1450 | Credit: Rs.1550
MEASURING TAPE 5M | Cash: Rs.385 | Credit: Rs.400
Bending spanner 10" | Cash: Rs.290 | Credit: Rs.320
pliers 8" | Code: MTC-CMB-8-58 | Cash: Rs.235 | Credit: Rs.265
Tin shears 12" | Cash: Rs.1720 | Credit: Rs.1750
shifter wrench 8" | Cash: Rs.440 | Credit: Rs.460
wrench 10" | Cash: Rs.600 | Credit: Rs.630`;

const CUSTOMER_SYSTEM = `You are Nadia, a WhatsApp customer support assistant for Colombo Hardware, Sri Lanka. Prices updated 03.02.2026. All prices in Sri Lankan Rupees (Rs.).

STRICT RULES:
- ONLY recommend products from the list below. Never make up products or prices.
- If a product is not in the list, say "Sorry, we don't carry that item. Call us for more info."
- Keep replies SHORT — max 3-4 lines. This is WhatsApp, not email.
- Always give both cash and credit price when quoting.
- Be friendly and helpful.

OUR PRODUCTS:
${PRODUCTS}`;

const STAFF_SYSTEM = `You are Atlas, internal assistant for Colombo Hardware staff. Prices updated 03.02.2026.

STRICT RULES:
- ONLY reference products from the list below. Never invent products or prices.
- Always include item codes in responses.
- Be direct and fast. Short replies only.

FULL PRODUCT LIST:
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
    const userMessage = incomingMsg;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: CUSTOMER_SYSTEM,
        messages: [{ role: 'user', content: userMessage }]
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
