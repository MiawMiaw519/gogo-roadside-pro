import { Phone, HelpCircle, Wrench, AlertTriangle, Settings, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Forum = () => {
  const faqs = [
    {
      question: "À quelle fréquence dois-je faire l'entretien de mon poids lourd ?",
      answer: "Pour un entretien optimal, nous recommandons une révision complète tous les 30 000 km ou tous les 6 mois. Cependant, certaines vérifications doivent être effectuées plus fréquemment : niveau d'huile (toutes les semaines), pression des pneus (toutes les 2 semaines), et liquides (mensuel). Un entretien régulier prolonge la durée de vie de votre véhicule et évite les pannes coûteuses.",
    },
    {
      question: "Que faire en cas de panne sur l'autoroute ?",
      answer: "En cas de panne : 1) Allumez vos feux de détresse immédiatement. 2) Essayez de vous garer sur la bande d'arrêt d'urgence si possible. 3) Placez votre triangle de signalisation à 30m minimum. 4) Évacuez le véhicule et mettez-vous en sécurité derrière les glissières. 5) Appelez-nous immédiatement au 07 63 20 59 81 pour un dépannage d'urgence. Nous intervenons 24h/24 partout en France.",
    },
    {
      question: "Combien coûte un dépannage poids lourd ?",
      answer: "Le coût dépend de plusieurs facteurs : la nature de la panne, votre localisation, et l'heure d'intervention. Nous proposons les tarifs les plus compétitifs du marché. Appelez-nous pour un devis gratuit et immédiat. Bonus : après chaque réparation, vous bénéficiez d'une vidange gratuite !",
    },
    {
      question: "Intervenez-vous partout en France ?",
      answer: "Oui ! Bien que notre garage soit basé à Gasny dans l'Eure, nous nous déplaçons partout en France pour vos dépannages urgents. Notre service est disponible 24h/24 et 7j/7. Aucune distance n'est trop grande pour vous venir en aide.",
    },
    {
      question: "Quels sont les signes d'un problème de freinage ?",
      answer: "Surveillez ces signes d'alerte : 1) Bruit anormal (grincement, sifflement) au freinage. 2) Pédale de frein molle ou qui s'enfonce trop. 3) Véhicule qui tire d'un côté au freinage. 4) Témoin lumineux allumé au tableau de bord. 5) Distance de freinage augmentée. Si vous constatez l'un de ces symptômes, contactez-nous immédiatement pour une inspection. La sécurité ne doit jamais être compromise.",
    },
    {
      question: "Comment choisir les bons pneumatiques pour mon camion ?",
      answer: "Le choix des pneumatiques dépend de : 1) Type de véhicule et charge transportée. 2) Conditions d'utilisation (autoroute, chantier, mixte). 3) Saison (été, hiver, 4 saisons). 4) Budget disponible. Nous vous conseillons sur les meilleures marques selon vos besoins et proposons un excellent rapport qualité-prix. Appelez-nous pour un conseil personnalisé.",
    },
  ];

  const expertTips = [
    {
      icon: Settings,
      title: "Contrôle quotidien avant départ",
      content: "Avant chaque trajet, vérifiez : niveaux d'huile et liquide de refroidissement, pression des pneus (à froid), fonctionnement de tous les feux, état des freins, et serrage des roues. Ce contrôle de 10 minutes peut vous éviter des pannes coûteuses.",
    },
    {
      icon: Lightbulb,
      title: "Économie de carburant",
      content: "Pour réduire votre consommation : maintenez une vitesse stable (utilisez le régulateur), anticipez les freinages et accélérations, vérifiez régulièrement la pression des pneus (sous-gonflage = surconsommation), et évitez la surcharge inutile. Économie possible : jusqu'à 20% !",
    },
    {
      icon: AlertTriangle,
      title: "Signes avant-coureurs de panne",
      content: "Soyez attentif à ces signaux : bruits inhabituels (moteur, freins, suspension), voyants allumés, consommation anormale, fumée d'échappement colorée, vibrations, ou perte de puissance. Intervenir tôt évite les pannes graves. Appelez-nous au moindre doute.",
    },
    {
      icon: Wrench,
      title: "Entretien préventif hivernal",
      content: "Avant l'hiver : vérifiez l'antigel, testez la batterie (le froid réduit sa capacité), contrôlez l'état des pneus, vérifiez les balais d'essuie-glace, et faites le plein de lave-glace antigel. Une préparation adéquate garantit votre sécurité.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ & Conseils d'Experts</h1>
            <p className="text-xl text-white/90">
              Trouvez rapidement les réponses à vos questions et bénéficiez de nos conseils professionnels
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">Questions Fréquentes</h2>
                  <p className="text-muted-foreground">
                    Trouvez les réponses aux questions les plus courantes sur le dépannage et l'entretien poids lourd
                  </p>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="font-semibold">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Card className="mt-8 bg-muted">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Vous ne trouvez pas votre réponse ?</h3>
                    <p className="text-muted-foreground mb-4">
                      Contactez-nous directement ! Notre équipe d'experts est disponible 24h/24 pour répondre 
                      à toutes vos questions et vous conseiller personnellement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1">
                        <a href="tel:0763205981">
                          <Phone className="mr-2 h-4 w-4" />
                          Appeler Maintenant
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <a href="/contact">Formulaire de Contact</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Conseils d'Experts</h3>
                <div className="space-y-4">
                  {expertTips.map((tip, index) => (
                    <Card key={index} className="hover:border-primary transition-colors">
                      <CardHeader>
                        <tip.icon className="w-8 h-8 text-primary mb-2" />
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
                    <h4 className="font-semibold text-lg mb-2">Besoin d'un conseil sur mesure ?</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Nos experts vous conseillent gratuitement par téléphone. N'hésitez pas !
                    </p>
                    <Button variant="default" className="bg-accent hover:bg-accent/90 w-full" asChild>
                      <a href="tel:0763205981">
                        <Phone className="mr-2 h-4 w-4" />
                        07 63 20 59 81
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Pourquoi Faire Confiance à Gogo Dépannage PL ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15 ans</div>
                    <p className="text-muted-foreground">d'expérience en mécanique</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-muted-foreground">Service disponible</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">France</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-lg text-muted-foreground">
                Seul spécialiste du dépannage poids lourd dans l'Eure, nous mettons notre expertise à votre service 
                pour garantir votre sécurité et celle de votre véhicule. Intervention rapide, tarifs compétitifs, 
                et vidange offerte après chaque réparation !
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Forum;
