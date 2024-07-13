'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center gap-1 p-24">
          <Image
            width={256}
            height={256}
            src={
              'https://em-content.zobj.net/source/microsoft/379/face-with-spiral-eyes_1f635-200d-1f4ab.png'
            }
            alt={'icon'}
          />
          <h1 className="mb-2 text-4xl font-black">Something went wrong</h1>
          <Button onClick={() => reset()}>Try again</Button>
        </main>
      </body>
    </html>
  );
}
