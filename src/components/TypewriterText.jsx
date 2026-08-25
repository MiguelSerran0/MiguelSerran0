import { useEffect, useState } from 'react'

export default function TypewriterText({ words, typingSpeed = 65, deletingSpeed = 35, pause = 1700 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced) return

    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause, reduced])

  return (
    <span className="inline-flex items-center">
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden="true">
        {reduced ? words[0] : words[index].substring(0, subIndex)}
        {!reduced && <span className="typewriter-cursor" />}
      </span>
    </span>
  )
}
