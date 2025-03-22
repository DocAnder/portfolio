import { Tecnologia } from "@core";
import Image from "next/image";

export interface TecnologiasProps{
    tecnologias: Tecnologia[]
    tamanhoMenor?: boolean
}

export default function Tecnologias(props: TecnologiasProps) {
    return props.tecnologias ? (
        <div className="flex justify-center gap-4 flex-wrap"> 
            {props.tecnologias.map((tecnologia) => (
                <div key={tecnologia.id} className="flex flex-col items-center gap-1">
                    <span 
                    className={`relative w-11 h-11 rounded-xl overflow-hidden
                        ${!props.tamanhoMenor && "sm:h-16 sm:w-16"}`
                    }>
                        <Image src={tecnologia.imagem} alt={tecnologia.nome} fill className="object-contain"/>
                    </span>
                    <span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
                </div>
            ))}
        </div>
    ) : null
}

