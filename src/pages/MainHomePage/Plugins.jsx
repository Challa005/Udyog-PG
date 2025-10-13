import React from "react";
import Zoho from "../../assets/zoho.svg";
import Word from "../../assets/word.svg";
import Wixlogo from "../../assets/wixlogo.svg";
import Shopilogo from "../../assets/shopilogo.svg";
import Prostla from "../../assets/prostla.svg";
import Magnet from "../../assets/Magnet.svg";
import Woo from "../../assets/woo.svg";

export default function Plugins() {
  const plugins = [
    { name: "Zoho", image: Zoho },
    { name: "WordPress", image: Word },
    { name: "Wix", image: Wixlogo },
    { name: "Shopify", image: Shopilogo },
    { name: "Prestashop", image: Prostla },
    { name: "Magento", image: Magnet },
    { name: "WooCommerce", image: Woo },
  ];

  return (
    <div className="h-[400px] bg-[rgb(94,93,174)] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-white font-bold mb-10 mt-8"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          Ready-to-use plug-ins
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center mt-15">
          {plugins.map((plugin, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl shadow-sm bg-[rgb(140,140,197)] 
                         transform transition-all duration-300 hover:scale-105 
                         hover:shadow-lg hover:bg-[rgb(160,160,210)] cursor-pointer"
            >
              <img
                src={plugin.image}
                alt={plugin.name}
                className="max-w-full h-16 object-contain mx-auto"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-15">
          <button className="bg-gradient-to-r from-[rgb(140,140,197)] to-[rgb(160,160,210)] 
                             hover:from-[rgb(160,160,210)] hover:to-[rgb(180,180,230)] 
                             text-white font-semibold px-10 py-3 rounded-xl shadow-md 
                             transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-lg">
            View Developer Document
            <span className="text-2xl">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}