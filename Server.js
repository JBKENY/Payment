const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const processPayment = require('./processPayment');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/pay', async (req, res) => {
    const { amount, phoneNumber } = req.body;
    if (!amount || !phoneNumber) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        const response = await processPayment(amount, phoneNumber);
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
