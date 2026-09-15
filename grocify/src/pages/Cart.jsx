import { Link } from "react-router-dom";
import { FaArrowRight, FaMinus, FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const getNumericPrice = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;
const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

const Cart = () => {
  const { cartItems, cartCount, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 40;
  const total = subtotal + delivery;

  return (
    <main className="section-shell min-h-screen">
      <div className="section-frame">
        <header className="mb-10 flex flex-col items-center text-center">
          <p className="section-eyebrow">Your cart</p>
          <h1 className="section-title">Fresh picks, ready to go.</h1>
          <div className="my-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <p className="section-copy mt-0">{cartCount} {cartCount === 1 ? "item" : "items"} in your shopping bag.</p>
        </header>

        {cartItems.length === 0 ? (
          <section className="surface-card mx-auto max-w-2xl p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-orange-500">
              <FaShoppingCart />
            </div>
            <h2 className="mt-5 text-2xl font-black text-slate-900">Your cart is empty</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Add something fresh from our catalog and it will appear here.</p>
            <Link to="/all-products" className="btn-primary mt-6 gap-2">Browse Products <FaArrowRight /></Link>
          </section>
        ) : (
          <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="surface-card p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-xl font-black text-slate-900">Cart items</h2>
                <button type="button" onClick={clearCart} className="text-sm font-semibold text-slate-400 transition hover:text-red-500">Clear cart</button>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <article key={item.cartItemId} className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:flex-nowrap sm:p-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">{item.category || "Organic"}</p>
                      <h3 className="mt-1 truncate font-bold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-500">{formatPrice(getNumericPrice(item.price))} each</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
                      <button type="button" onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition hover:bg-orange-50 hover:text-orange-500" aria-label={`Decrease ${item.name}`}><FaMinus className="text-[10px]" /></button>
                      <span className="w-5 text-center text-sm font-bold text-slate-800">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition hover:bg-orange-50 hover:text-orange-500" aria-label={`Increase ${item.name}`}><FaPlus className="text-[10px]" /></button>
                    </div>
                    <strong className="w-20 text-right text-base font-black text-slate-900">{formatPrice(getNumericPrice(item.price) * item.quantity)}</strong>
                    <button type="button" onClick={() => removeFromCart(item.cartItemId)} className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500" aria-label={`Remove ${item.name}`}><FaTrash className="text-xs" /></button>
                  </article>
                ))}
              </div>
            </div>

            <aside className="surface-card h-fit bg-slate-900 p-6 text-white sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">Order summary</p>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex justify-between"><span>Items</span><span>{cartCount}</span></div>
                <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? "Free" : formatPrice(delivery)}</span></div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xl font-black"><span>Total</span><span>{formatPrice(total)}</span></div>
              <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 py-3 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:from-orange-600 hover:to-amber-500">Proceed to checkout <FaArrowRight className="text-xs" /></button>
              <p className="mt-4 text-center text-xs text-slate-400">Free delivery on orders above ₹499</p>
            </aside>
          </section>
        )}
      </div>
    </main>
  );
};

export default Cart;
