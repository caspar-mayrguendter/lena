export default function Media() {
  const youtubeVideos = [
    { videoId: 'm1_bL8DeUUQ', title: 'Lena Marie - Das kleine Konzert' },
  ];

  const tiktoks = [
    { videoId: '7576371863098494230', title: 'Tag 1/100 hihi 🎶🐭\n dachte mit ‚if I were a boy‘ startet es sich gut 🌞', image: '/assets/TikTok1.png' },
    { videoId: '7571915743659379990', title: 'ich hoff, ihr habt es warm und gut heute 🧡❄️🧣 samstagsbussi', image: '/assets/TikTok2.png' },
    { videoId: '7575627083573939478', title: 'musste einen marmeladenglasmoment song schreiben 🤍🧡 ', image: '/assets/TikTok3.png' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h1 className="font-serif text-4xl text-dusty-rose mb-8">YouTube</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {youtubeVideos.map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="bg-soft-pink rounded-3xl aspect-video mb-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-dusty-rose font-medium">{video.title}</h3>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-serif text-4xl text-dusty-rose mb-8">TikTok</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {tiktoks.map((tiktok, index) => (
              <a
                key={index}
                href={`https://www.tiktok.com/@lenamariesingt/video/${tiktok.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="relative bg-soft-pink rounded-3xl aspect-[9/16] mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img
                    src={tiktok.image}
                    alt={tiktok.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-end justify-center p-4">
                    <p className="text-white text-center text-sm font-medium line-clamp-3">
                      {tiktok.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-soft-pink rounded-3xl p-12 text-center">
          <p className="text-dusty-rose/70 text-lg">
            Follow für mehr Content und Updates
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.tiktok.com/@lenamariesingt" target="_blank" rel="noopener noreferrer" className="bg-dusty-rose text-cream px-8 py-3 rounded-full hover:bg-dusty-rose/90 transition-colors">
              @lenamariesingt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
