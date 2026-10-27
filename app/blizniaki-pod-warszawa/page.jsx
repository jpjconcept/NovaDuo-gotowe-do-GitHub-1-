<a
                href="tel:+48600397399"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                600 397 399
              </a>

              <a
                href="mailto:kontakt@jpjconcept.pl"
                className="block hover:text-white"
              >
                kontakt@jpjconcept.pl
              </a>

              <p>ul. Nowowiejska 58A, Pogroszew</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mdabrvqe"
            method="POST"
            className="rounded-[2rem] bg-white p-8 text-[#1f241f] shadow-2xl"
          >
            <input
              type="hidden"
              name="source"
              value="Podstrona: bliźniaki pod Warszawą"
            />

            <div className="space-y-4">
              <input
                name="name"
                required
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#1f3d2b]"
                placeholder="Imię i nazwisko"
              />

              <input
                name="contact"
                required
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#1f3d2b]"
                placeholder="Telefon lub e-mail"
              />

              <textarea
                name="message"
                required
                className="min-h-32 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#1f3d2b]"
                placeholder="Wiadomość"
              />

              <label className="flex items-start gap-3 text-xs leading-5 text-black/55">
                <input
                  type="checkbox"
                  name="rodo"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span>
                  Wyrażam zgodę na kontakt telefoniczny lub mailowy w celu
                  przedstawienia informacji dotyczących inwestycji NovaDuo.
                </span>
              </label>

              <button
                type="submit"
                className="h-12 w-full rounded-full bg-[#1f3d2b] px-5 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>
            <div>© 2026 NovaDuo | JPJ Concept Sp. z o.o.</div>

            <div className="mt-3 flex flex-wrap gap-4">
              <Link href="/" className="hover:text-[#1f3d2b]">
                Strona główna NovaDuo
              </Link>

              <Link href="/lokale" className="hover:text-[#1f3d2b]">
                Lokale i ceny
              </Link>

              <Link
                href="/segmenty-pod-warszawa"
                className="hover:text-[#1f3d2b]"
              >
                Segmenty pod Warszawą
              </Link>

              <Link
                href="/segmenty-pogroszew"
                className="hover:text-[#1f3d2b]"
              >
                Segmenty Pogroszew
              </Link>

              <Link href="/historia-cen" className="hover:text-[#1f3d2b]">
                Historia cen
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <div>JPJ Concept Sp. z o.o.</div>
            <div>ul. Nowowiejska 58A, Pogroszew</div>
            <div>05-850 Ożarów Mazowiecki</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
