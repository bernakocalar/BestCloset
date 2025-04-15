import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from "./MainNav";
import HomePage from "../containers/HomePage";
import ShopPage from "../containers/ShopPage";
import Header from "./Header";
import Footer from "./Footer";

export const pages = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
];

export default function PageContent() {
  return (
    <BrowserRouter>
      <Header/>
      <MainNav />
      <div className="my-32"/>
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
      </Routes>
      <div className="my-10"/>
      <Footer/>
    </BrowserRouter>
  );
}
