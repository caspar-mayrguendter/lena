export default function Media() {
  const youtubeVideos = [
    { videoId: 'm1_bL8DeUUQ', title: 'Lena Marie - Das kleine Konzert' },
  ];

  const tiktoks = [
    { videoId: '7576371863098494230', title: 'Tag 1 von 100 meiner Musik' },
    { videoId: '7571915743659379990', title: 'Einmal ein wildes Huhn...' },
    { videoId: '7575627083573939478', title: 'Let it be in Wien' },
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
                href={`https://www.tiktok.com/@lenipombeni/video/${tiktok.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="bg-soft-pink rounded-3xl aspect-[9/16] mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img
                    src={`https://www.tiktok.com/api/img/?itemId=${tiktok.videoId}`}
                    alt={tiktok.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-dusty-rose text-sm">{tiktok.title}</p>
              </a>
            ))}
          </div>
        </div>

        <blockquote className="tiktok-embed min-w-80 max-w-2xl" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173"
                    data-video-id="6718335390845095173">
          <section>
            <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015?refer=embed">
              @scout2015
            </a>
              Scramble up ur name &#38; I’ll try to guess it😍❤️
            <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a>
            <a title="petsoftiktok" target="_blank" href="https://www.tiktok.com/tag/petsoftiktok?refer=embed">#petsoftiktok</a>
            <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic?refer=embed">#aesthetic</a>
            <a target="_blank" title="♬ original sound - tiff" href="https://www.tiktok.com/music/original-sound-6689804660171082501?refer=embed">♬ original sound - tiff</a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>

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
