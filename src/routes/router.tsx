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
import { MyReview } from "../pages/review/MyReview";
import { EditProfile } from "../pages/EditProfile";
import { ProfileDetail } from "../pages/ProfileDetail";
import { Store } from "../pages/store/Store";
import ExchangeReturn from "../pages/order-history/ExchangeReturn";
import { ProductDetail } from "../pages/store/ProductDetail";
import { Reviews } from "../pages/store/Reviews";
import { Inquiries } from "../pages/inquiry/Inquiries";
import { WriteReview } from "../pages/review/WriteReview";
import { FindAccount } from "../pages/find-account/FindAccount";
import { FindAccountCheck } from "../pages/find-account/FindAccountCheck";
import { ResetPassword } from "../pages/find-account/ResetPassword";
import { InquiryDetail } from "../pages/inquiry/InquiryDetail";
import { MyPlants } from "../pages/MyPlants";

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
    path: "profile/edit",
    element: <EditProfile />,
  },
  {
    path: "profile",
    element: <ProfileDetail />,
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
  { path: "my-review", element: <MyReview /> },
  { path: "store", element: <Store /> },
  { path: "exchange-return", element: <ExchangeReturn /> },
  { path: "product/:id", element: <ProductDetail /> },
  { path: "reviews", element: <Reviews /> },
  { path: "review/write", element: <WriteReview /> },
  { path: "inquries", element: <Inquiries /> },
  { path: "inquries/:id", element: <InquiryDetail /> },
  { path: "find-account", element: <FindAccount /> },
  { path: "find-account/check", element: <FindAccountCheck type="password" /> },
  { path: "find-account/reset-password", element: <ResetPassword /> },
  { path: "my-plants", element: <MyPlants /> },
]);
