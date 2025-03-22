import { Mensagem } from "@/model/Mensagem";
import ConteudoMd from "../shared/ConteudoMd";

export interface BalaoMensagemProps {
    mensagem: Mensagem
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
    return props.mensagem.lado === "esquerdo" ? (
        <BalaoEsquerdo {...props} />
    ) : (
        <BalaoDireito {...props} />
    )
}

// Lado do Assistente
function BalaoEsquerdo(props: BalaoMensagemProps) {
    return (
        <div className="flex flex-col">
            <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
            <div className="bg-black text-white px-7 py-4 rounded-r-3xl rounded-bl-3xl sm:w-80">
                <ConteudoMd markdown={props.mensagem.texto} />
            </div>
        </div>
    )
}

// Lado do Visitante
function BalaoDireito(props: BalaoMensagemProps) {
    return (
        <div className="flex flex-col items-end">
            <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
            <div className="bg-amber-600 text-white px-7 py-4 rounded-l-3xl rounded-br-3xl sm:w-80">{props.mensagem.texto}</div>
        </div>
    )    
}