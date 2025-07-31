import { Clock, Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  distance: string;
  offer?: string;
  price: string;
}

const RestaurantCard = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  distance,
  offer,
  price,
}: RestaurantCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card-soft hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {offer && (
          <div className="absolute top-3 left-3">
            <Badge variant="destructive" className="bg-primary text-primary-foreground">
              {offer}
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm">{cuisine}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-success-gradient text-white px-2 py-1 rounded">
              <Star className="h-3 w-3 fill-current" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{deliveryTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{distance}</span>
          </div>
          <div className="font-medium text-foreground">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;