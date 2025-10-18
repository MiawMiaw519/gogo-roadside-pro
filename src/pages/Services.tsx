import { Phone, Truck, Wrench, Gauge, MapPin, Clock, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Dépannage Poids Lourd sur Site",
      description: "Intervention rapide pour tous types de pannes",
      details: [
        "Dépannage mécanique d'urgence",
        "Diagnostic électronique sur place",
        "Réparations temporaires pour retour au garage",
        "Remorquage si nécessaire",
        "Intervention 24h/24 - 7j/7",
      ],
    },
    {
      icon: Wrench,
      title: "Mécanique Générale",
      description: "15 ans d'expertise en mécanique tous véhicules",
      details: [
        "Entretien préventif et révisions",
        "Réparation moteur et boîte de vitesses",
        "Système de freinage",
        "Suspension et direction",
        "Véhicules anciens et nouveaux",
      ],
    },
    {
      icon: Gauge,
      title: "Pneumatiques",
      description: "Spécialiste du pneumatique poids lourd",
      details: [
        "Vente de pneumatiques de toutes marques",
        "Montage et équilibrage",
        "Réparation de pneus",
        "Contrôle de pression et géométrie",
        "Conseils sur le choix des pneumatiques",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl text-white/90">
              Des solutions complètes pour tous vos besoins en dépannage et mécanique poids lourd
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Nos Avantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Déplacement France Entière</h3>
                  <p className="text-muted-foreground">
                    Nous intervenons partout en France pour répondre à tous vos besoins de dépannage
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Service 24h/24</h3>
                  <p className="text-muted-foreground">
                    Disponibles tous les jours, à toute heure, pour vos urgences
                  </p>
                </div>
                <div className="text-center">
                  <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Vidange Offerte</h3>
                  <p className="text-muted-foreground">
                    Après chaque réparation, bénéficiez d'une vidange gratuite
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Prix Compétitifs Garantis</h2>
                <p className="text-xl text-white/90 mb-6">
                  Nous nous engageons à vous offrir les meilleurs tarifs du marché sans compromis sur la qualité. 
                  Demandez votre devis gratuit dès maintenant !
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <a href="tel:0763205981">
                      <Phone className="mr-2 h-5 w-5" />
                      Appelez pour un Devis
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href="/contact">
                      Contactez-nous
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Tous Types de Véhicules</h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Notre expertise couvre une large gamme de véhicules poids lourds, qu'ils soient anciens ou récents. 
                Nous disposons des outils et des connaissances nécessaires pour intervenir sur :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Camions porteurs</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Semi-remorques</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Tracteurs routiers</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Camions bennes</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Véhicules utilitaires</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Bus et cars</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
