import { Search, MapPin, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-food-gradient rounded-lg p-2">
              <h1 className="text-xl font-bold text-white">FoodieFlow</h1>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">Deliver to:</span>
            <span className="text-muted-foreground">Mumbai, Maharashtra</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for restaurants, cuisines or dishes"
                className="pl-10 bg-background border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;