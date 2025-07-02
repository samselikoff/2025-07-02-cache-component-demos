import { fetchRandomNumber } from '@/app/lib/fetch-data';
import { unstable_cacheLife as cacheLife } from 'next/cache';
import { connection } from 'next/server';
import { ReactNode, Suspense } from 'react';

/*
  <Passthrough> causes Josh to not be part of
  the partial prerender.
*/
export default async function Page() {
  return (
    <div className="m-8">
      <p>Demo 3</p>

      <RandomNumber name="Sam" />

      <Suspense>
        <Passthrough>
          <RandomNumber name="Josh" />
        </Passthrough>
      </Suspense>
    </div>
  );
}

async function RandomNumber({ name }: { name: string }) {
  'use cache';
  cacheLife({ revalidate: 5 });

  const number = await fetchRandomNumber(name);
  console.log(name, ' ', number);

  return (
    <p>
      {name}: {number}
    </p>
  );
}

async function Passthrough({ children }: { children: ReactNode }) {
  await connection();

  return children;
}
