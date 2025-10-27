import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-gray-300 py-4 text-center '>
            <p>
                &copy;{new Date().getFullYear()}
                My Website .All rights reserved.
            </p>
        </div>
    )
}

export default Footer