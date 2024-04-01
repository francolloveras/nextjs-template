'use client'
import { useEffect, useState } from 'react'

import { createConfetti } from '@/lib/utils'

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter === 209) {
      createConfetti()
    }
  }, [counter])

  const increase = () => {
    setCounter((prev) => prev + 1)
  }

  const decrease = () => {
    setCounter((prev) => prev - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return {
    counter,
    increase,
    decrease,
    reset
  }
}
