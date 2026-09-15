const About = () => {
  return (
    <main className="section-shell min-h-screen">
      <div className="section-frame">
        <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="section-eyebrow">About Grocify</p>
          <h1 className="section-title">Fresh food, thoughtfully delivered.</h1>
          <div className="my-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <p className="section-copy mt-0">
            We deliver organic, farm-fresh fruits, vegetables, and daily essentials straight to your doorstep.
          </p>
        </header>

        <section className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <article className="surface-card p-6 text-center">
            <p className="text-3xl font-black text-orange-500">100%</p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">Fresh promise</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Carefully sourced produce for everyday meals.</p>
          </article>
          <article className="surface-card p-6 text-center">
            <p className="text-3xl font-black text-orange-500">24/7</p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">Simple shopping</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">A clean catalog that keeps your choices easy.</p>
          </article>
          <article className="surface-card p-6 text-center">
            <p className="text-3xl font-black text-orange-500">Fast</p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">At your door</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Reliable delivery without the supermarket run.</p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;