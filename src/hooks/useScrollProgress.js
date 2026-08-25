import { useEffect, useState } from 'react'

export function useScrollThreshold(threshold = 80) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => setPast(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return past
}
