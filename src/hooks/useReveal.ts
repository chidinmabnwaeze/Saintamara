import { useEffect } from 'react'

/**
 * Reveals any `.reveal` element as it scrolls into view. Pass a value that
 * changes on navigation (the pathname) so it re-scans the new page's content.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [key])
}
