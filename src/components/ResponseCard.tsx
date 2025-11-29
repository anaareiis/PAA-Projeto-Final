import React from 'react'

export default function ResponseCard({ text }: { text: string }){
  return (
    <div className="space-y-4 text-gray-800">
      {text ? (
        <div className="prose max-w-none">
          <p>{text}</p>
        </div>
      ) : (
        <div className="text-gray-500">Sem resposta.</div>
      )}
    </div>
  )
}