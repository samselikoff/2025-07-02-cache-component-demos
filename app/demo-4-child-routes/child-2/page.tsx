import { fetchCurrentTime } from '@/app/lib/fetch-data';
import { unstable_cacheLife as cacheLife } from 'next/cache';

export default function Page() {
  return (
    <div>
      <p>Child 2 page</p>
      <RandomNumber />
    </div>
  );
}

async function RandomNumber() {
  'use cache';
  cacheLife({ revalidate: 10, stale: 10 });

  const number = await fetchCurrentTime();
  console.log(number);

  return <p>{number}</p>;
}
