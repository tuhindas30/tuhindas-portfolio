import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import GetInTouchSection from "../components/GetInTouchSection";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      <main className="wrapper">{children}</main>
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
