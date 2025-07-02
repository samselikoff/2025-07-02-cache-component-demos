import Link from 'next/link';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="m-8">
      <p>Demo 4</p>

      <nav className="mt-4 flex gap-4">
        <Link className="border-b" href="/demo-4-child-routes">
          Home
        </Link>
        <Link className="border-b" href="/demo-4-child-routes/child-1">
          Child 1 (Fresh)
        </Link>
        <Link className="border-b" href="/demo-4-child-routes/child-2">
          Child 2 (Fast + Server)
        </Link>
        <Link className="border-b" href="/demo-4-child-routes/child-3">
          Child 3 (Fast + Client)
        </Link>
      </nav>

      <div className="mt-4">{children}</div>
    </div>
  );
}
