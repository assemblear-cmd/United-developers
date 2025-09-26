import PropertyCard from '../PropertyCard'
import villaImage from "@assets/generated_images/Villa_interior_luxury_b9aee9cd.png";
import industrialImage from "@assets/generated_images/Industrial_project_showcase_6b8c3f5b.png";

export default function PropertyCardExample() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">Ejemplos de Propiedades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Villa Example */}
          <PropertyCard
            id="villa-1"
            title="Villa Cordillera Premium"
            location="Las Condes, Santiago"
            price="$2,850,000 USD"
            type="Villa"
            image={villaImage}
            bedrooms={4}
            bathrooms={3}
            area="450 m²"
            status="Disponible"
            features={["Piscina Infinita", "Vista Montañas", "Domótica", "Jardín Privado", "Garage Doble"]}
          />
          
          {/* Industrial Example */}
          <PropertyCard
            id="industrial-1"
            title="Centro Logístico Moderno"
            location="Maipú, Santiago"
            price="$5,200,000 USD"
            type="Industrial"
            image={industrialImage}
            area="2,500 m²"
            status="En Construcción"
            features={["Tecnología Avanzada", "Eficiencia Energética", "Acceso Directo"]}
          />
        </div>
      </div>
    </div>
  )
}