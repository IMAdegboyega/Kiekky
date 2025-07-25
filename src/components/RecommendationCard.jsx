import React from 'react'
import { Bookmark, Check, Lock } from 'lucide-react'
import Image from 'next/image'

const RecommendationCard = ({ 
  image,
  name,
  isVerified = true,
  isSaved = false,
  showBookmark = true,  // New prop to control bookmark visibility
  showLockOnHover = false,  // New prop for members section
  size = 'default', // 'default' | 'large' for different sizing
  onClick = () => {},
  onSaveClick = () => {}
}) => {
  const handleSaveClick = (e) => {
    e.stopPropagation() // Prevent card click when clicking save
    onSaveClick()
  }

  // Dynamic sizing based on the size prop
  const sizeClasses = {
    default: 'w-42 h-40',
    large: 'w-full aspect-[4/5]'
  }

  return (
    <div 
      className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden cursor-pointer group`}
      onClick={onClick}
    >
      {/* Background Image */}
      {/* <Image
        src={image}
        alt={name} 
        width={600}
        height={500}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      /> */}

      <Image
        src="/img/lady.png"
        alt="lady" 
        width={600}
        height={500}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Bookmark Icon - Only show if showBookmark is true */}
      {showBookmark && (
        <div 
          className="absolute top-2 right-2 p-1.5 rounded cursor-pointer" 
          onClick={handleSaveClick}
        >
          <Bookmark 
            size={14} 
            className="w-6 h-6 text-white" 
            fill={isSaved ? "white" : "none"} 
          />
        </div>
      )}

      {/* Lock Icon Overlay - Only for members section */}
      {showLockOnHover && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3">
            <Lock size={24} className="text-gray-700" />
          </div>
        </div>
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />
      
      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm">
        <div className="p-3">
          <div className="flex items-center gap-1">
            <span className="text-white font-medium text-sm">
              {name}
            </span>
            {isVerified && (
              <div className="bg-green-500 rounded-full p-0.5">
                <Check size={10} className="text-white" strokeWidth={3} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard