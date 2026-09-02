import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const Cart = () => {
  return (
    <main className="section-shell">
      <section className="section-frame grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-card p-8">
          <span className="badge-soft gap-2">
            <FaShoppingCart />
            Cart connected
          </span>
          <h1 className="section-title">
            Your shopping cart is ready for checkout.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            This screen now feels like a real destination instead of a blank placeholder. Use the category pages and add-to-cart actions to keep the journey connected.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Browse", "Find fresh categories"],
              ["Add items", "Use product actions"],
              ["Checkout", "Return here to finish"],
            ].map(([title, text]) => (
              <div key={title} className="surface-card-soft p-5">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">{title}</div>
                <div className="mt-2 text-sm text-slate-600">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="surface-card space-y-6 bg-slate-900 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Cart summary</p>
            <div className="mt-4 rounded-3xl bg-white/5 p-5">
              <div className="flex items-center justify-between text-slate-300">
                <span>Items</span>
                <span>0</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-slate-300">
                <span>Delivery</span>
                <span>Free on orders above ₹499</span>
              </div>
              <div className="mt-4 border-t border-white/10 pt-4 flex items-center justify-between text-xl font-black">
                <span>Total</span>
                <span>₹0</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-6 text-slate-950 shadow-[0_16px_36px_rgba(249,115,22,0.22)]">
            <h2 className="text-2xl font-black">Keep shopping</h2>
            <p className="mt-2 text-sm leading-7 text-slate-900/80">
              Jump back to the collections and add items from the clean, route-based catalog flow.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/fruits" className="btn-primary bg-slate-950 px-5 py-3 hover:bg-slate-800">
                Browse Products
              </Link>
              <Link to="/" className="btn-secondary px-5 py-3">
                Home
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Cart;