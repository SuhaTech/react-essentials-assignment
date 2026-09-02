import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Fruits", to: "/fruits" },
  { label: "Dairy", to: "/dairy" },
  { label: "Meat", to: "/meat" },
  { label: "Cart", to: "/cart" },
];

const categoryLinks = [
  { label: "Vegetables", to: "/fruits" },
  { label: "Fresh Fruits", to: "/fruits" },
  { label: "Dairy & Eggs", to: "/dairy" },
  { label: "Meat & Seafood", to: "/meat" },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-[1.75rem] bg-slate-900 px-6 py-6 ring-1 ring-white/10 md:flex-row md:px-8 md:py-8">

          <div>

            <h2 className="text-2xl font-black">
              Subscribe Our Newsletter
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              Get updates about fresh vegetables & fruits.
            </p>

          </div>

          <div className="flex w-full overflow-hidden rounded-full bg-white md:w-auto md:min-w-[360px]">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-slate-700 outline-none md:w-80"
            />

            <button className="bg-orange-500 px-6 font-semibold transition hover:bg-orange-600">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">

        <div>

          <h1 className="text-3xl font-black tracking-tight">
            Gr<span className="text-orange-500">o</span>cify
          </h1>

          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            Organic groceries delivered fresh to your doorstep every day.
          </p>

          <div className="mt-6 flex gap-3 text-lg text-slate-300">

            <FaFacebookF className="cursor-pointer rounded-full bg-white/5 p-2 transition hover:bg-orange-500/20 hover:text-orange-400" />
            <FaInstagram className="cursor-pointer rounded-full bg-white/5 p-2 transition hover:bg-orange-500/20 hover:text-orange-400" />
            <FaTwitter className="cursor-pointer rounded-full bg-white/5 p-2 transition hover:bg-orange-500/20 hover:text-orange-400" />
            <FaLinkedinIn className="cursor-pointer rounded-full bg-white/5 p-2 transition hover:bg-orange-500/20 hover:text-orange-400" />

          </div>

        </div>

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-400">

            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-orange-400" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Categories
          </h3>

          <ul className="space-y-3 text-slate-400">

            {categoryLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-orange-400" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Contact
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>📍 India</li>
            <li>📞 +91 9876543210</li>
            <li>📧 info@grocify.com</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">

        © 2026 Grocify. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;