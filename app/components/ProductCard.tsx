import React from "react";
import { ProductCardProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { RiEyeLine, RiShoppingCart2Line, RiStarFill } from "@remixicon/react";

const ProductCard = ({ id, img, price, name, star }: ProductCardProps) => {
  return (
    <div className="bg-white p-8 rounded-md flex flex-col relative group gap-2.5">
      {/* Image */}
      <div className="py-10 relative flex items-center justify-center h-full rounded-xl">
        <Image
          src={img}
          alt={name}
          width={200}
          height={200}
          className="w-auto h-auto object-contain"
        />

        {/* Btn */}
        <Link
          href={`/shop/${id}`}
          className="absolute top-0 right-0 gap-2 border border-amber-200 p-2 rounded-xs 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 
          hover:text-amber-600 focus:text-amber-600 transition-all"
          title="View product details"
        >
          <RiEyeLine />
        </Link>
      </div>

      {/* Content */}
      <div className="space-y-5 mt-auto">
        {/* Add to cart btn */}
        <button className="btn-primary flex items-center justify-center w-full">
          <span>
            <RiShoppingCart2Line size={22} />
          </span>
          Add To Cart
        </button>

        <div className="space-y-1">
          <h3 className="text-xl">{name}</h3>
          <p className="text-amber-700 font-semibold">{price}</p>

          {/* Stars */}
          <div className="flex items-center gap-0.5 text-amber-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <RiStarFill key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
