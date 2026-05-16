import bg from '../media/homebg.jpeg'
function Home() {
    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <img src={bg} alt="" className="home-bg-blur" />
            <img src={bg} alt="" className="home-bg" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 z-10">
                <a
                    href="https://soundcloud.com/prodloca1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-white/70 hover:text-white text-lg font-large mb-3 transition-colors duration-200"
                >
                    LOCAL
                </a>
                <div style={{ borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.4)' }}>
                    <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/prodloca1/151-fussy&color=%23ffffff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home