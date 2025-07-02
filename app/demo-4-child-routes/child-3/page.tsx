import Spinner from '@/app/_components/Spinner';
import { fetchCurrentTime } from '@/app/lib/fetch-data';
import { unstable_cacheLife as cacheLife } from 'next/cache';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div>
      <p>Child 3 page</p>

      <Suspense fallback={<Spinner />}>
        <Inner />
      </Suspense>
    </div>
  );
}

async function Inner() {
  const cookieStore = await cookies();

  return <RandomNumber foo={cookieStore.get('foo')?.value} />;
}

async function RandomNumber({ foo }: { foo?: string }) {
  'use cache';
  cacheLife({ revalidate: 10 });

  const number = await fetchCurrentTime(foo);
  console.log(number);

  return <p>{number}</p>;
}
