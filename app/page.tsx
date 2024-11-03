

import Link from 'next/link';


export default function Layout() {
  return (
    <div>
      
      <header className="bg-gray-800 text-white p-4">
      <h1 className='text-3xl font-bold text-left my-4'>NEXT JS</h1>
        <nav className="flex justify-end space-x-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/services" className="hover:underline">Service</Link>
        </nav>
      </header>
      
    </div>
  );
}