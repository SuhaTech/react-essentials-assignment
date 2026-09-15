import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="section-shell min-h-screen">
      <div className="section-frame">
        <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="section-eyebrow">Contact us</p>
          <h1 className="section-title">Let&apos;s talk fresh.</h1>
          <div className="my-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <p className="section-copy mt-0">Have a question about an order or our products? Our team is ready to help.</p>
        </header>

        <section className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="surface-card bg-gradient-to-br from-orange-500 to-amber-400 p-7 text-white shadow-orange-200/60">
            <h2 className="text-2xl font-black">We&apos;re here for you.</h2>
            <p className="mt-3 text-sm leading-6 text-white/85">Reach us through any of these channels and we&apos;ll get back to you shortly.</p>
            <div className="mt-8 space-y-5 text-sm">
              <p className="flex items-center gap-3"><FaEnvelope /> hello@grocify.com</p>
              <p className="flex items-center gap-3"><FaPhone /> +91 98765 43210</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt /> Fresh Market Avenue</p>
            </div>
          </div>

          <form className="surface-card space-y-5 p-6 sm:p-8">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="How can we help you?" className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100" />
            </div>
            <button type="button" className="btn-primary w-full py-3">Send Message</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;