/**
 * Prisma 7 Configuration
 * This file is loaded by prisma CLI to determine datasource and generation settings
 * It should NOT import PrismaClient to avoid circular dependencies during 'prisma generate'
 */

export const config = {
  // Datasource URL is read from environment variables
  // IONOLAB_DATABASE_URL takes precedence, falls back to DATABASE_URL
  datasource: {
    url: process.env.IONOLAB_DATABASE_URL ?? process.env.DATABASE_URL,
  },
};

export default config;
