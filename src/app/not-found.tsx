import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-1 p-24">
      <Image
        width={256}
        height={256}
        src={
          'https://em-content.zobj.net/source/microsoft/379/face-screaming-in-fear_1f631.png'
        }
        alt={'icon'}
      />
      <h1 className="text-4xl font-black">404</h1>
      <span className="">
        Could not find find what you&apos;re looking for here
      </span>
      <br />
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </main>
  );
}
