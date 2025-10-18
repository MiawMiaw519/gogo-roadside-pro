import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Gogo Dépannage PL</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Spécialiste du dépannage et de la mécanique pour poids lourds depuis 3 ans.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/forum" className="hover:text-primary transition-colors">
                  Forum & Conseils
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Dépannage poids lourd</li>
              <li>Mécanique générale</li>
              <li>Pneumatiques</li>
              <li>Déplacement France entière</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:0763205981" className="hover:text-primary transition-colors">
                  07 63 20 59 81
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Gasny, Eure (27)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>24h/24 - 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gogo Dépannage PL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
