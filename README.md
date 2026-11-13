# Movies & TV

Browse movies and TV shows from [TMDB](https://www.themoviedb.org/): what is playing now, what is
popular this week, what is coming, and the details of any title. Built with Next.js (App Router),
TypeScript, Redux Toolkit, MUI and Tailwind CSS.

**Live demo:** [etfrg-movies-app.vercel.app](https://etfrg-movies-app.vercel.app)

## Features

- **Home page sections**: a hero, now playing, popular this week, upcoming movies, TV on the air
  and TV networks, each as a swipeable slider.
- **One detail page for movies and shows** (`/[media]/[mediaId]`): overview, cast, similar titles,
  and for TV the seasons, episodes and reviews in tabs.
- **Search** across movies and TV with debounced input and pagination.
- **Loading states** with skeletons for sliders and stories, plus a route-level loading and error
  page.
- **Genres** for movies and TV loaded once and shared through Redux Toolkit slices.
- Image placeholders when a title has no poster.

## Stack

Next.js 14 · React 18 · TypeScript · Redux Toolkit · MUI · Tailwind CSS · Splide · use-debounce

## Run it locally

```bash
npm install
npm run dev
```

Create `.env.local` with a TMDB read access token (from
[themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)):

```
TMDB_TOKEN=your-read-access-token
```

The token stays on the server: server components call TMDB directly, and the one client component
that loads data (the TV seasons tab) goes through the app's own `/api/tmdb` route.

## Structure

```
app/
  page.tsx               home sections
  [media]/[mediaId]/     movie or TV detail page
  search/                search with pagination
  lib/                   TMDB client, types, Redux store and genre slices
  ui/components/         sliders, hero, navbar, footer, skeletons, detail tabs
```
