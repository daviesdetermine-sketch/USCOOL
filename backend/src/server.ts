import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Example auth placeholder
app.post('/auth/login', (req, res) => {
  // TODO: implement login, JWT generation
  res.status(501).json({ error: 'Not implemented' });
});

// Example students endpoint
app.get('/students', (_req, res) => {
  res.json([{ id: 1, name: 'Alice Example' }]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
