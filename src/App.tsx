import React from 'react';
import { Ship, Brain as Grain, Construction, Gem, ChevronRight, MapPin, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Main hero image */}
            <img 
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80"
              alt="Cargo ship at sunset"
              className="h-full w-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/30" />
          </div>
        </div>
        
        <nav className="relative z-10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="Pravaah Commodities" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-accent transition">Services</a>
              <a href="#regions" className="text-white hover:text-accent transition">Regions</a>
              <a href="#india" className="text-white hover:text-accent transition">India</a>
              <a href="#about" className="text-white hover:text-accent transition">About</a>
              <button className="px-6 py-2 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition">
                Contact Us
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Global Logistics <span className="text-accent">Excellence</span>
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-xl">
              Connecting businesses across continents with innovative solutions and reliable service
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition flex items-center justify-center space-x-2">
                <span>Explore Our Services</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-full hover:bg-accent/10 transition flex items-center justify-center space-x-2">
                <span>Watch Video</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Global Partners' },
              { number: '100K+', label: 'Shipments' },
              { number: '25+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold text-accent">{stat.number}</div>
                <div className="mt-2 text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white">Our Expertise</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Grain className="w-8 h-8" />,
                title: "Agricultural Commodities",
                description: "Premium quality grains and agricultural products sourced from the world's finest producers."
              },
              {
                icon: <Gem className="w-8 h-8" />,
                title: "Handicrafts & Jewelry",
                description: "Exquisite handcrafted items and imitation jewelry showcasing artisanal excellence."
              },
              {
                icon: <Construction className="w-8 h-8" />,
                title: "Metal Trading",
                description: "Comprehensive metal trading solutions for industrial and manufacturing needs."
              }
            ].map((service, index) => (
              <div key={index} className="bg-primary p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Section */}
      <section id="india" className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">India: Our Primary Export Hub</h2>
              <p className="text-lg text-gray-300 mb-8">
                India serves as our primary export hub, leveraging its rich heritage of craftsmanship, 
                agricultural excellence, and manufacturing capabilities. Our extensive network across 
                major Indian industrial centers ensures quality sourcing and timely delivery.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Strategic Locations",
                    description: "Presence in major ports including Mumbai, Chennai, and Mundra"
                  },
                  {
                    title: "Quality Assurance",
                    description: "Rigorous quality control processes meeting international standards"
                  },
                  {
                    title: "Artisan Network",
                    description: "Direct partnerships with skilled artisans and craftsmen"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 mr-3" />
                    <div>
                      <h3 className="font-semibold text-accent">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80"
                alt="Indian Craftsmanship"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white">Global Presence</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80",
                region: "Africa",
                countries: "Kenya, Nigeria, South Africa"
              },
              {
                image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80",
                region: "Middle East",
                countries: "UAE, Saudi Arabia, Qatar"
              },
              {
                image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&q=80",
                region: "Asia",
                countries: "India, Singapore, Malaysia"
              }
            ].map((region, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={region.image}
                  alt={region.region}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-accent">{region.region}</h3>
                  <div className="mt-2 flex items-center text-gray-200">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{region.countries}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to expand your business globally?</h2>
              <p className="mt-4 text-primary-light">Partner with Pravaah Commodities for seamless international trade.</p>
            </div>
            <button className="mt-8 md:mt-0 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-light transition flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="Pravaah Commodities" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="mt-4">Your trusted partner in global trade since 2010.</p>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition">Agricultural Products</a></li>
                <li><a href="#" className="hover:text-accent transition">Handicrafts & Jewelry</a></li>
                <li><a href="#" className="hover:text-accent transition">Metal Trading</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Regions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition">Africa</a></li>
                <li><a href="#" className="hover:text-accent transition">Middle East</a></li>
                <li><a href="#" className="hover:text-accent transition">Asia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>info@pravaah.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary text-center">
            <p>&copy; 2024 Pravaah Commodities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;