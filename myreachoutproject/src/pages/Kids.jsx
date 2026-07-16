import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

const highlights = [
  { title: "Family-friendly picks", text: "Easy-to-use devices that bring comfort, fun, and focus together." },
  { title: "Study-ready tools", text: "Compact gear designed for homework, creativity, and calm routines." },
  { title: "Playful essentials", text: "Bright, useful upgrades that feel as good as they perform." },
];

export default function Kids() {
  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Kids</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Popular picks for learning, play, and family routines.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b5563]">
            Discover thoughtful devices that help kids stay engaged, organized, and connected.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-6">
                <h2 className="text-xl font-semibold text-[#111111]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#4b5563]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Browse kid-friendly products
            </Link>
            <Link to="/" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">
              Back to home
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
