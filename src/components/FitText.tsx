import { useLayoutEffect, useRef, type ReactNode } from 'react'

// Scales a single line of text so it spans its container's full width.
export function FitText({ children, className = '' }: { children: ReactNode; className?: string }) {
  const box = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const fit = () => {
      if (!box.current || !text.current) return
      text.current.style.fontSize = '100px'
      const cs = getComputedStyle(box.current)
      const width = box.current.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
      const ratio = width / text.current.scrollWidth
      text.current.style.fontSize = `${100 * ratio}px`
    }
    fit()
    document.fonts?.ready.then(fit)
    const ro = new ResizeObserver(fit)
    if (box.current) ro.observe(box.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={box} className={`overflow-hidden ${className}`}>
      <span ref={text} className="inline-block whitespace-nowrap">
        {children}
      </span>
    </div>
  )
}
