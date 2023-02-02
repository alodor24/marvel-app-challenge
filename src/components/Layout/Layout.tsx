import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import FooterApp from "../FooterApp";
import NavbarApp from "../NavbarApp";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavbarApp />
      <main>{children}</main>
      <FooterApp />
    </>
  );
};

export default Layout;
