import { Link } from 'react-router'
import { HeroSlider } from '../components/HeroSlider'
import { MidLine } from '../components/Nav'
import { PageTitle } from '../components/PageTitle'
import { allArtists, topCreditFor } from '../data/credits'
import { heroSlides } from '../site'

const heroArtists = ['Beyoncé', 'SZA', 'H.E.R.', 'Drake', 'Ella Mai', 'Kehlani']

function SpotifyLink({ artist, className }: { artist: string; className?: string }) {
  const credit = topCreditFor(artist)
  if (!credit) return <span className={className}>{artist}</span>
  return (
    <a href={credit.spotify} target="_blank" rel="noreferrer" className={className} title={`${credit.title} — listen on Spotify`}>
      {artist}
    </a>
  )
}

export default function Home() {
  const wall = allArtists.slice(0, 40)
  const left = wall.filter((_, i) => i % 2 === 0)
  const right = wall.filter((_, i) => i % 2 === 1)

  return (
    <>
      <section className="relative h-svh min-h-[560px] overflow-hidden text-white">
        <HeroSlider slides={heroSlides} />
        <MidLine />
        <PageTitle light>
          Mike
          <br />
          Seaberg
        </PageTitle>
        {/* Starts just below the midline; the size is capped so all six names fit in the bottom half */}
        <ul className="display absolute right-2 top-[calc(50%+1.25rem)] z-10 text-right text-[min(max(2.5rem,7.4vw),calc(9.2svh-0.5rem),7.5rem)] md:right-4">

          {heroArtists.map((a) => (
            <li key={a}>
              <SpotifyLink artist={a} className="transition-opacity hover:opacity-60" />
            </li>
          ))}
        </ul>
      </section>

      <section className="px-3 pt-24 md:px-5 md:pt-40">
        <div className="max-w-[40ch] md:ml-[33vw]">
          <p className="text-xl font-bold uppercase leading-[1.05] tracking-[-0.035em] md:text-3xl">
            Mixing engineer based in Los Angeles.
          </p>
          <Link
            to="/bio"
            className="label mt-5 inline-block rounded-full border border-ink px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper"
          >
            Bio
          </Link>
        </div>
      </section>

      <section className="px-2 pt-24 md:px-4 md:pt-40" aria-label="Artists">
        <div className="grid grid-cols-2 gap-x-2 text-[clamp(1.125rem,2.6vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.04em] md:gap-x-3">
          <ul className="text-right">
            {left.map((a) => (
              <li key={a}>
                <SpotifyLink artist={a} className="hover:text-grey" />
              </li>
            ))}
          </ul>
          <ul>
            {right.map((a) => (
              <li key={a}>
                <SpotifyLink artist={a} className="hover:text-grey" />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/credits"
            className="label rounded-full border border-ink px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper"
          >
            All credits
          </Link>
        </div>
      </section>
    </>
  )
}
