import { useState, useEffect } from 'react'
import bg from '../media/gallerybg.jpg'

interface CloudinaryAsset {
    public_id: string
    secure_url: string
    display_name?: string
    format: string
}

function Gallery() {
    const [tab, setTab] = useState<'images' | 'videos'>('images')
    const [images, setImages] = useState<CloudinaryAsset[]>([])
    const [videos, setVideos] = useState<CloudinaryAsset[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const activeItems = tab === 'images' ? images : videos

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_API_URL}/files?folder=${tab}`)
            .then(res => res.json())
            .then(data => {
                if (tab === 'images') setImages(data)
                else setVideos(data)
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [tab])

    const navigate = (dir: 1 | -1) => {
        setSelectedIndex(i => i !== null ? (i + dir + activeItems.length) % activeItems.length : null)
    }

    useEffect(() => {
        if (selectedIndex === null) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') navigate(-1)
            if (e.key === 'ArrowRight') navigate(1)
            if (e.key === 'Escape') setSelectedIndex(null)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [selectedIndex, tab])

    const selected = selectedIndex !== null ? activeItems[selectedIndex] : null

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
                            onClick={() => { setTab(t); setSelectedIndex(null) }}
                            className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-200 ${
                                tab === t ? 'text-white' : 'text-white/25 hover:text-white/50'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-2 max-w-4xl mx-auto">
                    {loading && Array(8).fill(null).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-lg animate-pulse"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                        />
                    ))}
                    {!loading && tab === 'images' && images.map((img, i) => (
                        <div
                            key={img.public_id}
                            className="gallery-item aspect-square rounded-lg overflow-hidden cursor-pointer"
                            style={{ border: '1px solid rgba(255,255,255,0.07)', animationDelay: `${i * 0.20}s` }}
                            onClick={() => setSelectedIndex(i)}
                        >
                            <img
                                src={img.secure_url}
                                alt={img.display_name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                    {!loading && tab === 'videos' && videos.map((vid, i) => (
                        <div
                            key={vid.public_id}
                            className="gallery-item aspect-square rounded-lg overflow-hidden cursor-pointer"
                            style={{ border: '1px solid rgba(255,255,255,0.07)', animationDelay: `${i * 0.20}s` }}
                            onClick={() => { console.log('clicked', i); setSelectedIndex(i) }}
                            onMouseEnter={e => e.currentTarget.querySelector('video')?.play()}
                            onMouseLeave={e => e.currentTarget.querySelector('video')?.pause()}
                        >
                            <video
                                src={vid.secure_url}
                                className="w-full h-full object-cover"
                                style={{ pointerEvents: 'none' }}
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div className="relative flex items-center" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute -left-10 text-white/50 hover:text-white text-4xl transition-colors"
                            onClick={() => navigate(-1)}
                        >
                            ‹
                        </button>

                        {tab === 'images' ? (
                            <img
                                src={selected.secure_url}
                                alt={selected.display_name}
                                className="lightbox-image max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                            />
                        ) : (
                            <video
                                key={selected.secure_url}
                                src={selected.secure_url}
                                className="lightbox-image max-h-[90vh] max-w-[90vw] rounded-lg"
                                controls
                                autoPlay
                            />
                        )}

                        <button
                            className="absolute -right-10 text-white/50 hover:text-white text-4xl transition-colors"
                            onClick={() => navigate(1)}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
