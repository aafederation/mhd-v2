import { HeadMatter } from "./HeadMatter";
import { TopBar } from "./TopBar";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <HeadMatter />
      <TopBar />
      <Menu />
      {children}
      <Footer />
    </>
  );
};
