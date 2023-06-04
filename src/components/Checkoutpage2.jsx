
import { react } from "react";
import { useMemo } from "react";
import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import Checkout from "../pages/Checkout";

import Home from "../pages/Home";
import Links from "./Links"

import { useParams } from "react-router-dom";

export default function Checkoutpage2(props) {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);
 
  return(
    <div>

      <p> { totalPrice } </p>
    </div>
  )
}