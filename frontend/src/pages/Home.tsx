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

                <div className="flex items-center gap-4">
                    <a href="https://open.spotify.com/artist/2erbmRKEWWZ0cQEUDn4GZD?si=DxRMz4ksQx6U3NmtEUUIKw" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 hover:scale-110 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.313a.75.75 0 0 1-1.032.244c-2.822-1.724-6.376-2.114-10.566-1.158a.75.75 0 0 1-.334-1.463c4.583-1.047 8.514-.596 11.688 1.345a.75.75 0 0 1 .244 1.032zm1.47-3.27a.937.937 0 0 1-1.288.308c-3.228-1.984-8.148-2.56-11.97-1.402a.937.937 0 1 1-.543-1.794c4.363-1.323 9.788-.682 13.493 1.6a.937.937 0 0 1 .308 1.288zm.127-3.408C15.37 8.453 9.388 8.25 5.914 9.322a1.125 1.125 0 1 1-.652-2.154c4.004-1.212 10.665-.978 14.876 1.594a1.125 1.125 0 0 1-1.025 2.003z"/>
                        </svg>
                    </a>
                    <a href="https://soundcloud.com/prodloca1" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 hover:scale-110 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1.175 12.225c-.074 0-.135.06-.149.133l-.254 2.307.254 2.279c.014.073.075.133.149.133.073 0 .134-.06.149-.133l.287-2.279-.287-2.307c-.015-.073-.076-.133-.149-.133zm1.565-.3c-.09 0-.163.073-.176.163l-.22 2.47.22 2.44c.013.09.086.163.176.163.09 0 .164-.073.177-.163l.25-2.44-.25-2.47c-.013-.09-.087-.163-.177-.163zm1.567-.15c-.104 0-.19.085-.202.19l-.188 2.62.188 2.588c.012.105.098.19.202.19.105 0 .19-.085.203-.19l.214-2.588-.214-2.62c-.013-.105-.098-.19-.203-.19zm1.568-.15c-.12 0-.218.097-.228.218l-.157 2.77.157 2.736c.01.12.108.218.228.218.12 0 .218-.097.229-.218l.179-2.736-.179-2.77c-.011-.12-.109-.218-.229-.218zm1.567.3c-.134 0-.244.11-.252.244l-.126 2.47.126 2.44c.008.133.118.244.252.244.135 0 .244-.11.253-.244l.143-2.44-.143-2.47c-.009-.133-.118-.244-.253-.244zm1.568-.15c-.15 0-.272.122-.278.272l-.094 2.62.094 2.588c.006.15.128.272.278.272.15 0 .272-.122.279-.272l.107-2.588-.107-2.62c-.007-.15-.129-.272-.279-.272zm5.951-5.1a3.64 3.64 0 0 0-1.302.24A5.626 5.626 0 0 0 8.557 9.65c-.057.12-.09.25-.096.383l-.063 7.576.063.09c.008.148.128.265.277.265h7.318c.627 0 1.136-.509 1.136-1.136V12.3a5.625 5.625 0 0 0-5.625-5.625z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/prodloca1/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 hover:scale-110 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
                    <SoundCloudPlayer src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/151-fussy&auto_play=false&hide_related=true&show_comments=false" />
                    <SoundCloudPlayer src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/why-did-i-delete-this&auto_play=false&hide_related=true&show_comments=false" />
                    <SoundCloudPlayer src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/birdsong&auto_play=false&hide_related=true&show_comments=false" />
                    <SoundCloudPlayer src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/140str8todvd-mp3&auto_play=false&hide_related=true&show_comments=false" />
                </div>
            </div>
        </div>
    )
}

export default Home
