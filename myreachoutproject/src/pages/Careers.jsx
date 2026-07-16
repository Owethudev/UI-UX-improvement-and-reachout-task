import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

const roles = [
  { title: "Product designer", text: "Shape elegant, modern shopping experiences from first click to checkout." },
  { title: "Frontend engineer", text: "Build polished interfaces that feel instant and intuitive." },
  { title: "Customer experience lead", text: "Help every shopper feel supported from discovery to delivery." },
];

export default function Careers() {
  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Careers</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Join the team building thoughtful retail experiences.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b5563]">
            We are looking for creative builders who care about premium presentation and smooth customer journeys.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-6">
                <h2 className="text-xl font-semibold text-[#111111]">{role.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#4b5563]">{role.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:careers@megamall.example" className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Apply now
            </a>
            <Link to="/" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">
              Explore home
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
