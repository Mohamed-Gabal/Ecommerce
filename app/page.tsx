import { categoryItems } from "./data/data";
import Image from "next/image";
import { allProducts } from "./data/data";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

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
      <section className="">
        <div className="container">
          {/* Title */}
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
      </section>
    </>
  );
};
export default Home;
