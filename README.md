# Where's Waldo – Photo Tagging App

A full-stack photo tagging game where players find hidden characters in a detailed image. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) curriculum.

---

## How It Works

1. Enter your name and click **START** — a game session is created on the server and your start time is recorded.
2. Click anywhere on the image to bring up a targeting box and a selection menu showing the remaining characters.
3. Pick the character you think you've found. The server validates your coordinates and responds with a pass or fail.
4. Find all 3 characters to end the game. Your time is calculated server-side and saved to the leaderboard.
5. The scoreboard shows the top 5 fastest times, with your own score highlighted.

---

## Features

- Large scrollable game image with click-to-target interaction
- Server-side coordinate validation with a 50px tolerance radius — character positions are never exposed to the client
- Server-side timing — start time is recorded by the server on game start, making score manipulation impossible
- Live countdown timer displayed during gameplay
- Leaderboard showing top 5 scores, with the player's own score highlighted whether or not they made the top 5
- Modal dialog for game start (instructions + name entry) and game end (scoreboard)
- Retry button to start a fresh game

---

## Tech Stack

**Frontend**
- React (Vite)
- CSS Modules

**Backend**
- Node.js / Express
- Prisma ORM
- PostgreSQL

---

## Project Structure

```
Where-s-Waldo/
├── backend/
│   ├── lib/
│   │   └── prisma.js              # Prisma client setup
│   ├── prisma/
│   │   └── seed.js                # Database seed (character data)
│   ├── repositories/
│   │   └── queries.js             # All database queries
│   └── src/
│       ├── controllers/
│       │   └── appController.js   # Route handler logic
│       ├── routes/
│       │   └── appRouter.js       # Express router
│       └── app.js                 # Express app entry point
│
└── wheres-waldo/                  # React frontend (Vite)
    └── src/
        ├── api/
        │   └── requests.js        # Frontend API layer
        ├── components/
        │   ├── Game/              # Main game area + image
        │   ├── GameSideBar/       # Timer + remaining characters
        │   ├── Instructions/      # Start game form
        │   ├── LandingPage/       # Root component, manages game state
        │   ├── Modal/             # Reusable portal-based dialog
        │   ├── Scoreboard/        # End game leaderboard
        │   └── SelectionMenu/     # Character picker on click
        └── utils/
            ├── apiFetch.js        # Fetch wrapper with error handling
            └── formatMilliseconds.js
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/characters` | Returns all characters (without coordinates) |
| `POST` | `/api/score` | Creates a new game session, records start time |
| `POST` | `/api/character/verify` | Validates click coordinates against stored position |
| `PATCH` | `/api/score` | Records end time and computes duration |
| `GET` | `/api/scores?sort=duration&limit=5` | Returns top N scores sorted by duration |

---

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL database
- A `.env` file at the project root with:

```
DATABASE_URL=postgresql://user:password@localhost:5432/yourdb
```

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
node prisma/seed.js
node src/app.js
```

The backend runs on `http://localhost:3000` by default.

### Frontend

```bash
cd wheres-waldo
npm install
npm run dev
```

The frontend runs on `http://localhost:5174` and proxies `/api` requests to the backend automatically via Vite's proxy config.

---

## Database Schema

```prisma
model Character {
  id   Int    @id @default(autoincrement())
  name String
  url  String
  x    Int
  y    Int
}

model Score {
  id          Int       @id @default(autoincrement())
  displayName String
  startTime   DateTime  @default(now())
  endTime     DateTime?
  duration    Float?
}
```

---

## Characters

The game randomly selects 3 characters each round from a pool of 6:

- Conan (Detective Conan)
- Gendo Ikari (Neon Genesis Evangelion)
- Kenshiro (Fist of the North Star)
- L (Death Note)
- Crash Bandicoot
- Vash the Stampede (Trigun)
