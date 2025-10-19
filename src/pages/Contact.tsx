import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      // Réinitialiser le formulaire
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-white/90">
              Nous sommes là pour vous aider 24h/24 et 7j/7
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Coordonnées</h2>
                <div className="space-y-6 mb-8">
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                        <a href="tel:0763205981" className="text-muted-foreground hover:text-primary transition-colors">
                          07 63 20 59 81
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Appel gratuit - Intervention rapide
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Localisation</h3>
                        <p className="text-muted-foreground">Gasny, Eure (27)</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Déplacement dans toute la France
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Horaires</h3>
                        <p className="text-muted-foreground">Ouvert 24h/24 - 7j/7</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Service d'urgence disponible tous les jours
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">Urgence ? Appelez maintenant !</h3>
                    <p className="text-white/90 mb-4">
                      Pour un dépannage urgent, le moyen le plus rapide est de nous appeler directement.
                    </p>
                    <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 w-full" asChild>
                      <a href="tel:0763205981">
                        <Phone className="mr-2 h-5 w-5" />
                        Appeler Maintenant
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Formulaire de Contact</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" name="name" type="text" placeholder="Votre nom" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="06 12 34 56 78" />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Sujet</Label>
                        <Input id="subject" name="subject" type="text" placeholder="Objet de votre demande" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Décrivez votre besoin ou votre question..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        <Mail className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                      </Button>
                    </form>
                    
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Nous vous répondrons dans les plus brefs délais
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Zone d'Intervention</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bien que notre garage soit situé à Gasny dans l'Eure, nous intervenons <strong>partout en France</strong> 
                pour tous vos besoins de dépannage et de mécanique poids lourd. Aucune distance n'est trop grande 
                pour vous venir en aide !
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Normandie</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Île-de-France</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Hauts-de-France</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold">Toute la France</p>
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

export default Contact;
