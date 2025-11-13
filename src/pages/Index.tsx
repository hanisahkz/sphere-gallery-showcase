import SphereImageGrid, { ImageData }  from "@/components/ui/img-sphere";

// Image data using Unsplash images
const BASE_IMAGES: Omit<ImageData, 'id'>[] = [
  {
    src: "https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Mountain Landscape",
    title: "Mountain Landscape",
    description: "A beautiful landscape captured at golden hour with mountains in the background."
  },
  {
    src: "https://images.unsplash.com/photo-1757647016230-d6b42abc6cc9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2072",
    alt: "Portrait Photography",
    title: "Portrait Photography",
    description: "Stunning portrait photography showcasing natural lighting and composition."
  },
  {
    src: "https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Urban Architecture",
    title: "Urban Architecture",
    description: "Modern architectural design featuring clean lines and geometric patterns."
  },
  {
    src: "https://images.unsplash.com/photo-1742201877377-03d18a323c18?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1064",
    alt: "Nature Scene",
    title: "Nature Scene",
    description: "Peaceful nature scene with vibrant colors and natural beauty."
  },
  {
    src: "https://images.unsplash.com/photo-1757081791153-3f48cd8c67ac?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Abstract Art",
    title: "Abstract Art",
    description: "Creative abstract composition with bold colors and unique patterns."
  },
  {
    src: "https://images.unsplash.com/photo-1757626961383-be254afee9a0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Coastal View",
    title: "Coastal View",
    description: "Breathtaking coastal landscape with dramatic waves and rocky shores."
  },
  {
    src: "https://images.unsplash.com/photo-1756748371390-099e4e6683ae?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "City Lights",
    title: "City Lights",
    description: "Urban nightscape with illuminated buildings and vibrant city energy."
  },
  {
    src: "https://images.unsplash.com/photo-1755884405235-5c0213aa3374?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Forest Path",
    title: "Forest Path",
    description: "Serene forest trail winding through lush greenery and dappled sunlight."
  },
  {
    src: "https://images.unsplash.com/photo-1757495404191-e94ed7e70046?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Desert Dunes",
    title: "Desert Dunes",
    description: "Majestic sand dunes bathed in warm golden light."
  },
  {
    src: "https://images.unsplash.com/photo-1756197256528-f9e6fcb82b04?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1064",
    alt: "Minimalist Design",
    title: "Minimalist Design",
    description: "Clean and simple design showcasing elegance through minimalism."
  },
  {
    src: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    alt: "Autumn Colors",
    title: "Autumn Colors",
    description: "Vibrant fall foliage displaying nature's spectacular color palette."
  },
  {
    src: "https://images.unsplash.com/photo-1755278338891-e8d8481ff087?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1674",
    alt: "Geometric Patterns",
    title: "Geometric Patterns",
    description: "Intricate geometric designs creating mesmerizing visual patterns."
  }
];

// Generate 60 images by repeating the base set
const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_IMAGES.length;
  const baseImage = BASE_IMAGES[baseIndex];
  IMAGES.push({
    id: `img-${i + 1}`,
    ...baseImage,
    alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`
  });
}

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Interactive 3D Image Sphere
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
          Drag to rotate • Click images to view • Touch-enabled
        </p>
      </div>
      
      <div className="flex items-center justify-center">
        <SphereImageGrid
          images={IMAGES}
          containerSize={600}
          sphereRadius={200}
          dragSensitivity={0.8}
          momentumDecay={0.96}
          maxRotationSpeed={6}
          baseImageScale={0.15}
          hoverScale={1.3}
          perspective={1000}
          autoRotate={true}
          autoRotateSpeed={0.2}
        />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </main>
  );
};

export default Index;
