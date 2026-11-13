const BASE_URL = "https://api.themoviedb.org/3";

/** The TMDB areas the app reads. Anything else is refused. */
const ALLOWED = new Set(["movie", "tv", "search", "genre", "watch", "trending", "network", "person"]);

/**
 * Read-only proxy for client components: forwards a GET to TMDB with the server-side token, so the
 * token never reaches the browser.
 */
export async function GET(request: Request, { params }: { params: { path: string[] } }) {
  const token = process.env.TMDB_TOKEN;
  if (!token) return Response.json({ error: "TMDB_TOKEN is not set" }, { status: 500 });
  if (!ALLOWED.has(params.path[0])) return Response.json({ error: "not found" }, { status: 404 });

  const search = new URL(request.url).search;
  const target = `${BASE_URL}/${params.path.map(encodeURIComponent).join("/")}${search}`;
  const response = await fetch(target, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 86400 },
  });
  return new Response(response.body, {
    status: response.status,
    headers: { "Content-Type": response.headers.get("Content-Type") ?? "application/json" },
  });
}
