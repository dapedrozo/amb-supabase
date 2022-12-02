import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import NotFound from "./components/layouts/NotFound";

const IndexPage = lazy(() => import("./pages/IndexPage"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const DashboardTramites = lazy(() => import("./pages/DashboardTramites"));
const VerTramites = lazy(() => import("./pages/VerTramites"));
const CambioPropietario = lazy(() => import("./components/tramites/CambioPropietario/CambioPropietario"));

import { GeneralContextProvider } from "./context/GeneralContext";

function App() {
  return (
    <>
      <GeneralContextProvider>
        <Navbar />
        <div style={{minHeight:"60vh"}}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/tramites" element={<DashboardTramites />} />
          <Route path="/tramites/cambio-propietario" element={<CambioPropietario />} />
          <Route path="/mis-tramites" element={<VerTramites />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
       
        <Footer />
      </GeneralContextProvider>
    </>
  );
}

export default App;
