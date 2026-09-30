import { useEffect, useRef, useState } from 'react'
import { CreditTile } from '../components/CreditTile'
import { PageTitle } from '../components/PageTitle'
import { byRecent, credits } from '../data/credits'

type Sort = 'popular' | 'recent'

const sorts: { id: Sort; label: string }[] = [
  { id: 'popular', label: 'Most popular' },
  { id: 'recent', label: 'Most recent' },
]

const PAGE = 48

export default function Credits() {
  const [sort, setSort] = useState<Sort>('popular')
  const [count, setCount] = useState(PAGE)
  const sentinel = useRef<HTMLDivElement>(null)
  const list = sort === 'popular' ? credits : byRecent
  const shown = list.slice(0, count)

  // Load the next batch as the end of the grid comes into view
  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setCount((c) => c + PAGE), { rootMargin: '1200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="px-3 pt-[34vh] md:px-5 md:pt-[38vh]">
      <PageTitle fixed>Credits</PageTitle>

      <div className="label relative z-50 mb-12 grid gap-4 md:grid-cols-4">
        <p className="max-w-[26ch] md:col-start-2">
          5,000+ credits. Click on any cover to listen on Spotify.
        </p>
        <div className="flex gap-4 md:col-start-4 md:justify-end" role="group" aria-label="Sort credits">
          {sorts.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={sort === s.id}
              onClick={() => {
                setSort(s.id)
                setCount(PAGE)
              }}
              className={`label cursor-pointer border-b-2 pb-0.5 ${sort === s.id ? 'border-ink' : 'border-transparent text-grey hover:text-ink'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alternate columns sit lower on large screens for an editorial rhythm */}
      <ul className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-[6vw] lg:gap-y-20 lg:pb-24 lg:[&>li:nth-child(4n+2)]:translate-y-24 lg:[&>li:nth-child(4n+4)]:translate-y-24">
        {shown.map((c, i) => (
          <li key={c.spotify}>
            <CreditTile credit={c} index={i} />
          </li>
        ))}
      </ul>

      <div ref={sentinel} />
      {count < list.length && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + PAGE)}
            className="label cursor-pointer rounded-full border border-ink px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  )
}
