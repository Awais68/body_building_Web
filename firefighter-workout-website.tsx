import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Play, Users, Trophy, Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const FirefighterWorkoutWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Header = () => (
    <header className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Photo Collage with Angled Slices */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {/* Simulated workout photos with angled cuts */}
        <div className="relative overflow-hidden transform skew-x-3">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 opacity-80"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-bold">CHIN UPS</div>
        </div>
        <div className="relative overflow-hidden transform -skew-x-2">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 opacity-80"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-bold">STRENGTH</div>
        </div>
        <div className="relative overflow-hidden transform skew-x-1 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 opacity-80"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-bold">ENDURANCE</div>
        </div>
        <div className="relative overflow-hidden transform -skew-x-3 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-900 opacity-80"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-bold">TRAINING</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <div className="text-red-500 text-2xl md:text-3xl font-bold tracking-wider transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent filter drop-shadow-lg">
              WORKOUT CHALLENGE
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-red-500 font-semibold transition-colors duration-300">Home</a>
          <a href="#editions" className="text-white hover:text-red-500 font-semibold transition-colors duration-300">EDITIONS</a>
          <a href="#results" className="text-white hover:text-red-500 font-semibold transition-colors duration-300">RESULTS</a>
          <a href="#shop" className="text-white hover:text-red-500 font-semibold transition-colors duration-300">FCL SHOP</a>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            CONTACT US
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-lg z-40 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#home" className="text-white hover:text-red-500 font-semibold">Home</a>
            <a href="#editions" className="text-white hover:text-red-500 font-semibold">EDITIONS</a>
            <a href="#results" className="text-white hover:text-red-500 font-semibold">RESULTS</a>
            <a href="#shop" className="text-white hover:text-red-500 font-semibold">FCL SHOP</a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold w-fit">
              CONTACT US
            </button>
          </div>
        </div>
      )}

      {/* Main Header Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-white via-gray-300 to-red-500 bg-clip-text text-transparent filter drop-shadow-2xl">
              FIREFIGHTER
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-red-500 filter drop-shadow-lg">
            WORKOUT CHALLENGE
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 font-semibold tracking-wide">
            Where Strength Meets Firefighter Determination
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              JOIN THE CHALLENGE
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              WATCH VIDEO
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const FCLSection = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="bg-gradient-to-br from-gray-300 to-gray-500 text-black font-bold text-2xl md:text-3xl p-6 rounded-xl text-center shadow-lg">
                FCL LOGO
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8 text-white">
              <p className="text-lg leading-relaxed mb-6">
                The Firefighter Workout Challenge is a program of the FCL (Firefighter Challenge League) that supports its 
                three-part nonprofit mission of highlighting the strength and readiness of the fire service, encouraging 
                interest in firefighting careers, and offering engaging methods to help firefighters maintain and improve their fitness.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                The FCL is the global authority for all FCL leagues, licenses, and events. Our dragman icon marks officially 
                sanctioned groups and competitions that comply with FCL standards. Visit our website to confirm any party using 
                this logo; if they're not listed, they are not affiliated with FCL.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700">
            Honored to have <span className="bg-blue-600 text-white px-4 py-2 rounded font-bold">SERVPRO</span> as the Official Naming Partner of FCL United States.
          </p>
        </div>
      </div>
    </section>
  );

  const VirtualArenaSection = () => (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-gray-900/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider">
          <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            UNLEASH YOUR STRENGTH
          </span>
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-12">
          AND CONQUER THE VIRTUAL ARENA
        </h3>
      </div>
    </section>
  );

  const ElevateSection = () => (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Elevate Your Workout, <span className="text-red-500">Elevate Your Fun</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            The Firefighter Workout Challenge offers various virtual competitions year-round known as 'editions'. 
            Each edition is developed by well-known fitness coaches, fitness apps, fitness products, fitness organizations, 
            and even pro athletes that generously support our nonprofit.
          </p>
          <p>
            Firefighters can compete from the convenience of their home, fire station, drill field, gym, and more. 
            Participants simply login into the app provided by our Edition partner and then record their daily results! 
            It's that easy!
          </p>
        </div>
      </div>
    </section>
  );

  const WhoCanPlaySection = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">WHO CAN PLAY?</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 rounded-full p-4">
                <Play className="text-white" size={32} />
              </div>
            </div>
            <p className="text-center text-gray-400 mb-4">PROMOTIONAL VIDEO</p>
          </div>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Athletes competing in this Series must be in the fire service and can be a cadet, rookie, retired, 
              volunteer, military, or career firefighter. Teens involved in a high school or fire department 
              organized junior firefighter/fire explorer are also eligible.
            </p>
            <p className="font-semibold">
              <span className="text-red-600">Lay Persons?</span> Stay tuned! In the future we will be adding editions 
              for those aspiring firefighters to compete in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const HowToCompeteSection = () => (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">HOW TO COMPETE</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Users, title: "Step One", subtitle: "Sign Up", desc: "Register for the challenge" },
            { icon: Zap, title: "Step Two", subtitle: "Get Moving", desc: "Start your training" },
            { icon: Trophy, title: "Step Three", subtitle: "Receive Credit", desc: "Track your progress" }
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 mb-6 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <step.icon className="text-red-600" size={32} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <h4 className="text-white font-semibold text-lg mb-2">{step.subtitle}</h4>
                <p className="text-red-100">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const CurrentEditionsSection = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">CURRENT EDITIONS</h2>
        </div>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-md">
            <div className="bg-red-600 rounded-xl p-6 mb-6">
              <h3 className="text-white font-bold text-2xl text-center">PARTNER LOGO</h3>
            </div>
            <h4 className="text-white font-bold text-xl mb-4 text-center">Challenge Name</h4>
            <p className="text-gray-300 text-center mb-6">Challenge description and details</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors duration-300">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const SpotlightsSection = () => (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">SPOTLIGHTS</h2>
          <p className="text-gray-400 text-lg">News Stories • Athlete Spotlights • Updates</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-700 rounded-xl h-48 mb-6"></div>
              <h3 className="text-white font-bold text-xl mb-3">Spotlight Title {item}</h3>
              <p className="text-gray-400 mb-4">Latest news and athlete achievements from our community...</p>
              <button className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-300">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-red-500 text-2xl font-bold mb-4">WORKOUT CHALLENGE</div>
            <div className="text-gray-400 text-sm mb-4">FCL LOGO</div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white block transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-400 hover:text-white block transition-colors duration-300">Editions</a>
              <a href="#" className="text-gray-400 hover:text-white block transition-colors duration-300">Results</a>
              <a href="#" className="text-gray-400 hover:text-white block transition-colors duration-300">Shop</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@firefighterworkoutchallenge.org</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" size={24} />
              <Twitter className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" size={24} />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" size={24} />
              <Youtube className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" size={24} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Firefighter Workout Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans">
      <Header />
      <FCLSection />
      <VirtualArenaSection />
      <ElevateSection />
      <WhoCanPlaySection />
      <HowToCompeteSection />
      <CurrentEditionsSection />
      <SpotlightsSection />
      <Footer />
    </div>
  );
};

export default FirefighterWorkoutWebsite;