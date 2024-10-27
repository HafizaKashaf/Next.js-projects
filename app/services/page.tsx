
import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-lg text-gray-700 mb-6">Explore our range of services.</p>
      <div className="space-y-4">
        <Link href="/services/app-development" className="text-blue-500 hover:underline">
          App Development
        </Link>
        <br />
        <Link href="/services/website-development" className="text-blue-500 hover:underline">
          Website Development
        </Link>
      </div>
    </div>
  );
}