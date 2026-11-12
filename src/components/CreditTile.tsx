import { artUrl, shortTitle, type Credit } from '../data/credits'

function SpotifyLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.82 15.15a.65.65 0 0 1-.9.22c-2.46-1.5-5.56-1.84-9.2-1.01a.65.65 0 1 1-.3-1.27c3.99-.91 7.4-.52 10.18 1.17.3.19.4.59.22.89Zm1.28-2.86a.82.82 0 0 1-1.12.27c-2.82-1.73-7.11-2.23-10.44-1.22a.82.82 0 1 1-.47-1.57c3.8-1.15 8.54-.6 11.77 1.39.39.23.51.74.26 1.13Zm.11-2.98C14.83 8.8 9.27 8.62 6.05 9.6a.98.98 0 1 1-.57-1.88c3.7-1.12 9.84-.9 13.73 1.4a.98.98 0 0 1-1 1.69Z" />
    </svg>
  )
}

export function CreditTile({ credit, index }: { credit: Credit; index: number }) {
  const artists = credit.artists.join(', ')
  return (
    <a
      href={credit.spotify}
      target="_blank"
      rel="noreferrer"
      className="group block"
      aria-label={`Listen to ${credit.title} by ${artists} on Spotify`}
    >
      {/* The outer box holds the layout; only the inner cover scales, so nothing around it moves */}
      <div className="aspect-square">
        <div className="relative size-full overflow-hidden bg-line transition-transform duration-300 ease-out group-hover:scale-[0.95] group-active:scale-[0.92] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <img
            src={artUrl(credit.art, 300)}
            srcSet={`${artUrl(credit.art, 300)} 300w, ${artUrl(credit.art, 640)} 640w`}
            sizes="(min-width: 1024px) 20vw, 45vw"
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30">
            <SpotifyLogo className="size-9 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-85 md:size-10" />
          </div>
        </div>
      </div>
      <div className="label mt-2 grid grid-cols-[2.5rem_1fr] gap-x-1">
        <span>{String(index + 1).padStart(3, '0')}</span>
        <span className="min-w-0">
          <span className="block truncate group-hover:underline">{shortTitle(credit.title)}</span>
          <span className="block truncate text-grey">{artists}</span>
          <span className="mt-1 block text-grey">
            {credit.role} · {credit.date.slice(0, 4)}
          </span>
        </span>
      </div>
    </a>
  )
}
