import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '', image: '', category: '' });

  useEffect(() => {
    // Fetch products
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));

    // Fetch users
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  const handleAddProduct = () => {
    // Add new product to API
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => setProducts([...products, data]));

    setNewProduct({ title: '', price: '', description: '', image: '', category: '' });
  };

  const handleDelProduct = (productId) => {
    // Delete product from API
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        setProducts(products.filter(product => product.id !== productId));
      });
  };

  const handleDelUser = (userId) => {
    // Delete user from API
    fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      });
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      <div className="text-center py-6">
        <h1 className="font-bold text-3xl pb-5">Admin Panel</h1>
      </div>

      <div className="flex flex-col 2xl:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Products Management */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{product.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">${product.price}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelProduct(product.id)}
                        className='text-white mt-2 drop-shadow-lg bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none font-medium rounded-md text-sm px-3 py-1.5'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6">Add New Product</h3>
          <div className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Title"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700"
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700"
            />
            <button onClick={handleAddProduct} className='w-full py-2 text-white drop-shadow-lg bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none font-medium rounded-md text-sm'>
              Add Product
            </button>
          </div>
        </div>

        {/* Users Management */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{user.email}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelUser(user.id)}
                        className='text-white drop-shadow-lg bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none font-medium rounded-md text-sm px-3 py-1.5'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}