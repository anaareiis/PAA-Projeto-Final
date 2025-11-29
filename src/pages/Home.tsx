import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const navigate = useNavigate()
  const handleSearch = (q: string) => {
    navigate(`/response?q=${encodeURIComponent(q)}`)
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-20">
        <h2 className="text-center text-xl mb-6">O que você deseja saber hoje?</h2>
        <SearchBar onSearch={handleSearch} />
      </main>
    </div>
  )
}