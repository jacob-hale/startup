import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fetch from 'node-fetch'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from root/build (not service/build)
app.use(express.static(join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.use(express.json());

// Mock data for mood entries
let moodEntries = [
  {
    date: '3/10/2025',
    mood: '😊 happy',
    note: 'Feeling great!',
  },
  {
    date: '3/11/2025',
    mood: '😢 sad',
    note: 'Feeling down.',
  },
];

// Endpoint to get all mood entries
app.get('/api/mood-entries', (req, res) => {
  res.json(moodEntries);
});

let users = [];

// Endpoint to create a new user
app.post('/api/users', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists.' });
  }
  const newUser = { username, password, userId: `${username}_${password}` };
  users.push(newUser);
  console.log('New user created:', newUser);
  res.json(newUser);
});

// Endpoint to log in a user
app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  const user = users.find((user) => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password.' });
  }
  res.json(user);
});

// Endpoint to add a new mood entry
app.post('/api/mood-entries', (req, res) => {
  const newEntry = req.body;
  const hasEntryForToday = moodEntries.some((entry) => entry.date === newEntry.date);
  if (hasEntryForToday) {
    return res.status(400).json({ error: 'You can only submit one entry per day.' });
  }
  moodEntries.push(newEntry);
  res.json(moodEntries);
});

// Endpoint to fetch a random quote
app.get('/api/quote', async (req, res) => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    const data = await response.json();
    res.json({ quote: data.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});