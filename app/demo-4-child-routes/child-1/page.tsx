import Spinner from '@/app/_components/Spinner';
import { fetchRandomNumber } from '@/app/lib/fetch-data';
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
  const number = await fetchRandomNumber();
  console.log(number);

  return <p>{number}</p>;
}
