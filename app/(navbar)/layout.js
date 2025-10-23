import Navbar from "@/components/navbar";

export default function NavbarLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}