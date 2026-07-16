import PageContainer from "../layout/PageContainer";

function Newsletter() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="overflow-hidden rounded-[2rem] bg-[#111111] px-6 py-10 shadow-[0_24px_80px_rgba(17,17,17,0.18)] sm:px-10 lg:px-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Stay in the loop
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Get premium offers and product drops first.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
                Join our newsletter for curated launches, limited deals, and expert recommendations tailored to your next upgrade.
              </p>

              <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/60 focus:border-[#D4AF37] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#e6c24d]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute inset-6 rounded-full bg-[#D4AF37]/20 blur-3xl" />
              <div className="relative w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/6 to-transparent p-6 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#1a1a1a] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Weekly digest</p>
                      <p className="mt-2 text-xl font-semibold text-white">Smart picks for your home</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-[#111111]">
                      <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
                        <path d="M20 18h24a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M24 24h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M24 32h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M24 40h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-[#D4AF37]/20" />
                      <div>
                        <p className="text-sm font-semibold text-white">Curated launches</p>
                        <p className="text-sm text-white/65">New premium arrivals every Friday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default Newsletter;
