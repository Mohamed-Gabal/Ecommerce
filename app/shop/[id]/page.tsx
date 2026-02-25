"use client";

import { productFeatures } from "@/app/data/data";
import {
  RiArrowLeftLine,
  RiShoppingCart2Line,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetails = () => {

  const params = useParams();
  console.log(params);
  const productId = parseInt(params.id as string);
  console.log(productId);

  return (
    <>
      {/* PageTitle Component  */}
      <div className="bg-amber-50 text-center flex flex-col gap-1 items-center justify-center min-h-56 p-5">
        <h2 className="text-3xl text-neutral-800">Product Details</h2>

        <p className="text-gray-600 max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicihg elit. Fugiat illum
          totam lipero.
        </p>
      </div>

      {/* Section for product details */}
      <section className="py-20">
        <div className="container">
          {/* Bread Crumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link
              href={"/"}
              className="hover:text-amber-600 focus:text-amber-600 transition"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href={"/shop"}
              className="hover:text-amber-600 focus:text-amber-600 transition"
            >
              Shop
            </Link>
            <span>/</span>
            <p className="text-gray-800">Product</p>
          </div>

          {/* Back Btn */}
          <Link
            href={""}
            className="text-amber-600 hover:text-amber-700 inline-flex items-center gap-2 mb-8 font-medium focus:text-amber-700 transition-colors"
          >
            <RiArrowLeftLine />
            Back To Shop
          </Link>

          {/* Wrapper */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="aspect-auto rounded-2xl overflow-hidden p-5">
              <Image src={'/product-1.avif'} alt="" width={600} height={600} className="w-full h-full object-contain"/>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              {/* Category */}
              <p className="text-sm text-amber-600 font-medium">
                {"Product Category"}
              </p>
              {/* Title */}
              <h3 className="text-2xl text-gray-800">{"Product.name"}</h3>
              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <RiStarFill key={i} />
                  ))}
                </div>
                <p>{"Product.star"}. 127 Reviews</p>
              </div>

              {/* Price */}
              <p className="text-2xl font-bold font-cunia text-amber-600">
                ${"Product.price"}
              </p>
              {/* Description */}
              <p>{"Product.desc"}</p>

              {/* Add To Cart */}
              <button className="btn-primary flex items-center gap-1">
                <span className="shrink-0">
                  <RiShoppingCart2Line size={20} />
                </span>
                Add To Cart
              </button>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                {productFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <span className="shrink-0 text-amber-600">
                      <feature.icon />
                    </span>
                    <div>
                      <p className="font-cunia">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
