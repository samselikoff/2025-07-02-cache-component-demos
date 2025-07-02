import Link from 'next/link';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="m-8">
      <p>Demo 4</p>

      <nav className="border-b mt-4 flex gap-2">
        <Link href="/demo-4-child-routes">Home</Link>
        <Link href="/demo-4-child-routes/child-1">Child 1</Link>
        <Link href="/demo-4-child-routes/child-2">Child 2</Link>
      </nav>

      <div className="mt-4">{children}</div>
    </div>
  );
}
