import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow h-full">{children}</main>
      <Footer />
    </div>
  );
}
