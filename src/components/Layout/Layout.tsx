import FooterApp from "../FooterApp";
import NavbarApp from "../NavbarApp";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarApp />
      <main>{children}</main>
      <FooterApp />
    </>
  );
};

export default Layout;
