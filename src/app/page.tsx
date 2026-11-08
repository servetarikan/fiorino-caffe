"use client";

import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#2b2b2b]">

      {/* GOOGLE ADS ETİKETİ */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=AW-10930926781" 
        strategy="afterInteractive" 
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10930926781');
        `}
      </Script>

      {/* YENİ ÜRÜN POP-UP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden">
            
            {/* Kapatma Butonu (Çarpı) */}
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/80 transition z-10"
            >
              ✕
            </button>
            
            {/* Ürün Fotoğrafı (Tam görünmesi için object-contain ve max-h-80 eklendi) */}
            <div className="bg-[#f6f1ea] flex justify-center items-center">
              <img 
                src="/yeni-urun.jpg" 
                alt="Seasonal Coffee" 
                className="w-full h-auto max-h-80 object-contain"
              />
            </div>
            
            {/* Alt Metin ve Yönlendirme */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">New Seasonal Coffee!</h3>
              <p className="text-gray-600 mb-4 text-sm">Discover our newest seasonal coffee.</p>
              <a 
                href="/menu" 
                className="inline-block px-8 py-2 bg-[#2b2b2b] text-white rounded-full hover:scale-105 transition"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      )}

      {/* NAV */}
      <header className="flex justify-between items-center px-8 py-6">
        <img src="/logo.png" className="w-20" />

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about">About</a>
          <a href="/menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY (yazı okunması için) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 text-white">

          <h1 className="text-5xl md:text-7xl font-light tracking-wide opacity-0 animate-fadeUp">
            Fiorino Caffè
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 opacity-0 animate-fadeUp delay-200">
            Authentic Italian coffee experience with premium desserts
          </p>

          <a
            href="/menu"
            className="mt-10 inline-block px-8 py-3 rounded-full bg-white text-black hover:scale-105 transition"
          >
            View Menu
          </a>

        </div>
      </section>

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#d6c7b2] blur-3xl opacity-30 rounded-full -z-10" />
      

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src="/about.jpg"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
          />

          {/* soft glow */}
          <div className="absolute -inset-4 bg-[#d6c7b2] blur-3xl opacity-20 -z-10 rounded-3xl" />
        </div>

        <div>
          <h2 className="text-4xl font-light mb-6">Our Story</h2>

          <p className="text-[#666] leading-7">
            Caffe Fiorino: A Tale of Flavor and the Warmth of Home
            In 2022, fueled by our passion for coffee and our love for hospitality, we embarked on a journey as a small family-run business: Caffe Fiorino.

            From day one, our greatest dream has been to make everyone who steps through our doors feel as comfortable and at peace as they would in their own living room. Today, we continue to welcome our guests with that same warmth, genuine smiles, and a helpful spirit. Our ultimate goal is to bring a sweet smile to the faces of guests of all ages.

            Signature Flavors, Premium Coffee
            To us, Caffe Fiorino is much more than just a cafe; it is a cozy gathering place where beautiful memories are made with loved ones. We carefully select our premium coffee beans to perfectly accompany your most joyful conversations, and we crown this experience with our homemade desserts, crafted from our own unique recipes.

            High Quality is Our Standard
            We believe the true secret to great taste lies in naturalness and mindful preparation. That is why we hold fast to strict principles in our kitchen:

            A Promise of Naturalness: You will never find preservatives or artificial sweeteners in any of our homemade desserts.

            Boutique & Limited Production: Because we have embraced exceptional quality as our standard, we craft our desserts in limited quantities with the utmost care. This ensures that every single serving delivers the same flawless taste.

            We invite you to Caffe Fiorino to sip a meticulously brewed, premium coffee and savor our natural desserts in an atmosphere that feels just like home.

            Thank you for being a part of our story and sharing your beautiful smiles with us.
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-light text-center mb-10">
          Moments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img src="/img1.jpg" className="rounded-2xl h-64 object-cover" />
          <img src="/img2.jpg" className="rounded-2xl h-64 object-cover" />
          <img src="/img3.jpg" className="rounded-2xl h-64 object-cover" />

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-[#ede3d6]">

        <h2 className="text-4xl font-light mb-6">
          Experience Fiorino
        </h2>

        <p className="text-[#5a5a5a] mb-8">
          Premium coffee, calm atmosphere, unforgettable taste.
        </p>

        <a
          href="/menu"
          className="px-8 py-3 bg-[#2b2b2b] text-white rounded-full hover:scale-105 transition"
        >
          Explore Menu
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#777]">
        <p>Fiorino Caffè Budva © 2022</p>
        <p>www.fiorinocaffe.com</p>
      </footer>
      
      <footer className="py-16 bg-[#ede3d6] mt-20 text-center">

        <p className="text-sm text-[#555] mb-6">
          Visit Us & Follow Fiorino Caffè
        </p>

        {/* SOCIAL */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">

          <a href="https://instagram.com/caffefiorinobudva"
            target="_blank"
            className="px-6 py-2 bg-white rounded-full shadow hover:scale-105 transition text-sm"
          >
            Instagram
          </a>

          {/* Tripadvisor */}
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g304074-d24144882-Reviews-Caffe_Fiorino_Budva-Budva_Budva_Municipality.html"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow hover:scale-105 transition text-sm"
          >
            Tripadvisor
          </a>

        </div>

        {/* MAP */}
        <div className="max-w-5xl mx-auto px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184.50094266284216!2d18.8377889!3d42.2782014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd5a677aa21ff%3A0xc7a6746317beb81!2sCaffe%20Fiorino%20Budva!5e0!3m2!1str!2s!4v1778372543613!5m2!1str!2s" width="400" height="300" loading="lazy"
            className="w-full h-72 rounded-2xl shadow-xl"
          />
        </div>

        <p className="text-xs text-[#777] mt-8">
          Arikans Group Doo
        </p>

      </footer>

    </main>
  );
}
