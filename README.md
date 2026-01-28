# Frontend Engineer Assignment — Performant Data Table

## Objective

Build a **performant data table in React** that can efficiently render **1000+ rows** and supports:

- Row selection
- Filtering
- Sorting
- Searching
- Clean UX and accessibility
- Maintainable, modular architecture

The focus of this assignment is on **functionality, performance, clean code, and engineering quality** rather than visual design.

---

## Tech Stack

- **React + TypeScript + Vite** — Application framework & build tooling
- **Zustand** — Lightweight global state management
- **Tailwind CSS** — Utility-first styling
- **Axios** — API client
- **JSON Server** — Mock backend
- **Faker** — Fake data generation (1000+ records)
- **Jest + React Testing Library** — Unit & integration testing

---

## Features & Functionality

### Data Management

- Mock backend using JSON Server serving **1000+ records**
- Data generation using Faker
- Fully typed API integration

### Table Features

- Efficient rendering of large datasets
- Row selection using checkboxes
- Multi-select support
- Submit action that logs **array of selected IDs** (as per assignment requirement)

### Search

- Real-time search by:
  - Name
  - Location

- Debounced input for performance optimization

### Filtering

- Health-based filtering:
  - Healthy
  - Injured
  - Critical

- Multi-select filtering via dropdown in table header

### Sorting

- Toggle sorting by **Power** column
- Ascending / Descending ordering

### Performance Optimizations

- Derived state rendering
- Memoized table rows
- Minimal re-renders
- Debounced search input
- Efficient state updates

### Testing

- Integration tests simulating real user behavior:
  - Typing into search input
  - Applying filters
  - Selecting rows
  - Sorting data
  - Submitting selected rows

- API layer mocking for deterministic test execution

---

## How To Use

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Generate Mock Data

Generates **1000+ fake records**:

```bash
npm run generate
```

This creates a `db.json` file used by JSON Server.

---

### 3. Start Mock Backend (JSON Server)

```bash
npm run server
```

Server will start at:

```
http://localhost:4000/characters
```

---

### 4. Start Frontend Application

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

### 5. Run Everything With One Command

Starts:

- Data generation
- JSON server
- React app

```bash
npm run dev:full
```

---

### 6. Run Tests

```bash
npm run test
```

Runs full integration test suite using Jest + React Testing Library.

---

## Project Highlights

- Clean component architecture
- Strong separation of concerns
- Production-grade state management
- High performance rendering strategy
- Robust test coverage
- Scalable design for future extensions
