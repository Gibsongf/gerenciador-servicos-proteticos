---

# Gerenciamento Protético

A React front-end for dental prosthetic lab management. Handles CRUD operations and exports service orders to Excel.

**Live demo:** https://gerenciador-servicos-proteticos.vercel.app
## What it does

- Create, read, update, and delete: services, clients, clinics, and products
- Export service orders by client and date range to Excel
- Login with token from Passport backend
- Guest login option (no registration required)
- Responsive layout (works on mobile)

## Tech stack

- React with Hooks, Context API, and Router
- CSS Modules with media queries
- npm

## Setup

```bash
npm install
npm run dev
```
## Routes

| Path | Purpose |
|------|---------|
| `/servico` | Services |
| `/cliente` | Clients |
| `/clinica` | Clinics |
| `/produto` | Products |
| `/conta` | Account settings |
| `/exportar` | Excel export |

## Authentication

Backend validates login and returns a token. Include it in API requests. No registration page - guest access is available.

## Export

Select client, start date, and end date. Generates an Excel file with service orders from that period.

