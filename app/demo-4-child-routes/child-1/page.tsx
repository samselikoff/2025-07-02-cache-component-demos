import Spinner from '@/app/_components/Spinner';
import { fetchCurrentTime } from '@/app/lib/fetch-data';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <p>Child 1 page</p>
      <Suspense fallback={<Spinner />}>
        <RandomNumber />
      </Suspense>
    </div>
  );
}

async function RandomNumber() {
  const number = await fetchCurrentTime();
  console.log(number);

  return <p>{number}</p>;
}
