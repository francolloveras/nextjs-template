'use client'

import { useCounter } from '@/hooks/useCounter'
import Button from '@/ui/button'
import { GitHub, NextJS } from '@/ui/icons'

export default function Header() {
  const { counter, increase } = useCounter()

  return (
    <header className="mt-28 flex grow flex-col gap-y-4">
      <h1 className="flex flex-col text-7xl font-bold">
        <span>Next.js</span>
        <span>ClaSSius</span>
        <span
          style={{ backgroundSize: '300%' }}
          className="animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
        >
          Template
        </span>
      </h1>
      <p className="text-center">
        Get started by editing{' '}
        <code className="rounded-md bg-neutral-800 px-2 py-0.5">app/page.tsx</code>
      </p>
      <div className="flex justify-center gap-x-2">
        <a
          href="https://github.com/classiuz/nextjs-template"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-1 rounded-md bg-purple-400 px-6 py-2 text-neutral-950 transition-filter hover:brightness-110"
        >
          <span>
            <GitHub />
          </span>
          <span>GitHub</span>
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-1 rounded-md bg-orange-400 px-6 py-2 text-neutral-950 transition-filter hover:brightness-110"
        >
          <span>
            <NextJS />
          </span>
          <span>Next.js</span>
        </a>
      </div>
      <div className="mx-auto">
        <Button onClick={increase} className="w-32">
          <p>Count is {counter}</p>
        </Button>
      </div>
    </header>
  )
}
