import invariant from 'tiny-invariant';

export async function fetchRandomNumber(query = 'foo') {
  const res = await fetch(`http://localhost:3000/api?${query}`);
  const { data } = await res.json();

  invariant(typeof data === 'number');

  return data;
}
