const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle payment
app.post('/pay', async (req, res) => {
  const { amount, phoneNumber } = req.body;

  if (!amount || !phoneNumber) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // Replace with actual M-Pesa API endpoint and credentials
    const mpesaEndpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const response = await axios.post(mpesaEndpoint, {
      BusinessShortCode: process.env.BUSINESS_SHORTCODE, // Replace with your Till Number
      Password: process.env.MPESA_PASSWORD, // Replace with your generated password
      Timestamp: new Date().toISOString(),
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.BUSINESS_SHORTCODE, // Replace with your Till Number
      PhoneNumber: phoneNumber,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: "WebsitePayment",
      TransactionDesc: "Payment via Website",
    });

    res.status(200).json({ success: true, message: 'Payment initiated', data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
