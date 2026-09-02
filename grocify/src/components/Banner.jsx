import allBanner from "../assets/all-banner.jpg";
import fruitsBanner from "../assets/fruits-banner.jpg";
import dairyBanner from "../assets/dairy-banner.jpg";
import seafoodBanner from "../assets/seafood-banner.jpg";

const banners = [
  {
    id: 1,
    title: "Fresh Fruits",
    subtitle: "Up to 50% OFF",
    image: fruitsBanner,
  },
  {
    id: 2,
    title: "Dairy Products",
    subtitle: "Daily Fresh",
    image: dairyBanner,
  },
  {
    id: 3,
    title: "Sea Food",
    subtitle: "Healthy & Fresh",
    image: seafoodBanner,
  },
];

const Banner = () => {
  return (
    <section className="section-shell">
      <div className="section-frame">

        {/* Main Banner */}

        <div className="mb-12 overflow-hidden surface-card">
          <img
            src={allBanner}
            alt="Offer Banner"
            className="w-full transition duration-500 hover:scale-105"
          />
        </div>

        {/* Small Banners */}

        <div className="grid gap-8 md:grid-cols-3">

          {banners.map((banner) => (
            <div
              key={banner.id}
              className="group relative overflow-hidden surface-card-soft"
            >

              <img
                src={banner.image}
                alt={banner.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/25 p-8">

                <p className="text-lg text-white">
                  {banner.subtitle}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {banner.title}
                </h2>

                <button className="btn-primary mt-5 px-5 py-2.5">
                  Shop Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Banner;