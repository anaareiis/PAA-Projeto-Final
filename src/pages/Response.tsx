import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ResponseCard from '../components/ResponseCard'
import { useLocation } from 'react-router-dom'
import { queryServer } from '../api/client'
import Modal from '../components/Modal'

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

export default function ResponsePage(){
  const q = useQuery().get('q') || ''
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    if(!q) return
    setLoading(true)
    queryServer(q).then((data)=>{
      setAnswer(data.answer)
      setLoading(false)
    }).catch(()=>setLoading(false))
  }, [q])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <aside className="w-20 bg-white h-[calc(100vh-64px)]" />
        <main className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow p-6 min-h-[70vh]">
            {loading ? <div>Carregando...</div> : <ResponseCard text={answer} />}
          </div>
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[70%]">
            <SearchBar initial={q} onSearch={(s)=> window.location.href = `/response?q=${encodeURIComponent(s)}`} />
          </div>
        </main>
      </div>
      {showModal && <Modal title="Excluído com sucesso!" message="O comentário foi removido corretamente." onClose={()=>setShowModal(false)} />}
    </div>
  )
}