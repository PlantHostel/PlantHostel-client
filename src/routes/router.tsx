import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Button } from "../pages/guide/Button";
import { MyPage } from "../pages/MyPage";
import { Signup } from "../pages/Signup";
import { Main } from "../pages/Main";
import { SignupExtra } from "../pages/SignupExtra";
import { CheckReservation } from "../pages/CheckReservation";

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
    path: "main",
    element: <Main />,
  },
  {
    path: "signup-ex",
    element: <SignupExtra />,
  },
  {
    path: "reservation/:id",
    element: <CheckReservation />,
  },
]);
