import { useState } from "react";

import OptimizedImage from "../ui/OptimizedImage";

export default function ProductGallery({ images, title }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
        <OptimizedImage src={activeImage} alt={title} width={1200} height={900} className="aspect-[4/3] w-full rounded-[1.4rem] object-cover" />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-[1rem] border transition-all ${
              activeImage === image ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20" : "border-black/10"
            }`}
          >
            <OptimizedImage src={image} alt={`${title} view ${index + 1}`} width={320} height={320} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
