import Best_Deals from "@/HomeSection/best_deals/page";
import Categories from "@/HomeSection/categories/page";
import Customer_Reviews from "@/HomeSection/customer_reviews/page";
import HeroSection from "@/HomeSection/heroSection/page";
import Newsletter from "@/HomeSection/newsletter/page";
import Why_Choose_Us from "@/HomeSection/why_choose_us/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Best_Deals></Best_Deals>
      <Why_Choose_Us></Why_Choose_Us>
      <Customer_Reviews></Customer_Reviews>
      <Newsletter></Newsletter>
      
    </div>
  );
}
