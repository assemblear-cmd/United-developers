import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Política de Cookies
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
                  United Developers ("la Empresa") utiliza cookies y similares tecnologías de rastreo 
                  en su sitio web www.uniteddevelopers.com para mejorar la experiencia del usuario, 
                  analizar el comportamiento de navegación y personalizar contenido. Esta Política de Cookies 
                  explica qué son las cookies, cómo las utilizamos y cómo puede controlarlas, 
                  de conformidad con la legislación chilena aplicable.
                </p>
              </section>

              {/* What are Cookies */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. ¿Qué son las Cookies?
                </h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en el dispositivo 
                  (computadora, tableta o teléfono móvil) del usuario cuando visita un sitio web. 
                  Las cookies contienen información sobre las preferencias y el comportamiento de navegación 
                  del usuario y se envían de vuelta al servidor web en futuras visitas.
                </p>
                <p className="mt-4">
                  Las cookies son herramientas estándar de la web que mejoran significativamente 
                  la funcionalidad y la experiencia de los sitios web.
                </p>
              </section>

              {/* Types of Cookies */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. Tipos de Cookies que Utilizamos
                </h2>
                <p>
                  United Developers utiliza los siguientes tipos de cookies:
                </p>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  3.1 Cookies Esenciales o Técnicas
                </h3>
                <p>
                  Son necesarias para el funcionamiento básico del sitio web. Sin estas cookies, 
                  el sitio no funcionaría correctamente. Incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Cookies de autenticación y seguridad</li>
                  <li>Preferencias de idioma y moneda</li>
                  <li>Control de acceso a áreas protegidas</li>
                  <li>Gestión de sesiones de usuario</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Consentimiento:</strong> No requieren consentimiento previo.
                </p>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  3.2 Cookies de Rendimiento y Análisis
                </h3>
                <p>
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web. 
                  Recopilan información sobre el número de visitantes, páginas visitadas y tiempo de permanencia. Incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Google Analytics para estadísticas de tráfico</li>
                  <li>Herramientas de análisis de comportamiento del usuario</li>
                  <li>Medición del rendimiento del sitio web</li>
                  <li>Detección de errores y problemas técnicos</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Consentimiento:</strong> Requieren consentimiento del usuario.
                </p>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  3.3 Cookies de Preferencias y Personalización
                </h3>
                <p>
                  Permiten personalizar la experiencia del usuario almacenando sus preferencias. Incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Preferencias de tema (modo oscuro/claro)</li>
                  <li>Información de privacidad y preferencias de comunicación</li>
                  <li>Historial de navegación personalizado</li>
                  <li>Configuración de accesibilidad</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Consentimiento:</strong> Requieren consentimiento del usuario.
                </p>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  3.4 Cookies de Marketing y Publicidad
                </h3>
                <p>
                  Se utilizan para mostrar anuncios relevantes y rastrear campañas de marketing. Incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Cookies de redes sociales (Facebook, LinkedIn, etc.)</li>
                  <li>Cookies de plataformas publicitarias</li>
                  <li>Seguimiento de conversiones</li>
                  <li>Retargeting publicitario</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Consentimiento:</strong> Requieren consentimiento previo del usuario.
                </p>
              </section>

              {/* Cookies Usage */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Cómo Utilizamos las Cookies
                </h2>
                <p>
                  United Developers utiliza cookies para:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Reconocer al usuario en visitas posteriores</li>
                  <li>Recordar preferencias y configuraciones personales</li>
                  <li>Mejorar la funcionalidad y velocidad del sitio web</li>
                  <li>Analizar el comportamiento del usuario para optimizar contenido</li>
                  <li>Mostrar publicidad relevante y personalizada</li>
                  <li>Cumplir obligaciones de seguridad y fraude</li>
                  <li>Proporcionar estadísticas sobre el uso del sitio</li>
                </ul>
              </section>

              {/* Third Party Cookies */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Cookies de Terceros
                </h2>
                <p>
                  El sitio web utiliza servicios de terceros que pueden instalar sus propias cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                  <li><strong>Google Ads:</strong> Para campañas publicitarias</li>
                  <li><strong>Facebook Pixel:</strong> Para seguimiento de redes sociales</li>
                  <li><strong>LinkedIn:</strong> Para analytics profesionales</li>
                  <li><strong>Servicios de Maps:</strong> Para visualización de ubicaciones</li>
                </ul>
                <p className="mt-4">
                  Estos terceros pueden tener sus propias políticas de privacidad y cookies. 
                  Le recomendamos revisar sus políticas para entender cómo manejan sus datos.
                </p>
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Base Legal para el Uso de Cookies
                </h2>
                <p>
                  De conformidad con la Ley 19.628 sobre Protección de la Vida Privada y 
                  la Ley 21.096 sobre Derechos y Deberes de Usuarios de Servicios Digitales, 
                  el uso de cookies se basa en:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Consentimiento expreso del usuario (para cookies no esenciales)</li>
                  <li>Legitimidad de operación técnica del sitio web (para cookies esenciales)</li>
                  <li>Interés legítimo en mejorar servicios y prevenir fraude</li>
                  <li>Cumplimiento de obligaciones legales</li>
                </ul>
              </section>

              {/* User Consent */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Consentimiento del Usuario
                </h2>
                <p>
                  Al ingresar al sitio web por primera vez, se le presentará un aviso de cookies. 
                  Al hacer clic en "Aceptar", usted otorga su consentimiento para el uso de cookies 
                  de acuerdo con esta política.
                </p>
                <p className="mt-4">
                  Puede cambiar sus preferencias de cookies en cualquier momento a través de 
                  las configuraciones de privacidad de su navegador o de nuestro sitio web.
                </p>
              </section>

              {/* How to Control Cookies */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  8. Cómo Controlar las Cookies
                </h2>
                <p>
                  Usted puede controlar y eliminar cookies de varias maneras:
                </p>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  8.1 Configuración del Navegador
                </h3>
                <p>
                  Puede configurar su navegador para aceptar o rechazar cookies. 
                  Las instrucciones para los navegadores más comunes son:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                  <li><strong>Mozilla Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies y datos de sitios</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
                  <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies y otros datos</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  8.2 Herramientas de Terceros
                </h3>
                <p>
                  Puede utilizar servicios como:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Google Analytics Opt-out Browser Add-on</li>
                  <li>Your Online Choices (www.youronlinechoices.com)</li>
                  <li>Network Advertising Initiative (www.networkadvertising.org)</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                  8.3 En Nuestro Sitio Web
                </h3>
                <p>
                  Puede ajustar las preferencias de cookies a través de nuestro panel de privacidad 
                  disponible en el sitio web.
                </p>
              </section>

              {/* Impact of Disabling Cookies */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  9. Impacto de Desactivar Cookies
                </h2>
                <p>
                  Si desactiva las cookies esenciales, algunos servicios del sitio web pueden no funcionar correctamente:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>No podrá mantener sesiones activas</li>
                  <li>Algunas características interactivas pueden no estar disponibles</li>
                  <li>La personalización del contenido será limitada</li>
                  <li>Es posible que deba volver a autenticarse en cada visita</li>
                </ul>
                <p className="mt-4">
                  Las cookies no esenciales pueden desactivarse sin afectar la funcionalidad básica del sitio.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  10. Retención de Datos de Cookies
                </h2>
                <p>
                  El tiempo de retención de las cookies varía según su tipo:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra el navegador</li>
                  <li><strong>Cookies persistentes:</strong> Permanecen entre 6 meses y 2 años</li>
                  <li><strong>Cookies de análisis:</strong> Generalmente se retienen por 12-26 meses</li>
                  <li><strong>Cookies publicitarias:</strong> Pueden persistir hasta 1-2 años</li>
                </ul>
              </section>

              {/* Security */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  11. Seguridad de las Cookies
                </h2>
                <p>
                  United Developers implementa medidas de seguridad para proteger las cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Encriptación de datos sensibles en cookies</li>
                  <li>Uso de atributos Secure y HttpOnly</li>
                  <li>Validación de integridad de cookies</li>
                  <li>Monitoreo de acceso no autorizado</li>
                  <li>Auditorías periódicas de seguridad</li>
                </ul>
              </section>

              {/* International Privacy */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  12. Privacidad Internacional
                </h2>
                <p>
                  Algunos servicios de terceros pueden transferir datos fuera de Chile. 
                  En estos casos, garantizamos que tales transferencias cumplen con estándares 
                  internacionales de protección de datos. Los proveedores de servicios están obligados 
                  a mantener niveles de protección equivalentes a la legislación chilena.
                </p>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  13. Derechos del Usuario
                </h2>
                <p>
                  Bajo la legislación chilena, usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Ser informado sobre el uso de cookies</li>
                  <li>Dar o retirar consentimiento en cualquier momento</li>
                  <li>Acceder a información sobre qué cookies se utilizan</li>
                  <li>Solicitar la eliminación de sus datos de cookies</li>
                  <li>Ejercer derechos de portabilidad de datos</li>
                  <li>Presentar reclamos ante autoridades de protección de datos</li>
                </ul>
              </section>

              {/* Policy Changes */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  14. Cambios a Esta Política
                </h2>
                <p>
                  United Developers se reserva el derecho de actualizar esta Política de Cookies 
                  en cualquier momento. Los cambios significativos serán comunicados por correo electrónico 
                  o mediante notificación en el sitio web. El uso continuado del sitio implica aceptación 
                  de los cambios.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  15. Contacto
                </h2>
                <p>
                  Para preguntas sobre nuestra Política de Cookies o para ejercer sus derechos de privacidad:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-2">
                  <p><strong>United Developers</strong></p>
                  <p>Encargado de Privacidad</p>
                  <p>
                    <a href="mailto:privacy@uniteddevelopers.com" className="text-primary hover:underline">
                      privacy@uniteddevelopers.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+56972139752" className="text-primary hover:underline">
                      +56 9 7213 9752
                    </a>
                  </p>
                </div>
              </section>

              {/* Regulatory Compliance */}
              <section className="bg-primary/5 p-6 rounded-lg">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  16. Cumplimiento Regulatorio
                </h2>
                <p>
                  Esta Política de Cookies cumple con:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Ley 19.628 sobre Protección de la Vida Privada</li>
                  <li>Ley 21.096 sobre Derechos y Deberes de Usuarios de Servicios Digitales</li>
                  <li>Ley 21.220 que Modifica la Ley 19.628</li>
                  <li>Estándares internacionales de privacidad en línea</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
