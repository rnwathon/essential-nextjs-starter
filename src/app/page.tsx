import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-1 p-24">
      <Image
        width={256}
        height={256}
        src={'https://em-content.zobj.net/source/microsoft/379/eyes_1f440.png'}
        alt={'icon'}
      />
      <h1 className="text-4xl font-black">Essential NextJS Starter</h1>
      <span className="">
        Minimal Nextjs setup with Typescript, Tailwind, ShadcnUI, and the others
      </span>
    </main>
  );
}
