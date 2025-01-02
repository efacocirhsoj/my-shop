import React from 'react';

function ProductList() {
  const products = [
    {
      id: 1,
      name: "測試商品1",
      price: 100,
      image: "https://picsum.photos/200",  // 使用測試圖片
      description: "這是測試商品1"
    },
    {
      id: 2,
      name: "測試商品2",
      price: 200,
      image: "https://picsum.photos/201",  // 使用測試圖片
      description: "這是測試商品2"
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">商品列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
