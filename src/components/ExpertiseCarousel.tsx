import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ExpertiseCarouselProps {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    details: Array<{ 
      title?: string; 
      items: Array<{
        name: string;
        image: string;
        description: string;
        hasVideo?: boolean;
        videoUrl?: string;
      }>;
    }>;
  }[];
}

export function ExpertiseCarousel({ items }: ExpertiseCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [selectedProduct, setSelectedProduct] = React.useState<{
    name: string;
    image: string;
    description: string;
    hasVideo?: boolean;
    videoUrl?: string;
  } | null>(null);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="relative bg-black rounded-xl max-w-2xl w-full overflow-hidden">
            <div className="relative h-[400px]">
              {selectedProduct.hasVideo && selectedProduct.videoUrl ? (
                <div className="relative w-full h-full">
                  <video
                    src={selectedProduct.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    controls
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedProduct.name}</h3>
                    <p className="text-lg text-gray-200">{selectedProduct.description}</p>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedProduct.name}</h3>
                    <p className="text-lg text-gray-200">{selectedProduct.description}</p>
                  </div>
                </>
              )}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
            >
              <div className="relative h-[500px] mr-4 rounded-2xl overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 saturate-150"
                />
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-lg flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  
                  {/* Details with Glass Effect */}
                  <div className="space-y-4 flex-grow">
                    {item.details.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform transition-all duration-300 hover:bg-white/20"
                      >
                        {section.title && (
                          <h4 className="text-accent font-semibold mb-2">{section.title}</h4>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                          {section.items.map((product, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => setSelectedProduct(product)}
                              className="text-sm text-left hover:text-accent transition-colors flex items-center group/item"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/item:bg-accent mr-2" />
                              <span className="text-white/90 group-hover/item:text-accent decoration-white/20 group-hover/item:decoration-accent">
                                {product.name}                               
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}