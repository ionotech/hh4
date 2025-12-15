# hh4

A full-stack application with NestJS backend, Next.js frontend, and PostgreSQL database.

## Architecture

```
hh4
├── apps/
│   ├── backend/       # NestJS API (port 4000)
│   └── frontend/      # Next.js UI (port 3000)
├── packages/
│   └── db/            # Prisma ORM & database schema
├── docker-compose.yml # Full-stack deployment
└── .env.example       # Environment template
```

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm
- Docker & Docker Compose
- PostgreSQL 16

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ionotech/hh4.git
cd hh4
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your values:
```env
DB_USER=ionolab_user
DB_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret
```

4. Install dependencies:
```bash
pnpm install
```

5. Set up database:
```bash
pnpm db:push
pnpm db:generate
```

### Local Development

Run all services locally:
```bash
pnpm dev
```

This starts:
- Backend: http://localhost:4000/api
- Frontend: http://localhost:3000
- Database: PostgreSQL on localhost:5432

### Database Management

```bash
# Generate Prisma Client
pnpm db:generate

# Run migrations
pnpm db:migrate

# Open Prisma Studio
pnpm db:studio

# Push schema changes
pnpm db:push
```

### Docker Deployment

Build and run with Docker Compose:
```bash
docker-compose up --build
```

Services:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:4000/api
- **Database**: localhost:5432

## API Endpoints

### Health Check
```
GET /api/health
```

### Items (Sample CRUD)
```
GET    /api/items           # List all items
POST   /api/items           # Create item
GET    /api/items/:id       # Get specific item
PATCH  /api/items/:id       # Update item
DELETE /api/items/:id       # Delete item
```

### Authentication
```
POST /api/auth/login      # Login (email, password)
GET  /api/auth/profile    # Get user profile
POST /api/auth/logout     # Logout
```

## Tech Stack

### Backend
- **Framework**: NestJS 11
- **Database**: PostgreSQL 16
- **ORM**: Prisma 7
- **Auth**: JWT

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **HTTP Client**: Built-in fetch

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **CI/CD**: GitHub Actions

## Project Structure

```
apps/backend/
├── src/
│   ├── main.ts              # Entry point
│   ├── app.module.ts        # Root module
│   ├── app.controller.ts    # Routes
│   ├── auth/                # Authentication
│   ├── database/            # Database layer
│   └── prisma/              # Prisma service
├── package.json
└── tsconfig.json

apps/frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Home page
│   │   └── layout.tsx       # Root layout
│   ├── lib/
│   │   └── api.ts           # API client
│   └── contexts/
│       └── AuthContext.tsx  # Auth state
├── package.json
└── next.config.ts

packages/db/
├── prisma/
│   ├── schema.prisma        # Data model
│   └── migrations/          # Migration history
├── package.json
└── prisma.config.ts
```

## Environment Variables

Create `.env` from `.env.example`:

```env
# Database
DB_HOST=postgres              # PostgreSQL hostname
DB_PORT=5432                  # PostgreSQL port
DB_USER=ionolab_user          # Database user
DB_PASSWORD=secure_password   # Database password
DB_NAME=hh4_db     # Database name

# Backend
BACKEND_PORT=4000
NODE_ENV=production
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## Development Workflow

1. Create a feature branch:
```bash
git checkout -b feature/my-feature
```

2. Make changes and test locally:
```bash
pnpm dev
```

3. Build and test:
```bash
pnpm build
pnpm test
```

4. Push to GitHub:
```bash
git push origin feature/my-feature
```

5. Create a Pull Request

6. Merge to `main` when approved

7. Tag release:
```bash
git tag v1.0.0
git push origin v1.0.0
```

## Deployment

### Production Build

```bash
pnpm build
docker-compose -f docker-compose.yml up -d
```

### CI/CD Pipeline

Push to `release` branch to trigger GitHub Actions:
- Builds both Docker images
- Pushes to GitHub Container Registry
- Ready for deployment

## Troubleshooting

### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
Ensure PostgreSQL is running or use Docker Compose:
```bash
docker-compose up postgres
```

### Port Already in Use
Change ports in `.env` or docker-compose.yml:
```env
BACKEND_PORT=4001
FRONTEND_PORT=3001
```

### Prisma Schema Issues
Regenerate Prisma Client:
```bash
pnpm db:generate
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## License

MIT

## Support

For issues and questions:
- GitHub Issues: https://github.com/ionotech/hh4/issues
- Documentation: See `/docs` folder

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
