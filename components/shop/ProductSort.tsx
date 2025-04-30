"use client"

import { useState } from "react"

export function ProductSort() {
  const [sortOption, setSortOption] = useState("featured")
  
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">
        Sort by:
      </label>
      <select 
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="select select-sm select-bordered w-full max-w-[200px]"
      >
        <option value="featured">Featured</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  )
} 