'use client'

import { createConfetti } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="text-neutral-300">
      <span>Created by </span>
      <a
        href="http://github.com/classiuz"
        className="font-medium hover:text-purple-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        ClaSSius
      </a>
      <span> with</span>
      <button onClick={createConfetti}>❤️</button>
      <span>.</span>
    </footer>
  )
}
