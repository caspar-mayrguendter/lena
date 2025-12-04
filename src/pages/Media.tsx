import { Youtube, Video } from 'lucide-react';

export default function Media() {
  const youtubeVideos = [
    { id: '1', title: 'Sunset Dreams - Official Music Video', thumbnail: 'video1' },
    { id: '2', title: 'Midnight Thoughts (Live Session)', thumbnail: 'video2' },
    { id: '3', title: 'Golden Hour - Acoustic Version', thumbnail: 'video3' },
  ];

  const tiktoks = [
    { id: '1', title: 'Behind the scenes of Sunset Dreams', thumbnail: 'tiktok1' },
    { id: '2', title: 'Studio vibes', thumbnail: 'tiktok2' },
    { id: '3', title: 'New song snippet', thumbnail: 'tiktok3' },
    { id: '4', title: 'Sound check moments', thumbnail: 'tiktok4' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Youtube className="w-10 h-10 text-dusty-rose" />
            <h1 className="font-serif text-4xl text-dusty-rose">YouTube</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="bg-soft-pink rounded-3xl aspect-video mb-4 flex items-center justify-center overflow-hidden hover:bg-dusty-rose/20 transition-colors">
                  <Youtube className="w-16 h-16 text-dusty-rose/30 group-hover:text-dusty-rose/50 transition-colors" />
                </div>
                <h3 className="text-dusty-rose font-medium">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <Video className="w-10 h-10 text-dusty-rose" />
            <h1 className="font-serif text-4xl text-dusty-rose">TikTok</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tiktoks.map((tiktok) => (
              <div key={tiktok.id} className="group cursor-pointer">
                <div className="bg-soft-pink rounded-3xl aspect-[9/16] mb-4 flex items-center justify-center overflow-hidden hover:bg-dusty-rose/20 transition-colors">
                  <Video className="w-12 h-12 text-dusty-rose/30 group-hover:text-dusty-rose/50 transition-colors" />
                </div>
                <p className="text-dusty-rose text-sm">{tiktok.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-soft-pink rounded-3xl p-12 text-center">
          <p className="text-dusty-rose/70 text-lg">
            Follow für mehr Content und Updates
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <button className="bg-dusty-rose text-cream px-8 py-3 rounded-full hover:bg-dusty-rose/90 transition-colors">
              @lenamariesingt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
