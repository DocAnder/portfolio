import { Tecnologia } from "@core";
import Cabecalho from "../shared/Cabecalho";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps{
    tecnologias: Tecnologia[]
}


export default function Principal(props: PrincipalProps) {
    return(
        <div className="
        flex flex-col items-center justify-center h-[500px]
        bg-[url('/principal.jpg')] bg-cover bg-center
        ">
            <Cabecalho />
            <div className="flex-1 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">UnderHigh</h1>
                <h2 className="text-zinc-500 text-center" >Frase descritiva da empresa</h2>
                <Tecnologias tecnologias={props.tecnologias} /> 
            </div>
        </div>
    )
}