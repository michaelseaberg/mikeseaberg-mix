import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Pinned to the viewport. Uses difference blending so it stays legible over the images scrolling beneath it. */
  fixed?: boolean
  /** White text, for titles sitting on a photo */
  light?: boolean
}

export function PageTitle({ children, fixed = false, light = false }: Props) {
  const tone = fixed ? 'text-white mix-blend-difference' : light ? 'text-white' : 'text-ink'
  return (
    <h1
      className={`display pointer-events-none left-0 top-0 z-40 px-2 pt-11 text-[clamp(3.75rem,14vw,13rem)] md:px-4 md:pt-2 ${
        fixed ? 'fixed' : 'absolute'
      } ${tone}`}
    >
      {children}
    </h1>
  )
}
