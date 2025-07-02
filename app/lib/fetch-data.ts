export async function fetchRandomNumber(query = 'foo') {
  console.log(query);
  await fetch(`https://httpbin.org/delay/1`);

  return Math.random();
}
