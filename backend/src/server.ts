import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './auth';
import { prisma } from './prisma';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/auth', authRouter);

app.get('/seed', async (_req, res) => {
  // Quick seed for testing (idempotent)
  const exists = await prisma.user.findUnique({ where: { email: 'admin@uscool.local' } });
  if (exists) return res.json({ ok: true, seeded: false });
  const admin = await prisma.user.create({
    data: {
      email: 'admin@uscool.local',
      password: '$2b$10$2bY8O7xQH6m0cKxYf7Y7reu2s/3Gq2I1yYgK8r2z8sFZpQ2Y1x1u6', // "password" hashed (for dev only)
      name: 'Administrator',
      role: 'ADMIN'
    }
  });
  res.json({ ok: true, seeded: true, admin: { id: admin.id, email: admin.email } });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));