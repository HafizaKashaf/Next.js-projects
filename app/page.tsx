
import React from 'react';
import Link from 'next/link';


export default function Layout() {
  return (
    <div>
      <div>
        <h1 className='bg-orange-600'>HOME--------</h1>
      </div>
      
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/services" className="hover:underline">Services</Link>
        
    </div>
  );
}