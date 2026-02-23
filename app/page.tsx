import { categoryItems, testimonials } from "./data/data";
import Image from "next/image";
import { allProducts } from "./data/data";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { RiDoubleQuotesL } from "@remixicon/react";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="lg:mt-4 lg:px-4">
        <div
          className="container bg-[url('/hero-image.jpg')] bg-center bg-cover bg-no-repeat min-h-[75svh] flex items-center justify-center 
      flex-col text-white text-center lg:rounded-2xl"
        >
          <p className="text-amber-400 font-bold tracking-wide uppercase">
            Minimal interior design
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6x text-black">
            We minimize your waste
            <br />
            in every stop of the process.
          </h1>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="mt-16 relative z-10 lg:mt-36">
        <div className="container grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item) => (
            <div
              className="bg-white border border-amber-100 block md:hover:bg-amber-50 active:bg-amber-100 rounded-xl px-10 py-8 transition cursor-pointer"
              key={item.id}
            >
              {/* Title and Quantity */}
              <div>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-gray-500">{item.quantity}</p>
              </div>

              {/*Product and Image  */}
              <div className="max-w-max mx-auto mt-12">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pt-28">
        <div className="container">
          {/* TITLE */}
          <h2 className="section-title text-center">Explore All Products</h2>

          {/* Card Wrapper */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Btn */}
          <Link
            href="/shop"
            className="btn-primary block mt-14 mx-auto max-w-max"
          >
            View all products
          </Link>
        </div>
      </section>

      {/* Testimonails */}
      <section className="py-28">
        <div className="container">
          {/* Title */}
          <h2 className="section-title text-center">What Our Clients Say</h2>

          {/* Wrapper */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-11 lg:mt-14">
            {testimonials.map((testimonial) => (
              // Card
              <div
                className="bg-white rounded-xl p-8 flex flex-col items-center"
                key={testimonial.id}
              >
                <span className="text-amber-600 mb-3">
                  <RiDoubleQuotesL />
                </span>
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex flex-col items-center mt-auto">
                  {/* IMG */}
                  <div className="size-16">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={150}
                      height={150}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-3 text-center">
                    <h3>{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
