export default function Imprint() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-dusty-rose mb-12">
          Impressum
        </h1>

        <div className="space-y-12 text-dusty-rose/70">
          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Information according to § 5 TMG</h2>
            <div className="bg-soft-pink rounded-3xl p-8 space-y-2">
              <p className="font-medium text-dusty-rose">Lena Maria Hagmann</p>
              <p>1160 Wien</p>
              <p>Österreich</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Kontakt</h2>
            <div className="bg-soft-pink rounded-3xl p-8 space-y-2">
              <p>
                <span className="font-medium text-dusty-rose">Email:</span> lenamariahagmann@gmail.com
              </p>
              <p>
                <span className="font-medium text-dusty-rose">Phone:</span> +43 6991 4100300
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Für den Inhalt verantwortlich</h2>
            <div className="bg-soft-pink rounded-3xl p-8">
              <p className="font-medium text-dusty-rose">Lena Maria Hagmann</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Haftung</h2>
            <div className="bg-soft-pink rounded-3xl p-8 leading-relaxed">
              <p>
                Diese Website wird mit größtmöglicher Sorgfalt zusammengestellt. Trotzdem kann keine Gewähr für die Fehlerfreiheit und Genauigkeit der enthaltenen Informationen übernommen werden. Jegliche Haftung für Schäden, die direkt oder indirekt aus der Benutzung dieser Website entstehen, wird ausgeschlossen, soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen. Sofern von dieser Website auf Internetseiten verwiesen wird, die von Dritten betrieben werden, übernehmen wir keine Verantwortung für deren Inhalte.
              </p>
            </div>
          </section>

          <section className="text-center pt-8">
            <p className="text-dusty-rose/50 text-sm">Dezember 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
