'use client';

import { useEffect, useState } from 'react';

// Website data that stays consistent across all designs
const websiteData = {
  name: "Austin J. Woodard",
  websites: [
    { name: "A-Z Productions", url: "https://azlightsandsound.com" },
    { name: "memeSRC", url: "https://memeSRC.com" },
    { name: "Fiber Gaming Network", url: "https://fibergamingnetwork.com" },
    { name: "Aden Webb", url: "https://adenwebb.com" },
    { name: "Local Focal", url: "https://local-focal.com" },
    { name: "WCRS Radio", url: "http://wlmawcrsradio.com" }
  ],
  socials: [
    { name: "Facebook", url: "http://facebook.com/austinjwoodard" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/austin-woodard-b66067259/" },
    { name: "Instagram", url: "https://www.instagram.com/austinjwoodard/" },
    { name: "500px", url: "https://500px.com/p/austinwoodard?view=photos" },
    { name: "X (Twitter)", url: "https://x.com/NoxileMusic" },
    { name: "SoundCloud", url: "https://soundcloud.com/noxile" }
  ]
};

// Design 1: Modern Minimalist (Clean and spacious)
const ModernMinimalist = () => (
  <div className="min-h-screen bg-white text-gray-900 font-[family-name:var(--font-inter)]">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-24">
        <h1 className="text-7xl md:text-9xl font-[family-name:var(--font-poppins)] font-light tracking-tight mb-4">
          {websiteData.name.split(' ').map((word, i) => (
            <div key={i} className={i === 1 ? "text-blue-600" : ""}>{word}</div>
          ))}
        </h1>
        <div className="w-24 h-px bg-gray-300 mx-auto"></div>
      </header>

             <section className="mb-20">
         <h2 className="text-3xl font-light mb-12 text-center tracking-wide">Websites I&apos;ve Worked On</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteData.websites.map((site, i) => (
            <a key={i} href={site.url} target="_blank" rel="noopener noreferrer" 
               className="group p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">{site.name}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-light mb-12 text-center tracking-wide">Connect</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {websiteData.socials.map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm tracking-wide">
              {social.name}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️</p>
      </footer>
    </div>
  </div>
);

// Design 2: Elegant Luxury (Dark with gold accents)
const ElegantLuxury = () => (
  <div className="min-h-screen bg-gray-900 text-white font-[family-name:var(--font-playfair)]">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-transparent"></div>
      <div className="relative max-w-5xl mx-auto px-8 py-20">
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {websiteData.name}
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
        </header>

        <section className="mb-28">
          <h2 className="text-2xl font-[family-name:var(--font-cinzel)] text-center mb-16 text-yellow-400">Projects I&apos;ve Worked On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websiteData.websites.map((site, i) => (
              <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
                 className="group relative p-8 bg-gray-800/50 border border-yellow-600/30 hover:border-yellow-400/60 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/70">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors pl-4">{site.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-[family-name:var(--font-cinzel)] text-center mb-16 text-yellow-400">Connect</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {websiteData.socials.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                 className="p-4 text-center border border-yellow-600/30 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300">
                {social.name}
              </a>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-400 text-sm font-[family-name:var(--font-inter)]">
          <p>&copy; {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️</p>
        </footer>
      </div>
    </div>
  </div>
);

// Design 3: Futuristic Tech (Neon/cyber aesthetic)
const FuturisticTech = () => (
  <div className="min-h-screen bg-black text-green-400 font-[family-name:var(--font-orbitron)] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
    <div className="relative max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-audiowide)] font-bold mb-6 text-green-400 animate-pulse">
          &gt; {websiteData.name.toUpperCase()} &lt;
        </h1>
        <div className="text-green-500 font-[family-name:var(--font-fira-code)] text-sm">
          [ WEB_DEVELOPER_PORTFOLIO.js ]
        </div>
      </header>

      <section className="mb-20">
        <h2 className="text-2xl mb-12 text-green-300 font-[family-name:var(--font-fira-code)]">
          cd ~/projects &amp;&amp; ls -la
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {websiteData.websites.map((site, i) => (
            <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
               className="group p-6 bg-gray-900/50 border border-green-500/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 font-[family-name:var(--font-fira-code)]">
              <div className="text-green-500 text-xs mb-2">drwxr-xr-x 1 austin wheel</div>
              <div className="text-green-400 group-hover:text-green-300 transition-colors">{site.name.toLowerCase().replace(/\s+/g, '_')}/</div>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl mb-12 text-green-300 font-[family-name:var(--font-fira-code)]">
          cd ~/social &amp;&amp; connect --all
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {websiteData.socials.map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-green-900/20 border border-green-500/50 hover:bg-green-500/20 hover:border-green-400 transition-all duration-200 text-center text-xs font-[family-name:var(--font-fira-code)]">
              {social.name.toLowerCase()}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center text-green-600 text-xs font-[family-name:var(--font-fira-code)]">
        <p># &copy; {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️</p>
      </footer>
    </div>
  </div>
);

// Design 4: Retro Vintage (80s/90s vibe)
const RetroVintage = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-800 text-white font-[family-name:var(--font-righteous)]">
    <div className="relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzk5OTk5OSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-20"></div>
      <div className="relative max-w-5xl mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl md:text-8xl font-[family-name:var(--font-permanent-marker)] mb-8 transform -rotate-2">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              {websiteData.name}
            </span>
          </div>
          <div className="text-xl text-yellow-300 font-[family-name:var(--font-caveat)] transform rotate-1">
            ✨ Totally Rad Web Developer ✨
          </div>
        </header>

        <section className="mb-20">
                     <h2 className="text-3xl mb-12 text-center text-pink-300 font-[family-name:var(--font-bebas-neue)] tracking-wider">
             🎮 WEBSITES I&apos;VE ROCKED 🎮
           </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteData.websites.map((site, i) => (
              <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
                 className="group p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-yellow-400/60 hover:border-cyan-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30">
                <h3 className="text-lg font-bold text-yellow-300 group-hover:text-cyan-300 transition-colors text-center">
                  {site.name}
                </h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-12 text-center text-cyan-300 font-[family-name:var(--font-bebas-neue)] tracking-wider">
            📱 GET CONNECTED 📱
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {websiteData.socials.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-orange-500 border-2 border-yellow-400 transform hover:-rotate-1 transition-all duration-300 text-white font-bold shadow-lg">
                {social.name}
              </a>
            ))}
          </div>
        </section>

        <footer className="text-center text-yellow-200 text-sm font-[family-name:var(--font-caveat)]">
          <p>© {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️</p>
        </footer>
      </div>
    </div>
  </div>
);

// Design 5: Creative Artistic (Hand-drawn/sketchy feel)
const CreativeArtistic = () => (
  <div className="min-h-screen bg-amber-50 text-gray-800 font-[family-name:var(--font-caveat)] relative">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwIDEwQzM1IDEwIDQwIDEyIDQwIDIwQzQwIDI1IDM4IDMwIDMwIDMwQzIyIDMwIDIwIDI1IDIwIDIwQzIwIDEyIDI1IDEwIDMwIDEwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPgo=')] opacity-30"></div>
    <div className="relative max-w-5xl mx-auto px-8 py-16">
      <header className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-blue-800 transform -rotate-1">
          {websiteData.name}
        </h1>
        <div className="w-32 h-1 bg-red-400 mx-auto transform rotate-1 rounded-full"></div>
        <p className="text-2xl mt-6 text-green-700 transform rotate-0.5">
          ~ Creative Web Developer & Digital Artist ~
        </p>
      </header>

      <section className="mb-24">
        <h2 className="text-4xl mb-16 text-center text-purple-700 font-bold transform -rotate-1">
          🎨 My Digital Canvas 🎨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {websiteData.websites.map((site, i) => (
            <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
               className="group relative p-8 bg-white border-4 border-dashed border-blue-400 hover:border-red-400 transform hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full border-2 border-orange-500 transform rotate-12"></div>
              <h3 className="text-2xl font-bold text-center group-hover:text-red-600 transition-colors">
                {site.name}
              </h3>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-green-400 transform rotate-45"></div>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl mb-16 text-center text-orange-700 font-bold transform rotate-0.5">
          💫 Let&apos;s Connect! 💫
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {websiteData.socials.map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
               className={`p-4 text-center border-3 transform transition-all duration-300 hover:scale-110 font-bold text-lg ${
                 i % 6 === 0 ? 'bg-red-200 border-red-400 hover:bg-red-300 rotate-1' :
                 i % 6 === 1 ? 'bg-blue-200 border-blue-400 hover:bg-blue-300 -rotate-1' :
                 i % 6 === 2 ? 'bg-green-200 border-green-400 hover:bg-green-300 rotate-0.5' :
                 i % 6 === 3 ? 'bg-yellow-200 border-yellow-400 hover:bg-yellow-300 -rotate-0.5' :
                 i % 6 === 4 ? 'bg-purple-200 border-purple-400 hover:bg-purple-300 rotate-2' :
                 'bg-pink-200 border-pink-400 hover:bg-pink-300 -rotate-2'
               }`}>
              {social.name}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-600 text-lg">
        <p className="transform -rotate-0.5">
          © {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️
        </p>
      </footer>
    </div>
  </div>
);

// Design 6: Original Stone Theme (Your original design)
const OriginalStone = () => (
  <div className="min-h-screen bg-stone-900 text-stone-100">
    <div className="max-w-4xl mx-auto px-4 py-16">
      <main className="flex flex-col items-center text-center w-full">
      {/* Large responsive name text */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 sm:mb-12 leading-tight font-[family-name:var(--font-alfa-slab-one)] text-center text-stone-50">
        {websiteData.name}
      </h1>

      {/* Things I've Worked On section */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl mb-8 font-semibold text-stone-200 text-center">
          Websites I&apos;ve Worked On
        </h2>
        <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-stone-700/50 shadow-xl">
          <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {websiteData.websites.map((site, i) => (
              <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
                 className="group flex flex-col items-center justify-center p-6 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50 min-h-[80px]">
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-base sm:text-lg">
                  {site.name}
                </span>
              </a>
            ))}
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
            {websiteData.socials.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                 className="group flex flex-col items-center justify-center p-4 rounded-xl bg-stone-700/30 hover:bg-stone-600/40 transition-all duration-300 border border-stone-600/30 hover:border-stone-500/50">
                <span className="text-stone-200 group-hover:text-stone-100 font-medium text-center text-sm sm:text-base">
                  {social.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="pt-12 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Austin J. Woodard. All rights reserved. Keep it groovy. ✌️</p>
      </footer>
    </div>
  </div>
);

// Main component that randomly selects a design
export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  const designs = [
    ModernMinimalist,
    ElegantLuxury, 
    FuturisticTech,
    RetroVintage,
    CreativeArtistic,
    OriginalStone,
  ];

  useEffect(() => {
    // Check if localStorage is available (client-side only)
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        // Get seen designs from localStorage
        const seenDesigns = JSON.parse(localStorage.getItem('seenDesigns') || '[]');
        
        // If all designs have been seen, reset the array
        if (seenDesigns.length >= designs.length) {
          localStorage.setItem('seenDesigns', '[]');
          seenDesigns.length = 0;
        }
        
        // Get indices of unseen designs
        const unseenDesigns = designs.map((_, index) => index).filter(index => !seenDesigns.includes(index));
        
        // Pick random design from unseen ones
        const randomUnseenIndex = Math.floor(Math.random() * unseenDesigns.length);
        const selectedDesignIndex = unseenDesigns[randomUnseenIndex];
        
        // Add this design to seen designs
        seenDesigns.push(selectedDesignIndex);
        localStorage.setItem('seenDesigns', JSON.stringify(seenDesigns));
        
        setSelectedDesign(selectedDesignIndex);
      } catch {
        // Fallback to random selection if localStorage fails
        console.warn('localStorage not available, using random selection');
        const randomDesign = Math.floor(Math.random() * designs.length);
        setSelectedDesign(randomDesign);
      }
    } else {
      // Fallback for SSR or when localStorage is not available
      const randomDesign = Math.floor(Math.random() * designs.length);
      setSelectedDesign(randomDesign);
    }
  }, []);

  // Show loading or placeholder while design is being selected
  if (selectedDesign === null) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl"></div>
      </div>
    );
  }

  const SelectedDesignComponent = designs[selectedDesign];
  return <SelectedDesignComponent />;
}
