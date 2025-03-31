javascript
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
      BusinessShortCode: "3401640", // Replace with your Till Number
      Password: "YourPassword", // Replace with your generated password
      Timestamp: new Date().toISOString(),
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: "3401640", // Replace with your Till Number
      PhoneNumber: phoneNumber,
      CallBackURL: "https://yourdomain.com/callback",
      AccountReference: "WebsitePayment",
      TransactionDesc: "Payment via Website",
