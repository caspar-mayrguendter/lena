export default function Imprint() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-dusty-rose mb-12">
          Imprint
        </h1>

        <div className="space-y-12 text-dusty-rose/70">
          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Information according to § 5 TMG</h2>
            <div className="bg-soft-pink rounded-3xl p-8 space-y-2">
              <p className="font-medium text-dusty-rose">Luna Rose Music</p>
              <p>Artist Management</p>
              <p>123 Music Street</p>
              <p>10115 Berlin</p>
              <p>Germany</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Contact</h2>
            <div className="bg-soft-pink rounded-3xl p-8 space-y-2">
              <p>
                <span className="font-medium text-dusty-rose">Email:</span> hello@lunarose.music
              </p>
              <p>
                <span className="font-medium text-dusty-rose">Phone:</span> +49 (0) 30 1234567
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Responsible for content</h2>
            <div className="bg-soft-pink rounded-3xl p-8">
              <p className="font-medium text-dusty-rose">Luna Rose</p>
              <p>123 Music Street, 10115 Berlin</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Dispute resolution</h2>
            <div className="bg-soft-pink rounded-3xl p-8 leading-relaxed">
              <p>
                The European Commission provides a platform for online dispute resolution (OS):
                https://ec.europa.eu/consumers/odr/
              </p>
              <p className="mt-4">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Liability for content</h2>
            <div className="bg-soft-pink rounded-3xl p-8 leading-relaxed space-y-4">
              <p>
                As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to Section 7 (1) of the German Telemedia Act (TMG). However, according to Sections 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p>
                Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such legal violations, we will remove this content immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-dusty-rose mb-4">Copyright</h2>
            <div className="bg-soft-pink rounded-3xl p-8 leading-relaxed space-y-4">
              <p>
                The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright require the written consent of the respective author or creator.
              </p>
              <p>
                Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
              </p>
            </div>
          </section>

          <section className="text-center pt-8">
            <p className="text-dusty-rose/50 text-sm">Last updated: December 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
