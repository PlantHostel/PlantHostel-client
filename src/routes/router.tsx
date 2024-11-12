import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Button } from "../pages/guide/Button";
import { MyPage } from "../pages/MyPage";
import { Signup } from "../pages/Signup";
import { Main } from "../pages/Main";
import { SignupExtra } from "../pages/SignupExtra";
import { ReservationDetail } from "../pages/reservation/ReservationDetail";
import ReservationCheck from "../pages/reservation/ReservationCheck";
import { Reservation } from "../pages/reservation/Reservation";
import RegistrationPlant from "../pages/RegistrationPlant";
import OrderHistory from "../pages/order-history/OrderHistory";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "guide/button",
    element: <Button />,
  },
  {
    path: "mypage",
    element: <MyPage />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "signup-ex",
    element: <SignupExtra />,
  },
  {
    path: "reservation",
    element: <ReservationCheck />,
  },
  {
    path: "reservation/:id",
    element: <ReservationDetail />,
  },
  {
    path: "hospitals/reservation",
    element: <Reservation type={"hospital"} />,
  },
  {
    path: "hotels/reservation",
    element: <Reservation type={"hotel"} />,
  },
  {
    path: "registration/plant",
    element: <RegistrationPlant />,
  },
  {
    path: "order-history",
    element: <OrderHistory />,
  },
]);
