import { Clock, Award, Wrench, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de nous</h1>
            <p className="text-xl text-white/90">Votre partenaire de confiance pour le dépannage poids lourd</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gogo Dépannage PL est né de la passion et de l'expertise de Khaled, un professionnel chevronné 
                de la mécanique poids lourd. Avec 15 ans d'expérience en mécanique générale et 3 ans spécialisés 
                dans le dépannage, nous sommes devenus la référence dans l'Eure pour tous vos besoins en 
                maintenance et réparation de poids lourds.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Basés à Gasny dans l'Eure, nous sommes fiers d'être le seul spécialiste du dépannage poids lourd 
                dans la région, offrant un service unique et incomparable. Notre engagement ? Vous garantir une 
                intervention rapide, professionnelle et à des prix compétitifs, où que vous soyez en France.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Rapidité</h3>
                  <p className="text-muted-foreground">
                    Intervention d'urgence 24h/24 pour minimiser vos temps d'arrêt
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Expertise</h3>
                  <p className="text-muted-foreground">
                    15 ans d'expérience en mécanique et formation continue
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Qualité</h3>
                  <p className="text-muted-foreground">
                    Des réparations durables avec des pièces de qualité
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Prix Justes</h3>
                  <p className="text-muted-foreground">
                    Tarifs compétitifs et transparents, vidange offerte après réparation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Notre Engagement</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    <strong>Disponibilité totale :</strong> Nous sommes disponibles 24h/24 et 7j/7 pour répondre 
                    à tous vos besoins urgents de dépannage.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    <strong>Couverture nationale :</strong> Bien que basés dans l'Eure, nous nous déplaçons 
                    partout en France pour vous servir.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    <strong>Polyvalence :</strong> Nous travaillons sur tous types de véhicules, des modèles 
                    les plus anciens aux plus récents.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    <strong>Avantages exclusifs :</strong> Chaque réparation effectuée vous donne droit à une 
                    vidange gratuite, pour un entretien optimal de votre véhicule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nous sommes le seul spécialiste du dépannage poids lourd dans l'Eure, avec une expertise 
              inégalée et un service client irréprochable. Faites confiance à des professionnels passionnés 
              par leur métier.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
