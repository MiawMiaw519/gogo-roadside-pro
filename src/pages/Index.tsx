import { Phone, Wrench, Truck, Clock, MapPin, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Truck,
      title: "Dépannage Poids Lourd",
      description: "Intervention rapide 24h/24 pour tous types de poids lourds, partout en France",
    },
    {
      icon: Wrench,
      title: "Mécanique Générale",
      description: "15 ans d'expérience en mécanique pour véhicules anciens et nouveaux",
    },
    {
      icon: CheckCircle2,
      title: "Pneumatiques",
      description: "Vente et réparation de pneumatiques pour tous types de véhicules",
    },
  ];

  const testimonials = [
    {
      name: "Transport Dupont",
      text: "Service impeccable ! Intervention rapide et prix très compétitifs. Je recommande vivement.",
      rating: 5,
    },
    {
      name: "Jean-Pierre M.",
      text: "Khaled est un vrai professionnel. Il a su réparer mon camion rapidement. Très satisfait !",
      rating: 5,
    },
    {
      name: "Logistics Express",
      text: "Notre partenaire dépannage depuis 2 ans. Toujours disponible et efficace. Excellent rapport qualité-prix.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Dépannage Poids Lourd Professionnel
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Service rapide 24h/24 - Déplacement dans toute la France
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a href="tel:0763205981">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler Maintenant
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/services">
                    Découvrir nos services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Disponible 24h/24</h3>
                <p className="text-muted-foreground text-sm">Service d'urgence tous les jours</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Toute la France</h3>
                <p className="text-muted-foreground text-sm">Déplacement partout en France</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Prix Compétitifs</h3>
                <p className="text-muted-foreground text-sm">Vidange offerte après réparation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Des solutions complètes pour tous vos besoins en dépannage et mécanique poids lourd
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link to="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
              <p className="text-muted-foreground text-lg">La satisfaction de nos clients est notre priorité</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'un dépannage urgent ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Appelez-nous maintenant, nous intervenons rapidement
            </p>
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:0763205981">
                <Phone className="mr-2 h-5 w-5" />
                07 63 20 59 81
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
