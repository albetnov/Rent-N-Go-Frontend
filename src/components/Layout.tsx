import { PropsWithChildren } from "react";
import Footer from "./Footer/Footer";
import Topbar from "./Topbar/Topbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
