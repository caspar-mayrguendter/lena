import { Video } from 'lucide-react';

export default function Media() {
  const youtubeVideos = [
    { videoId: 'dQw4w9WgXcQ', title: 'Sunset Dreams - Official Music Video' },
    { videoId: 'jNQXAC9IVRw', title: 'Midnight Thoughts (Live Session)' },
    { videoId: 'tYzMGcUty6s', title: 'Golden Hour - Acoustic Version' },
  ];

  const tiktoks = [
    { videoId: '@lenamariesingt/12345', title: 'Behind the scenes of Sunset Dreams' },
    { videoId: '@lenamariesingt/12346', title: 'Studio vibes' },
    { videoId: '@lenamariesingt/12347', title: 'New song snippet' },
    { videoId: '@lenamariesingt/12348', title: 'Sound check moments' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h1 className="font-serif text-4xl text-dusty-rose mb-8">YouTube</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tiktoks.map((tiktok, index) => (
              <a
                key={index}
                href={`https://www.tiktok.com/${tiktok.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="bg-soft-pink rounded-3xl aspect-[9/16] mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img
                    src={`https://images.pexels.com/photos/${3000 + index}/pexels-photo-${3000 + index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=600`}
                    alt={tiktok.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-dusty-rose text-sm">{tiktok.title}</p>
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
