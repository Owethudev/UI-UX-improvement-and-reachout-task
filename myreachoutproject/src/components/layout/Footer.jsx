// This footer closes the page with helpful brand and support information.
// It is easy to extend with more sections or legal links later.

import { useState } from "react";
import { ArrowRight, CreditCard, BadgeCheck, MapPin, Phone, ShieldCheck, Truck, MessagesSquare } from "lucide-react";

import PageContainer from "./PageContainer";

const supportLinks = ["FAQs", "Returns", "Shipping", "Warranty"];

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const validate = (values) => {
    const nextErrors = {};

    if (!/^[A-Za-z][A-Za-z\s'-]{1,49}$/.test(values.name.trim())) {
      nextErrors.name = "Please enter a valid name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.com$/i.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email with an @ and .com.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <footer className="mt-24 border-t border-black/10 bg-[#111111] text-white">
      <PageContainer>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-[#D4AF37]">MegaMall</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
              Premium Shopping Experience
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/75">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Phone size={16} className="text-[#D4AF37]" />
              </div>
              <span>087 058 9999</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.24em] text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {supportLinks.map((item) => (
                <li key={item} className="transition hover:text-[#D4AF37]">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.24em] text-white">Visit</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-[#D4AF37]" /> 12 Electron Close , Kya Sand Randburg, Johannesburg South Africa 2163</li>
              <li className="flex items-center gap-2"><Truck size={16} className="text-[#D4AF37]" /> Next-day delivery</li>
              <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#D4AF37]" /> 2-year service coverage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.24em] text-white">Newsletter</h3>
            {!submitted ? (
              <form className="mt-4 space-y-3" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="newsletter-name" className="sr-only">Name</label>
                  <input
                    id="newsletter-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-transparent bg-white px-3 py-2.5 text-sm text-[#111111] outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                  {errors.name ? <p className="mt-1 text-xs text-[#fbbf24]">{errors.name}</p> : null}
                </div>

                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full rounded-xl border border-transparent bg-white px-3 py-2.5 text-sm text-[#111111] outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-[#fbbf24]">{errors.email}</p> : null}
                </div>

                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 font-semibold text-[#111111] transition hover:bg-[#e0bc45]">
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <div className="mt-4 rounded-2xl border border-[#D4AF37]/30 bg-white/10 p-4 text-sm text-white/80">
                <p className="font-semibold text-[#D4AF37]">Thanks, {formData.name.trim()} — see you soon!</p>
                <p className="mt-2">We’ll keep you posted with updates and offers.</p>
              </div>
            )}
            <div className="mt-5 flex items-center gap-3 text-white/70">
              <BadgeCheck size={16} className="transition hover:text-[#D4AF37]" />
              <MessagesSquare size={16} className="transition hover:text-[#D4AF37]" />
              <CreditCard size={16} className="transition hover:text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}