import { now } from '@internationalized/date';
import { format } from 'date-fns';

export async function fetchCurrentTime(query = 'foo') {
  console.log(query);
  await fetch(`https://httpbin.org/delay/1`);

  const nyTime = now('America/New_York');

  // return format(nyTime.toDate(), 'h:mm:ss');
  return format(nyTime.toDate(), 'mm–ss');

  // return Math.random();
}
