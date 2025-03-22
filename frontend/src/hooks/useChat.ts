import { Id } from "@core";
import useLocalStorage from "./useLocalStorage";
import { Mensagem } from "@/model/Mensagem";
import ConversarAssistente from "@/functions/Chat";
import { useState } from "react";

export default function useChat() {
    const [chatId, setChatId] = useLocalStorage<string>("chatId", Id.gerar());
    const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", []);
    const [pensando,setPensando] = useState(false);

    async function adicionarMensagem(mensagem: string) {
        try {
            setPensando(true);
            const novaMensagem: Mensagem = {
                id: Id.gerar(),
                texto: mensagem,
                autor: "Visitante",
                lado: "direito",
                icone: null
            }
    
            setMensagens((msgs) => [...msgs, novaMensagem]);
    
            const respostaIa = await ConversarAssistente(chatId, novaMensagem);
    
            if(!respostaIa) return
    
            const mensagemResposta: Mensagem = {
                id: Id.gerar(),
                texto: respostaIa,
                autor: "Assistente",
                lado: "esquerdo",
                icone: null
            }
    
            setMensagens((msgs) => [...msgs, mensagemResposta]);            
        } finally {
            setPensando(false);
        }
    }

    function limparChat() {
        setMensagens([]);
    }

    return {
        chatId,
        mensagens,
        adicionarMensagem,
        limparChat,
        pensando
    }
}