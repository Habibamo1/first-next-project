import Image from "next/image";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center">
      <h1 className="text-6xl font-extrabold mb-6 tracking-wide">
        Welcome to our e-commerce website.
        You will find a variety of products to suit your needs!
      </h1>
    </div>
  );
}
