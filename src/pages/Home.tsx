import { Music, Users, Calendar, Mail, Radio, Apple, Youtube, Music2, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-soft-pink rounded-[40px] p-12 mb-20 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl md:text-5xl text-dusty-rose mb-4">
                Lena Marie
              </h1>
              <p className="text-dusty-rose/80 text-lg tracking-wide">
                Wiener Indiepop für Naschkatzen
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-dusty-rose/5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-serif text-3xl text-dusty-rose mb-6">
                Indiepop für Naschkatzen
              </h2>
              <div className="text-dusty-rose/70 space-y-4 leading-relaxed">
                <p>
                  Hallihallo, schön, dass du da bist &lt;3.<br />
                  Ich bin Lena Marie und  am liebsten schreib und sing ich Songs und bin aus Wien. Gemeinsam mit meiner Band macht mir das Auftreten, Arrangieren und Schreiben noch viel mehr Spaß.
                </p>
                <p>
                  Mein großes Vorbild ist Pippi Langstrumpf, deswegen hab ich beschlossen, jetzt mutig zu sein und meine Songs auch anderen Menschen zu zeigen.
                </p>
                <p>
                  Im Moment bin ich das erste Mal wirklich auf TikTok – da teile ich 100 Tage lang täglich ein bisschen Musik. Meistens schreib ich etwas um, so wiedewidewie es mir gefällt :)
                </p>
                <p>
                  Schaut gerne mal rein!
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Artist performing"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl text-dusty-rose mb-12 text-center">
              THE BAND
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Felix', role: 'Bass', image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { name: 'Lena', role: 'Gesang, Klavier', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { name: 'Nico', role: 'Drums', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { name: 'Michi', role: 'Gitarre', image: 'https://images.pexels.com/photos/1820272/pexels-photo-1820272.jpeg?auto=compress&cs=tinysrgb&w=600' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-3xl aspect-square mb-4"
                  />
                  <h3 className="font-serif text-xl text-dusty-rose mb-1">{member.name}</h3>
                  <p className="text-dusty-rose/60 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl text-dusty-rose mb-8 text-center">
              Unsere nächsten Shows
            </h2>
            <div className="bg-soft-pink rounded-3xl p-8">
              <div className="flex items-center justify-center gap-4 text-dusty-rose/60">
                <Calendar className="w-8 h-8" />
                <p className="text-lg">New dates coming soon...</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl text-dusty-rose mb-8 text-center">
              Musik zum Mitnehmen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Latest release"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="flex flex-col justify-center gap-6">
                <h3 className="font-serif text-xl text-dusty-rose mb-2">
                  Gleich reinhören - überall wo es Musik gibt!
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Spotify', Icon: Radio, color: 'text-green-500' },
                    { name: 'Apple Music', Icon: Apple, color: 'text-black' },
                    { name: 'YouTube', Icon: Youtube, color: 'text-red-600' },
                    { name: 'Amazon', Icon: Music2, color: 'text-blue-600' },
                  ].map((platform) => (
                    <button
                      key={platform.name}
                      className="bg-dusty-rose/10 hover:bg-dusty-rose/20 text-dusty-rose rounded-2xl py-4 flex items-center justify-center gap-2 transition-colors"
                    >
                      <platform.Icon className={`w-5 h-5 ${platform.color}`} />
                      <span className="text-sm">{platform.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-soft-pink rounded-3xl p-12 text-center">
            <h2 className="font-serif text-3xl text-dusty-rose mb-6">
              STAY CONNECTED
            </h2>
            <p className="text-dusty-rose/70 mb-8">
              Wir freuen uns, von euch zu hören!
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:lenamariahagmann@gmail.com"
                className="inline-flex items-center gap-3 bg-dusty-rose text-cream px-8 py-4 rounded-full hover:bg-dusty-rose/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                lenamariahagmann@gmail.com
              </a>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dusty-rose hover:text-dusty-rose/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dusty-rose hover:text-dusty-rose/80 transition-colors"
                  aria-label="TikTok"
                >
                  <Music className="w-8 h-8" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dusty-rose hover:text-dusty-rose/80 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-8 h-8" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dusty-rose hover:text-dusty-rose/80 transition-colors"
                  aria-label="Spotify"
                >
                  <Radio className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
