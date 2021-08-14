import React, { lazy, Suspense } from "react";

// import NavigationBar from "./Component/Navigation/Navigation";

const NavigationBar = lazy(() => import("./Component/Navigation/Navigation"));

const Header = lazy(() => import("./Component/Header/Header"));
const Projects = lazy(() => import("./Component/Projects/Projects"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Footer = lazy(() => import("./Component/Footer/Footer"));

function App() {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <NavigationBar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
