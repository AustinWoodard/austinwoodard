export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-center px-4">
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full">
        {/* Large responsive name text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 sm:mb-12 leading-tight font-[family-name:var(--font-alfa-slab-one)] text-center text-stone-50">
          Austin J. Woodard
        </h1>
        
        {/* Social links */}
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg sm:text-xl">
          <a 
            href="http://facebook.com/austinjwoodard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors underline underline-offset-4 text-stone-200"
          >
            Facebook
          </a>
          <a 
            href="https://www.linkedin.com/in/austin-woodard-b66067259/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors underline underline-offset-4 text-stone-200"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/austinjwoodard/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors underline underline-offset-4 text-stone-200"
          >
            Instagram
          </a>
          <a 
            href="https://500px.com/p/austinwoodard?view=photos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors underline underline-offset-4 text-stone-200"
          >
            500px
          </a>
          <a 
            href="https://x.com/NoxileMusic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors underline underline-offset-4 text-stone-200"
          >
            X (Twitter)
          </a>
          <a 
            href="https://soundcloud.com/noxile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors underline underline-offset-4 text-stone-200"
          >
            SoundCloud
          </a>
        </nav>
      </main>
      
      {/* Footer */}
      <footer className="pb-6 pt-12 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Austin J. Woodard. All rights reserved.</p>
      </footer>
    </div>
  );
}
