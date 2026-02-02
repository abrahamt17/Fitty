export const smoothScroll = (targetId: string, offset: number = 0): void => {
  const target = document.querySelector(targetId)
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }
}

export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2000
): void => {
  let start = 0
  const increment = target / (duration / 16)
  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target >= 1000 ? `${(target / 1000).toFixed(1)}k+` : `${target}+`
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start).toString()
    }
  }, 16)
}

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

