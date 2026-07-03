import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Calendar, Music, CircleCheck as CheckCircle, ChevronDown, Send } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Ut enim ad minim veniam, quis nostrud exercitation?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Duis aute irure dolor in reprehenderit in voluptate?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Excepteur sint occaecat cupidatat non proident?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    { videoId: 'zG9HOpDR4pY', title: 'Example Wedding Performance 1' },
    { videoId: 'zG9HOpDR4pY', title: 'Example Wedding Performance 2' },
    { videoId: 'zG9HOpDR4pY', title: 'Example Wedding Performance 3' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Section 1: Hero with image and text, plus gallery */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-serif text-4xl md:text-5xl text-dusty-rose mb-6">
                Musik für deinen besonderen Tag
              </h1>
              <div className="text-dusty-rose/70 space-y-4 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/3014842/pexels-photo-3014842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding music performance"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1024608/pexels-photo-1024608.jpeg?auto=compress&cs=tinysrgb&w=400',
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
            Eindrücke von vergangenen Auftritten
          </h2>
          <p className="text-dusty-rose/70 text-center mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    icon: Mail,
                  },
                  {
                    step: 2,
                    title: 'Kennenlernen',
                    description:
                      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    icon: Music,
                  },
                  {
                    step: 3,
                    title: 'Planung & Abstimmung',
                    description:
                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    icon: Calendar,
                  },
                  {
                    step: 4,
                    title: 'Dein besonderer Tag',
                    description:
                      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                      <p className="text-dusty-rose/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-soft-pink rounded-3xl p-8">
                <h4 className="font-serif text-xl text-dusty-rose mb-4">
                  Nach der Buchung
                </h4>
                <p className="text-dusty-rose/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-soft-pink/30 rounded-3xl p-8">
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
          <h2 className="font-serif text-3xl md:text-4xl text-dusty-rose mb-4 text-center">
            Häufig gestellte Fragen
          </h2>
          <p className="text-dusty-rose/70 text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
