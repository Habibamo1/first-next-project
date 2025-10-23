'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const fetchProductDetails = async () => {
        const fetchData = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await fetchData.json();
        setProduct(data);
        console.log(data);
    }
    useEffect(() => {
        fetchProductDetails();
    }, []);
    return (
        <div>
            <div className="min-h-screen bg-white p-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="bg-white rounded-lg border p-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-96 object-contain mix-blend-multiply"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                                <div className="mt-2 flex items-center space-x-4">
                                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-lg ${i < Math.floor(product.rating?.rate)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="text-gray-600">
                                    {product.rating?.rate} ({product.rating?.count} reviews)
                                </span>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Description</h3>
                                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                    Add to Cart
                                </button>
                                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                                    Buy Now
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold mb-3">Product Information</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-600">Category:</span>
                                        <p className="capitalize">{product.category}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-600">In Stock:</span>
                                        <p>Yes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails