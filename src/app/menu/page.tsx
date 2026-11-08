"use client";

import { useState, useEffect } from 'react';

export default function MenuPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#333] p-6">

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
            
            {/* Ürün Fotoğrafı */}
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
              <button 
                onClick={() => setShowPopup(false)}
                className="inline-block px-8 py-2 bg-[#2b2b2b] text-white rounded-full hover:scale-105 transition"
              >
                Continue to Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BACK BUTTON */}
      <div className="max-w-3xl mx-auto mb-2">
        <a 
          href="/" 
          className="inline-flex items-center px-5 py-2 bg-white rounded-full shadow-md hover:scale-105 transition text-sm font-medium"
        >
          <span className="mr-2 text-lg leading-none">←</span> Back to Home
        </a>
      </div>

      {/* HEADER */}
      <header className="text-center mb-10">
        <img src="/logo.png" className="mx-auto w-32 mb-3" alt="logo" />
        <h1 className="text-3xl font-bold text-black-400">Fiorino Caffe Budva</h1>
        <p>Digital Menu</p>
      </header>

      {/* COFFEE */}
      <Section title="Coffee">
        <Item name="Espresso 30ml" price="€1.80" />
        <Item name="Double Espresso 60ml" price="€ 3.00" />
        <Item name="Espresso Lungo 80ml" price="€ 2.00" />
        <Item name="Ristretto 20ml" price="€ 1,80" />
        <Item name="Espresso Macchiato 120ml" desc="(Espresso, Foam Milk)" price="€ 2.50" />
        <Item name="Americano 220ml" desc="(Espresso, Hot Water)" price="€ 2.00" />
        <Item name="Cappuccino 280ml" desc="(Espresso, Milk)" price="€ 2.80" />
        <Item name="Cortado 180ml" desc="(Double Espresso Milk)" price="€ 3,00" />
        <Item name="Flat White 280ml" desc="(Double Espresso, Milk)" price="€ 3.00" />
        <Item name="Caffe Mocha 280ml" desc="(Chocolate Syrup, Espresso, Foam Milk)" price="€3.50" />
        <Item name="White Chocolate Mocha 280ml" desc="(White Chocolate Syrup, Espresso, Foam Milk)" price="€ 3.50" />
        <Item name="Filter Coffee 220ml" price="€ 3.00" />
        <Item name="Irish Coffee 280ml" desc="(Espresso, Whisky, Sugar Syrup)" price="€7.00" />
        <Item name="Turkish Coffee 75ml" price="€ 3.00" />
        <Item name="Hot Chocolate 280ml" desc="(Chocolate Powder, Milk)" price="€ 3.50" />
        <Item name="Affogato 280ml" desc="(Espresso, Vanilla Ice Cream)" price="€ 6,50" />
        <Item name="Caffe Latte 280ml" desc="(Espresso, Milk)" price="€2.80" />
        <Item name="Latte Macchiato 280ml" desc="(Espresso, Milk)" price="€ 2,80" />
        <Item name="Caramel Latte 280ml" desc="(Caramel Syrup, Espresso, Milk)" price="€ 3.50" />
        <Item name="Cinnamon & Honey Latte 280ml" desc="(Espresso, Milk Cinnamon, Honey)" price="€3,50" />
        <Item name="Lavander Latte 280ml" desc="(Espresso, Milk, Lavander Syrup)" price="€ 3.50" />
        <Item name="Vanilla Latte 280ml" desc="(Espresso, Milk Vanilla Syrup)" price="€ 3.50" />
        <Item name="Brulee Latte 280ml" desc="(Espresso, Milk Brown Sugar)" price="€ 4.00" />
        <Item name="Baileys Latte 280ml" desc="(Espresso, Baileys, Milk)" price="€5.50" />
        <Item name="Matcha Latte 280ml" desc="(Matcha, Milk)" price="€5,50" />
      </Section>

      {/* RAF */}
      <Section title="Raf">
        <Item name="Raf Caramel 280ml" desc="(Espresso, Caramel Syrup, Milk)" price="€ 3.50" />
        <Item name="Raf Vanilla 280ml" desc="(Espresso, Vanilla Syrup, Milk)" price="€ 3,50" />
        <Item name="Raf Coconut 280ml" desc="(Espresso Coconut Syrup, Milk)" price="€ 3.50" />
        <Item name="Raf Lavander 280ml" desc="(Espresso, Lavander Syrup, Milk)" price="€ 3.50" />
        <Item name="Raf Almond 280ml" desc="(Espresso, Almond Syrup, Milk)" price="€3.50" />
        <Item name="Raf Hazelnut 280ml" desc="(Espresso, Hazelnut Syrup Milk)" price="€ 3.50" />
        <Item name="Raf Cookie 280ml" desc="(Espresso, Cookie Syrup, Milk)" price="€3.50" />
        <Item name="Raf Baileys 280ml" desc="(Espresso, Baileys, Milk)" price="€ 5.50" />
      </Section>

      {/* PATISSERIE */}
      <Section title="Patisserie">
        <Item name="Kreampita 200gr" desc="(Traditional Balkan Dessert)" price="€ 6.90" />
        <Item name="Basque Cheesecake 200gr (San Sebastian)" desc="(Basque Cheesecake Served with Caramel Sauce)" price="€ 6.90" />
        <Item name="Lemon Cheesecake 200gr" price="€ 6.90" />
        <Item name="Forest Fruits Cheesecake 200gr" price="€ 6.90" />
        <Item name="Cherry Cheesecake 200gr" price="€ 6.90" />
        <Item name="Pistachio Cheesecake 200gr" price="€ 7.50" />
        <Item name="Souffle Brownie 180gr" price="€ 6.50" />
        <Item name="Magnolia Cups 200gr" price="€ 6.90" />
        <Item name="Tiramisu 200gr" price="€ 6.90" />
        <Item name="Cramble & Ice Cream 220gr" price="€ 7.00" />
        <Item name="Cookies Chocolate 80gr" price="€3.00" />
        <Item name="Cookies Tahini 80gr" desc="(Vegan & Gluten Free)" price="€3.00" />
        <Item name="Extra Ice Cream" desc="(1 Scoop Vanilla)" price="€1.50" />
      </Section>

      {/* COLD DRINKS */}
      <Section title="Cold Drinks">
        <Item name="Cold Brew 350ml" desc="(Ice Cold Brewed Coffee)" price="€5.00" />
        <Item name="Iced Americano 350ml" desc="(Ice, Espresso, Cold Water)" price="€ 3.50" />
        <Item name="Iced Latte 350ml" desc="(Ice, Espresso Milk)" price="€4.00" />
        <Item name="Iced Vanilla Latte 350ml" desc="(Ice, Espresso, Vanilla Syrup, Milk)" price="€ 4.50" />
        <Item name="Iced Lavander Latte 350ml" desc="(Ice, Espresso, Lavender Syrup, Milk)" price="€ 4.50" />
        <Item name="Iced Bitter Almond Latte 350ml" desc="(Ice, Espresso, Almond Syrup, Milk)" price="€ 4.50" />
        <Item name="Iced Hazelnut Latte 350ml" desc="(Ice, Espresso, Hazelnut Syrup, Milk)" price="€ 4.50" />
        <Item name="Iced Caramel Frappuccino 350ml" desc="(Ice, Caramel Syrup Espresso, Caramel Sauce Cream Foam)" price="€5.00" />
        <Item name="Iced Chocolate Frappuccino 350ml" desc="(Ice, Chocolate Syrup, Espresso, Chocolate Sauce, Cream Foam)" price="€5.00" />
        <Item name="Iced Strawberry Frappuccino 350ml" desc="(Ice, Strawberry Syrup, Espresso, Strawberry Sauce, Cream Foam)" price="€ 5.00" />
        <Item name="Iced Coconut Frappuccino 350ml" desc="(Ice, Coconut Syrup, Espresso, Coconut Sauce Cream Foam)" price="€ 5.00" />
        <Item name="Iced Mango Frappuccino 350ml" desc="(Ice, Mango Syrup, Espresso, Mango Sauce, Cream Foam)" price="€5.00" />
        <Item name="Iced Forest Fruit Frappuccino 350ml" desc="(Ice Forest Fruit Syrup, Espresso, Forest Fruit Sauce, Cream Foam)" price="€ 5.00" />
        <Item name="Espresso-Tonic 350ml" desc="(Ice, Espresso, Tonic Water)" price="€5.00" />
        <Item name="Baileys Iced Coffee 350ml" desc="(Ice, Espresso, Milk Baileys)" price="€ 7.00" />
        <Item name="Orange-Espresso 350ml" desc="(Ice, Espresso, Fresh Orange Juice)" price="€ 5.50" />
        <Item name="Alternative Milk" desc="(Almond, Oat, Soy, Coconut)" price="€1.50" />
      </Section>

      {/* NON COFFEE */}
      <Section title="Non-Coffee & Cold Drinks">
        <Item name="Banana Smoothie 350ml" desc="(Banana, Milk, Oat Cereal, Honey)" price="€5,50" />
        <Item name="Forest Fruit-Banana Smoothie 350ml" desc="(Banana Forest Fruits Milk, Oat Cereal Honey)" price="€ 5.50" />
        <Item name="Coconut Smoothie 350ml" desc="(Coconut Puree Milk, Oat Cereal Honey)" price="€ 5.50" />
        <Item name="Mango Smoothie 350ml" desc="(Mango Puree Milk, Oat Cereal, Honey)" price="€5,50" />
        <Item name="Strawberry-Banana Smoothie 350ml" desc="(Banana Strawberry, Milk, Oat Cereal Honey)" price="€ 5.50" />
        <Item name="Milkshake Banana 350ml" desc="(Banana Milk, Honey)" price="€ 5.00" />
        <Item name="Milkshake Strawberry 350ml" desc="(Strawberry, Milk, Honey)" price="€ 5.00" />
        <Item name="Milkshake Chocolate 350ml" desc="(Chocolate Powder Milk)" price="€ 5.00" />
        <Item name="Milkshake Vanilla 350ml" desc="(Vanilla Syrup, Milk)" price="€ 5.00" />
        <Item name="Fresh Orange Juice 300ml" desc="(Ice, Fresh Orange)" price="€ 5.00" />
        <Item name="Ice Tea Lemon 350ml" desc="(Black Tea, Lemon, Ice)" price="€ 4.50" />
        <Item name="Lemonade Classic 350ml" price="€ 4.50" />
        <Item name="Lemonade Strawberry 350ml" price="€ 5.00" />
        <Item name="Lemonade Mango 350ml" price="€5,00" />
        <Item name="Iced Matcha Classic 350ml" price="€ 6.00" />
        <Item name="Iced Matcha Mango 350ml" price="€ 6,50" />
        <Item name="Iced Matcha Coconut 350ml" price="€ 6,50" />
        <Item name="Iced Matcha Strawberry 350ml" price="€ 6.50" />
        <Item name="Alternative Milk" desc="(Almond, Oat, Soy, Coconut)" price="+€1.50" />
      </Section>

      {/* TEA */}
      <Section title="Tea">
        <Item name="Black Tea 220ml" price="€2,00" />
        <Item name="Green Tea 220ml" price="€ 2.00" />
        <Item name="Apple & Cinnamon Tea 220ml" price="€ 2.00" />
        <Item name="Orange & Ginger Tea 220ml" price="€ 2.00" />
        <Item name="Lemon & Ginger Tea 220ml" price="€2,00" />
        <Item name="Mint Tea 220ml" price="€ 2.00" />
        <Item name="Chamomile Tea 220ml" price="€ 2.00" />
        <Item name="Forest Fruit Tea 220ml" price="€ 2.00" />
      </Section>

      {/* SOFT DRINKS */}
      <Section title="Soft Drinks">
        <Item name="Water" price="€ 2.00" />
        <Item name="Mineral Water 250ml" price="€ 2,00" />
        <Item name="Coca-Cola 330ml" price="€3.00" />
        <Item name="Coca-Cola Zero 330ml" price="€ 3.00" />
        <Item name="Sprite 330ml" price="€ 3.00" />
        <Item name="Fanta 330ml" price="€ 3,00" />
        <Item name="Juice 250ml" desc="(Apple, Cherry, Orange)" price="€ 3.00" />
        <Item name="Energy Drink 250ml" price="€3.00" />
        <Item name="Tonic 330ml" price="€ 3.00" />
      </Section>

      {/* SNACKS */}
      <Section title="Snacks">
        <Item name="Mozzarella Sandwich 180gr" desc="(Mozzarella, Pesto Sauce...)" price="€ 7.00" />
        <Item name="Turkey Ham Sandwich 180gr" desc="(Ajvar Sauce, Turkey Ham...)" price="€ 7.50" />
      </Section>

      {/* EXTRAS */}
      <Section title="Extras">
        <Item name="Extra Shot Espresso" price="+€1.50" />
        <Item name="Extra Syrup" price="+€0.50" />
        <Item name="Extra Milk" price="+€0.50" />
        <Item name="Alternative Hot Milk" desc="(Almond, Oat, Soy, Coconut)" price="+€1,00" />
        <Item name="Decaf" price="+€0.50" />
      </Section>

      {/* BEERS */}
      <Section title="Beers">
        <Item name="Niksicko 0,33ml" price="€3.50" />
        <Item name="Niksicko 0,50ml" price="€4.00" />
        <Item name="Somersby 0,33ml" price="€5.00" />
      </Section>

      {/* FOOTER */}
      <footer className="text-center mt-16 text-sm text-[#777]">
        <p className="mb-2">
          Instagram:{" "}
          <a
            href="https://instagram.com/caffefiorinobudva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-orange-500 font-medium transition"
          >
            @caffefiorinobudva
          </a>
        </p>
        <p>
          <a
            href="https://www.fiorinocaffe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-orange-500 font-medium transition"
          >
            www.fiorinocaffe.com
          </a>
        </p>
      </footer>

    </main>
  );
}

/* COMPONENTS */
function Section({ title, children }: any) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold border-b-2 border-orange-500 mb-4">
        {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Item({ name, price, desc }: any) {
  return (
    <div className="bg-white p-3 rounded shadow flex justify-between">
      <div>
        <p className="font-medium">{name}</p>
        {desc && <p className="text-sm text-gray-500">{desc}</p>}
      </div>
      <span className="font-bold">{price}</span>
    </div>
  );
}
