import { useState } from 'react'
import bg from '../media/gallerybg.jpg'

const slots = Array(16).fill(null)

function Gallery() {
    const [tab, setTab] = useState<'images' | 'videos'>('images')

    return (
        <div style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
            <img src={bg} alt="" className="gallery-bg-blur" />
            <img src={bg} alt="" className="gallery-bg" />
            <div className="fixed inset-0 bg-black/60" />

            <div className="relative z-10 pt-28 pb-12 px-8">
                <div className="flex justify-center gap-8 mb-8">
                    {(['images', 'videos'] as const).map(t => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-200 ${
                                tab === t ? 'text-white' : 'text-white/25 hover:text-white/50'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-2 max-w-4xl mx-auto">
                    {slots.map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-lg"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
