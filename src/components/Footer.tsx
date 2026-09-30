import { useEffect, useState } from 'react'
import { mailtoHref, site } from '../site'
import { FitText } from './FitText'

const laTime = () =>
  new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Los_Angeles' }).format(
    new Date(),
  )

export function Footer() {
  const [time, setTime] = useState(laTime)

  useEffect(() => {
    const id = setInterval(() => setTime(laTime()), 15_000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="bg-paper text-ink">
      <div className="label grid grid-cols-2 gap-x-4 gap-y-6 px-3 pb-6 pt-24 md:grid-cols-4 md:px-5 md:pt-40">
        <div>
          <p>Los Angeles</p>
          <p className="tabular-nums">{time}</p>
        </div>
        <div>
          <p>Work with me:</p>
          {site.emails.map((e) => (
            <a key={e} href={mailtoHref('Mix inquiry')} className="block underline underline-offset-2 hover:no-underline">
              {e}
            </a>
          ))}
        </div>
        <div>
          <a href={site.instagram.url} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:no-underline">
            Instagram
          </a>
          <p>{site.instagram.handle}</p>
        </div>
        <div className="md:text-right">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.role}</p>
        </div>
      </div>
      <FitText className="display px-1 pb-1 leading-[0.8] md:px-3">{site.name}</FitText>
    </footer>
  )
}
