// src/layout/Layout.js
import Header from "@/components/Header";
// import Footer from "@/components/Footer"; // 나중에 추가

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
