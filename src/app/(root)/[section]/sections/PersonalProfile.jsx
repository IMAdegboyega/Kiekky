'use client'
import React from 'react'
import Image from 'next/image'

export default function PersonalProfile() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-black p-4">
      {/* Top Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <Image src="/img/lady.png" alt="lady" width={80} height={80} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-bold">Elena Paul</h1>
              <p className="text-sm text-gray-500">@elena</p>
              <p className="text-sm">Nude? I sell NSFW. DM if you wanna talk.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Stealth mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-purple-500" />
            </label>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="px-4 py-2 rounded-lg border border-purple-500 text-purple-500">Edit Profile</button>
          <button className="px-4 py-2 rounded-lg bg-purple-500 text-white">Share</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white p-2 rounded-xl shadow-sm flex gap-4 text-sm mb-4">
        {['My Wall', 'Photos', 'Videos', 'Followers', 'Following', 'Subscribers'].map(tab => (
          <button key={tab} className="px-3 py-1 rounded-full hover:bg-purple-50 text-gray-700">
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="font-bold mb-2">Bio</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><b>Profession:</b> Data Analyst</li>
              <li><b>Language:</b> English</li>
              <li><b>Hobby:</b> Music</li>
              <li><b>Height:</b> 160cm</li>
              <li><b>City:</b> Lagos</li>
              <li><b>Age:</b> 20</li>
            </ul>
          </div>
        </div>

        {/* Main Feed */}
        <div className="col-span-12 md:col-span-9 space-y-4">
          {/* Post input */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <textarea className="w-full border border-gray-300 rounded-lg p-2 resize-none text-sm" placeholder="What's new..."></textarea>
            <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg text-sm float-right">Post it!</button>
          </div>

          {/* Post Card */}
          {[1, 2].map(post => (
            <div key={post} className="bg-white p-4 rounded-xl shadow-sm space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Image src="/icon/user.png" alt="User" width={40} height={40} className="rounded-full" />
                  <div>
                    <h3 className="font-semibold">Elena</h3>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
                <span className="text-gray-500">•••</span>
              </div>
              <p>I love how my tits look through this open top.</p>
              <Image src="/uploads/sample.jpg" alt="Post" width={500} height={500} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
