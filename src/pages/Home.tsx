import { Music, Users, Calendar, Mail } from 'lucide-react';

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
              <div className="bg-soft-pink rounded-3xl aspect-square flex items-center justify-center">
                <Music className="w-24 h-24 text-dusty-rose/30" />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl text-dusty-rose mb-12 text-center">
              THE BAND
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Felix', role: 'Bass' },
                { name: 'Lena', role: 'Gesang, Klavier' },
                { name: 'Nico', role: 'Drums' },
                { name: 'Michi', role: 'Gitarre' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="bg-soft-pink rounded-3xl aspect-square mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-dusty-rose/30" />
                  </div>
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
              <div className="bg-soft-pink rounded-3xl p-8 flex items-center justify-center aspect-square">
                <div className="text-center">
                  <div className="w-32 h-32 bg-cream rounded-3xl mx-auto mb-6 flex items-center justify-center">
                    <Music className="w-16 h-16 text-dusty-rose/40" />
                  </div>
                  <p className="text-dusty-rose/60 text-sm mb-4">Neuester Release</p>
                  <h3 className="font-serif text-2xl text-dusty-rose mb-2">Zuckergoscherl</h3>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <h3 className="font-serif text-xl text-dusty-rose mb-2">
                  Gleich reinhören - überall wo es Musik gibt!
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Spotify', color: 'bg-green-500' },
                    { name: 'Apple Music', color: 'bg-red-400' },
                    { name: 'YouTube', color: 'bg-red-600' },
                    { name: 'Amazon', color: 'bg-blue-400' },
                  ].map((platform) => (
                    <button
                      key={platform.name}
                      className="bg-dusty-rose/10 hover:bg-dusty-rose/20 text-dusty-rose rounded-2xl py-4 transition-colors"
                    >
                      {platform.name}
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
            <a
              href="mailto:lenamariahagmann@gmail.com"
              className="inline-flex items-center gap-3 bg-dusty-rose text-cream px-8 py-4 rounded-full hover:bg-dusty-rose/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              lenamariahagmann@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
