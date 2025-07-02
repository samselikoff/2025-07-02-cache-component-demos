export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1_000));
  return Response.json({ data: Math.random() });
}
