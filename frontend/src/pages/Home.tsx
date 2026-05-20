import bg from '../media/homebg.jpeg'
import SoundCloudPlayer from '../components/SoundCloudPlayer'

function Home() {
    return (
        <div style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
            <img src={bg} alt="" className="home-bg-blur" />
            <img src={bg} alt="" className="home-bg" />
            <div className="fixed inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col items-center gap-6 pt-48 pb-24 px-6">
                <a
                    href="https://soundcloud.com/prodloca1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-white/70 hover:text-white text-lg transition-colors duration-200"
                >
                    LOCAL
                </a>
                <p className="w-full text-center text-white/50 text-xs tracking-[0.35em] uppercase">
                    Music Producer & Mix Engineer | Ambient, Trap, Jungle + more
                </p>
                <SoundCloudPlayer src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/151-fussy&auto_play=false&hide_related=true&show_comments=false" />
                <SoundCloudPlayer src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/why-did-i-delete-this&auto_play=false&hide_related=true&show_comments=false" />
            </div>
        </div>
    )
}

export default Home
