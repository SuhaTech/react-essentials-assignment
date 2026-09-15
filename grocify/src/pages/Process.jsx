import { FaCheckCircle, FaShoppingBasket, FaTruck } from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Select products",
      description: "Choose from fresh organic fruits, vegetables, dairy, and more.",
      icon: FaShoppingBasket,
    },
    {
      number: "02",
      title: "Quality inspection",
      description: "Every order is checked carefully before it leaves our team.",
      icon: FaCheckCircle,
    },
    {
      number: "03",
      title: "Fast delivery",
      description: "Your carefully packed groceries arrive at your doorstep on time.",
      icon: FaTruck,
    },
  ];

  return (
    <main className="section-shell min-h-screen">
      <div className="section-frame">
        <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="section-eyebrow">How it works</p>
          <h1 className="section-title">Our working process</h1>
          <div className="my-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <p className="section-copy mt-0">From farm selection to doorstep delivery, every step is designed to stay simple.</p>
        </header>

        <section className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article key={number} className="group surface-card relative p-7 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <Icon />
              </div>
              <span className="mt-5 block text-xs font-bold uppercase tracking-[0.25em] text-orange-500">Step {number}</span>
              <h2 className="mt-2 text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Process;