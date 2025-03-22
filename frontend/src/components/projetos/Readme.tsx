import ConteudoMd from "../shared/ConteudoMd";

export interface ReadmeProps {
    conteudo: string;
}


export default function Readme({ conteudo }: ReadmeProps) {
    return (
        <div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
            <div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
                <ConteudoMd markdown={conteudo} />
            </div>
        </div>
    );
}