import { Link } from 'react-router'
import { PageTitle } from '../components/PageTitle'
import { photos, site } from '../site'

const facts = [
  ['Based in', site.city],
  ['Mentor', 'Jaycen Joshua'],
  ['Education', 'Duke University, Electrical Engineering'],
  ['Background', 'Classically trained pianist'],
  ['Revisions', 'Unlimited'],
]

export default function Bio() {
  return (
    <div className="relative px-3 pt-[30vh] md:px-5 md:pt-[38vh]">
      <PageTitle>Bio</PageTitle>

      <div className="grid gap-10 md:grid-cols-12 md:gap-x-5">
        <img
          src={photos.portraitBw.src}
          alt={photos.portraitBw.alt}
          className="aspect-[3/4] w-full object-cover md:col-span-5"
          style={{ objectPosition: photos.portraitBw.position }}
        />

        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Under the instruction of Jaycen Joshua, I have learned what a remarkable mix sounds like. Through hours of
            listening, repetition, and creative debate I have gained an understanding of not only how to mix a record, but
            how to make a record great. If you need a mixing engineer who will pour their heart and personality into your
            project, I'm your guy.
          </p>

          <dl className="label mt-12 border-t border-ink">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[8rem_1fr] border-b border-line py-2">
                <dt className="text-grey">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-24 grid gap-10 md:mt-40 md:grid-cols-12 md:gap-x-5">
        <div className="space-y-5 text-[0.9375rem] leading-relaxed md:col-span-4 md:col-start-2 md:self-end">
          <p>
            Born and raised outside of Washington, D.C., I grew up as a classically trained pianist with a keen interest in the
            production of music. I began learning the foundations of mixing in high school, working with several local artists.
            After attending Duke University and attaining a degree in electrical engineering, I decided to switch career paths
            and moved to Los Angeles to start a position as a runner at Larrabee Studios. It was here that I began my mixing
            position with Jaycen Joshua, who has mentored me as I develop my mixing style.
          </p>
          <p>
            I have worked with internationally award-winning artists across a range of genres. I put the same effort into all
            my work and am passionate about all projects, big or small. My musical background provides me with a technical
            understanding of sound and musical theory, which I apply to my mixing.
          </p>
          <p>
            I am currently based in Los Angeles and looking to work with artists from a range of genres and backgrounds. I look
            forward to working collaboratively with you to ensure you are happy with your mix; I welcome feedback and offer
            unlimited revisions until we are both happy with the project. Working closely together is the key to making your
            record amazing!
          </p>
          <p>Please shoot me a message if you are interested or have any questions!</p>
          <Link
            to="/contact"
            className="label inline-block rounded-full border border-ink px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper"
          >
            Contact
          </Link>
        </div>
        <img
          src={photos.console.src}
          alt={photos.console.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover md:col-span-6 md:col-start-7 md:row-start-1"
          style={{ objectPosition: photos.console.position }}
        />
      </div>
    </div>
  )
}
