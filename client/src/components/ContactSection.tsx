import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log("Form submission:", formData);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Consulta enviada exitosamente!",
        description: "Nos pondremos en contacto contigo dentro de las próximas 24 horas.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+56 2 2234 5678",
      action: "tel:+56222345678"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@villasdelujo.cl",
      action: "mailto:contacto@villasdelujo.cl"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      content: "Av. Providencia 1234, Providencia, Santiago",
      action: "#"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: "Lunes a Viernes: 9:00 - 18:00",
      action: "#"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conversemos Sobre Tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tu visión. Contáctanos para una consulta gratuita y personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Consulta Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+56 9 1234 5678"
                        data-testid="input-phone"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Tipo de Proyecto *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger data-testid="select-project-type">
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="villa-luxury">Villa de Lujo</SelectItem>
                          <SelectItem value="industrial">Proyecto Industrial</SelectItem>
                          <SelectItem value="commercial">Proyecto Comercial</SelectItem>
                          <SelectItem value="renovation">Renovación</SelectItem>
                          <SelectItem value="consultation">Consultoría</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Presupuesto Estimado</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger data-testid="select-budget">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Menos de $1M USD</SelectItem>
                        <SelectItem value="1m-3m">$1M - $3M USD</SelectItem>
                        <SelectItem value="3m-5m">$3M - $5M USD</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M USD</SelectItem>
                        <SelectItem value="over-10m">Más de $10M USD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Cuéntanos sobre tu proyecto, ubicación preferida, características especiales, o cualquier pregunta que tengas..."
                      rows={5}
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1" data-testid={`contact-title-${index}`}>
                          {info.title}
                        </h4>
                        <p className="text-sm text-muted-foreground" data-testid={`contact-content-${index}`}>
                          {info.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3">
                  ¿Necesitas Asesoría Inmediata?
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Nuestro equipo de expertos está disponible para responder tus preguntas sobre inversiones inmobiliarias de lujo.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  data-testid="button-immediate-consultation"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}