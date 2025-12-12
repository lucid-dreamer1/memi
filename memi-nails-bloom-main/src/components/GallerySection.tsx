import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "../../assets/gallery1.png",
    alt: "Nail art elegante",
    category: "Nail Art",
  },
  {
    id: 2,
    src: "../../assets/gallery2.png",
    alt: "Manicure classica",
    category: "Manicure",
  },
  {
    id: 3,
    src: "../../assets/gallery3.png",
    alt: "Unghie gel",
    category: "Gel",
  },
  {
    id: 4,
    src: "../../assets/gallery4.png",
    alt: "French manicure",
    category: "French",
  },
  {
    id: 5,
    src: "../../assets/gallery5.png",
    alt: "Design creativo",
    category: "Nail Art",
  },
  {
    id: 6,
    src: "../../assets/gallery6.png",
    alt: "Colori naturali",
    category: "Natural",
  },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="galleria" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Portfolio</p>
          <h2 className="section-title">Galleria</h2>
          <p className="font-body text-muted-foreground mt-6 max-w-xl mx-auto">
            Ogni creazione è unica, realizzata con cura e attenzione ai dettagli
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 4 ? "row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-primary/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center text-primary-foreground">
                  <p className="font-display text-2xl md:text-3xl font-medium">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
