const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: 'Tripti Verma',
    referralCode: 'tripti2025',
    totalDonations: 4200,
    rewards: ['T-shirt', 'Certificate', 'Workshop Invite']
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Tripti', donations: 4200 },
    { name: 'Aryan', donations: 3200 },
    { name: 'Kriti', donations: 1500 }
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

