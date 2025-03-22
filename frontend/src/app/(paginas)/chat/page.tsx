"use client"
import useChat from "@/hooks/useChat"
import { useState } from "react"

export default function Page() {

    const { chatId, mensagens, adicionarMensagem, limparChat, pensando } = useChat()
    const [texto, setTexto] = useState("")

    return (
        <div>
            <h1>Chat</h1>
            <h2>Chat id: {chatId}</h2>
            <button onClick={limparChat}>Limpar</button>


            <ul>
                {mensagens.map((msg) => (
                    <li key={msg.id} className="flex gap-2">
                        <div>{msg.autor}</div>
                        <div>{msg.texto}</div>
                    </li>
                ))}
            </ul>

            {pensando && <div>Pensando...</div>}

            <input
            type="text"
            value={texto}
            className="border border-gray-300 rounded p-2"
            onChange={(e: any) => {
                setTexto(e.target.value)
            }}
            onKeyDown={(e: any) =>{
                if (e.key === "Enter"){
                    adicionarMensagem(texto)
                    setTexto("")
                }
            }}    
            />


        </div>
    )
}