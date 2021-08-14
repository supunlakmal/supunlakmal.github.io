import React, { lazy, Suspense } from "react";

// import NavigationBar from "./Component/Navigation/Navigation";

const NavigationBar = lazy(() => import("./Component/Navigation/Navigation"));

function App() {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <NavigationBar />
    </Suspense>
  );
}

export default App;
