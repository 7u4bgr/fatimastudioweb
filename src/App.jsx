import React from "react";
import "./App.css";
import { routeArr } from "./routes";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./components/UI/wrapper";
import PropsWrapper from "./components/UI/propswrapper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Wrapper>
                  <PropsWrapper>
                    <Header />
                    <item.component />
                    <Footer />
                  </PropsWrapper>
                </Wrapper>
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
