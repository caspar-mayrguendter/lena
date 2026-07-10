import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Calendar, Music, CircleCheck as CheckCircle, ChevronDown, Send } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Wie weit fahre ich?',
    answer: 'Ich lebe in Wien und bin bereit, österreichweit und in den Süden Deutschlands zu fahren. Fahrtkosten müssen dann von den Veranstalter*innen übernommen werden.',
  },
  {
    question: 'Welche Technik bringe ich mit?',
    answer: 'Ein Keyboard und Mikrofon, auf Anfrage auch eine ganze Anlage.',
  },
  {
    question: 'Darf man sich Songs wünschen?',
    answer: 'Sehr gerne!',
  },
  {
    question: 'Spielst du auch mit Gitarre/Cajon oder Band?',
    answer: 'Ja! Auf Anfrage spiele ich kleinere Veranstaltungen mit Percussionisten und Gitarissten, große Feste auch gerne mit ganzer Band.',
  },
  {
    question: 'Wie weit im Voraus müssen wir buchen?',
    answer: 'Am besten so früh wie möglich, besonders, wenn euer Termin in der Hochzeitssaison liegt. Aber auch kurzfristige Anfragen sind jederzeit willkommen. Fragt einfach nach, vielleicht ist euer Wunschtermin noch frei.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-soft-pink rounded-3xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left"
          >
            <span className="font-serif text-lg text-dusty-rose pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-dusty-rose/60 transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-8 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
          >
            <p className="text-dusty-rose/70 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm('mvzjvjly');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  if (state.succeeded) {
    return (
      <div className="text-center py-5">
        <p className="text-dusty-rose flex items-center justify-center gap-2 text-lg bg-soft-pink rounded-3xl p-8 shadow-lg border-2 border-rose-200">
          <CheckCircle className="w-6 h-6" />
          Vielen Dank! Ich melde mich bald bei dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-dusty-rose mb-2 font-medium">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-cream border-2 border-rose-200 rounded-2xl px-6 py-4 text-dusty-rose focus:outline-none focus:border-dusty-rose transition-colors"
            placeholder="Dein Name"
          />
          <ValidationError field="name" errors={state.errors} />
        </div>
        <div>
          <label className="block text-dusty-rose mb-2 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-cream border-2 border-rose-200 rounded-2xl px-6 py-4 text-dusty-rose focus:outline-none focus:border-dusty-rose transition-colors"
            placeholder="deine@email.com"
          />
          <ValidationError field="email" errors={state.errors} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-dusty-rose mb-2 font-medium">Art des Events</label>
          <select
            name="event_type"
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full bg-cream border-2 border-rose-200 rounded-2xl px-6 py-4 text-dusty-rose focus:outline-none focus:border-dusty-rose transition-colors appearance-none cursor-pointer"
          >
            <option value="">Bitte wählen...</option>
            <option value="wedding">Hochzeit</option>
            <option value="corporate">Firmenevent</option>
            <option value="private">Private Feier</option>
            <option value="other">Sonstiges</option>
          </select>
        </div>
        <div>
          <label className="block text-dusty-rose mb-2 font-medium">Datum</label>
          <input
            type="date"
            name="event_date"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full bg-cream border-2 border-rose-200 rounded-2xl px-6 py-4 text-dusty-rose focus:outline-none focus:border-dusty-rose transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-dusty-rose mb-2 font-medium">Nachricht *</label>
        <textarea
          required
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-cream border-2 border-rose-200 rounded-2xl px-6 py-4 text-dusty-rose focus:outline-none focus:border-dusty-rose transition-colors resize-none"
          placeholder="Erzähl mir von deinem Event..."
        />
        <ValidationError field="message" errors={state.errors} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-dusty-rose text-cream px-12 py-4 rounded-full hover:bg-dusty-rose/90 transition-colors flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            'Wird gesendet...'
          ) : (
            <>
              <Send className="w-5 h-5" />
              Nachricht senden
            </>
          )}
        </button>

        {state.errors && (
          <p className="text-red-500">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
        )}
      </div>
    </form>
  );
}

export default function Weddings() {
  const weddingVideos = [
    { videoId: 'hCnENHjHaQI', title: 'Stand by me (Cover)' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Section 1: Hero with image and text, plus gallery */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-4 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-serif text-4xl md:text-5xl text-dusty-rose mb-6">
                Musik für deinen besonderen Tag
              </h1>
              <div className="text-dusty-rose/70 space-y-4 leading-relaxed">
                <p>
                  Musik darf in besonderen Momenten nicht fehlen.
                  Ob Trauung, Taufe, Agape oder Geburtstag,
                  der Ton macht das Event. Ich begleite Ihre
                  Feier individuell mit gefühlvollem Gesang
                  und Klavier (auf Anfrage
                  auch mit Band). Mein vielfältiges Repertoire wandert
                  von Pop über Soul und Indie in Richtung Jazz, wobei
                  ich sehr gerne auch auf Wunschsongs eingehe und
                  diese einstudiere,
                  um Ihr Event so individuell wie möglich zu gestalten..
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/assets/events/LenaMarie1.webp"
                alt="Wedding music performance"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div/>
            <div/>
            {[
              '/assets/events/LenaMarie2.webp',
              '/assets/events/LenaMarie3.webp',
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-2xl hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Video snippets */}
      <section className="py-20 px-6 bg-soft-pink/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dusty-rose mb-4 text-center">
            Hörproben
          </h2>
          <p className="text-dusty-rose/70 text-center mb-12 max-w-2xl mx-auto">

          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {weddingVideos.map((video, index) => (
              <div key={index} className="bg-cream rounded-3xl overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-dusty-rose font-medium">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Booking steps and contact form */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dusty-rose mb-4 text-center">
            Buchung & Kontakt
          </h2>
          <p className="text-dusty-rose/70 text-center mb-16 max-w-2xl mx-auto">

          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Booking Steps */}
            <div>
              <h3 className="font-serif text-2xl text-dusty-rose mb-8">
                So läuft die Buchung ab
              </h3>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: 'Kontakt aufnehmen',
                    icon: Mail,
                  },
                  {
                    step: 2,
                    title: 'Kennenlernen',
                    icon: Music,
                  },
                  {
                    step: 3,
                    title: 'Planung & Abstimmung',
                    icon: Calendar,
                  },
                  {
                    step: 4,
                    title: 'Dein besonderer Tag',
                    icon: CheckCircle,
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-dusty-rose text-cream flex items-center justify-center font-serif text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-5 h-5 text-dusty-rose/60" />
                        <h4 className="font-medium text-dusty-rose">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-soft-pink rounded-3xl p-8">
                <h4 className="font-serif text-xl text-dusty-rose mb-4">
                  Preis auf Anfrage
                </h4>
                <p className="text-dusty-rose/70 leading-relaxed">
                  Die detaillierte Preisliste sende ich euch gerne auf Anfrage. Der Preis variiert je nach Event, Besetzung, Dauer und Equipment, das ich bereitstelle.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-soft-pink/30 rounded-3xl p-8 ">
              <h3 className="font-serif text-2xl text-dusty-rose mb-8">
                Anfrage senden
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="py-20 px-6 bg-soft-pink/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dusty-rose mb-8 text-center">
            Falls ihr noch Fragen habt...
          </h2>

          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
