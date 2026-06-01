import { useState, useEffect } from 'react'
import bg from '../media/gallerybg.jpg'

interface CloudinaryImage {
    public_id: string
    secure_url: string
    display_name: string
}

function Gallery() {
    const [tab, setTab] = useState<'images' | 'videos'>('images')
    const [images, setImages] = useState<CloudinaryImage[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/files`)
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

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
                    {tab === 'images' && loading && Array(8).fill(null).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-lg animate-pulse"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                        />
                    ))}
                    {tab === 'images' && !loading && images.map(img => (
                        <div
                            key={img.public_id}
                            className="aspect-square rounded-lg overflow-hidden"
                            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            <img
                                src={img.secure_url}
                                alt={img.display_name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
