import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Política de Privacidad
              </h1>
              <p className="text-muted-foreground text-sm">
                Última actualización: {new Date().toLocaleDateString('es-CL')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
              {/* Introduction */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Introducción
                </h2>
                <p>
                  United Developers ("la Empresa") respeta la privacidad de sus usuarios y visitantes. 
                  Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos 
                  la información personal de conformidad con la Ley 19.628 sobre Protección de la Vida Privada 
                  de la República de Chile.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. Información que Recopilamos
                </h2>
                <p>
                  Recopilamos información que usted proporciona voluntariamente, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Nombre completo y datos de contacto (correo electrónico, teléfono)</li>
                  <li>Información de empresa (nombre, posición, ramo de negocio)</li>
                  <li>Domicilio y ubicación geográfica</li>
                  <li>Información sobre proyectos e intereses profesionales</li>
                  <li>Datos técnicos de navegación (dirección IP, tipo de navegador, páginas visitadas)</li>
                  <li>Información de cookies y similares tecnologías de rastreo</li>
                </ul>
              </section>

              {/* Data Use */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. Uso de la Información
                </h2>
                <p>
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Proporcionar y mejorar nuestros servicios y productos</li>
                  <li>Responder a sus consultas y solicitudes</li>
                  <li>Enviar información sobre proyectos, servicios y novedades de United Developers</li>
                  <li>Analizar el uso del sitio web y optimizar la experiencia del usuario</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Prevenir actividades fraudulentas o ilícitas</li>
                  <li>Establecer, ejercer o defender acciones legales</li>
                </ul>
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Base Legal para el Tratamiento de Datos
                </h2>
                <p>
                  De conformidad con la Ley 19.628, el tratamiento de sus datos personales se realiza sobre la base de:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Su consentimiento libre, expreso e informado</li>
                  <li>El cumplimiento de una obligación legal</li>
                  <li>La protección de derechos e intereses vitales del titular</li>
                  <li>El interés legítimo de United Developers en proporcionar servicios eficientes</li>
                </ul>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Medidas de Seguridad
                </h2>
                <p>
                  United Developers implementa medidas de seguridad técnicas, administrativas y físicas 
                  para proteger sus datos personales contra acceso no autorizado, alteración, pérdida o destrucción. 
                  Estas medidas incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Encriptación de datos en tránsito y reposo</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Sistemas de autenticación segura</li>
                  <li>Auditorías periódicas de seguridad</li>
                  <li>Capacitación de personal en protección de datos</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Compartición de Información
                </h2>
                <p>
                  United Developers no comparte sus datos personales con terceros sin su consentimiento, 
                  excepto en los siguientes casos:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Cuando sea requerido por ley o por orden judicial</li>
                  <li>Con proveedores de servicios bajo acuerdos de confidencialidad</li>
                  <li>En caso de fusión, adquisición o venta de activos</li>
                  <li>Con su consentimiento expreso</li>
                </ul>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Derechos del Titular de Datos
                </h2>
                <p>
                  Conforme a la Ley 19.628, usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Derecho de Acceso:</strong> Acceder a sus datos personales en nuestro poder</li>
                  <li><strong>Derecho de Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                  <li><strong>Derecho de Supresión:</strong> Solicitar la eliminación de sus datos personales</li>
                  <li><strong>Derecho de Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                  <li><strong>Derecho de Bloqueo:</strong> Solicitar el bloqueo temporal de sus datos</li>
                  <li><strong>Derecho a Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                </ul>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  8. Cookies y Tecnologías de Rastreo
                </h2>
                <p>
                  Nuestro sitio web utiliza cookies y similares tecnologías de rastreo para mejorar 
                  la experiencia del usuario. Las cookies pueden incluir:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Cookies esenciales para la funcionalidad del sitio</li>
                  <li>Cookies analíticas para entender el comportamiento del usuario</li>
                  <li>Cookies de preferencias para recordar sus configuraciones</li>
                </ul>
                <p className="mt-4">
                  Puede controlar o eliminar las cookies a través de la configuración de su navegador.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  9. Retención de Datos
                </h2>
                <p>
                  Retenedremos sus datos personales durante el tiempo necesario para cumplir los fines 
                  para los cuales fueron recopilados, o según lo requiera la ley. Una vez que la información 
                  ya no sea necesaria, procederemos a su eliminación o anonimización de manera segura.
                </p>
              </section>

              {/* Third Parties */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  10. Servicios de Terceros
                </h2>
                <p>
                  Nuestro sitio web puede contener enlaces a servicios de terceros. No somos responsables 
                  por las prácticas de privacidad de terceros. Le recomendamos revisar sus políticas de privacidad.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  11. Privacidad de Menores
                </h2>
                <p>
                  Nuestro sitio no se dirige intencionalmente a menores de 18 años. No recopilamos 
                  intencionalmente datos personales de menores sin el consentimiento de sus padres o tutores.
                </p>
              </section>

              {/* Policy Changes */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  12. Cambios a esta Política
                </h2>
                <p>
                  United Developers se reserva el derecho de modificar esta Política de Privacidad 
                  en cualquier momento. Los cambios significativos serán notificados por correo electrónico 
                  o mediante un aviso destacado en nuestro sitio web.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  13. Contacto
                </h2>
                <p>
                  Para ejercer sus derechos relacionados con privacidad o si tiene preguntas sobre esta política, 
                  por favor contacte a:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-2">
                  <p><strong>United Developers</strong></p>
                  <p>Encargado de Protección de Datos</p>
                  <p>
                    <a href="mailto:privacy@uniteddevelopers.com" className="text-primary hover:underline">
                      privacy@uniteddevelopers.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Legal Compliance */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  14. Cumplimiento Legal
                </h2>
                <p>
                  Esta Política de Privacidad cumple con los requisitos establecidos en:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Ley 19.628 sobre Protección de la Vida Privada</li>
                  <li>Ley 20.285 sobre Acceso a la Información Pública</li>
                  <li>Ley 21.096 que Regula los Derechos y Deberes que Tienen los Usuarios de Servicios Digitales</li>
                  <li>Reglamentos complementarios y normativas aplicables en Chile</li>
                </ul>
              </section>

              {/* Acceptance */}
              <section className="bg-primary/5 p-6 rounded-lg">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  15. Aceptación de la Política
                </h2>
                <p>
                  Al utilizar nuestro sitio web y servicios, usted acepta esta Política de Privacidad 
                  y sus términos. Si no está de acuerdo con alguna parte de esta política, 
                  le recomendamos no utilizar nuestros servicios.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
