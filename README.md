*🌟 JBM-XMD BOT 🌟*
Welcome to *JBM-XMD BOT* , the next-generation personal website with real-time M-Pesa integration, dynamic CPU functionality, and stunning visual effects! 🚀

---

*🌐 Live Demo*
> Click here to view the *[Live Demo]* !

---

*✨ Features*
- *M-Pesa Payment Integration* : Effortlessly receive payments directly into your *Till Number* .
- *Dynamic Metrics* :
  - Real-time *CPU Health* status.
  - Simulated *RAM* and *ROM* usage.
  - User's *mobile phone model* and *location detection* .
- *Attractive UI* :
  - Gradient animations and glowing effects for an engaging experience.
  - Fully responsive design for all devices.
- *Real-Time Updates* :
  - Live clock displaying *current time* and *date* .

---

*🛠️ Technologies Used*
*Technology* *Purpose* HTML5 + CSS3Structure and StylingJavaScriptDynamic FunctionalityNode.js + ExpressBackend ServerAxiosAPI RequestsSafaricom M-Pesa APIPayment Gateway Integration---

*🚀 How to Run the Project*
Follow these steps to set up the project locally:

*1️⃣ Clone the Repository*
git clone https://github.com/JBM-X/JBM-XMD.git
cd JBM-XMD 
*2️⃣ Install Dependencies*
Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:
npm install
*3️⃣ Configure API Credentials*
- Create a .env file in the root directory and add your Safaricom M-Pesa API credentials:

  CONSUMER_KEY=your_consumer_key
  CONSUMER_SECRET=your_consumer_secret
  TILL_NUMBER=your_till_number 
  CALLBACK_URL=
  
*4️⃣ Start the Server*
npm start
*5️⃣ Open the Website*
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

*💵 M-Pesa Payment Workflow*
1. User enters the *amount* and clicks the "Pay with M-Pesa" button.
2. The *JBM-XMD BOT* triggers a real-time request to the M-Pesa API.
3. The user receives a pop-up on their phone to enter their M-Pesa PIN.
4. Once the payment is processed, the server receives a confirmation.

---

*✍️ Example API Request (C2B Payment Simulation)*
Here’s how the backend sends a payment request to Safaricom:
const axios = require('axios');

async function sendPayment(amount, phoneNumber) {
  const mpesaEndpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
  const payload = {
    BusinessShortCode: process.env.TILL_NUMBER,
    Password: "GeneratedPassword",
    Timestamp: new Date().toISOString(),
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: process.env.TILL_NUMBER,
    PhoneNumber: phoneNumber,
    CallBackURL: process.env.CALLBACK_URL,
    AccountReference: "JBM-XMD",
    TransactionDesc: "Website Payment",
  };

  const response = await axios.post(mpesaEndpoint, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Replace with your token
    },
  });

  console.log(response.data);
}
---

*📂 Project Structure*
JBM-XMD-BOT/
├── public/
│   ├── index.html          # Frontend HTML
│   ├── style.css           # Styling
│   └── script.js           # Dynamic Frontend Logic
├── server.js               # Backend Server Logic
├── package.json            # Node.js Configuration
├── app.json                # App Metadata
└── README.md               # Project Documentation
---

*🖼️ Screenshots*
*Dynamic Metrics and Payment Interface:*
![Website Screenshot](https://yourwebsiteurl.com/screenshot.png)

---

*👥 Contributors*
- *C.E.O Jacob Musyoka* - Lead Developer
- *Your Name* - Backend and Frontend Specialist

---

*🛡️ License*
This project is licensed under the *MIT License* .

Feel free to contribute and make JBM-XMD BOT even better! 🌟
