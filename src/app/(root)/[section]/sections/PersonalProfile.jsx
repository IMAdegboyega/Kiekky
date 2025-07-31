'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import MyWall from '@/components/PersonalProfile/MyWall';
import Photos from '@/components/PersonalProfile/Photos';
import Videos from '@/components/PersonalProfile/Videos';
import Followers from '@/components/PersonalProfile/Followers';
import Following from '@/components/PersonalProfile/Following';
import Subscribers from '@/components/PersonalProfile/Subscribers';
import EditProfile from '@/components/PersonalProfile/EditProfile';

const PersonalProfile = () => {
  const [activeTab, setActiveTab] = useState('My Wall');
  const [isOnline, setIsOnline] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const tabs = ['My Wall', 'Photos', 'Videos', 'Followers', 'Following', 'Subscribers'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'My Wall':
        return <MyWall/>;
      case 'Photos':
        return <Photos/>;
      case 'Videos':
        return <Videos/>;
      case 'Followers':
        return <Followers/>;
      case 'Following':
        return <Following/>;
      case 'Subscribers':
        return <Subscribers/>;
      default:
        return <MyWall/>;
    }
  };
  
  const profileStats = {
    profession: 'Data Analyst',
    language: 'English', 
    hobby: 'Music',
    height: '5\'3"',
    city: 'Lagos',
    age: '20'
  };

  if (showEditProfile) {
    return <EditProfile onBack={() => setShowEditProfile(false)} />;
  }

  return (
    <div className="max-w-5xl mx-auto min-h-screen bg-gray-50 space-y-6">
      {/* Profile Header */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                  <Image 
                    src="/img/lady.png" 
                    alt="Profile" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                {isOnline && (
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-3 border-white"></div>
                )}
              </div>

              {/* Profile Info */}
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Elena Paul</h1>
                <p className="text-gray-500 text-sm">@elena</p>
                <p className="text-gray-700 mt-2">
                  Hello bro! DM nudies for you, DM if you wanna talk, selling contents, custom videos, Feeds, Bisexual, FreeEnds
                </p>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setShowEditProfile(true)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Online Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Online Mode</span>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  isOnline ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    isOnline ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto bg-gray-50 top-0 z-10">
        <div className="space-x-4">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full py-4 text-sm font-medium border-1 rounded-md transition-colors p-6 ${
                  activeTab === tab
                    ? 'text-blue-600 border-blue-600 bg-white'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Bio</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-500 text-sm">Profession</span>
                  <p className="text-gray-900">{profileStats.profession}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Language</span>
                  <p className="text-gray-900">{profileStats.language}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Hobby</span>
                  <p className="text-gray-900">{profileStats.hobby}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Height</span>
                  <p className="text-gray-900">{profileStats.height}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">City</span>
                  <p className="text-gray-900">{profileStats.city}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Age</span>
                  <p className="text-gray-900">{profileStats.age}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-12 lg:col-span-9">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile; 