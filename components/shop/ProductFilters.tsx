"use client"

import { useState } from "react"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg mb-4">Filter Products</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Categories</h4>
        <div className="space-y-2">
          <CategoryCheckbox label="Microsoft Office" count={25} />
          <CategoryCheckbox label="Operating Systems" count={19} />
          <CategoryCheckbox label="Windows Server" count={20} />
          <CategoryCheckbox label="Antivirus & Security" count={12} />
          <CategoryCheckbox label="Bundles" count={14} />
        </div>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Price Range</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-500">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="500" 
            className="w-full range range-sm range-primary"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>
      </div>
      
      {/* Availability */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Availability</h4>
        <div className="space-y-2">
          <CategoryCheckbox label="In Stock" count={90} />
          <CategoryCheckbox label="Out of Stock" count={10} />
        </div>
      </div>
      
      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Rating</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 checkbox checkbox-sm checkbox-primary" />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="text-yellow-400 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-slate-500">(32)</span>
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 checkbox checkbox-sm checkbox-primary" />
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="text-yellow-400 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="text-gray-300 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-sm text-slate-500">(16)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reset button */}
      <button className="btn btn-outline btn-sm w-full">Reset Filters</button>
    </div>
  )
}

function CategoryCheckbox({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2 checkbox checkbox-sm checkbox-primary" />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-xs text-slate-500">({count})</span>
    </div>
  )
} 