'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Check if admin_token cookie exists
    const checkLoginStatus = () => {
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=')
        acc[key] = value
        return acc
      }, {})

      const hasAdminToken = cookies['admin_token'] === 'authenticated'
      
      // Only update login state and redirect if the state actually changed
      if (hasAdminToken !== isLoggedIn) {
        setIsLoggedIn(hasAdminToken)
        
        // Only redirect if not logged in and not on login page
        if (!hasAdminToken && pathname !== '/admin/login') {
          router.replace('/admin/login')
        }
        // Only redirect if logged in and on login page
        else if (hasAdminToken && pathname === '/admin/login') {
          router.replace('/admin/home')
        }
      }
    }

    checkLoginStatus()

    // Set up interval to check login status periodically
    const interval = setInterval(checkLoginStatus, 1000)

    return () => clearInterval(interval)
  }, [pathname, router, isLoggedIn]) // Add isLoggedIn to dependencies

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', {
        method: 'POST',
      })
      if (res.ok) {
        setIsLoggedIn(false)
        router.replace('/admin/login')
      }
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  //Don't show layout on login page
  if (pathname === '/admin/login') {
    return children
  }

  return (
    <div className="admin min-h-screen bg-gray-900">
      <nav className="fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link href="/" className="flex ml-2 md:mr-24">
                <Image src={logo} alt="logo" width={68} height={100} />
              </Link>
            </div>
           <div className="flex items-center">
              <button
                onClick={handleLogout}
                type="button"
                className="text-white bg-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="#" className={`flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group ${pathname === '/admin' ? 'bg-gray-700' : ''}`}>
                <svg className="w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/home" className={`flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group ${pathname === '/admin/home' ? 'bg-gray-700' : ''}`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/contact-us" className={`flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group ${pathname === '/admin/contact-us' ? 'bg-gray-700' : ''}`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us </span>
              </Link>
            </li>
            <li>
              <Link href="/admin/retailers" className={`flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group ${pathname === '/admin/retailers' ? 'bg-gray-700' : ''}`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Retailers</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/inhouse-warranty" className={`flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group ${pathname === '/admin/inhouse-warranty' ? 'bg-gray-700' : ''}`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inhouse Warranty</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/retailer-warranty" className={`flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group ${pathname === '/admin/retailer-warranty' ? 'bg-gray-700' : ''}`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5C3.346 4 2 5.346 2 7v2h20V7c0-1.654-1.346-3-3-3zM2 19c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8H2v8zm6-6h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Retailer Warranty</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 mt-14">
        {children}
      </div>
    </div>
  )
}
