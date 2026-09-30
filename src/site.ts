import photo1 from './assets/photos/1.jpg'
import photo2 from './assets/photos/2.jpg'
import photo3 from './assets/photos/3.jpg'
import photo4 from './assets/photos/4.jpg'
import photo5 from './assets/photos/5.jpg'
import photo6 from './assets/photos/6.jpg'

export const site = {
  name: 'Mike Seaberg',
  role: 'Mixing Engineer',
  city: 'Los Angeles',
  emails: ['mgmt@mikeseabergmix.com'],
  instagram: { handle: '@mikeseaberg', url: 'https://www.instagram.com/mikeseaberg/' },
  tidalCredits: 'https://tidal.com/credits/13623605',
  // TIDAL listed 5,291 track credits in Sept 2026; shown rounded as "5,000+"
  tidalCreditCount: 5000,
}

export type Photo = { src: string; alt: string; position: string }

// `position` keeps the subject in frame when the photo is cropped to fill the screen.
export const photos = {
  console: { src: photo1, alt: 'Mike Seaberg at the console, lit by blue keyboard light', position: '65% 40%' },
  profile: { src: photo2, alt: 'Mike Seaberg working at a mixing desk', position: '62% 40%' },
  portraitBw: { src: photo3, alt: 'Black-and-white portrait of Mike Seaberg in the studio', position: '50% 50%' },
  portraitColor: { src: photo4, alt: 'Mike Seaberg at the keyboard in a dim studio', position: '55% 55%' },
  session: { src: photo5, alt: 'Mike Seaberg in session with an artist behind the patch bay', position: '60% 40%' },
  focus: { src: photo6, alt: 'Mike Seaberg listening back behind red patch cables', position: '68% 35%' },
} satisfies Record<string, Photo>

export const heroSlides: Photo[] = [photos.console, photos.focus, photos.portraitColor, photos.session, photos.profile]

export function mailtoHref(subject: string, body = '') {
  const params = new URLSearchParams(body ? { subject, body } : { subject }).toString().replace(/\+/g, '%20')
  return `mailto:${site.emails.join(',')}?${params}`
}
