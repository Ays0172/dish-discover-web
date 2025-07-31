import { Facebook, Twitter, Instagram, Youtube, Smartphone, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-food-gradient rounded-lg p-2">
                <h3 className="text-xl font-bold text-white">FoodieFlow</h3>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Your favorite food delivered fast. Discover the best restaurants in your area and get delicious food delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Team</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/70">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/70">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/70">support@foodieflow.com</span>
              </div>
            </div>
            
            {/* App Download */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Download Our App</p>
              <div className="flex space-x-2">
                <div className="bg-background/10 rounded p-2 hover:bg-background/20 cursor-pointer transition-colors">
                  <Smartphone className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2024 FoodieFlow. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;