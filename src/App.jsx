import React from "react"
// App.jsx veya index.js içinde
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContent from "./layout/PageContent";
import HomePage from "./containers/HomePage"

function App() {
 
  return (
 <>
  <PageContent/>
    <HomePage/>
    </>
)
}

export default App;
