import React, { useRef, useState } from "react";
import {
  Ship,
  Brain as Grain,
  Construction,
  Gem,
  ChevronRight,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { VideoModal } from "./components/VideoModal";

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const servicesRef = useRef<HTMLElement>(null);
  const regionsRef = useRef<HTMLElement>(null);
  const indiaRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

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
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
        </div>

        <nav className="relative z-10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Ship className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-white">
                Pravaah <span className="text-accent">Commodities</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-white hover:text-accent transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(regionsRef)}
                className="text-white hover:text-accent transition"
              >
                Regions
              </button>
              <button
                onClick={() => scrollToSection(indiaRef)}
                className="text-white hover:text-accent transition"
              >
                India
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-white hover:text-accent transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="px-6 py-2 bg-accent text-gray-900 font-semibold rounded-full hover:bg-accent-light transition"
              >
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
              Connecting businesses across continents with innovative solutions
              and reliable service
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="px-8 py-4 bg-accent text-gray-900 font-semibold rounded-full hover:bg-accent-light transition flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-full hover:bg-accent/10 transition flex items-center justify-center space-x-2"
              >
                <span>Watch Video</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Global Partners" },
              { number: "100K+", label: "Shipments" },
              { number: "25+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold text-accent">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900">Our Expertise</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Grain className="w-8 h-8" />,
                title: "Agricultural Commodities",
                description:
                  "Premium quality grains and agricultural products sourced from the world's finest producers.",
              },
              {
                icon: <Gem className="w-8 h-8" />,
                title: "Handicrafts & Jewelry",
                description:
                  "Exquisite handcrafted items and imitation jewelry showcasing artisanal excellence.",
              },
              {
                icon: <Construction className="w-8 h-8" />,
                title: "Metal Trading",
                description:
                  "Comprehensive metal trading solutions for industrial and manufacturing needs.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Section */}
      <section ref={indiaRef} id="india" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                India: Our Primary Export Hub
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                India serves as our primary export hub, leveraging its rich
                heritage of craftsmanship, agricultural excellence, and
                manufacturing capabilities. Our extensive network across major
                Indian industrial centers ensures quality sourcing and timely
                delivery.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Strategic Locations",
                    description:
                      "Presence in major ports including Mumbai, Chennai, and Mundra",
                  },
                  {
                    title: "Quality Assurance",
                    description:
                      "Rigorous quality control processes meeting international standards",
                  },
                  {
                    title: "Artisan Network",
                    description:
                      "Direct partnerships with skilled artisans and craftsmen",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 mr-3" />
                    <div>
                      <h3 className="font-semibold text-accent">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
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
              <div className="absolute -bottom-6 -right-6 bg-accent text-gray-900 p-6 rounded-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section ref={regionsRef} id="regions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900">Global Presence</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80",
                region: "Africa",
                countries: "Kenya, Nigeria, South Africa",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80",
                region: "Middle East",
                countries: "UAE, Saudi Arabia, Qatar",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&q=80",
                region: "Asia",
                countries: "India, Singapore, Malaysia",
              },
            ].map((region, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={region.image}
                  alt={region.region}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-accent">
                    {region.region}
                  </h3>
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

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Pravaah Commodities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Since 2010, Pravaah Commodities has been at the forefront of
                international trade, connecting businesses across continents and
                cultures. Our commitment to excellence, reliability, and
                sustainable practices has made us a trusted partner in global
                commerce.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-gray-600">
                    Trusted by 1000+ businesses worldwide
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-gray-600">
                    ISO 9001:2015 certified operations
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-gray-600">
                    Sustainable and ethical business practices
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="Business Meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to expand your business globally?
              </h2>
              <p className="mt-4 text-gray-800">
                Partner with Pravaah Commodities for seamless international
                trade.
              </p>
            </div>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="mt-8 md:mt-0 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="relative py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
            alt="Global Trade Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-lg bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-lg bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="mt-1 block w-full rounded-lg bg-white/10 border-white/20 text-white backdrop-blur-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                  >
                    <option value="" className="bg-gray-900">
                      Select a subject
                    </option>
                    <option value="agricultural" className="bg-gray-900">
                      Agricultural Products
                    </option>
                    <option value="handicrafts" className="bg-gray-900">
                      Handicrafts & Jewelry
                    </option>
                    <option value="metal" className="bg-gray-900">
                      Metal Trading
                    </option>
                    <option value="other" className="bg-gray-900">
                      Other Inquiry
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-gray-900 font-semibold rounded-full hover:bg-accent-light transition flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* Contact Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-white/80">Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-white/80">info@pravaah.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Ship className="h-8 w-8 text-accent" />
                <span className="text-xl font-bold text-white">
                  Pravaah <span className="text-accent">Commodities</span>
                </span>
              </div>
              <p className="mt-4">
                Your trusted partner in global trade since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="hover:text-accent transition"
                  >
                    Agricultural Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="hover:text-accent transition"
                  >
                    Handicrafts & Jewelry
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="hover:text-accent transition"
                  >
                    Metal Trading
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Regions</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(regionsRef)}
                    className="hover:text-accent transition"
                  >
                    Africa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(regionsRef)}
                    className="hover:text-accent transition"
                  >
                    Middle East
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(regionsRef)}
                    className="hover:text-accent transition"
                  >
                    Asia
                  </button>
                </li>
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
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Pravaah Commodities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
