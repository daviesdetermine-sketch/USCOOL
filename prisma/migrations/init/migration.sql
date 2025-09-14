-- Prisma baseline migration (manual)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE "Role" AS ENUM ('ADMIN','TEACHER','STUDENT','PARENT');

CREATE TABLE "User" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT,
  role "Role" NOT NULL DEFAULT 'STUDENT',
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);