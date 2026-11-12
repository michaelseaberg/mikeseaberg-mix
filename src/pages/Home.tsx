import { Link } from 'react-router'
import { HeroSlider } from '../components/HeroSlider'
import { PageTitle } from '../components/PageTitle'
import { artistWall, heroArtists } from '../data/featured'
import { heroSlides } from '../site'

function ArtistLink({ artist, className }: { artist: { name: string; url: string }; className?: string }) {
  return (
    <a href={artist.url} target="_blank" rel="noreferrer" className={className} title={`Listen on Spotify`}>
      {artist.name}
    </a>
  )
}

export default function Home() {
  const left = artistWall.filter((_, i) => i % 2 === 0)
  const right = artistWall.filter((_, i) => i % 2 === 1)

  return (
    <>
      <section className="relative h-svh min-h-[560px] overflow-hidden text-white">
        <HeroSlider slides={heroSlides} />
        <PageTitle light>
          Mike
          <br />
          Seaberg
        </PageTitle>
        {/* Sits in the bottom half of the photo; the size is capped so all six names fit */}
        <ul className="display absolute right-2 top-[calc(50%+1.25rem)] z-10 text-right text-[min(max(2.5rem,7.4vw),calc(9.2svh-0.5rem),7.5rem)] md:right-4">
          {heroArtists.map((a) => (
            <li key={a.name}>
              <ArtistLink artist={a} className="transition-opacity hover:opacity-60" />
            </li>
          ))}
        </ul>
      </section>

      <section className="px-3 pt-24 md:px-5 md:pt-40">
        <div className="max-w-[40ch] md:ml-[33vw]">
          <p className="text-xl font-bold uppercase leading-[1.05] tracking-[-0.035em] md:text-3xl">
            Mixing engineer based in Los Angeles out of Canton House Studios.
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
              <li key={a.name}>
                <ArtistLink artist={a} className="hover:text-grey" />
              </li>
            ))}
          </ul>
          <ul>
            {right.map((a) => (
              <li key={a.name}>
                <ArtistLink artist={a} className="hover:text-grey" />
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
