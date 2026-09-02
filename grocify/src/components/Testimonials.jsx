import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";
import customer5 from "../assets/customer5.jpg";

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    image: customer1,
    name: "Sophia",
    review:
      "Excellent quality vegetables and fruits. Delivery was very fast.",
  },
  {
    id: 2,
    image: customer2,
    name: "William",
    review:
      "Fresh products every time. I really love shopping from Grocify.",
  },
  {
    id: 3,
    image: customer3,
    name: "Emma",
    review:
      "Very clean packaging and amazing customer support.",
  },
  {
    id: 4,
    image: customer4,
    name: "James",
    review:
      "Affordable prices with premium quality products.",
  },
  {
    id: 5,
    image: customer5,
    name: "Olivia",
    review:
      "Highly recommended for organic groceries.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-shell bg-orange-50/70">

      <div className="section-frame">

        <div className="mb-14 text-center">

          <p className="section-eyebrow">
            Testimonials
          </p>

          <h2 className="section-title">
            What Our Customers Say
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="surface-card-soft p-8 transition duration-300 hover:-translate-y-1"
            >

              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-orange-100"
              />

              <h3 className="mt-4 text-center text-xl font-bold">
                {item.name}
              </h3>

              <div className="mt-3 flex justify-center gap-1">

                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-5 text-center text-slate-500">
                {item.review}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;