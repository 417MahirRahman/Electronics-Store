import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import Categories from "@/HomeSection/categories/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      <Navbar></Navbar>
      <Categories></Categories>
      <Footer></Footer>
    </div>
  );
}
