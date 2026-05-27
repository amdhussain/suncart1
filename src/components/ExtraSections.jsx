// export default function ExtraSections() {
//   const tips = [
//     { title: "Hydration", desc: "Drink at least 3 liters of water daily to stay fresh." },
//     { title: "Skincare", desc: "Use SPF 50+ sunscreen every 2 hours to avoid sunburn." },
//     { title: "Clothing", desc: "Choose light-colored, breathable cotton fabrics." }
//   ];

//   const brands = ["SunShade", "BreezeWear", "AquaFlow", "CoolBlast"];

//   return (
//     <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white">
      
//       {/* Summer Care Tips Section */}
//       <div>
//         <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-400 pb-2 inline-block">☀️ Summer Care Tips</h2>
//         <div className="space-y-4">
//           {tips.map((tip, i) => (
//             <div key={i} className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
//               <h4 className="font-bold text-lg">{tip.title}</h4>
//               <p className="text-sm text-gray-700">{tip.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Top Brands Section */}
//       <div>
//         <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-400 pb-2 inline-block">💎 Top Brands</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {brands.map((brand, i) => (
//             <div key={i} className="border-2 border-black p-6 text-center font-black uppercase rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer">
//               {brand}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }