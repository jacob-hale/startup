import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static(join(__dirname, '../public')));

app.use(express.json());

// Example endpoint
app.get('/api/mood-entries', (req, res) => {
  // Mock data for mood entries
  const entries = [
    { date: '10/10/2023', mood: '😊 happy', note: 'Feeling great!' },
    { date: '10/11/2023', mood: '😢 sad', note: 'Feeling down.' },
  ];
  res.json(entries);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });