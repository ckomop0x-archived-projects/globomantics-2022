import Link from "next/link";

async function fetchSessions() {
  const response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
      { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

export default async function Page () {
  const data = await fetchSessions();

  return <>
    <h1>Welcome to Conference Sessions</h1>
    <h2>
      <Link href="/conference">Back to Conference</Link>
    </h2>
    </>
}
