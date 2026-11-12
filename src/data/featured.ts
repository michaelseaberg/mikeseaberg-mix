// Artists featured on the home page, each linked to Mike's credit with them on Spotify:
// the album where they're a main artist, otherwise their most popular song.
const links = new Map<string, string>([
  ["Beyoncé", 'https://open.spotify.com/album/6M4VOF1ExBRii1x20Pk0GR'],
  ["BTS", 'https://open.spotify.com/album/3ukkRHDHbN8tNRPKsGZR1h'],
  ["Drake", 'https://open.spotify.com/track/2IRZnDFmlqMuOrYOLnZZyc'],
  ["SZA", 'https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG'],
  ["Daddy Yankee", 'https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb'],
  ["ROSALÍA", 'https://open.spotify.com/album/23irnvaijPHVE7682D4G3f'],
  ["H.E.R.", 'https://open.spotify.com/album/2pPGkrEYiHUmqSyg3sAGII'],
  ["Ed Sheeran", 'https://open.spotify.com/album/1ZxzpJ4MVEbxilQfEnY0n9'],
  ["Ella Mai", 'https://open.spotify.com/album/67ErXRS9s9pVG8JmFbrdJ0'],
  ["Kehlani", 'https://open.spotify.com/album/6ROLwnmW9pOioLned0DaP3'],
  ["Maluma", 'https://open.spotify.com/album/3Bj8Yd9ANO4KufZkqOmG0W'],
  ["Jung Kook", 'https://open.spotify.com/album/5pSk3c3wVwnb2arb6ohCPU'],
  ["Doja Cat", 'https://open.spotify.com/album/1MmVkhiwTH0BkNOU3nw5d3'],
  ["Nicki Minaj", 'https://open.spotify.com/album/51F2ekuk5qdwFSLFgzq1YL'],
  ["Alicia Keys", 'https://open.spotify.com/album/76vpmS3ZCGm4hN8QtbnedX'],
  ["Luis Fonsi", 'https://open.spotify.com/album/5C0YLr4OoRGFDaqdMQmkeH'],
  ["Usher", 'https://open.spotify.com/album/4HAuPn3A4uu9n7RYNk1dOz'],
  ["Becky G", 'https://open.spotify.com/album/1rNj1DvnXIH5irucrzT4zo'],
  ["Megan Thee Stallion", 'https://open.spotify.com/album/6M4VOF1ExBRii1x20Pk0GR'],
  ["Mary J. Blige", 'https://open.spotify.com/album/0vUPpxeQjTDxcvV86y6G18'],
  ["Kali Uchis", 'https://open.spotify.com/album/5h23sIlF1FvjdIdcJofXlI'],
  ["Jimin", 'https://open.spotify.com/album/781fDX4OibkZA9fj56Ycbz'],
  ["Bryson Tiller", 'https://open.spotify.com/album/60s0PMYFJhe34io9HuyUXf'],
  ["Ricky Martin", 'https://open.spotify.com/album/1eg4Jr2S7eFR2UuT7gWkVS'],
  ["Pop Smoke", 'https://open.spotify.com/album/6d1vGZsr6Uy3h9IigBpPAf'],
  ["Summer Walker", 'https://open.spotify.com/track/1iuNH5Ajdqt7O2NMon1EB5'],
  ["Christina Aguilera", 'https://open.spotify.com/album/10g6da1CbqB78EddjRvJK5'],
  ["Juice WRLD", 'https://open.spotify.com/album/40wtKuLVVlde1T88LqtZwa'],
  ["Muni Long", 'https://open.spotify.com/album/1q37MEHkdOivTuJJbwRkGS'],
  ["Rauw Alejandro", 'https://open.spotify.com/track/30t9smohiwcsWePn1V18Ce'],
  ["ZAYN", 'https://open.spotify.com/album/1DF9B2hfwX4EdgEFwGcRwh'],
  ["TINI", 'https://open.spotify.com/album/7LP6bUlMdnuqeP2etuw7wI'],
  ["Normani", 'https://open.spotify.com/album/16maAu5lqvFBSEEHyB5GzV'],
  ["Sebastian Yatra", 'https://open.spotify.com/track/6Jsfaw9b0hopNZ1SVHEXmW'],
  ["Jack Harlow", 'https://open.spotify.com/album/4K3SQSfKMXLcVnyUSFELZw'],
  ["Ciara", 'https://open.spotify.com/album/1UsR5de4sGUhjQ8cU3JypJ'],
  ["Camilo", 'https://open.spotify.com/album/0vfE72mb2weKSONtBC6SPJ'],
  ["Davido", 'https://open.spotify.com/album/3rXxtzPFyUuvhsOW32kyg9'],
  ["Myke Towers", 'https://open.spotify.com/album/5qhxJXwhtjXAmCr22FXG3Q'],
])

const pick = (names: string[]) => names.map((name) => ({ name, url: links.get(name)! }))

export const heroArtists = pick(["Beyoncé", "BTS", "Drake", "SZA", "Daddy Yankee", "ROSALÍA"])

export const artistWall = pick(["BTS", "Beyoncé", "Daddy Yankee", "Drake", "SZA", "H.E.R.", "Ed Sheeran", "Ella Mai", "ROSALÍA", "Kehlani", "Maluma", "Jung Kook", "Doja Cat", "Nicki Minaj", "Alicia Keys", "Luis Fonsi", "Usher", "Becky G", "Megan Thee Stallion", "Mary J. Blige", "Kali Uchis", "Jimin", "Bryson Tiller", "Ricky Martin", "Pop Smoke", "Summer Walker", "Christina Aguilera", "Juice WRLD", "Muni Long", "Rauw Alejandro", "ZAYN", "TINI", "Normani", "Sebastian Yatra", "Jack Harlow", "Ciara", "Camilo", "Davido", "Myke Towers"])
