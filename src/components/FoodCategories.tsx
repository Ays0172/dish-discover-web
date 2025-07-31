import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import saladImg from "@/assets/salad.jpg";

const categories = [
  { id: 1, name: "Pizza", image: pizzaImg, count: "120+ restaurants" },
  { id: 2, name: "Burgers", image: burgerImg, count: "85+ restaurants" },
  { id: 3, name: "Biryani", image: biryaniImg, count: "200+ restaurants" },
  { id: 4, name: "Healthy", image: saladImg, count: "95+ restaurants" },
  { id: 5, name: "Chinese", image: pizzaImg, count: "150+ restaurants" },
  { id: 6, name: "South Indian", image: biryaniImg, count: "180+ restaurants" },
];

const FoodCategories = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            What's on your mind?
          </h2>
          <p className="text-muted-foreground">
            Browse through our most popular food categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer p-4 rounded-xl hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-3">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full overflow-hidden shadow-card-soft group-hover:shadow-food transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;