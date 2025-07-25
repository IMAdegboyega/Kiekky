'use client'

import Header from "@/components/Header"
import MobileSideBar from "@/components/MobileSideBar"
import SideBar from "@/components/SideBar"
import User from "@/components/User"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }
 
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
 
  return (
    <main className="w-screen h-screen bg-gray-50 text-black relative flex flex-col">
      {isSidebarOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          <MobileSideBar onClose={() => setIsSidebarOpen(false)}/>
        </>
      )}
      <Header openSidebar={() => setIsSidebarOpen(true)}/>
 
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar section */}
        <section className=" flex-col gap-4 hidden md:flex">
        <div className="pt-4 pl-16">
          <Link href="/PersonalProfile">
            <div className="cursor-pointer">
              <User />
            </div>
          </Link>
        </div>

          <div className="pl-16">
            <SideBar/>
          </div>
          
        </section>

        {/* Main content area - this is your red marked area */}
        <section className="flex-1 p-6 overflow-auto">
          {children}
        </section>
      </div>
    </main>
  )
}