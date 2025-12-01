import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Términos de Servicio
              </h1>
              <p className="text-muted-foreground text-sm">
                Última actualización: {new Date().toLocaleDateString('es-CL')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
              {/* Introduction */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder y utilizar este sitio web y los servicios ofrecidos por United Developers 
                  ("la Empresa"), usted acepta estar vinculado por estos Términos de Servicio. 
                  Si no está de acuerdo con alguna parte de estos términos, le recomendamos que no utilice nuestros servicios.
                </p>
              </section>

              {/* Definitions */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. Definiciones
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Sitio Web:</strong> El conjunto de páginas web, recursos y servicios ofrecidos en www.uniteddevelopers.com</li>
                  <li><strong>Usuario:</strong> Toda persona que accede y utiliza el Sitio Web</li>
                  <li><strong>Contenido:</strong> Toda información, texto, gráficos, imágenes, videos y datos publicados en el Sitio Web</li>
                  <li><strong>Servicios:</strong> Los servicios profesionales y consultoría ofrecidos por United Developers</li>
                </ul>
              </section>

              {/* Use License */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. Licencia de Uso
                </h2>
                <p>
                  United Developers le otorga una licencia limitada, no exclusiva, no transferible e intransmisible 
                  para acceder y utilizar el Sitio Web únicamente para propósitos personales y no comerciales, 
                  de conformidad con estos Términos de Servicio.
                </p>
                <p className="mt-4">
                  Está prohibido:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Reproducir, distribuir, transmitir o vender cualquier Contenido</li>
                  <li>Utilizar tecnologías de scraping o minería de datos</li>
                  <li>Intentar acceder a áreas restringidas del Sitio Web</li>
                  <li>Interferir con la funcionalidad del Sitio Web</li>
                  <li>Utilizar el Sitio Web para fines ilegales o no autorizados</li>
                  <li>Infringir derechos de propiedad intelectual de terceros</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Derechos de Propiedad Intelectual
                </h2>
                <p>
                  Todo el Contenido del Sitio Web, incluyendo pero no limitado a textos, gráficos, logos, 
                  imágenes, vídeos, arquitecturas, fotografías de proyectos y diseños, es propiedad de 
                  United Developers o de terceros de quienes hemos obtenido licencia. 
                  Los derechos de autor están protegidos por las leyes de la República de Chile.
                </p>
                <p className="mt-4">
                  Queda expresamente prohibida la reproducción, distribución, comunicación pública, 
                  transformación o cualquier otra explotación del Contenido sin autorización previa y escrita de United Developers.
                </p>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Responsabilidades del Usuario
                </h2>
                <p>
                  El Usuario es responsable de:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Mantener la confidencialidad de cualquier contraseña o información de acceso</li>
                  <li>Garantizar que la información proporcionada es exacta y completa</li>
                  <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                  <li>No utilizar el Sitio Web de manera que pueda dañar, incapacitar o sobrecargar los servidores</li>
                  <li>No realizar actividades discriminatorias, ofensivas o ilegales</li>
                  <li>Notificar inmediatamente a United Developers sobre cualquier uso no autorizado de su cuenta</li>
                </ul>
              </section>

              {/* Services Description */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Descripción de los Servicios
                </h2>
                <p>
                  United Developers proporciona servicios de consultoría, diseño y desarrollo de proyectos 
                  inmobiliarios, urbanos y de planificación. La descripción de los servicios, precios y 
                  condiciones se encontrarán en contratos específicos o en la documentación entregada al usuario.
                </p>
                <p className="mt-4">
                  United Developers se reserva el derecho de modificar, suspender o discontinuar cualquier servicio 
                  en cualquier momento, con previo aviso cuando sea razonablemente posible.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Limitación de Responsabilidad
                </h2>
                <p>
                  En la máxima medida permitida por la ley chilena, United Developers no será responsable por:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Daños indirectos, incidentales, especiales, consecuentes o punitivos</li>
                  <li>Pérdida de datos, ingresos, ganancias o reputación</li>
                  <li>Interrupción del servicio o acceso al Sitio Web</li>
                  <li>Errores o inexactitudes en el Contenido</li>
                  <li>Acceso no autorizado o violación de seguridad</li>
                </ul>
                <p className="mt-4">
                  La responsabilidad total de United Developers no excederá el monto pagado por el Usuario, 
                  en caso de tratarse de servicios de pago.
                </p>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  8. Renuncia de Garantías
                </h2>
                <p>
                  El Sitio Web y sus Contenidos se proporcionan "tal como están" y "según disponibilidad" 
                  sin garantías de ningún tipo, expresas o implícitas, incluyendo pero no limitado a:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Garantías de comerciabilidad o idoneidad para un propósito particular</li>
                  <li>Garantías de precisión, integridad o no infracción</li>
                  <li>Garantías de disponibilidad ininterrumpida del servicio</li>
                  <li>Garantías sobre la seguridad de los datos transmitidos</li>
                </ul>
              </section>

              {/* Security and Protection */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  9. Seguridad y Protección de Datos
                </h2>
                <p>
                  United Developers implementa medidas técnicas y administrativas para proteger la información 
                  del Usuario. Sin embargo, no podemos garantizar seguridad absoluta en la transmisión de datos 
                  a través de Internet.
                </p>
                <p className="mt-4">
                  Para obtener información detallada sobre el tratamiento de datos personales, 
                  consulte nuestra Política de Privacidad.
                </p>
              </section>

              {/* Third Party Links */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  10. Enlaces a Terceros
                </h2>
                <p>
                  El Sitio Web puede contener enlaces a sitios web de terceros. United Developers no es responsable 
                  por el contenido, precisión, legalidad o políticas de privacidad de terceros.
                </p>
                <p className="mt-4">
                  Usted accede a estos sitios bajo su propio riesgo y de acuerdo con sus términos y condiciones.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  11. Cookies y Tecnologías de Rastreo
                </h2>
                <p>
                  El Sitio Web utiliza cookies y similares tecnologías para mejorar la experiencia del usuario, 
                  analizar el tráfico y personalizar contenido. Al utilizar el Sitio Web, usted acepta el uso de cookies 
                  conforme se describe en nuestra Política de Privacidad.
                </p>
                <p className="mt-4">
                  Puede controlar las cookies a través de la configuración de su navegador.
                </p>
              </section>

              {/* User Conduct */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  12. Conducta del Usuario
                </h2>
                <p>
                  El Usuario acepta no:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Publicar, transmitir o distribuir contenido ilegal, difamatorio u ofensivo</li>
                  <li>Acosar, intimidar o amenazar a otros usuarios</li>
                  <li>Usurpar la identidad de otra persona</li>
                  <li>Introducir virus, malware o código malicioso</li>
                  <li>Realizar acciones discriminatorias basadas en raza, género, religión, orientación sexual u otra característica protegida</li>
                  <li>Violar derechos de propiedad intelectual o privacidad de terceros</li>
                </ul>
                <p className="mt-4">
                  United Developers se reserva el derecho de eliminar contenido y suspender cuentas de usuarios 
                  que incumplan estos términos.
                </p>
              </section>

              {/* Suspension and Termination */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  13. Suspensión y Terminación
                </h2>
                <p>
                  United Developers puede suspender o terminar el acceso del Usuario al Sitio Web en cualquier momento, 
                  con o sin causa, y sin responsabilidad, si el Usuario incumple estos Términos de Servicio 
                  o por razones técnicas, legales o de negocio.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  14. Modificaciones de los Términos
                </h2>
                <p>
                  United Developers se reserva el derecho de modificar estos Términos de Servicio en cualquier momento. 
                  Los cambios significativos serán notificados por correo electrónico o mediante un aviso destacado 
                  en el Sitio Web. El uso continuado del Sitio Web después de notificación constituye aceptación 
                  de los términos modificados.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  15. Indemnización
                </h2>
                <p>
                  El Usuario acepta indemnizar, defender y mantener indemne a United Developers, sus directores, 
                  empleados y agentes de cualquier reclamo, demanda, daño, pérdida, costo o gasto (incluyendo honorarios de abogados) 
                  que surja del uso del Sitio Web o incumplimiento de estos Términos de Servicio.
                </p>
              </section>

              {/* Regulatory Compliance */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  16. Cumplimiento Regulatorio Chileno
                </h2>
                <p>
                  Estos Términos de Servicio cumplen con los requisitos establecidos en las siguientes leyes chilenas:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Ley 19.628 sobre Protección de la Vida Privada</li>
                  <li>Ley 19.496 Código de Protección al Consumidor</li>
                  <li>Ley 21.096 sobre Derechos y Deberes de Usuarios de Servicios Digitales</li>
                  <li>Ley 21.220 que Modifica la Ley 19.628 sobre Protección de la Vida Privada</li>
                  <li>Decreto Ley 3.475 de 1980, Código de Comercio (en lo aplicable)</li>
                </ul>
              </section>

              {/* Consumer Rights */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  17. Derechos del Consumidor
                </h2>
                <p>
                  Conforme a la Ley 19.496, todo usuario que actúe como consumidor tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Información clara y veraz sobre los productos y servicios ofrecidos</li>
                  <li>Protección contra prácticas comerciales desleales o abusivas</li>
                  <li>Derecho a no contratar o a desistir de contratos en los términos que establece la ley</li>
                  <li>Acceso a información sobre precios, términos y condiciones antes de contratar</li>
                  <li>Reclamo ante la autoridad de consumo (SERNAC)</li>
                </ul>
              </section>

              {/* Contact and Complaints */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  18. Contacto y Reclamos
                </h2>
                <p>
                  Para consultas, reclamos o comentarios sobre estos Términos de Servicio, 
                  por favor contacte a United Developers:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-2">
                  <p><strong>United Developers</strong></p>
                  <p>
                    <a href="mailto:legal@uniteddevelopers.com" className="text-primary hover:underline">
                      legal@uniteddevelopers.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+56972139375" className="text-primary hover:underline">
                      +56 9 7213 9752
                    </a>
                  </p>
                  <p>Chile, Santiago</p>
                </div>
              </section>

              {/* SERNAC Contact */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  19. Servicio Nacional del Consumidor (SERNAC)
                </h2>
                <p>
                  Si no puede resolver su reclamo directamente con United Developers, 
                  puede contactar al Servicio Nacional del Consumidor (SERNAC):
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-2">
                  <p><strong>SERNAC</strong></p>
                  <p>Sitio Web: 
                    <a href="https://www.sernac.cl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {" "}www.sernac.cl
                    </a>
                  </p>
                  <p>Teléfono: 1410</p>
                </div>
              </section>

              {/* Applicable Law */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  20. Ley Aplicable y Jurisdicción
                </h2>
                <p>
                  Estos Términos de Servicio se rigen por las leyes de la República de Chile, 
                  específicamente las leyes aplicables en Santiago. Cualquier disputa o conflicto 
                  será resuelta de conformidad con la legislación chilena y los tribunales competentes 
                  de Santiago tendrán jurisdicción exclusiva.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  21. Separabilidad
                </h2>
                <p>
                  Si alguna disposición de estos Términos de Servicio es declarada inválida o inaplicable, 
                  las disposiciones restantes continuarán en vigor en la máxima medida permitida por la ley. 
                  United Developers reemplazará la disposición inválida con una disposición válida 
                  que logre los objetivos económicos originales.
                </p>
              </section>

              {/* Entire Agreement */}
              <section className="bg-primary/5 p-6 rounded-lg">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  22. Acuerdo Completo
                </h2>
                <p>
                  Estos Términos de Servicio, junto con la Política de Privacidad, constituyen el acuerdo 
                  completo entre United Developers y el Usuario respecto al uso del Sitio Web y los Servicios. 
                  Estos términos reemplazan y anulan cualesquiera comunicaciones, acuerdos o entendimientos 
                  previos, ya sean escritos u orales.
                </p>
                <p className="mt-4">
                  Al utilizar este Sitio Web, usted acepta estar completamente vinculado por estos 
                  Términos de Servicio.
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
