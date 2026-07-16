import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

export default function GrandOpeningSignup() {
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory ?? "your favorite picks";
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...formData, [name]: value };
    setFormData(nextValues);

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: "" }));
    }
  };

  const validate = (values) => {
    const nextErrors = {};

    if (!/^[A-Za-z][A-Za-z\s'-]{1,49}$/.test(values.name.trim())) {
      nextErrors.name = "Please enter a valid name using letters and spaces.";
    }

    if (!/^[^\s@]+@[^\s@]+\.com$/i.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address with an @ and .com.";
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
    <section className="bg-[#f7f7f2] py-20 sm:py-24">
      <PageContainer>
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-black/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Grand opening</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
            We see you can’t wait to shop with us.
          </h1>
          <p className="mt-4 text-base leading-8 text-[#4b5563]">
            We love that energy. Hold tight while we get ready for our grand opening, and we’ll keep you posted about {selectedCategory} and more.
          </p>

          {!submitted ? (
            <form className="mt-8 space-y-4 text-left" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#111111]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#D4AF37]"
                />
                {errors.name ? <p className="mt-2 text-sm text-[#b45309]">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#111111]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#D4AF37]"
                />
                {errors.email ? <p className="mt-2 text-sm text-[#b45309]">{errors.email}</p> : null}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#e0bc45] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)]"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-[#D4AF37]/30 bg-[#111111] p-6 text-white">
              <p className="text-lg font-semibold">Thanks, {formData.name.trim()} — see you soon!</p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                We’ve got your email on the list for updates on {selectedCategory} and our grand opening.
              </p>
            </div>
          )}

          <div className="mt-8">
            <Link to="/" className="text-sm font-semibold text-[#D4AF37] transition hover:text-[#b88700]">
              Back to home
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
