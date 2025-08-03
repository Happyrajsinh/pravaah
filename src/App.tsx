import React, { useRef, useState } from "react";
import {
  Ship,
  Brain as Grain,
  Construction,
  Gem,
  ChevronRight,
  MapPin,
  ArrowRight,
  Palette,
  Diamond,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { VideoModal } from "./components/VideoModal";
import { HeroCarousel } from "./components/HeroCarousel";
import { ExpertiseCarousel } from "./components/ExpertiseCarousel";

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

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const expertiseCards = [
    {
      icon: <Construction className="w-8 h-8" />,
      title: "Metal Trading",
      description:
        "Comprehensive metal trading solutions for industrial and manufacturing needs.",
      image: "images/metals/metals_bg.png",
      details: [
        {
          title: "Metal Products",
          items: [
            {
              name: "Copper millbury",
              image: "images/metals/copper_wire.jpeg",
              description:
                "High-quality copper concentrate, wire scrap, and cathodes, sourced from certified suppliers and processed to meet industry standards.",
              hasVideo: true,
              videoUrl: "/videos/copper-millbury.mp4",
            },
            {
              name: "Copper wire scrap",
              image: "images/metals/copper_wire.jpeg",
              description:
                "High-quality copper concentrate, wire scrap, and cathodes, sourced from certified suppliers and processed to meet industry standards.",
              hasVideo: true,
              videoUrl: "/videos/copper-products.mp4",
            },
            {
              name: "Copper cathodes",
              image: "/images/metals/copper_cathodes.jpeg",
              description:
                "High-grade steel products including sheets, bars, and structural steel, meeting international quality standards.",
            },
            {
              name: "Aluminum ingots",
              image: "/images/metals/aluminium_ingots.jpeg",
              description:
                "Premium aluminum extrusions and ingots for industrial use, manufactured to precise specifications and quality standards.",
            },
            {
              name: "UBC (Used Beverage Cans)",
              image: "/images/metals/beverage_cans.jpeg",
              description:
                "Recycled aluminum beverage cans for sustainable manufacturing, processed and sorted to ensure maximum quality and purity.",
            },
            {
              name: "Used rail",
              image: "/images/metals/used_rail.jpeg",
              description:
                "Quality used railway tracks for industrial applications, carefully inspected and certified for various industrial uses.",
            },
          ],
        },
      ],
    },
    {
      icon: <Grain className="w-8 h-8" />,
      title: "Agricultural Commodities",
      description:
        "Premium quality agricultural products sourced directly from trusted farmers and producers.",
      image:
        "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&sat=2",
      details: [
        {
          title: "Product Categories",
          items: [
            {
              name: "Dry Fruits",
              image: "images/agricultural/dryfruits.png",
              description:
                "Premium quality dried fruits including almonds, cashews, pistachios, and raisins, sourced from the finest orchards and processed under strict quality control measures.",
            },
            {
              name: "Spices",
              image: "images/agricultural/spices.png",
              description:
                "Authentic Indian spices known for their rich aroma and flavor, carefully selected and processed to maintain their natural properties and freshness.",
            },
            {
              name: "Pulses & Lentils",
              image: "images/agricultural/pulsesAndLentils.png",
              description:
                "High-quality pulses and lentils sourced from the finest farms, cleaned and processed using modern technology to ensure the best quality.",
            },
            {
              name: "Rice",
              image: "images/agricultural/rice.png",
              description:
                "Premium varieties of rice including Basmati and specialty grains, aged and processed to perfection for the finest cooking experience.",
            },
            {
              name: "Fresh Produce",
              image: "images/agricultural/freshproduce.png",
              description:
                "Fresh fruits and vegetables exported worldwide, maintained in temperature-controlled environments to ensure freshness and quality.",
            },
          ],
        },
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Handicrafts",
      description:
        "Exquisite handcrafted items showcasing traditional artisanal excellence.",
      image:
        "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&q=80&sat=2",
      details: [
        {
          title: "Traditional Crafts",
          items: [
            {
              name: "Textile Crafts",
              image: "images/handicraft/textile.png",
              description:
                "Handwoven textiles featuring traditional patterns and techniques, created by skilled artisans using age-old methods passed down through generations.",
            },
            {
              name: "Pottery & Ceramics",
              image: "images/handicraft/pottery.png",
              description:
                "Handcrafted pottery and ceramic items with intricate designs, each piece uniquely crafted to reflect cultural heritage and artistic excellence.",
            },
            {
              name: "Woodwork",
              image: "images/handicraft/woodwork.png",
              description:
                "Carved wooden items showcasing traditional craftsmanship, featuring intricate designs and patterns that tell stories of cultural heritage.",
            },
            {
              name: "Metal Crafts",
              image: "images/handicraft/metalcraft.png",
              description:
                "Intricately designed metal artifacts and decorative items, handcrafted by skilled artisans using traditional techniques.",
            },
          ],
        },
        {
          title: "Specialty Items",
          items: [
            {
              name: "Glass Crafts",
              image: "images/handicraft/glasscraft.png",
              description:
                "Beautiful glass art pieces and decorative items, handcrafted using traditional glassblowing techniques and modern design elements.",
            },
            {
              name: "Leatherwork",
              image: "images/handicraft/leatherwork.png",
              description:
                "Handcrafted leather goods and accessories, made from premium quality leather and finished with expert craftsmanship.",
            },
            {
              name: "Stone Carving",
              image: "images/handicraft/stonecarving.png",
              description:
                "Intricately carved stone sculptures and decorative pieces, each telling a unique story through traditional motifs and patterns.",
            },
            {
              name: "Bamboo & Cane",
              image: "images/handicraft/bambooAndCane.png",
              description:
                "Eco-friendly bamboo and cane furniture and accessories, handcrafted by skilled artisans using sustainable materials.",
            },
          ],
        },
      ],
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Imitation Jewellery",
      description:
        "Stunning collection of fashion jewellery crafted with precision and style.",
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&sat=2",
      details: [
        {
          title: "Premium Collections",
          items: [
            {
              name: "Gold-Plated Jewellery",
              image: "images/imitation/goldPlated.png",
              description:
                "Elegant gold-plated pieces with premium finish, designed to add luxury to every occasion while maintaining affordability.",
            },
            {
              name: "Silver-Plated Jewellery",
              image: "images/imitation/silverPlated.png",
              description:
                "Sophisticated silver-plated accessories for every occasion, combining traditional designs with contemporary style.",
            },
            {
              name: "Kundan Jewellery",
              image: "images/imitation/kundan.png",
              description:
                "Traditional Kundan pieces with intricate detailing, handcrafted to perfection using ancient techniques.",
            },
            {
              name: "Meenakari & Polki",
              image: "images/imitation/meenakari.png",
              description:
                "Colorful enamel work and uncut diamond style jewellery, showcasing the rich heritage of Indian craftsmanship.",
            },
          ],
        },
        {
          title: "Fashion Jewellery",
          items: [
            {
              name: "Oxidized Jewellery",
              image: "images/imitation/oxidized.png",
              description:
                "Trendy oxidized pieces with antique finish, perfect for both traditional and contemporary outfits.",
            },
            {
              name: "Pearl Collection",
              image: "images/imitation/pearl.png",
              description:
                "Elegant pearl jewellery for a classic look, featuring high-quality synthetic pearls in various designs.",
            },
            {
              name: "Beaded Jewellery",
              image: "images/imitation/beaded.png",
              description:
                "Colorful beaded accessories for casual wear, handcrafted using premium quality beads and materials.",
            },
            {
              name: "Thread & Fabric",
              image: "images/imitation/thread.png",
              description:
                "Handcrafted thread and fabric jewellery pieces, combining traditional techniques with modern designs.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <header className="relative h-screen">
        <HeroCarousel />

        <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-6">
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

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Global Trade <span className="text-accent">Excellence</span>
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-xl">
                Connecting businesses across continents with innovative
                solutions and reliable service
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

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "20+", label: "Global Partners" },
                { number: "100+", label: "Shipments" },
                { number: "15+", label: "Countries Served" },
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
        </div>
      </header>

      <section ref={servicesRef} id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-navy-600 mb-12">
            Discover our comprehensive range of products and services
          </p>
          <ExpertiseCarousel items={expertiseCards} />
        </div>
      </section>

      <section ref={indiaRef} id="india" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                India: Our Primary Export Hub
              </h2>
              <p className="text-lg text-navy-600 mb-8">
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
                      <p className="text-navy-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&sat=2"
                alt="Indian Craftsmanship"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-gray-900 p-6 rounded-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={regionsRef} id="regions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-navy-900">Global Presence</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&sat=2",
                region: "Africa",
                countries: "Kenya, DRC, Tanzania, Zambia, South Africa",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&sat=2",
                region: "Middle East",
                countries: "UAE, Saudi Arabia, Qatar",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&q=80&sat=2",
                region: "Asia",
                countries: "India, Singapore, Malaysia",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&q=80&sat=2",
                region: "Europe",
                countries: "Germany, UK, France",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&sat=2",
                region: "Americas",
                countries: "USA, Canada, Brazil",
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

      <section ref={aboutRef} id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                About Pravaah Commodities
              </h2>
              <p className="text-lg text-navy-600 mb-8">
                Since 2015, Pravaah Commodities has been at the forefront of
                international trade, connecting businesses across continents and
                cultures. Our commitment to excellence, reliability, and
                sustainable practices has made us a trusted partner in global
                commerce.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-navy-600">
                    Trusted by 1000+ businesses worldwide
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-navy-600">
                    ISO 9001:2015 certified operations
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-navy-600">
                    Sustainable and ethical business practices
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&sat=2"
                alt="Business Meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

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

      <div ref={contactRef} id="contact" className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&sat=2"
            alt="Global Trade Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
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
                    <option value="metal" className="bg-gray-900">
                      Metal Trading
                    </option>
                    <option value="agricultural" className="bg-gray-900">
                      Agricultural Products
                    </option>
                    <option value="handicrafts" className="bg-gray-900">
                      Handicrafts & Jewelry
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
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-xl font-bold text-accent mb-6">
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 text-white">
                    {/* <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center"> */}
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    {/* </div> */}
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-white/80">
                        Ahmedabad, Gujarat
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 text-white"
                    onClick={() =>
                      handleCopy("pravaahcommodities@gmail.com", "email")
                    }
                  >
                    <svg
                      className="w-6 h-6 text-accent mt-1"
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

                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-white/80 break-all">
                        pravaahcommodities
                        <br />
                        @gmail.com
                        {copied === "email" && (
                          <span className="ml-2 text-accent text-xs">
                            Copied!
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 text-white"
                    onClick={() => handleCopy("+919876543210", "phone")}
                  >
                    <svg
                      className="w-6 h-6 text-accent mt-1"
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

                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-white/80">
                        +91 98765 43210
                        {copied === "phone" && (
                          <span className="ml-2 text-accent text-xs">
                            Copied!
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 text-white"
                    onClick={() => handleCopy("+917863893010", "whatsapp")}
                  >
                    <svg
                      className="w-6 h-6 text-accent mt-1"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />{" "}
                      {/* Replace with full WhatsApp path */}
                    </svg>

                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-white/80">
                        +91 78638 93010
                        {copied === "whatsapp" && (
                          <span className="ml-2 text-accent text-xs">
                            Copied!
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Location
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5367396813936!2d72.53610697590322!3d23.114048438721387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83dc7c594895%3A0x8ca288d49b2ebbba!2sMoneyplant%20High%20Street%20by%20V%20Square%20Group!5e0!3m2!1sen!2sin!4v1754247407199!5m2!1sen!2sin"
                  width="100%"
                  height="368"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 pt-8 border-t border-white/20 ">
                {/* <p className="font-medium text-accent">Address:</p> */}
                <h4 className="text-xl font-bold text-accent mb-6">Address</h4>
                <p className="text-lg text-white/90 leading-relaxed">
                  <span className="font-semibold">
                    B-459, Money Plant High Street
                  </span>
                  <br />
                  Jagatpur Road, Near SG Highway
                  <br />
                  Near BSNL Office, Gota
                  <br />
                  Ahmedabad, Gujarat – 382470
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                Your trusted partner in global trade since 2015.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="hover:text-accent transition"
                  >
                    Metal Trading
                  </button>
                </li>
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
                <li>
                  <button
                    onClick={() => scrollToSection(regionsRef)}
                    className="hover:text-accent transition"
                  >
                    Europe
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(regionsRef)}
                    className="hover:text-accent transition"
                  >
                    Americas
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>pravaahcommodities@gmail.com</li>
                <li>+91 78638 93010</li>
                <li>Ahmedabad, Gujarat, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Pravaah Commodities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
