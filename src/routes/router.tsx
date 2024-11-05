import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Button } from "../pages/guide/Button";
import { MyPage } from "../pages/MyPage";
import { Main } from "../pages/Main";

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
    path: "main",
    element: <Main />,
  },
]);
