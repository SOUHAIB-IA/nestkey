"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { StarIcon } from "lucide-react"

type Review = {
  id: number
  author: string
  rating: number
  date: string
  title: string
  content: string
  helpful: number
  verified: boolean
}

type ProductReviewsProps = {
  productId: number
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState<'reviews' | 'write-review'>('reviews')
  const [rating, setRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  
  // Mock reviews data
  const reviews: Review[] = [
    {
      id: 1,
      author: "Michael S.",
      rating: 5,
      date: "2023-11-15",
      title: "Excellent Product, Easy Activation",
      content: "I bought Windows 11 Pro and the activation was seamless. The product key worked perfectly and I had no issues during installation. Great value for the price!",
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      author: "Sarah L.",
      rating: 4,
      date: "2023-10-20",
      title: "Good Value, Minor Installation Issue",
      content: "The price is unbeatable for Office 2021. I had a small issue during installation but customer service responded quickly and helped resolve it. Works perfectly now.",
      helpful: 15,
      verified: true
    },
    {
      id: 3,
      author: "Robert K.",
      rating: 5,
      date: "2023-09-05",
      title: "Fast Delivery, Perfect Activation",
      content: "Received my key instantly after purchase. The activation process was straightforward and everything works as expected. Will definitely buy from here again.",
      helpful: 31,
      verified: true
    },
    {
      id: 4,
      author: "Jennifer T.",
      rating: 3,
      date: "2023-08-12",
      title: "Works but Documentation Could Be Better",
      content: "The product works fine but I wish there was more detailed documentation for the installation process. Had to figure some things out on my own.",
      helpful: 8,
      verified: true
    },
  ]
  
  // Calculate average rating
  const averageRating = reviews.length 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0
  
  // Count ratings by star value
  const ratingCounts = [0, 0, 0, 0, 0]
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[review.rating - 1]++
    }
  })
  
  // Render stars for ratings
  const renderStars = (rating: number, size: number = 16) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`h-${size/4} w-${size/4} ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'reviews' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'write-review' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('write-review')}
          >
            Write a Review
          </button>
        </div>
        
        <div className="h-px bg-gray-200 w-full"></div>
      </div>
      
      {activeTab === 'reviews' && (
        <div>
          {/* Reviews Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Average Rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-center mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="mb-2">
                {renderStars(averageRating, 24)}
              </div>
              <p className="text-gray-500 text-sm">
                Based on {reviews.length} reviews
              </p>
            </div>
            
            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = ratingCounts[star - 1]
                const percentage = reviews.length > 0 
                  ? Math.round((count / reviews.length) * 100) 
                  : 0
                
                return (
                  <div key={star} className="flex items-center gap-2">
                    <div className="flex items-center w-12">
                      <span className="text-sm">{star}</span>
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                    </div>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-10 text-sm text-gray-500">{count}</div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Review List */}
          <div className="space-y-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{review.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">
                          {review.rating}/5
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(review.date)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">{review.author}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.content}</p>
                  
                  <div className="flex items-center gap-2">
                    <button className="text-sm text-gray-500 flex items-center gap-1 hover:text-gray-700">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      Helpful ({review.helpful})
                    </button>
                    <span className="text-sm text-gray-300">|</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      Report
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No reviews yet.</p>
                <Button 
                  className="mt-4"
                  onClick={() => setActiveTab('write-review')}
                >
                  Be the first to review
                </Button>
              </div>
            )}
          </div>
          
          {/* Pagination (if needed) */}
          {reviews.length > 5 && (
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-50">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'write-review' && (
        <div>
          <h3 className="text-xl font-bold mb-6">Write a Review</h3>
          
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">
                Overall Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="text-2xl"
                  >
                    <StarIcon 
                      className={`h-8 w-8 ${
                        star <= (hoveredRating || rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="review-title" className="block mb-2 font-medium">
                Review Title <span className="text-red-500">*</span>
              </label>
              <input
                id="review-title"
                type="text"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Give your review a title"
              />
            </div>
            
            <div>
              <label htmlFor="review-content" className="block mb-2 font-medium">
                Review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="review-content"
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Write your review here. Consider aspects like installation experience, performance, value for money, etc."
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="review-name" className="block mb-2 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="review-name"
                type="text"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your name (will be displayed with your review)"
              />
            </div>
            
            <div>
              <label htmlFor="review-email" className="block mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="review-email"
                type="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your email (will not be displayed)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Your email will not be published. It may be used to verify your purchase.
              </p>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">review guidelines</a> and <a href="#" className="text-blue-600 hover:underline">terms of service</a>.
              </label>
            </div>
            
            <div>
              <Button type="submit" className="px-6">
                Submit Review
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
} 