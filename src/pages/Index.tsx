import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FoodCategories from "@/components/FoodCategories";
import RestaurantList from "@/components/RestaurantList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FoodCategories />
      <RestaurantList />
      <Footer />
    </div>
  );
};

export default Index;
