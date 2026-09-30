import raw from './credits.json'

// One row per project (album, EP or single), ordered by TIDAL popularity (most popular first):
// [projectTitle, artists, releaseDate, roleIndex, spotifyPath ("album/<id>", or "track/<id>" when no album was found), albumArtHash]
type Row = [string, string[], string, number, string, string]

export const ROLES = [
  'Mix & Master',
  'Mix Engineer',
  'Mastering Engineer',
  'Assistant Mix Engineer',
  'Assistant Engineer',
  'Second Engineer',
  'Engineer',
  'Additional Production',
]

export type Credit = {
  title: string
  artists: string[]
  /** YYYY-MM-DD */
  date: string
  role: string
  spotify: string
  art: string
}

export const credits: Credit[] = (raw as Row[]).map(([title, artists, date, role, id, art]) => ({
  title,
  artists,
  date,
  role: ROLES[role],
  spotify: `https://open.spotify.com/${id}`,
  art,
}))

export const byRecent = [...credits].sort((a, b) => b.date.localeCompare(a.date))

// Most covers are a 24-character album-art hash; a few Spotify images use a full image id instead.
export const artUrl = (hash: string, size: 300 | 640 = 300) =>
  hash.length === 24
    ? `https://i.scdn.co/image/ab67616d${size === 640 ? '0000b273' : '00001e02'}${hash}`
    : `https://i.scdn.co/image/${hash}`

/** Title without "(feat. …)" — the artists are listed separately. */
export const shortTitle = (title: string) => title.replace(/\s*[([](feat\.|with)[^)\]]*[)\]]/gi, '').trim()

/** Every credited artist, most popular first. */
export const allArtists = [...new Set(credits.flatMap((c) => c.artists))].filter((a) => a !== 'Quality Control')

/** The most popular project featuring an artist. */
export const topCreditFor = (artist: string) => credits.find((c) => c.artists.includes(artist))
