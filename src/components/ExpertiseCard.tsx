import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  details: Array<{ title?: string; items: Array<{ name: string; image: string; description: string }> }>;
}

export function ExpertiseCard({ icon, title, description, image, details }: ExpertiseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string; description: string } | null>(null);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer overflow-hidden"
      >
        {/* Card Background */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-[2px]" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 p-8">
          <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
            {icon}
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-4 text-gray-600">{description}</p>
          
          {/* Show More Indicator */}
          <div className="mt-6 flex items-center text-accent font-medium">
            <span>Show More</span>
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => {
              setIsOpen(false);
              setSelectedProduct(null);
            }} 
          />
          
          {selectedProduct ? (
            // Product Detail View
            <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProduct.name}</h3>
                  <p className="text-gray-200">{selectedProduct.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ) : (
            // Products Grid View
            <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="sticky top-0 bg-white z-10 p-6 flex items-center justify-between border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {details.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.title && (
                        <h4 className="text-lg font-semibold text-accent mb-4">{section.title}</h4>
                      )}
                      <div className="grid grid-cols-1 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            onClick={() => setSelectedProduct(item)}
                            className="group relative h-48 rounded-xl overflow-hidden cursor-pointer"
                          >
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                              <h5 className="text-lg font-semibold text-white">{item.name}</h5>
                              <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}