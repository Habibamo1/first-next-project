import Link from 'next/link';
import React from 'react'

const Products = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products')
    const data = await fetchData.json()
    console.log(data);

    return (
        <div className='grid grid-cols-5'>
            {data.map((item) => (
                <Link href={`/products/${item.id}`} key={item.id}>
                    <div key={item.id} className='border p-4 m-2'>
                        <img src={item.image} alt={item.title} className='w-full h-48 object-contain mb-2' />
                        <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                        <p className='text-gray-700 mb-2'>${item.price}</p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products
