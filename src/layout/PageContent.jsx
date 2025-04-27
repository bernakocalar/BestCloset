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
import TeamPage from "../containers/TeamPage";
import SignupForm from "../containers/SignUpForm";
import Cart from "../containers/CartPage";
import Favorites from "../containers/Favorites";
import Checkout from "../containers/ShippingPage";

export const pages = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
  { path: "/about", component: AboutPage },
  { path: "/blog", component: BlogPage },
  { path: "/contact", component: ContactPage },
  { path: "/team", component: TeamPage },
  { path: "/signup", component: SignupForm },
  { path: "/product-detail/:id", component: ProductDetailPage },
  { path: "/cart", component: Cart },
  { path: "/favorites", component: Favorites },
  { path: "shipping", component: Checkout },
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
