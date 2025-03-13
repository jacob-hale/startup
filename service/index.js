import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static(join(__dirname, '../public')));

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

// Endpoint to add a new mood entry
app.post('/api/mood-entries', (req, res) => {
const newEntry = req.body;

// Check if an entry already exists for the same date
const hasEntryForToday = moodEntries.some((entry) => entry.date === newEntry.date);

if (hasEntryForToday) {
    return res.status(400).json({ error: 'You can only submit one entry per day.' });
}

// Add the new entry to the mock data
moodEntries.push(newEntry);

// Return the updated list of entries
res.json(moodEntries);
});

// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});