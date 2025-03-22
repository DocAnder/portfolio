import Readme from "@/components/projetos/Readme"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import { getReadme } from "@/functions/github"
import { getProjeto } from "@/functions/projetos"

export default async function PaginaProjeto(props : {params : Promise<{id : string}>}) {

  const { id } = await props.params
  const projeto = await getProjeto(id)

  if (!projeto) return null

  const readme = await getReadme(projeto?.repositorio)

  return (
    <div className="bg-black">
      <Cabecalho />
      <Container className="py-7 flex flex-col gap-10 items-center">
        <h1 className="text-3xl font-bold">{projeto.nome}</h1>
          <CarrosselImagens imagens={projeto.imagens.slice(1)} />
          <Tecnologias tecnologias={projeto.tecnologias} tamanhoMenor />
          <Readme conteudo={readme} />
      </Container>
    </div>
  )
}