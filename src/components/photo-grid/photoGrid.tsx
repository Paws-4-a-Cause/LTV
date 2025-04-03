import React, { useEffect, useRef } from "react";
import photosData from "../../data/photogrid.json";

interface PhotoGridProps {
  photos?: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({
  photos = photosData.photos,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "scale(1)";
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all current items
    itemsRef.current.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col py-10">
      <div className="flex w-full justify-center items-center mb-16">
        <h1 className="font-extrabold text-5xl text-[#273878]">#LTVFam</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-24 max-w-[1400px] mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            ref={(el) => {
              if (el) {
                itemsRef.current.set(photo.id, el);
                observerRef.current?.observe(el);
              }
            }}
            className="aspect-square overflow-hidden max-w-[300px] w-full mx-auto"
            style={{
              opacity: "0",
              transform: "scale(0.95)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover hover:brightness-75 transition-all duration-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
