import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import Footer from "./components/common/Footer";
import styled from "styled-components";

function App() {
  return (
    <>
      <Section>
        <RouterProvider router={router}></RouterProvider>
      </Section>
      <Footer />
    </>
  );
}

const Section = styled.div`
  padding: 0px 20px;
`;

export default App;
