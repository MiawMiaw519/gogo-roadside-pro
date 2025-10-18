import { MessageSquare, ThumbsUp, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Forum = () => {
  const forumTopics = [
    {
      title: "Entretien préventif : à quelle fréquence ?",
      author: "Jean-Marc",
      date: "Il y a 2 jours",
      replies: 5,
      likes: 12,
      preview: "Bonjour à tous, je voulais savoir à quelle fréquence vous faites l'entretien de vos poids lourds...",
    },
    {
      title: "Problème de freinage sur semi-remorque",
      author: "Transport Pro",
      date: "Il y a 3 jours",
      replies: 8,
      likes: 15,
      preview: "J'ai remarqué un comportement étrange au freinage sur ma semi-remorque. Des conseils ?",
    },
    {
      title: "Meilleure marque de pneumatiques ?",
      author: "Pierre L.",
      date: "Il y a 5 jours",
      replies: 12,
      likes: 20,
      preview: "Je cherche à changer mes pneus. Quelles marques recommandez-vous pour un bon rapport qualité-prix ?",
    },
  ];

  const tips = [
    {
      title: "Contrôle quotidien avant départ",
      content: "Vérifiez toujours vos niveaux (huile, liquide de refroidissement, lave-glace), vos pneus et vos feux avant chaque départ.",
    },
    {
      title: "Économie de carburant",
      content: "Maintenez une vitesse constante et anticipez les freinages pour économiser jusqu'à 15% de carburant.",
    },
    {
      title: "Entretien des pneus",
      content: "Vérifiez la pression de vos pneus toutes les deux semaines. Une pression correcte prolonge leur durée de vie.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Forum & Conseils</h1>
            <p className="text-xl text-white/90">
              Échangez avec la communauté et bénéficiez de nos conseils d'experts
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">Discussions Récentes</h2>
                  <Button>Nouvelle Discussion</Button>
                </div>
                
                <div className="space-y-4">
                  {forumTopics.map((topic, index) => (
                    <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl">{topic.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{topic.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{topic.date}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{topic.preview}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-primary">
                            <MessageSquare className="w-4 h-4" />
                            <span>{topic.replies} réponses</span>
                          </div>
                          <div className="flex items-center gap-1 text-primary">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{topic.likes} likes</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">Voir Plus de Discussions</Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Conseils d'Experts</h3>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <Card key={index} className="bg-muted">
                      <CardHeader>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{tip.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 bg-gradient-to-br from-primary to-secondary text-white border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Besoin d'un conseil personnalisé ?</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
                    </p>
                    <Button variant="default" className="bg-accent hover:bg-accent/90 w-full" asChild>
                      <a href="tel:0763205981">Contactez-nous</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Communauté</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partagez vos expériences, posez vos questions et apprenez des autres professionnels du transport. 
                Le forum est un espace d'entraide et de partage de connaissances pour tous les passionnés de mécanique poids lourd.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Membres actifs</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Discussions</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-muted-foreground">Réponses d'experts</p>
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

export default Forum;
