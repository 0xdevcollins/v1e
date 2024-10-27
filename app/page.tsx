'use client'

import React from 'react'
import SearchBar from "@/components/ui/custom/searchbar"
import { Banner } from "@/shared/Banner"

export default function Home() {
  const handleSearch = (query: string) => {
    console.log('Home component - Searching for:', query)
  }

  return (
    <div className="">
      <div className='mb-5'>
        <SearchBar
          onSearch={handleSearch}
          avatarSrc="assets/logo.svg"
          avatarFallback="JD"
          notificationCount={12}
        />
      </div>
      <Banner name="Collins" />
    </div>
  )
}