'use client'

import React from 'react'
import Stories from '@/components/Stories'
import NewPost from '@/components/NewPost'
import Posts from '@/components/Posts'
import Recommendations from '@/components/Recommendations'

const HomePage = () => {
  // Handler functions
  const handlePost = (content) => {
    console.log('New post:', content)
    // Add your post creation logic here
  }

  const handleImageUpload = () => {
    console.log('Image upload clicked')
    // Add image upload logic
  }

  const handleCamera = () => {
    console.log('Camera clicked')
    // Add camera logic
  }

  const handleUserClick = (user) => {
    console.log('User clicked:', user)
    // Add navigation to user profile
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Stories Section */}
      <Stories />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-6">
        {/* Left Content - Post Creation and Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post Section */}
          <NewPost 
            onPost={handlePost}
            onImageClick={handleImageUpload}
            onCameraClick={handleCamera}
          />

          {/* Feed Area - Currently showing No Posts */}
          <Posts />
        </div>

        {/* Right Sidebar - Recommendations */}
        <div className="lg:col-span-1">
          <Recommendations onUserClick={handleUserClick} />
        </div>
      </div>
    </div>
  )
}

export default HomePage