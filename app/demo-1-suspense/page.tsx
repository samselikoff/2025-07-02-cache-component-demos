import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import { fetchCurrentTime } from '../lib/fetch-data';

export default async function Page() {
  return (
    <div className="m-8">
      <p>Demo 1</p>

      <Suspense fallback={<Spinner />}>
        <RandomNumber />
      </Suspense>
    </div>
  );
}

async function RandomNumber() {
  const number = await fetchCurrentTime();

  return <p>{number}</p>;
}
