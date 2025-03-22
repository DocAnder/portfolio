import Image from "next/image";

export default function MiniCV() {
    return (
        <div className="flex flex-1 lg:flex-col-reverse xl:flex-row bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            <div className="relative min-w-64 min-h-60 max-w-72 max-h-72">
                <Image src="/akira-foto.jpg" alt="Foto de perfil" fill/>
            </div>
            <div className="flex flex-col gap-5 self-center py-6">
                <div className="flex flex-col items-start">
                    <span className="
                    bg-gradient-to-r from-red-500 via-white to-white
                    text-transparent bg-clip-text text-2xl font-bold">Doc e Ray</span>
                    <span>Juntos pelo desenvolvimento aplicado</span>
                </div>
                <p className="text-sm text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, asperiores rerum aspernatur aut aperiam quae tempora amet reiciendis quo labore voluptate similique consequuntur earum voluptatem accusantium pariatur necessitatibus ipsa ab.
                </p>
            </div>
        </div>
    )
}

