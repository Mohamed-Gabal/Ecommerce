import React from "react";
import PageTitle from "../components/PageTitle";
import CartItems from "../components/CartItems";

const ShoppingCart = () => {
  return (
    <>
      {/* Import The Title Component */}
      <PageTitle />

      {/* Import The CartItems Component */}
      <CartItems />
    </>
  );
};

export default ShoppingCart;
