
import './App.css';
import React, { useEffect, useState } from 'react';
import { ChevronRight, Shield, Microscope, Star, Droplet, Zap, Sun } from 'lucide-react';
import skin from "./images/landing.jpg"
import c1 from "./images/c1.jpg"; 
import c2 from "./images/c3.jpg";
import c3 from "./images/c2.jpg";
import c4 from "./images/c4.jpg";

function App() {
  const handlePopupOpen = () => {
    window.open(
      'https://api.leadconnectorhq.com/widget/form/93hSaxuOFHHyEbt5DXwW',
      'popup',
      'width=600,height=700,scrollbars=yes,resizable=yes'
    );
  };

  const clients = [
    {
      id: "Client 001",
      image: c1,
      testimonial:
        "I had tried numerous products before, but Mia Peel was the first treatment that actually showed real results. The improvement in my skin tone is remarkable.",
    },
    {
      id: "Client 002",
      image: c2,
      testimonial:
        "The difference in my skin's texture and tone is incredible. I appreciate how the treatment was tailored to my specific needs.",
    },
    {
      id: "Client 003",
      image: c3,
      testimonial:
        "As someone with sensitive skin, I was initially hesitant. The careful approach and amazing results exceeded my expectations.",
    },
    {
      id: "Client 004",
      image: c4,
      testimonial:
        "I was surprised by how quickly I saw results! After just one month, the pigmentation on my arm has faded significantly. The treatment process was comfortable, and the aftercare was easy to manage. Highly recommend!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, slideInterval);
    return () => clearInterval(interval); 
  }, [clients.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };



return (
<div className="min-h-screen bg-stone-50 text-stone-900" >
{/* Hero Section */}
<section className="relative h-screen flex items-center  bg-stone-100 bg-no-repeat sm:bg-contain lg:bg-cover bg-opacity-80" style={{backgroundImage : `url(${skin})`}}>
<div className="max-w-4xl right-0 absolute lg:top-[50vh] sm:top-[45vh] px-6 text-center">
<h1 className="text-4xl md:text-6xl font-light mb-6">Clinical-Grade Intimate Care for Melanin-Rich Skin</h1>
<p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
The first scientifically-formulated intimate peel designed specifically for hyperpigmentation in melanin-rich skin.
</p>
<button className="bg-stone-900 text-white px-8 py-4 rounded-full flex items-center justify-center mx-auto hover:bg-stone-800 transition-colors"    onClick={handlePopupOpen}>
Book Consultation <ChevronRight className="ml-2" size={20} />
</button>
</div>
</section>

{/* Trust Indicators */}
<section className="py-16 bg-white">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center">
<Shield className="w-12 h-12 mb-4 text-stone-700" />
<h3 className="text-xl font-medium mb-2">Clinically Tested</h3>
<p className="text-stone-600">Dermatologically approved for sensitive intimate areas</p>
</div>
<div className="flex flex-col items-center text-center">
<Microscope className="w-12 h-12 mb-4 text-stone-700" />
<h3 className="text-xl font-medium mb-2">Scientific Formula</h3>
<p className="text-stone-600">Featuring Kojic Acid and Glutathione</p>
</div>
<div className="flex flex-col items-center text-center">
<Star className="w-12 h-12 mb-4 text-stone-700" />
<h3 className="text-xl font-medium mb-2">Proven Results</h3>
<p className="text-stone-600">Visible improvement in skin tone</p>
</div>
</div>
</section>

{/* New Ingredients Section */}
<section className="py-20 bg-stone-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Active Ingredients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
{/* Kojic Acid */}
<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="flex items-center mb-6">
<Droplet className="w-8 h-8 text-amber-600 mr-4" />
<h3 className="text-2xl font-light">Kojic Acid</h3>
</div>
<p className="text-stone-600 mb-4">
A powerful natural brightening agent derived from fungi. Effectively reduces melanin production and helps fade hyperpigmentation.
</p>
<ul className="text-stone-600 space-y-2">
<li className="flex items-center">
<span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
Inhibits melanin formation
</li>
<li className="flex items-center">
<span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
Natural skin brightening
</li>
</ul>
</div>

{/* Glutathione */}
<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="flex items-center mb-6">
<Zap className="w-8 h-8 text-emerald-600 mr-4" />
<h3 className="text-2xl font-light">Glutathione</h3>
</div>
<p className="text-stone-600 mb-4">
A powerful antioxidant that promotes even skin tone while protecting against oxidative stress and environmental damage.
</p>
<ul className="text-stone-600 space-y-2">
<li className="flex items-center">
<span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
Potent antioxidant protection
</li>
<li className="flex items-center">
<span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
Promotes skin renewal
</li>
</ul>
</div>

{/* Vitamin C */}
<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="flex items-center mb-6">
<Sun className="w-8 h-8 text-orange-500 mr-4" />
<h3 className="text-2xl font-light">Vitamin C</h3>
</div>
<p className="text-stone-600 mb-4">
A stable form of Vitamin C that brightens skin tone while providing antioxidant benefits and promoting collagen production.
</p>
<ul className="text-stone-600 space-y-2">
<li className="flex items-center">
<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
Brightens & evens skin tone
</li>
<li className="flex items-center">
<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
Boosts collagen synthesis
</li>
</ul>
</div>
</div>
</div>
</section>

{/* Results Section */}
<section className="py-8 bg-white h-screen">

<div className="relative w-full max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={clients[currentIndex].image}
          alt={clients[currentIndex].id}
          className="h-[60vh] object-cover shadow-lg p-4"
        />
        <div className="bg-white shadow-lg rounded-lg p-6 mt-4 text-center">
          <p className="text-gray-700 italic">"{clients[currentIndex].testimonial}"</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  
</section>

{/* CTA Section */}
<section className="py-16 bg-stone-900 text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-light mb-6">Begin Your Journey</h2>
<p className="text-lg md:text-xl mb-8 text-stone-300">
Experience the first chemical peel specifically formulated for melanin-rich intimate areas.
</p>
<button className="bg-white text-stone-900 px-8 py-4 rounded-full inline-flex items-center hover:bg-stone-100 transition-colors" onClick={handlePopupOpen}>
Book Your Consultation <ChevronRight className="ml-2" size={20} />
</button>
</div>
</section>
</div>
);
}

export default App;
