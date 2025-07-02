import { fetchCurrentTime } from '@/app/lib/fetch-data';
import { unstable_cacheLife as cacheLife } from 'next/cache';

export default async function Page() {
  return (
    <div className="m-8">
      <p>Demo 2</p>

      <RandomNumber />
    </div>
  );
}

async function RandomNumber() {
  'use cache';
  cacheLife({ revalidate: 5 });

  const number = await fetchCurrentTime();
  console.log({ number });

  return <p>{number}</p>;
}
