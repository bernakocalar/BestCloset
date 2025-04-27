import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContent from "./layout/PageContent";
import AuthInitializer from "./components/AuthInıtalizier";

function App() {
  return (
    <>
      <AuthInitializer />
      <PageContent />
    </>
  );
}

export default App;
