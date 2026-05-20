import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window { SC: any }
}

interface SCSound {
  title: string
  artwork_url: string | null
  duration: number
}

function fmt(ms: number) {
  const s = Math.floor(ms / 1000)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export default function SoundCloudPlayer({ src }: { src: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const widgetRef = useRef<any>(null)
  const [track, setTrack] = useState<SCSound | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('script[src="https://w.soundcloud.com/player/api.js"]')
    const script = existing ?? document.createElement('script')

    const init = () => {
      if (!iframeRef.current || !window.SC) return
      const widget = window.SC.Widget(iframeRef.current)
      widgetRef.current = widget

      widget.bind(window.SC.Widget.Events.READY, () => {
        widget.getCurrentSound((sound: SCSound) => {
          setTrack(sound)
          setReady(true)
        })
      })

      widget.bind(window.SC.Widget.Events.PLAY, () => {
        setIsPlaying(true)
        widget.getCurrentSound((sound: SCSound) => setTrack(sound))
      })

      widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false))

      widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, (e: { currentPosition: number }) => {
        setPosition(e.currentPosition)
      })
    }

    if (!existing) {
      ;(script as HTMLScriptElement).src = 'https://w.soundcloud.com/player/api.js'
      ;(script as HTMLScriptElement).onload = init
      document.head.appendChild(script)
    } else {
      init()
    }

    return () => {
      if (!existing && script.parentNode) document.head.removeChild(script)
    }
  }, [])

  const togglePlay = () => {
    if (!widgetRef.current) return
    isPlaying ? widgetRef.current.pause() : widgetRef.current.play()
  }

  const artwork = track?.artwork_url?.replace('-large', '-t300x300') ?? null
  const duration = track?.duration ?? 0
  const progress = duration ? position / duration : 0

  return (
    <div className="w-full max-w-sm">
      <iframe
        ref={iframeRef}
        src={src}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
        allow="autoplay"
      />

      <div className="rounded-2xl p-5" style={{ backdropFilter: 'blur(16px)', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {!ready ? (
          <p className="text-white/25 text-[10px] tracking-[0.4em] text-center py-8 uppercase">Loading</p>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-5">
              {artwork ? (
                <img src={artwork} alt="" className="w-14 h-14 rounded-xl object-cover shrink-0" />
              ) : (
                <div className="w-14 h-14 rounded-xl shrink-0" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate leading-snug">{track?.title ?? '—'}</p>
                <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mt-1">LOCAL</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-white/30 text-[10px] tabular-nums w-8 shrink-0">{fmt(position)}</span>
              <div
                className="flex-1 h-4 flex items-center cursor-pointer group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const ratio = (e.clientX - rect.left) / rect.width
                  const seekTo = Math.floor(ratio * duration)
                  widgetRef.current?.seekTo(seekTo)
                  setPosition(seekTo)
                }}
              >
                <div className="w-full h-px relative" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div className="h-px bg-white/50 transition-all duration-300" style={{ width: `${progress * 100}%` }} />
                </div>
              </div>
              <span className="text-white/30 text-[10px] tabular-nums w-8 shrink-0 text-right">{fmt(duration)}</span>
            </div>

            <div className="flex justify-center">
              <button
                onClick={togglePlay}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {isPlaying ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
