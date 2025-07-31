import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient py-12 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your favorite
                <span className="bg-food-gradient bg-clip-text text-transparent"> food</span>
                <br />
                delivered fast
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover the best restaurants in your area and get delicious food delivered to your doorstep in minutes.
              </p>
            </div>

            {/* Delivery Location Input */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Enter your delivery location</span>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Enter your address"
                    className="bg-background border-border focus:border-primary pl-4 h-12"
                  />
                </div>
                <Button variant="food" size="lg" className="h-12 px-8">
                  <Search className="h-4 w-4 mr-2" />
                  Find Food
                </Button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Pizza', 'Biryani', 'Burger', 'Chinese', 'South Indian'].map((item) => (
                  <button
                    key={item}
                    className="px-3 py-1 text-sm bg-background border border-border rounded-full hover:border-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={heroFood}
                alt="Delicious food spread"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-background rounded-lg shadow-card-soft p-3 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">30</span>
                </div>
                <div>
                  <p className="text-xs font-medium">mins</p>
                  <p className="text-xs text-muted-foreground">Delivery</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-card-soft p-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-food-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">4.8</span>
                </div>
                <div>
                  <p className="text-xs font-medium">Rating</p>
                  <p className="text-xs text-muted-foreground">1000+ orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;