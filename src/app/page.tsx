export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-center px-4">
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full">
        {/* Large responsive name text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 sm:mb-12 leading-tight font-[family-name:var(--font-alfa-slab-one)] text-center text-stone-50">
          Austin J. Woodard
        </h1>

        {/* Things I've Worked On section */}
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl mb-8 font-semibold text-stone-200 text-center">
            Websites I&apos;ve Worked On
          </h2>
          <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-stone-700/50 shadow-xl">
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a 
                href="https://fibercx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px]"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  FiberCX
                </span>
              </a>
              <a 
                href="https://memeSRC.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px]"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  memeSRC
                </span>
              </a>
              <a 
                href="https://www.servicestationre.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px]"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  Service StationRE
                </span>
              </a>
              <a 
                href="https://fibergamingnetwork.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px]"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  Fiber Gaming Network
                </span>
              </a>
              <a 
                href="https://local-focal.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px] sm:col-span-2 lg:col-span-1"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  Local Focal
                </span>
              </a>
              <a 
                href="http://wlmawcrsradio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px] sm:col-span-2 lg:col-span-1"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  WCRS Radio
                </span>
              </a>
            </nav>
          </div>
        </section>
        
        {/* Socials section */}
        <section className="mt-16 w-full">
          <h2 className="text-2xl sm:text-3xl mb-8 font-semibold text-stone-200 text-center">
            Socials
          </h2>
          <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-stone-700/50 shadow-xl">
            <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <a 
                href="http://facebook.com/austinjwoodard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  Facebook
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/austin-woodard-b66067259/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://www.instagram.com/austinjwoodard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  Instagram
                </span>
              </a>
              <a 
                href="https://500px.com/p/austinwoodard?view=photos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  500px
                </span>
              </a>
              <a 
                href="https://x.com/NoxileMusic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  X (Twitter)
                </span>
              </a>
              <a 
                href="https://soundcloud.com/noxile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50"
              >
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  SoundCloud
                </span>
              </a>
            </nav>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="pb-6 pt-12 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️</p>
      </footer>
    </div>
  );
}
