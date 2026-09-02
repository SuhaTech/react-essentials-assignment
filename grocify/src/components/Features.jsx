import {
  FaTruck,
  FaLeaf,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      desc: "Free delivery on orders above ₹499",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Products",
      desc: "100% Organic & Healthy",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Always ready to help you",
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payment",
      desc: "Fast & Safe Checkout",
    },
  ];

  return (
    <section className="section-shell bg-orange-50/70">
      <div className="section-frame">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="surface-card-soft p-6 text-center transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center text-4xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="mb-2 text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;