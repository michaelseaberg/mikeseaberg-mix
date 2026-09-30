import { useState, type FormEvent } from 'react'
import { PageTitle } from '../components/PageTitle'
import { mailtoHref, site } from '../site'

const field =
  'w-full border-0 border-b border-ink bg-transparent px-0 py-2 text-base font-medium tracking-[-0.01em] placeholder:text-grey focus:border-b-2 focus:outline-none'

const fields = [
  { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'project', label: 'Artist / project' },
  { name: 'songs', label: 'Number of songs' },
  { name: 'timeline', label: 'Timeline' },
  { name: 'links', label: 'Demo / reference links' },
]

export default function Contact() {
  const [opened, setOpened] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const body = [...fields.map((f) => `${f.label}: ${get(f.name)}`), '', get('message')].join('\n')
    window.location.href = mailtoHref(`Mix inquiry — ${get('project') || get('name')}`, body)
    setOpened(true)
  }

  return (
    <div className="relative px-3 pt-[30vh] md:px-5 md:pt-[38vh]">
      <PageTitle>Contact</PageTitle>

      <div className="grid gap-12 md:grid-cols-12 md:gap-x-5">
        <p className="text-lg font-bold uppercase leading-[1.05] tracking-[-0.03em] md:col-span-3 md:text-xl">
          For rates, availability and project details. Every mix includes unlimited revisions.
        </p>

        <div className="md:col-span-8 md:col-start-5">
          <p className="label text-grey">Work with me:</p>
          {site.emails.map((e) => (
            <a
              key={e}
              href={mailtoHref('Mix inquiry')}
              className="block break-all text-[clamp(1.75rem,4.4vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.05em] hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {e}
            </a>
          ))}
          <p className="label mt-10 text-grey">Instagram:</p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="block text-[clamp(1.75rem,4.4vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.05em] hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            {site.instagram.handle}
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-28 grid gap-x-5 gap-y-8 md:mt-40 md:grid-cols-12">
        <p className="label md:col-span-3">Or send the details</p>
        <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 md:col-span-8 md:col-start-5">
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span className="label text-grey">{f.label}</span>
              <input name={f.name} type={f.type ?? 'text'} required={f.required} autoComplete={f.autoComplete} className={field} />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="label text-grey">Message</span>
            <textarea name="message" rows={4} className={`${field} resize-y`} />
          </label>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button
              type="submit"
              className="label cursor-pointer rounded-full border border-ink px-4 py-2 transition-colors hover:bg-ink hover:text-paper"
            >
              Send inquiry
            </button>
            <span className="label text-grey" aria-live="polite">
              {opened ? 'Your email app should now be open.' : 'Opens your email app, ready to send.'}
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
