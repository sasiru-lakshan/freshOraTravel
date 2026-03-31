/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Plane, 
  Car, 
  Headphones, 
  ShieldCheck, 
  BadgeDollarSign, 
  Compass, 
  Leaf,
  Send,
  Globe,
  AtSign
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#006a6a]">FreshOra Travels</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-[#006a6a] font-medium">Destinations</a>
          <a href="#" className="text-gray-600 hover:text-[#006a6a] font-medium">Tours</a>
          <a href="#" className="text-gray-600 hover:text-[#006a6a] font-medium">Bookings</a>
          <a href="#" className="text-gray-600 hover:text-[#006a6a] font-medium">About Us</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-[#006a6a] w-64"
            />
          </div>
          <button className="bg-[#006a6a] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#005a5a] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/travel-hero/1920/1080" 
        alt="Tropical Island" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
    
    <div className="relative z-10 max-w-5xl px-4 text-center text-white">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#ffdf96] font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
      >
        ADVENTURE AWAITS
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight"
      >
        Your Passport to <br />
        <span className="text-[#7df5f5]">Unseen Worlds</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 p-2 bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-full border border-white/20 shadow-2xl mx-auto max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
          <div className="flex items-center px-6 py-4 md:py-2 group">
            <MapPin className="text-[#7df5f5] mr-3 w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">WHERE TO?</p>
              <input 
                type="text" 
                placeholder="Explore destination" 
                className="bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/40 text-sm font-medium w-full"
              />
            </div>
          </div>
          <div className="flex items-center px-6 py-4 md:py-2 border-t md:border-t-0 md:border-l border-white/10">
            <Calendar className="text-[#7df5f5] mr-3 w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">WHEN?</p>
              <input 
                type="text" 
                placeholder="Select dates" 
                className="bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/40 text-sm font-medium w-full"
              />
            </div>
          </div>
          <div className="flex items-center px-6 py-4 md:py-2 border-t md:border-t-0 md:border-l border-white/10">
            <Users className="text-[#7df5f5] mr-3 w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">TRAVELERS</p>
              <input 
                type="text" 
                placeholder="Add guests" 
                className="bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/40 text-sm font-medium w-full"
              />
            </div>
          </div>
          <button className="bg-[#006a6a] hover:bg-[#005a5a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center justify-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Find Trips</span>
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <span className="text-[#765a05] font-bold text-sm tracking-widest uppercase block mb-2">OUR SERVICES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#001f29] leading-tight">
          Elevating every step of <br />your exploration.
        </h2>
      </div>
      <p className="text-gray-500 max-w-md text-lg leading-relaxed">
        From the first flight to the final sunset, we curate experiences that linger in the memory long after the journey ends.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Tour Packages */}
      <div className="md:col-span-8 group relative overflow-hidden rounded-3xl h-[500px]">
        <img 
          src="https://picsum.photos/seed/hiking/1200/800" 
          alt="Tour Packages" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-10">
          <span className="bg-[#ffdf96] text-[#382900] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">PREMIUM</span>
          <h3 className="text-white text-3xl font-bold mb-2">Tour Packages</h3>
          <p className="text-white/80 max-w-sm mb-6">Fully immersive cultural and adventure circuits tailored to your pace.</p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-2 hover:bg-[#7df5f5] transition-colors">
            <span>Explore Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hotel Bookings */}
      <div className="md:col-span-4 group relative overflow-hidden rounded-3xl h-[500px]">
        <img 
          src="https://picsum.photos/seed/hotel/600/800" 
          alt="Hotel Bookings" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-10">
          <h3 className="text-white text-2xl font-bold mb-2">Hotel Bookings</h3>
          <p className="text-white/80 text-sm mb-4">Stay in hand-picked boutique retreats.</p>
          <a href="#" className="text-[#7df5f5] font-bold text-sm hover:underline flex items-center">
            Browse Stays <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Small Cards */}
      <div className="md:col-span-4 bg-[#f3faff] rounded-3xl p-8 flex flex-col justify-between border border-gray-100">
        <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#006a6a] shadow-sm mb-6">
          <Plane className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Global Flights</h3>
          <p className="text-gray-500 text-sm">Best-in-class pricing for international and domestic air travel.</p>
        </div>
      </div>

      <div className="md:col-span-4 bg-[#f3faff] rounded-3xl p-8 flex flex-col justify-between border border-gray-100">
        <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#006a6a] shadow-sm mb-6">
          <Car className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Transportation</h3>
          <p className="text-gray-500 text-sm">Private chauffeurs and luxury car rentals at your destination.</p>
        </div>
      </div>

      <div className="md:col-span-4 bg-[#e6f6ff] rounded-3xl p-8 flex flex-col justify-between border-2 border-[#006a6a]/10">
        <div className="bg-[#006a6a] w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6">
          <Headphones className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#006a6a]">Expert Guidance</h3>
          <p className="text-gray-600 text-sm">Personal travel concierges available around the clock.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/city1/400/400" className="rounded-2xl shadow-lg" alt="Market" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/city2/400/400" className="rounded-2xl shadow-lg mt-8" alt="People" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/city3/400/400" className="rounded-2xl shadow-lg -mt-8" alt="Street" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/city4/400/400" className="rounded-2xl shadow-lg" alt="Culture" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden md:block">
            <img src="https://picsum.photos/seed/sunset/400/300" className="w-full h-full object-cover" alt="Sunset" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <span className="text-[#765a05] font-bold text-sm tracking-widest uppercase block mb-4">WHY FRESHORA</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f29] leading-tight mb-6">
              Crafting experiences that transcend the ordinary.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We don't just book trips; we architect memories. Our commitment to excellence is reflected in every detail of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-[#006a6a]">
                <ShieldCheck className="w-6 h-6" />
                <h4 className="font-bold text-lg">Unmatched Support</h4>
              </div>
              <p className="text-gray-500 text-sm">Our 24/7 concierge ensures you're never alone, no matter the time zone.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-[#006a6a]">
                <BadgeDollarSign className="w-6 h-6" />
                <h4 className="font-bold text-lg">Best Value</h4>
              </div>
              <p className="text-gray-500 text-sm">Exclusive partnerships allow us to provide premium luxury at competitive rates.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-[#006a6a]">
                <Compass className="w-6 h-6" />
                <h4 className="font-bold text-lg">Unique Itineraries</h4>
              </div>
              <p className="text-gray-500 text-sm">Off-the-beaten-path experiences you won't find in any guidebook.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-[#006a6a]">
                <Leaf className="w-6 h-6" />
                <h4 className="font-bold text-lg">Sustainable Travel</h4>
              </div>
              <p className="text-gray-500 text-sm">Travel with a purpose—we prioritize eco-friendly partners and local communities.</p>
            </div>
          </div>

          <button className="bg-[#001f29] text-white px-10 py-4 rounded-full font-bold hover:bg-[#006a6a] transition-colors inline-flex items-center space-x-3 group">
            <span>Plan Your Escape</span>
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#006a6a] to-[#00a3a3] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <Send className="w-64 h-64 -rotate-12" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Wanderlust in your inbox.</h2>
        <p className="text-white/80 text-lg mb-10">
          Subscribe to get exclusive deals and the world's most beautiful travel inspiration delivered weekly.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none"
          />
          <button className="bg-white text-[#006a6a] px-10 py-4 rounded-full font-bold hover:bg-[#ffdf96] transition-colors">
            Join Now
          </button>
        </form>
        <p className="mt-6 text-white/50 text-xs">By subscribing, you agree to our privacy policy and terms of service.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-[#006a6a]">FreshOra Travels</div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Crafting extraordinary journeys for the modern traveler. Explore the world with confidence and luxury.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#006a6a] hover:text-[#00a3a3] transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#006a6a] hover:text-[#00a3a3] transition-colors">
              <AtSign className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Sitemap</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Popular Tours</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Sri Lanka Tours</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Dubai Deals</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Bali Getaways</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#006a6a] text-sm transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-xs">© 2024 FreshOra Travels. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7df5f5] selection:text-[#001f29]">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Newsletter />
      <Footer />
    </div>
  );
}
