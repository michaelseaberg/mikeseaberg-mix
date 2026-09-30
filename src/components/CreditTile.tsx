import { artUrl, shortTitle, type Credit } from '../data/credits'

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
      <div className="aspect-square overflow-hidden bg-line">
        <img
          src={artUrl(credit.art, 300)}
          srcSet={`${artUrl(credit.art, 300)} 300w, ${artUrl(credit.art, 640)} 640w`}
          sizes="(min-width: 1024px) 20vw, 45vw"
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-opacity duration-300 group-hover:opacity-85"
        />
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
