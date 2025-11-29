import React, { useState } from 'react'

type Props = { initial?: string; onSearch: (q: string) => void; placeholder?: string }
export default function SearchBar({ initial = '', onSearch, placeholder = 'Pergunte alguma coisa' }: Props){
  const [q, setQ] = useState(initial)
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          onKeyDown={(e)=> e.key === 'Enter' && onSearch(q)}
          className="flex-1 outline-none px-2"
          placeholder={placeholder}
        />
      <button aria-label="Buscar" onClick={() => onSearch(q)} className="p-2">
        <img 
          src="/assets/Seta para cima.png" 
          alt="Buscar" 
          className="w-5 h-5" 
        />
      </button>
      </div>
    </div>
  )
}