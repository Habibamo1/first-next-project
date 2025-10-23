'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/products", name: "Products" },
    { path: "/login", name: "login" },

]
const Navbar = () => {
    const pathName = usePathname();
    return (
        <div style={{ padding: 20, borderBottom: "1px solid gray", backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", display: "flex" }}>
            {links.map((link) => (
                <li key={link.name} style={{ listStyle: "none", display: "inline", backgroundColor: pathName === link.path ? "lightgray" : "transparent", padding: 5, borderRadius: 5 }}>
                    <Link href={link.path} style={{ marginRight: 20, color: pathName === link.path ? "blue" : "black" }}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </div>
    )
}

export default Navbar