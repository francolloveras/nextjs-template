'use client'

import Button from '@/ui/button'

import { useCounter } from '@/hooks/useCounter'

export default function Header() {
  const { counter, increase, decrease, reset } = useCounter()

  return (
    <header className="mt-28 flex grow flex-col gap-y-12">
      <div>
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

        <p className="mt-4 text-center">
          Get started by editing{' '}
          <code className="rounded-md bg-neutral-800 px-2 py-0.5">app/page.tsx</code>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <div className="min-w-[144px] rounded-md border border-neutral-600 bg-neutral-800 px-4 py-1 text-center">
          <p className="text-lg">Count is {counter}</p>
        </div>
        <div className="flex gap-x-2 text-sm">
          <Button onClick={decrease}>
            <span>-</span>
          </Button>
          <Button onClick={reset}>
            <span>Restart</span>
          </Button>
          <Button onClick={increase}>
            <span>+</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
