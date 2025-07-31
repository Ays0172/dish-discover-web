import RestaurantCard from "./RestaurantCard";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import saladImg from "@/assets/salad.jpg";

const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    image: pizzaImg,
    cuisine: "Pizza, Italian, Fast Food",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    distance: "2.5 km",
    offer: "50% OFF",
    price: "₹200 for two",
  },
  {
    id: 2,
    name: "McDonald's",
    image: burgerImg,
    cuisine: "Burger, Fast Food, American",
    rating: 4.1,
    deliveryTime: "20-25 mins",
    distance: "1.8 km",
    offer: "Buy 1 Get 1",
    price: "₹300 for two",
  },
  {
    id: 3,
    name: "Paradise Biryani",
    image: biryaniImg,
    cuisine: "Biryani, North Indian, Hyderabadi",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    distance: "3.2 km",
    price: "₹400 for two",
  },
  {
    id: 4,
    name: "Healthy Bites",
    image: saladImg,
    cuisine: "Healthy Food, Salads, Continental",
    rating: 4.4,
    deliveryTime: "20-25 mins",
    distance: "1.5 km",
    offer: "30% OFF",
    price: "₹350 for two",
  },
  {
    id: 5,
    name: "Pizza Hut",
    image: pizzaImg,
    cuisine: "Pizza, Italian, Fast Food",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    distance: "2.8 km",
    price: "₹450 for two",
  },
  {
    id: 6,
    name: "KFC",
    image: burgerImg,
    cuisine: "Burger, Fast Food, American",
    rating: 4.0,
    deliveryTime: "25-30 mins",
    distance: "2.1 km",
    offer: "Free Delivery",
    price: "₹350 for two",
  },
];

const RestaurantList = () => {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Restaurants near you
            </h2>
            <p className="text-muted-foreground">
              Discover amazing restaurants in your area
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Relevance
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
              Delivery Time
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
              Rating
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
              Cost: Low to High
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-outline border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View More Restaurants
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;