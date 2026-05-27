// "use client"; // যেহেতু আমরা useEffect ব্যবহার করছি
// import { useState, useEffect } from 'react';

// export default function PopularProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // public ফোল্ডার থেকে ডেটা ফেচ করা হচ্ছে
//     fetch('/products.json')
//       .then((res) => res.json())
//       .then((data) => setProducts(data.slice(0, 3))) // প্রথম ৩টি নেওয়া হচ্ছে
//       .catch((err) => console.error("Error loading products:", err));
//   }, []);

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">🔥 Popular Products</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
//               <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-yellow-500 font-bold">⭐ {product.rating}</span>
//                 <span className="text-lg font-bold">${product.price}</span>
//               </div>
//               <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }