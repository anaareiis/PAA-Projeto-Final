import React from 'react'

export default function Header(){
  return (
    <header className="w-full p-4 flex items-center gap-4 bg-white shadow-sm">
      <img src="/assets/logo.png" alt="TurboAI" className="h-8" />
      <h1 className="text-lg font-medium">TurboAI</h1>
    </header>
  )
}