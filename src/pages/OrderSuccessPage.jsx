import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { resetCurrentOrder } from "../features/order/orderSlice";

export default function OrderSuccessPage() {
  const {orderId} = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    //reset cart
    dispatch(resetCartAsync(user.id));
    //reset current order
    dispatch(resetCurrentOrder())
  },[dispatch, user.id])
  
  return (
    <>
    {!orderId && <Navigate to='/' replace={true}></Navigate>}
    <main className="h-screen flex justify-center items-center bg-white">
      <div className="text-center px-3">
        <p className="text-base font-semibold text-indigo-600">
        Congratulations! Your order has been placed successfully.
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Order Number
          #{orderId}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          You can check your order status under:
          <br/>
          My Orders
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
