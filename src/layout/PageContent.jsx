import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from "./MainNav";
import HomePage from "../containers/HomePage";
import ShopPage from "../containers/ShopPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetailPage from "../containers/ProductDetailPage";
import ContactPage from "../containers/ContactPage";
import BlogPage from "../containers/BlogPage";
import AboutPage from "../containers/AboutPage";

export const pages = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
  { path: "/product-detail", component: ProductDetailPage },
  { path: "/about", component: AboutPage },
  { path: "/blog", component: BlogPage },
  { path: "/contact", component: ContactPage },
];

export default function PageContent() {
  return (
    <BrowserRouter>
      <Header />
      <MainNav />
      <div className="my-32" />
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
      </Routes>
      <div className="my-10" />
      <Footer />
    </BrowserRouter>
  );
}
