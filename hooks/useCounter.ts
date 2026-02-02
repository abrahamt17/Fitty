import { useEffect, useRef } from 'react'

interface UseCounterOptions {
  target: number
  duration?: number
  startOnView?: boolean
}

export const useCounter = (options: UseCounterOptions) => {
  const { target, duration = 2000, startOnView = true } = options
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!counterRef.current || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            let start = 0
            const increment = target / (duration / 16)
            const timer = setInterval(() => {
              start += increment
              if (counterRef.current) {
                if (start >= target) {
                  counterRef.current.textContent =
                    target >= 1000 ? `${(target / 1000).toFixed(1)}k+` : `${target}+`
                  clearInterval(timer)
                } else {
                  counterRef.current.textContent = Math.floor(start).toString()
                }
              }
            }, 16)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (startOnView) {
      observer.observe(counterRef.current)
    } else {
      // Start immediately
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (counterRef.current) {
          if (start >= target) {
            counterRef.current.textContent =
              target >= 1000 ? `${(target / 1000).toFixed(1)}k+` : `${target}+`
            clearInterval(timer)
          } else {
            counterRef.current.textContent = Math.floor(start).toString()
          }
        }
      }, 16)
    }

    return () => {
      observer.disconnect()
    }
  }, [target, duration, startOnView])

  return counterRef
}

