import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainNav from "./MainNav";
import HomePage from "../containers/HomePage";
import ShopPage from "../containers/ShopPage";

export const pages = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
];

export default function PageContent() {
  return (
    <BrowserRouter>
      <Header />
      <MainNav />
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
