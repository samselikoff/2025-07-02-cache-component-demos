import invariant from 'tiny-invariant';
import { domain } from './domain';

export async function fetchRandomNumber(query = 'foo') {
  const res = await fetch(`${domain}/api?${query}`);
  const { data } = await res.json();

  invariant(typeof data === 'number');

  return data;
}
