import React from "react";
import Image from "next/image";
import { RiAddLine, RiDeleteBin6Fill, RiSubtractLine } from "@remixicon/react";

const CartItems = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container">
        {/* Title */}
        <div className="mb-8 space-y-1.5">
          <h3 className="text-3xl">Shopping Cart</h3>
          <p className="text-neutral-600">(2) items in you cart</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Mobile View */}
              <div className="md:hidden divide-y divide-gray-200">
                {/* Item */}
                <div className="p-4">
                  {/* Product */}
                  <div className="flex gap-4">
                    {/* Img */}
                    <div className="">
                      <Image
                        src="/product-1.avif"
                        alt={"item.name"}
                        width={80}
                        height={80}
                        className="rounded-md w-auto h-auto object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{"item.name"}</h3>
                      <p className="text-gray-600 mb-2">{"item.price"}</p>
                      {/* Counter */}
                      <div className="flex items-center gap-2 border border-gray-500 w-fit rounded-lg overflow-hidden">
                        <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition">
                          <RiSubtractLine size={18} />
                        </button>
                        <p className="px-3 font-medium">{0}</p>
                        <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition">
                          <RiAddLine size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Trash Icon */}
                    <button
                      className="text-red-500 hover:text-red-600 focus:text-red-600 transition-colors"
                      title="Delete item"
                    >
                      <RiDeleteBin6Fill size={20} />
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between">
                    <p className="text-gray-600">Subtotal:</p>
                    <p className="text-amber-600 font-cunia">${300}</p>
                  </div>
                </div>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:block overflow-x-hidden">
                <table className="min-w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {["Product", "Price", "Quantity", "Total"].map(
                        (label) => (
                          <th key={label} className="p-4 font-semibold">{label}</th>
                        ),
                      )}
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Item */}
                    <tr>
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          {/* Image */}
                          <div>
                            <Image
                              src="/product-1.avif"
                              alt="item.name"
                              width={80}
                              height={80}
                              className="rounded-md w-auto h-auto object-contain"
                            />
                          </div>
                          <p className="font-medium">{"item.name"}</p>
                        </div>
                      </td>
                      <td className="text-gray-700 p-4">${300}</td>
                      <td className="p-4">
                        {/* Count */}
                        <div className="flex items-center gap-2 border border-gray-500 w-fit rounded-lg overflow-hidden">
                          <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition">
                            <RiSubtractLine size={18} />
                          </button>
                          <p className="px-3 font-medium">{0}</p>
                          <button className="p-2 hover:bg-gray-100 focus:bg-gray-100 transition">
                            <RiAddLine size={18} />
                          </button>
                        </div>
                      </td>
                      {/* Total Price */}
                      <td className="text-amber-600 p-4 font-semibold">${1200}</td>
                      {/* Trash Icon */}
                      <td className="p-4">
                        <button
                          className="text-red-500 hover:text-red-600 focus:text-red-600 transition-colors"
                          title="Delete item"
                        >
                          <RiDeleteBin6Fill size={20} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="">Order Summary</div>
        </div>
      </div>
    </section>
  );
};
export default CartItems;
